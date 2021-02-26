var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

// 1
constellations.unshift("Canis Major");
console.log(constellations);

// 2
// planets.pop();
planets.splice(2, 1);
console.log(planets);

// 3
let galaxy = constellations.concat(planets);
console.log(galaxy);
// console.log(constellations);
// console.log(planets);

// 4
let starUpper = star.toUpperCase();
console.log(starUpper);
