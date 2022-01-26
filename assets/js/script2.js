// assigning a variables to grab the list of scores element
var listScores = document.getElementById("listScores");

// assigning variables to read from localStorage
var userName = localStorage.getItem("userName");
var userScore = localStorage.getItem("score");

//these 3 lines are my partial working solution that only get 1 users name and score
// var score = document.createElement("li");
// score.textContent = userName + " / " + userScore;
// listScores.append(score);

// new idea, save userName and userScore into a new localStorage and try to build that array with 2 saved items each time
// found this:
//Another solution would be to write a wrapper that store the array like this:

// localStorage.setItem('names_length', names.length); // need this because i would iterate this many times?
// localStorage.setItem('names_0', names[0]);
// localStorage.setItem('names_1', names[1]);
// localStorage.setItem('names_' + n, names[n]);

var scoresArray = [];

//need to check if atleast 1 score has been saved
var savedScores_0 = localStorage.getItem("savedScores_0")
console.log(savedScores_0);

// if no scores saved, run this
if (savedScores_0 === null){
    var score = document.createElement("li");
    score.textContent = userName + " / " + userScore;
    listScores.append(score);

    scoresArray.push(userName,userScore);
    localStorage.setItem("savedScores_length", scoresArray.length);
    localStorage.setItem("savedScores_0", scoresArray[0]);
    localStorage.setItem("savedScores_1", scoresArray[1]);
    console.log(scoresArray);
} 
// else run this if we have atleast 1 score saved
else  {
    //retrieves the length of scores saved, ie, total number of userName and userScore combined
    var savedScores_length = localStorage.getItem("savedScores_length");
    // iterates over each saved entry and put each one into an array[i]
    for (var i = 0; i < savedScores_length; i++) {
        scoresArray[i] = localStorage.getItem("savedScores_" + i);
    }

    // adds the current new userName and userScore to the end of the array
    scoresArray.push(userName,userScore);
    console.log(scoresArray);

    // iterated over the full array and creates new li element for 2 entries at a time
    for (var i = 0; i < scoresArray.length; i++) {
        var score = document.createElement("li");
        score.textContent = scoresArray[i] + " / " + scoresArray[i+1];
        listScores.append(score);  
        i++;  
    }

    localStorage.setItem("savedScores_length", scoresArray.length);
    savedScores_length = localStorage.getItem("savedScores_length");
    for (var n = 0; n < savedScores_length; n++) {
        localStorage.setItem("savedScores_" + n, scoresArray[n]);
    }
    
}
console.log(scoresArray);



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
