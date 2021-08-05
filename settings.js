require('dotenv').config({ path: './setting/h.env' });

module.exports = {
    "testprefix": "test",
    "prefix": "!",
    "colors": {
        "default": "606C65",
        "error": "FF4500"
    },
    "id": process.env.id,
    "token": process.env.testbottoken,
    "BOTTOKEN": process.env.BOTTOKEN,
    "TENORKEY": process.env.TENORKEY,
    "testbottoken": process.env.testbottoken,
    "testchannelid": process.env.testchannelid,
    "owners": require('./setting/settings.unshow').owners
}