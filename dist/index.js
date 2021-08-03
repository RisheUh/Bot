require("dotenv").config({ path: '../h.env' });
var Discord = require('discord.js')
var client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

async function loadit(client) {
    inquirer.prompt([{
        type: 'checkbox',
        name: 'Destroy',
        message: 'Destroy?',
        choices: ['Destroy', 'Restart'],
    }, ]).then(a => {
        if (a == 'Destroy') return client.destroy()
        await client.destroy()
        client.login(process.env.BOTTOKEN);
    });
}

require('fs').readdir('./events/', (err, files) => {
    const eventHandler = require('./handler/eventHandler.js');
    eventHandler(err, files, client);
});
require('fs').readdir('./commands/', (err, files) => {
    const commandHandler = require('./handler/commandHandler.js');
    commandHandler(err, files, client);
});


(async function() {
    await client.login(process.env.BOTTOKEN)
    client.user.setStatus('online')
    process.on('beforeExit', (code) => {
        loadit(client);
    })
})();

module.exports = { client, Discord };