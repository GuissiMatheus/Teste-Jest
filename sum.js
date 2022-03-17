// function soma(a, b){
//     return a + b;
// }

// function cloneObj(obj){
//     return {...obj};
// }

// function array(arr){
//     var num = arr;
//     return num.map(Math.sqrt);
// }

// // Versão 1
// function somarNotas(notas) {
//     return notas.reduce((anterior, atual) => anterior + atual, 0) // Inicia a soma com 0
// }

/**
 * Versão 2
 * A função Math.min retorna o menor valor da sequência
 * Caso não tenha um valor 0, o if será verdadeiro
 * Se tiver 0, vá para else
 */

// function somarNotas(notas) {
//     // Caso tenha um valor mínimo de nota, ele faz a função normal
//     // Caso tenha alguma nota 0, ele retorna 0
//     if(Math.min(...notas)) {
//         return notas.reduce((anterior, atual) => anterior + atual, 0) // Inicia a soma com 0
//     } else {
//         return 0;
//     }
// }

// Versão 3
function somarNotas(notas) {
    // Caso tenha um valor mínimo de nota, ele faz a função normal
    // Caso tenha alguma nota 0, ele retorna 0
    // Caso tenha 5 notas, ele multiplica por 2
    if(Math.min(...notas)) {
        var soma = notas.reduce((anterior, atual) => anterior + atual, 0) // Inicia a soma com 0
        return notas.length > 5 ? 2 * soma : soma;
    } else {
        return 0;
    }
}

// Minha Versão Inicial
// function somarNotas(notas) {
//     // Caso tenha um valor mínimo de nota, ele faz a função normal
//     // Caso tenha alguma nota 0, ele retorna 0
//     // Caso tenha 5 notas, ele multiplica por 2
//     if(Math.min(...notas)) {
//         var soma = notas.reduce((anterior, atual) => anterior + atual, 0) // Inicia a soma com 0
//         if (notas.length > 5)
//             return 2 * soma;
//         else {
//             return soma;
//         }
//     } else {
//         return 0;
//     }
// }

// Minha Versão Otimizada
// function somarNotas(notas) {
//     var soma = 0;
//     if(Math.min(...notas)) {
//         soma = notas.reduce((anterior, atual) => anterior + atual, 0) 
//         if (notas.length > 5)
//             soma += soma;
//     } 
//     return soma;
// }

module.exports = {
    // soma,
    // cloneObj,
    // array
    somarNotas
};