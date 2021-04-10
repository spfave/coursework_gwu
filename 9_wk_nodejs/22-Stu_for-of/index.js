// DOM Selection
const songs = document.querySelector("#songs").children;
// const songs = document.querySelectorAll("li");

// Webpage Execution
console.log(songs);

for (const song of songs) {
  // song.setAttribute("class", "red");
  song.classList.add("red");
  console.log(song.textContent);
}
