module.exports = {
    name: 'test',
    description: 'Just a test command',
    aliases: [],
    usage: '',
    guildOnly: false,
    args: false,
    execute: (message, args, client) => {
        message.reply('this is the test command');
    },
};