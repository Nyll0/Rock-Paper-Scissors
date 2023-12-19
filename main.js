

function game() {
  let playerScore = 0;
  let computerScore = 0;
 
  for(let round = 1; round <= 5; round++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
 
    if (result === 'You won!') {
      playerScore++;
    } else if (result === 'The computer won!') {
      computerScore++;
    }
 
    console.log(`Round ${round}: ${result}`);
  }
 
  if (playerScore > computerScore) {
    console.log('You won the game!');
  } else if (playerScore < computerScore) {
    console.log('The computer won the game!');
  } else {
    console.log('The game is a tie!');
  }
}
 
function getPlayerChoice() {
  let playerSelection = prompt("Choose your move!");
 
  // validate user input
  while (!['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
    playerSelection = prompt("Invalid move! Choose again (rock, paper, or scissors):");
  }
 
  return playerSelection.toLowerCase();
}
 
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
 
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'The game is a tie!';
  }
 
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
 
  if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
 
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}
 
game();