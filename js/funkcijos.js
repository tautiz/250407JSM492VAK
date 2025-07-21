function sudeti(argumentas1, argumentas2) {
    let suma = argumentas1 + argumentas2;

    return suma;
}

function cl(a) {
    console.log(a);
}

let skaicSum = sudeti(5, 7);

cl(skaicSum);


// ---------------
let studentai = [
    {
        vardas: 'Tomas',
        pavarde: 'Tomauskas',
        pazymiai: [7, 8, 9, 10]
    },
    {
        vardas: 'Ona',
        pavarde: 'Oniene',
        pazymiai: [8, 9, 10, 10]
    }
];

let studentai2 = [
    {
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
        pazymiai: [7, 8, 9, 10]
    },
    {
        vardas: 'Rita',
        pavarde: 'Ritaite',
        pazymiai: [8, 9, 10, 10]
    }
];

function pazymiuVidurkis(pazymiai) {   
    let suma = 0;
    for (const pazymys of pazymiai) {
        suma += pazymys;
    }
    return suma / pazymiai.length;
}

function sukurtiNaujaStudenta(studentoVardas, vidurkisStudento) {
    return {
        vardas: studentoVardas,
        vidurkis: vidurkisStudento
    };
}

function studentuVidurkiai(studentai) {
    let studentuVidurkiai = [];
    for (const studentas of studentai) {
        let vidurkisStudento = pazymiuVidurkis(studentas.pazymiai);
        let naujasStudentoVariantas = sukurtiNaujaStudenta(studentas.vardas, vidurkisStudento);

        studentuVidurkiai.push(naujasStudentoVariantas);
    }
    return studentuVidurkiai;
}

let studentuVidurkiaiRezultatas = studentuVidurkiai(studentai);
console.log(studentuVidurkiaiRezultatas);
console.log(studentai);
console.log('-------------');
studentuVidurkiaiRezultatas = studentuVidurkiai(studentai2);
console.log(studentuVidurkiaiRezultatas);
console.log(studentai2);
console.log('************************************************');

let vardas = 'Tautvydas';

function pasveikinti(vardas) {
    // document.getElementById('vardas').innerText = 'Labas, ' + vardas;
}

pasveikinti(vardas);

// -------------------
function x() {}

let y = (arg1, arg2) => { console.log(arg1+arg2);};
y(1,2);

let z = y;
z(2,3);
cl(z == y);

console.log('-------------------------------------------------');

function randomArrayGenerator(length, min, max) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return arr;
}

const arr1 = randomArrayGenerator(10, 1, 100);
const arr2 = randomArrayGenerator(10, 1, 100);

console.log(arr1);
console.log(arr2);
console.log('-------------------------------------------------');

let naujasKlasesPavadinimas = "mano gera klase";
let papildomasBalas = 2;

let studentas = {
    vardas: 'Tomas',
    pavarde: 'Tomauskas',
    amzius: 20,
    klasesPavadinimas: '',
    pazymiai: [7, 8, 9, 10],
    vidurkis: function(balas) {
        let suma = 0;
        for (const pazymys of this.pazymiai) {
            suma += pazymys;
        }
        return suma / this.pazymiai.length + balas;
    },
    pasveikinti: function() {
        console.log('Labas, ' + this.vardas + ' iš ' + this.klasesPavadinimas);
    }
};

console.log(studentas.vidurkis(papildomasBalas));
studentas.klasesPavadinimas = naujasKlasesPavadinimas;
studentas.pasveikinti();
console.log('-------------------------------------------------');
const darbuotojas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    atlyginimas: 1000, // dabartinis atlyginimas
    etatas: 1, // 1 reiškia pilnas etatas

    // Funkcija atlyginimo padidinimui procentais
    padidintiAtlyginima: function(procentai) {
        const padidintas = this.atlyginimas * (1 + procentai / 100);
        console.log(`Atlyginimas pakėlus ${procentai}% būtų: ${padidintas.toFixed(2)} EUR`);
        return padidintas;
    },

    // Funkcija atlyginimo paskaičiavimui pagal naują etatą
    pakeistiEtata: function(naujasEtatas) {
        const naujasAtlyginimas = this.atlyginimas * (naujasEtatas / this.etatas);
        console.log(`Atlyginimas dirbant ${naujasEtatas} etato būtų: ${naujasAtlyginimas.toFixed(2)} EUR`);
        return naujasAtlyginimas;
    }
};

// Testavimas
darbuotojas.padidintiAtlyginima(10); // Padidinam atlyginimą 10%
darbuotojas.pakeistiEtata(0.5); // Pereinam prie pusės etato
console.log('-------------------------------------------------');