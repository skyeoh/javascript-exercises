const repeatString = function(inputString, num) {
    let outputString = (num < 0) ? 'ERROR' : '';
    for (let i = 0; i < num; i++) {
        outputString += inputString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
