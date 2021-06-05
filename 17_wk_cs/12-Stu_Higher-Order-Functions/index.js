const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumalator, currentValue, index, array) {
  if (index === array.length - 1) {
    return (accumalator + currentValue) / array.length;
  }

  return accumalator + currentValue;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);
