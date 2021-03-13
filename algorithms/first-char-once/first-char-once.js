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

function firstCharOnce(str) {
  strNoSpc = str.split(" ").join("");
  charCount = {};

  for (const char of strNoSpc) {
    if (!(char in charCount)) {
      charCount[char].count = 1;
      charCount[char].count = 1;
    } else {
      charCount[char].count++;
    }
  }

  return charCount;
}

// Double for loop solution
function firstCharOnce(str) {
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (currentChar === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return currentChar;
    }
  }
}

// Testing
let str = "the quick brown fox jumps over the calm kitten quietly";
console.log(firstCharOnce(str));

str = "this hat is the greatest!";
console.log(firstCharOnce(str));

str = "what a wonderful day it has been!";
console.log(firstCharOnce(str));
