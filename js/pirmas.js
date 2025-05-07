console.log("Hello World");


const txt = "Labas pasauli!";
console.log(txt);


// Kintamuju/konstantu deklaravimas
const antrastesElementas = document.getElementById('manoUnikaliAntraste');
let antrastesTekstas = antrastesElementas.innerText;

// Biznio logika
antrastesTekstas += " Tautvydas!";

// Duomenų išvedimas
console.log(antrastesTekstas);
antrastesElementas.innerText = "Tautvydas!";
antrastesElementas.innerHTML = "<strong>Tautvydas!</strong>";    

let naujaAntrastesReiksme = antrastesElementas.innerText;
console.log(naujaAntrastesReiksme);
