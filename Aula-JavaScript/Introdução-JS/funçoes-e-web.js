// Funções e aplicação nas páginas Web

// O comando 'function' monta uma função baseada em parâmetros/variáveis. Dentro das 'chaves {}' fica descrição do que a função faz e/ou como opera baseada nos parâmetros.
// No exemplo abaixo temos uma função de soma entre 2 números. Ambos são declarados como parâmetros da função e ao "chamar" a função 'soma', ela retorna a soma entre os 2 números (que devem ser identificados pelo programador).
function soma(n1, n2) {
    return n1 + n2;
};

console.log(`O resultado da soma é ${soma(4, 3)}`);

// Esta função valida a idade como 'true' se for maior de 18 ou 'false' se for menor de 18, e depois retorna no console a mensagem com o valor atribuído à idade e o status de aprovação.
// function valIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return console.log(`Sua idade é ${idade}. Status de Aprovação:${validar}`);
// }

// var idade = prompt("Digite sua idade:");    // Variável 'idade' é declarada como 'prompt' (janela de preenchimento de caracteres na página html).
// console.log(valIdade(idade));               // Imprime na tela o "chamado" da função 'vaLidade(idade)'.

// Esta função está vinculada da tag 'button' dentro da página 'index3.html'. Ao clicar no botão, ele "chama" esta função que injeta o texto na tag 'h3' de id 'click-reponse', aparecendo na página HTML. 
function clickMsg() {
    document.getElementById("click-reponse").innerHTML = "VOCÊ É O MELHOR !!!";
}

function clickMsgNegrito() {
    document.getElementById("click-reponse").innerHTML = "<b>VOCÊ É O MELHOR !!!</b>";
}

function clickMsgVideo() {
    document.getElementById("click-reponse").innerHTML = `<a href="https://www.youtube.com/watch?v=oowBXzfcl90" target="blank">MELHOR VÍDEO DO YOUTUBE</a>`;
}

function clickMsgVideo2() {
    window.open("https://www.youtube.com/watch?v=iWUP9lkrO_w");
}

function clickMsgVideo3() {
    window.location.href = ("https://www.youtube.com/watch?v=g0Q3BnD3agY");
}

function alertTextChange(elemento) {
    // document.getElementById("changed-text").innerHTML = "Obrigado por passar o cursor !!!"
    elemento.innerHTML = "Obrigado por passar o cursor !!!"
}

function alertTextUndo(elemento) {
    // document.getElementById("changed-text").innerHTML = "Passe o cursor aqui"
    elemento.innerHTML = "Passe o cursor aqui"
}

function pageLoaded() {
    alert("A página foi carregada !")
}

function selectChange(elemento) {
    console.log(elemento.value)
}
