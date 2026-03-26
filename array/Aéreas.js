const prompt=require('prompt-sync')();

let nome="pedro"
historicoViagens:[
{ destino: "Paris", milhas: 1800 }


]
const novoDestino = prompt("Digite o destino do terceiro voo:");
const novasMilhas = parseInt(prompt("Digite a quantidade de milhas acumuladas:"));
cliente.historico.push({ destino: novoDestino, milhas: novasMilhas });

let somaMilhas = cliente.historico.reduce((acc, voo) => acc + voo.milhas, 0);

const META_UPGRADE = 5000;
 
if (somaMilhas > META_UPGRADE) {
    somaMilhas -= META_UPGRADE; // Resgate automático
    cliente.categoria = "Platinum";
    alert("Parabéns! Você subiu para a categoria Platinum. 5.000 milhas foram convertidas.");
} else {
    cliente.categoria = "Gold";
    const faltantes = META_UPGRADE - somaMilhas;
    alert(`Categoria: Gold. Faltam ${faltantes} milhas para o upgrade Platinum.`);
}

cliente.saldoAtual = somaMilhas;
console.log(cliente);


