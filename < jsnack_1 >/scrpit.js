// DESCRIZIONE ESERCIZIO
// 1. Crea un array vuoto.
// 2. Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.
// 3. Mostra il risultato


// ------------------------------------------------------ //


// VARIABILI
let inserimento;
let join;

// 1. ARRAY
let arrNum = [ ];

// 2. CHIEDO 6 NUMERI E LI INSERISCO NELL'ARRAY
for (i = 1; i <= 6; i++) {
    inserimento = prompt(`inserisci il ${i}° numero:`);
    if ((inserimento % 2) != 0) {
        arrNum.push(inserimento);
    }
}

// 3. MOSTRARE IL RISULTATO
console.log(arrNum);
join = arrNum.join(`,`);
console.log(join);
document.getElementById('risultato').innerHTML=`Ecco i numeri dispari:` + ` ` + join;