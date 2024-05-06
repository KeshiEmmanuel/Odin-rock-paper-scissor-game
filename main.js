function Game() {
  alert("Lets play Rock,paper, scissors");
  if (!StartGame()) {
    confirm("Would you like to play again?");
    if (true) {
      Game();
    }
  }
  return StartGame();
}
Game();

function StartGame() {
  MainGame();
}

/* function restartGame() {
  if (!MainGame()) {
    confirm("Would you like to play again");
  } else {
    MainGame();
  }
} */
function MainGame() {
  //Computer Choices
  const computerGameMaterial = ["rock", "paper", "scissors"];
  const computerRandomChoices = Math.floor(
    Math.random() * computerGameMaterial.length
  );

  const computerChoice = computerGameMaterial[computerRandomChoices];

  //User Choices
  const userChoice = prompt(
    "Enter either Rock, Paper or Scissors"
  ).toLowerCase();

  console.log(computerChoice);
  console.log(userChoice);

  //Check for no Input
  if (!userChoice || userChoice === null || userChoice === "") {
    alert("Invaild Selection pls try again!");
  }
  //Game Conditions

  function gameLogic() {
    if (userChoice === "paper" && computerChoice === "rock") {
      alert(`You Win! AI selected ${computerChoice}`);
    } else if (computerChoice === "paper" && userChoice === "scissors") {
      alert(`You Win! AI selected ${computerChoice}`);
    } else if (computerChoice === "scissors" && userChoice === "rock") {
      alert(`You Win! AI Selected ${computerChoice}`);
    } else if (computerChoice === userChoice) {
      alert(
        `Its a tie you selected ${userChoice} while AI selected ${computerChoice}`
      );
    }
  }
  gameLogic();
}
