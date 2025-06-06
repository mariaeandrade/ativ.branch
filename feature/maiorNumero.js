function maiorNumero(valor1, valor2, valor3){
    let i = 0;
    let valores = [valor1, valor2, valor3]
    let maior = valores[0];

    while (i < valores.length){
        if (valores[i] > maior){
            maior = valores[i];
        }
        i++;
    }
    console.log(maior);
}


maiorNumero(34,4,123);