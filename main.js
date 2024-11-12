// Obter os elementos dos inputs
const nomeInput = document.getElementById("nome");
const cpfInput = document.getElementById("CPF");
const cvvInput = document.getElementById("CVV");

// Adicionar evento de "keydown" para o input de nome
nomeInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let nome = nomeInput.value;
        let cpf = cpfInput.value;
        alert("Olá " + nome + "! Seu número de CPF é: " + cpf + "!");
    }
});

// Adicionar evento de "keydown" para o input de cor
cpfInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let nome = nomeInput.value;
        let cpf = cpfInput.value;
        alert("Olá " + nome + "! Seu número de CPF é: " + cpf + "!");
    }
});

// Adicionar evento de "keydown" para o input de nome
cvvInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let nome = nomeInput.value;
        let cpf = cpfInput.value;
        alert("Olá " + nome + "! Seu número de CPF é: " + cpf + "!");
    }
});
