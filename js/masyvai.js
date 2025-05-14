let skaiciai = [7, 5, 9, 7, 5];

console.log(skaiciai);
console.log();
//Kiek masyve yra elementų

let skaiciai2 = [8, 6, 5, 4, 1, 2, 8, 9];

let skaiciai2Length = skaiciai2.length;

console.log(skaiciai2Length);

// Nauju element7 pridėjimas
skaiciai.push(8);

skaiciai.push(2);

skaiciai.push(9, 4, 5, 3);

console.log(skaiciai);
console.log();
//Kažkuris narys iš masyvo

let skaiciai3 = [7, 5, 3, 2];

skaiciai3[2];

console.log(skaiciai3[2]);
console.log();
//Paskutinis narys iš masyvo

let skaiciai4 = [7, 5, 3, -2, 8, 7, 5];
//               0  1  2   3  4  5  6
//                               | ---- 7 ----| 
let paskutinioElementoIndeksas = skaiciai4.length - 1; // Paskutinio elemento indeksas = 6

console.log(skaiciai4[paskutinioElementoIndeksas]);
console.log();
// Perrašau sena masyvą ir spausdinu informacija apie jį
skaiciai = [47, 54, 25, 36, 87];

console.log('masyvas:', skaiciai);
console.log('pirmas skaicius is masyvo:', skaiciai[0]);
console.log('nariu masyve kiekis:', skaiciai.length);
console.log('paskutinis skaicius is masyvo:', skaiciai[skaiciai.length - 1]);
console.log();

// Masuvo elementų sumavimas / matematiniai veiksmai
let pazymiai = [8, 7, 9, 9, 8, 9];

console.log('studento pazymiai:', pazymiai);

let suma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4] + pazymiai[5];
let vidurkis = suma / pazymiai.length;

console.log('gauta suma:', suma);
console.log('pazymiu vidurkis:', vidurkis);
console.log();

// Darbas su Sting tipo masyvu
let vardai = ['Jonas', 'Petras', 'Antanas', 'Linas', 'Mantas'];

console.log('vardai:', vardai);
console.log('pirmas vardas:', vardai[0]);
console.log('nariu kiekis:', vardai.length);
console.log('paskutinis vardas:', vardai[vardai.length - 1]);
console.log();

/// ----------------
console.log(pazymiai[0]);
console.log(pazymiai[1]);
console.log(pazymiai[2]);
console.log(pazymiai[3]);
console.log(pazymiai[4]);
console.log();

// -----------------
let suma2 = 0;
let pazymiukiekis = pazymiai.length;

for (let i = 0; i < pazymiukiekis; i++) {
    suma2 += pazymiai[i];
}
console.log('vidurkis: ', suma2 / pazymiukiekis)

console.log();

// -----------------

for (let i = 0; i < vardai.length; i++) {
    let masyvoElementas = vardai[i];
    console.log(masyvoElementas);
    if (masyvoElementas === 'Antanas') {
        console.log('Tavo vardas Antanas');
    }
}
console.log();
// -----------------

skaiciai = [8, 7, 5, 6, 3, 2];

let lyginiu_suma = 0;
let nelyginiu_suma = 0;
let lyginiu_kiekis = 0;
let nelyginiu_kiekis = 0;

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 2 == 0) {
        lyginiu_suma += skaiciai[i];
        lyginiu_kiekis++;
    } else {
        nelyginiu_suma += skaiciai[i];
        nelyginiu_kiekis++;
    }
}

console.log('skaiciai:', skaiciai);
console.log('lyginiu suma:', lyginiu_suma);
console.log('nelyginiu suma:', nelyginiu_suma);
console.log('Lyginiu skaiciu vidurkis:', lyginiu_suma / lyginiu_kiekis);
console.log('Nelyginiu skaiciu vidurkis:', nelyginiu_suma / nelyginiu_kiekis);
console.log();
// -----------------
// --- 6 užduotis ---
const studijuMasyvas = [];

// Ciklas kuris generuoja atsitiktinius duomenis
for (let i = 0; i < 5; i++) {
    let randomString = Math.random().toString(36).substring(2, 7);
    studijuMasyvas.push(randomString);
}

// pavieniui pildomi duomenys
studijuMasyvas.push('IT Inžinerija');
studijuMasyvas.push('Programavimas');
studijuMasyvas.push('Chemija');

// SPausdinam Studiju masyva
console.log('studiju masyvas su console.log() f-ja:', studijuMasyvas);

for (let i = 0; i < studijuMasyvas.length; i++) {
    let studijuMasyvasElementas = studijuMasyvas[i];
    console.log('studiju masyvo elementas: ', studijuMasyvasElementas);
}
console.log();
// -----------------
// --- 7 užduotis ---

//Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis.
// Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada
// nurodant šalį iš masyvo.

const salys = ['Lietuva', 'Latvija', 'Estija', 'Lenkija', 'Vokietija'];
const saliuKiekis = salys.length;

// su FOR ciklu
for (let i = 0; i < saliuKiekis; i++) {
    const salis = salys[i];
    console.log('Šalis : ', salis);
}
console.log();
// su WHILE ciklu
let i = 0;
while (i < saliuKiekis) {
    const salis = salys[i];
    console.log('Šalis : ', salis);
    i++;
}
console.log();
// su do WHILE ciklu
i = 0;
do {
    const salis = salys[i];
    console.log('Šalis : ', salis);
    i++;
}
while (i < saliuKiekis);
console.log();

// -----------------
// --- 8 užduotis ---
//Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite
// šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš
// kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).

const projektai = ['Projektas 1', 'Projektas 2', 'Projektas 3', 'Projektas 4', 'Projektas 5'];
const projektuKiekis = projektai.length;

// su virenu ilgu stringu
for (let i = 0; i < projektuKiekis; i++) {
    const projektas = projektai[i];
    const txt = (i + 1) + ' Projektas (su +) : ' + projektas;

    console.log(txt);
}
console.log();

// su 3 parametrais log funkcijoje
for (let i = 0; i < projektuKiekis; i++) {
    const projektas = projektai[i];
    console.log(
        (i + 1),
        'Projektas (su 3 parametrais) : ',
        projektas
    );
}
console.log();

// su backtick kabutemis
for (let i = 0; i < projektuKiekis; i++) {
    const projektas = projektai[i];
    const txt = `${i + 1} Projektas (su backtiks) : ${projektas}`;

    console.log(txt);
}
console.log();

// -----------------
// --- 9 užduotis ---
// Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.

const skaiciai5 = [];
const skaiciai5Kiekis = 10;
let daugiauNei5Kiekis = 0;

for (let i = 0; i < skaiciai5Kiekis; i++) {
    skaiciai5.push(Math.floor(Math.random() * 100));
}

// su FOR ciklu
for (let i = 0; i < skaiciai5Kiekis; i++) {
    const skaicius = skaiciai5[i];
    if (skaicius > 5) {
        console.log('Skaicius didesnis nei 5:', skaicius);
        daugiauNei5Kiekis++;
    }
}

console.log('Skaiciu masyvas su skaiciais didesniais nei 5: ', daugiauNei5Kiekis);
console.log();
// ------------------------
// --- 10 užduotis ---

skaiciai4 = [];
const skaiciai4Kiekis = 10;

for (let i = 0; i < skaiciai4Kiekis; i++) {
    skaiciai4.push(Math.floor(Math.random() * 100));
}

// su FOR ciklu
for (let i = 0; i < skaiciai4Kiekis; i++) {
    const skaicius = skaiciai4[i];
    if (skaicius % 4 == 0) {
        console.log('Skaicius dalinasi iš 4:', skaicius);
    }
}

console.log();
// -------------------------
// --- 14 užduotis ---
// Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis
// (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje
// eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas
// pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek
// balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.

const pazymiai2 = [];
const pazymiai2Kiekis = 10;

for (let i = 0; i < pazymiai2Kiekis; i++) {
    pazymiai2.push(Math.floor(Math.random() * 10));
}
// su FOR ciklu
for (let i = 0; i < pazymiai2Kiekis; i++) {
    const pazymys = pazymiai2[i];

    if (pazymys >= 5) {
        console.log('Teigiamas pažymys:', pazymys);
    } else {
        const truksta = 5 - pazymys;
        console.log('Neigiamas pažymys:', pazymys, 'Trūksta iki teigiamo:', truksta);
    }
}
console.log();
// -------------------------
// --- pskutine užduotis ---

// -- 1 budas ---
const words = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];
let sumLength = 0;

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    
    let wordLength = word.length;

    console.log(`Word: ${word}, it's length: ${wordLength}`);
    sumLength += wordLength;    
}

console.log('Sum of all words length:', sumLength);
console.log();

//--- 2 budas ---
let allWords = '';

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    
    console.log(`Word: ${word}, it's length: ${word.length}`);
    allWords += word;    
}
console.log('All words:', allWords);
console.log('Sum of all words length:', allWords.length);
console.log();

// -----------
// --- FOR OF užduotis ---
// Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...

const zodziai = ['medis', 'tvora', 'namas', 'sodas', 'kelias'];

for (const i in zodziai) {
    let zodis = zodziai[i];

    console.log(`${i} - ${zodis}`);
}
console.log();
// -----------------
