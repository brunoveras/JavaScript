//Filtrar item na lista 
const lista = ["Arroz", "Feijao", "Batata", "amora"];
const  resultado = [];

for (let item of lista) {
    if (item[0] === "A" || item[0] === "a") {
        resultado.push(item);
    }
}
console.log(resultado);