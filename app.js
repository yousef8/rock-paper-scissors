// User Selection
function userPlay() {
  const input = prompt("Choose Rock , Paper , Scissors?", "rock").toUpperCase()
  console.log(`User played ${input}`);
  return input;
}

// Computer selection
function computerPlay() {
  // Array of available options
  const options = ["ROCK", "PAPER", "SCISSORS"];

  // Get random number between 1 and 3
  const selection = Math.floor(Math.random() * 3);
  console.log(selection)

  console.log(`Computer played ${options[selection]}`);

  return options[selection];
}