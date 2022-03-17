const funcoes = require('./sum');

test('1) Deve conseguir somar as notas dos alunos', () => {
    var notas = [8, 9, 5, 7];
    expect(funcoes.somarNotas(notas)).toEqual(29);
})

test('2) Se caso a nota for 0, a soma deve retornar 0', () => {
    var notas = [1, 2, 3, 0];
    expect(funcoes.somarNotas(notas)).toEqual(0);
})

test('3) Caso o aluno tenha mais de 5 notas, a soma deve ser multiplicada por 2', () => {
    var notas = [1, 2, 3, 4, 5, 6];
    expect(funcoes.somarNotas(notas)).toEqual(42);
})

// test('adds 2 + 3 to equal 5', () => {
//     expect(funcoes.soma(3, 2)).toBe(5);
// });

// test("Criar clone de objeto", () => {
//     // expect(funcoes.cloneObj({nome: "Ronaldo Pires", idade: "24"})).toBe({nome: "Ronaldo Pires", idade: "24"})
//     expect(funcoes.cloneObj({nome: "Ronaldo Pires", idade: "24"})).toEqual({nome: "Ronaldo Pires", idade: "24"})
// });

// test("Método MAP (1, 2, 3)", () => {
//     expect(funcoes.array([1,4,9])).toEqual([1, 2, 3]);
// });

/**
 * 1) Devemos conseguir somar as notas dos alunos
 * 2) Se caso a nota for 0, a soma deve retornar 0
 * 3) Caso o aluno tenha mais de 5 notas, a soma deve ser multiplicada por 2
 * 
 */

 test('4) Dois mais dois é 4', () => {
     expect(2 + 2).toBe(4);
 });

 test('5) Atribuindo objeto', () => {
    var obj = {nome: "Matheus"};
    obj["idade"] = "27";
    expect(obj).toEqual({nome: "Matheus", idade: "27"});
});

test('6) Add n.º positivos não é 0', () => {
    for(var a = 1; a < 10; a++) {
        for(var b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

test('7) NULL', () => {
    var n = null;
    expect(n).toBeNull();
    //expect(n).not.toBeNull();
});

test('8) Undefined', () => {
    var n;
    expect(n).toBeUndefined();
    //expect(n).toBeDefined();
});

test('9) Truthy', () => {
    //var n = 1;
    var n = true;
    expect(n).toBeTruthy();
    //expect(n).toBeFalsy();
});

test('10) Zero', () => {
    var n = 0;
    //expect(n).toBeNull();             // F
    //expect(n).not.toBeNull();         // V
    //expect(n).toBeDefined();          // V
    //expect(n).toBeUndefined();        // F
    //expect(n).not.toBeUndefined();    // F
    //expect(n).not.toBeTruthy();       // V
    //expect(n).toBeFalsy();            // V
});

test('11) Não existe A em Word', () => {
    expect("word").not.toMatch(/A/); // Expressão regular
});

test('12) Existe stop em Cristoph', () => {
    expect("Cristoph").toMatch(/stop/); // Expressão regular
});

var frutas = [
    "Maçã",
    "Banana",
    "Uva",
    "Pera",
    "Melancia"
]

test('13) A lista de frutas contem Pera', () => {
    expect(frutas).toContain("Pera");
});