// Inicialização dos índices dos slides
let currentIndex = 0;
let currentExcerptIndex = 0;

// Função para mover o carrossel de personagens
function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel .character");
  const totalSlides = slides.length;

  // Remove a classe 'active' do slide atual
  slides[currentIndex].classList.remove("active");

  // Calcula o próximo índice
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;

  // Adiciona a classe 'active' ao próximo slide
  slides[currentIndex].classList.add("active");

  // Move o carrossel para o slide correto
  document.querySelector(".carousel-content").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
}

// Função para atualizar a visibilidade dos trechos
function updateExcerptVisibility() {
  const excerpts = document.querySelectorAll(".carousel-excerpts .excerpt");
  excerpts.forEach((excerpt, index) => {
    excerpt.style.display = index === currentExcerptIndex ? "block" : "none";
  });
}

// Função para mover o carrossel de trechos
function moveExcerpt(direction) {
  const excerpts = document.querySelectorAll(".carousel-excerpts .excerpt");
  currentExcerptIndex += direction;

  // Faz o índice circular
  if (currentExcerptIndex < 0) {
    currentExcerptIndex = excerpts.length - 1;
  } else if (currentExcerptIndex >= excerpts.length) {
    currentExcerptIndex = 0;
  }

  // Atualiza a visibilidade dos trechos
  updateExcerptVisibility();
}

// Inicializa o carrossel de personagens e trechos
document.addEventListener("DOMContentLoaded", () => {
  moveSlide(0); // Configura o carrossel de personagens
  updateExcerptVisibility(); // Configura a visibilidade inicial dos trechos
});
