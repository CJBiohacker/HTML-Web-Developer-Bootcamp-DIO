{
    let x = 4554;
    let y = 464.6;
    let consumo1 = (x / y).toFixed(3);  // Método que fixa a notação da quantidade de casas após a vírgula. Neste caso, fixado em 3 casas após a vírgula.

    console.log(`${consumo1} km/l`);

    {
        x = 2254;
        y = 124.4;

        consumo1 = (x / y).toPrecision(4);  // Método que define a quantidade de números que aparecem no resultado, arredondando automaticamente para o inteiro mais próximo. (>=5 ==> arredonda para 1) Neste caso, a precisão foi definida para 4 algarismos no total.
        console.log(`${consumo1} km/l`);

        {
            x = 500;
            y = 35.0;

            consumo1 = (x / y).toPrecision(5);  // Método que define a quantidade de números que aparecem no resultado, arredondando automaticamente para o inteiro mais próximo. (>=5 ==> arredonda para 1) Neste caso, a precisão foi definida para 5 algarismos no total.
            console.log(`${consumo1} km/l`);

        }
    }
}