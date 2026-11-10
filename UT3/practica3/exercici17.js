// Cas A
let hora = 9;
if (hora < 10 || hora > 18) {
console.log("Accés denegat");
}
// Sortira acces denegat, perque 1 de les condiciones es correcta

// Cas B
let hora = 15;
let capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
console.log("Accés denegat");
}
// No sortira acces denegat perque ninguna de les condiciones es correcta


// Cas C
let hora = 17;
let capDeSetmana = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
console.log("Accés denegat");
}
// No sortira acces denegat perue ninguna condicio es correcta
