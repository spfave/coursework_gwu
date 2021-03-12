// Write code to return the the number of vowels in `str`

/**
 * Loop over characters in passed string and check is character is a vowel (a, e, i, o, u)
 * if character is a vowel increase count of vowels by 1
 * considerations: need to check upper and lower case letters, resolve by setting string characters to lowercase
 */
var vowelCount = function (str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let numVowels = 0;

  for (const char of str) {
    if (vowels.includes(char.toLowerCase())) {
      numVowels++;
    }
  }

  return numVowels;
};
