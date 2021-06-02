// Variable to store the list of guesses 
let guessess = []
// Variable for store the correct random number 
let correctNumber = getRandomNumber()

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}


// Functionality for playing the whole game

function playGame(){

  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess)
  saveGuessHistory(numberGuess)
  displayHistory()
  
}

// Show the result for if the guess it too high, too low, or correct
function displayResult (numberGuess) {
  if (numberGuess > correctNumber){
    showNumberAbove()
  }
  else if (numberGuess < correctNumber) {
    showNumberBelow()
  }
  else{
    showYouWon()
  }
}





// Initialize a new game by resetting all values and content on the page

 
function initGame(){
  // reandom number reset
  correctNumber = getRandomNumber()
  // Guess History reset
  guessess = []
  // result alert reset
  resetResultContent()
  // Guess history reset
  document.getElementById("history").innerHTML = ''
  // input value reset
  document.getElementById("number-guess").value = ''
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber(){
  let randomNumber = Math.floor(Math.random() * 100) + 1
  return randomNumber
}


// Save guess history 
 

function saveGuessHistory(guess) {

  guessess.push(guess)
}


function displayHistory() {
  let index = guessess.length - 1; 
  let list = "<ul class='list-group'>";
  while(index >= 0){
    list += "<li class='list-group-item'>" + "You guessed " + guessess[index] 
    + "</li>"
    index -= 1
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  dialog = getDialog('won', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}
