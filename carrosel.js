const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalItems = carousel.children.length;
let itemsPerView = 2; // Quantidade de itens visíveis, alterável conforme a tela

function updateCarousel() {
    const itemWidth = 100 / itemsPerView; // Cada item ocupa uma fração igual do carrossel
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
}

function updateItemsPerView() {
    if (window.innerWidth <= 600) {
        itemsPerView = 1; // Exibe 1 item por vez em telas menores
    } else {
        itemsPerView = 2; // Exibe 2 itens por vez em telas maiores
    }
    currentIndex = Math.min(currentIndex, totalItems - itemsPerView); // Garante que o índice atual não ultrapasse os itens visíveis
    updateCarousel(); // Recalcula a largura e posição
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % (totalItems - (itemsPerView - 1));
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % (totalItems - (itemsPerView - 1));
    updateCarousel();
});

// Atualiza os itens visíveis com base no tamanho da tela
window.addEventListener('resize', updateItemsPerView);

// Inicializa com os valores corretos
updateItemsPerView();
updateCarousel();