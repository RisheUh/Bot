const childprocess = require('child_process');

async function exportit() {
    setInterval(() => {
        childprocess.exec(`npm install`);
    }, 3600000);
}

module.exports = exportit