function verif() {
    var tempo = new Date() //DATA
    var data = tempo.getFullYear() //Escolhemos o dado que queremos da variável acima
    
    var nascimento = window.document.getElementById('iano').value 
    var ano = data - nascimento        
    
    var res = window.document.getElementById('res')

    var foto = window.document.getElementById('imagem')
    
    
    if (ano < 25) {
        res.innerHTML = `Você nasceu em ${nascimento} e é um jovem de ${ano} anos`
        foto.src = 'jovem-m.png'
    }

}