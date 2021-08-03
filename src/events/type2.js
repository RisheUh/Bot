module.exports = {
    event: 'typingStop',
    run(channel, user) {
        console.log(`${user.tag} has stopped typing`);
    }
}