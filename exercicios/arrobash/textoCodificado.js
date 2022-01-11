//Criar codico para decifrar 
// C = ### U = ##@ B = #@# A = #@@  D = @## E = @#@ M = @@# Y = @@@
// Input Formart : apenas @ ou #, Maximo 100 caracteres
solucao("#@@####@@@##@#@@@#@@@");

function solucao(textoCodificado) { 
    
    const dicionario = {
        "###": "C",
        "##@": "U",
        "#@#": "B",
        "@##": "D",
        "@#@": "E",
        "#@@": "A",
        "@@@": "Y",
        "@@#": "M",
    };
    
    let respota = "";
    for(i = 0; i < textoCodificado.length; i+=3) {
        const pedaco = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2];
        respota += dicionario[pedaco];     
    }
    console.log(respota);
}

