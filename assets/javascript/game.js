  // string out entire alphabet?? easier way? random letter generator
  var computerchoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var wins = 0;
  var losses = 0;
  var guesses = 9;
  var sofar = [];
  var computerguess = computerchoice[Math.floor(Math.random() * computerchoice.length)];
  // not a thing - just do document . get element below instead of textcontent
  //var winsText = document.getElementById("wins-text");
  //var lossesText = document.getElementById("losses-text");
  //var guessesleftText = document.getElementById("guessesleft-text");
 // var sofarText = document.getElementById("sofar-text");
  // document.getelement.id("wrong-guesses").innerhtml = wrongguesses.join (" ");
  // use with sofar-text insteadf of wrong guesses
  
  document.onkeyup = function(event) {
  
      var userguess = event.key;
      console.log("computerguess " + computerguess);

    //  if ((userguess === "a") || (userguess === "b") || (userguess === "c")) {
          // reset after guess correctly
          if (userguess === computerguess) {
              wins++;
              // subtract number of guesses, -1
              //add another line of code to reset when it gets to zero
            //  sofar = [];
              document.getElementById("wins-text").innerHTML = wins;
              document.getElementById("losses-text").innerHTML = losses;
              // how to fix?
              document.getElementById("sofar-text").innerHTML = userguess.join ("");
          }
  // add wrong letters with push. wrongguesses.push(letter);
  //if wrong keep wins and losses blank till correct
  //if wrong push it to sofar list
          else { losses++; 
          sofar.push(computerchoice);

          guesses = guesses - 1
          console.log(guesses)


          }
              
              // add in dispay on screen of wins, losses, what letters left

             // winsText.textContent = "Wins: " + wins;
             // lossesText.textContent = "Losses: " + losses;
             // guessesleftText.textContent = "Guesses Left: " + guesses;
             // sofarText.textContent = "Your Guesses so far: " + userguess.join + ", " ;
              
     // }
          
      };
  