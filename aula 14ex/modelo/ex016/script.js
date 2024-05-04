function go() {
    
let inicio = document.getElementById('istart')
let fim = document.getElementById('ifim')
let passo = document.getElementById('ipasso')
let conta = document.getElementById('iconta')
b

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    conta.innerHTML = 'Impossível contar, Faltam dados!'
}else{
    conta.innerHTML = 'Contando.. <br><br>'
    let s = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p <= 0){
        conta.innerHTML = 'Impossível contar passo 0, alterando para 1!<br><br>'
        p = 1
    }
    if(s < f){
        //Contagem Crescente
        for(let c = s; c <= f; c += p)
        conta.innerHTML += ` ${c} `
    }else{
        //Contagem Decrescente 
        for(let c = s; c >= f; c -= p)
        conta.innerHTML += ` ${c} `
    }
}





    






}
