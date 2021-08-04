module.exports = {
    event: 'debug',
    run(e) {
        if (e.includes('Heartbeat acknowledged')) return console.info(`debug> ${e} \n`)
        console.info(`debug> ${e}`)
    }
};