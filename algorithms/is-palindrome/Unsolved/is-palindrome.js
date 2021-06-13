// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (string) {
  // Preprocess sting to remove spaces and change all characters to lower case
  strNoSpace = string.split(' ').join('').toLowerCase();

  // Reverse string using decrementing for loop
  stringReversed = '';
  for (let i = strNoSpace.length - 1; i >= 0; i--) {
    stringReversed += strNoSpace[i];
  }
  return stringReversed === strNoSpace;
};

var isPalindrome2 = function (string) {
  strNoSpace = string.split(' ').join('').toLowerCase();

  // Reverse string using string and array methods
  stringReversed = strNoSpace.split('').reverse().join('');
  return stringReversed === strNoSpace;
};

var isPalindrome3 = function (string) {
  strNoSpace = string.split(' ').join('').toLowerCase();

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
};
