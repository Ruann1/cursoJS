let num = document.getElementById('inum')
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
        let item 
        item = arr.push(num.value)
        

        
    }else{
        window.alert('Digite um número válido')
    }
}