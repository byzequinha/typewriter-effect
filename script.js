const textElement = document.getElementById('text');
const text = "Olá, bem-vindo ao efeito Máquina de Escrever!";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        
        // Tocar o som a cada duas letras
        if (index % 2 === 0) {
            playSound();
        }

        index++;
        setTimeout(typeEffect, 110); // Ajuste de velocidade conforme necessário
    }
}

function playSound() {
    const audio = new Audio('./sounds/typewriter-key.mp3'); // Uso do arquivo de áudio
    audio.play();
}

window.onload = typeEffect;
