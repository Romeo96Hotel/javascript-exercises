const sumAll = function (intA, intB) {
  let num;

  if (intA === NaN) num = "ERROR";

  if (intA > intB)
    for (i = 0; i <= intA; i++) {
      num += i;
    }

  for (i = 0; i <= intB; i++) {
    num += i;
  }

  return num;
};

// Do not edit below this line
module.exports = sumAll;
