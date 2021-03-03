var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
// const foodList = document.createElement("ol");
// const foodItem = document.createElement("li");

// Add text content to li items
li1.textContent = "Ramen 🍜";
li2.textContent = "Pizza 🍕";
li3.textContent = "Donuts 🍩";
li4.textContent = "Pretzels 🥨";

// Append li items to favorite foods list
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Style favorite foods list
listEl.setAttribute("style", "background-color: #333; padding: 20px;");

// Create list of li items and background colors
const lis = [li1, li2, li3, li4];
const bgclrs = ["#444", "#555", "#666", "#777"];

// Loop through list items to style with setAttribute
for (let i = 0; i < lis.length; i++) {
  const li = lis[i];
  li.setAttribute(
    "style",
    `background-color: ${bgclrs[i]}; color: white; padding: 5px; margin-left: 35px;`
  );
}
