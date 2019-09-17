//var for right and wrong answers
//var for time limit
//var with a boolean to see if the answer was right
//var with an object containing an array with questions and answers
// function containing a for loop for asking questions
// if/else statement to show right and wrong answers
// reset function
$(document).ready(function () {
var rightGuesses = 0;
var wrongGuesses = 0;
var notAnswered = 0;
var qnaIndex = 0;
var timer = 20;
var timerOn = false;
var userGuess = "";
var questionAsked;
var index;
var intervalID;
var batman = [
    {
        question: "In what year was the first Batman comic released?",
        choices: ["1939", "1931", "1945", "1948", "1943"],
        answer: 0,
        images: ["./assets/images/batman.jpg"]
    },
    {
        question: "Who is the voice of the iconic Joker in Batman: the animated series?",
        choices: ["Jack Nicholson", "Cameron Monaghan", "Cesar Romero", "Mark Hamill", "Zach Galifianakis"],
        answer: 3,
        images: ["./assets/images/joker.jpg"]
    },
    {
        question: "Which super villain once broke the back of Batman?",
        choices: ["Joker", "Killer Croc", "Bane", "Ra's Al Ghul", " The Penguin"],
        answer: 2,
        images: ["./assets/images/bane.png"]
    },
    {
        question: "What is the Bat-hounds name?",
        choices: ["Duke", "Ace", "Champ", "Lucky", "Krypto"],
        answer: 1,
        images: ["./assets/images/ace.jpg"]
    },
    {
        question: "Who was the first villain batman ever faced in the comics?",
        choices: ["Joker", "Catwoman", "Two-face", "Penguin", "Hugo Strange"],
        answer: 4,
        images: ["./assets/images/hugoStrange.jpg"]
    },
    {
        question: "Which member of the Batman family later became the Oracle?",
        choices: ["Dick Grayson", "Jason Todd", "Alfred Pennyworth ", "Barbara Gordon", "Bruce Wayne"],
        answer: 3,
        images: ["./assets/images/batgirl.jpg"]
    },
    {
        question: "Which Robin was killed by Batman's arch-nemesis The Joker?",
        choices: ["Damian Wayne", "Jason Todd", "Tim Drake", "Dick Grayson", "Stephanie Brown"],
        answer: 1,
        images: ["./assets/images/robin.jpg"]
    },
]
console.log(batman)
$("#again").hide()
$("#play").on("click", function() {
    $("#play").hide()
    startTimer()
    displayGame()
})
console.log($(this))
console.log(startTimer)

function startTimer(){
    if (timerOn === false) {
        intervalID = setInterval(decrease, 1000);
        timerOn = true
    }
}
function decrease () {
    $("#timer").html("<h3>Time is counting: " + timer + "</h3>")
    timer--;
    if (timer === -1) {
        notAnswered++
        stop()
        $("#question").html("<h3>Times up! The answer is: " + questionAsked.choice[questionAsked.answer] + "</h3>")
        displayGame()
    }
}
function stop() {
    timerOn = false
    clearInterval(intervalID)
}




//creates a random question from the object and displays it on the screen.
function displayGame() {
    index = Math.floor(Math.random() * batman.length);
    questionAsked = batman[index]
    $("#question").html("<h2>" + questionAsked.question + "</h2>")
    for (var i = 0; i < questionAsked.choices.length; i++) {
        //for loop to go through the choices and display them on the page in a <button>
        var userChoices = $("<button>");
        userChoices.addClass("choice");
        userChoices.html(questionAsked.choices[i])
        userChoices.data("value", i);
        $("#question").append(userChoices);
        
    }
}
//on click function
$("#question").on("click", ".choice", function() {
    //changes userGuess from a string to an integer so it can compare to the answer value
    userGuess = parseInt($(this).data("value"));
    console.log($(this))
    if (userGuess === questionAsked.answer) {
        stop();
        rightGuesses++;
        $("#question").html("<h3>Correct!</h3>");
        userGuess = "";
        $("#question").append("<img src=" + questionAsked.images + ">");
        setTimeout(askNewQuestion, 1000);
    } else {
        stop ();
        wrongGuesses++;
        $("#question").html("<h3>Train Harder! The right answer is: " + questionAsked.choices[questionAsked.answer] + "</h3>" );
        userGuess = "";
        $("#question").append("<img src=" + questionAsked.images + ">");
        setTimeout(askNewQuestion, 1000);
    }
    
})

function askNewQuestion() {
    if (index === 0 ) {
        $("#question").empty();
        $("#timer").empty()
        $("#question").html("<h2>Game Over! Here is your score: </h2>")
        $("#question").append("<h3> Correct: " + rightGuesses + "</h3>")
        $("#question").append("<h3> Incorrect: " + wrongGuesses + "</h3>")
        $("#question").append("<h3> Not Guessed: " + notAnswered + "</h3>")
        $("#again").show()
        rightGuesses = 0;
        wrongGuesses = 0;
        notAnswered = 0;
        
    } else { 
    batman.splice(index, 1)
    console.log(index)
    timer = 20
    startTimer()
    displayGame()
    }
}

$("#again").on("click", function() {
    $("#again").hide();
    $("#question").empty();
    displayGame()
    startTimer()
})  



})


