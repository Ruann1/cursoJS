let num = document.getElementById('inum')
let lista = document.getElementById('icaixa')
let arr = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function analise(){


    if(isNumero(num.value) && !inlista(num.value, arr)){// o "!" antes da lista está verificando que o número informado NÃO está na lista.
        arr.push(Number(num.value)) // aqui puxa o valor do formulário para o array
        let item = document.createElement('option') // aqui criamos um option para adicionarmos nosso valor na lista 
        item.text = `Valor ${num.value} foi adicionado` //aqui o lado do usuário recebe a mensagem que o número que ele analisou foi adicionado
        lista.appendChild(item) //aqui utilizamos essa tag para adicionar um elemento no caso um número ao FINAL da lista/array

        
    }else{
        window.alert('Digite um valor válido')
    }
}

function finalizar(){

    /* 
    Ao todo temos X números cadastrados;
    O maior valor informado foi X;
    O menor valor informado foi X;
    Somando todos os valores, temos X;
    A média dos valores digitados é X.
    */

    //Esses são os dados que iremos atrás na função de finalizar

    if(arr.length == 0){
        window.alert('Adicione alguns números antes de finalizar!')
    }else{
        
        let maior = 0
        let menor = 0
        let soma = 0
        let total = arr.length

        for(let i in arr){
            soma += arr[i]
            if(arr[i] > maior){
                maior = arr[i]
            }
            if(arr[i] < menor){
                menor = arr[i]
            }
            media = soma / total
        }


        ultimo.innerHTML += `Temos um total de <strong>${arr.length}</strong> números analisados!<br>`
        ultimo.innerHTML += `O maior número analisado foi <strong>${maior}</strong>!<br>`
        ultimo.innerHTML += `O menor número analisado foi <strong>${menor}</strong>!<br>`
        ultimo.innerHTML += `Somando todos os valores, temos <strong>${soma}</strong>!<br>`
        ultimo.innerHTML += `A média dos valores digitados é <strong>${media}</strong>!`
    }
}
