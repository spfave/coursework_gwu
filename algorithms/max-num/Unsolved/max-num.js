// Write code to return the largest number in the given array

var maxNum = function (arr) {
  // For loop solution
  // Loop over all elements and check if current element is larger than last
  // let maxValue = 0;
  // for (const val of arr) {
  //   if (val > maxValue) {
  //     maxValue = val;
  //   }
  // }

  // Solution using Math.max function, must first spread array or use .apply method
  // maxValue = Math.max(...arr);
  maxValue = Math.max.apply(Math, arr);

  return maxValue;
};
