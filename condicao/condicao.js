// condicionais >=, <=, >, <, ==, !=
// === Verifica se o tipo e conteudo do dado e igual   
// !== Verifica se nenhum o  tipo e conteudo do dado são iguais

const pessoa = {
  nome: "Rafael",
  idade: 80,
  ehMaiorDeIdade: true,
  altura: 1.75 
};

if  (pessoa.idade < 18) {
 //Concatenar 
  console.log(pessoa.nome + " é menor de idade.");
} else if (pessoa.idade < 60) {
// Template  
  console.log(`${pessoa.nome} é adulto.`);
} else {
  console.log(`${pessoa.nome} é um idoso de ${pessoa.idade} anos.`);
}




