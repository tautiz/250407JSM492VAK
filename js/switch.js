// random skaičius nuo 0 iki 4
let prize = Math.floor(Math.random() * 4);

switch (prize) {
    case 1:
        console.log('Laimėjai vandens buteliuką!');
        break;
    case 2:
        console.log('Laimėjai limonado!');
        break;
    case 3:
        console.log('Laimėjai arbatos!');
        break;
    case 4:
        console.log('Laimėjai kavos puodelį!');
        break;
    default:
        console.log('Nutiko klaida');
        break;
}
    
for (let i = 0; i < 666666; i+=500) {
    console.log(i);
}