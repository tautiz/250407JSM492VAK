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