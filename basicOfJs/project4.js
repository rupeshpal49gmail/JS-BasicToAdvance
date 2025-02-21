const generateRandomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#sub");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector("#guesses");
const remaining = document.querySelector("#lastResult");
const startOver = document.querySelector("#resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("PLease enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 1) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${generateRandomNumber}`);
      endGame();
    }
  }
}

function checkGuess(guess) {
  //
}

function displayGuess(guess) {
  //
}
function displayMessage(message) {
  //
}

function newGame() {
  //
}

function endGame() {
  //
}
