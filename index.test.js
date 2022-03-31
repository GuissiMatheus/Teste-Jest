const js = require('./index');

test('Descrição aqui', () => {
    expect(js.sum(1, 2)).toBe(3);
});

test('Atribuir Objeto', () => {
    let objeto = {nome: "Matheus"};
    objeto['sobrenome'] = 'Guissi';
    objeto['idade'] = 0;
    expect(objeto).toEqual({nome: 'Matheus', sobrenome: 'Guissi', idade: 0});
});

test('Existe ell em Hello', () => {
    expect("hello").toMatch(/ell/);
});

test('Existe orld em Hello World', () => {
    expect("Hello World").toMatch(/orld/);
});

test('Lista de Jogos', () => {
    var jogos = [
        "God of War",
        "PES",
        "FIFA",
        "Fall Guys",
        "Tibia",
        "LoL"
    ];
    expect(jogos).toContain("LoL");
});

test("6-a) Caso o IMC seja menor ou igual a 18.5, retornar 'Abaixo do Peso'.", () => {
    expect(js.calcularIMC(60, 1.85)).toEqual('Abaixo do Peso');
});

test("6-b) Caso o IMC esteja entre 18.5 até 24.9, retornar 'Peso Normal'.", () => {
    expect(js.calcularIMC(60, 1.70)).toEqual('Peso Normal');
});

test("6-c) Caso o IMC esteja entre 25 até 29.9, retornar 'Sobrepeso'.", () => {
    expect(js.calcularIMC(70, 1.65)).toEqual('Sobrepeso');
});

test("6-d) Caso o IMC seja maior que 30, retornar 'Obesidade'.", () => {
    expect(js.calcularIMC(80, 1.50)).toEqual('Obesidade');
});