// Array of keynote speakers
const speakers = [
    {
        name: "Prof. Filipe Samuel Silva",
        title: "Professor, University of Minho, Portugal",
        subtitle: "CEO & Founder of Extremater Dental Solutions",
        description: "Dr. Samuel earned his MSc and PhD from Minho University, Portugal. Named among “World’s Top 2% Scientists 2021” by Stanford and Elsevier, he specializes in materials science engineering, dentistry, oral surgery, metallurgy, and mechanics. He leads the CMEMS Laboratory of Micro Fabrication, holding five patents, publications, and six international awards.",
        image: "../images/Silva.jpeg"
    },
    {
        name: "Prof. Anil Kaul",
        title: "Acting Vice-Chancellor,<br />IIPH-Hyderabad",
        subtitle: "Director – Dr. Cyrus Poonawalla Centre for Infectious Diseases",
        description: "Prof. Kaul, a distinguished physician-scientist with over 35 years of expertise in infectious diseases and women’s health, is educated in Medicine (Madras Medical College), Dentistry (King George’s Medical College, Lucknow), and Public Health Administration (University of Minnesota). His rigorous translational and operational research enhances patient outcomes while reducing healthcare costs.",
        image: "../images/Anil-Kaul.jpg"
    },
    {
        name: "Prof (Dr.) Anuj Kumar",
        title: "Head of Research, Rushford Business School, Switzerland",
        description: "Dr. Kumar earned his M.Sc. at University College Dublin, Ireland, and his PhD from Aligarh Muslim University, India. Honored with an Outstanding Achiever award at MAHSA University, he serves as a Research Fellow at INTI International University. Specializing in marketing, international business, and management, he has received multiple prestigious awards.",
        image: "../images/Anuj.jpeg"
    },
    
    {
        name: "Dr. Sayantan Mandal",
        title: "Senior Assistant Professor, <br /> IIT Jammu",
        description: "Dr. Mandal graduated from Aarhus University, Denmark and earned his PhD Cum Laude from the University of Deusto. He worked at NIEPA and University of Delhi, coordinating major studies in Indian higher education. At IIT Jammu, he leads cutting-edge, notably successful research on digital education integration and GenAI-enhanced teacher competencies.",
        image: "../images/Dr-mandal.jpeg"
    }
];

// Array of organizing committee members

// Array for Chief Patron and Patron
const chiefPatronAndPatron = [
    { role: "Chief Patron", name: "Prof. (Dr.) Pragati Kumar", title: "Vice Chancellor, SMVDU", image: "../images/prof.pragatikumar.jpg" },
    { role: "Patron", name: "Mr. Ajay Kumar Sharma (JKAS)", title: "Registrar, SMVDU", image: "../images/registrar.jpg" }
];

// Array for Chairpersons
const chairpersons = [
    { role: "Chairperson", name: "Prof. Kumud Ranjan Jha", title: "Dean, Faculty of Engineering, SMVDU", image: "../images/Dr-KRjha.jpeg" },
    { role: "Chairperson", name: "Prof. Ashutosh Vashishtha", title: "Dean, Faculty of Management, SMVDU", image: "../images/ashutoshv.jpeg" },
    {role: "Chairperson", name: "Prof. R.K. Mishra", title:"Dean, Student Welfare, SMVDU", image:"https://smvdu.ac.in/wp-content/uploads/2022/06/photo-400x403.jpg"},
    {role: "Chairperson", name: "Prof. A.K. Das", title:"Dean, Research and Development, SMVDU", image:"https://smvdu.ac.in/wp-content/uploads/2021/06/22032019_akdas-1.jpg"},
    { role: "Chairperson", name: "Dr. Sunil Kumar Wanchoo", title: "Dean, Faculty of Sciences, SMVDU", image: "../images/sunilWanchoo.jpeg" },
    { role: "Chairperson", name: "Dr. Amitabh V Dwivedi", title: "Dean, Faculty of Humanities & Social Sciences, SMVDU", image: "../images/Amitabh.jpeg" }
];

// Array for Coordinators
const coordinators = [
    { role: "Coordinator", name: "Dr. Sakshi Arora", title: "Associate Professor, SoCSE, SMVDU", image: "../images/dr-sakshi-arora.jpeg" },
    { role: "Coordinator", name: "Dr. Sanjeev Anand", title:"Associate Professor, SoEM, SMVDU", image:"https://smvdu.ac.in/wp-content/uploads/2022/06/sanjeevAnand.jpg"},
    { role: "Coordinator", name: "Dr. Isha Malhotra", title: "Assistant Professor, SoLL, SMVDU", image: "../images/Dr-IshaMalhotra.jpeg" },
    { role: "Coordinator", name: "Dr. Ankush Raina", title: "Assistant Professor, SoME, SMVDU", image: "../images/AnkushRaina-1.jpeg" },
    { role: "Coordinator", name: "Mr. Rishav Bali", title: "Research Scholar, SoLL, SMVDU", image: "../images/RishavBali.jpeg" },
    { role: "Coordinator", name: "Ms. Chakshu Gupta", title: "Research Scholar, SoLL, SMVDU", image: "../images/ChakshuGupta.jpg" }
]


// Function to create bubbles
function createBubbles() {
    const container = document.getElementById('bubbles-container');
    if (!container) return; // Prevents errors if container is missing

    const committeeMembers = [...chiefPatronAndPatron, ...chairpersons, ...coordinators]; // Merge all members

    committeeMembers.forEach(member => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        bubble.innerHTML = `
            <img src="${member.image}" alt="${member.role}" class="bubble-image">
            <div class="bubble-text">
                <strong>${member.role}</strong><br>
                ${member.name}<br>
                <small>${member.title}</small>
            </div>
        `;
        container.appendChild(bubble);
    });
}


// Call the function to create bubbles
createBubbles();


function register() {
    window.open('https://forms.gle/r1hHJh12C1uxGf3v6', '_blank');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}
// Function to create speaker cards
function createSpeakerCards() {
    const container = document.getElementById('speakers-container');

    // (Optional) Ensure the container has the necessary Swiper classes
    container.classList.add('swiper', 'mySwiper');

    // Create the swiper-wrapper element that will contain the slides
    const swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';
    container.appendChild(swiperWrapper);

    // Loop through each speaker and create a slide with the card
    speakers.forEach(speaker => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide'; // Each slide will be one speaker

        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="speak-propic">
                <img src="${speaker.image}" alt="${speaker.name}">
            </div>
            <div class="speak-cont">
                <h3>${speaker.name}</h3>
                <h4>${speaker.title}</h4>
                ${speaker.subtitle ? `<h4>${speaker.subtitle}</h4>` : ''}
                <p>${speaker.description}</p>
            </div>
        `;

        slide.appendChild(card);
        swiperWrapper.appendChild(slide);
    });

    // Optionally add pagination and navigation elements if you want them
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'swiper-pagination';
    container.appendChild(paginationDiv);

    const nextBtn = document.createElement('div');
    nextBtn.className = 'swiper-button-next';
    container.appendChild(nextBtn);

    const prevBtn = document.createElement('div');
    prevBtn.className = 'swiper-button-prev';
    container.appendChild(prevBtn);
}

// Call the function to create the speaker slides
createSpeakerCards();


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // Show 2 slides on tablets
            },
            1024: {
                slidesPerView: 3, // Show 3 slides on desktops
            },
        },
    });
});