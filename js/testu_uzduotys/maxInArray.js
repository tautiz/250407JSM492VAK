// Funkcija randa didžiausią skaičių masyve
function maxInArray(arr) {
  // Patikriname, ar perduotas argumentas yra masyvas ir ar jis nėra tuščias
  if (!Array.isArray(arr) || arr.length === 0) throw new Error('Array must not be empty');
  // Grąžiname didžiausią masyvo skaičių naudodami Math.max ir išskleisdami masyvą su ...
  return Math.max(...arr);
}

// Eksportuojame funkciją, kad ją būtų galima naudoti kituose failuose
module.exports = maxInArray;
