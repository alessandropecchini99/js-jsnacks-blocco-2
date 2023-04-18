// DESCRIZIONE ESERCIZIO
// 1. Creare lista nomi e cognomi
// 2. generare una lista di invitati mischiando nomi e cognomi
// 3. Mostrare la lista a schermo



// ------------------------------------------------------ //



// 1. ARRAY
let nomi = ['Alessandro', 'Lisa', 'Simone', 'Martina', 'Chiara', 'Letizia', 'Domenico', 'Omar'];

let cognomi = ['Pecchini', 'Gasparini', 'Terzo', 'Buono', 'Salatini', 'Pini', 'Simbari', 'Bayadi']


// 2. GENERARE NOMI RANDOMICAMENTE
let nome = nomi[Math.floor(Math.random() * nomi.length)];
let cognome = cognomi[Math.floor(Math.random() * cognomi.length)];


// 3. MOSTRARE IL RISULTATO
console.log(nome + ` ` + cognome);

document.getElementById(`nome_generato`).innerHTML= nome + ` ` + cognome;


// ------------------------------


// ALTRO
function refreshPage(){
    window.location.reload();
} 