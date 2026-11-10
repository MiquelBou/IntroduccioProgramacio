const prompt = require("prompt-sync")();
let graus = prompt("quina temperatura fa en graus celsius?")
if (graus < 10) {
console.log ("FA fred")
} else if (graus > 25) {
    console.log ("Fa calor")
} else (
    console.log ("Temperatura moderada")
)