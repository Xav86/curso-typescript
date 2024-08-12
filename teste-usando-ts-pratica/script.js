'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('#formulario');
    var nomeInput = document.querySelector('#nome');
    var idadeInput = document.querySelector('#idade');
    var textoDiv = document.querySelector('#texto');
    var h1 = document.querySelector('h1');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var nome = nomeInput.value.trim();
        var idade = idadeInput.value.trim();
        if (nome && idade) {
            textoDiv.textContent = "Nome: ".concat(nome, ", Idade: ").concat(idade);
        }
        else {
            textoDiv.textContent = 'Por favor, preencha todos os campos.';
        }
        h1.style.color = 'red';
        h1.textContent = 'Olha aqui outro texto';
    });
});
