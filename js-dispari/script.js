/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

function checkPariODispari (numero){
    return numero % 2 == 0
}

let pari = false;
const scelta = prompt("pari o dispari?");
pari = (scelta == "pari" ? true : false);


const numPlayer = parseInt(prompt("Inserisci un numero"));
const numComputer = Math.floor(Math.random() * 6 + 1);
console.log(numPlayer);
console.log(numComputer);


const somma = numPlayer + numComputer;
console.log("La somma tra il tuo numero e quello del pc è: " + (checkPariODispari(somma) ? "Pari " : "Dispari "))
console.log(checkPariODispari(somma) == pari ? "Hai vinto " : "Hai perso ");