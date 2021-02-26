//WRITE YOUR CODE BELOW

// 1
const students = ["Sebastian", "Stephen", "Robert", "Andre", "Besteman"];

// 2
console.log(students.length);

// 3
for (let s = 0; s < students.length; s++) {
  console.log(`Great to see you, ${students[s]}!`);
}

// Extra: While loop
let s = 0;
while (s < students.length) {
  console.log(`Great to see you, ${students[s]}!`);
  s++;
}
