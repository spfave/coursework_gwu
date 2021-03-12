// TODO: Which element is the following line of code selecting?
/* 
Selects the first html element with a class type of 'carouselbox' 
- selects div with 'carouselbox' class
*/
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
/* 
Selects the button elements with 'next' and 'prev' class respectively
*/
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203",
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
/* 
Adds a callback function when clicking on the carouselbox div
- Changes url to image url stored in images array
*/
carousel.addEventListener("click", function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
/* 
Stops event propagation beyond the clicked button
calls 'navigate' function to cycle to next image
*/
next.addEventListener("click", function (event) {
  // TODO: What is the purpose of the following line of code?
  /* 
  Prevents event propagation to the button's chain of parent elements
  */
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
/* 
Stops event propagation beyond the clicked button
calls 'navigate' function to cycle to previous image
*/
prev.addEventListener("click", function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  /* 
  Would call 'navigate' function to cycle image to previous
  Then any parent element click events would be triggered
  - In this case the carousel click event would occur
   */
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
