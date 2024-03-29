const convertToCelsius = function(farenheitInput) {

  let celsiusConversion = (farenheitInput - 32) * 5/9;
  return Math.round(celsiusConversion * 10) / 10;
};

const convertToFahrenheit = function(celsiusInput) {
  let farnheitConversion = (celsiusInput * 9/5) + 32;
  return Math.round(farnheitConversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
