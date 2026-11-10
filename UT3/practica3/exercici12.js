const prompt = require("prompt-sync")();
let numero = prompt ("di un numero del 1 al 10")
if (numero == 7) {
    console.log("Has endevinat el número!")
} else (
    console.log ("No has encertat. Torna-ho a provar!")
)