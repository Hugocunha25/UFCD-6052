const quadrado = document.getElementById('quadrado');
let posX = 0;
let posY = 0;
const step = 10; // Quantidade de pixels que o quadrado se moverá a cada tecla

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            posY -= step;
            break;
        case 'ArrowDown':
            posY += step;
            break;
        case 'ArrowLeft':
            posX -= step;
            break;
        case 'ArrowRight':
            posX += step;
            break;
    }
    quadrado.style.transform = `translate(${posX}px, ${posY}px)`;
});