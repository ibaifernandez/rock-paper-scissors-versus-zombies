// Initializing the name of the player

let playerName = prompt("Welcome, survivor! What is your name?");
let userName = document.querySelector("#username");
userName.innerText = playerName;

// Initializing variables for keeping scores

let userScore = 0;
let computerScore = 0;

// Caching audio elements

const audioDraw = document.querySelector("#draw-game")
const zombieWins = document.querySelector("#zombie-wins")
const playerWins = document.querySelector("#player-wins")
const playerVictory = document.querySelector("#player-victory")
const playerDefeat = document.querySelector("#player-defeat")

// Caching the place where the score will be updated

let userScoreBoard = document.querySelector(".user-score")
let computerScoreBoard = document.querySelector(".comp-score")

// Caching the place where the result of each play will show up and the scoreboard that will be lit accordingly

const result = document.querySelector("#result-caption")
const userScore_div = document.querySelector(".user-score-div")
const compScore_div = document.querySelector(".comp-score-div")

// Caching the selection of the user

const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

// Creating the computer's choice

function getComputerChoice () {
  const choices = ['🪨', '🗒', '✂️']
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]
}

// Declaring winner at the best out of 5

function bestOfFive () {
  if (userScore === 5) {
    result.innerHTML = '<div class="result">Long live mankind!</div>'
    playerVictory.play()
    setTimeout(function(){window.location.href = "https://github.com/ibaifernandez";}, 3000);
  } else if (computerScore === 5) {
    result.innerHTML = '<div class="result">Zombies succeeded in their attempt to erase mankind!</div>'
    playerDefeat.play()
    setTimeout(function(){window.location.href = "https://github.com/ibaifernandez";}, 3000);
  }
}

// Creating functions for each possible result

// Draw

function draw () {
  result.innerHTML = '<div class="result">It is a tied game! 🤷🏽‍♂️</div>'
  audioDraw.play()
}

// Lose

function lose () {
  computerScore++;
  result.innerHTML = '<div class="result"> Zombies win,' + ' ' + playerName + ' ' + 'loses! 🧟‍♂️</div>'
  computerScoreBoard.innerText = computerScore; 
  zombieWins.play()
  compScore_div.classList.add("red");
  setTimeout(function(){compScore_div.classList.remove("red")}, 1000);
  bestOfFive();
}

// Win

function win () {
  userScore++;
  result.innerHTML = '<div class="result">' + playerName + ' ' +'wins, zombies lose! 🔥</div>'
  userScoreBoard.innerText = userScore; 
  playerWins.play()
  userScore_div.classList.add("red");
  setTimeout(function(){userScore_div.classList.remove("red")}, 1000);
  bestOfFive();
}

rock_button.addEventListener('click', function () {
  game('🪨');
});

paper_button.addEventListener('click', function () {
  game('🗒');
});

scissors_button.addEventListener('click', function () {
  game('✂️');
});

// Game Logic

function game (userChoice) {
  const computerChoice = getComputerChoice();
  let competition = userChoice + computerChoice;
  console.log(competition)
  switch (competition) {
    case "🪨🪨":
    case "✂️✂️":
    case "🗒🗒":
      draw()
      break;
    case "🪨🗒":
    case "✂️🪨":
    case "🗒✂️":
      lose()
      break;
    case "🪨✂️":
    case "✂️🗒":
    case "🗒🪨":
      win()
      break;
  }
}