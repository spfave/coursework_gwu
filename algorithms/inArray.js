/*
Write a function that takes 2 parameters - the first is an array, the second is an element that may or may not be in the array.
Without using any built in array methods, return true if the element is in the array or false otherwise.
*/

// Function
function inArray(array, value) {
  for (const element of array) {
    if (element === value) return true;
  }
  return false;
}

// Testing
console.log(inArray([1, 2, 3], 1));
console.log(inArray([1, 2, 3], 4));
console.log(inArray(["code", "dev", "nerd"], "nerd"));
console.log(inArray(["code", "dev", "nerd"], "genius"));
