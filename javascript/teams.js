const teamMembers = [
    {
        name: "Dr Anil Kumar Bhardwaj",
        image: "images/Dr Anil.jpg",
        role: "Head Of Annual Fest",
        email: "anil.bhardwaj@smvdu.ac.in",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/anil-bhardwaj-a998026/",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
    {
        name: "Dr Mir Irfan UI Haq",
        image: "images/Dr Mir Irfan.jpg",
        role: "Head of Annual Fest",
        email: "mir.irfan@smvdu.ac.in ",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/dr-mir-irfan-ul-haq-7b123640",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
    {
        name: "Dr Deepak Jain",
        image: "images/deepak jain.jpg",
        role: "SoB Head of Annual Fest",
        email: "deepak.jain@smvdu.ac.in",
        socialLinks: {
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
    {
        name: "Ramnik Sharma",
        image: "images/ramnik.jpg",
        role: "SoECE (21bec126)",
        email: "21bec126@smvdu.ac.in",
        socialLinks: {
            linkedin: "https://www.linkedin.com",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
    
];

const websiteTeam = [
    {
        name: "Soumitra Rai",
        image: "images/soumitra.jpeg",
        role: "SoCSE (22bcs090)",
        position: "Coordinator",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/soumitrarai/",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
    {
        name: "Apiksha",
        image: "images/apiksha.jpg",
        role: "SoCSE (22bcs020)",
        position: "Home Page Head",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/apiksha-22941a256/",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
    {
        name: "Ipshita",
        image: "images/ipshita.jpg",
        role: "SoCSE (22bcs039)",
        position: "Event Page Head",
        socialLinks: {
            linkedin: "www.linkedin.com/in/ipshitapathania",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
    {
        name: "Harshit Pathak",
        image: "images/harshit.jpeg",
        role: "SoCSE (23bcs035)",
        position: "Team Page Head",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/code-killer/",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
    {
        name: "Babul Kumar",
        image: "images/babul.jpg",
        role: "SoCSE (23bcs023)",
        position: "About Us Page Head",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/babul-yadav1211/",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
    {
        name: "Shivam Kumar",
        image: "images/shivam.jpeg",
        role: "SoCSE (23bcs031)",
        position: "Gallery Page Head",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/shivam-kumar-2b2345283/",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    },
    {
        name: "Gaurav Kumar",
        image: "images/gaurav.jpeg",
        role: "SoCSE (23bcs031)",
        position: "Contact Us Page Head",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/gaurav85",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
        }
    }
    // Add more website team members as needed
];

// Function to create a team member card
function createTeamMemberCard(member) {
    return `
        <div class="team-member">
            <img src="${member.image}" alt="${member.name}" class="profile">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            ${member.position ? `<p>${member.position}</p>` : ''}
            <p>${member.email || ''}</p>
            <div class="social-links">
                <a href="${member.socialLinks.linkedin}" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.freeiconspng.com/uploads/similar-icons-with-these-tags-linkedin-pinterest-10.png" alt="LinkedIn">
                </a>
                <a href="${member.socialLinks.twitter}" target="_blank" rel="noopener noreferrer">
                    <img src="https://pngimg.com/uploads/twitter/twitter_PNG2.png" alt="Twitter">
                </a>
                <a href="${member.socialLinks.facebook}" target="_blank" rel="noopener noreferrer">
                    <img src="https://png.pngtree.com/element_our/sm/20180630/sm_5b37de3263964.jpg" alt="Facebook">
                </a>
            </div>
        </div>
    `;
}

// Function to initialize the page
function initializePage() {
    const teamContainer = document.getElementById('teamContainer');
    const websiteTeamContainer = document.getElementById('websiteTeamContainer');

    // Populate main team members
    teamMembers.forEach(member => {
        teamContainer.innerHTML += createTeamMemberCard(member);
    });

    // Populate website team members
    websiteTeam.forEach(member => {
        websiteTeamContainer.innerHTML += createTeamMemberCard(member);
    });

    // Add hover animations
    document.querySelectorAll('.team-member').forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.style.transform = 'translateY(-5px)';
        });
        member.addEventListener('mouseleave', () => {
            member.style.transform = 'translateY(0)';
        });
    });
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);