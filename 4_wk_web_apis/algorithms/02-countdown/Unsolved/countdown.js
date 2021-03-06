// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

/**
 * Solution 1:
 * Using for loop: Starting from num console log value and decrement iterator
 * value by 1 per loop till iterator reaches zero
 */
// var countdown = function (num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
// };

/**
 * Solution 2:
 * Using while loop: while passed num variable is greater than 0 console log
 * num. Function decrements num value per loop iteration using num-- in-line with
 * console log statement.
 */
var countdown = function (num) {
  while (num > 0) {
    console.log(num--);
  }
};
