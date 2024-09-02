let currentIndex = 0;

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

// Inicializa o carrossel
document.addEventListener("DOMContentLoaded", () => {
  moveSlide(0);
});

let currentExcerptIndex = 0;
const excerpts = document.querySelectorAll(".carousel-excerpts .excerpt");

function updateExcerptVisibility() {
  excerpts.forEach((excerpt, index) => {
    excerpt.style.display = index === currentExcerptIndex ? "block" : "none";
  });
}

function moveExcerpt(direction) {
  currentExcerptIndex += direction;
  if (currentExcerptIndex < 0) {
    currentExcerptIndex = excerpts.length - 1;
  } else if (currentExcerptIndex >= excerpts.length) {
    currentExcerptIndex = 0;
  }
  updateExcerptVisibility();
}

// Initialize the display
updateExcerptVisibility();
