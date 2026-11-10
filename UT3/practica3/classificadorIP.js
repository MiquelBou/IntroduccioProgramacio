const prompt = require('prompt-sync')();

console.log("ANALIZADOR DE IP")

let num1 = Number(prompt("Escribe el primer octeto: "))
let num2 = Number(prompt("Escribe el segundo octeto: "))
let num3 = Number(prompt("Escribe el tercer octeto: "))
let num4 = Number(prompt("Escribe el cuarto octeto: "))
let ip = (`${num1}.${num2}.${num3}.${num4}`)

if ((num1 >= 0 && num1 <= 255) && (num2 >= 0 && num2 <= 255) && (num3 >= 0 && num3 <= 255) && (num4 >= 0 && num4 <= 255)) {
    console.log(`La IP es: ${ip}`)
} else {
    console.log("IP incorrecta, los numeros deben estar entre 0 y 255")
}

let categoria
if (num1 === 0) {
    categoria = "Reservada";
} else if (num1 <= 126) {
    categoria = "Clase A";
} else if (num1 === 127) {
    categoria = "Loopback";
} else if (num1 <= 191) {
    categoria = "Clase B";
} else if (num1 <= 223) {
    categoria = "Clase C";
} else if (num1 <= 239) {
    categoria = "Clase D";
} else if (num1 <= 255) {
    categoria = "Clase E";
}
console.log(categoria)

switch (categoria) {
case "Clase A": 
    console.log("Mascara: 255.0.0.0")
    break
case "Clase B": 
    console.log("Mascara: 255.255.0.0")
    break
case "Clase C": 
    console.log("Mascara: 255.255.255.0")
    break
default:
    console.log("Mascara no disponible")
    break
}

let privacidad
if (num1 === 10 || num1 === 172 && (num2 >= 16 && num2 <= 31) || num1 === 192 && num2 === 168) {
    privacidad = "Privada"
} else {
    privacidad = "Publica"
}
console.log(privacidad)
