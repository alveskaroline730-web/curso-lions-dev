
const prompt=require('prompt-sync')();//prepara o prompt



let carrinho={
    nomeCliente: "jose",
    tipoAssinatura:"prime",
    freteGratis:false,
    listaPrecos:[]
}

let p1=Number(prompt("preço do produto 1:"));
let p2=Number(prompt("preço do produto 2:"));
let p3=Number(prompt("preço do produto 3:"));
carrinho.listaPrecos.push(p1,p2, p3);

let total = carrinho.listaPrecos.reduce((soma, valor) => soma + valor, 0);
if (total > 200 || carrinho.tipoAssinatura.toLowerCase() === "prime") {
    carrinho.freteGratis = true;
    console.log("Parabéns! Você ganhou FRETE GRÁTIS!");
} else {
    carrinho.freteGratis = false;
    total += 30; 
    console.log("Frete grátis não disponível. Taxa de R$30,00 adicionada.");
}
console.log("Carrinho:", carrinho);
console.log("Valor final a pagar: R$", total.toFixed(2));