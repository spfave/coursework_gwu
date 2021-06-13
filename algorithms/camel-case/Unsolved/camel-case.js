// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  const words = str.toLowerCase().split(' ');

  for (let w = 1; w < words.length; w++) {
    const word = words[w];
    words[w] = word[0].toUpperCase() + word.substring(1);
  }

  return words.join('');
};

// Testing
console.log(camelCase('test test'));
