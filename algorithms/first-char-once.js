/**
 * Write a function that takes in a string and outputs the first occurrence of a character that 
 * does not repeat itself in that string.
    Ex:
    Input: "the quick brown fox jumps over the calm kitten quietly"
    Output: "b"
    Input: "this hat is the greatest!"
    Output: "g"
    Input: "what a wonderful day it has been!"
    Output: "o"
 */

// Solution implementing indexOf to eliminate second for-loop
function firstCharOnce(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "_";
}

// Double for-loop solution without repeated checks
// function firstCharOnce(str) {
//   const strNoSpc = str.split(" ").join("");
//   const charChecked = [];

//   for (let i = 0; i < strNoSpc.length; i++) {
//     const currentChar = strNoSpc[i];
//     if (!charChecked.includes(currentChar)) {
//       let count = 1;
//       for (let j = i + 1; j < strNoSpc.length; j++) {
//         if (currentChar === strNoSpc[j]) {
//           count++;
//         }
//       }
//       if (count === 1) {
//         return currentChar;
//       } else {
//         charChecked.push(currentChar);
//       }
//     }
//   }
// }

// Double for-loop solution with repeated checks
// function firstCharOnce(str) {
//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[i];
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (currentChar === str[j]) {
//         count++;
//       }
//     }
//     if (count === 1) {
//       return currentChar;
//     }
//   }
// }

// Testing
let str = "the quick brown fox jumps over the calm kitten quietly";
console.log(firstCharOnce(str));

str = "this hat is the greatest!";
console.log(firstCharOnce(str));

str = "what a wonderful day it has been!";
console.log(firstCharOnce(str));
