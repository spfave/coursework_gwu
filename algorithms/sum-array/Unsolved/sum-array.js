// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  return sum;
};

const arr = [3, 1, 5, 6];
console.log(sumArray(arr));
