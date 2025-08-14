var inicio = document.querySelector("input#txtnum")
var fim = document.querySelector("input#txtfim")
var passo = document.querySelector("input#txtpasso")
var res = document.querySelector("div#res")



function contar() {
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length  == 0 || passo.value.length  == 0) {
        res.innerHTML='Impossível contar! Faltam dados'
    } else { 
        res.innerHTML='Contando:'
        if(p <= 0){
            alert('[Erro] Tente novamente')
            p = 1 
        }  
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}