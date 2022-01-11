// Inversor de frases

const texto = "Eu gosto da Cubos Aceademy"

let palavra = "";
const novaFrase = [];
for(let i = 0; i < texto.length; i ++){
    if (texto[i] === " "){
        novaFrase.push(palavra);
        palavra = "";
        continue; 
    }
    palavra += texto[i];
}
novaFrase.push(palavra);

const fraseIvertida = [];
for(let i = novaFrase.length -1; i >= 0; i--){
    fraseIvertida.push(novaFrase[i]);
}
console.log(fraseIvertida)