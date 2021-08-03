module.exports = {
    event: 'error',
    run(e) {
        console.warn(`error> ${e}`)
    }
}