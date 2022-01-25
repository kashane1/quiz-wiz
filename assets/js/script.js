// assigning var to look at certain elements
var startButton = document.querySelector("#startButton");
var quizSection = document.querySelector("article");
var timerEl = document.querySelector("#timer");
var question = document.querySelector("h2");

//assinging all buttons, needed new buttons for each question
var btn1question1 = document.getElementById("button1");
var btn2question1 = document.getElementById("button2");
var btn3question1 = document.getElementById("button3");
var btn4question1 = document.getElementById("button4");
var btn1question2 = document.getElementById("button5");
var btn2question2 = document.getElementById("button6");
var btn3question2 = document.getElementById("button7");
var btn4question2 = document.getElementById("button8");
var btn1question3 = document.getElementById("button9");
var btn2question3 = document.getElementById("button10");
var btn3question3 = document.getElementById("button11");
var btn4question3 = document.getElementById("button12");
var btn1question4 = document.getElementById("button13");
var btn2question4 = document.getElementById("button14");
var btn3question4 = document.getElementById("button15");
var btn4question4 = document.getElementById("button16");
var btn1question5 = document.getElementById("button17");
var btn2question5 = document.getElementById("button18");
var btn3question5 = document.getElementById("button19");
var btn4question5 = document.getElementById("button20");

// Add event listener to the start button
startButton.addEventListener("click", theQuiz);

// creating variables that I will use in different functions
var time = 60;
var gameOver = false;
var score = localStorage.getItem("score", score);

// defining theQuiz function which starts theTimer and question1
function theQuiz() {
    // hides the rules p tags to make it clean and makes the quiz feel ore centered
    var rules = document.querySelector("#rules");
    rules.style.visibility = "hidden";

    // makes the quiz section visible
    quizSection.style.visibility = "visible";
    question.setAttribute('style','visibility: visible');

    quizSection.style.visibility = "visible";
    theTimer()
    question1();
}

// adding comments on q1 but all questions follow same format
function question1() {
    // reveal q1btns
    btn1question1.style.visibility = "visible";
    btn2question1.style.visibility = "visible";
    btn3question1.style.visibility = "visible";
    btn4question1.style.visibility = "visible";

    //assign text content to show the question and new buttons
    question.textContent = "What does JSON stand for?";
    btn1question1.textContent = "JavaScript Open Now";
    btn2question1.textContent = "JavaScrpt Power On";
    btn3question1.textContent = "JavaScript Object Narator";
    btn4question1.textContent = "JavaScript Object Notation"; // correct

    // event listener for each button. this was a really hard part for me. my best solution was to have new buttons for every question
    // nesting the next question in the current question function is probably not best practices and was maybe the cause of most of my problems
    btn1question1.addEventListener("click", function() { 
        time = time - 10;
        question2();
    });
    btn2question1.addEventListener("click", function() {
        time = time - 10;
        question2();
    });
    btn3question1.addEventListener("click", function() {
        time = time - 10;
        question2();
    });
    btn4question1.addEventListener("click", function() {
        question2();
    });
}

function question2() {
    // the only difference from q1 is the later questions have to remove the old questions buttons
    btn1question1.remove();
    btn2question1.remove();
    btn3question1.remove();
    btn4question1.remove();

    btn1question2.style.visibility = "visible";
    btn2question2.style.visibility = "visible";
    btn3question2.style.visibility = "visible";
    btn4question2.style.visibility = "visible";

    question.textContent = "What does DOM stand for?";
    btn1question2.textContent = "Dom from the Fast and the Furious";
    btn2question2.textContent = "Direct Object Mutation";
    btn3question2.textContent = "Document Object Model"; // correct
    btn4question2.textContent = "Distributed Object Model";

    btn1question2.addEventListener("click", function() {
        time = time - 10;
        question3()
    });
    btn2question2.addEventListener("click", function() {
        time = time - 10;
        question3()
    });
    btn3question2.addEventListener("click", function() {
        question3()
    });
    btn4question2.addEventListener("click", function() {
        time = time - 10;
        question3()
    });
}

