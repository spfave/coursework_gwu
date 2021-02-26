// Write Your Code Below
function isEqual(var1, var2) {
  if (var1 === var2) {
    console.log(`The variables are equal in type and value`);
  } else if (var1 == var2) {
    console.log(`The variables are equal in value`);
  } else {
    console.log(`The variables are not equal`);
  }
}

// Checking
isEqual("Sebastian", "Sebastian");

isEqual("789", 789);

isEqual(false, true);

isEqual(true, true);

isEqual(-22, 22);

isEqual(25.7, 25.7);
