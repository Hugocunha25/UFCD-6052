// Estado inicial dos dispositivos
let persianasAberta = false;
let portaoAberto = false;
let luzAcesa = false;

function togglePersianas() {
    persianasAberta = !persianasAberta;
    document.getElementById("persianasBtn").textContent = persianasAberta ? "Fechar Persianas" : "Abrir Persianas";

    // Animação das persianas
    const persiana = document.getElementById("persiana");
    if (persianasAberta) {
        persiana.classList.add("aberta");
    } else {
        persiana.classList.remove("aberta");
    }
}

function togglePortao() {
    portaoAberto = !portaoAberto;
    document.getElementById("portaoBtn").textContent = portaoAberto ? "Fechar Portão" : "Abrir Portão";

    // Animação do portão
    const portao = document.getElementById("portao");
    if (portaoAberto) {
        portao.classList.add("aberto");
    } else {
        portao.classList.remove("aberto");
    }
}

function toggleLuz() {
    luzAcesa = !luzAcesa;
    document.getElementById("luzBtn").textContent = luzAcesa ? "Apagar Luz" : "Acender Luz";

    // Animação da lâmpada
    const lampada = document.getElementById("lampada");
    if (luzAcesa) {
        lampada.classList.add("acesa");
    } else {
        lampada.classList.remove("acesa");
    }
}
