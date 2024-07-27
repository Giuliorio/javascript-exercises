function roundToOneDec(number) {
  return Math.round(number * 10) / 10
}

const convertToCelsius = function(farenheight) {
  return roundToOneDec((farenheight - 32) * 5/9)
};

const convertToFahrenheit = function(celcius) {
  return roundToOneDec((9/5) * celcius + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
