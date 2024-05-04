function go() {

    let numero = document.getElementById('inum')
    let r = Number(numero.value)
    let c = 0
    
    icaixa.innerHTML = " "
    
    if(r){
        window.alert('Por favor digite um número!')
    }else{
        for(let c = 0; c <= 10; c++){

            let total = (c * r)
            icaixa.innerHTML +=  `${r} x ${c} = ${total}` + '<br>' 
    
        }
    }

    

}