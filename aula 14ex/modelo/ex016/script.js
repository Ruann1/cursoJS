function go() {
    
let inicio = document.getElementById('istart')
let fim = document.getElementById('ifim')
let passo = document.getElementById('ipasso')
let conta = document.getElementById('iconta')

let s = Number(inicio.value)
let f = Number(fim.value)
let p = Number(passo.value)

for(let c = s; c <= f; c += p){

    conta.innerHTML += `${c}`

}

//do{
//    let c = s
//    c += p

//}while(c <= f)

//while(c <= f){
//    let c = s
//    c += p
//    conta.innerHTML += `${c}`
//}

}
