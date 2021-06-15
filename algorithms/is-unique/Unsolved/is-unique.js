// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  const valStore = {};

  for (const item of arr) {
    if (valStore[item]) return false;
    valStore[item] = true;
  }

  return true;
};
