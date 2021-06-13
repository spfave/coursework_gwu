// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  if (!Number.isInteger(num) || num < 0)
    return 'Input must be a positive integer';

  let value = 1;
  for (let m = num; m > 1; m--) value *= m;

  return value;
};
