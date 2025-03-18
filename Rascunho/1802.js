
function calcularDesconto(preco, desconto) {
    precoComDesconto = preco * desconto;
    console.log("O preço original do produto é:", preco, "O desconto será de:", desconto, ". Com desconto o preço do produto passa a ser:", precoComDesconto);
}

calcularDesconto(20, 0.4);