// WRITE YOUR CODE HERE
let students = ["Sebastian", "Mike", "Hany", "Tyra", "Fasica"];

// 1
console.log(students.length);

// 2
students.forEach((student) => {
  console.log(`Welcome to the class ${student}`);
});

// 3
students[0] = "Elizabeth";
console.log(students);

// 4
if (students[0] !== "Sebastian") {
  console.log(`${students[0]} is in class`);
}

// Additional testing
students[6] = "Forest";
console.log(students);
