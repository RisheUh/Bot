require("dotenv").config({ path: '../h.env' });

const fs = require('fs'),
    Discord = require('discord.js'),
    client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./events/', (err, files) => {
    const eventHandler = require('./handler/eventHandler.js');
    eventHandler(err, files, client);
});
fs.readdir('./commands/', (err, files) => {
    const commandHandler = require('./handler/commandHandler.js');
    commandHandler(err, files, client);
});

client.login(process.env.BOTTOKEN);

process.on('beforeExit', (code) => {
    client.destroy();
})

module.exports = { client, Discord };