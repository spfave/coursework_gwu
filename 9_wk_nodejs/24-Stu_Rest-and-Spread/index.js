// Exercise 1
const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];

// TODO: Which operator is being used here?
// Spread operator, creates new copy
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got']
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // Takes a 'reducer' callback function on each element to return a single value
  /**
   * input format: arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
   * accumulator is result of previous loop through array, can provide initial value
   * currentValue is current array loop object value
   */
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
// result = 6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// Rest operator:
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
// result = 6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// result = 110
console.log(additionSpread(1, 2, 3, 4, 100));
