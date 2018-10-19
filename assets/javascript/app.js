var panel = $("#quiz-area");
var countStartNumber = 30;

// next I want to set up my click events before I set up the functions

$(document).on("click", "#start-over", function(){
    game.reset();
});

$(document).on("click", ".answer-button", function(){
    game.clicked();
});

$(document).on("click", "#start", function(){
    $("#subwrapper").prepend("<h2>Time Remaining:  <span id="counter-number">30</span> Seconds</h2>");
    game.loadQuestion();
});

//next we enter the content that will be displayed when I call the function

var questions = [{
    question: "What duo created Rick and Morty?",
    answers: ["Dan Harmon & Dan Schneider", "Justin Roiland & Lady Gaga", "Jack Black & Ice Cube", "Justin Roiland & Dan Harmon"],
    correctAnswer:"Justin Roiland & Dan Harmon",
    image:"assets/images/dance.gif"
}, {
    question: "What is Rick's last name?",
    answers: ["Williams", "Robins", "Sanchez", "Johnson"],
    correctAnswer:"Sanchez",
    image:"assets/images/group.gif"
}, {
    question: "What is Beth's job?",
    answers: ["Security Officer", "Heart Surgeon", "Horse Surgeon", "Model"],
    correctAnswer: "Horse Surgeon"
    image: "assets/images/nice.gif",
},
}];