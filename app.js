document.addEventListener('DOMContentLoaded', function () {
    // Load the navbar dynamically
    fetch('./navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // After navbar loads, activate the menu toggle
            const menu = document.querySelector('#mobile-menu');
            const menuLinks = document.querySelector('.navbar_menu');

            if (menu && menuLinks) {
                menu.addEventListener('click', function () {
                    menu.classList.toggle('is-active');
                    menuLinks.classList.toggle('active');
                });
            } else {
                console.error('Navbar elements not found. Check navbar.html structure.');
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});
