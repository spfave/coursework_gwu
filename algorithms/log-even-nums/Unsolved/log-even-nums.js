// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

/**
 * Solution 1
 * Starting from 0 increment by 1 and check if the increment is an even number
 * using the modulus operator.
 */
// var logEvenNums = function (num) {
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// };

/**
 * Solution 2
 * Starting from 0 increment by 2 and console log the increment value
 */
var logEvenNums = function (num) {
  for (let i = 0; i <= num; i += 2) {
    console.log(i);
  }
};
