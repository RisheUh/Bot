module.exports = {
    event: 'warn',
    run(e) {
        console.warn(`warn> ${e}`)
    }
}