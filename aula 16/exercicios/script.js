let num = document.getElementById('inum')
let numero = Number(num.value)
let lista = document.getElementById('icaixa')
let arr = []

function num(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function lista(l, n){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}



function analise(){


    if(num(numero.value) && lista(numero.value, arr)){
        
    }else{
        
    }

}