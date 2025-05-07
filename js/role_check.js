let role;

switch (role) {
    case 'admin':
        console.log('Administratorius');
        break;
    case 'moderator':
        console.log('Moderatorius');
        break;
    case 'user':
        console.log('Vartotojas');
        break;
    default:
        console.log('Svečias');
        break;
}

if (role === 'admin') {
    console.log('Administratorius');

} else if (role === 'moderator') {
    console.log('Moderatorius');

} else if (role === 'user') {
    console.log('Vartotojas');

} else {
    console.log('Svečias');
}

//    ----------------------------------------------------------------------------------

// Skaiciu palyginimas reiksmiu intervalu
const pradzia = 0;
const pabaiga = 50;
let skaicius = 21;

if (pradzia < skaicius && skaicius < pabaiga) {
    console.log('Skaicius yra tarp 0 ir 100');
}
    
//    ----------------------------------------------------------------------------------

// Didžiausios reikšmės radimas
let a = 1;
let b = -2;
let c = -3;
let d = 4;

if (a > b && a > c && a > d) {
    console.log('A yra didziausias');
} else if (b > a && b > c && b > d) {
    console.log('B yra didziausias');
} else if (c > a && c > b && c > d) {
    console.log('C yra didziausias');
} else {
    console.log('D yra didziausias');
}
