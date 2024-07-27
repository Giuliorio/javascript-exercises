const repeatString = function(string, num) {
    if (num < 0) return 'ERROR'

    let value = '';
    for (let i = 0; i < num; i++) {
        value += string;
    }
    return value
};

// Do not edit below this line
module.exports = repeatString;
