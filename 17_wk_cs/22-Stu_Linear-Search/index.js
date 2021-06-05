const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
  for (const [index, value] of array.entries()) {
    if (value === element) return index;
  }
  return -1;
};

module.exports = { linearSearch };
