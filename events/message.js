var prefix = '!';
const fs = require('fs')
const Discord = require('discord.js');
var { length } = prefix;



module.exports = {
    name: 'message',
    execute(message, client) {

        client = { "commands": new Discord.Collection() }

        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            client.commands.set(command.name, command);
        };

        const { content, author } = message;

        if (!content.startsWith(prefix) || author.bot) return;

        const args = content.slice(length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(message, args, client);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    },
};