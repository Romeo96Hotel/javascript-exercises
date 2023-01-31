const sumAll = function (intA, intB) {
  let num;

  if (intA === NaN) num = "ERROR";

  if (intA > intB) {
    for (i = 0; i <= intA; i++) {
      num += i;
    }
  } else {
    for (i = 0; i <= intB; i++) {
      num += i;
    }
  }
  return num;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
