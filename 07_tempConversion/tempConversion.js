const convertToCelsius = function(tempF) {
    const tempC = (tempF - 32) * 5 / 9;
    return Math.round(tempC * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
    const tempF = 32 + 9 / 5 * tempC;
    return Math.round(tempF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
