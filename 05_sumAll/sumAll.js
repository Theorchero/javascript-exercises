const sumAll = function (num1, num2) {
  if (typeof num2 === "number" && typeof num1 == "number" && num1 + num2 >= 0) {
    if (num2 > num1) {
      console.log("num1 is " + num1);
      console.log("num2 is " + num2);
      console.log("Main fnc ran");
      n = num2 - num1 + 1;
      let total = (n * (num2 + num1)) / 2;
      console.log(total);
      return total;
    } else {
      console.log("num1 is " + num1);
      console.log("num2 is " + num2);
      console.log("alt func ran");
      n = num1 - num2 + 1;
      let total = (n * (num1 + num2)) / 2;
      console.log(total);
      return total;
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
