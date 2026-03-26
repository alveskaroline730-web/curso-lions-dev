const prompt=require ('prompt-sync')()
let notas=[];
let prova1 = parseFloat(prompt('qual a nota da prova1?'))
let prova2 = parseFloat(prompt('qual a nota da prova2?'))
notas.push(prova1)
notas.push(prova2)
let midia= (notas[0] + notas[1])/2
console.log (midia)