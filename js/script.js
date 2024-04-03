// const imageContainer = document.getElementById('gif_ila');
const currentImage =document.getElementById('gif_ila');
const images = ['assets/index/silouette_base/0.png', 'assets/index/silouette_base/1.png', 'assets/index/silouette_base/2.png', 'assets/index/silouette_base/3.png', 'assets/index/silouette_base/4.png', 'assets/index/silouette_base/5.png', 'assets/index/silouette_base/6.png', 'assets/index/silouette_base/7.png', 'assets/index/silouette_base/8.png', 'assets/index/silouette_base/9.png']; // Replace with your image paths
let currentImageIndex = 0;

function changeImage() {
//   const currentImage = imageContainer.querySelector('img');
    const currentImage =document.getElementById('gif_ila');
  
    // Update opacity for smooth transition
    currentImage.style.opacity = 0;
  
//   currentImage.addEventListener('transitionend', () => {
    currentImage.src = images[currentImageIndex];
    currentImage.style.opacity = 1;
    currentImageIndex = (currentImageIndex + 1) % images.length;
//   });
}

// Set interval to change images every 0.5 seconds (adjust as needed)
setInterval(changeImage, 400);

// Optionally start with a hidden image
currentImage.style.opacity = 1;