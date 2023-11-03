// Rock Paper Scissors Game - JS Script

/*
function get computer choice - selecting randomly from an array
then using js built-in function Math.floor and Math.random
now Math.random() will either give you a choice between 0 to 1, but if you multiply it by the length of an array
the random number will be generated upto max length of the array. the number then can be used as an idex number
*/

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function getComputerChoice() {
  const arr = ["rock", "paper", "scissors"]; // array
  const randIndex = Math.floor(Math.random() * arr.length); // random number to be used for index
  return arr[randIndex]; // this will return the the value of index inside
}

function gameRound(playerChoice, getComputerChoice) {
  const player = playerChoice.toLowerCase();
  const computer = getComputerChoice.toLowerCase();

  if (player === computer) {
    tieScore++;
    return `Player picks ${player} and Computer picks ${computer} = It's a TIE`;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return `Player picks ${player} and Computer picks ${computer} = Player WINS!`;
  } else {
    computerScore++;
    return `Player picks ${player} and computer picks ${computer} = Computer WINS!`;
  }
}

function displayScores() {
  console.log(playerScore);
  console.log(tieScore);
  console.log(computerScore);
}

function actualGame() {
  const playerChoice = "rock";
  const computerChoice = getComputerChoice();
  const result = gameRound(playerChoice, computerChoice);
  console.log(result);
  displayScores();
}

// actualGame();
// actualGame();
// actualGame();
// actualGame();
