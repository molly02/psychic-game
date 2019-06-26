var computerchoice = ["a", "b", "c"];

var wins = 0;
var losses = 0;

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesleft = document.getElementById("guessesleft");
var sofar = document.getElementById("sofar");


document.onkeyup = function(event) {

    
    var userguess = event.key;
    var computerguess = computerchoice[Math.floor(Math.random() *computerchoice.length)];
    
   // if ((userguess === "a") || (userguess === "b") || (userguess === "c")) {
        
        if ((userguess === "a" && computerguess === "a") ||
        (userguess === "b" && computerguess === "b") ||
        (userguess === "c" && computerguess === "c")) {
            wins ++;
        }
        else { losses ++; }
        
        //} 
        // add in dispay on screen of wins, losses, what letters left
        
        wins.textContent = wins;
        losses.textContent = losses;
        guessesleft.textContent = "testing";
        sofar.textContent = "test";
        
    }
