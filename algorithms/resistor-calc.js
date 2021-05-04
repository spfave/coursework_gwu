/**
If you want to build something using a Raspberry Pi, you'll probably use resistors.
For this exercise, you need to know two things about them:

Each resistor has a resistance value.
Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.
The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number.
In this exercise you are going to create a function that returns the values of the color bands.

These colors are encoded as follows:
let COLORS = ["black", "brown", "red", "orange",  "yellow", "green", "blue", "violet", "grey", "white"];
example if the function received "White" the expected return would be 9.
 */

// Resistor band colors
const colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

/**
 * Evaluate resistor level based on input resistor color codes
 * @param {array<text>} resisColors - list of color bands on resistor
 * @returns {string} - evaluated resistance
 */
function resistorLevel(resisColors) {
  const resistorLevel = [];

  for (const color of resisColors) {
    let level = colors.indexOf(color);
    resistorLevel.push(level);
  }

  return resistorLevel.join("");
}

// Testing:
console.log(resistorLevel(["white", "red", "green"]));
