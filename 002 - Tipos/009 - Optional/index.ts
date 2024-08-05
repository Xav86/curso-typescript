const fn = (nome: string, idade?: number) => {
    if (!idade) {
        return `nome: ${nome}, idade: sem valor definido`
    }
    return `nome: ${nome}, idade: ${idade}`;
};

console.log(fn('Gustavo', 19));
console.log(fn('Gustavo'));

const pessoa: { nome: string, idade?: number } = { nome: 'Gustavo', idade: 123 };