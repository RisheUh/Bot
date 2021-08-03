module.exports = {
    event: 'messageDelete',
    run(message) {
        console.info(`Deleted> ${message}`)
    }
}