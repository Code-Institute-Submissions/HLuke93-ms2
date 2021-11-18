/**Declaring DOM elements */
const userMessage = document.getElementById("user-message");
const computerMessage = document.getElementById("comp-message");
const resultMessage = document.getElementById("result");
const choices = ["Rock", "Paper", "Scissors"];
const rules = document.querySelector(".rules");
const buttons = document.querySelectorAll(".btn");
let playing = true;

document.querySelector(".restart").classList.add("hidden");

// Add an event listener for all of the 3 buttons 

for (let button of buttons) {
	button.addEventListener("click", function () {
		let playerSelection = this.getAttribute("data-choice");

		play(playerSelection);

	});
}

/** This function increments the computer score by 1 , checks when score 
 * reaches 5 and displays restart button once the game is won*/

function lose() {

	let oldScore = parseInt(document.getElementById("computer-score").innerText);
	document.getElementById("computer-score").innerText = ++oldScore;
	if (oldScore >= 5) {

		computerMessage.innerHTML = "";
		userMessage.innerHTML = "";
		document.querySelector('body').style.background = "#C91F37";
		document.querySelector('.game-area').style.background = "#C91F37";
		document.getElementById("logo").classList.add("hidden");
		document.querySelector(".restart").classList.remove("hidden");
		resultMessage.innerHTML = "You Lost the game!!! 😡";
		resultMessage.style.fontSize = "150%";
		resultMessage.style.width = "300px";
		resultMessage.style.background = ("none");
		document.querySelector(".item").classList.add("hidden");
		document.querySelector(".game-area").style.color = "white";
		document.querySelector(".game-area").style.fontSize = "x-large";
		document.getElementById("user-score").style.color = "red";
		document.getElementById("computer-score").style.color = "#66ff00";

		playing = false;


	}

}

/** This function increments the user score by 1, checks when score 
 * reaches 5 and displays restart button once the game is won */

function win() {

	let oldScore = parseInt(document.getElementById("user-score").innerText);
	document.getElementById("user-score").innerText = ++oldScore;
	if (oldScore >= 5) {

		computerMessage.innerHTML = "";
		userMessage.innerHTML = "";
		document.getElementById("logo").classList.add("hidden");
		document.querySelector('body').style.background = "#008000";
		document.querySelector('.game-area').style.background = "#008000";
		resultMessage.style.background = ("none");
		document.querySelector(".restart").classList.remove("hidden");
		resultMessage.innerHTML = "You Won the game!!! 😃";
		resultMessage.style.fontSize = "150%";
		document.querySelector(".item").classList.add("hidden");
		document.querySelector(".game-area").style.color = "white";
		document.querySelector(".game-area").style.fontSize = "x-large";
		document.getElementById("user-score").style.color = "#66ff00";
		document.getElementById("computer-score").style.color = "red";

		playing = false;


	}
}


/** This is the main game function which starts once a player section is chosen and updates the computer and user results message */

function play(playerSelection) {


	if (playing) {

		rules.classList.add("hidden");


		let computerChoice = Math.floor(Math.random() * 3);
		let computerChoiceWord = choices[computerChoice];
		let playChoiceWord = choices[playerSelection];
		computerMessage.innerHTML = `Computer Chose ${computerChoiceWord}`;
		userMessage.innerHTML = `You Chose ${choices[playerSelection]}`;


		if (computerChoiceWord === "Rock" && playChoiceWord === "Scissors") {
			resultMessage.innerHTML = "You Lose 😡";
			resultMessage.style.background = ("#ffdde0")
			resultMessage.style.fontSize = "Large";
			lose();
		} else if (computerChoiceWord === "Paper" && playChoiceWord === "Rock") {
			resultMessage.innerHTML = "You Lose 😡";
			resultMessage.style.background = ("#ffdde0")
			resultMessage.style.fontSize = "Large";
			lose();
		} else if (computerChoiceWord === "Scissors" && playChoiceWord === "Paper") {
			resultMessage.innerHTML = "You Lose 😡";
			resultMessage.style.background = ("#ffdde0")
			resultMessage.style.fontSize = "Large";
			lose();
		} else if (computerChoiceWord === "Scissors" && playChoiceWord === "Rock") {
			resultMessage.innerHTML = "You Win 😃";
			resultMessage.style.background = ("#cefdce");
			resultMessage.style.fontSize = "Large";
			win();
		} else if (computerChoiceWord === "Rock" && playChoiceWord === "Paper") {
			resultMessage.innerHTML = "You Win 😃";
			resultMessage.style.background = ("#cefdce");
			resultMessage.style.fontSize = "Large";
			win();
		} else if (computerChoiceWord === "Paper" && playChoiceWord === "Scissors") {
			resultMessage.innerHTML = "You Win 😃";
			resultMessage.style.background = ("#cefdce");
			resultMessage.style.fontSize = "Large";
			win();
		} else {
			resultMessage.innerHTML = "It's a Draw";
			resultMessage.style.background = ("none");
			resultMessage.style.fontSize = "Large";
		}
	}
	document.getElementById("logo").style.marginTop = "0%";


}

// Play Again Button , Resets scores to 0 , background color etc

document.querySelector("#restart-game").addEventListener("click", function () {
	document.getElementById("computer-score").innerText = 0;
	document.getElementById("user-score").innerText = 0;
	computerMessage.innerHTML = "";
	userMessage.innerHTML = "";
	resultMessage.innerHTML = "";
	document.getElementById("logo").classList.remove("hidden");
	document.getElementById("logo").style.marginTop = "0%";
	document.querySelector('body').style.background = "linear-gradient(135deg, #24C6DC, #514A9D)";
	document.querySelector('.game-area').style.background = "#FFFFFF";
	document.querySelector(".restart").classList.add("hidden");
	document.querySelector(".rules").classList.remove("hidden");
	document.querySelector(".item").classList.remove("hidden");
	document.querySelector(".game-area").style.color = "#514A9D";
	document.getElementById("computer-score").style.color = "#514A9D";
	document.getElementById("user-score").style.color = "#514A9D";
	playing = true;

});


    