const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
  // TODO: Add a comment describing the purpose of this variable.
  // Set a function variable
  let count = 0;

  // TODO: Add a comment describing what is happening.
  // Defining a function that is returned
  return function () {
    // TODO: Add a comment describing how this variable is being scoped.
    // Local scoped (protected) in returned closure surrounding function
    count++;

    // TODO: Add a comment describing how we are using the 'count' variable.
    // Using variable in local scope
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// Loops over all buttons and adds a click event listener
// Execute clickHandler function in order to run function and return closure function to add to event listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
