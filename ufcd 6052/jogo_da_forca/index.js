// Variáveis globais do jogo
let palavraSecreta = "";
let palavraRevelada = [];
let letrasTentadas = [];
let tentativasRestantes = 6;

const acentos = "áàãâéêíóôõúüç";
const semAcentos = "aaaaeeiooouuc";

// Função para remover acentos da palavra
function removerAcentos(str) {
    return str
        .split('')
        .map(letra => {
            let indice = acentos.indexOf(letra);
            return indice !== -1 ? semAcentos[indice] : letra;
        })
        .join('');
}

// Inicialização do jogo
function iniciarJogo() {
    palavraSecreta = prompt("Jogador 1, digite a palavra secreta:").toLowerCase();
    palavraSecreta = removerAcentos(palavraSecreta);
    palavraRevelada = "_".repeat(palavraSecreta.length).split("");
    letrasTentadas = [];
    tentativasRestantes = 6;
    atualizarInterface();
    document.getElementById("input-section").style.display = "block";
    document.getElementById("mensagem").textContent = "";
}

// Atualizar a interface gráfica
function atualizarInterface() {
    desenharForca();
    document.getElementById("palavra").textContent = palavraRevelada.join(" ");
    document.getElementById("letras").textContent = letrasTentadas.join(", ");
}

// Desenhar a forca com base nas tentativas restantes
function desenharForca() {
    let forcaDesenho = [
        "  _____\n",
        "  |     |\n",
        `  |     ${tentativasRestantes <= 5 ? 'O' : ' '}\n`,
        `  |    ${tentativasRestantes <= 3 ? '/' : ' '}${tentativasRestantes <= 4 ? '|' : ' '}${tentativasRestantes <= 2 ? '\\' : ' '}\n`,
        `  |    ${tentativasRestantes <= 1 ? '/' : ' '}${tentativasRestantes <= 0 ? ' \\' : ' '}\n`,
        "  |\n",
        "_|_\n"
    ];
    document.getElementById("forca").textContent = forcaDesenho.join('');
}

// Verificar se o jogo terminou
function verificarFimDeJogo() {
    if (palavraRevelada.join('') === palavraSecreta) {
        document.getElementById("mensagem").textContent = "Parabéns! Você acertou a palavra!";
        document.getElementById("mensagem").classList.add("success");
        document.getElementById("input-section").style.display = "none";
    } else if (tentativasRestantes <= 0) {
        document.getElementById("mensagem").textContent = `Você perdeu! A palavra era: ${palavraSecreta}`;
        document.getElementById("mensagem").classList.add("failure");
        document.getElementById("input-section").style.display = "none";
    }
}

// Lógica para quando o jogador tenta uma letra
function tentarLetra() {
    const input = document.getElementById("tentativa");
    const letra = input.value.toLowerCase();
    input.value = "";

    // Verificar se a entrada é válida
    if (!letra.match(/[a-z]/) || letrasTentadas.includes(letra) || letra === "") {
        alert("Por favor, tente uma letra válida que você ainda não tentou.");
        return;
    }

    letrasTentadas.push(letra);
    let acertou = false;

    // Verificar se a letra está na palavra secreta
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
            palavraRevelada[i] = letra;
            acertou = true;
        }
    }

    // Se a letra não está na palavra, diminuir tentativas restantes
    if (!acertou) {
        tentativasRestantes--;
    }

    atualizarInterface();
    verificarFimDeJogo();
}

// Reiniciar o jogo
function reiniciarJogo() {
    iniciarJogo();
}

// Iniciar o jogo na primeira vez
document.addEventListener("DOMContentLoaded", iniciarJogo);
