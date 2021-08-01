const fetch = require('node-fetch')
var limit = 8;
module.exports = {
    name: 'gif',
    description: 'gif!',
    async execute(message, args) {
        var host = 'https://g.tenor.com/v1/search?'
        var query = `${host}q=${args[0]}&key=${process.env.TENORKEY}&limit=${limit}`
        const res = await fetch(query);
        const data = await res.json();
        const index = Math.floor(Math.random() * limit);
        const now = data.results[index].media[0].gif.url;
        message.channel.send(now)
    },
};