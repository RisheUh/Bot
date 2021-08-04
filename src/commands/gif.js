const fetch = require('node-fetch')
var limit = 8;



module.exports = {
    name: 'gif',
    description: 'query\'s a db',
    aliases: [],
    usage: '',
    guildOnly: false,
    args: true,
    execute: (message, args, client) => {

        //defaults to query being default if there is no query
        if (!args[0]) {
            args.push('default')
        }
        //default to G if there is no query at the end
        if (!args[1]) {
            args.push('high')
        };

        //host url (api)
        var host = 'https://g.tenor.com/v1/search?';
        //get everything like query/key/limit/filter
        var query = `${host}q=${args[0]}&key=${process.env.TENORKEY}&limit=${limit}&contentfilter=${args[1]}`;
        //gets a random number to get different gif in the same query
        const index = Math.floor(Math.random() * limit);

        //fetches the above url
        fetch(query).then(data => res.json()).then(data => {
            //gets the url of the query
            const now = data.results[index].url;

            //sends it to discord
            message.channel.send(now)
        })


    },
};