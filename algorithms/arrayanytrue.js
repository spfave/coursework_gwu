/*
Write a function that takes an array of numbers and a function as parameters. 
The function parameter should return true if the input meets a certain condition 
or false otherwise. Your function should return true if the function parameter 
returns true for _any_ of the array elements in the array parameter or false otherwise. 
 */

function arrayAnyTrue(array, func) {
  for (const entry of array) {
    if (func(entry)) return true;
  }
  return false;
}

// Testing
const array1 = [1, 2, 3];
const func1 = (num) => num === 2;
console.log(arrayAnyTrue(array1, func1));

const array2 = [1, 2, 3, 4, 5, 6];
const func2 = (num) => num % 2 === 0;
console.log(arrayAnyTrue(array2, func2));

const array3 = [1, 2, 3, 4, 5, 6];
const func3 = (num) => num > 6;
console.log(arrayAnyTrue(array3, func3));
