

function gerarTabuada() { // selecionando itens do HTML
    let numInput = document.querySelector('input#txtnum')
    let sel = document.querySelector('select#seltab')

    // Validando o campo número preenchido 
    if (numInput.value.length == 0) {
        alert('Por favor, digite um número ')
    } else { // converte o valor do input para numero
        let num = Number(numInput.value)

        sel.innerHTML='' // zera a tabuada 

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option') // cria um elemento <option> dentro da variavel
            
            item.text = `${num} x ${c} = ${num * c}` // Insere dentro da caixa Option um texto 
            item.value = `tab${c}`
            sel.appendChild(item) // adiciona o item ao select
        }

    }


} 