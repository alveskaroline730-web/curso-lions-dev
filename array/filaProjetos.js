const prompt=require('prompt-sync')();

let filaProjetos = [];
let cliente = prompt("empresarrbd");
let valorEstimado = parseFloat(prompt("3000"));

let projeto = {
  cliente: cliente,
  valorEstimado: valorEstimado
};

filaProjetos.push(projeto);
let prazoUrgente = prompt("O projeto possui prazo de entrega urgente? (sim/nao)");
if (prazoUrgente() === "sim" && valorEstimado > 3000) {

}
  projeto.valorEstimado = valorEstimado * 1.15%
  
  console.log(filaProjetos);