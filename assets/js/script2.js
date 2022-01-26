// assigning a variables to grab the list of scores element
var listScores = document.getElementById("listScores");

// assigning variables to read from localStorage
var userName = localStorage.getItem("userName");
var userScore = localStorage.getItem("score");

//these 3 lines are my partial working solution that only get 1 users name and score
var score = document.createElement("li");
score.textContent = userName + " / " + userScore;
listScores.append(score);


// //tried very hard to get this to store more names and scores. couldnt get it to work
// var scoresArray = [];
// var saves = parseInt(localStorage.getItem("saves"));
// var allStored = JSON.parse(localStorage.getItem("allStored"));

// // create 1st list item, when no scores have been sotred yet
// if (allStored == null) {
//     var scoreCreated = document.createElement("li");
//     scoreCreated.textContent = userName + " / " + userScore;
//     listScores.append(scoreCreated);

//     scoresArray[0] = scoreCreated.textContent;

//     var firstSave = 1;
//     localStorage.setItem("saves", firstSave);
//     localStorage.setItem("allStored", JSON.stringify(scoresArray[0]));
// }

// //then when scores have been stored
// if (allStored !== null) {
//     scoresArray = allStored;
//     console.log(scoresArray);

//     userName + " / " + userScore;

//     for (var i = 0; i < saves; i++) {
//         var scoreCreated = document.createElement("li");
//         scoreCreated.textContent = allStored;
//         listScores.append(scoreCreated);
//         saves++;

//         scoresArray[i+1] = scoreCreated.textContent;
//         localStorage.setItem("saves", saves);
//         localStorage.setItem("allStored", JSON.stringify(scoresArray[i+1]));
//     }
// }
