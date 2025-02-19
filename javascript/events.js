document.addEventListener("DOMContentLoaded", function () {
    // Select all card containers (each department)
    const containers = document.querySelectorAll(".cards-container");

    containers.forEach(container => {
        const cards = container.querySelectorAll(".card");
        let currentIndex = 0;

        function showNextCard() {
            if (window.innerWidth <= 480) { // Only for small screens
                cards[currentIndex].style.display = "none"; // Hide current card
                currentIndex = (currentIndex + 1) % cards.length; // Move to next card within the department
                cards[currentIndex].style.display = "block"; // Show next card
            }
        }

        // Attach event listener to only the buttons within this department
        container.querySelectorAll(".next-btn").forEach(button => {
            button.addEventListener("click", showNextCard);
        });

        // Ensure only the first card is visible in each department on small screens
        function initializeCards() {
            if (window.innerWidth <= 480) {
                cards.forEach((card, index) => {
                    card.style.display = index === 0 ? "block" : "none"; // Show first card only
                });
            } else {
                cards.forEach(card => card.style.display = "block"); // Show all cards on larger screens
            }
        }
    });
});

