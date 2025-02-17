// Array of coordinators defined first
const coordinators = [
  { role: "Coordinator", name: "Prof. Ankush Anand", title: "Professor, SoME, SMVDU", image: "../images/temp_photo.webp" },
  { role: "Coordinator", name: "Dr. Mir Irfan Ul Haq", title: "Associate Professor, SoME, SMVDU", image: "../images/Dr Mir Irfan.jpg" },
  { role: "Coordinator", name: "Dr. Rahul Sharma", title: "Assistant Professor, SoCE, SMVDU", image: "../images/RahulSharma.jpg" },
  { role: "Coordinator", name: "Ms. Muskan Gupta", title: "Research Scholar, SoLL, SMVDU", image: "../images/temp_photo.webp" },
  { role: "Member", name: "Mr. Dhiraj Kumar", title: "21bcs031", image: "../images/DhirajKumar.jpg" },
  { role: "Member", name: "Ms. Samragyee Saurya Patel", title: "23mbt010", image: "../images/Samragyee.jpg" },
  { role: "Member", name: "Mr. Abhinav Kumar", title: "22bcs003", image: "../images/abhinavkumar.jpeg" },
  { role: "Member", name: "Ms. Asmi Salgotra", title: "23ibb017", image: "../images/asmisalgotra.jpeg" }
  
];

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
      // alert('Copied to clipboard: ' + text);
  }).catch(err => {
      console.error('Could not copy text: ', err);
  });
}

function register() {
  window.open('https://forms.gle/xi5G1bE28Su2HTt2A', '_blank');
}

// Function to create bubbles for organizing committee
function createBubbles() {
  const container = document.getElementById('bubbles-container');
  if (!container) return;

  coordinators.forEach(member => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    bubble.innerHTML = `
      <img src="${member.image}" alt="${member.name}" class="bubble-image">
      <div class="bubble-text">
        <strong>${member.role}</strong><br>
        ${member.name}<br>
        <small>${member.title}</small>
      </div>
    `;
    container.appendChild(bubble);
  });
}

// Array of theme objects
const themes = [
  {
    title: "Sustainable Living",
    description: "Solutions for a greener future.",
    image: "images/sustainable.jpeg",
    alt: "Sustainable Living"
  },
  {
    title: "Technology for Change",
    description: "Innovative tech to improve lives.",
    image: "images/tech-change.jpeg",
    alt: "Technology for Change"
  },
  {
    title: "Smart Cities",
    description: "Ideas for urban efficiency and growth.",
    image: "images/smart-cities.jpeg",
    alt: "Smart Cities"
  },
  {
    title: "Social Innovations",
    description: "Addressing social challenges with smart ideas.",
    image: "images/social-innovations.jpeg",
    alt: "Social Innovations"
  },
  {
    title: "Health and Wellness",
    description: "Models and solutions to promote better living.",
    image: "images/health-wellness.jpeg",
    alt: "Health and Wellness"
  },
  {
    title: "Other Innovations",
    description: "Any other innovation or idea.",
    image: "images/innovation.jpeg",
    alt: "Other Innovations"
  }
];

// When the DOM loads, generate both theme cards and organizing committee bubbles
document.addEventListener("DOMContentLoaded", function () {
  // Generate theme cards
  const themeContainer = document.querySelector('.theme-cards');
  if (themeContainer) {
    themes.forEach(theme => {
      const card = document.createElement('div');
      card.classList.add('card', 'theme-card');

      const img = document.createElement('img');
      img.src = theme.image;
      img.alt = theme.alt || theme.title;
      card.appendChild(img);

      const textContainer = document.createElement('div');
      textContainer.classList.add('theme-text');

      const h3 = document.createElement('h3');
      h3.textContent = theme.title;
      textContainer.appendChild(h3);

      const p = document.createElement('p');
      p.textContent = theme.description;
      textContainer.appendChild(p);

      card.appendChild(textContainer);
      themeContainer.appendChild(card);
    });
  }

  // Generate organizing committee bubbles
  createBubbles();
});
