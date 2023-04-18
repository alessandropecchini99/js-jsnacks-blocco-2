// DESCRIZIONE ESERCIZIO
// 1. Creare Array con numeri interi
// 2. Sommare i numeri in posizione dispari
//    for {
//      SE i diviso 2 ha un resto diverso da 0
//      ALLORA aggiungi a alla somma il numero dell'array che ne corrisponde
//    }
// 3. Mostrare il risultato



// -------------------------------------- //



// 1. ARRAY
const arrNum = [1, 11, 1, 11, 1, 11];
console.log(arrNum);

// 2. SOMMO GLI ELEMENTI IN POSIZIONE DISPARI
let somma = 0;

for (i = 0; i < arrNum.length; i++) {
    if (i % 2 !== 0) {
        somma += arrNum[i];
    }
}

// 3. MOSTRO IL RISULTATO
console.log(somma)

document.getElementById(`risultato`).innerHTML= `Il risultato è:` + ` ` + somma;