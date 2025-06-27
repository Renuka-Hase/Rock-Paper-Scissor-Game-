let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const ranind = Math.floor(Math.random() * 3);
  return options[ranind];
};

const drawGame = () => {
  console.log("game was draw.");
  msg.innerText = "Game was draw.Try Again!!!";
};

const showWinner = (userWin, userChoice, compChoice) => {m
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.background = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You lose..");
    msg.innerText = `You lose..${compChoice} beats Your ${userChoice}`;
    msg.style.background = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  //generate computer choice:
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    // draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock,paper done [scissor]
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
