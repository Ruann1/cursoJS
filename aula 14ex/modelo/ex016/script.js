let inicio = window.document.getElementById('istart')
let ifim = window.document.getElementById('ifim')
let ipasso = window.document.getElementById('ipasso')

let start = Number(inicio.value)
let final = Number(ifim.value)
let passo = Number(ipasso.value)
let total = start + passo

function go(){

    do{
        window.document.getElementById('conta').innerHTML = start
        start += passo 
    } while(start < final);

}



