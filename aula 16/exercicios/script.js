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

    



}
