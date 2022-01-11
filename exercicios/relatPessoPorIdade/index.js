const pessoas = [
{
    nome: "José",
    idade: 30
},
{
    nome: "Maria",
    idade: 16
},
{
    nome: "Elise",
    idade: 12
},
{
    nome: "Pedro",
    idade: 18
}
];

function criarRelatorio(lista) {
    let maiores = 0;
    let menores = 0;
    
    for(let item of lista) {
    const idade = item.idade;
    if (idade >= 18) {
        maiores++;
    }  else {
        menores++;
    }
    }
    
    const reposta = {
        qtdMaiores: maiores,
        qtdMenores: menores,
        perMaiores: maiores / pessoas.length,
        perMperres: menores / pessoas.length
    };
    console.log(reposta);
}

criarRelatorio(pessoas);


