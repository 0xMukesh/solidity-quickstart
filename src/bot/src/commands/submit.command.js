const Discord = require("discord.js");
const ethers = require("ethers");

const Command = require("../structures/command.structure.js");
const User = require("../models/user.model.js");
const attachIsImage = require("../lib/attachIsImage.lib.js");
const constants = require("../data/constants.data.js");
const theme = require("../data/theme.data.js");
const emoji = require("../data/emoji.data.js");
const sdk = require("../scripts/init-sdk.script.js");

const tokenModule = sdk.getTokenModule(constants["contractAddress"]);

module.exports = new Command({
  name: "submit",
  aliases: [],
  description: "Submits the challenge",

  async run(msg, args, client) {
    const sendToken = async (sendTarget) => {
      console.log("Sending token to " + sendTarget);
      await tokenModule
        .transferBatch(sendTarget)
        .then(() => {
          console.log("Token sent");
        })
        .catch((err) => {
          console.log("err", err);
        });
    };

    // Checking whether the channel is the correct channel via the channel ID
    if (msg.channel.id === constants["submitChannel"]) {
      // Checking if there are any attachments at all in the message.
      if (msg.attachments.size > 0) {
        // Verifying that each attachment is either jpg or png
        if (msg.attachments.every(attachIsImage)) {
          // Checking if that user exists in the database
          User.countDocuments({ id: msg.author.id }, function (err, count) {
            if (count > 0) {
              // Incrementing the number of coins by 1
              User.findOne({ id: msg.author.id }, async (err, response) => {
                if (err) {
                  const embed = new Discord.MessageEmbed()
                    .setColor(theme["error"])
                    .setDescription(
                      `${emoji["sadge"]} Oh no.. We are facing some error.\n\`\`\`${err}\`\`\``
                    );
                  msg.reply({ embeds: [embed] });
                } else {
                  const embed = new Discord.MessageEmbed()
                    .setColor(theme["success"])
                    .setDescription(
                      `${emoji["swag"]} Congrats on completing the challenge. Here's 1 Xsol for you for completing the challenge ${emoji["pog"]}`
                    );
                  msg.reply({ embeds: [embed] });
                  const address = response["address"];
                  const sendTarget = [
                    {
                      address,
                      amount: ethers.utils.parseUnits("1", 18),
                    },
                  ];

                  console.log(`🌈 Sending Xsol to ${response["address"]}`);
                  sendToken(sendTarget);
                }
              });
            } else {
              // As the user isn't their in the database, this means that he hasn't configured his/her wallet address.

              const embed = new Discord.MessageEmbed()
                .setColor(theme["error"])
                .setDescription(
                  `${emoji["sadge"]} We are trying to send you some xsol but we couldn't find your wallet address. Run \`-config\` command along with your wallet address.\nFor example: \`-config 0x07CD6e5F4E7429313669146bb1c32a644cc600af\``
                );
              msg.reply({ embeds: [embed] });
            }
          });
        } else {
          const embed = new Discord.MessageEmbed()
            .setColor(theme["error"])
            .setDescription(
              `${emoji["sadge"]} Found an unsupported file format`
            );
          msg.reply({ embeds: [embed] });
        }
      } else {
        const embed = new Discord.MessageEmbed()
          .setColor(theme["error"])
          .setDescription(
            `${emoji["bonk"]} I need some kind of proof of work so that I can give you xsol`
          );
        msg.reply({ embeds: [embed] });
      }
    } else {
      const embed = new Discord.MessageEmbed()
        .setColor(theme["blurple"])
        .setDescription(
          `\`-submit\` command can only be used in <#${constants["submitChannel"]}>`
        );
      msg.reply({ embeds: [embed] });
    }
  },
});
