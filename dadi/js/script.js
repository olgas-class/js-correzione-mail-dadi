// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Elementi Html
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const result = document.getElementById("result");
const resultContainer = document.getElementById("result-container");
const startGameBtn = document.querySelector("button");

let totalUserScore = 0;
let totalComputerScore = 0;

startGameBtn.addEventListener("click", function() {
    // Generare numero per giocatore
    const playerNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    // Generare numero per computer
    const computerNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    console.log(playerNumber, computerNumber);

    // SE giocatore ha il numero più alto
    // messaggio: ha vinto giocatore
    // ALTRIMENTI SE il computer ha il numero più alto
    // messaggio: ha vinto il computer
    // ALTRIMENTI
    // Messaggio: pareggio
    let message = "";
    if (playerNumber > computerNumber) {
        message = "Ha vinto il giocatore";
        totalUserScore++;

    } else if (playerNumber < computerNumber) {
        message = "Ha vinto il computer";
        totalComputerScore++;
    } else {
        message = "Pareggio";
    }

    // Stampare messaggio
    // console.log(message);
    resultContainer.classList.remove("hidden");
    playerScore.innerHTML = playerNumber;
    computerScore.innerHTML = computerNumber;
    result.innerHTML = message;
    console.log(totalUserScore, totalComputerScore);
});


