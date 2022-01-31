// assigning var to look at certain elements
var startButton = document.querySelector("#startButton");
var quizSection = document.querySelector("article");
var timerEl = document.querySelector("#timer");
var question = document.querySelector("h2");

// Add event listener to the start button
startButton.addEventListener("click", theQuiz);

// creating variables that I will be used in different functions
var time = 60;
var gameOver = false;

// defining theQuiz function which starts theTimer and question1
function theQuiz() {
    // hides the rules p tags to make it clean and makes the quiz feel ore centered
    var rules = document.querySelector("#rules");
    rules.style.visibility = "hidden";

    // makes the quiz section visible
    quizSection.style.visibility = "visible";
    question.setAttribute('style','visibility: visible');

    quizSection.style.visibility = "visible";
    theTimer();
    question1();
}

// adding comments on q1 but all questions follow same format
function question1() {
    // trying to use jquery to append newly created buttons all in one line
    $('#buttons').append($('<p><button id="button1">JavaScript Open Now</button></p>'));
    $('#buttons').append($('<p><button id="button2">JavaScrpt Power On</button></p>'));
    $('#buttons').append($('<p><button id="button3">JavaScript Object Narator</button></p>'));
    $('#buttons').append($('<p><button id="button4">JavaScript Object Notation</button></p>')); // correct button

    //assign text content to h2 element
    question.textContent = "What does JSON stand for?";

    // creating new events with jquery
    $("#button1").on("click", function() {
        time = time - 10;
        question2();
    });
    $("#button2").on("click", function() {
        time = time - 10;
        question2();
    });
    $("#button3").on("click", function() {
        time = time - 10;
        question2();
    });
    $("#button4").on("click", function() {
        question2();
    });
}

function question2() {
    question.textContent = "What does DOM stand for?";

    // this line of jquery will grab all the children of the element with id #buttons and remove them
    $("#buttons").children().remove();

    //creating new buttons with the new answers, and new ids just in case that old onclick functions are listening?
    $('#buttons').append($('<p><button id="button5">Dom from the Fast and the Furious</button></p>'));
    $('#buttons').append($('<p><button id="button6">Direct Object Mutation</button></p>'));
    $('#buttons').append($('<p><button id="button7">Document Object Model</button></p>')); // correct button
    $('#buttons').append($('<p><button id="button8">Distributed Object Model</button></p>'));

    $("#button5").on("click", function() {
        time = time - 10;
        question3();
    });
    $("#button6").on("click", function() {
        time = time - 10;
        question3();
    });
    $("#button7").on("click", function() {
        question3();
    });
    $("#button8").on("click", function() {
        time = time - 10;
        question3();
    });
}

function question3() {
    $("#buttons").children().remove();

    question.textContent = "What does API stand for?";

    $('#buttons').append($('<p><button id="button9">Applications I Love</button></p>'));
    $('#buttons').append($('<p><button id="button10">Article Paragrphs Include</button></p>'));
    $('#buttons').append($('<p><button id="button11">Asymmetrical Programing Interval</button></p>'));
    $('#buttons').append($('<p><button id="button12">Application Programming Interface</button></p>')); // correct button

    $("#button9").on("click", function() {
        time = time - 10;
        question4();
    });
    $("#button10").on("click", function() {
        time = time - 10;
        question4();
    });
    $("#button11").on("click", function() {
        time = time - 10;
        question4();
    });
    $("#button12").on("click", function() {
        question4();
    });
}

function question4() {
    $("#buttons").children().remove();

    question.textContent = "How do you stop setInterval from continuing forever?";
    
    $('#buttons').append($('<p><button id="button13">Add return at the bottom of the function</button></p>'));
    $('#buttons').append($('<p><button id="button14">Run clearInterval() on the function created with setInterval</button></p>')); // correct button
    $('#buttons').append($('<p><button id="button15">After setting the time in milliseconds, write the end time as well</button></p>'));
    $('#buttons').append($('<p><button id="button16">Ask it nicely, of course</button></p>'));


    $("#button13").on("click", function() {
        time = time - 10;
        question5();
    });
    $("#button14").on("click", function() {
        question5();
    });
    $("#button15").on("click", function() {
        time = time - 10;
        question5();
    });
    $("#button16").on("click", function() {
        time = time - 10;
        question5();
    });
}

function question5() {
    $("#buttons").children().remove();

    question.textContent = "Which is not true about localStorage?";

    $('#buttons').append($('<p><button id="button17">It it stored within the users browser</button></p>'));
    $('#buttons').append($('<p><button id="button18">It will be deleted when the browser is closed</button></p>')); // correct button
    $('#buttons').append($('<p><button id="button19">It can only ever store strings as values</button></p>'));
    $('#buttons').append($('<p><button id="button20">It allows the programmer to read and write stored information</button></p>'));

    // and the last question has the endGame function nested within the buttons

    $("#button17").on("click", function() {
        time = time - 10;
        gameOver = true;
        endGame();
    });
    $("#button18").on("click", function() {
        gameOver = true;
        endGame();
    });
    $("#button19").on("click", function() {
        time = time - 10;
        gameOver = true;
        endGame();
    });
    $("#button20").on("click", function() {
        time = time - 10;
        gameOver = true;
        endGame();
    });
}

// defining theTimer function
function theTimer() {
    // adding this line below helped my code show the full 60 seconds. or else it always started at 59 seconds
    timerEl.style.visibility = "visible";

    // function that sets the timer
    var timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = "Time: " + time + " seconds";

        // stop the timer at 0 and also hides it
        if(time <= 0) {
            time = 0;
            clearInterval(timerInterval);
            timerEl.style.visibility = "hidden";
            endGame();
        }

        // i have this to clear the timer and hide it at the end of the game
        if(gameOver === true){
            clearInterval(timerInterval);
            timerEl.style.visibility = "hidden";
        }
    }, 1000);
}

// defining the endGame function
function endGame() {
    $("#buttons").children().remove();

    // saves the time as the users score, in localStorage
    var score = time;
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
        localStorage.setItem("userName", initials);
    });
}