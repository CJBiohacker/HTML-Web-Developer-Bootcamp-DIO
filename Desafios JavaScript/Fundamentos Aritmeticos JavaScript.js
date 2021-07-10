let valor = 576;
var x = valor;

var notas100 = Math.floor(x / 100);      // Arredonda pro número inteiro inferior mais próximo.
var a = (valor - (notas100 * 100));      // a = (valor - total de 'notas de 100' * 100).
var notas50 = );



if (valor > 100) {  // 576 > 100
    notas100
} else {
    if (a > 50) {   //( 576 - 500 = 76) > 50  ==>  Neste caso é 76 > 56
        notas50
    } else {
        if (    ) {   //
            notas20
        } else {
            if (    ) {   //
                notas10
            } else {
                if (    ) {   //
                    notas5
                } else {
                    if (    ) {   //
                        notas2
                    } else {
                        if (    ) {   //
                            notas1
                        }
                    }
                }
            }
        }
    }
}


console.log(valor);
console.log(`${notas100} nota(s) de R$ 100,00`)
console.log(`${notas50} nota(s) de R$ 50,00`)
console.log(`${notas20} nota(s) de R$ 20,00`)
console.log(`${notas10} nota(s) de R$ 10,00`)
console.log(`${notas5} nota(s) de R$ 5,00`)
console.log(`${notas2} nota(s) de R$ 2,00`)
console.log(`${notas1} nota(s) de R$ 1,00`)
