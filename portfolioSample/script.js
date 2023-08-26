function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById(
    "user-choice"
  ).innerText = `Your choice: ${userChoice}`;
  document.getElementById(
    "computer-choice"
  ).innerText = `Computer's choice: ${computerChoice}`;

  const result = determineWinner(userChoice, computerChoice);
  document.getElementById("game-result").innerText = result;
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
