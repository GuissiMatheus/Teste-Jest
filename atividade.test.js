/**
 * Atividade de TTI - 23/03/2022
 * Aluno: Matheus Guissi
 * RA: 37791 
 */

const aux = require('./atividade');

/**
 * 1) Crie uma função e execute os seguintes testes:
 */
test('1-a) Devemos conseguir somar as notas e retornar a médias dos alunos.', () => {
    var notas = [3, 9, 6];
    expect(aux.mediaNotas(notas)).toEqual(6);
})

test('1-b) Se caso a nota for 0, a soma deve retornar 0.', () => {
    var notas = [1, 8, 6, 0];
    expect(aux.mediaNotas(notas)).toEqual(0);
})

test('1-c) Caso o aluno tenha mais de 5 notas, a média deve ser multiplicada por 2.', () => {
    var notas = [1, 8, 6, 3, 4, 5];
    expect(aux.mediaNotas(notas)).toEqual(9);
})

test('1-d) Caso a média for menor 6, retornar reprovado.', () => {
    var notas = [1, 2, 3, 3, 2, 1];
    expect(aux.mediaNotas(notas)).toEqual('Reprovado');
})

test('2) Criar clone de objeto.', () => {
    expect(aux.clonarObjeto({nome: "Matheus Guissi", ra: "37791", email: "guissimatheus@gmail.com"}))
        .toEqual({nome: "Matheus Guissi", ra: "37791", email: "guissimatheus@gmail.com"})
});

test('3) Criar uma função que converta uma temperatura de Celsius para Fahrenheit.', () => {
    expect(aux.celsiusParaFahrenheit(10)).toEqual(50);
});

test('4) Calcular a soma dos números de um array.', () => {
    expect(aux.somarArray([1, 2, 3, 4])).toEqual(10);
});

test('5) Somar números positivos não é zero.', () => {
    for(var a = 1; a < 10; a++) {
        for(var b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

/**
 * 6) Crie uma função que calculará o seu IMC e execute os seguintes testes:
 */
test("6-a) Caso o IMC seja menor ou igual a 18.5, retornar 'Abaixo do Peso'.", () => {
    expect(aux.calcularIMC(60, 1.85)).toEqual('Abaixo do Peso');
});

test("6-b) Caso o IMC esteja entre 18.5 até 24.9, retornar 'Peso Normal'.", () => {
    expect(aux.calcularIMC(60, 1.70)).toEqual('Peso Normal');
});

test("6-c) Caso o IMC esteja entre 25 até 29.9, retornar 'Sobrepeso'.", () => {
    expect(aux.calcularIMC(70, 1.65)).toEqual('Sobrepeso');
});

test("6-d) Caso o IMC seja maior que 30, retornar 'Obesidade'.", () => {
    expect(aux.calcularIMC(80, 1.50)).toEqual('Obesidade');
});

test('7) Dada uma lista de compras, verificar se determinado item contém na lista.', () => {
    expect(aux.listaCompras).toContain("MacBook");
});

/**
 * 8) Crie uma função e execute os seguintes testes:
 */
 test('8-a) Um algoritmo que leia dois valores inteiros A e B e retorne sua soma.', () => {
    expect(aux.somaOuMultiplicacao(1, 2)).toEqual(3);
});

test('8-b) Se caso os valores forem iguais, retornar a multiplicação.', () => {
    expect(aux.somaOuMultiplicacao(3, 3)).toEqual(9);
});

test('9) Solicite a entrada de um número e descubra se um número digitado é par ou ímpar.', () => {
    expect(aux.parOuImpar(10)).toEqual('Par');
    expect(aux.parOuImpar(5)).toEqual('Ímpar');
});

test('10) Ler um número inteiro entre 1 e 12 e escrever o mês correspondente. Caso o número seja fora desse intervalo, informar que não existe mês com este número.', () => {
    expect(aux.verMes(13)).toEqual('Não existe mês 13');
    expect(aux.verMes(3)).toEqual('Março');
});
