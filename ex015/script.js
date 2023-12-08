function verif() {
    var tempo = new Date() //DATA
    var data = tempo.getFullYear() //Escolhemos o dado que queremos da variável acima
    
    var nascimento = document.get('iano')
    var ano = (data - nascimento)        
    
    var res = window.document.getElementById('res')
    res.innerHTML = `Você nasceu no ano de ${nascimento} e sua idade é ${ano}`
     
    
}