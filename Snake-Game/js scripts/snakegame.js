let canvas = document.getElementById("snakeboard");     // Criação da variável 'canvas' que representa um chamado do elemento HTML 'canvas' pelo  seu id 'snakeboard'.
let context = canvas.getContext("2d");                  // Criação da variável 'context' que chama o método 'getContext' da variável anterior 'canvas', que representa o conceito de renderização bidimensional.
let box = 32;                                           // Criação da variável 'box' com um valor numérico inteiro. Este nº representa o tamanho do bloco em pixels.
let cobra = []

cobra[0] = {
    x: box * 8,
    y: box * 8
}


function board() {                                      // Função de criação do campo do jogo.
    context.fillStyle = "#e0b3ff";                      // Define a cor de preenchimento do retângulo
    context.fillRect(15, 15, box * 20, box * 15);       // Desenha o retângulo na posição (10, 10) com 55 pixels de largura e uma altura de 50.
}

function snake() {

}


board();
