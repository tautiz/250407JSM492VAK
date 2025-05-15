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
console.log('***********************************************');
// -------------------
// Pavyzdys su FOR IN ciklu
// -------------------
let zmogus = {
  vardas_pavarde: 'Jonas Jonaitis',
  amžius: 45,
  profesija: 'furistas',
  ūgis: 1.8,
  ar_turi_teises: true,
};

for (const raktas in zmogus) {
    let reiksme = zmogus[raktas];
    // Paversti didziosiom raidemis
    if (typeof reiksme == 'string' && raktas == 'vardas_pavarde') {
        reiksme = reiksme.toUpperCase();
    }
    if (raktas == 'amžius') {
        reiksme = new Date().getFullYear() - reiksme;
    }
  console.log(raktas, ':', reiksme);
}

console.log();

let raktas = 'amžius';
console.log(raktas, zmogus[raktas]);
console.log('***********************************************');
// -------------------
// Pavyzdys 2
// -------------------
studentas = {
  vardas: 'Tomas',
  pavarde: 'Tomauskas',
  amžius: 23,
  ūgis: 1.7,
  pazymiai: [7, 7, 8, 7, 9, 8, 10, 9],
  grupe: 'IFM-3/4',
};

for (const raktas in studentas) {
  if (raktas == 'vardas' || raktas == 'pazymiai') {
    console.log(raktas, studentas[raktas]);
  }
}

console.log('-------------');

for (const raktas in studentas) {
  if (typeof studentas[raktas] == 'object') {
    console.log(raktas, studentas[raktas]);
  }
}
console.log('***********************************************');

// -------------------
// Pavyzdys 3
// Navigacijos meniu generavimas
// -------------------
let meniu = [
    {
        pavadinimas: 'Pagrindinis',
        nuoroda: 'index.html',
        ikona: 'home.png',
    },
    {
        pavadinimas: 'Paslaugos',
        nuoroda: 'paslaugos.html',
    },
    {
        pavadinimas: 'Galerija',
        nuoroda: 'galerija.html',
    }
];

let meniuHTML = '<ul>';

    for (const elementas of meniu) {
        meniuHTML += '<li>';
            meniuHTML += '<a href="' + elementas.nuoroda + '">';
                if (elementas.ikona) {
                    meniuHTML += '<img src="' + elementas.ikona + '" alt="Ikona">'; 
                }
                meniuHTML += elementas.pavadinimas;
            meniuHTML += '</a>';
        meniuHTML += '</li>';
    }

meniuHTML += '</ul>';

console.log(meniuHTML);
document.getElementById('desktop-meniu').innerHTML = meniuHTML;
// -------------------