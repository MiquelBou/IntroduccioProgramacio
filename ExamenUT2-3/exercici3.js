const prompt = require('prompt-sync') ();

let velocitatC = Number(prompt(`Quina es la velocidad en Mbps contractada: `));
let velocitat = Number(prompt(`Quina es la velocidad en Mbps del test: `));
let ping = Number(prompt(`Quin es el ping: `));
let paquets = Number(prompt(`Quina es la perdua de paaquets (%): `));
    if (paquets >= 90 && ping <= 30) {
        console.log(`Optima`)
    } else if (paquets >= 70 && ping <=100) {
        console.log(`Acceptable`)
     } else if (paquets > 10 || ping > 200) {
        console.log(`Critica. Avisa al tecnic de guardia`)
     } else {
        console.log(`Deficient. Cal obrir una incidencia`)
     }