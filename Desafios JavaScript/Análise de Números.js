numero = Array(5);

numero[0] = -5;
numero[1] = 0;
numero[2] = -3;
numero[3] = -4;
numero[4] = 12;

pares = numero.filter(par => numero[] % 2 = 0);
impares = numero.filter(ímpar => numero[] % 2 != 0);

positivos = numero.filter(positivo => numero.length > 0);
negativos = numero.filter(negativo => numero.length < 0);

print(pares.length + " valor(es) par(es)");
print(impares.length + " valor(es) impar(es)");

print(positivos.length + " valor(es) positivo(s)");
print(negativos.length + " valor(es) negativo(s)");