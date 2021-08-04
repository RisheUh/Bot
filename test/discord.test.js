//stores all var in .env
require('dotenv').config();

//start bot
require('../src/index');

//require discord.js(v12)
const { Client, Collection } = require('discord.js');
const client = new Client();
client.commands = new Collection();
const { on, login, channels, commands } = client;

//get's required var
const {
    testchannelid,
    testbottoken
} = process.env;
const prefix = 'test'

on('ready', () => {
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }
});




login(testbottoken)