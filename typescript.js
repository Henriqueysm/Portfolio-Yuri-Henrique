const texts = ["Web!", "Frontend!"];
const typedTextElement = document.getElementById("typed-text");
const typingSpeed = 80; // Velocidade de digitação (ms)
const erasingSpeed = 40; // Velocidade de apagar (ms)
const delayBetweenTexts = 1000; // Pausa antes de começar o próximo texto (ms)
let textIndex = 0; // Índice do texto atual
let charIndex = 0; // Índice do caractere atual
let isDeleting = false; // Indicador de apagamento

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // Adiciona os caracteres gradualmente
    typedTextElement.textContent += currentText.charAt(charIndex);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenTexts); // Espera antes de apagar
    } else {
      setTimeout(typeEffect, typingSpeed);
    }
  } else {
    // Remove os caracteres gradualmente
    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // Passa para o próximo texto (modo infinito)
      setTimeout(typeEffect, typingSpeed);
    } else {
      setTimeout(typeEffect, erasingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
