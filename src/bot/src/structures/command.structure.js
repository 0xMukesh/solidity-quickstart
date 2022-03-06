/**
 *
 * @param {Discord.Message | Discord.Interaction} msg
 * @param {string[]} args
 * @param {Client} client
 */

function RunFunction(msg, args, client) {}

class Command {
  name;
  aliases;
  description;
  run;

  constructor(options) {
    this.name = options.name;
    this.aliases = options.aliases;
    this.description = options.description;
    this.run = options.run;
  }
}

module.exports = Command;
