// Toggle mobile menu
document.getElementById('menu-btn').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu
document.getElementById('close-btn').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('active');
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Highlight the active section in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
//gambarrrr 
document.addEventListener('DOMContentLoaded', function() {
const parallax = document.querySelector('.parallax');
const images = [
    'img/bg1.jpg',
    'img/bg2.jpg',
    'img/bg3.jpg'
    // Tambahkan URL gambar lainnya sesuai kebutuhan
];
let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    parallax.style.backgroundImage = `url('${images[currentIndex]}')`;
}

setInterval(changeBackground, 4000); // Ubah setiap 5 detik
});
// produk
document.addEventListener('DOMContentLoaded', function () {
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', function () {
        card.classList.toggle('active');
    });
});
});

// Portofolio
function zoomImage(imgElement) {
const zoomedContainer = document.getElementById('zoomed');
const zoomedImage = document.getElementById('zoomed-image');

zoomedImage.src = imgElement.src;
zoomedContainer.style.display = 'flex';

zoomedContainer.onclick = function() {
zoomedContainer.style.display = 'none';
}
}
