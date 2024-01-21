const botaoEnviar = document.getElementById('botao-enviar');
const mensagem = document.getElementById('mensagem');

function validaCampo(campoA,campoB) {
    var campoA = document.getElementById('campo-a').value;
    var campoB = document.getElementById('campo-b').value;

    if (campoB > campoA) {
        mensagem.innerHTML = 'Sucesso: <strong>Campo B</strong> é maior que <strong>Campo A</strong>';
        mensagem.classList.add('sucesso');
        mensagem.classList.remove('erro')
    } else {
        mensagem.innerHTML ='Erro: <strong>Campo B</strong> não é maior que <strong>Campo A</strong>';
        mensagem.classList.add('erro')
        mensagem.classList.remove('sucesso');
    }

    mensagem.style.display = 'block';
}

botaoEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    validaCampo();
});