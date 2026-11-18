const prompt = require('prompt-sync') ();

let tipusIncidencia = prompt(`Quina es el tipus d'incidencia: `);
let hores = Number(prompt(`Hores desde que l'incidencia es oberta: `));
let empresa = prompt(`Ets una empresa: (si/no)`);
let servei = prompt(`El servei esta aturat: (si/no)`);
    switch (tipusIncidencia) {
        case xarxa:
            console.log(`4hores, departament *xarxes*`);
            break;
        case hardware:
            console.log(`24hores, *taller*`)
            break;
        case software:
            console.log(`48hores, *Suport d'aplicacions*`)
            break;
    } //no funciona el switch 