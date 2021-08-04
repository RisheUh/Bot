const { client } = require('../index')
module.exports = {
    name: 'time',
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

        var d = (message.createdTimestamp - client.ws.ping) - Date.now();
        var pingn = Math.round(client.ws.ping)

        if (d > 999 || pingn > 999) return message.channel.send(
            `Latency is ${sp(d)}s\nAPI Latency is ${pingn} ms`
        )
        message.channel.send(
            `Latency is ${d}ms. API Latency is ${pingn}ms`
        );

    },
};