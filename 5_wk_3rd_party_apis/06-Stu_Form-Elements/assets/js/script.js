const shoppingFormEl = $("#shopping-form");
const shoppingListEl = $("#shopping-list");

// Add variable for shopping input text input
const shoppingInput = $("#shopping-input");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
const handleFormSubmission = (event) => {
  event.preventDefault();

  // Get shopping input value
  const shoppingInputItem = shoppingInput.val();

  // if shopping input value is a non-empty string
  if (shoppingInputItem) {
    //   const shopItem = $("<li>");
    //   shopItem.text(shoppingInputItem);

    // Create list item with text content in one line
    const shopItem = $(`<li>${shoppingInputItem}</li>`);

    // Append shopping input item to shopping list
    shoppingListEl.append(shopItem);

    // Clear shopping input
    $('input[type="text"]').val("");
  }
};

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", handleFormSubmission);
