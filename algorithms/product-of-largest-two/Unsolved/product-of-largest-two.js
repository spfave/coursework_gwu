// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

const productOfLargestTwo = function (arr) {
  let max1 = null;
  let max2 = null;

  for (const num of arr) {
    if (num > max1 || max1 === null) {
      max2 = max1;
      max1 = num;
    } else if (num > max2 || max2 === null) {
      max2 = num;
    }
  }

  return max1 * max2;
};

const productOfLargestTwo2 = function (arr) {
  const arrProd = (arr) => arr.reduce((acc, val) => acc * val);

  if (arr.length === 2) return arrProd(arr);

  let max = arr.slice(0, 2);
  for (let n = 2; n < arr.length; n++) {
    const num = arr[n];

    if (num > max[1]) {
      max.shift();
      max.push(num);
    }
  }
  return arrProd(max);
};

// Testing
console.log(productOfLargestTwo([2, 3]));
