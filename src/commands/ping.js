const { client } = require('../index')
module.exports = {
    name: 'ping',
    description: 'get\'s latency',
    aliases: [],
    usage: '',
    guildOnly: false,
    args: false,
    execute(message, args) {
        function sp(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        }

        var d = (message.createdTimestamp - client.ws.ping) - Date.now()

        if (d > 999) {
            message.channel.send(
                `Latency is ${sp(d)} s\nAPI Latency is ${Math.round(client.ws.ping)} ms`
            )
        } else {
            message.channel.send(`Latency is ${d}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        }
    },
};