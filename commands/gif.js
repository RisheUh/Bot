module.exports = {
    name: 'gif',
    description: 'gif!',
    execute(message, args) {
        console.log('gif');
        message.channel.send('gif.');
    },
};