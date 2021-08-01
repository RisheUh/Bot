module.exports = {
    name: 'hello',
    description: 'hello!',
    execute(message, args) {
        console.log('Hello');
        message.channel.send('hello.');
    },
};