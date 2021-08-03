module.exports = {
    event: 'reconnecting',
    run() {
        console.warn(`client tries to reconnect to the WebSocket`)
    },
};