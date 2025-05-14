let apskritimas = {
    spindulys: 5,
    location: {
        x: 10,
        y: 20
    },
    visability: true
};

console.log(apskritimas.location.y);

apskritimas.location = {x: 100, y: 200};

let savybe = 'location';
console.log(apskritimas[savybe]['y']);

// Uzduotis:
// Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa,
// atsiskaitytų kreditų skaičius, pažymiai, amžius, ūgis, kelintame kurse
// mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į
// vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per
// vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris
// skirtingas pasirinktas savybes.

let studentas = {
    asmenineInfo: {
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
        amzius: 20,
        ugis: 180
    },
    mokymosiIstaiga: {
        kursas: 2,
        kreditai: 60,
        pazymiai: [10, 9, 8, 7],
        studijuPrograma: 'Informatika',
        pavadinimas: 'Vilniaus universitetas'
    }
};

console.log(studentas);
console.log(studentas.asmenineInfo.vardas);
console.log(studentas.mokymosiIstaiga.studijuPrograma);
console.log(studentas.mokymosiIstaiga.pavadinimas);