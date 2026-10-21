const prompt = require('prompt-sync')();
let numero = prompt('Escriu un número: ');
let numero2 = prompt('Escriu un altre número: ');
console.log(`La suma de ${numero} i ${numero2} és ${Number(numero) + Number(numero2)}.`);
console.log(`La resta de ${numero} i ${numero2} és ${Number(numero) - Number(numero2)}.`);
console.log(`La multiplicació de ${numero} i ${numero2} és ${Number(numero) * Number(numero2)}.`);
console.log(`La divisió de ${numero} i ${numero2} és ${Number(numero) / Number(numero2)}.`);