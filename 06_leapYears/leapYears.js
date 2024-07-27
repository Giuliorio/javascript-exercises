const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    if (!isYearDivisibleByFour) return false
    if (isCentury && !isYearDivisibleByFourHundred) return false

    return true
};

// Do not edit below this line
module.exports = leapYears;
