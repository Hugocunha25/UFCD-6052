// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

// Referência ao botão e à caixa de entrada
const btnAdivinhar = document.getElementById('btnAdivinhar');
const inputNumero = document.getElementById('inputNumero');
const mensagemDiv = document.getElementById('mensagem');

// Adiciona um evento de clique ao botão
btnAdivinhar.addEventListener('click', function() {
    // Obtém o valor digitado pelo usuário
    const palpite = parseInt(inputNumero.value);
    
    tentativas++;

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagemDiv.textContent = "Por favor, digite um número válido entre 1 e 100.";
        mensagemDiv.style.color = "orange";
        return;
    }

    // Verifica se o palpite está certo, muito alto ou muito baixo
    if (palpite === numeroSecreto) {
        mensagemDiv.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativas!`;
        mensagemDiv.style.color = "green";
    } else if (palpite < numeroSecreto) {
        mensagemDiv.textContent = "Muito baixo! Tente novamente.";
        mensagemDiv.style.color = "red";
    } else {
        mensagemDiv.textContent = "Muito alto! Tente novamente.";
        mensagemDiv.style.color = "red";
    }
});
