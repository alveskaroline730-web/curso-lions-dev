const prompt = require('prompt-sync')();
let idade = parseInt(prompt('qual a sua idade?'));
let anoAtual = 2026

let fezAniversario = prompt ('fez aniversario? s/n')

function anonascimento(anoAtual,idade){
    return anoAtual - idade
}
function anonascimentosemaniversario(anoAtual,idade){
    return anoAtual - (idade+1)
}

if (fezAniversario == 's')  {
    console.log(`voce nasceu: ${anonascimento(anoAtual,idade)}`)
    }
 else {
console.log(`voce nasceu:${anonascimentosemaniversario(anoAtual,idade)}`);     
} 