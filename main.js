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