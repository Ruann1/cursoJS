caixa.innerHTML = ''

function analise() {

let num = document.getElementById('inum')
let c = Number(num.value)
let arr = []


if(c == '' || c < 1 || c > 100){
    window.alert('Campo obrigatório invalido!')
}else{

    
    caixa.innerHTML += `O valor ${c} foi adicionado... <br>` 

}

    cons.innerHTML += ` ${arr}`


}