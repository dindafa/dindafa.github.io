//structure:
//Variables - Populate - Calling Function

function populateProject() {
    
    const projectData = {
        profile: {
            image: "assets/images/profile.png",
            name: "My Projects",
            intro: "Curious what I’ve been working on? Take a peek below! From websites to creative tech solutions, here’s a quick list of projects I’ve brought to life. <i>Monggo!</i> 😊✨ (it's Jawa phrase for formal way of saying 'Go head!')"
        },
        projects: [
            {
                name: "JFT Basic Simulation",
                description: "The JFT-Basic Simulation software, developed for Mega Cahaya Gemilang, is a comprehensive tool designed to help users prepare for the Japanese Proficiency Test (JFT-Basic).",
                image: "assets/images/projects/project-jft-simulation.png",
                url: "/project-jft-simulation.html"
            },
            // {
            //     name: "Design An Expert System For Mental Disorder Analysis",
            //     description: "The Design of Mental Disorder Expert System (Self Love) is a student project focused on creating a technical web design document, system architecture, wireframes, and a functional app prototype using Figma.",
            //     image: "assets/images/projects/project-selflove-uni.png",
            //     url: "/project-selflove-uni.html"
            // },
            {
                name: "Nyibat Web Scraping App",
                description: "Nyibat (or Mengambil (Dengan Paksa) in traditional Jambi language) is a University Final Project software designed for web scraping multiple Indonesian marketplaces.",
                image: "assets/images/projects/project-nyibat-uni.png",
                url: "/project-nyibat-uni.html"
            },
            {
                name: "IINE INTERNATIONAL Portfolio Website",
                description: "IINE International Portfolio website is a one-page design tailored for Japanese audiences, featuring a clean and minimalist layout that aligns with common Japanese design aesthetics. ",
                image: "assets/images/projects/project-iine-portfolio.png",
                url: "/project-iine-portfolio.html"
            },
        ]
    };
    

     // Populate profile holder
     if (document.querySelector(".profile-pic")) {
        document.querySelector(".profile-pic").src = projectData.profile.image;
        document.querySelector(".intro-name").textContent = projectData.profile.name;
        document.querySelector(".profile-intro p").innerHTML = projectData.profile.intro;
    }

    // Populate projects section
    if (document.querySelector(".projects-section .row")) {
        const projectsContainer = document.querySelector(".projects-section .row");
        projectData.projects.forEach(project => {
            const div = document.createElement("div");
            div.classList.add("project-item", "col-12", "col-md-6", "col-lg-12", "mb-5");
            div.innerHTML = `
                <div class="project-item-inner row">
                    <div class="col-12 col-lg-5 col-xl-4">
                        <img class="project-thumb rounded-2 mb-3 mb-lg-0 rounded mx-auto" src="${project.image}" alt="image">
                    </div>
                    <div class="col-12 col-lg-7 col-xl-8">
                        <h3 class="title"><a href="${project.url}">${project.name}</a></h3>
                        <div class="intro mb-3">${project.description}</div>
                        <a class="more-link" href="${project.url}">View Project <span class="link-arrow"><i class="bi bi-arrow-right"></i></span></a>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(div);
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    populateGeneral();
    populateProject();
});
