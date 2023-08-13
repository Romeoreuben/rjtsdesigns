// JavaScript for sliding functionality (you can enhance this using a library like Swiper or Slick)
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function slideRight() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function slideLeft() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

function updateSlider() {
  const offset = -currentIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}
// Initialize Swiper
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If you need navigation buttons
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});