enum EMes {
    Jan = "Janeiro",
    Fev = "Fevereiro",
    Mar = "março",
    Abr = "Abril",
    Mai = "Maio",
    Jun = "Junho",
    Jul = "Julho",
    Ago = "Agosto",
    Set = "Setembro",
    Out = "Outubro",
    Nov = "Novembro",
    Dez = "Dezembro"
}

console.log(EMes.Jan);

const pessoa: { nome:string, mesAniversario:string } = {
    nome: 'Gustavo',
    mesAniversario: EMes.Mai
}

if (pessoa.mesAniversario === EMes.Mai) {
    console.log(pessoa);
}