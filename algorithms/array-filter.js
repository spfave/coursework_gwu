/*
Write a function that takes an array of numbers and a function as parameters. The function parameter should return 
true if the input meets a certain condition or false otherwise. Your function should run the function parameter on every 
element in the array parameter and , if it returns true, add the element to a new array. Return the new array.

Ex:
Input: [1,2,3]  function(num){return num === 2}
Output: [2]

Input: [1,2,3,4,5,6]  function(num){return num % 2 === 0}
Output: [2,4,6]

Input: [1,2,3,4,5,6]  function(num){return num > 3}
Output: [4,5,6]
*/

function arrayFilter(array, func) {
  // const arrayFilter = [];
  // for (const num of array) {
  //   if (func(num)) arrayFilter.push(num);
  // }
  // return arrayFilter;

  return array.filter((num) => func(num));
}

// Testing
const array1 = [1, 2, 3];
const func1 = (num) => num === 2;
console.log(arrayFilter(array1, func1));

const array2 = [1, 2, 3, 4, 5, 6];
const func2 = (num) => num % 2 === 0;
console.log(arrayFilter(array2, func2));

const array3 = [1, 2, 3, 4, 5, 6];
const func3 = (num) => num > 3;
console.log(arrayFilter(array3, func3));
