const numero = [-5, 0, -3, -4, 12];

// Funções que definem se o elemento do Array é par ou ímpar, baseado no cálculo do módulo da divisão.
function par(value) {
    return (value % 2) == 0;
}
function impar(value) {
    return ((value % 2) != 0);
}

// Funções que definem se o elemento do Array é positivo ou negativo, baseado no sinal do elemento.
function pos(value) {
    return value > 0;
}
function neg(value) {
    return value < 0;
}

var pares = numero.filter(par).length;              // Variável que significa o chamado da quantidade de elementos da Array que se enquadram no filtro de número par.
var impares = numero.filter(impar).length;          // Variável que significa o chamado da quantidade de elementos da Array que se enquadram no filtro de número ímpar.

var positivos = numero.filter(pos).length;          // Variável que significa o chamado da quantidade de elementos da Array que se enquadram no filtro de número positivo.
var negativos = numero.filter(neg).length;          // Variável que significa o chamado da quantidade de elementos da Array que se enquadram no filtro de número negativo.

console.log(`${pares} valor(es) par(es)`);          // Imprime no console a quantidade de números pares.
console.log(`${impares} valor(es) ímpar(es)`);      // Imprime no console a quantidade de números ímpares.

console.log(`${positivos} valor(es) positivo(s)`);  // Imprime no console a quantidade de números positivos.
console.log(`${negativos} valor(es) negativo(s)`);  // Imprime no console a quantidade de números negativos.