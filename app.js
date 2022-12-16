/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input");
message = document.querySelector(".message");

// Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number betweem ${min} and ${max}`, "red");
  }

  // Check if winning number
  if (guess === winningNum) {
    // Game Over - Won

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set Message
    setMessage(`Congrats! You Win! - ${winningNum} is correct 🥳 `, "green");
  } else {
    // Wrong Number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game Over - lost

      // Disable input
      guessInput.disabled = true;
      // Change border color
      guessInput.style.borderColor = "red";
      // Set Message
      setMessage(`Game Over, you lost. The correct number was ${winningNum} 😦 `, "red");
    } else {
      // Game continues - answer wrong

      // change border color
      guessInput.style.borderColor = "red";

      // clear Input
      guessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }

  }
});

// Set Message Function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
