let totalGeral = 0;
limpar();

function adicionar() {
    // recuperar valores = nome do produto, quantidade e valor.
    let produto = document.getElementById('produto').value; 
    let nomeProduto = produto.split('-')[0]; // split separa string em arryas
    let valorUnitario = produto.split('R$')[1]; // vem depois
    let quantidadeProduto = document.getElementById('quantidade').value;
    
    // validação se o nome do produto e quantidade existem / marcada
    if (nomeProduto != 'Selecione' && quantidadeProduto > 0) {
        // calcular o preço, o nosso subtotal
        let preco = quantidadeProduto * valorUnitario;
        console.log("" + preco);
        
        // adicionar o produto no carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
            </section>`;
        
        //  atualizar o valor total da compra
        totalGeral += preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = '';
    } else {
        alert('Não é válido');
    }

    
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = ''; 
    document.getElementById('valor-total').textContent = "R$ 0";

}