function verif() {
    var tempo = new Date() //DATA
    var data = tempo.getFullYear() //Escolhemos o dado que queremos da variável acima
    
    var nascimento = window.document.getElementById('iano').value 
    var ano = data - nascimento    
    var genero = window.document.getElementById('mas')    
    
    var res = window.document.getElementById('res')

    var foto = window.document.getElementById('imagem')
    
    if (genero === 'mas') {
        if (ano < 5) {
            res.innerHTML = `Você nasceu em ${nascimento} e é um    bebê de ${ano} anos`
            foto.src = 'pessoas/bebe-m.png'
        } else if (ano < 25) {
            res.innerHTML = `Você nasceu em ${nascimento} e é um    jovem de ${ano} anos`
            foto.src = 'pessoas/jovem-m.png'
        }
        else if (ano < 65) {
            res.innerHTML = `Você nasceu em ${nascimento} e é um    adulto de ${ano} anos`
            foto.src = 'pessoas/adulto-m.png'
        } 
        else {
            res.innerHTML = `Você nasceu em ${nascimento} e é um    idoso de ${ano} anos`
            foto.src = 'pessoas/idoso-m.png'
        }
    } else if (genero === fem) {
        if (ano < 5) {
            res.innerHTML = `Você nasceu em ${nascimento} e é um    bebê de ${ano} anos`
            foto.src = 'pessoas/bebe-f.png'
        } else if (ano < 25) {
             res.innerHTML = `Você nasceu em ${nascimento} e é um    jovem de ${ano} anos`
             foto.src = 'pessoas/jovem-f.png'
        }
        else if (ano < 65) {
            res.innerHTML = `Você nasceu em ${nascimento} e é um    adulto de ${ano} anos`
            foto.src = 'pessoas/adulto-f.png'
        } 
        else {
            res.innerHTML = `Você nasceu em ${nascimento} e é um    idoso de ${ano} anos`
            foto.src = 'pessoas/idosa-f.png'
        }
    }

}
