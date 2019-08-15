//incrementa
var botoesIncrementa = document.querySelectorAll(".btn-incrementa");

for(let botao of botoesIncrementa)
{
    botao.addEventListener('click',incrementa);

    function incrementa()
    {
        var item = botao.closest('.item');

        var input = item.querySelector('.quantidade');
        input.value++;

        var preco = pegaPrecoItem(item);
        adicionarAoTotal(preco);
    }

}



// decrementa
var botoesDecrementa = document.querySelectorAll(".btn-decrementa");

for (let botao of botoesDecrementa)
{
    botao.addEventListener('click',decrementa);

    function decrementa()
    {
        var item = botao.closest('.item');
        
        var input = item.querySelector('.quantidade');
        if (Number(input.value)<=0){
            input.value = 0;
        }
        else {
            input.value--;
            var preco = pegaPrecoItem(item);
            adicionarAoTotal(-preco)
    }
}




}


var formPedido = document.forms.pedido;
formPedido.addEventListener('submit', function(event){
    var contador = 0;

    var inputs = formPedido.querySelectorAll("input.quantidade");
    for (let input of inputs){
        if (input.value>0)
        {
            contador++;
        }
    }

    if (contador == 0)
    {
        alert("Deve ter pelo menos uma pizza no pedido!!!!");
        event.preventDefault();
    }

});


// funções auxiliares
function pegaPrecoItem(item)
{
    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);

}

function adicionarAoTotal(preco)
{
    var elementoTotal = document.querySelector("#total");
    elementoTotal.textContent = preco + Number(elementoTotal.textContent);
}

