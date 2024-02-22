// let computerScore = 0;
// let userScore = 0;
// const resultRef = document.getElementById("result");
// const gameDetails = document.getElementById("gameDetails");
// const gameOver = document.getElementById("gameOver");
// const winnerText = document.getElementById("winnerText");
// // const playButtons = document.querySelectorAll(".weapons button");

// // computer choices
// function getComputerChoice() {
//   const choices = ["rock", "paper", "scissor"];

//   const randomIndex = Math.floor(Math.random() * 3);

//   return choices[randomIndex];
// }

// // result box
// function displayResult(message, textColor) {
//   resultRef.style.cssText = `color: ${textColor}`;
//   resultRef.innerHTML = message;
// }

// // scores
// function updateScores() {
//   document.getElementById("computer_score").innerHTML = computerScore;
//   document.getElementById("user_score").innerHTML = userScore;
// }

// // match choices and updates score
// function playGame(userChoice) {
//   const computerChoice = getComputerChoice();
//   document.getElementById(
//     "comp_choice"
//   ).innerHTML = ` Computer chose <span>${computerChoice.toUpperCase()}</span>`;
//   document.getElementById(
//     "user_choice"
//   ).innerHTML = ` You chose <span>${userChoice.toUpperCase()}</span>`;
//   gameDetails.style.display = "block";
//   if (
//     (userChoice === "rock" && computerChoice === "scissor") ||
//     (userChoice === "scissor" && computerChoice === "paper") ||
//     (userChoice === "paper" && computerChoice === "rock")
//   ) {
//     document.body.style.background =
//       "linear-gradient(135deg, #4ef4085e, #49d43d)";
//     displayResult("YOU WIN 🥳", "#689f38");
//     userScore++;
//   } else if (
//     (userChoice === "rock" && computerChoice === "paper") ||
//     (userChoice === "scissor" && computerChoice === "rock") ||
//     (userChoice === "paper" && computerChoice === "scissor")
//   ) {
//     document.body.style.background =
//       "linear-gradient(135deg, #f1abb7c2, #ff2626)";
//     displayResult("YOU LOSE 🙁", "#d32f2f");
//     computerScore++;
//   } else {
//     document.body.style.background =
//       "linear-gradient(135deg, #842af04f, #964fd9)";
//     displayResult("DRAW 😐", "#aa87ca");
//   }

//   updateScores();
//   if (userScore === 5 || computerScore === 5) {
//     gameOver.style.display = "block";
//     gameDetails.style.display = "none";
//     if (userScore === 5) {
//       winnerText.textContent = "You won the game! 🎉";
//     } else {
//       winnerText.textContent = "Computer won the game! 💥";
//     }
//     playButtons.forEach((button) => {
//       button.disabled = true;
//     });
//   }
// }
// function resetGame() {
//   computerScore = 0;
//   userScore = 0;
//   updateScores();
//   gameOver.style.display = "none";
//   gameDetails.style.display = "none";
//   //   gameDetails.innerHTML = " ";
//   document.body.style.background = "linear-gradient(135deg, #ffcf1b, #ff8b1b)";
//   // playButtons.forEach((button) => {
//   //   button.disabled = false;
//   // });
// }

let computerScore = 0;
let userScore = 0;
const resultRef = document.getElementById("result");
const gameDetails = document.getElementById("gameDetails");
const gameOver = document.getElementById("gameOver");
const winnerText = document.getElementById("winnerText");

const choices = {
  rock: { beats: "scissor", losesTo: "paper" },
  paper: { beats: "rock", losesTo: "scissor" },
  scissor: { beats: "paper", losesTo: "rock" },
};

function playGame(userChoice) {
  const computerChoice = getRandomChoice();
  const outcome = choices[userChoice];

  document.getElementById(
    "comp_choice"
  ).innerHTML = ` Computer chose <span>${computerChoice.toUpperCase()}</span>`;
  document.getElementById(
    "user_choice"
  ).innerHTML = ` You chose <span>${userChoice.toUpperCase()}</span>`;
  gameDetails.style.display = "block";

  if (userChoice === computerChoice) {
    displayResult("DRAW 😐", "#aa87ca");
    document.body.style.background =
      "linear-gradient(135deg, #842af04f, #964fd9)";
  } else if (outcome.beats === computerChoice) {
    displayResult("YOU WIN 🥳", "#689f38");
    document.body.style.background =
      "linear-gradient(135deg, #4ef4085e, #49d43d)";
    userScore++;
  } else {
    displayResult("YOU LOSE 🙁", "#d32f2f");
    document.body.style.background =
      "linear-gradient(135deg, #f1abb7c2, #ff2626)";
    computerScore++;
  }

  updateScores();

  if (userScore === 5 || computerScore === 5) {
    gameOver.style.display = "block";
    gameDetails.style.display = "none";
    winnerText.textContent =
      userScore === 5 ? "You won the game! 🎉" : "Computer won the game! 💥";
    disableButtons();
  }
}

function getRandomChoice() {
  const keys = Object.keys(choices);
  return keys[Math.floor(Math.random() * keys.length)];
}

function displayResult(message, backgroundColor) {
  resultRef.style.color = backgroundColor;
  resultRef.textContent = message;
}

function updateScores() {
  document.getElementById("computer_score").textContent = computerScore;
  document.getElementById("user_score").textContent = userScore;
}

function disableButtons() {
  const buttons = document.querySelectorAll(".weapons button");
  buttons.forEach((button) => {
    button.setAttribute("disabled", "disabled");
  });
}

function resetGame() {
  computerScore = 0;
  userScore = 0;
  updateScores();
  gameOver.style.display = "none";
  gameDetails.style.display = "none";
  document.body.style.background = "linear-gradient(135deg, #ffcf1b, #ff8b1b)";
  enableButtons();
}

function enableButtons() {
  const buttons = document.querySelectorAll(".weapons button");
  buttons.forEach((button) => {
    button.removeAttribute("disabled");
  });
}
