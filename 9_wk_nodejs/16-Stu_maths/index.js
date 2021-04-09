// TODO: Import `maths.js`
const math = require("./maths");

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

if (process.argv.length > 2) {
  const numOne = parseInt(process.argv[2]);
  const numTwo = parseInt(process.argv[4]);
  const operation = process.argv[3];
  let method;

  switch (operation) {
    case "+":
      method = math.sum;
      break;
    case "-":
      method = math.difference;
      break;
    case "*":
      method = math.product;
      break;
    case "/":
      method = math.quotient;
      break;

    default:
      break;
  }

  if (method) {
    const result = method(numOne, numTwo);
    console.log(`${numOne} ${operation} ${numTwo} = ${result}`);
  } else {
    console.warn("non-valid math operation");
  }
}
