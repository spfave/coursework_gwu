// 1) Where is carNoise stored?
// Script Global context
const carNoise = 'Honk';

// 2) Where is goFast stored?
// In Script Global context
const goFast = (speed) => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Assigned value after line 6 is executed
  // Function is stored in global context

  // 5) Where is makeNoise stored?
  // Local context of goFast function
  const makeNoise = (sound) => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  };

  // 6) What happens in the following statement?
  // makeNoise function is called
  makeNoise(carNoise);
};

// 3) What happens in the following statement?
// 3a. Window.confirm function is call with passed in message
// 3b. if statement checks response of confirm
// 3c. if condition is true goFast function is called
if (confirm('Do you want to go fast?')) {
  goFast(80);
}
