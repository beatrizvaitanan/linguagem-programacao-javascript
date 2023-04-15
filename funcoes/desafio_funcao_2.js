// Parâmetro (Nota) -> Retorno (Conceito)
// A+ -> 10
// A- -> 9
// B+ -> 8
// B- -> 7
// C+ -> 6
// C- -> 5
// D+ -> 4
// D- -> 3
// E+ -> 2
// E- -> 1
// F -> 0

/*let valor = "20"

function nota(valor) {
    switch(valor) {
        case '10': return ('A+');
        case '9': return('A-');
        case '8': return('B+');
        case '7': return('B-');
        case '6': return('C+');
        case '5': return('C-');
        case '4': return('D+');
        case '3': return('D-');
        case '2': return('E+');
        case '1': return('E-');
        case '0': return('F');
        default: return null;   
}
} 
nota(valor); 
console.log(nota (valor)); */
const valor = 11

function nota(valor) {
    if (valor == 10) return "A+" 
        else if (valor == 9) return "A-";
        else if (valor == 8) return 'B+';
        else if (valor == 7) return 'B-';
        else if (valor == 6) return 'C+';
        else if (valor == 5) return 'C-';
        else if (valor == 4) return 'D+';
        else if (valor == 3) return 'D-';
        else if (valor == 2) return 'E+';
        else if (valor == 1) return 'E-';
        else if (valor == 0) return 'F';
        else return null ;
        }

console.log(nota(valor));

    
