
const fetch = require('node-fetch');

const gif = require("./commands/gif.js");
const Hello = require("./commands/Hello.js");

const commands = {
    Hello: function(args) {
        console.log('Hello');
    },
    gif: function(args) {
        console.log('gif');
    },
};

module.exports = async function (msg) {
    if (msg.channel.id == '840530547926630430') {
        let tokens = msg.content.split(' ');
        let command = tokens.shift();
        if (command.charAt(0) === '!') {
            // valid command!
            command = command.substring(1);
            // Hello or gif
            commands[command](tokens);
        }             
    }
};