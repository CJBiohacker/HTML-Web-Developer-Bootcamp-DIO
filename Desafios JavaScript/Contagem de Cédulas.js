let valor = 576;
var x = valor;

// Math.floor ==> Arredonda pro número inteiro inferior mais próximo. Utilizado pra alcançar o número exato de notas de cada valor.
var notas100 = Math.floor(x / 100);
var a = (valor - (notas100 * 100));
var notas50 = Math.floor(a / 50);
var b = (a - (notas50 * 50));
var notas20 = Math.floor(b / 20);
var c = (b - (notas20 * 20));
var notas10 = Math.floor(c / 10);
var d = (c - (notas10 * 10));
var notas5 = Math.floor(d / 5);
var e = (d - (notas5 * 5));
var notas2 = Math.floor(e / 2);
var f = (e - (notas2 * 2));
var notas1 = Math.floor(f);


if (valor >= 100) {                    // 576 >= 100 ==> TRUE
    notas100                           // 576/100 = 5,76 ==> arredondando pra 5
} else {
    if (a >= 50) {                     // 76 >= 50  ==> TRUE
        notas50                        // 76/50 = 1,52 ==> arredondando pra 1
    } else {
        if (b >= 20) {                 // 26 >= 20 ==> TRUE
            notas20                    // 26/20 = 2,6 ==> arredondando pra 2
        } else {
            if (c >= 10) {             // 6 >= 10 ==> FALSE
                notas10                // 6/10 = 0,6 ==> arredondando pra 2
            } else {
                if (d >= 5) {          // 6 >= 5 ==> TRUE
                    notas5             // 6/5 = 1,2 ==> arredondando pra 1
                } else {
                    if (e >= 2) {      // 1 >= 2 ==> FALSE
                        notas2         // 1 / 2 ==> arredondando pra 0
                    } else {
                        if (f >= 1) {  // 1 >= 1 ==> TRUE 
                            notas1     // 1 / 1 ==> arredondando pra 1
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