let t1 = true;
let t2 = true;

console.log('vamos comprar a TV de 50"?' + (t1 && t2)); /* AND */
console.log('vamos comprar a TV de 50"?' , (t1 && t2)); /* AND */
console.log('vamos comprar a TV de 32"? ' , (t1 !== t2)); /* XOR */
console.log('vamos comprar sorvete? ' , (t1 || t2)); /* OR */

let comprarTV50 = t1 && t2;
let comprarTV32 = t1 !== t2
let tomarSorvete = t1 || t2

console.log(comprarTV50);
console.log(comprarTV32);
console.log(tomarSorvete);


let tomarsorvete = t1 || t2;
console.log('vamos comprar sorvete? ' , tomarsorvete); /* XOR */

console.log('vamos ficar em casa?  ' , (t1 || t2));

let ficarEmCasa = !tomarsorvete;
console.log('vamos ficar em casa?' , ficarEmCasa);