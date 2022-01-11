//Criar codico para decifrar 
// C = ### U = ##@ B = #@# A = #@@  D = @## E = @#@ M = @@# Y = @@@
// Input Formart : apenas @ ou #, Maximo 100 caracteres
solucao("#@@####@@@##@#@@@#@@@");

function solucao(textoCodificado) {
    
    let respota = "";
    for(i = 0; i < textoCodificado.length; i+=3) {
        const pedaco = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2];
        if (pedaco === "###") {
            respota += "C"
        } else if (pedaco === "##@") {
            respota += "U";
        } else if (pedaco === "#@#") {
            respota += "B";
        } else if (pedaco === "@##") {
            respota += "D";
        } else if (pedaco === "@#@") {
            respota += "E";
        } else if (pedaco === "#@@") {
            respota += "A";
        } else if (pedaco === "@@@") {
            respota += "Y";
        } else  {
            respota += "M";
        }          
    }
    console.log(respota);
}

