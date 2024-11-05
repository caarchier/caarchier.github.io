// JavaScript para navegação entre slides
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => showSlide(currentIndex + 1));
document.getElementById('prev').addEventListener('click', () => showSlide(currentIndex - 1));

function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

// Permitir navegação com setas do teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
    else if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
});
