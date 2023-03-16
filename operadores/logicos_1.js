let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = "1. Vai para o shopping?";
resultadoE += temDinheiro && estaEnsolarado
console.log(resultadoE);

let resultadoOU = "2. Vai para o shopping?";
resultadoOU += estaEnsolarado || carroEstaNaGaragem
console.log(resultadoOU);

console.log(true != false);

console.log("Não verdadeiro: " + !true);
console.log("Não falso: " + !false);