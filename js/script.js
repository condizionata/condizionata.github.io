// const imageContainer = document.getElementById('gif_ila');
const currentImage =document.getElementById('gif_ila');
const images = ['assets/silouette_frames/0.png', 'assets/silouette_frames/1.png', 'assets/silouette_frames/2.png', 'assets/silouette_frames/3.png', 'assets/silouette_frames/4.png', 'assets/silouette_frames/5.png', 'assets/silouette_frames/6.png', 'assets/silouette_frames/7.png', 'assets/silouette_frames/8.png', 'assets/silouette_frames/9.png']; // Replace with your image paths
let currentImageIndex = 0;

function changeImage() {
//   const currentImage = imageContainer.querySelector('img');
    const currentImage =document.getElementById('gif_ila');
  
  // Update opacity for smooth transition
  currentImage.style.opacity = 0.;
  
//   currentImage.addEventListener('transitionend', () => {
    currentImage.src = images[currentImageIndex];
    currentImage.style.opacity = 1;
    currentImageIndex = (currentImageIndex + 1) % images.length;
//   });
}

// Set interval to change images every 0.5 seconds (adjust as needed)
setInterval(changeImage, 400);

// Optionally start with a hidden image
currentImage.style.opacity = 0;