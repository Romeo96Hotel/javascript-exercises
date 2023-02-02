const add = function (num1, num2, ...numbers) {
  const total = numbers.reduce((a, b) => a + b, 0);
  return parseInt(num1 + num2 + total);
};

const subtract = function (num1, num2, ...numbers) {
  const total = numbers.reduce((a, b) => a - b, 0);
  return parseInt(num1 - num2 - total);
};

const sum = function (numbers) {
  let total;
  numbers.length === 0
    ? (total = 0)
    : ((total = numbers.reduce((a, b) => a + b)), 0);
  return total;
};

const multiply = function (numbers) {
  let total;
  numbers.length === 0
    ? (total = 0)
    : ((total = numbers.reduce((a, b) => a * b)), 0);
  return total;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let myArray = [];
  for (let i = 0; i < num; i++) {
    const indexes = num - i;
    myArray.push(indexes);
  }
  const factorized = myArray.reduce((a, b) => a * b, 1);
  return factorized;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
