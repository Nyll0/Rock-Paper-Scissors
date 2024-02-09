let playerScore = 0;
let computerScore = 0;

function game() {
  let playerScore = 0;
  let computerScore = 0;

    if (result === 'You won!') {
      playerScore++;
    } else if (result === 'The computer won!') {
      computerScore++;
    }
 
    console.log(`Round ${round}: ${result}`);
  }
 
  function getPlayerChoice() {
    const choices = document.querySelectorAll('.choice');
    
    choices.forEach(choice => {
      choice.addEventListener('click', function() {
        const playerSelection = this.getAttribute('data-choice');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        displayResult(`You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`);
        updateScores(result);
      });
    });
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
      return 'It\'s a tie!';
    }
    
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore++;
      return 'You win!';
    } else {
      computerScore++;
      return 'Computer wins!';
    }
  }
  
  function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
  }
  
  function updateScores(result) {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  
    if (playerScore >= 5 || computerScore >= 5) {
      endGame();
    }
  }
  
  function endGame() {
    if (playerScore > computerScore) {
      displayResult('You won the game!');
    } else if (playerScore < computerScore) {
      displayResult('The computer won the game!');
    } else {
      displayResult('The game is a tie!');
    }
    
    // Reset scores for a new game
    playerScore = 0;
    computerScore = 0;
  }
  
  getPlayerChoice();