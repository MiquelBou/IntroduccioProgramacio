const prompt = require("prompt-sync")()
let edat = prompt("escriu la teva edat")
if (edat < 18) {
console.log ("Ets menor d'edad")
} else (
    console.log ("Ets major d'edat")
)