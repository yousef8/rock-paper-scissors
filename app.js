// Array of available options
//                   0         1        2
const options = ["SCISSORS", "ROCK", "PAPER"];

// User Selection
function userPlay() {
  const input = prompt("Choose Rock , Paper , Scissors?", "rock").toUpperCase()
  console.log(`User played ${input}, ${options.indexOf(input)}`);
  return options.indexOf(input);
}

// Computer selection
function computerPlay() {
  // Get random number between 1 and 3
  const selection = Math.floor(Math.random() * 3);

  console.log(`Computer played ${options[selection]}, ${selection}`);

  return selection;
}

// One round of play
function roundPlay(userSelect, compSelect) {
  // Tie case
  if (userSelect === compSelect) {
    console.log("It's a tie. No one wins")
    // Case of Scissors vs. Paper
  } else if ((userSelect || compSelect) === 0 && (userSelect || compSelect) === 2) {
    if (userSelect === 0 && compSelect === 2) {
      console.log("User wins");
      return 1;
    } else {
      console.log("Computer wins");
      return 2;
    }
    // Case Paper beats Rock beats Scissors
  } else {
    if (userSelect > compSelect) {
      console.log("User wins");
      return 1;
    } else {
      console.log("Computer wins");
      return 2;
    }
  }
}