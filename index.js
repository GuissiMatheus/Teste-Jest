function sum(a, b) {
    return a + b;
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
    if (imc < 18.5) return 'Abaixo do Peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso Normal';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30) return 'Obesidade';
}

module.exports = {
    sum,
    calcularIMC,
};