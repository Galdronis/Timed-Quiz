var choices = Array.from(document.querySelectorAll('.choiceAnswer'))
var question = document.querySelector('.question')
var timerCount = document.querySelector('#timerCount')
var score = document.querySelector('#score')

var timer = 0
var currentScore = 0
var questionNumber = 0
var availableQuestions = []
let currentQuestion = {}
let canAnswer = true

var questionsArray = [
    {
        question: 'What is a Rallentando?', 
        one: 'When you suddenly get loud.',
        two: 'When you gradually speed up.',
        three: 'When you gradually slow down.',
        four: 'When you suddenly get quiet.',
        answer: C,
    },
    {
        question: 'What does the top number in a time signature mean?',
        one: 'It indicates the number of beats in a measure',
        two: 'It indicates the number of measures in the length of the piece',
        three: 'It indicates the length value of a given note',
        four: 'It indicates the number of times a given section is intended to played.',
        answer: A
    },
    {
        question: 'What does Dulce mean in music?',
        one: 'The music it intended to be played fiercly.',
        two: 'The music is intended to be played sweetly.',
        three: 'The music is intended to be played mournfully.',
        four: 'The music is made of chocolate.',
        answer: B
    },
    {
        question: 'What is a Nocturne?',
        one: 'Music inspired by whimsy.',
        two: 'Music inspired by the night.',
        three: 'Music inspired by graveyards.',
        four: 'Music inspired by the stars.',
        answer: B
    },
    {
        question: 'What is objectively the best instrument?',
        one: 'Woodwinds',
        two: 'Brass',
        three: 'Percussion',
        four: 'Strings',
        answer: C
    },
]

var questionCap = 3

gameStart = () => {
    questionNumber = 0
    score = 0
    timer = 30
    availableQuestions = [...questionsArray]
    newQuestion(timer)
    startTimer()
}

newQuestion() = (timer) => {
    if(questionsArray.length === 0 || questionNumber === questionCap || timer <= 0) {
        localStorage.setItem(currentScore)
    }
}

function startTimer(){
    timer = 30
    var timeLeft = setInterval(function(){
        document.getElementById('timerCount').innerHTML= timer;
        timer--;
        if (timer < 0) {
            clearInterval(timeLeft);
            
        }
    }, 1000);
}

// Question one: What is a Rallentando? 
// A. When you suddenly get loud.
// B. When you gradually speed up.
// C. When you gradually slow down.
// D. When you suddenly get quiet. 

// Question two: What does the top number in a time signature mean?
// A. It indicates the number of beats in a measure.
// B. It indicates the number of measures in the length the piece.
// C. It indicates the length value of any given note.
// D. It indicates the number of times a given section is intended to be played.

// Question three: What does "Dulce" mean in music?
// A. The music is intended to be played fiercly.
// B. The music is intended to be played sweetly.
// C. The music is intended to be played mournfully.
// D. The music is made of chocolate.

// Question four: What is a "Nocturne?"
// A. Music inspired by whimsy.
// B. Music inspired by the night.
// C. Music inspired by graveyards.
// D. Music inspied by the stars.

// Question five: What is objectively the best type of musical instrument?
// A. Percussion
// B. Percussion
// C. Percussion
// D. Percussion-->