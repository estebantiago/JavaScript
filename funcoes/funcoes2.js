console.log('Funcion parimpar --------------------------------------')

function parimpar (n){
    if(n % 2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }

}
let res = parimpar(12)
console.log(res)

console.log(' Function somar ----------------------------------------')

function somar(n1 =0, n2 = 0){  // define que n1 e n2 são iguais a zero, para que se esquecer ou não quiser passar o seguno parametro não der erro
    return n1 + n2
}

let ress = somar(2, 4)
console.log(ress)

console.log('function n ---------------------------------------------')

let n = function(x){
    return x*2
}
console.log(n(2))

console.log('funciton num ------------------------------------------')

let num = (numero1, numero2) => {
    return numero1 / numero2
}

console.log(num(10, 2))