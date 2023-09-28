function calcular() {
    // Obtém os valores dos campos de entrada
    var valorEmprestimo = parseFloat(document.getElementById('valorEmprestimo1').value);
    var quantidadeParcela = parseFloat(document.getElementById('quantidadeParcela1').value);

    var juros = (valorEmprestimo*15)/100;//calculo dos 15%
    //let moeda = juros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); - transforma em moeda
    var parcela = valorEmprestimo / quantidadeParcela;
    var valorDaParcelaEmprestimo = parcela + juros;
    var valortotalReceber = valorDaParcelaEmprestimo *quantidadeParcela;

    // Realiza a operação desejada (neste caso, a multiplicação)
   

    // Atualiza o conteúdo do elemento com o ID 'resultado'
    document.getElementById('valorEmprestimo').textContent = 'Valor solicitado do Empréstimo: ' + valorEmprestimo;
   // document.getElementById('juro').textContent = 'valor dos 15% -> Juros: ' + juros;
    document.getElementById('quantidadeParcela').textContent = 'Quantidade de Parcelas: ' + quantidadeParcela;
    document.getElementById('valorDaParcelaEmprestimo').textContent = 'valor Da Parcela Empréstimo: ' + valorDaParcelaEmprestimo;
   // document.getElementById('valortotalReceber').textContent = 'valor Da total a receber: ' + valortotalReceber;

  // alert(calcular());
}

//alert("Entre para testar o valor do empréstimo");



//document.getElementById('resultado').textContent = 'Resultado: ' + resultado;