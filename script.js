document.addEventListener('DOMContentLoaded', function() {
    // Make the text box a home button
    const textBox = document.querySelector('.text-box');
    textBox.addEventListener('click', function() {
        window.location.href = 'frontpage.html';
    });

    // Search functionality
    const searchIcon = document.querySelector('.fa-search');
    searchIcon.addEventListener('click', function() {
        const searchTerm = prompt('Enter search term:');
        if (searchTerm) {
            // Implement search logic here
            console.log('Searching for:', searchTerm);
        }
    });

    // Toggle features with bars icon
    const barsIcon = document.querySelector('.fa-bars');
    barsIcon.addEventListener('click', function() {
        const features = document.querySelector('.features');
        if (features) {
            features.classList.toggle('visible');
        } else {
            console.log('No features section found');
        }
    });

    // Login functionality
    const loginButton = document.querySelector('.Login');
    loginButton.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // List of background images
    const images = [
        "img/Corpus-Christi-College-University-of-Cambridge-England.webp",
        "img/Visual-and-Cultural-Studies-Class-Cerritos.jpg",
        "img/images1.jpeg",
        "img/academy-celebrate-celebration-267885-1-1024x683.jpg"
    ];

    // Select a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Apply the background image to the body or a specific element
    document.querySelector(".header").style.backgroundImage = `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${randomImage})`;
});
