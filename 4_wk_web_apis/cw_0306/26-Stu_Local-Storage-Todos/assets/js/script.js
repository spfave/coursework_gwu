var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
/**
 * Renders all the todo items in the todos list to the screen as list items
 */
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  /**
   * Sets the todoList inner HTML content to an empty string: shows an empty to-do list to start
   * Sets the text content of the to-do list counter to the current number of to-dos
   */
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // TODO: Describe the functionality of the following `for` loop.
  /**
   * Loops over the array of todos
   * in each loop defines the current todo based on the indexed item in the todos array
   * creates a new list item element and sets the text content to the todo value
   * sets an attribute on the list item with value equal to the index location in the array
   * creates and adds a button to the list item
   * adds list element to todoList (unordered list)
   */
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
/**
 * Sets an initial value to the todos variable
 */
function init() {
  // TODO: What is the purpose of the following line of code?
  /**
   * Reads the todos array from local storage and parses to an object
   */
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  /**
   * Checks if parsed todos object is not null (empty)
   * if not null stores parsed object in todos variable
   */
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  /**
   * Calls renderTodos function
   */
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  /**
   * Stores the todos object as a string in local storage
   */
  localStorage.setItem("todos", JSON.stringify(todos));
}

// TODO: Describe the purpose of the following line of code.
/**
 * Adds an event listener of 'submit' to the form - executed on 'enter keypress'
 */
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  /**
   * Checks if the todo text is an empty string
   * if an empty string: ends function
   */
  if (todoText === "") {
    return;
  }
  // TODO: Describe the purpose of the following lines of code.
  /**
   * Adds the todo text to the todos array - added to end of array
   */
  todos.push(todoText);
  todoInput.value = "";

  // TODO: What will happen when the following functions are called?
  /**
   * Will store the updated todos array in local storage
   * Will render the updated todos on screen
   */
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
/**
 * Adds an event listener
 */
todoList.addEventListener("click", function (event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  /**
   * Checks if clicked element is a button element
   * if a button element: will remove (splice out) the clicked todo list item
   */
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    /**
     * Will store the updated todos array in local storage
     * Will render the updated todos on screen
     */
    storeTodos();
    renderTodos();
  }
});

init();
