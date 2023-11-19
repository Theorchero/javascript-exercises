const convertToCelsius = function (number) {
  number = ((number - 32) * 5) / 9;
  let result = Math.round(number * 10) / 10;
  return result;
};

const convertToFahrenheit = function (number) {
  number = (number * 9) / 5 + 32;
  let result = Math.round(number * 10) / 10;
  return result;
};

// F from C
//x °C ≘ (x × 9/5 + 32) °F

//C from F
//x °F ≘ (x − 32) × 5/9 °C

//Round down
//let result = Math.round(number*10)/10;
//return result

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
