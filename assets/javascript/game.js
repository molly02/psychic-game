var computerchoice = ["a", "b", "c"];

var wins = 0;
var losses = 0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var sofarText = document.getElementById("sofar-text");


document.onkeyup = function(event) {

    var userguess = event.key;
    var computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];
    
   if ((userguess === "a") || (userguess === "b") || (userguess === "c")) {
        
        if (userguess === computerguess) {
            wins++;
        }
        else { losses++; }
        
        // add in dispay on screen of wins, losses, what letters left
        

        winsText.textContent = "Wins: test " + wins;
        lossesText.textContent = "Losses: tese" + losses;
        guessesleftText.textContent = "Guesses Left: ";
        sofarText.textContent = "Your Guesses so far: " + userguess;
        
    }
        
    };
