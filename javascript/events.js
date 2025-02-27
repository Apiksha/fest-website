    // swiper 
    new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 20,

        // pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        // navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {  
                slidesPerView: 1
            },
            480: {
                slidesPerView : 1
            },
            768: {
                slidesPerView : 3
            },
            1024: {
                slidesPerView : 4
            },
        }

    })

// cards height

function equalizeDepartmentCardHeights() {
    // Select all event departments (sections with different event types)
    const departments = document.querySelectorAll('.event-cards');

    departments.forEach(department => {
        const cards = department.querySelectorAll('.card');
        let maxHeight = 0;

        // Reset min-height before recalculating
        cards.forEach(card => {
            card.style.minHeight = 'auto';
        });

        // Find the tallest card in the department
        cards.forEach(card => {
            maxHeight = Math.max(maxHeight, card.offsetHeight);
        });

        // Apply the max height to all cards in this department
        cards.forEach(card => {
            card.style.minHeight = `${maxHeight}px`;
        });
    });
}

// Run when the page loads
window.addEventListener('load', equalizeDepartmentCardHeights);

// Run again when the window resizes to adjust dynamically
window.addEventListener('resize', equalizeDepartmentCardHeights);

// If using Swiper.js, wait for slides to be properly initialized
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(equalizeDepartmentCardHeights, 500); // Small delay to ensure images load
});

