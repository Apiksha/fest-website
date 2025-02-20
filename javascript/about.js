const cardsData = [
    { title: "Titiksha", 
    text: "TITIKSHA is a technical festival that has achieved great feats since its inception in 2008. The festival is held annually at Shri Mata Vaishno Devi University in Jammu and Kashmir, a highly technical and fully residential university that started functioning as an academic unit in 2010..", 
    img: "https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/83182480_2513820002172892_5156588064004374528_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=Fai2bsb5lIoQ7kNvgG_bETG&_nc_oc=Adh_IEwT-2sq3t4AnVvl6bDeiFrnLT66q2A_273104V1_o1pwOKcUxQgSXQ6xSoA8QU&_nc_zt=23&_nc_ht=scontent.fdel29-1.fna&_nc_gid=AeezKztgjwCl0AQNzyiQEpU&oh=00_AYD66vvfZQ-A9Ths4qYglokux-cxdFl2cYSWxfiCGm5tkw&oe=67DD7044" },

    { title: "Srijan", 
    text: "Srijan is a technical festival that has achieved great feats since its inception in 2008. The festival is held annually at Shri Mata Vaishno Devi University in Jammu and Kashmir, a highly technical and fully residential university that started functioning as an academic unit in 2012.",
    img: "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/461308966_3779594172262129_3315393983026756358_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=0uiaxs8fSSoQ7kNvgFRyNNl&_nc_oc=AdiZCkWbgGvnkIocyvas6bJj2P_UsbK9Cf_-hAb8GLZlr3FJYjWI58zHiefjZc6IZLE&_nc_zt=23&_nc_ht=scontent.fdel29-1.fna&_nc_gid=Awb7F7x7xg-2Daqt6NKeHG3&oh=00_AYDV0io4rr0Qe_0AklT2huJg15smkMb-DygyXgzMS2ph9A&oe=67BBBE36", reverse: true },

    { title: "Artha", 
    text: "Artha is a technical festival that has achieved great feats since its inception in 2008. The festival is held annually at Shri Mata Vaishno Devi University in Jammu and Kashmir, a highly technical and fully residential university that started functioning as an academic unit in 2012.", 
    img: "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/460641609_3774231066131773_7846729893222374341_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9W7ktEGHXjgQ7kNvgEuWbKr&_nc_oc=AdiyPj4GuQ-c-O3VADaYDx8omBf6NciuZm7sGrzCNBnV4UMg_Lq0XvYMmwxwJHGb8K4&_nc_zt=23&_nc_ht=scontent.fdel29-1.fna&_nc_gid=ALwj3BVmlHqg_4p6ESRYs19&oh=00_AYBeg0v6numzxXfCXS4SD242bca6Ubr0DFb6XprVD1l0sg&oe=67BBCB37" },

    { title: "Tatva", 
    text: "Tatva is a technical festival that has achieved great feats since its inception in 2008. The festival is held annually at Shri Mata Vaishno Devi University in Jammu and Kashmir, a highly technical and fully residential university that started functioning as an academic unit in 2016.",
     img: "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/462606640_3791745607713652_1306827612483523785_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=LzrUTXuUQxoQ7kNvgE6IdbE&_nc_oc=Adj_v6VzJ8ZLqX89nvyEhKglth5L9DbSWYsENhkX6CnXbZqDPMqV8S-diS-_yOD0iEg&_nc_zt=23&_nc_ht=scontent.fdel29-1.fna&_nc_gid=AqBUwWcorkVUjkOztjAStD5&oh=00_AYB8eF7rDxRdxdJG6Jt--yjJoGKo83hdRSaIvzkWidXm-w&oe=67BBD302", reverse: true },

    { title: "Jeevant", 
    text: "Jeevant is a biotech department festival that has achieved great feats since its inception in 2008.The festival is held annually at Shri Mata Vaishno Devi University in Jammu and Kashmir, a highly technical and fully residential university that started functioning as an academic unit in 2025.", 
    img: "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/461575040_3779547955600084_8014681088440510374_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=zeNQSAaYHhoQ7kNvgHocb5g&_nc_oc=Adjv9zEPD-3BlVGxf9IvinVbTOKu47ZDnwsNxZCArF-t-7GpLf6IPi7hFJnoSg7E55g&_nc_zt=23&_nc_ht=scontent.fdel29-1.fna&_nc_gid=AFYZhOGq43M8dApLPQQpQfx&oh=00_AYDTdx82Ey2GG6sGTZhLdm4m--qmyMiFNcmQBVP1tMr5xQ&oe=67BBAEEF" }
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
            <div class="card">
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
// end


// start vc section js code
document.addEventListener("DOMContentLoaded", function () {
const readMore = document.querySelector(".read-more");
readMore.addEventListener("click", function (event) {
event.preventDefault(); 
alert("Redirecting to more details...");

setTimeout(function () {
    window.location.href = "https://smvdu.ac.in/about-us/";
}, 200); 
});
});

// event part
document.addEventListener("DOMContentLoaded", function () {
const aboutSection = document.querySelector(".about-section");

const observer = new IntersectionObserver(
(entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aboutSection.classList.add("show");
            observer.unobserve(aboutSection); 
        }
    });
},
{ threshold: 0.3 } 
);

observer.observe(aboutSection);
});