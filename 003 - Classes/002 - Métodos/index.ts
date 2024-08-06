/*
  Uma classe TypeScript é uma estrutura de programação orientada a objetos 
  que possui um conjunto de propriedades e métodos. 

  A classe é um modelo para criar objetos, permitindo que você defina 
  uma estrutura com propriedades e comportamentos.
*/

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`;
    }

    fezAniversario() {
        return `O ${this.nome} fez ${this.idade + 1} anos`;
    }
}

const pessoa1 = new Pessoa('Gustavo', 19);
console.log(pessoa1.comer('Batata'));
console.log(pessoa1.fezAniversario());

const pessoa2 = new Pessoa('Caetano', 18);
console.log(pessoa2.comer('Batata'));
console.log(pessoa2.fezAniversario());