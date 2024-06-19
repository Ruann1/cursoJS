function analise(){

    let num = document.getElementById('inum')
    let valor = Number(num.value)
    let array = []

    

    if(valor < 1 || valor > 100 || valor == ''){
        window.alert('Adicione um número valido')
    }else{
        icaixa.innerHTML = `O número ${valor} foi adicionado <br>`
    }


}
