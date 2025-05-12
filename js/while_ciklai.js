// Begalinis while ciklas - vykdomas tol, kol pasiekiamas 'break'
while (true) {
    // Sugeneruojamas atsitiktinis sveikas skaičius nuo 1 iki 100
    let skaicius = Math.floor(Math.random() * 100) + 1;
    console.log(skaicius); // Išvedamas sugeneruotas skaičius

    // Tikrinama ar skaičius dalijasi iš 7 ir iš 2
    if (skaicius % 7 == 0 && skaicius % 2 == 0) {
        console.log('skaicius', skaicius, 'dalinasi is 7 ir is 2'); // Jei sąlyga tenkinama, išvedama žinutė
        break; // Išeinama iš ciklo
    }
}

/// ----------------------
// do...while ciklas - visada įvykdomas bent vieną kartą
// Ciklas kartojamas tol, kol pasiekiamas 'break'

do {
    // Sugeneruojamas atsitiktinis sveikas skaičius nuo 1 iki 100
    let skaicius = Math.floor(Math.random() * 100) + 1;
    console.log(skaicius); // Išvedamas sugeneruotas skaičius

    // Tikrinama ar skaičius dalijasi iš 7 ir iš 2
    if (skaicius % 7 == 0 && skaicius % 2 == 0) {
        console.log('skaicius', skaicius, 'dalinasi is 7 ir is 2'); // Jei sąlyga tenkinama, išvedama žinutė
        break; // Išeinama iš ciklo
    }
} while (true);
    


/// ----------------------
// Pavyzdys su while ciklu, kuris niekada nesuveiks, nes x nėra mažesnis už 10
let x = 10;

while (x < 10) {
    x++; // Padidiname x vienetu
    console.log('x:', x); // Išvedame dabartinę x reikšmę
}

/// ----------------------
// Pavyzdys su do...while ciklu, kuris įvykdomas bent kartą net jei sąlyga netenkina
let y = 10;

do {
    console.log('y:', y);   // Išvedame dabartinę y reikšmę
    y++; // Padidiname y vienetu
} while (y < 10);