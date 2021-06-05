const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
  for (const [index, value] of array.entries()) {
    if (value === element) return index;
  }
  return -1;
};

// const linearSearch = (array, element) =>
//   array.findIndex((arrayItem) => arrayItem === element);
// const linearSearch = (array, element) => array.indexOf(element);

module.exports = { linearSearch };

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(linearSearch(testArray, 7));
