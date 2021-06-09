// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create bubble sort function
const bubbleSort = (array) => {
  // brute force: O(n^2)
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < array.length; j++) {
  //     if (array[j] > array[j + 1]) {
  //       const temp = array[j];
  //       array[j] = array[j + 1];
  //       array[j + 1] = temp;
  //     }
  //   }
  // }

  // Improved: best O(n), worst O(n^2)
  let sorted = false;
  while (!sorted) {
    sorted = true;

    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        sorted = false;
      }
    }
  }

  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
