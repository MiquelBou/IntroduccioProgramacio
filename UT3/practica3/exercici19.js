const prompt = require("prompt-sync")();
let numero = Number(prompt("escriu un numero"));
if (numero >= 1 && numero <= 100) {
    console.log("Número correcte");
} else {
    console.log("Número fora del rang");
}