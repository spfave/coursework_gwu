// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function (arr, target) {
  for (const [index, val] of arr.entries()) {
    if (val === target) return index;
  }
  return -1;
};

// Testing
console.log(linearSearch([1, 2, 3, 4, 5], 4));
