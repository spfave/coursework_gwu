// Variables
const choices = ["r", "p", "s"];
let stats = {
  wins: 0,
  loses: 0,
  ties: 0,
};

// Functions
function getComputerChoice() {
  choiceIndex = Math.floor(Math.random() * 3);
  return choices[choiceIndex];
}

function checkWinner(player1, player2) {
  if (player1 === player2) {
    stats.ties++;
    return "You tied the computer";
  } else if (
    (player1 === "r" && player2 === "s") ||
    (player1 === "s" && player2 === "p") ||
    (player1 === "p" && player2 === "r")
  ) {
    stats.wins++;
    return "You beat the computer";
  } else {
    stats.loses++;
    return "You lost to the computer";
  }
}

// Game
let playGame = true;

while (playGame) {
  const userSelection = prompt("Enter r, p, or s for rock, paper, or scissors");
  const compSelection = getComputerChoice();

  const gameResult = checkWinner(userSelection, compSelection);

  alert(`You played ${userSelection} against ${compSelection}
    \n${gameResult}
    \nGame stats: wins: ${stats.wins} losses: ${stats.loses} ties: ${stats.ties}
    `);

  const playAgain = confirm("Do you wan to play again?");
  if (!playAgain) {
    playGame = false;
  }
}
