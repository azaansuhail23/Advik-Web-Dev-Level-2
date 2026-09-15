// #Createa  a array of object

const questions=[
    {
        question:"Which language is used to create the structure of a webpage?",
        answers:[
            {text:"HTML",correct:true},
            {text:"CSS",correct:false},
            {text:"Python",correct:false},
            {text:"Java",correct:false},
        ]
    },

    {
        question: "Which language is used to style a webpage?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Python", correct: false },
            { text: "C++", correct: false }
        ]
    },

    {
        question: "Which language makes a webpage interactive?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "SQL", correct: false }
        ]
    },

    {
        question: "Which HTML tag is used to create a heading?",
        answers: [
            { text: "<p>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<button>", correct: false },
            { text: "<img>", correct: false }
        ]
    },

    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "##", correct: false },
            { text: "<!-- -->", correct: false },
            { text: "**", correct: false }
        ]
    }
];



//Get HTML elements 
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
const resultElement=document.getElementById("result")
const scoreElement=document.getElementById("score");
const questionNumberElement=document.getElementById("question-number");


//Varialbes
let currentQuestionIndex=0;
let score=0;
