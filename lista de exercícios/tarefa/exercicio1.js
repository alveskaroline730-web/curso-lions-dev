const prompt = require("prompt-sync")();

let variavel = prompt("Escreva o valor de produção do lote.")
let variavel2 = prompt("Por quanto foi vendido o lote?")
let variavel3 = variavel2 - variavel
if (variavel3 < 500.00) {
    console.log("Atencão: Margem de lucro perigosamente baixa.")
} else {
    console.log("Margem de lucro saudável: RS: " + variavel3)
}