// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  const charCount = {};

  for (const char of str) {
    if (charCount.hasOwnProperty(char)) {
      charCount[char]++;
      continue;
    }
    charCount[char] = 1;
  }

  return charCount;
};
