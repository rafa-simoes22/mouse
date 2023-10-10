function prox(){
    var botao = document.getElementById("botao");
    botao.addEventListener("click", location = '37.html');
}

function mensagem() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var resposta = document.getElementById("resposta");
    
    if (nome && sobrenome) {
        resposta.textContent = `Bom Trabalho ${nome} ${sobrenome}!`;
    }
}