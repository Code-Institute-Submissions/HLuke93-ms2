
/**Declaring all DOM elements */
let userScore = 0;
let computerScore = 0;
const userMessage = document.getElementById("user-message");
const computerMessage = document.getElementById("comp-message");
const resultMessage = document.getElementById("result");
const choices = ["Rock", "Paper", "Scissors"];
const rules = document.querySelector(".rules");

const buttons = document.querySelectorAll("#btn");

/** Add an event listener for all of the 3 buttons */

for (let button of buttons) {
    button.addEventListener("click" , function() {
        let playerSelection = this.getAttribute("data-choice");
        
        play(playerSelection);
        
    });
}

/** This function increments the computer score by 1 */

function lose() {
    
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
    if (oldScore === 5) {
        resultMessage.innerHTML = "Computer Wins";
        computerMessage.innerHTML = "";
        userMessage.innerHTML = "";
        document.querySelector('body').style.background = "#FF0000";

        
    }
    
}

/** This function increments the user score by 1 */

function win() {
    
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
    if (oldScore === 5) {
        resultMessage.innerHTML = "You Win";
        computerMessage.innerHTML = "";
        userMessage.innerHTML = "";
        document.querySelector('body').style.background = "#00FF00";
        
    }
}



/** This is the main game function which starts once a player section is chosen and updates the computer and user results message */

function play(playerSelection) {

    rules.classList.add("hidden");

    let computerChoice = Math.floor(Math.random() * 3);
    let computerChoiceWord = choices[computerChoice];
    let playChoiceWord = choices[playerSelection];
    computerMessage.innerHTML = `Computer Chose ${computerChoiceWord}`;
    userMessage.innerHTML = `You Chose ${choices[playerSelection]}`;

    if (computerChoiceWord === "Rock" && playChoiceWord === "Scissors") {
        resultMessage.innerHTML = "You Lose 😡";
        resultMessage.style.fontSize = "Large";
        lose();
    } else if (computerChoiceWord === "Paper" && playChoiceWord === "Rock") {
        resultMessage.innerHTML = "You Lose 😡";
        resultMessage.style.fontSize = "Large";
        lose();
    } else if (computerChoiceWord === "Scissors" && playChoiceWord === "Paper") {
        resultMessage.innerHTML = "You Lose 😡";
        resultMessage.style.fontSize = "Large";
        lose();
    } else if (computerChoiceWord === "Scissors" && playChoiceWord === "Rock") {
        resultMessage.innerHTML = "You Win 😃";
        resultMessage.style.fontSize = "Large";
        win();
    } else if (computerChoiceWord === "Rock" && playChoiceWord === "Paper") {
        resultMessage.innerHTML = "You Win 😃";
        resultMessage.style.fontSize = "Large";
        win();
    } else if (computerChoiceWord === "Paper" && playChoiceWord === "Scissors") {
        resultMessage.innerHTML = "You Win 😃";
        resultMessage.style.fontSize = "Large";
        win();
    } else {
        resultMessage.innerHTML = "It's a Draw"
        resultMessage.style.fontSize = "Large";
    }

    
}



    