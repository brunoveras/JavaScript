//Loops for
// break interrope o loop
const listaDeCompras = ["Arroz", "Batata", "Feijao", "Banana", "Cenoura"];

//item localiza  varrendo tudo
/*for (let item of listaDeCompras){
  if (item === "Banana"){
    console.log("Banana está na lista");
  }  
}*/

for (let item of listaDeCompras){
  console.log("Verifivando item: " + item);
  if (item === "Banana"){
    console.log("Banana está na lista");
    break;
  }
}












