//In JavaScript, arrays use numbered indexes.  

//In JavaScript, objects use named indexes.

caixa.innerHTML = ''

function analise() {

let num = document.getElementById('inum')
let c = Number(num.value)
let arr = [];

if(c == '' || c < 1 || c > 100){
    window.alert('Campo obrigatório invalido!')
}else{
    caixa.innerHTML += `O Número ${c} foi adicionado! <br>`
    
    for(let i = c; i = c.length; i++){
        arr[i] = c
        
        
    } 

    cons.innerHTML = `${arr.length}`

`
    

}



    


}