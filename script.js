const questions = [
    {
        question: "Q1 - Which of the following is correct about SOAP?",
        options: ["SOAP allows you to get around firewalls.", "SOAP will be developed as a W3C standard.", "Both of the above.", "None of the above."],
        correctAnswer: "Both of the above."
    },
    {
        question: "Which technology is primarily responsible for the styling of web pages?",
        options: ["JavaScript", "HTML", "CSS", "Python"],
        correctAnswer: "CSS"
    },
    {
        question: "Which programming language is mainly used for adding interactivity to websites?",
        options: ["JavaScript", "HTML", "CSS", "Python"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Which part of web development is responsible for handling data storage and retrieval?",
        options: ["Front-end development", "Back-end development", "Full-stack development", "Middleware development"],
        correctAnswer: "Back-end development"
    },
    {
        question: "What is the purpose of the script tag in HTML?",
        options: ["To define the page’s structure", "To include external CSS styles", "To include external JavaScript code", "To create hyperlinks"],
        correctAnswer: "To include external JavaScript code"
    },
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

function displayQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    optionsList.innerHTML = "";
    
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsList.appendChild(listItem);
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");

    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.textContent = "Quiz completed!";
    optionsList.innerHTML = "";
    nextButton.style.display = "none";
    resultContainer.textContent = `Your Score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener("click", checkAnswer);

// Start the quiz
displayQuestion();
