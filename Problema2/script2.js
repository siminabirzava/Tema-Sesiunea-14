// Problema 2: 
// Sa se calculeze, folosind instructiunea while, suma primelor n numere pare numere pare. 
// EX: Pentru n = 3, avem numerele 2,4,6 iar suma lor este 12


let n = 15;
let sum = 0; //Pentru numerele pare, primul nr este 0, al doilea este 2 , al treilea este 4, etc..
let nrPar = 2;

while (n > 0) {
    sum = sum + nrPar;
    nrPar = nrPar + 2;
    n++
}


console.log("Suma primelor n numere pare este:", sum);
