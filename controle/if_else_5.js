const hora = 24;
let saudacao;

if (hora < 12) {
    saudacao = 'BOM DIA!';
} else {
    if (hora < 18) {
        saudacao = "BOA TARDE";
    } else {
        if (hora < 22) {
            saudacao = 'BOA TARDE';
        } else {
            saudacao = 'MUITO TARDE';
        }
        
    }
    
 }
console.log(saudacao);