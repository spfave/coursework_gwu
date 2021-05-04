/**
 * Write a function that takes in a single word as a string and returns true if it's a
 * palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).
 */

/**
 * Reverse input string and compare to input string to check if string is a palindrome
 */
function isPalidrome(string) {
  // Preprocess sting to remove spaces and change all characters to lower case
  strNoSpace = string.split(" ").join("").toLowerCase();

  // Reverse string using decrementing for loop
  // stringReversed = "";
  // for (let i = strNoSpace.length - 1; i >= 0; i--) {
  //   stringReversed += strNoSpace[i];
  // }

  // Reverse string using sting and array methods
  // stringReversed = strNoSpace.split("").reverse().join("");
  // return stringReversed === strNoSpace;

  /**
   * Check opposing character positions in the string
   * if not equal for a cycle break loop and return false
   * if pass through loop completely return true
   */
  strLen = strNoSpace.length;
  for (let i = 0; i < Math.floor(strNoSpace.length / 2); i++) {
    if (strNoSpace[i] !== strNoSpace[strLen - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Testing
console.log(isPalidrome("noon"));

console.log(isPalidrome("horse"));

console.log(isPalidrome("racecar"));

console.log(isPalidrome("a man a plan a canal panama"));
