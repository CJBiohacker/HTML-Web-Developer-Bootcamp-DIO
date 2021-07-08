// Funções e aplicação nas páginas Web

// O comando 'funcion' monta uma função baseada em parâmetros/variáveis. Dentro das 'chaves {}' fica descrição do que a função faz e/ou como opera baseada nos parâmetros.
// No exemplo abaixo temos uma função de soma entre 2 números. Ambos são declarados como parâmetros da função e ao 'chamar' a função 'soma', ela retorna a soma entre os 2 números (que devem ser identificados pelo programador).
function soma(n1, n2) {
    return n1 + n2;
};

console.log(`O resultado da soma é ${soma(4, 3)}`);

// Esta função valida a idade como 'true' se for maior de 18 ou 'false' se for menor de 18, e depois retorna no console a mensagem com o valor atribuído à idade e o status de aprovação.
function valIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return console.log(`Sua idade é ${idade}. Status de Aprovação:${validar}`);
}

var idade = prompt("Digite sua idade:");    // Variável 'idade' é declarada como 'prompt' (janela de preenchimento de caracteres na página html).
console.log(valIdade(idade));               // Imprime na tela o 'chamado' da função 'vaLidade(idade)'.

