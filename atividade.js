/**
 * Atividade de TTI - 23/03/2022
 * Aluno: Matheus Guissi
 * RA: 37791 
 */

const funcoes = require('./atividade');

/**
 * 1) Crie uma função e execute os seguintes testes:
 *  a. Devemos conseguir somar as notas e retornar a médias dos alunos;
 *  b. Se caso a nota for 0, a soma deve retornar 0;
 *  c. Caso o aluno tenha mais de 5 notas, a média deve ser multiplicada por 2;
 *  d. Caso a média for menor 6, retornar reprovado.
 */
 function mediaNotas(notas) {
    var media = 0;
    if(Math.min(...notas)) {
        media = notas.reduce((total, valor) => total + valor, 0) / notas.length;
        if (notas.length > 5) {
            media += media;
        }
        if (media < 6) {
            media = 'Reprovado';
        }
    }
    return media;
}

/**
 * 2) Criar clone de objeto.
 */
function clonarObjeto(obj) {
    return {...obj};
}

/**
 * 3) Criar uma função que converta uma temperatura de Celsius para Fahrenheit.
 */
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

/**
 * 4) Calcular a soma dos números de um array.
 */
function somarArray(array) {
    return array.reduce((total, valor) => total + valor, 0);
}

/**
 * 6) Crie uma função que calculará o seu IMC e execute os seguintes testes:
 *  a. Caso o IMC seja menor ou igual a 18.5, retornar "Abaixo do Peso";
 *  b. Caso o IMC esteja entre 18.5 até 24.9, retornar "Peso Normal";
 *  c. Caso o IMC esteja entre 25 até 29.9, retornar "Sobrepeso";
 *  d. Caso o IMC seja maior que 30, retornar "Obesidade".
 */
function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    if (imc <= 18.5) return 'Abaixo do Peso';
    if (imc > 18.5 && imc <= 24.9) return 'Peso Normal';
    if (imc > 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30) return 'Obesidade';
}

/**
 * 7) Dada uma lista de compras, verificar se determinado item contém na lista.
 */
var listaCompras = [
    "Perfume",
    "Ferrari",
    "Chocolate",
    "MacBook",
    "Iphone"
];

/**
 * 8) Crie uma função e execute os seguintes testes:
 *  a. Um algoritmo que leia dois valores inteiros A e B e retorne sua soma;
 *  b. Se caso os valores forem iguais, retornar a multiplicação.
 */
 function somaOuMultiplicacao(x, y) {
    return (x == y) ? x * y : x + y; 
}

/**
 * 9) Solicite a entrada de um número e descubra se um número digitado é par ou ímpar.
 */
function parOuImpar(num) {
    return (num % 2) ? 'Ímpar' : 'Par';
}

/**
 * 10) Ler um número inteiro entre 1 e 12 e escrever o mês correspondente.
 * Caso o número seja fora desse intervalo, informar que não existe mês com este número. 
 */
function verMes(mes) {
    switch (mes) {
        case 1:
            return 'Janeiro';
        case 2:
            return 'Fevereiro';
        case 3:
            return 'Março';
        case 4:
            return 'Abril';
        case 5:
            return 'Maio';
        case 6:
            return 'Junho';
        case 7:
            return 'Julho';
        case 8:
            return 'Agosto';
        case 9:
            return 'Setembro';
        case 10:
            return 'Outubro';
        case 11:
            return 'Novembro';
        case 12:
            return 'Dezembro';        
    };
    return 'Não existe mês ' + mes;
}

module.exports = {
    mediaNotas,
    clonarObjeto,
    celsiusParaFahrenheit,
    somarArray,
    listaCompras,
    calcularIMC,
    somaOuMultiplicacao,
    parOuImpar,
    verMes
};