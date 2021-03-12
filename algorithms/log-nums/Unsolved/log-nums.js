// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

/* 
Plan:
Use a for loop incremented by 1 per loop and console.log to write out the loop iterator value per loop. 
- start loop at incrementor at 1, assume input of 0 is not considered positive

*/

var logNums = function (num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
