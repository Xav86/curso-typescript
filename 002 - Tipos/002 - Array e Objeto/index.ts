// tuplas
let array1: [string, string, number, boolean] = ['Gustavo', 'teste', 2, true];

let array2: Array<string | number | boolean> = [true, 'Gustavo', 'teste', 'teste2', 234];

let obj1: {nome: string, sobrenome: string, idade: number, deuBom: boolean} = { nome: 'Gustavo', sobrenome: 'Gonçalves', idade: 19, deuBom: true};

let obj2: Array<{nome: string, sobrenome: string, idade: number, deuBom: boolean}> = 
    [
        { nome: 'Gustavo1', sobrenome: 'Gonçalves3', idade: 20, deuBom: true},
        { nome: 'Gustavo2', sobrenome: 'Gonçalves2', idade: 18, deuBom: false},
        { nome: 'Gustavo3', sobrenome: 'Gonçalves1', idade: 19, deuBom: true}
    ];

console.log(array1);
console.log(array2);
console.log(obj1);
console.log(obj2);