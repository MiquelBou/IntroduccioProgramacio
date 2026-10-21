const prompt = require('prompt-sync')();
let text = prompt('Escriu un text: ');
console.log(typeof text);
console.log(Boolean(text));