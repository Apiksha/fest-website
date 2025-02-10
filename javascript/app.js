document.addEventListener('DOMContentLoaded', function () {
    fetch('./navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // Now that the navbar is loaded, initialize the toggle function
            initializeMenuToggle();
        })
        .catch(error => console.error('Error loading navbar:', error));
});

// Function to handle menu toggle
function initializeMenuToggle() {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar_menu');

    if (menu && menuLinks) {
        menu.addEventListener('click', function () {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
    } else {
        console.error('Menu elements not found. Check navbar structure.');
    }
}
