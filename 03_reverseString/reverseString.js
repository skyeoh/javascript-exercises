const reverseString = function(inputString) {
    let outputString = '';
    const arrayChar = inputString.split('');
    while (arrayChar.length > 0) {
        outputString += arrayChar.pop();
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
