const teamMembers = [
    {
<<<<<<< Updated upstream
        name: "Dr Anil Kumar Bhardwaj",
        image: "images/Dr Anil.jpg",
        role: "Head Of Annual Fest",
        email: "anil.bhardwaj@smvdu.ac.in",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/anil-bhardwaj-a998026/",
            twitter: "https://twitter.com",
            facebook: "https://facebook.com"
=======
        name: "Dr Ankush Raina",
        image: "images/AnkushRaina-1.jpeg",
        role: "BCA President",
        email: "ankush.raina@smvdu.ac.in",
        socialLinks: {
            // linkedin: "https://www.linkedin.com/in/",
>>>>>>> Stashed changes
        }
    },
    {
        name: "Dr Mir Irfan UI Haq",
        image: "images/Dr Mir Irfan.jpg",
        role: "UAF Coordinator",
        email: "mir.irfan@smvdu.ac.in ",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/dr-mir-irfan-ul-haq-7b123640",
        }
    },
<<<<<<< Updated upstream
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
=======
    
>>>>>>> Stashed changes
    
];

const websiteTeam = [
    {
        name: "Soumitra Rai",
        image: "images/soumitra.jpeg",
        role: "SoCSE (22bcs031)",
        position: "Coordinator",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/soumitrarai/",
        }
    },
    {
        name: "Apiksha",
        image: "images/apiksha.jpg",
        role: "SoCSE (22bcs020)",
        position: "Home Page Head",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/apiksha-22941a256/",
        }
    },
    {
        name: "Ipshita",
        image: "images/ipshita.jpg",
        role: "SoCSE (22bcs039)",
        position: "Event Page Head",
        socialLinks: {
            linkedin: "www.linkedin.com/in/ipshitapathania",
        }
    },
    {
        name: "Harshit Pathak",
        image: "images/harshit.jpeg",
        role: "SoCSE (23bcs035)",
        position: "Team Page Head",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/code-killer/",
        }
    },
    {
        name: "Babul Kumar",
        image: "images/babul.jpg",
        role: "SoCSE (23bcs023)",
        position: "About Us Page Head",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/babul-yadav1211/",
        }
    },
    {
        name: "Shivam Kumar",
        image: "images/shivam.jpeg",
        role: "SoCSE (23bcs031)",
        position: "Gallery Page Head",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/shivam-kumar-2b2345283/",
        }
    },
    {
        name: "Gaurav Kumar",
        image: "images/gaurav.jpeg",
        role: "SoCSE (23bcs031)",
        position: "Contact Us Page Head",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/gaurav85",
        }
    }
    // Add more website team members as needed
];

const prTeam = [
    {
        name: "Nikhil Upadhyay",
        image: "images/nikhil.jpeg",
        role: "SoCSE (22bcs058)",
        position: "Coordinator",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/n-upadhyay/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        }
    },
    {
        name: "Sahil Singh",
        image: "images/temp_photo.webp",
        role: "SoCSE (22bcs073)",
        position: "Coordinator",
        socialLinks: {
            linkedin: "https://www.linkedin.com/",
        }
    },
    {
        name: "Variga Khajuria",
        image: "images/variga.jpeg",
        role: "SoLL (21ibe035)",
        position: "Team Lead",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/variga-khajuria-a85294189/?trk=contact-info",
        }
    }
]

const sponsorTeam = [
    {
        name: "Abhijeet Gupta",
        image: "images/abhijeet.jpeg",
        role: "SoCE (21bec077)",
        position: "Senior Consultant",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/abhijeet-gupta-52b580286/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/", 
        }
    },
    {
        name: "Anand Raj",
        image: "images/temp_photo.webp",
        role: "SoB (21ibb004)",
        position: "Team Lead",
        socialLinks: {
            linkedin: "https://www.linkedin.com/", 
        }
    },
    {
        name: "Ashu Kumar",
        image: "images/ashu.jpg",
        role: "SoEE (22bee010)",
        position: "Team Lead",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/anshu-kumar-4862a9252/"
        }
    }
]

const coreTeam = [
    {
        name: "Ashtabhuja Nath Pandey",
        image: "images/abn.jpeg",
        role: "SoCE (21bec017)",
        position: "Team Lead",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/astabhuja-nath-pandey-473b95339/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        }
    },
    {
        name: "Ramnik Sharma",
        image: "images/ramnik.jpg",
        role: "SoECE (21bec126)",
        position: "Team Lead",
        socialLinks: {
            linkedin: "https://www.linkedin.com",
        }
    }
]

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
    const prTeamContainer = document.getElementById('prTeamContainer');
    const sponsorTeamContainer = document.getElementById('sponsorTeamContainer');

    // Populate main team members
    teamMembers.forEach(member => {
        teamContainer.innerHTML += createTeamMemberCard(member);
    });

    // Populate website team members
    websiteTeam.forEach(member => {
        websiteTeamContainer.innerHTML += createTeamMemberCard(member);
    });
    //Populate PR team memeber
    prTeam.forEach(member =>{
        prTeamContainer.innerHTML += createTeamMemberCard(member);
    });

    //Populate Sponsor Team members
    sponsorTeam.forEach(member =>{
        sponsorTeamContainer.innerHTML += createTeamMemberCard(member);
    });

    coreTeam.forEach(member =>{
        coreTeamContainer.innerHTML += createTeamMemberCard(member);
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