function question3() {
    btn1question2.remove();
    btn2question2.remove();
    btn3question2.remove();
    btn4question2.remove();

    btn1question3.style.visibility = "visible";
    btn2question3.style.visibility = "visible";
    btn3question3.style.visibility = "visible";
    btn4question3.style.visibility = "visible";

    question.textContent = "What does API stand for?";
    btn1question3.textContent = "Applications I Love";
    btn2question3.textContent = "Article Paragrphs Include";
    btn3question3.textContent = "Asymmetrical Programing Interval";
    btn4question3.textContent = "Application Programming Interface"; // correct

    btn1question3.addEventListener("click", function() {
        time = time - 10;
        question4();
    });
    btn2question3.addEventListener("click", function() {
        time = time - 10;
        question4();
    });
    btn3question3.addEventListener("click", function() {
        time = time - 10;
        question4();
    });
    btn4question3.addEventListener("click", function() {
        question4();
    });
}

function question4() {
    btn1question3.remove();
    btn2question3.remove();
    btn3question3.remove();
    btn4question3.remove();

    btn1question4.style.visibility = "visible";
    btn2question4.style.visibility = "visible";
    btn3question4.style.visibility = "visible";
    btn4question4.style.visibility = "visible";

    question.textContent = "How do you stop setInterval from continuing forever?";
    btn1question4.textContent = "Add return at the bottom of the function";
    btn2question4.textContent = "Run clearInterval() on the function created with setInterval"; // correct
    btn3question4.textContent = "After setting the time in milliseconds, write the end time as well";
    btn4question4.textContent = "Ask it nicely, of course";

    btn1question4.addEventListener("click", function() {
        time = time - 10;
        question5();
    });
    btn2question4.addEventListener("click", function() {
        question5();
    });
    btn3question4.addEventListener("click", function() {
        time = time - 10;
        question5();
    });
    btn4question4.addEventListener("click", function() {
        time = time - 10;
        question5();
    });
}

function question5() {
    btn1question4.remove();
    btn2question4.remove();
    btn3question4.remove();
    btn4question4.remove();

    btn1question5.style.visibility = "visible";
    btn2question5.style.visibility = "visible";
    btn3question5.style.visibility = "visible";
    btn4question5.style.visibility = "visible";

    question.textContent = "Which is not true about localStorage?";
    btn1question5.textContent = "It it stored within the user's browser";
    btn2question5.textContent = "It will be deleted when the browser is closed"; // correct
    btn3question5.textContent = "It can only ever store strings as values";
    btn4question5.textContent = "It allows the programmer to read and write stored information";

    // and the last question has the endGame function nested within the buttons
    btn1question5.addEventListener("click", function() {
        time = time - 10;
        gameOver = true;
        endGame();
    });
    btn2question5.addEventListener("click", function() {
        gameOver = true;
        endGame();
    });
    btn3question5.addEventListener("click", function() {
        time = time - 10;
        gameOver = true;
        endGame();
    });
    btn4question5.addEventListener("click", function() {
        time = time - 10;
        gameOver = true;
        endGame();
    });
}

// defining theTimer function
function theTimer() {
    // adding this line below helped my code show the full 60 seconds. or else it always started at 59 seconds
    timerEl.style.visibility = "visible";

    
    var timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = "Time: " + time + " seconds";

        if(time <= 0) {
            time = 0;
            clearInterval(timerInterval);
            endGame();
        }

        if(gameOver === true){
            clearInterval(timerInterval);
        }
    }, 1000);
}

// defining the endGame function
function endGame() {
    btn1question5.remove();
    btn2question5.remove();
    btn3question5.remove();
    btn4question5.remove();

    // saves the time as the users score, in localStorage
    score = time;
    timerEl.textContent = "";
    question.textContent = "Your score is: " + score;
    localStorage.setItem("score", score);

    // makes the submit form visible to user
    var form = document.querySelector("aside");
    form.style.visibility = "visible";

    // showing the highscores link under the submit form
    var linkScores = document.createElement('div');
    form.append(linkScores);
    linkScores.innerHTML = '<br><a href="./assets/pages/resources.html">View Highscores Page</a>';
    
    // this action records the users initials and score and saves to localStorage
    var save = document.getElementById("save");
    save.addEventListener("click", function(event) {
        event.preventDefault;

        var initials = document.getElementById("userInitials").value;
        console.log(initials);

        localStorage.setItem("userName", initials);
    });
}