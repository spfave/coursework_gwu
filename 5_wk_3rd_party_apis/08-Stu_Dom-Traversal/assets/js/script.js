// Assemble: Create/select DOM elements
var rootEl = $("#root");

// TODO: Starting from the root element, select all the boxes and turn them white in a single statement.
// HINT: Use the `.css` function to change element's background color
// rootEl.children().children().css("background-color", "#fff");
rootEl.find("li").css("background-color", "#fff");

// TODO: Starting from `rootEl`, what is the statement that will use "O" to block the "X" from winning
// HINT: Use the `.closest()`, or `.parent()` methods to go up the DOM tree
rootEl.children().last().children().eq(0).text("O");
// rootEl.find(".item-a3").text("O");

// TODO: Starting from the bottom row, middle square or `.item-b3`, what is the statement that will win the game using "O"
// HINT: Use the ".closest()", or ".parent()" methods to go up the DOM tree
$(".item-b3").parent().siblings().eq(1).children().first().text("O");
