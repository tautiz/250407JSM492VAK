// Node.js aplinkoje reikės 'perf_hooks' modulio tiksliam laiko matavimui
const { performance } = require('perf_hooks');

const ITERATION_LIMIT = 6666666666;
const STEPS_TO_TEST = [1, 5, 50, 500];
const NUM_RUNS_PER_CONFIG = 5; // Kiek kartų kartoti kiekvieną testą vidurkiui gauti

console.log(`Pradedami FOR ciklo našumo testai...`);
console.log(`Iteracijų limitas: ${ITERATION_LIMIT.toLocaleString('lt-LT')}`);
console.log(`Testuojami žingsniai: ${STEPS_TO_TEST.join(', ')}`);
console.log(`Kiekvienas testas kartojamas: ${NUM_RUNS_PER_CONFIG} kartus\n`);

const results = [];

// "Apšilimo" fazė (padeda JIT kompiliatoriui optimizuoti)
// Kartais pirmieji paleidimai gali būti lėtesni
console.log("Atliekama apšilimo fazė...");
for (let i = 0; i < ITERATION_LIMIT; i += 1000) {
    let temp = i * 2;
}
console.log("Apšilimas baigtas.\n");


for (const step of STEPS_TO_TEST) {
    let totalDuration = 0;
    const actualIterations = Math.ceil(ITERATION_LIMIT / step);

    console.log(`Testuojamas žingsnis: ${step} (apytiksliai ${actualIterations.toLocaleString('lt-LT')} iteracijų)`);

    for (let run = 0; run < NUM_RUNS_PER_CONFIG; run++) {
        const startTime = performance.now();
        
        // ---- Ciklas, kurį testuojame ----
        let counter = 0; // Minimalus darbas ciklo viduje
        for (let i = 0; i < ITERATION_LIMIT; i += step) {
            counter++; // Arba kita minimali operacija, pvz., let temp = i;
        }
        // ---------------------------------
        
        const endTime = performance.now();
        totalDuration += (endTime - startTime);
    }

    const averageDuration = totalDuration / NUM_RUNS_PER_CONFIG;
    results.push({
        limit: ITERATION_LIMIT,
        step: step,
        actualIterations: actualIterations,
        avgDurationMs: averageDuration
    });
}

console.log("\nTestavimo rezultatai:\n");

// Funkcija gražiai ASCII lentelei formuoti
function printAsciiTable(data) {
    if (!data || data.length === 0) {
        console.log("Nėra duomenų atvaizdavimui.");
        return;
    }

    const headers = ["Limitas", "Žingsnis", "Iteracijos", "Vid. Trukmė (ms)"];
    const columnKeys = ["limit", "step", "actualIterations", "avgDurationMs"];

    // Paruošiame duomenis atvaizdavimui (formatuojame skaičius)
    const displayData = data.map(row => ({
        limit: row.limit.toLocaleString('lt-LT'),
        step: row.step.toLocaleString('lt-LT'),
        actualIterations: row.actualIterations.toLocaleString('lt-LT'),
        avgDurationMs: row.avgDurationMs.toFixed(3) // 3 skaitmenys po kablelio milisekundėms
    }));

    // Apskaičiuojame stulpelių pločius
    const colWidths = headers.map((header, i) => {
        let maxWidth = header.length;
        displayData.forEach(row => {
            const cellValue = String(row[columnKeys[i]]);
            maxWidth = Math.max(maxWidth, cellValue.length);
        });
        return maxWidth;
    });

    // Funkcija eilutės/separatoriaus kūrimui
    const createSeparator = () => '+' + colWidths.map(w => '-'.repeat(w + 2)).join('+') + '+';
    const padCell = (str, width) => ' ' + String(str).padEnd(width) + ' ';

    let tableOutput = createSeparator() + '\n';

    // Antraštės eilutė
    tableOutput += '|' + headers.map((h, i) => padCell(h, colWidths[i])).join('|') + '|\n';
    tableOutput += createSeparator() + '\n';

    // Duomenų eilutės
    displayData.forEach(row => {
        tableOutput += '|' + columnKeys.map((key, i) => padCell(row[key], colWidths[i])).join('|') + '|\n';
    });

    tableOutput += createSeparator();
    console.log(tableOutput);
}

printAsciiTable(results);