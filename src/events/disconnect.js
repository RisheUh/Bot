module.exports = {
    event: 'disconnect',
    run(e) {
        console.log(`The WebSocket has closed and will no longer attempt to reconnect`);
    }
};