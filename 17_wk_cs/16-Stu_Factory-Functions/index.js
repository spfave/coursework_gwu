// TODO: Fix the `greet` function so that it returns the correct values.
function Student(name, gradeYear) {
  let student = {
    name: name,
    gradeYear: gradeYear,
  };

  return {
    greet: function () {
      console.log(
        `My name is ${student.name} and I am in ${student.gradeYear} grade`
      );
    },
  };
}

const newStudent = Student('Dominique', '11th');
newStudent.greet();

module.exports = Student;
