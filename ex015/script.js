function verif() {
    var tempo = new Date() //DATA
    var data = tempo.getFullYear() //Escolhemos o dado que queremos da variável acima
    
    var nascimento = window.document.getElementById('iano').value 
    var ano = data - nascimento        
    
    var res = window.document.getElementById('res')
    res.innerHTML = `Você nasceu em ${nascimento} e sua idade é ${ano}`
    

}