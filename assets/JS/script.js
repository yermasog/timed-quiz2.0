var startButton = document.getElementById("start-btn");
var questionContainerElements = document.getElementById("questions-container");

startButton.addEventListener("click", startGame);



function startGame() {
console.log("started");
startButton.classList.add("hide");
questionContainerElements.classList.remove("hide");
setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}

var questions = [
    {
        question: "Who killed Ned Stark?",
        answers: [
            {text: "Cersei Lanister", correct: false},
            {text: "Jon Snow", correct: false},
            {text: "the executioner", correct: false},
            {text: "his sense of morality", correct: true} 
        ]
    
    },
    {
        question: "Who killed Ramsey Bolton?",
        answers: [
            {te}
        ]
    }
]
