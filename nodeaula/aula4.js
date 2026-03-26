let resposta
console.log('Faça uma pergunta')
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta) {
    let numero = Number(resposta);
    if (isNaN(numero)) {
        console.log("Você não digitou um número válido.");
        return;
    }

    if (numero === 0) {
        console.log("O número é zero e não pode ser considerado ímpar.");
    } else if (numero %2 !== 0) {
        console.log("O numero" + numero "é ímpar.");
    } else {
        console.log("O número " + numero + " não é ímpar (ou seja, é par).");
    }
}
