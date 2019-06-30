var computerchoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesleft = 9;
var guesses = [];

document.getElementById("wins-text").innerHTML = wins;
document.getElementById("losses-text").innerHTML = losses;
document.getElementById("guessesleft-text").innerHTML = guessesleft;

var computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];
  
document.onkeyup = function(event) {
    
  var userguess = event.key;
    
  console.log("computerguess " + computerguess);
  console.log("userguess " + userguess);
    
    if (userguess === computerguess) {
      wins++;
      guessesleft = 9;
      guesses = [];
      computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];
    }
    
    else { 
      guessesleft = guessesleft - 1;
      guesses.push(userguess);
    }
    
    if (guessesleft === 0) {
      guessesleft = 9;
      losses ++;
      guesses = [];
      computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];
    }
    
    document.getElementById("wins-text").innerHTML = wins;
    document.getElementById("losses-text").innerHTML = losses;
    document.getElementById("guessesleft-text").innerHTML = guessesleft;
    document.getElementById("guesses-text").innerHTML = guesses;
  
            };
           