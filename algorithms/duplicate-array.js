/* 
Write a function that takes an array of integers as an input and outputs the first duplicate.

Ex:
Input: [ 2, 5, 6, 3, 5 ]
Output: 5
Input: [ 1, 3, 4, 1, 3, 4 ]
Output: 1
Input: [ 2, 4, 5 ]
Output: undefined
*/

/**
 * Loop over entries (int's) in array. For each loop check if current int has been found in the
 * array before. If current entry is new add to list of unique found ints, if current entry already
 * exists in list of unique ints return that integer as a duplicate. If no duplicates found return
 * undefined.
 */
function duplicate_int(arr) {
  const found = [];

  for (const int of arr) {
    if (found.includes(int)) {
      return int;
    }
    found.push(int);
  }
  return undefined;
}

// Testing
console.log(duplicate_int([2, 5, 6, 3, 5]));
console.log(duplicate_int([1, 3, 4, 1, 3, 4]));
console.log(duplicate_int([2, 4, 5]));
