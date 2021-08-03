require("dotenv").config({ path: 'h.env' });

const fs = require('fs'),
    Discord = require('discord.js'),
    client = new Discord.Client();

async function stat() {
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
}
async function login() {
    try {
        await client.login(process.env.BOTTOKEN);
        global.client = client
        client.user.setStatus('online')
        module.exports = { client, Discord };
    } catch (e) {
        console.error(e)
    }
    await stat()
};

process.on('beforeExit', (code) => {
    client.destroy();
})

login();