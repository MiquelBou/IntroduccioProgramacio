const prompt = require("prompt-sync")();
let Edat = Number(prompt("Quina edat tens?"));
let carnetEstudiant = prompt("Tens carnet d'estudiant?");
if (Edat < 18) {
    console.log("Tens descompte");
} else if (Edat > 65) {
    console.log("Tens descompte");
} else if (carnetEstudiant === "si") {
    console.log("Tens descompte");
} else if (carnetEstudiant === "Si") {
    console.log("Tens descompte");
} else {
    console.log("Preu normal");
}