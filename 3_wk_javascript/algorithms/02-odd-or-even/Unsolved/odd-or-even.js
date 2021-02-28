// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

/* 
Plan:
Use the modulus operator to determine if reminder after division by 2 is 0 or 1
- result of 0 indicates an even number
- result of 1 indicates an odd number
Run result through conditional statement to return "even" or "odd"
 */

var oddOrEven = function (num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
