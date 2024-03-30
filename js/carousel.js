const carousel = document.querySelector('.carousel');
const images = document.querySelector('.carousel-images');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentPosition = 0;

leftArrow.addEventListener('click', () => {
  currentPosition -= carousel.offsetWidth;
  images.style.transform = `translateX(${currentPosition}px)`;
});

rightArrow.addEventListener('click', () => {
  currentPosition += carousel.offsetWidth;
  images.style.transform = `translateX(${currentPosition}px)`;

  // Loop back to first image on reaching the end
  if (currentPosition > carousel.offsetWidth * (images.children.length - 1)) {
    currentPosition = 0;
    images.style.transform = `translateX(${currentPosition}px)`;
  }
});