/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

function checkPalindroma (parola) {
    let check = true;
    for(let i = 0; i < parola.length/2; i++){
        if(parola[i] !== parola[parola.length - 1 - i]){
            check = false;
            return check;
        }
    }
    return check;
}

const parola = prompt("Inserisci una parola");
console.log(`${parola} è palindroma: ` + (checkPalindroma(parola) ? "Si" : "No"));