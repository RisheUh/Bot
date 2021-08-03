module.exports = {
    name: 'ping',
    description: 'get\'s latency',
    aliases: [],
    usage: '',
    guildOnly: false,
    args: false,
    execute(message, args) {
        message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    },
};