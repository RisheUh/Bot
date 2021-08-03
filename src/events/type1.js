module.exports = {
    event: 'typingStart',
    run(channel, user) {
        console.log(`${user.tag} has started typing`);
    }
}