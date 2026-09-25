
 // 1. Our quiz questions
 const questions = [
    {
        question: "Which language creates the structure of a webpage?",
        answers: ["HTML", "CSS", "Python", "Java"],
        correctAnswer: "HTML"
    },
    {
        question: "Which language makes a webpage beautiful?",
        answers: ["HTML", "CSS", "Python", "C++"],
        correctAnswer: "CSS"
    },
    {
        question: "Which language makes a webpage interactive?",
        answers: ["HTML", "CSS", "JavaScript", "SQL"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Which HTML tag creates the biggest heading?",
        answers: ["<p>", "<h1>", "<h6>", "<head>"],
        correctAnswer: "<h1>"
    },
    {
        question: "Which HTML tag creates a paragraph?",
        answers: ["<p>", "<h1>", "<img>", "<br>"],
        correctAnswer: "<p>"
    },
    {
        question: "Which HTML tag creates a button?",
        answers: ["<button>", "<p>", "<title>", "<body>"],
        correctAnswer: "<button>"
    },
    {
        question: "Which HTML tag is used to display an image?",
        answers: ["<img>", "<image>", "<picture-text>", "<photo>"],
        correctAnswer: "<img>"
    },
    {
        question: "Which HTML tag creates a hyperlink?",
        answers: ["<a>", "<link-text>", "<href>", "<url>"],
        correctAnswer: "<a>"
    },
    {
        question: "Which HTML tag creates a line break?",
        answers: ["<br>", "<hr>", "<p>", "<break>"],
        correctAnswer: "<br>"
    },
    {
        question: "Which HTML tag creates an unordered list?",
        answers: ["<ul>", "<ol>", "<li>", "<list>"],
        correctAnswer: "<ul>"
    },
    {
        question: "Which CSS property changes the text color?",
        answers: ["color", "background", "font-size", "margin"],
        correctAnswer: "color"
    },
    {
        question: "Which CSS property changes the background color?",
        answers: ["background-color", "text-color", "font-style", "border"],
        correctAnswer: "background-color"
    },
    {
        question: "Which CSS property changes the size of text?",
        answers: ["font-size", "text-color", "padding", "display"],
        correctAnswer: "font-size"
    },
    {
        question: "Which CSS property makes text bold?",
        answers: ["font-weight", "font-size", "text-align", "color"],
        correctAnswer: "font-weight"
    },
    {
        question: "Which CSS property adds space outside an element?",
        answers: ["margin", "padding", "color", "width"],
        correctAnswer: "margin"
    },
    {
        question: "Which CSS property adds space inside an element?",
        answers: ["padding", "margin", "border", "height"],
        correctAnswer: "padding"
    },
    {
        question: "Which symbol creates a single-line comment in JavaScript?",
        answers: ["//", "##", "<!-- -->", "**"],
        correctAnswer: "//"
    },
    {
        question: "Which keyword is used to create a variable in JavaScript?",
        answers: ["let", "print", "write", "show"],
        correctAnswer: "let"
    },
    {
        question: "Which JavaScript function displays a message in a popup?",
        answers: ["alert()", "promptText()", "showMessage()", "print()"],
        correctAnswer: "alert()"
    },
    {
        question: "Which JavaScript event happens when a button is clicked?",
        answers: ["click", "hover", "scroll", "load"],
        correctAnswer: "click"
    }
];


// 2. Get things from our webpage
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const questionNumberElement = document.getElementById("question-number");


// 3. Our variables
let questionIndex = 0;
let score = 0;


// 4. Show a question
function showQuestion() {

    // Get the current question
    let currentQuestion = questions[questionIndex];

    // Show the question
    questionElement.innerText = currentQuestion.question;

    // Show question number
    questionNumberElement.innerText =
        "Question " + (questionIndex + 1) + " of " + questions.length;

    // Remove old answer buttons
    answerButtons.innerHTML = "";

    // Clear the previous result
    resultElement.innerText = "";

    // Hide the Next button
    nextButton.style.display = "none";

    // Create answer buttons
    for (let i = 0; i < currentQuestion.answers.length; i++) {

        let answer = currentQuestion.answers[i];

        let button = document.createElement("button");

        button.innerText = answer;
        button.classList.add("answer-btn");

        // Check the answer when clicked
        button.addEventListener("click", function() {

            checkAnswer(answer, button);

        });

        answerButtons.appendChild(button);
    }
}


// 5. Check the selected answer
function checkAnswer(answer, selectedButton) {

    let correctAnswer = questions[questionIndex].correctAnswer;

    // Check if the answer is correct
    if (answer === correctAnswer) {

        resultElement.innerText = "🎉 Correct Answer!";

        selectedButton.classList.add("correct");

        score = score + 1;

        scoreElement.innerText = "Score: " + score;

    } else {

        resultElement.innerText = "❌ Wrong Answer!";

        selectedButton.classList.add("wrong");
    }

    // Disable all answer buttons
    let buttons = answerButtons.children;

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].disabled = true;

        // Show the correct answer in green
        if (buttons[i].innerText === correctAnswer) {
            buttons[i].classList.add("correct");
        }
    }

    // Show the Next button
    nextButton.style.display = "block";
}


// 6. Move to the next question
function nextQuestion() {

    questionIndex = questionIndex + 1;

    // Are there more questions?
    if (questionIndex < questions.length) {

        showQuestion();

    } else {

        showResult();
    }
}


// 7. Show the final score
function showResult() {

    questionElement.innerText = "🎉 Quiz Completed!";

    answerButtons.innerHTML = "";

    questionNumberElement.innerText = "Finished";

    resultElement.innerText =
        "Your score is " + score + " out of " + questions.length;

    nextButton.innerText = "Play Again";
}


// 8. Start the quiz again
function startQuiz() {

    questionIndex = 0;
    score = 0;

    scoreElement.innerText = "Score: 0";

    nextButton.innerText = "Next Question";

    showQuestion();
}


// 9. What happens when Next is clicked?
nextButton.addEventListener("click", function() {

    // If all questions are finished, restart
    if (questionIndex === questions.length - 1 &&
        nextButton.innerText === "Play Again") {

        startQuiz();

    } else {

        nextQuestion();
    }
});


// 10. Start the quiz
startQuiz();
