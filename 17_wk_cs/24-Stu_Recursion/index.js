// TODO: Add a comment describing what the `position` parameter means for this function.
// the nth position value in the Fibonacci sequence
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // Checks for a termination condition such that function call terminates recursive calls
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // Calculates the preceding Fibonacci sequence value and the twice preceding Fibonacci sequence value
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// The nth number in the Fibonacci sequence
console.log(fibonacci(3));
