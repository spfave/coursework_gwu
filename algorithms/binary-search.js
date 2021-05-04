/**
 * Create binary search function
 * https://en.wikipedia.org/wiki/Binary_search_algorithm
 * log(n) time operation
 */

//
function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let middle = Math.floor((high + low) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] > target) {
      high = middle - 1;
    } else if (array[middle] < target) {
      low = middle + 1;
    }
  }

  return -1;
}

// Testing
const arr = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 8));
