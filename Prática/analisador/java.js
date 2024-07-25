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

    document.getElementById('text').innerHTML = ''
}

function final(){
    
    
    if(arr.length == 0){
        document.getElementById('text').innerHTML = 'Análise os números primeiro'
    }else{
        document.getElementById('text').innerHTML = `Ao todo temos <strong>${arr.length} números </strong>cadastrados; <br> <br>`

        let maior = 0 
        let menor = 0

        for(let i in arr){
            if(arr[i] <= maior){
                maior = arr[i]
                document.getElementById('text').innerHTML += `O maior valor informado foi o ${maior}`
            }
        }        
        }
    
    }

    

    

 /* 
 Ao todo temos X números cadastrados;
 O maior valor informado foi X;
 O menor valor informado foi X;
 Somando todos os valores, temos X;
 A média dos valores digitados é X.
*/





    