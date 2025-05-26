let skaiciai = [8, 9, 3, 2, 5, 8, 7];

let iskarpa = skaiciai.slice(2, 4);

console.log('iskarpa', iskarpa);

console.log('----[Masyvu kopija]-------------------------------------------');

let kopija = skaiciai.slice();

console.log('kopija', kopija);

let kopija2 = [...skaiciai];

console.log('kopija 2', kopija2);

console.log('----[Spread operatorius objektuose ]-------------------------------------------');
let dog = {name: 'Toby', age: 3, breed: 'Beagle', size: 'small'}

// Kopijuoti šuns objektą ir atnaujinti jo reikšmes

let puppy = {...dog, name: 'Max', age: 1, color: 'brown'};

console.log('puppy objektas', puppy);

console.log('suns objektas', dog);

console.log('----[Paieska objektu masyve]-------------------------------------------');

let zmones = [
    { vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 20 },
    { vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 20 },
    { vardas: 'Paulius', pavarde: 'Paulenas', amzius: 20 },
];

console.log('zmones', zmones);

let nerastasZmogus = zmones.find(zmogus => zmogus.vardas === 'Jaronimas');

console.log('zmogus nerastas', nerastasZmogus);

console.log('----[ Masyvo elementų apjungimas į teksto eilutę ]-------------------------------------------');

let tekstas = skaiciai.join(' - ');

console.log('sujungtas i teksta', tekstas);

console.log('----[ Teksto eilutės pavertimas į masyvo elementus ]-------------------------------------------');

let tekstas2 = "koks nors sakinys ; is keliu; zodziu";

let zodziai = tekstas2.split('');

console.log('zodziai is teksto eilutes', zodziai);

console.log('----[ MAP funkcija ]-------------------------------------------');

skaiciai = [4, 7, 8, 9, 6, 5, 8, 2];

console.log('skaiciai', skaiciai);

let dvigubi = skaiciai.map(x => x * 2);

console.log('dvigubi skaiciai', dvigubi);

let trigubi = skaiciai.map(x => {
    ++x; // padidinam kiekviena skaiciu vienetu
    return x * 3;
});

console.log('trigubi skaiciai', trigubi);

console.log('----[ MAP su Objektais ]-------------------------------------------');
zmones = [

{ vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 21 },

{ vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 22 },

{ vardas: 'Paulius', pavarde: 'Paulenas', amzius: 20 },

];

console.log('zmones', zmones);

let suformatuotiZmones = zmones.map(x => `${x.vardas} ${x.pavarde} (${x.amzius} m.)`);

console.log('suformatuoti zmones', suformatuotiZmones);
