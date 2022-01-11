//operadores lógicos 
// && E
// || OU
// ! NEGAÇÃO

const pessoa = {
    nome: "Rafael",
    idade: 13,
    altura: 1.40, 
    temPassaporte: false
};

// idade minima = 12
// altura mínima = 1.40
if  (pessoa.idade >= 12 && pessoa.altura >= 1.40) {
    console.log(`${pessoa.nome} pode usar o brinquedo.`);
}    else  {
    console.log(`${pessoa.nome} não pode usar o brinquedo.`);
} 

// Exemplo com var boleano
if (!pessoa.temPassaporte) {
    console.log("BARRADO!!!");
}