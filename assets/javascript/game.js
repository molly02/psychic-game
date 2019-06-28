  // string out entire alphabet?? easier way? random letter generator
  var computerchoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var wins = 0;
  var losses = 0;
  var guesses = 9;
  var sofar = [];
  
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var guessesleftText = document.getElementById("guessesleft-text");
  var sofarText = document.getElementById("sofar-text");
  
  
  document.onkeyup = function(event) {
  
      var userguess = event.key;
      var computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];
      
    //  if ((userguess === "a") || (userguess === "b") || (userguess === "c")) {
          
          if (userguess === computerguess) {
              wins++;
              guesses = 9;
              sofar = [];
          }
  
          else { losses++; }
              
              // add in dispay on screen of wins, losses, what letters left
              
              winsText.textContent = "Wins: " + wins;
              lossesText.textContent = "Losses: " + losses;
              guessesleftText.textContent = "Guesses Left: " + guesses;
              sofarText.textContent = "Your Guesses so far: " + userguess.join + ", " ;
              
     // }
          
      };
  