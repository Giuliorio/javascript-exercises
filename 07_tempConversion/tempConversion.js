function roundToOneDec(number) {
  return Math.round(number * 10) / 10
}

const convertToCelsius = function(farenheight) {
  return roundToOneDec((farenheight - 32) * 5/9)
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
