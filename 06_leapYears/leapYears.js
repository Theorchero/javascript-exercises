// const leapYears = function (number) {
//   console.log(number);
//   console.log(number % 4);
//   if (number % 4 == 0) {
//     //divided by 4
//     if (number % 100 == 0) {
//       if (number % 400 == 0) {
//         return true; //Divisible by 4, 100, and 400
//       }
//     } else {
//       return false; //Divisible by 100 but not 400
//     }
//   } else {
//     return false; //not divisible by 4
//   }
// };

const leapYears = function (number) {
  if (number % 4 == 0) {
    if (number % 100 == 0 && number % 400 != 0) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
