const Discord = require('discord.js');
const web3 = require('web3');

const Command = require('../structures/command.structure.js')
const User = require('../models/user.model.js')
const theme = require('../data/theme.data.js')
const emoji = require('../data/emoji.data.js')

module.exports = new Command({
  name: "config",
  aliases: ["wallet"],
  description: "Configure your wallet address",

  async run(msg, args, client) {
    if (args.length < 2) {
      const embed = new Discord.MessageEmbed()
        .setColor(theme["error"])
        .setDescription(`${emoji["bonk"]} Insufficient number of arguments`)

      msg.reply({ embeds: [embed] })
    }
    else if (args.length > 2) {
      const embed = new Discord.MessageEmbed()
        .setColor(theme["error"])
        .setDescription(`${emoji["bonk"]} Wrong number of arguments`)

      msg.reply({ embeds: [embed] })
    }
    else {
      if (web3.utils.isAddress(args[1])) {
        User.findOne({ address: args[1] }, (err, response) => {
          if (err) {
            const embed = new Discord.MessageEmbed()
              .setColor(theme["error"])
              .setDescription(`${emoji["sadge"]} Oh no.. We are facing some error.\n\`\`\`${err}\`\`\``)
            msg.reply({ embeds: [embed] })
          }
          else {
            if (response === null) {
              const user = User({
                id: msg.author.id,
                address: args[1],
                isConfigured: true
              })

              user.save((err, response) => {
                if (err) {
                  const embed = new Discord.MessageEmbed()
                    .setColor(theme["error"])
                    .setDescription(`${emoji["sadge"]} Oh no.. We are facing some error.\n\`\`\`${err}\`\`\``)
                  msg.reply({ embeds: [embed] })
                }
                else {
                  const embed = new Discord.MessageEmbed()
                    .setColor(theme["success"])
                    .setDescription(`${emoji["swag"]} You have successfully configured your wallet address`)
                  msg.reply({ embeds: [embed] })
                }
              })
            }
          }
        })
      }
      else {
        const embed = new Discord.MessageEmbed()
          .setColor(theme["error"])
          .setDescription(`${emoji["bonk"]} I am sure that isn't an Ethereum wallet address. If you think this was a mistake, ping the team members`)
        msg.reply({ embeds: [embed] })
      }
    }
  },
});
