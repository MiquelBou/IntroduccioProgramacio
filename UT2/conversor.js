const prompt = require('prompt-sync')();

let bytes = Number(prompt(`Insereix numero de bytes: `));
let kilobytes = bytes / 1024;
let megabytes = kilobytes / 1024;
let gigabytes = megabytes / 1024;

let pregunta = "Convertim Bytes a -> KB, MB, GB";
console.log(pregunta);

console.log(`Bytes: ${bytes} `);
console.log(`Kilobytes: ${Math.round(kilobytes * 100) / 100} KB`);
console.log(`Megabytes: ${Math.round(megabytes * 100) / 100} MB`);
console.log(`Gigabytes: ${Math.round(gigabytes * 100) / 100} GB`);

let pregunta2 = "Convertim GB a -> Bytes";
console.log(pregunta2);

let numero2 = Number(prompt(`Insereix la mida en GB: `));
let gigabytes2 = numero2;
console.log(`Mida en bytes: ${gigabytes2 * 1024 * 1024 * 1024} Bytes`);

let pregunta3 = "Calculem el Temps de descàrrega";
console.log(pregunta3);

let numero3 = Number(prompt(`Insereix la Mida del fitxer a descaarregar (GB): `));
let numero4 = Number(prompt(`Quina es la velocitat de descàrrega en Mbps: `));

let midaFitxer = parseFloat(numero3);
let velocitatDescarga = parseFloat(numero4);

let tempsDescarga = (midaFitxer * 1024 * 1024 * 1024 * 8) / (velocitatDescarga * 1000000);

console.log(`Temps de descàrrega: ${Math.round(tempsDescarga * 100) / 100} segons`);