
/**Declaring all DOM elements */

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const userMessage = document.getElementById("user-message");
const computerMessage = document.getElementById("comp-message");
const resultMessage = document.getElementById("result");
const choices = ["Rock", "Paper", "Scissors"]

const buttons = document.querySelectorAll("#btn")

/** Add an event listener for all of the 3 buttons */

for (let button of buttons) {
    button.addEventListener("click" , function() {
        let playerSelection = this.getAttribute("data-choice");
        
        play(playerSelection);
        
    });
}

/** This is the main game function which starts once a player section is chosen and updates the computer and user results message */

function play(playerSelection) {

    let computerChoice = Math.floor(Math.random() * 3);
    let computerChoiceWord = choices[computerChoice];
    let playChoiceWord = choices[playerSelection];
    computerMessage.innerHTML = `Computer Chose ${computerChoiceWord}`;
    userMessage.innerHTML = `You Chose ${choices[playerSelection]}`;

    if (computerChoiceWord === "Rock" && playChoiceWord === "Scissors") {
        resultMessage.innerHTML = "You Lose 😡";
    } else if (computerChoiceWord === "Paper" && playChoiceWord === "Rock") {
        resultMessage.innerHTML = "You Lose 😡";
    } else if (computerChoiceWord === "Scissors" && playChoiceWord === "Paper") {
        resultMessage.innerHTML = "You Lose 😡";
    } else if (computerChoiceWord === "Scissors" && playChoiceWord === "Rock") {
        resultMessage.innerHTML = "You Win 😃";
    } else if (computerChoiceWord === "Rock" && playChoiceWord === "Paper") {
        resultMessage.innerHTML = "You Win 😃";
    } else if (computerChoiceWord === "Paper" && playChoiceWord === "Scissors") {
        resultMessage.innerHTML = "You Win 😃";
    } else {
        resultMessage.innerHTML = "It's a Draw"
    }
}
