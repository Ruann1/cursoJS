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

    for(let i = 0; i < arr.length; i++){
        
        arr.push(c)
        caixa.innerHTML += `O valor ${c} foi adicionado... <br>` 

    }



    
    
}

    cons.innerHTML += `${arr[i]}`

    


}