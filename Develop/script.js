const questions = [
    {
        question: "Commonly used data types DON'T inclue:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Booleans"
    },
    {
        question: "The condition in an if/else statement in enclsed within ____.",
        answers: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        correctAnswer: "Parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: ["Numbers and String", "Other Arrays", "Booleans", "All of the Above"],
        correctAnswer: "All of the Above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        correctAnswer: "Curly Brackets",
    },
];

const quizContainer = document.getElementById("quiz-container");
const startBtn = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const initialsInput = document.getElementById("initials-input");
const submitScoreBtn = document.getElementById("submit-score-btn");
const viewHighScoresBtn = document.getElementById("view-high-scores-btn");
const timerDisplay = document.getElementById("time-left");

let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;

function startQuiz() {
    timeLeft = 60; // Reset the timer to 60 seconds
    startTimer();
    displayQuestion();
}

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const answersHTML = currentQuestion.answers.map(answer => `
        <button onclick="checkAnswer('${answer}')">${answer}</button>
    `).join('');
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${answersHTML}
    `;
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    } else {
        timeLeft -= 10; // Subtract 10 seconds for incorrect answer
        if (timeLeft <= 0) {
            endQuiz();
        }
    }
}

function endQuiz() {
    clearInterval(timer);
    questionContainer.innerHTML = "Quiz Over!";
    initialsInput.style.display = "block";
    submitScoreBtn.style.display = "block";
    viewHighScoresBtn.style.display = "block";
}

startBtn.addEventListener("click", startQuiz);

submitScoreBtn.addEventListener("click", function() {
    const initials = initialsInput.value;
    const score = timeLeft;
    // Save initials and score
    alert(`Initials: ${initials}, Score: ${score}`);
});

viewHighScoresBtn.addEventListener("click", function() {
    // Add functionality to view high scores
});