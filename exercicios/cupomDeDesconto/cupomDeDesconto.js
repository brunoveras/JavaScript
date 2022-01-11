//Cupom RANGOBARATO
// apenas  das 12h as 13:59 
// se tiver cupom e estiver detro do horário tem 10% de desconto
// se além disso a compra maior ou igal a 100 reais tem 20% de desconto


function imprimirValordoDesconto(valoDaCompra, hora, cupom) {
    let valorDoDesconto;
    if (cupom === "RANGOBARATO") {
        if (hora >= 12 && hora < 14) {
            if (valoDaCompra >= 100) {
                valorDoDesconto = valoDaCompra * 20/100;
            } else {
                valorDoDesconto = valoDaCompra * 10/100;
            }
            console.log(`O valor do desconto é ${valorDoDesconto}.`);
        } else {
            console.log("Esse cupom não é válido este horário.")
            }
        } else {
            console.log("Não possui nehum cupom aplicável");
        }
}

imprimirValordoDesconto(80, 12, "RANGOBARATO");