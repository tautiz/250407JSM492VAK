// Funkcija tikrina, ar pateiktas žodis ar sakinys yra palindromas
function palindrome(str) {
  // Pašaliname visus simbolius, kurie nėra raidės ar skaičiai (įskaitant lietuviškas raides), ir paverčiame į mažąsias raides
  const cleanStr = str.replace(/[^\w\u00C0-\u017F]/g, '').toLowerCase();
  // Apverčiame išvalytą tekstą
  const reverseStr = cleanStr.split('').reverse().join('');
  // Patikriname, ar išvalytas tekstas ir jo apversta versija yra vienodi
  return cleanStr === reverseStr;
}

// Eksportuojame funkciją, kad ją būtų galima naudoti kituose failuose
module.exports = palindrome;
