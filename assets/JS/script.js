var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElements = document.getElementById("questions-container");
var shuffleQuestions, currentQuestionIndex;
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons")
var secondsLeft = 60;
var timer = document.getElementById("timer");
var score = document.getElementById("score");
var endGame = document.getElementById("end-game")

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function timeLeft() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;
        // scoreCounter.textContent = "Score: " + score;


        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameEnd()
            
        }
    }, 1000);
}

function startGame() {
startButton.classList.add("hide");
shuffleQuestions = questions.sort(()=> Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElements.classList.remove("hide");
timeLeft()
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
   showQuestion(currentQuestionIndex)
}

function showQuestion(question ) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer),
        answerButtonsElement.appendChild(button)
    })
     
}



function setStatusClass (element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");     
        score = score + 1
    } else {
        element.classList.add("wrong");
        secondsLeft = secondsLeft -5
    }
}

function clearStatusClass(element) { 
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1 ) {
        nextButton.classList.remove("hide") 
    } else 
    // endGame.classList.remove("hide")
    nextButton.classList.remove("hide")
   

}

function gameEnd() {
endGame.classList.remove("hide");
nextButton.classList.add("hide")
questionContainerElements.classList.add("hide");
score.textContent = secondsLeft
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
