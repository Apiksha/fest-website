const technicalClubs = [
    {
      name: "Null : The Cybersecurity Club",
      image: "./images/null.jpeg",
      description: "Secure the Future, Defend with Code.",
    },
    {
      name: "Code Club",
      image: "https://smvdu.ac.in/wp-content/uploads/2023/10/code_club.jpg",
      description: "Embrace the challange. Embrace the code.",
    },
    {
        name: "AET Club",
        image: "https://smvdu.ac.in/wp-content/uploads/2023/10/AET-CLUB-Poster-1-1.jpg",
        description: "Automating today and the future.",
    },
    {
        name: "Google Developer Student Club",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCkq6vAnAu1cB_ARRA4tdlYZ_XjPM0bJaTA&s",
        description: "Build. Innovate. Connect. Grow with GDSC!",
    },
    {
        name: "AI Club",
        image: "https://smvdu.ac.in/wp-content/uploads/2024/09/471e7f0a-6916-11ef-bf25-0242ac110002-1.jpeg",
        description: "Think AI, Build Future, Stay Ahead.",
    },
    {
        name: "Dev Growth Club",
        image: "./images/dev-growth.png",
        description: "Learn. Grow. Build the Future..",
    },
    {
        name: "Tarang",
        image: "https://smvdu.ac.in/wp-content/uploads/2024/09/TARANG-1.png",
        description: "Spark Ideas, Power Innovation, Explore Electronics.",
    },
    {
        name: "SAE Club",
        image: "https://smvdu.ac.in/wp-content/uploads/2024/08/coverpage-1.png",
        description: "Drive Innovation, Fuel Passion, Rev Up Your Engineering!",
    },
  ];
  
  const culturalClubs = [
    {
        name: "ShabdARTh",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlo_L2P7TFPeG8lqXDz1XfUoUaJjOMLbQ5zQ&s",
        description: "Where Shabd meets ART.",
    },
    {
        name: "Prishtbhoomi",
        image: "./images/prishtbhoomi.png",
        description: "Where every story finds its stage.",
    },
    {
      name: "Atelier Multimedia Club",
      image: "https://smvdu.ac.in/wp-content/uploads/2023/10/Atelier-New-Banner-1-1.png",
      description: "Explore the art of multimedia.",
    },
    {
      name: "Aalap",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVdrTkpfsRut57K3YDNbbNd3lcH64cz5zBA&s",
      description: "Find harmony through music.",
    },
    {
        name: "Fight Knight",
        image: "./images/fight-knight.png",
        description: "Martial arts club.",
      },
    {
        name: "Zenith",
        image: "https://smvdu.ac.in/wp-content/uploads/2023/11/aPicsart_23-10-12_23-48-58-524-1.jpg",
        description: "Move. Groove. Express. Dance with Passion.",
    },
    {
        name: "VYOM Astronomy Club",
        image: "https://smvdu.ac.in/wp-content/uploads/2024/06/Presents-1-1.png",
        description: "Explore the Stars, Discover the Universe.",
    },
    {
        name: "Yuva Tourism",
        image: "./images/yuva-tourism.png",
        description: "Explore the Stars, Discover the Universe.",
    },
    {
        name: "Aayojan",
        image: "./images/aayojan.png",
        description: "Explore the Stars, Discover the Universe.",
    },
  ];
  
  function createCards(clubs, containerId) {
    const container = document.getElementById(containerId);
  
    clubs.forEach((club) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${club.image}" alt="${club.name}">
        <div class="card-content">
          <h3>${club.name}</h3>
          <p>${club.description}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  createCards(technicalClubs, "technical-clubs");
  createCards(culturalClubs, "cultural-clubs");
  