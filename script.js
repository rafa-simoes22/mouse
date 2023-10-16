// Arquivo script.js

// Função para contar os cliques
function contarClique() {
    let contador = localStorage.getItem("contador") || 0;
    contador = parseInt(contador) + 1;
    localStorage.setItem("contador", contador);
    return contador;
}

// Função para exibir a contagem na página
function exibirContagem() {
    const contadorElement = document.getElementById("contador");
    const contador = contarClique();
    contadorElement.textContent = contador;
}

// Verifique em qual página o script está sendo executado e aja de acordo
if (document.getElementById("textoClicavel")) {
    const textoClicavel = document.getElementById("textoClicavel");
    textoClicavel.addEventListener("click", exibirContagem);
} else if (document.getElementById("contador")) {
    exibirContagem();
}
