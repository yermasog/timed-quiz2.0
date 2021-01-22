var startButton = document.getElementById("start-btn");
var questionContainerElements = document.getElementById("questions-container");

startButton.addEventListener("click", startGame);



function startGame() {
console.log("started");
startButton.classList.add("hide");
questionContainerElements.classList.remove("hide");
}

function setNextQuestion() {

}

function selectAnswer() {

}

