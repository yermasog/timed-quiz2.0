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
            {text: "Here is a hint", correct: false},
            {text:"It wasn't Jon Snow", correct: false},
            {text: "So the answer should be obvious", correct: false},
            {text: "Sansa Stark", correct: true}
        ]
    },
    {
        question: "Who killed the Night King?",
        answers: [
            {text: "Jorah Mormont", correct: false},
            {text: "Arya Stark", correct: true},
            {text: "Theon Greyjoy", correct: false},
            {text: "Jon Snow", correct: false}
        ]
    },
    {
        question: "Who was NOT killed by Arya Stark?",
        answers: [
            {text: "the Night King", correct: false},
            {text: "Walder Frey", correct: false},
            {text: "Cersei Lannister", correct: true},
            {text: "Petyr Baelish", correct: false}
        ]
    },
    {
        question: "Who killed Daenerys Targaryen?",
        answers: [
            {text: "Jon Snow", correct: false},
            {text: "bad writing", correct: false},
            {text: "David Benioff and DB Weiss", correct: false},
            {text: "ALL OF THE ABOVE", correct: true}
        ]

    }
]
