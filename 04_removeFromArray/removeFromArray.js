const removeFromArray = function(array, ...itemsToRemove) {
    for (const item of itemsToRemove) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                array.splice(i, 1);
                break;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
