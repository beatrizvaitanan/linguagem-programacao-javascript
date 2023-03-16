// TABELA DE NOTAS
// 9.0 - 10.0 ---> A
// 8.9 - 7.0 ---> B
// 6.9 - 5.0 ---> C
// 4.9 - 4.5 ---> D
// <= 4.5 ---> E

const nota = 1.95;

if (nota >= 9 && nota <= 10) {
    console.log("A");}

if (nota >= 7.0 && nota <=8.9) {
    console.log("B");}

if (nota >= 5.0 && nota <=6.9) {
    console.log("C"); }

if (nota >= 4.5 && nota <=4.9) {
    console.log("D"); }

if (nota < 4.5 && nota >= 0) {
    console.log("E"); }