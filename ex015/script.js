function verif() {
    var tempo = new Date() //DATA
    var data = tempo.getFullYear() //Escolhemos o dado que queremos da variável acima
    
    var ano = document.getElementById('iano')
    var form = (ano.value)
    var idade = data - form3
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    document.getElementById('res').innerHTML = `Você nasceu no ano de ${form} e tem ${idade} anos!`

    img.setAttribute('src', 'adulto-m')

    
}