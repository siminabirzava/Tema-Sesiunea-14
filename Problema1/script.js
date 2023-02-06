// Problema 1:
// Sa se calculeze maximul si minimul dintre
// trei numere. Rezultatele vor fi salvate in variabilele max, respectiv min




const x = 30;
const y = 15;
const z = 1;

let min;
let max;

if (x < y) {
    min = x;
    if (x < z) {
        min = x;
    } else if (x > z) {
        min = z;
    }
} else if (x > y) {
    min = y;
    if (y < z) {
        min = y;
    } else if (y > z) {
        min = z;

    }
}

console.log("Minimul celor trei numere este:", min);

if (y > x) {
    max = y;
    if (y > z) {
        max = y;
    } else if (z > y) {
        max = z;
    }
} else if (y < x) {
    max = x;
    if (x > z) {
        max = x;
    } else if (x < z) {
        max = z;
    }
}


console.log("Maximul celor trei numere este:", max);