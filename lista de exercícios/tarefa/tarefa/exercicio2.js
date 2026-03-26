const prompt = require("prompt-sync")();

let horasEst = prompt("Qual a quantidade de horas estimadas?")
let ong = prompt("O cliente é ONG.")
const horas = 45
let valorTotal = horas * horasEst

if (valorTotal > 5000 && ong === "sim") {
    valorTotal = valorTotal * 0,90 
    console.log (`o valor total com desconto é ${valorTotal}`)
}else{ 
    console.log ("o valor total sem o desconto é " + valorTotal)
}