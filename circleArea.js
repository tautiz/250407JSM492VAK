// Funkcija apskaičiuoja apskritimo plotą pagal formulę S = π * r^2
function circleArea(r) {
  // Patikriname, ar perduotas spindulys yra skaičius ir ar jis nėra neigiamas
  if (typeof r !== 'number' || r < 0) throw new Error('Invalid radius');
  // Apskaičiuojame plotą: π * r * r
  return Math.PI * r * r;
}

// Eksportuojame funkciją, kad ją būtų galima naudoti kituose failuose
module.exports = circleArea;
