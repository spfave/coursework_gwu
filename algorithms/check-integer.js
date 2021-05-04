// Write a function that takes in an input and returns true if it’s an integer and false otherwise.

function isInteger(input) {
  // Check type and number equivalency using === and rounding input down to whole number
  return input === Math.floor(input);

  // Use parseInt function
  // return input === parseInt(input);

  // Using built in JS isInteger method
  // return Number.isInteger(input);
}

// Testing
console.log(isInteger("test"));

console.log(isInteger("17"));

console.log(isInteger(17));

console.log(isInteger(17.5));
