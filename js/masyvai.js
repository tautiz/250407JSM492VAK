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
let pazymiai = [8, 7, 9, 9, 8];

console.log('studento pazymiai:', pazymiai);

let suma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
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