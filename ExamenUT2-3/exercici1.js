const prompt = require('prompt-sync') ();

const any = 2026
let nomDelEquip = prompt("quin es el nom de l'equip ?" );
let ram = Number(prompt("Quants GB de Ram te? " ));
let capacitatDelDisc = Number(prompt("Quants GB te el disc? " ));
let anyDeCompra = Number(prompt("Quan va ser a'ny de compra? " ));
let garantiaActiva = prompt("Esta en garantia? " );
let adreçaIp
    console.log(`====== NetLlevant · Inventari ======`)
        console.log(`Èquip: ${nomDelEquip}`)
        console.log(`RAM: ${ram = ram*1024}MB`)
        console.log(`Disc: ${capacitatDelDisc = capacitatDelDisc / 1024}TB`)
        console.log(`El ordinador te ${anysDeCompra = any-anyDeCompra} anys`)
        console.log(`Esta en garantia? (si/no): ${garantiaActiva}`)
    console.log(`---Tipues de Dades---`)
console.log(typeof nomDelEquip)
console.log(typeof ram)
console.log(typeof capacitatDelDisc)
console.log(typeof anyDeCompra)
console.log(typeof garantiaActiva)
console.log(typeof adreçaIp) //l'adreça IP es undefined perque la variable no esta definida