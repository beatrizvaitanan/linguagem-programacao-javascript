const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

//aprovado >=7; recuperação >= 4 e <7; reprovado >4;

function status_(nota1, nota2, nota3) {
    let menorNota = nota1
    if (nota2 < menorNota) menorNota = nota2;
    if (nota3 < menorNota) menorNota = nota3;

    media = (nota1 + nota2 + nota3 - menorNota)/2

    if (media >= 7 && media <=10) return 'Aprovado';
    else if (media >= 4 && media <7) return 'Recuperação';
    else return 'Reprovado';
}




console.log(status_(nota1,nota2,nota3));