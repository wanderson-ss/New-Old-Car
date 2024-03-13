const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showImage(index) {
    const totalImages = document.querySelectorAll('.carousel img').length;
    index = (index + totalImages) % totalImages; // Ensure positive index

    const translateValue = -index * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
    currentIndex = index;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Automatically advance to the next image every 3 seconds (adjust as needed)
setInterval(nextImage, 3000);
