const repeatString = function (string, num) {
  let greeting = string;
  let number = num;
  let newGreeting;

  if (num < 0) {
    newGreeting = "ERROR";
  } else {
    newGreeting = greeting.repeat(number);
  }

  return newGreeting;
};

const greeting = "hey";
let number;

console.log(repeatString(greeting, number));

// Do not edit below this line
module.exports = repeatString;
