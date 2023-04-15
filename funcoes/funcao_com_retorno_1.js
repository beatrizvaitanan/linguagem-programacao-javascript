function sempreRetornaUm() {
    return 1;
}

function textoOuNumero(retornaTexto) {
    //return retornaTexto ? "sou um texto" : 123

    if(retornaTexto) {
        return "sou um texto"
    }  

    return 123;
}
    
let valor = sempreRetornaUm();
console.log(valor);

let resultado = textoOuNumero(true);
console.log(resultado);

console.log(textoOuNumero(false));