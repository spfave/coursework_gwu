// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
const rootEl = $("#root"); //document.getElementById

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
const authorEL = $("<p>"); // document.createElement()

// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
authorEL.text("~ Carol Dweck"); //<element>.textContent =

// TODO: Add the class `plain` to the author element
authorEL.attr("class", "plain"); //<element>.className = "plain"

// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
const quoteEl = $(
  "<h1>Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.</h1>"
);

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
// Done inline with about code

// TODO: Apply the class `fancy` to the quote element
quoteEl.addClass("fancy"); // <element>.classList.add

// TODO: Append the author element to the quote element
quoteEl.append(authorEL);

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
rootEl.append(quoteEl);
