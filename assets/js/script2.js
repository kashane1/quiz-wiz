var scoresArray = [];

var listScores = document.getElementById("listScores");

var li = document.createElement("li");

var userName = localStorage.getItem("userName");
console.log(userName);
var userScore = localStorage.getItem("score");
console.log(userScore);


li.innerHTML = userName + "   " + userScore;
listScores.appendChild(li);

