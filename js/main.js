var formulario = document.querySelector('form#contato');
formulario.addEventListener('submit', enviar);

function enviar(evento){
    evento.preventDefault()

    var dados = new FormData(formulario);
    var nome = dados.get('nome');
    var email = dados.get('email');
    var turma = dados.get('turma');
    var motivo = dados.get('motivo');
    var mensagem = dados.get('mensagem');
    console.log(nome, email, motivo, mensagem);

    var resultado = document.createElement('p')
    resultado.style.padding='10px'
    resultado.style.textAlign='center'
    resultado.innerHTML = `${nome}, Mensagem enviada com sucesso!`
    formulario.append(resultado)

    var templateParams = {
        "nome": nome,
        "turma": turma,
        "motivo": motivo,
        "mensagem": mensagem
    };

    emailjs.send('service_9bluslq','template_d740d3e', templateParams)
    .then(function(response) {
                alert('Email enviado com sucesso!')
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                alert(error)
            console.log('FAILED...', error)
            });
}



