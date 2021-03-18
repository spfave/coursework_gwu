// Access element using id
const articlesDiv = document.getElementById("articles");
const mainDiv = document.getElementById("main");

// Change style by accessing style object's properties
// articlesDiv has only one child object. A list with one object has an index of zero for first child
articlesDiv.children[0].children[1].style.fontSize = "50px";

// Need to target child element directly since the element has a css color defined and thus no longer inherits from the  parent
// mainDiv.style.color = "white";
mainDiv.children[0].style.color = "white";
