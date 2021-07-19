let canvas = document.getElementById("snakeboard");                 // Criação da variável 'canvas' que representa um chamado do elemento HTML 'canvas' pelo  seu id 'snakeboard'.
let context = canvas.getContext("2d");                              // Criação da variável 'context' que chama o método 'getContext' da variável anterior 'canvas', que representa o conceito de renderização bidimensional.
let box = 16;                                                       // Criação da variável 'box' com um valor numérico inteiro. Este nº representa o tamanho do bloco em pixels.
let cobra = []                                                      // Criação da variável 'cobra' que é uma matriz que representa a "cobrinha" do jogo.
cobra[0] = {
    x: box * 16,
    y: box * 16
}

// Função de criação do campo do jogo.
function board() {
    context.fillStyle = "#e0b3ff";                                  // Define a cor de preenchimento do campo do jogo.
    context.fillRect(15, 15, box * 40, box * 30);                   // Desenha o campo à partir da posição (15, 15) com o valor de 'box'* 55 pixels de largura e 'box'* 30 de altura.
}

// Função de criação da "cobrinha".
function snake() {
    for (let i = 0; i < cobra.length; i++) {                        // Cria uma um Loop For que define a composição da "cobrinha" no campo.
        context.fillStyle = "#001a33";                              // Define a cor de preenchimento da "cobrinha".
        context.fillRect(cobra[i].x, cobra[i].y, box, box);         // Desenha a "cobrinha" à partir da posição "índice atual da array 'cobra' de (x, y)" com o valor de 'box' pra largura e altura.
    }
}

board();
snake();

