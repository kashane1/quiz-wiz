// assigning variables to grab certain elements
var listScores = document.getElementById("listScores");
var li = document.createElement("li");

// assigning variables to read from localStorage
var userName = localStorage.getItem("userName");
var userScore = localStorage.getItem("score");
var allSaved = localStorage.getItem("allSaved");

// creates an object of the current user's name and score
var score = {
    userName: userName,
    userScore: userScore
}
console.log(score);

console.log(allSaved);
if (allSaved == null){
    allSaved = score;
    localStorage.setItem("allSaved", allSaved);
}
console.log(allSaved);

// adds that new score to the array of scores in localStorage
localStorage.setItem("allSaved", allSaved + score);

//
for (i = 0; i < allSaved.length; i++) {
    var grab = allSaved[i];
    console.log(grab);
    li.innerHTML = grab.score["userName"] + "  /  " + grab.score["userScore"];
    listScores.append(li);
}



