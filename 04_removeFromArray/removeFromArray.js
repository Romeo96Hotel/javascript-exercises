const removeFromArray = function (...args) {
  const myArray = args[0];
  let newArray = [];

  myArray.forEach((element) => {
    if (!args.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
