var question = document.querySelector(".question")
var timerCountDown = document.querySelector("#Timer-count")
var choiceOne = document.querySelector(".choiceOne")
var choiceTwo = document.querySelector(".choiceTwo")
var choiceThree = document.querySelector(".choiceThree")
var choiceFour = document.querySelector(".choiceFour")
var currentQuestion = {}
var timerCount = 0
var questionCount= 0
let QuestionsArray = []

let questionPool = [
    {
        question: "What is a Rallentando?",
        choice1: "When you suddenly get Loud"
    }
]