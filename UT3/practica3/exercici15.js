const prompt = require("prompt-sync")();
let num1 = Number(prompt("Escriu el primer nombre: "));
let num2 = Number(prompt("Escriu el segon nombre: "));
let operacio = prompt("Escriu +, -, *, /: ");
if (operacio === "+") {
    console.log(num1 + num2);
} else if (operacio === "-") {
    console.log(num1 - num2);
} else if (operacio === "*") {
    console.log(num1 * num2);
} else if (operacio === "/") {
    if (num2 !== 0) {
        console.log(num1 / num2);
    } else {
        console.log("no es pot dividir entre zero");
    }

} else {
    console.log("operació no valida");
}