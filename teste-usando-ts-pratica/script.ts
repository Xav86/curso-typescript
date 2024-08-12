'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#formulario') as HTMLFormElement;
    const nomeInput = document.querySelector('#nome') as HTMLInputElement;
    const idadeInput = document.querySelector('#idade') as HTMLInputElement;
    const textoDiv = document.querySelector('#texto') as HTMLDivElement;
    const h1 = document.querySelector('h1') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = nomeInput.value.trim();
        const idade = idadeInput.value.trim();

        if (nome && idade) {
            textoDiv.textContent = `Nome: ${nome}, Idade: ${idade}`;
        } else {
            textoDiv.textContent = 'Por favor, preencha todos os campos.';
        }

        h1.style.color = 'red';
        h1.textContent = 'Olha aqui outro texto';
    });
});
