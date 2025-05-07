let skaicius = 21;

skaicius += ""; // Konvertuojame į string, kad galėtume su skaičiumi dirbti kaip su masyvu

let suma =
  (skaicius[0] ? parseInt(skaicius[0]) : 0) +
  (skaicius[1] ? parseInt(skaicius[1]) : 0) +
  (skaicius[2] ? parseInt(skaicius[2]) : 0) +
  (skaicius[3] ? parseInt(skaicius[3]) : 0) +
  (skaicius[4] ? parseInt(skaicius[4]) : 0) +
  (skaicius[5] ? parseInt(skaicius[5]) : 0);

console.log("Skaitmenų suma:", suma); // Pvz.: 5+8+3+7+2+6 = 31


let kint = (10 * 2 > 0) ? true : false;
console.log(kint); // true
