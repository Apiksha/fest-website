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
  
  // When the DOM loads, generate the theme cards
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.theme-cards');
    if (!container) return;
  
    themes.forEach(theme => {
      // Create card container
      const card = document.createElement('div');
      card.classList.add('card', 'theme-card');
  
      // Create and append image element
      const img = document.createElement('img');
      img.src = theme.image;
      img.alt = theme.alt || theme.title;
      card.appendChild(img);
  
      // Create text container
      const textContainer = document.createElement('div');
      textContainer.classList.add('theme-text');
  
      // Create and append title
      const h3 = document.createElement('h3');
      h3.textContent = theme.title;
      textContainer.appendChild(h3);
  
      // Create and append description paragraph
      const p = document.createElement('p');
      p.textContent = theme.description;
      textContainer.appendChild(p);
  
      // Append text container to card
      card.appendChild(textContainer);
  
      // Append card to the container
      container.appendChild(card);
    });
  });
  