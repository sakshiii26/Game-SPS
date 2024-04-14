let userscore = 0;
let compscore = 0;
//option select
const ch = document.querySelectorAll(".choice");
const msgc = document.querySelector("#msg");
const userscorePara = document.querySelector("#userscore");
const compscorePara = document.querySelector("#compscore");

const showWinner = (userwin) => {
  if (userwin == true) {
    userscore++;
    userscorePara.innerText = userscore;
    msgc.innerText = "You Won";
  } else {
    compscore++;
    compscorePara.innerText = compscore;
    msgc.innerText = "You Loss";
  }
};
// comp choice sathi
const compchoice = () => {
  let opt = ["rock", "paper", "scissor"];
  // comp to take random
  const m = Math.floor(Math.random() * 3);
  return opt[m];
};
// user choice sathi
const playgame = (userchoice) => {
  console.log("user choice =", userchoice);
  //to take comp choice call function
  const compC = compchoice();
  console.log("computer choice =", compC);
  if (userchoice == compC) {
    console.log("match is draw");
    msgc.innerText = "Game was draw , play again!";
  } else {
    let userwin = true;
    if (userchoice == "rock") {
      //comp = paper or scissor
      userwin = compC == "paper" ? false : true;
    } else if (userchoice == "paper") {
      // comp = scissor or rock
      userwin = compC == "rock" ? true : false;
    } else {
      // comp = rock or paper
      (userwin == compC) == "rock" ? false : true;
    }
    showWinner(userwin);
  }
};

ch.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log(userchoice);
    playgame(userchoice);
  });
});
