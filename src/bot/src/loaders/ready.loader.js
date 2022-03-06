const fs = require('fs')

const mongo = require('./mongo.loader.js')
const constants = require('../data/constants.data.js')

module.exports = (client) => {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      return;
    }

    console.log(`${client.user.username} is online`);
  });

  mongo(process.env.MONGODB_URL)

  fs.readdirSync(constants["commandDirectory"])
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      const command = require(`../commands/${file}`)
      console.log(`Command ${command.name} loaded!`);
      client.commands?.set(command.name, command);
      command.aliases.forEach((alias) => {
        client.aliases?.set(alias, command.name);
      });
    });

  fs.readdirSync(constants["eventDirectory"])
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      const event = require(`../events/${file}`);
      client.on(event.name, (...args) => event.run(...args));
    });

  client.login(process.env.TOKEN);
};
