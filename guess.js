const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");

let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (userGuess === randomNumber) {
    result.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (userGuess < randomNumber) {
    result.textContent = "Too low! Guess higher.";
  } else {
    result.textContent = "Too high! Guess lower.";
  }
}

guessButton.addEventListener("click", checkGuess);