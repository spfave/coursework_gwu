/*
Write a function that takes in a number and reverses the order of the digits.

Ex:
Input: 1234
Output:4321
Input: 1201
Output:1021
Input: 4
Output: 4
*/

/**
 * Uses string conversion to handle number order change
 * Handles positive and negative numbers
 */
function reverseNum(num) {
  let tNum = num;
  if (num < 0) tNum = -num;
  tNum = parseInt(tNum.toString().split("").reverse().join(""));
  if (num < 0) return -tNum;
  return tNum;
}

/**
 * Use modulus operator to maintain number as number
 * Currently handles positive numbers only
 */
// function reverseNum(num) {
//   let tNum = 0;
//   let lastDigit;
//   while (num > 0) {
//     lastDigit = mum % 10;
//     tNum = tNum * 10 + lastDigit;
//     num = parseInt(num / 10);
//   }
// }

console.log(reverseNum(1234));
console.log(reverseNum(-1201));
console.log(reverseNum(4));
