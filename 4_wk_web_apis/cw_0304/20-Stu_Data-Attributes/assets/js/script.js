const container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  const element = event.target;

  // TODO: Complete function
  // Check if clicked element is div with class box
  if (element.matches(".box")) {
    const state = element.dataset.state;
    // const state = element.getAttribute("data-state"); // alternative

    if (state === "hidden") {
      element.dataset.state = "show";
      // Set div text content to data-number
      element.textContent = element.dataset.number;
    } else {
      element.dataset.state = "hidden";
      // element.setAttribute("data-state", "hidden"); // alternative

      // Set div text content to empty string
      element.textContent = "";
    }
  }
});
