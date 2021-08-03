require("dotenv").config({ path: 'h.env' });

const fs = require('fs'),
    Discord = require('discord.js'),
    client = new Discord.Client();

async function stat() {
    const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const event = require(`./events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
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