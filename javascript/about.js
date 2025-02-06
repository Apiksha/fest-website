const cardsData = [
    { title: "Ekatva", 
    text: "Ekatva is a technical festival that has achieved great feats since its inception in 2008. The festival is held annually at Shri Mata Vaishno Devi University in Jammu and Kashmir, a highly technical and fully residential university that started functioning as an academic unit in 2025.", 
    img: "https://img.freepik.com/premium-photo/wearing-vr-glasses-get-into-metaverse_1003347-1092.jpg" },

    { title: "Titiksha", 
    text: "TITIKSHA is a technical festival that has achieved great feats since its inception in 2008. The festival is held annually at Shri Mata Vaishno Devi University in Jammu and Kashmir, a highly technical and fully residential university that started functioning as an academic unit in 2010.", img: "https://img.freepik.com/premium-photo/3d-robot-illustration-with-circuitry-technology-background-4k-hd-photo_1193781-30162.jpg", reverse: true },

    { title: "Srijan", 
    text: "Srijan is a technical festival that has achieved great feats since its inception in 2008. The festival is held annually at Shri Mata Vaishno Devi University in Jammu and Kashmir, a highly technical and fully residential university that started functioning as an academic unit in 2012.", img: "https://t4.ftcdn.net/jpg/05/96/80/97/360_F_596809736_lzdwKMiJ6I2drjTRVK6oM9OOCVXPjDxk.jpg" },

    { title: "Tatva", 
    text: "Tatva is a technical festival that has achieved great feats since its inception in 2008. The festival is held annually at Shri Mata Vaishno Devi University in Jammu and Kashmir, a highly technical and fully residential university that started functioning as an academic unit in 2016.", img: "https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_1280.jpg", reverse: true },

    { title: "Resurgence", 
    text: "Resurgence is a cultural festival that has achieved great feats since its inception in 2008. The festival is held annually at Shri Mata Vaishno Devi University in Jammu and Kashmir, a highly technical and fully residential university that started functioning as an academic unit in 2025.", img: "https://smvdu.ac.in/wp-content/uploads/2023/12/aaaCopy-of-IMG_20231214_183940-1.jpg" }
];

const touristPlaces = [
    { name: "Vaishno Devi Temple", img: "https://charzanholidays.com/wp-content/uploads/2024/10/vaishno-devi-temple_charzan_holidays.png" },
    { name: "Patnitop Hillstation", img: "https://img.etimg.com/thumb/msid-27842052,width-480,height-360,imgsize-191409,resizemode-75/snowfall-in-kufri.jpg" },
    { name: "Amar Palace", img: "https://c0.wallpaperflare.com/preview/882/185/128/india-jammu-amar-mahal-museum-and-library.jpg" }
];

function renderCards() {
    const cardContainer = document.getElementById("card-container");
    cardsData.forEach((card, index) => {
        const cardHTML = `
            <div class="card" id="hi">
                <div class="${card.reverse ? 'cards1' : 'cards'}">
                    ${card.reverse ? `
                        <div class="${index % 2 === 0 ? 'titiksha' : 'Ekatva'}">
                            <h2>${card.title}</h2>
                            <p>${card.text}</p>
                        </div>
                        <div class="${index % 2 === 0 ? 'imge' : 'imgs'}">
                            <img src="${card.img}" alt="">
                        </div>
                    ` : `
                        <div class="${index % 2 === 0 ? 'imge' : 'imgs'}">
                            <img src="${card.img}" alt="">
                        </div>
                        <div class="${index % 2 === 0 ? 'titiksha' : 'Ekatva'}">
                            <h2>${card.title}</h2>
                            <p>${card.text}</p>
                        </div>
                    `}
                </div>
            </div>`;
        cardContainer.innerHTML += cardHTML;
    });
}

function renderTouristPlaces() {
    const boxContainer = document.getElementById("box-container");
    touristPlaces.forEach(place => {
        const boxHTML = `
            <div>
                <div class="box">
                    <img src="${place.img}" alt="" class="image">
                </div>
                <div class="name-box">${place.name}</div>
            </div>`;
        boxContainer.innerHTML += boxHTML;
    });
}

renderCards();
renderTouristPlaces();

// new animation add
// Function to observe elements and apply animation
function animateOnScroll(entries, observer) {
entries.forEach(entry => {
if (entry.isIntersecting) {
    if (entry.target.classList.contains("titiksha") || entry.target.classList.contains("Ekatva")) {
        entry.target.classList.add("animate-slide-left");
    }
    if (entry.target.classList.contains("imge") || entry.target.classList.contains("imgs")) {
        entry.target.classList.add("animate-slide-right");
    }
}
});
}

// Observer setup
const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.3 });

// Selecting elements to observe
document.querySelectorAll(".titiksha, .Ekatva, .imge, .imgs").forEach(element => {
observer.observe(element);
});


// end
