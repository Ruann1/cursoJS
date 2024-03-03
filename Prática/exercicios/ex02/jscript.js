function error(){

    var nome = document.getElementById('inome').value;
    var email = document.getElementById('iemail').value;
    var msg = document.getElementById('imsg').value;

    var error = '';

    if (nome.trim() === '') {
        error += 'Por favor digite seu nome';
    }

    if (email.trim() === '') {
        error += 'Por favor digite seu email';
    }

    if(msg.trim() === '') {
        error += 'Por favor digite uma mensagem';
    }

    if (error !== '') {
        document.getElementById('error').innerText = error;
        event.preventDefault(); // Impede o envio do formulário se houver erros
    }

}

