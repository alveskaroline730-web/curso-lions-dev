const prompt=require('prompt-sync')();
let estoquesTamanhos =[10,15,8];
let vendasP= Number quantas camise(prompt ("tasP que foram vendidas?"))
estoquesTamanhos[0]-=vendasP
if (estoquesTamanhos[0]<5){
console.log("Estoque de luvas tamanho P está crítico!")
}else {
    console.log ("Estoque atualizado. Quantidade restante do tamanho P:"+estoquesTamanhos[0])
}
