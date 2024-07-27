const removeFromArray = function(array, ...rest) {
    return array.filter(val => !rest.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
