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
