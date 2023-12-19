function getRandomInt(max) {
  return Math.floor(Math.random() * 3);
};

function getComputerChoice(){
  if(getRandomInt() === 0){
    return "Rock";
  }
  else if(getRandomInt() === 1){
    return "Paper";
  }
  else{
    return "Scissors";
  }
};

console.log(getComputerChoice());

let playerSelection = prompt("chose your move!");

playerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice();

function game(playerSelection,computerSelection){
  if(playerSelection === computerSelection){
    return 'The game is a tie !';
  }
  if(playerSelection === 'rock'){
    if(computerSelection === 'paper'){
      return 'The computer won !';
    }
    else{
      return 'You won !';
    }
  }

  if(playerSelection === 'paper'){
    if(computerSelection === 'scissors'){
      return 'The computer won!';
    }
    else{
      return 'You won!'
    }
  }

  if(playerSelection === 'scissors'){
    if(computerSelection === 'rock'){
      return 'The computer won!';
    }
    else{
      return 'You won!'
    }
  }
};