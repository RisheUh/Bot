module.exports = {
    event: 'ready',
    once: true,
    run(client) {
        client.user.setActivity(`${client.guilds.cache.size} servers`, { type: 'LISTENING' });
        console.log('👋');
    },
};