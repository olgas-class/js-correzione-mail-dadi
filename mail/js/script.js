// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const users = ["pluto@gmail.com", "pippo@gmail.com", "paperino@gmail.com"];

const userEmail = prompt("Inserisci la tua email"); 
// console.log(userEmail);
// console.log(userEmail.toLowerCase());
// console.log(userEmail);
// console.log(userEmail.includes("@"));

let userFound = false;
for (let i = 0; i < users.length; i++) {
    const thisUser = users[i];
    // Se user corrente è uguale all'email dell'utente
        // uesrFound metto a true
    if (thisUser.toLowerCase() === userEmail.toLowerCase()) {
        userFound = true;
        break;
    }
    console.log(thisUser, userFound);
}

// Se l'email è stata trovata
    // Scrivo: puoi eseguire accesso
// Altrimenti
    // Non sei registrato
let message = "";
if (userFound) {
    message = "puoi eseguire l'accesso";    
} else {
    message = "Non sei registrato";
}

alert(message);