module.exports = {
    name: 'ping',
    description: 'just for testing',
    aliases: ['p'],
    usage: '',
    guildOnly: false,
    args: false,
    execute: (message) => {
        message.reply('pong');
    },
};