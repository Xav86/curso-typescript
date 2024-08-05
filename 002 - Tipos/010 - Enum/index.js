var EMes;
(function (EMes) {
    EMes["Jan"] = "Janeiro";
    EMes["Fev"] = "Fevereiro";
    EMes["Mar"] = "mar\u00E7o";
    EMes["Abr"] = "Abril";
    EMes["Mai"] = "Maio";
    EMes["Jun"] = "Junho";
    EMes["Jul"] = "Julho";
    EMes["Ago"] = "Agosto";
    EMes["Set"] = "Setembro";
    EMes["Out"] = "Outubro";
    EMes["Nov"] = "Novembro";
    EMes["Dez"] = "Dezembro";
})(EMes || (EMes = {}));
console.log(EMes.Jan);
var pessoa = {
    nome: 'Gustavo',
    mesAniversario: EMes.Mai
};
if (pessoa.mesAniversario === EMes.Mai) {
    console.log(pessoa);
}
