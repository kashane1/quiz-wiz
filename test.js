
trying something new. copying all my 5 questions here and using an event in the btn functions

again trying something new with onclick in the html and changing that each time.

function question1() {
    quizSection.style.visibility = "visible";
    question.textContent = "What does JSON stand for?";
    btn1.textContent = "JavaScript Open Now";
    btn2.textContent = "JavaScrpt Power On";
    btn3.textContent = "JavaScript Object Narator";
    btn4.textContent = "JavaScript Object Notation"; // correct

    btn1.addEventListener("click", function(event) { 
        time = time - 10;
        question2();
        return
    });
    btn2.addEventListener("click", function() {
        time = time - 10;
        question2();
        return
    });
    btn3.addEventListener("click", function() {
        time = time - 10;
        question2();
        return
    });
    btn4.addEventListener("click", function() {
        question2();
        return
    });

}

function question2() {
    question.textContent = "What does DOM stand for?";
    btn1.textContent = "Dom from the Fast and the Furious";
    btn2.textContent = "Direct Object Mutation";
    btn3.textContent = "Document Object Model"; // correct
    btn4.textContent = "Distributed Object Model";

    btn1.addEventListener("click", function() {
        time = time - 10;
        question3();
        return;
    });
    btn2.addEventListener("click", function() {
        time = time - 10;
        question3();
        return;
    });
    btn3.addEventListener("click", function() {
        question3();
        return;
    });
    btn4.addEventListener("click", function() {
        time = time - 10;
        question3();
        return;
    });
}

function question3() {
    question.textContent = "What does API stand for?";
    btn1.textContent = "Applications I Love";
    btn2.textContent = "Article Paragrphs Include";
    btn3.textContent = "Asymmetrical Programing Interval";
    btn4.textContent = "Application Programming Interface"; // correct

    btn1.addEventListener("click", function() {
        time = time - 10;
        question4();
        return;
    });
    btn2.addEventListener("click", function() {
        time = time - 10;
        question4();
        return;
    });
    btn3.addEventListener("click", function() {
        time = time - 10;
        question4();
        return;
    });
    btn4.addEventListener("click", function() {
        question4();
        return;
    });
}

function question4() {
    question.textContent = "How do you stop setInterval from continuing forever?";
    btn1.textContent = "Add return at the bottom of the function";
    btn2.textContent = "Run clearInterval() on the function created with setInterval"; // correct
    btn3.textContent = "After setting the time in milliseconds, write the end time as well";
    btn4.textContent = "Ask it nicely, of course";

    btn1.addEventListener("click", function() {
        time = time - 10;
        question5();
        return;
    });
    btn2.addEventListener("click", function() {
        question5();
        return;
    });
    btn3.addEventListener("click", function() {
        time = time - 10;
        question5();
        return;
    });
    btn4.addEventListener("click", function() {
        time = time - 10;
        question5();
        return;
    });
}

function question5() {
    question.textContent = "Which is not true about localStorage?";
    btn1.textContent = "It it stored within the user's browser";
    btn2.textContent = "It will be deleted when the browser is closed"; // correct
    btn3.textContent = "It can only ever store strings as values";
    btn4.textContent = "It allows the programmer to read and write stored information";

    btn1.addEventListener("click", function() {
        time = time - 10;
        endGame();
        return;
    });
    btn2.addEventListener("click", function() {
        endGame();
        return;
    });
    btn3.addEventListener("click", function() {
        time = time - 10;
        endGame();
        return;
    });
    btn4.addEventListener("click", function() {
        time = time - 10;
        endGame();
        return;
    });
}






here is the code i tried with event.target and it didnt work too well, going back to first way

function question1() {
    quizSection.style.visibility = "visible";
    question.textContent = "What does JSON stand for?";
    btn1.textContent = "JavaScript Open Now";
    btn2.textContent = "JavaScript Power On";
    btn3.textContent = "JavaScript Object Narator";
    btn4.textContent = "JavaScript Object Notation"; // correct

    allBtns.addEventListener("click", function(event) { //maybe try event?
        var element = event.target;

        if (element.matches("#btn4")) {
            question2();
            return
        } 
        else {
            time = time - 10;
            question2();
            return
        }
    });
}

function question2() {
    question.textContent = "What does DOM stand for?";
    btn1.textContent = "Dom from the Fast and the Furious";
    btn2.textContent = "Direct Object Mutation";
    btn3.textContent = "Document Object Model"; // correct
    btn4.textContent = "Distributed Object Model";

    allBtns.addEventListener("click", function(event) { //maybe try event?
        var element = event.target;

        if (element.matches("#btn3")) {
            question3();
            return
        } 
        else {
            time = time - 10;
            question3();
            return
        }
    });
}

function question3() {
    question.textContent = "What does API stand for?";
    btn1.textContent = "Applications I Love";
    btn2.textContent = "Article Paragrphs Include";
    btn3.textContent = "Asymmetrical Programing Interval";
    btn4.textContent = "Application Programming Interface"; // correct

    allBtns.addEventListener("click", function(event) { //maybe try event?
        var element = event.target;

        if (element.matches("#btn4")) {
            question4();
            return
        } 
        else {
            time = time - 10;
            question4();
            return
        }
    });
}

function question4() {
    question.textContent = "How do you stop setInterval from continuing forever?";
    btn1.textContent = "Add return at the bottom of the function";
    btn2.textContent = "Run clearInterval() on the function created with setInterval"; // correct
    btn3.textContent = "After setting the time in milliseconds, write the end time as well";
    btn4.textContent = "Ask it nicely, of course";

    allBtns.addEventListener("click", function(event) { //maybe try event?
        var element = event.target;

        if (element.matches("#btn2")) {
            question5();
            return
        } 
        else {
            time = time - 10;
            question5();
            return
        }
    });
}

function question5() {
    question.textContent = "Which is not true about localStorage?";
    btn1.textContent = "It it stored within the user's browser";
    btn2.textContent = "It will be deleted when the browser is closed"; // correct
    btn3.textContent = "It can only ever store strings as values";
    btn4.textContent = "It allows the programmer to read and write stored information";

    allBtns.addEventListener("click", function(event) { //maybe try event?
        var element = event.target;

        if (element.matches("#btn2")) {
            endGame();
            return
        } 
        else {
            time = time - 10;
            endGame();
            return
        }
    });
}
