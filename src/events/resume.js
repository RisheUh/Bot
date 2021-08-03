module.exports = {
    event: 'resume',
    run(replayed) {
        console.log(`whenever a WebSocket resumes, ${replayed} replays`);
    }
}