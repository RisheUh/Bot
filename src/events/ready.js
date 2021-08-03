module.exports = {
    event: 'ready',
    once: true,
    run(client) {
        client.user.setActivity(`on ${client.guilds.cache.size} servers`);
        console.log('Bot on!');
    },
};