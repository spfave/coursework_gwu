/** Write code to create a function takes a string and returns a new string
 *  with the first letters of each word capitalized
 */

var titleCase = function (str) {
  // Split sentence into words at spaces
  const strSplit = str.split(" ");
  const strTitle = [];

  // For each word -
  // extract first letter and change to uppercase and reattached remaining word characters
  for (const word of strSplit) {
    wordTitle = word[0].toUpperCase() + word.slice(1);
    strTitle.push(wordTitle);
  }

  // Returned words joined back into sentence
  return strTitle.join(" ");
};

console.log(titleCase("This is a test sentence."));
