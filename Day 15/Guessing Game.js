let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

let userGuess = prompt("Take a guess between 1 and 10, or type 'quit' to exit the game.");

while (userGuess !== randomNumber) {
    if (userGuess === "quit") {
        alert("Quitting Game");
        break;
    }
    userGuess = prompt("Keep trying! Guess again or type 'quit' to exit.");
}

if (userGuess == randomNumber) {
    alert("Congratulations! You've guessed the correct number.");
}