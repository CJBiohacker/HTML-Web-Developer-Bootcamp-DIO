// Comando que gera uma janela de notificação toda vez que a página é carregada ou recarregada.
alert("Meu 1º JavaScript dentro do HTML(external).")

// Declaração de variáveis.
var nome = `Carlos Junior`;         // Variável de escopo global com valor atribuído à uma 'string'.
let idade = 31;                     // Variável de escopo local com valor atribuído à um 'number integer'.
const ideo = `Altermundialismo`;    // Constante de escopo global com valor atribuído à uma 'string'.

console.log(`Nome: ${nome}
Idade: ${idade}
Ideologia Política: ${ideo}`);
var questao = `Existe fim para a realidade?`;

console.log(questao);                                   // Comando que 'imprime' um conteúdo dentro do console do navegador.
console.log(questao.replace("realidade", "fantasia"));  // 'Imprime' no console a variável 'questao' com o método de 'replace' que substitui a string 'realidade' por 'fantasia'.
alert(questao.replace("a realidade", "o universo"));    // 'Imprime' no console a variável 'questao' com o método de 'replace' que substitui a string a 'a realidade' por 'o universo'.

console.log(`Nome: ${nome}
Idade: ${idade}
Ideologia Política: ${ideo}`.toUpperCase());            // 'Imprime' no console a frase em strings e as variáveis com o método 'toUpperCase' que formata todas strings em letra maiúscula.

console.log(questao.replace("realidade", "fantasia").toUpperCase());  // 'Imprime' no console a variável 'questao' com o método de 'replace' que substitui a string 'realidade' por 'fantasia', e depois com o método 'toUpperCase' formata todas as strings em letra maiúscula.

// Situação em que ocorre o 'Hoisting' ou 'Içamento' do JavaScript.
console.log(anoAtual - anoNasc);    // 'Imprime' no console a subtração entre as duas variáveis. Como eles foram declaradas após esta linha, o sistema classifica como 'NaN' ou 'Not-a-Number'.
console.log(anoPandemia);           // 'Imprime' no console a variável 'anoPandemia'. Como ela foi declarado após esta linha de código, o sistema classifica como 'undefined'.

var anoPandemia = '2020';
var anoNasc = 1990;
var anoAtual = 2021;

console.log(`Ano em que iniciou a Pandemia: ${anoPandemia}.`);
console.log(anoAtual - anoNasc);

// Arrays
// Criando uma Array
var listaComida = ['Pizza', ' Kebab', ' Lasanha', ' Strogonoff', ' Risoto', ' Salmão'];

console.log(`Lista de Comida: ${listaComida}`);
console.log(`Quarto item da lista: ${listaComida[3]}`);

listaComida.push(' Hot Filadelfia');                            // Adiciona um elemento no final da Array. Neste caso adicionou o Hot Filadelfia.
console.log(`Lista de Comida (atualizada): ${listaComida}`);
console.log(`Nº de elementos: ${listaComida.length}`);          // Imprime no console a extensão da Array.

listaComida.pop();                                              // Remove um elemento do final da Array. Neste caso removeu o Hot Filadelfia.
console.log(`Lista de Comida (atualizada): ${listaComida}`);

listaComida.shift();                                            // Remove um elemento do início da Array. Neste caso removeu a Pizza.
console.log(`Lista de Comida (atualizada): ${listaComida}`);



