// Estrutura de Condicional (if...else)

// var idade = prompt(`Qual sua idade ?`);                 // O comando prompt é um método DOM que retorna uma janela com um espaço de preenchimento ao carregar/recarregar a página HTML.

// if (idade >= 18) {
//     alert(`Desculpe o transtorno.`);
//     console.log(`Desculpe o transtorno.`)
// } else {
//     console.log("VAI PRA CASA, MOLEQUE !!!")
//     alert("VAI PRA CASA, MOLEQUE !!!")
// }

// Laços de Repetição (while...) (do...while) (for...)

var count = 0;

// Laço de repetição 'while'. Enquanto o 'count' for menor do que 5, imprime no console o valor atual do 'count' e soma +1 ao 'count' atual, repetindo o loop.
while (count < 5) {
    console.log(count)
    count++
};

count = 0;  // Atribui o valor 0 ao 'count'.                                             

// Laço de repetição 'do...while'. Imprime no console o valor atual do 'count' e soma +1 ao 'count' atual. Enquanto o 'count' for menor do que 5 repete o loop. 
do {
    console.log(count)
    count++
} while (count < 5);
