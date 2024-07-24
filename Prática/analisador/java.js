let num = document.getElementById('inum')
let lista = document.getElementById('ilista')
let arr = []

function valido(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function presente(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function analisar(){
    if(valido(num.value) && !presente(num.value, arr)){
        
        arr.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Você adicionou o número ${num.value}`
        lista.appendChild(item)
        
    }else{
        window.alert('Digite um número válido')
    }
}

function finalizar(){
    
}

    