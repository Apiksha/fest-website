const updates = [
    "Sponsor Ekatva and make a lasting impact at our annual fest! &nbsp;<a href='https://docs.google.com/forms/d/e/1FAIpQLSeS65Pgjii8HETMz_HeiQrspjxYfNu-QKi_qaUxJmOGh4ajmQ/viewform?usp=header' target='_blank'> Click Here</a>",
    "Have a look at our Sponsorship Brochure &nbsp; <a href=../assets/SponsorshipBrochure.pdf target=_blank> Click Here!</a>",
    "For details regarding Smart Solution Exhibition 2025 &nbsp;<a href=./exhibition.html>Click Here!</a> ",
    "Events are now live! Check out on our Luma Page  &nbsp;<a href='https://lu.ma/user/EkatvaFestSMVDU' target='_blank'> Click Here</a>"
];

let currentIndex = 0;
let interval;

function updateText(direction = "up") {
    const newsList = document.querySelector(".news-list");
    const currentItem = document.querySelector(".news-item");

    const newItem = document.createElement("div");
    newItem.classList.add("news-item", "fade-in");
    
    newItem.innerHTML = direction === "up"
        ? updates[(currentIndex + 1) % updates.length]
        : updates[(currentIndex - 1 + updates.length) % updates.length];

    newsList.appendChild(newItem);


    setTimeout(() => {
        currentItem.classList.add("fade-out");
        newItem.classList.remove("fade-in");
        newItem.classList.add("show");
    }, 50);


    setTimeout(() => {
        newsList.removeChild(currentItem);
        newItem.classList.remove("show");
        newItem.classList.add("news-item");
        currentIndex = direction === "up"
            ? (currentIndex + 1) % updates.length
            : (currentIndex - 1 + updates.length) % updates.length;
    }, 600);
}

function prevUpdate() {
    updateText("down");
    resetAutoScroll();
}

function nextUpdate() {
    updateText("up");
    resetAutoScroll();
}

function startAutoScroll() {
    interval = setInterval(nextUpdate, 3000);
}

function resetAutoScroll() {
    clearInterval(interval);
    startAutoScroll();
}

document.addEventListener("DOMContentLoaded", () => {
    const newsList = document.querySelector(".news-list");
    

    newsList.innerHTML = `<div class="news-item">${updates[0]}</div>`;
    startAutoScroll();
});
