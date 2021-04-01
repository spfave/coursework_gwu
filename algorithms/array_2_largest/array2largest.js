/*
Given an input array of numbers, return an array of the two largest numbers

Ex: for an input array: [4, 20, -1, 22, 13, 12, 55], it should return [55, 22]
 */

function array2largest(arr) {
  // Using for loop to cycle through array numbers
  // let largest2Nums = [null, null];
  // for (const num of arr) {
  //   if (num > largest2Nums[1]) {
  //     largest2Nums.pop();
  //     largest2Nums.unshift(num);
  //   }
  // }

  // Using sort method to sort in numbers in decreasing order, and splice to get leading two numbers
  const largest2Nums = arr
    .sort((a, b) => {
      return b - a;
    })
    .splice(0, 2);

  return largest2Nums;
}

// Testing
console.log(array2largest([4, 20, -1, 22, 13, 12, 55]));
