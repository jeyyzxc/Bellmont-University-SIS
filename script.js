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
    // AKO NAG LAGAY NITO PRE AH,
    // Login functionality
    const loginButton = document.querySelector('.Login');
    loginButton.addEventListener('click', function() {
        login();
    }); 

    function login() {
        const username = prompt('Enter username:');
        const password = prompt('Enter password:');
        if (username && password) {
            // Implement login logic here
            console.log('Logging in with', username);
        } else {
            console.log('Username or password not provided');
        }
    }

});