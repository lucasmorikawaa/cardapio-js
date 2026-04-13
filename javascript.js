var prods = [
    {
        id: 1,
        name: "bife",
        price: 30.0,
    },
    {
        id: 2,
        name: "frango",
        price: 25.0,
    },
    {
        id: 3,
        name: "carne-panela",
        price: 22.00
    },
    {
        id: 4,
        name: "farofa",
        price: 10.00
    },
    {
        id: 5,
        name: "salada",
        price: 8.00
    },
    {
        id: 6,
        name: "torresmo",
        price: 12.00
    }

]

function getProductById(id) {
    var product = prods.find(function(item) {
        return item.id == id;
    });

    console.log(product);
}


function addQuantity(id){

    var input = document.getElementById(id);

    var quantity = parseInt(input.value) || 0;

    quantity++;

    input.value = quantity;

}

function removeQuantity(id){

    var input = document.getElementById(id);

    var quantity = parseInt(input.value) || 0;

    if (quantity > 0) {
        quantity--;
    }

    input.value = quantity;
}


function calcularTotal() {

    var quantidade = document.getElementsByClassName("qty"); 
    var output = document.getElementById("output");
    var total = 0;

    output.innerHTML = "";

    for(var input of quantidade){
        var valorQtd = parseInt(input.value) || 0;

        if (valorQtd > 0) { 
            var id = input.id;
            var produto = prods.find(p => p.id == id); 

            if (produto) {
                output.innerHTML += `Produto: ${produto.name} - Preço: R$ ${produto.price.toFixed(2)} - 
                Quantidade: ${valorQtd} </br>`;
                
                total += produto.price * valorQtd;
            }
        }
    }

    output.innerHTML += `<h2>Total: R$ ${total.toFixed(2)}</h2>`;
}