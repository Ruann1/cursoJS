var tempo = new Date()
var hora = tempo.getHours()

console.log(`Agora são ${hora} horas!`)

if(hora < 12){
    console.log('Muito bom dia!')
} else if(hora <= 18){
    console.log('Muito boa tarde!')
} else{
    console.log('Muito boa noite!')
}

