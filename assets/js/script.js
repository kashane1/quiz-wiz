// Assignment Code
var startButton = document.querySelector("#startButton");
var quizSection = document.querySelector("#quiz");
var timerEl = document.querySelector("#timer");

// Add event listener to the start button
startButton.addEventListener("click", theQuiz);

var time = 60;

function theQuiz() {
    var sectionChange = document.querySelector("section");
    sectionChange.style.visibility = "hidden";

    var quizSection = document.querySelector("article");
    quizSection.style.visibility = "visible";
    
    var allButtons = document.querySelectorAll("button");   
    allButtons.style.visibility = "visible";

    var question = document.getElementById("h2");
    question.style.visibility = "visible";

    var btn1 = quizSection.getElementById("button1");
    var btn2 = quizSection.getElementById("button2");
    var btn3 = quizSection.getElementById("button3");
    var btn4 = quizSection.getElementById("button4");

    theTimer()
    questions();
}

function questions() {


    function question1() {
        quizSection.style.visibility = "visible";
        question.textContent = "What does JSON stand for?";
        btn1.textContent = "JavaScript Open Now";
        btn2.textContent = "JavaScrpt Power On";
        btn3.textContent = "JavaScript Object Narator";
        btn4.textContent = "JavaScript Object Notation";
    }
}

function theTimer() {
    var timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = time + "seconds";

        if(time === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {

}