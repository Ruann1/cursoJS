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

function lista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function analise(){


    if(isNumero(num.value) && !lista(num.value, arr)){
        arr.push(Number(num.value)) // aqui puxa o valor do formulário para o array
        let item = document.createElement('option') // aqui criamos um option para adicionarmos nosso valor na lista 
        item.text = `Valor ${num.value} foi adicionado` //aqui o lado do usuário recebe a mensagem que o número que ele analisou foi adicionado
        lista.appendChild(item) //aqui utilizamos essa tag para adicionar um elemento no caso um número ao FINAL da lista/arrayhc
    }else{
        window.alert('Teste')
    }

}