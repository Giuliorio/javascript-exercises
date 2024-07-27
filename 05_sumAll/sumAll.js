const sumAll = function(first, last) {
    const sum = (smaller, larger) => {
        let sum = 0;

        for (let i = smaller; i <= larger; i++) {
            sum += i;
        }

        return sum;
    }

    if (first < 0 || last < 0) return "ERROR"
    if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR"
    
    if (first < last) return sum(first, last);
    else return sum(last, first);
};

// Do not edit below this line
module.exports = sumAll;
