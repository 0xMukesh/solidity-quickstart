const constants = require("../data/constants.data.js");

const PREFIX = constants["prefix"];

module.exports = {
  name: "messageCreate",
  run(msg) {
    if (!msg.content.startsWith(PREFIX)) return;
    let content = msg.content.toLowerCase();
    const args = content.slice(PREFIX.length).trim().split(/ +/g);

    if (args[0] == "") return;

    const command = msg.client.commands.find(
      (cmd) =>
        cmd.name == args[0] || msg.client.aliases.get(args[0]) == cmd.name
    );

    if (command) {
      command.run(msg, args, msg.client);
      return;
    }
  },
};
