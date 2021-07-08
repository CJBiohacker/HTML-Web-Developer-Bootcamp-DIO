// Estrutura de Condicional (if...else)

var idade = prompt(`Qual sua idade ?`);                 // O comando prompt é um método DOM que retorna uma janela com um espaço de preenchimento ao carregar/recarregar a página HTML.

if (idade >= 18) {
    alert(`Desculpe o transtorno.`);
    console.log(`Desculpe o transtorno.`)
} else {
    console.log("VAI PRA CASA, MOLEQUE !!!")
    alert("VAI PRA CASA, MOLEQUE !!!")
}

// Laços de Repetição (while...) (do...while) (for)

var count = 0;

// Laço de repetição 'while'. Enquanto o 'count' for menor do que 5, imprime no console o valor atual do 'count' e soma +1 ao 'count' atual, repetindo o loop.
console.log("Laço de Repetição while")
while (count < 5) {
    console.log(count)
    count++
};

count = 0;  // Atribui o valor 0 ao 'count'.                                             

// Laço de repetição 'do...while'. Imprime no console o valor atual do 'count' e soma +1 ao 'count' atual. Enquanto o 'count' for menor do que 5 repete o loop. 
console.log("Laço de Repetição do...while")
do {
    console.log(count)
    count++
} while (count < 5);

// Laço de repetição 'for'. Para, atribui o valor atual de 'count' para 0, sendo 'count' atual menor do que 5. Imprime no console o valor atual de 'count' e depois soma +1, repetindo o loop se for menor que 5.
console.log("Laço de Repetição for")
for (count = 0; count < 5; count++) {
    console.log(count)
}

// Datas no JavaScript ( new Date(); )

var data = new Date();

console.log(`Dia do mês: ${data.getDate()}`);
console.log(`Dia da semana: ${data.getDay() + 1}ª`);
console.log(`Ano atual: ${data.getFullYear()}`);
console.log(`Hora(s) atual(s): ${data.getHours()}h`);
console.log(`Milissegundos do momento: ${data.getMilliseconds()}ms`);
console.log(`Minuto(s) atual: ${data.getMinutes()}min`);
console.log(`Mês atual: ${data.getMonth() + 1}`);
console.log(`Segundos(s) atual: ${data.getSeconds()}s`);
console.log(`Horário(ms) atual: ${data.getTime()}ms`);

console.log(`Data e Horário atual: ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);

