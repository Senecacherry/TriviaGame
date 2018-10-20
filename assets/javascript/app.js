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

//next I entered the content that will be displayed when I call the function

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
    correctAnswer: "Horse Surgeon",
    image: "assets/images/nice.gif"
}, {
    question: "What is Rick's 'Universe Number?",
    answers: ["C-142", "C-137", "C-139", "C-133"],
    correctAnswer: "C-137",
    image:"assets/images/shake.gif"
}, {
    question: "What movie does Rick and Morty draw inspiration from?",
    answers: ["Alien", "Starship Troopers", "Back to The Future", "Willy Wonka and The Chocolate Factory"],
    correctAnswer: "Back to The Future",
    image:"assets/images/summer.gif"
}, {
    question: "What device does Rick use for interdimensional travel?",
    answers: ["A wand", "Plumbas", "Portal Gun", "Ray gun"],
    correctAnswer: "Portal Gun",
    image: "assets/images/blink.gif"
}, {
    question: "What actress voices Summer?",
    answers: ["Spencer Grammer", "Laura Bailey", "Amy Schumer", "Tara Strong"],
    correctAnswer: "Spencer Grammer",
    image: "assets/images/annoyed.gif"
}, {
    question: "Who got shot because Beth thought he was a parasite?",
    answers: ["Mr. Meseeks", "Pencilvester", "Mr. Poopybutthole", "Ghost in a Jar"],
    correctAnswer: "Mr. Poopybutthole",
    image:"assets/images/hat.gif"
}];

// Next I am creating the functions

var game = {
    questions:questions,
    currentQuestion: 0,
    counter:countStartNumber,
    correct:0,
    incorrect: 0,

    countdown: function (){

        game.counter--;
        $("#counter-number").html(game.counter);

        if (game.counter === 0){

            console.log("TIME UP");
            game.timeUp();

        }
    },
    
    loadQuestion: function(){
        time = setInterval(game.countdown, 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>" );
        //creating a for loop for the questions
        for (var i=0; i<questions[this.currentQuestion].answers.length; i++){
            panel.append("<button class=answer-button" id="button" + "'data-name='" + questions[this.currentQuestion].answers[i] + "">"" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function(){
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    TimeUp: function(){
        clearInterval(timer);
        $("#counter-number").html(game.counter);
    }

}