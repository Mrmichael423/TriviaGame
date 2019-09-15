//var for right and wrong answers
//var for time limit
//var with a boolean to see if the answer was right
//var with an object containing an array with questions and answers
// function containing a for loop for asking questions
// if/else statement to show right and wrong answers
// reset function
var rightGuesses = 0;
var wrongGuesses = 0;
var notAnswered = 0;
var timer = 20;
var timerOn = false;
var userChoices;
var questionAsked;
var index
var batman = [
    {
        question: "In what year was the first Batman comic released?",
        choices: ["1939", "1931", "1945", "1948", "1943"],
        answer: 0,
        images: ["./assets/images/250px-BatmanComiclssue1,1940png"]
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
$("#again").hide()
$("#play").on("click", function() {
    $("#play").hide()
    displayGame()
})
//creates a random question from the object and displays it on the screen.
    function displayGame() {
        index = Math.floor(Math.random() * batman.length);
        questionAsked = batman[index]
        $("#question").html("<h2>" + questionAsked.question + "</h2>")
//for loop to go through the choices and display them on the page in a <button>
        for (var i = 0; i < questionAsked.choices.length; i++) {
            userChoices = $("<button>");
            userChoices.addClass("choice");
            userChoices.html(questionAsked.choices[i])
            userChoices.data("value", i);
            $("#answers").append(userChoices);

        }
    }
//on click function
    $("#answers").on("click", ".choice", function() {
        
        if (userChoices === questionAsked.answer) {
            alert("hey")
        }

    })





