const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string

    // 'it' is an assertion
    it("Should return a reversed version of the string", () => {
      const str = "Hello World!";
      const strReverse = "!dlroW olleH";

      const strRevRslt = new Algo.reverse(str);

      expect(strRevRslt).toEqual(strReverse);
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("Should return true for string that is a palindrome", () => {
      const str = "racecar";

      const checkPalindrome = new Algo.isPalindrome(str);

      expect(checkPalindrome).toEqual(true);
    });

    it("Should return false for string that is not a palindrome", () => {
      const str = "neon";

      const checkPalindrome = new Algo.isPalindrome(str);

      expect(checkPalindrome).toEqual(false);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("Should return the string with every word capitalized", () => {
      const str = "capitalize every first word of the string.";
      const strCap = "Capitalize Every First Word Of The String.";

      const strCapRslt = new Algo.capitalize(str);

      expect(strCapRslt).toEqual(strCap);
    });
  });
});
