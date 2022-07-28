window.onload = main;

let userScore = 0;
let compScore = 0;

function main() {
  const choices = document.querySelector("div.user-selection div.choices");
  choices.addEventListener("click", (e) => {
    let choice = e.target.closest("div");
    let winner = playRound(choice);
    updateScore(winner);
    updateBoard(userScore, compScore);

    if (userScore === 5 || compScore === 5) {
      prompt("Winner is " + userScore);
    }
  });
}

function playRound(choice) {
  let userChoice = choice.getAttribute("data-type");
  if (!userChoice) {
    return;
  }

  console.log("User played " + userChoice);

  let compChoice = getCompChoice();
  console.log("Comp played " + compChoice);

  let winner = getWinner(userChoice, compChoice);
  console.log("Winner is " + winner);

  updateInfoSection(winner);

  return winner;
}

function getCompChoice() {
  const choices = {
    0: "ROCK",
    1: "PAPER",
    2: "SCISSOR",
  };

  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getWinner(userChoice, compChoice) {
  if (userChoice === compChoice) {
    return "TIE";
  }

  if (
    (userChoice === "ROCK" && compChoice === "PAPER") ||
    (userChoice === "PAPER" && compChoice === "SCISSOR") ||
    (userChoice === "SCISSOR" && compChoice === "ROCK")
  ) {
    return "COMPUTER";
  }

  if (
    (compChoice === "ROCK" && userChoice === "PAPER") ||
    (compChoice === "PAPER" && userChoice === "SCISSOR") ||
    (compChoice === "SCISSOR" && userChoice === "ROCK")
  ) {
    return "USER";
  }
}

function updateInfoSection(winner) {
  let info = document.querySelector(".info p");
  let text = "";

  if (winner === "TIE") {
    text = "IT'S A TIE";
  } else if (winner === "USER") {
    text = "USER WINS";
  } else {
    text = "COMPUTER WINS";
  }

  info.textContent = text;
}

function updateScore(winner) {
  if (winner === "TIE") {
    return;
  }

  if (winner === "USER") {
    userScore++;
  }

  if (winner === "COMPUTER") {
    compScore++;
  }
}

function updateBoard(userScore, compScore) {
  let user = document.querySelector(".score-board .user-score");
  let comp = document.querySelector(".score-board .computer-score");
  user.textContent = userScore;
  comp.textContent = compScore;
}

function endGame() {
  // Reset Scores
  userScore = 0;
  compScore = 0;

  // Wipe the board
  updateBoard();

  // Wipe the info section
  let info = document.querySelector(".info p");
  info.textContent = "";
}
