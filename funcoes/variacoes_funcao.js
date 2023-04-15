//#1 função COM parâmetro e COM retono
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`o resultado final é: ${resultado}`);
console.log(somar(30, 56));

//#2 função COM parâmetros e SEM retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}
exibirMultiplicacao(10, 21);

//#3 função SEM parâmetros e COM retorno
function retornardataAtual() {
    return new Date();
}
console.log(retornardataAtual());

//#4 função SEM parâmetro e SEM retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}
exibirHoraAtual();