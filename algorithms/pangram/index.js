/* 
Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
Pangram: a sentence that contains every letter in the alphabet.
Ex:
Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
Output: true
Input: “Five hexing wizard bots jump quickly”
Output: true
Input: “JavaScript is the best”
Output: false
*/

/**
 * Loop for each letter in the alphabet and check if it is included in the input string
 */
function isPangram(string) {
  // Define alphabet characters
  // Remove non-letter characters from string and set to lower case
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const stringChar = string.replace(/[^a-z]/i, "").toLowerCase();

  // Loop over alphabet letters
  // if alphabet character is not in string return false
  for (const letter of alphabet) {
    if (!stringChar.includes(letter)) {
      return false;
    }
  }
  return true;
}

// Testing;
console.log(isPangram("Watch Jeopardy, Alex Trebek’s fun TV quiz game"));
console.log(isPangram("Five hexing wizard bots jump quickly"));
console.log(isPangram("JavaScript is the best"));
