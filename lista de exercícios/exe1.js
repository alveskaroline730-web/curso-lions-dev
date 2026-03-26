let resposta;

console.log("Digite o custo de produção do lote:");
process.stdin.once("data", function (data) {
    let custo = Number(data.toString().trim());

    console.log("Digite o valor de venda do lote:");
    process.stdin.once("data", function (data2) {
        let venda = Number(data2.toString().trim());

        processamento(custo, venda);
        process.exit();
    });
});

function processamento(custo, venda) {
    if (isNaN(custo) || isNaN(venda)) {
        console.log("Você não digitou valores numéricos válidos.");
        return; }
    }

    let lucro = venda - custo;

    if (lucro < 500) {
        console.log("Atenção: Margem de lucro perigosamente baixa");
    } else {
        console.log("Margem de lucro saudável: R$ " + lucro.toFixed(2));
}     