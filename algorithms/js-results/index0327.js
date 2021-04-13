/**
 * What will the following code output and why:
 * Output will be NaN
 *
 * Reason: declaring variables using var has them hoisted to the top of their scope, but only
 * hoists up the variable name declaration and not the variable value assignment
 */

var a = 1;
function outer() {
  var a = 2;
  function inner() {
    // var a; // Declaration of variable memory is hoisted up to here but value is undefined
    a++; // tries to increment undefined
    console.log(a);
    var a = 5;
  }
  inner();
}

outer();
