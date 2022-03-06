const dotenv = require("dotenv");

const Client = require("./structures/client.structure.js");
const ready = require("./loaders/ready.loader.js");

dotenv.config();

console.log("Bot is starting...");

const client = new Client();

ready(client);
