function mensagem() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var resposta = document .getElementsById("resposta");
    
    if (nome && sobrenome) {
        resposta.innerHTML=`Bom Trabalho ${nome} ${sobrenome}!`;
    }
}

function prox(){
    var botao = document.getElementById("botao");
    botao.addEventListener("click", location = '37.html');
}