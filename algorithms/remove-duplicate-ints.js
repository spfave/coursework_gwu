/**
 Write a function that takes in an array of integers and returns the array with duplicates removed

 Ex:
 Input: [1,2,2,3]
 Output: [1,2,3]
 Input: [4,5,4,4,7,5]
 Output: [4,5,7]
 Input: [1,2,3,5]
 Output: [1,2,3,5]
 */

/**
 * Look at every number in array and return first instance of a number in the array
 */
function removeIntDuplicates(arr) {
  // Using for of loop: checks if created empty array includes loop number and adds number if not in new array
  // noDuplicates = [];
  // for (const num of arr) {
  //   if (!noDuplicates.includes(num)) {
  //     noDuplicates.push(num);
  //   }
  // }

  // Using array filter method: checks if current number index is equal to the first found index of that number, returns number if true
  // const noDuplicates = arr.filter((num, index) => {
  //   if (index === arr.indexOf(num)) return num;
  // });
  // return noDuplicates;

  // Condensed
  return arr.filter((num, i) => {
    return i === arr.indexOf(num);
  });
}

// Testing:
console.log(removeIntDuplicates([1, 2, 2, 3]));
console.log(removeIntDuplicates([4, 5, 4, 4, 7, 5]));
console.log(removeIntDuplicates([1, 2, 3, 5]));
