const erorrs = [];
const template = {
    "line": 00,
    "message": 'default'
};

const msg = [
    'Handler problem template != input'
]

module.exports = {
    add: (json) => {
        var keyi = Object.keys(json);
        var keyc = Object.keys(template);
        if (!keyi == keyc) return console.error(msg);
        erorrs.push(keyi);
        console.log('error found plese check');
    },
    read: () => {
        console.log(erorrs)
    }
}