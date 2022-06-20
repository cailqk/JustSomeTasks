function numOnPower(x) {
  return function (y) {
    return Math.pow(x, y)
  };
}

console.log(numOnPower(2)(3));
console.log(numOnPower(4)(3));
console.log(numOnPower(2)(2));
