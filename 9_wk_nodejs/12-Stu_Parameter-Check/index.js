// Retrieve terminal input arguments
const args = process.argv;
console.log(args);

const arg1 = args[2];
const arg2 = args[3];

// Compare input argument values
console.log(arg1 === arg2);
