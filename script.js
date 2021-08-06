let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, secretNumber) {
  let computerCloseness = Math.abs(secretNumber - computerGuess);
  let userCloseness = Math.abs(secretNumber - userGuess);
  if (computerCloseness === userCloseness) {
    return true;
  } else if (computerCloseness > userCloseness) {
    return true;
  } else {
    return false;
  }
}
