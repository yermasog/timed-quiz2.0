var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElements = document.getElementById("questions-container");
var shuffleQuestions, currentQuestionIndex;
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons")

startButton.addEventListener("click", startGame);

function startGame() {
console.log("started");
startButton.classList.add("hide");
shuffleQuestions = questions.sort(()=> Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElements.classList.remove("hide");
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question ) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer),
        answerButtonsElement.appendChild(button)
    })
     
}

function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer() {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {setStatusClass(button, button.dataset.correct)
    })
}

function SetStatusClass (element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");     
    } else {
        element.classList.add("wrong")
    }
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
