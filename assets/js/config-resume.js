//structure:
//Variables - Populate - Calling Function

function populateResume() {
const resumeData = {
    profile: {
        name: "Dinda Fariz Alamsyah",
        role: "Fullstack Developer",
        // contact: {
            // phone: "+Contact-Me",
            // email: "@pm.me",
            // website: "www.",
        // },
        image: "assets/images/profile.png"
    },
    
    summary: "Hai! Dinda Fariz Alamsyah (Dinda F.A.) here 👋 you can call me by my first name 'Dinda'. I’m a post-graduate in Information Systems with experience in full-stack engineering and cross-cultural collaboration across Indonesia and Japan. I enjoy blending technical skills with artistic projects like videography and photography. Passionate about learning and adapting, I’m excited to explore part-time opportunities where I can contribute my unique mix of tech know-how and creative energy to meaningful projects!. <br><br><i><b>FUN FACT!</b> 'Dinda' is feminime name in Indonesia, so passively, i prank people alot here in my home country.</i>",
    timeline: [
        {
            time: "2024 - Present",
            company: "Mova Active",
            title: "Web Developer",
            description: [
                "Developed a brand introduction website for Mova Active using WordPress.",
                "Designed a user-friendly interface to showcase the brand’s running enthusiast clothing line.",
                "Implemented basic configurations and ensured smooth website functionality.",
                "Trained staff on managing and updating the website through the WordPress panel."
            ]
        },
        {
            time: "2022 - Present",
            company: "IINE INTERNATIONAL",
            title: "Full Stack Engineer",
            description: [
                "Developed responsive websites with Japanese localization for optimal user engagement.",
                "Ensured cross-platform compatibility and seamless user experience across devices.",
                "Maintained website functionality, resolved bugs, and implemented client-driven customizations.",
                "Conducted research on Japanese web standards to meet localization requirements."
            ]
        },
        {
            time: "2022 - 2023",
            company: "農業生産法人株式会社だんだん村",
            title: "Contract Worker",
            description: [
                "Inspected and packaged green onions, adhering to JGAP and 5S workplace standards.",
                "Operated and maintained agricultural machinery, including Kubota and YANMAR equipment.",
                "Coordinated cross-cultural teamwork among Vietnamese, Filipino, Japanese, and Indonesian colleagues.",
                "Managed field production and maintenance across all four seasons for successful crop harvests."
            ]
        },
        {
            time: "2021 - 2021",
            company: "LPK Mega Cahaya Gemilang",
            title: "Full Stack Engineer",
            description: [
                "Developed a web-based desktop application for Japanese language simulation tests (JFT-Basic).",
                "Integrated Japanese and Indonesian localization for user-friendly interface and experience.",
                "Created technical documentation and provided post-launch support for bug fixes and updates.",
                "Optimized application scalability for handling over 1000 data inputs."
            ]
        },
        {
            time: "2020 - 2020",
            company: "NaZMa Office",
            title: "Freelance Videographer",
            description: [
                "Produced a company profile video for Batik Namburan, showcasing their brand story.",
                "Handled pre-production planning, filming, and post-production editing.",
                "Collaborated with a professional team to deliver high-quality visual content.",
                "Gained experience in blending creativity with business acumen."
            ]
        },
        {
            time: "2020 - Present",
            company: "Freelance",
            title: "Research Assistant",
            description: [
                "Assisted researchers in formatting documents and ensuring compliance with academic standards.",
                "Conducted intensive research to find relevant references, including books, journals, papers, and web sources.",
                "Supported the completion of final projects and theses by providing well-organized research materials.",
                "Developed strong research and organizational skills while working on diverse academic projects."
            ]
        },
        {
            time: "2018 - 2019",
            company: "ARA CREATIVE",
            title: "Sports Photographer",
            description: [
                "Captured dynamic action shots at mountain biking events using DSLR cameras.",
                "Edited photos with Adobe Lightroom to enhance quality and visual appeal.",
                "Collaborated with a professional agency to deliver high-impact imagery.",
                "Gained hands-on experience in event photography and teamwork."
            ]
        }
    ],
    skills: {
        progress: [
            { name: "🎓 Researching", level: 88 },
            { name: "🖥 Web Development", level: 87 },
            { name: "📝 Technical Writing", level: 82 },
            { name: "📸 Photography", level: 90 },
            { name: "🕺 Videography", level: 80 }
        ],
        badges: ["Cross-Cultural Communication", "Team Collaboration", "Problem Solving", "Adaptability", "Time Management", "Attention to Detail"]
    },
    projects: [        
        {
            name: "JFT-Basic Simulation Test Application",
            description: "Created a web-based desktop application for Japanese language simulation tests with localization and scalability features."
        },
        // {
        //     name: "Design An Expert System For Mental Disorder Analysis",
        //     description: "Designed and wrote technical web design document for Mental Disorder Analysis based on DSM-V book and tree diagram symptoms analysis."
        // },
        {
            name: "Nyibat Web Scraping App",
            description: "Developed a project-based application as part of the university final project, focusing on web scraping technology"
        },
        {
            name: "IINE INTERNATIONAL Portfolio Website",
            description: "Developed a responsive website with Japanese localization for optimal user engagement and cross-platform compatibility."
        },
        {
            name: "Mova Active Portfolio Website",
            description: "Developed a Wordpress for Mova Active brand introduction website, currently this project is still on hold."
        }
    ],
    education: [
        {
            degree: "Bachelor of Information Systems",
            institution: "Universitas AMIKOM Yogyakarta",
            time: "2017 - 2021"
        }
    ],
    languages: [
        { name: "English", level: 8.5 },
        { name: "Indonesian", level: 10 },
        { name: "Javanese", level: 9 },
        { name: "Japanese", level: 4.0 }
    ],
};

 // Populate resume profile
 if (document.querySelector(".resume-profile-pic")) {
    document.querySelector(".resume-profile-pic").src = resumeData.profile.image;
    document.querySelector(".resume-name").textContent = resumeData.profile.name;
    document.querySelector(".resume-role-title").textContent = resumeData.profile.role;
    // const contactList = document.querySelector(".resume-contact-list");
    // contactList.innerHTML = `
        // <li class="list-inline-item me-md-3 me-lg-5"><i class="resume-contact-icon bi bi-telephone-inbound me-2"></i> ${resumeData.profile.contact.phone}</li>
        // <li class="list-inline-item me-md-3 me-lg-5"><i class="resume-contact-icon bi bi-envelope me-2"></i> ${resumeData.profile.contact.email}</li> 
        // <li class="list-inline-item me-lg-5"><i class="resume-contact-icon bi bi-globe me-2"></i> ${resumeData.profile.contact.website}</li>
        //`;
}


// Populate resume summary
if (document.querySelector(".resume-summary-desc")) {
    document.querySelector(".resume-summary-desc").innerHTML = resumeData.summary;
}

// Populate resume timeline
if (document.querySelector(".resume-timeline")) {
    const timelineContainer = document.querySelector(".resume-timeline");
    resumeData.timeline.forEach(item => {
        const article = document.createElement("article");
        article.classList.add("resume-timeline-item", "position-relative", "pb-5");
        article.innerHTML = `
            <div class="resume-timeline-item-header mb-2">
                <div class="resume-position-meta d-flex justify-content-between mb-1">
                    <div class="resume-position-time">${item.time}</div>
                    <div class="resume-company-name">${item.company}</div>
                </div>
                <h3 class="resume-position-title mb-1">${item.title}</h3>
            </div>
            <div class="resume-timeline-item-desc">
                <ul class="resume-timeline-list">
                    ${item.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            </div>
        `;
        timelineContainer.appendChild(article);
    });
}

// Populate resume skills (progress bar)
if (document.querySelector(".resume-skills-section ul.list-unstyled")) {
    const skillsProgressContainer = document.querySelector(".resume-skills-section ul.list-unstyled");
    if (resumeData.skills && resumeData.skills.progress) {
        resumeData.skills.progress.forEach(skill => {
            const li = document.createElement("li");
            li.classList.add("mb-2");
            li.innerHTML = `
                <div class="resume-skill-name">${skill.name}</div>
                <div class="progress resume-progress" role="progressbar" aria-label="Basic example" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar resume-progress-bar" style="width: ${skill.level}%"></div>
                </div>
            `;
            skillsProgressContainer.appendChild(li);
        });
    }
}

// Populate resume skills (badge)
if (document.querySelector(".resume-skills-section ul.list-inline")) {
    const skillsBadgeContainer = document.querySelector(".resume-skills-section ul.list-inline");
    if (resumeData.skills && resumeData.skills.badges) {
        resumeData.skills.badges.forEach(skill => {
            const li = document.createElement("li");
            li.classList.add("list-inline-item");
            li.innerHTML = `<span class="badge resume-skill-badge">${skill}</span>`;
            skillsBadgeContainer.appendChild(li);
        });
    }
}

// Populate resume projects
if (document.querySelector(".resume-projects-section")) {
    const projectsContainer = document.querySelector(".resume-projects-section");
    resumeData.projects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <h4 class="item-heading"><i class="item-icon bi bi-square-fill me-2"></i><a href="#">${project.name}</a></h4>
            <div class="item-desc" style="text-align: justify;">${project.description}</div>
        `;
        projectsContainer.appendChild(div);
    });
}

// Populate resume education
if (document.querySelector(".resume-educate-section ul.list-unstyled")) {
    const educationContainer = document.querySelector(".resume-educate-section ul.list-unstyled");
    resumeData.education.forEach(edu => {
        const li = document.createElement("li");
        li.classList.add("mb-2");
        li.innerHTML = `
            <div class="resume-degree font-weight-bold">${edu.degree}</div>
            <div class="resume-degree-org">${edu.institution}</div>
            <div class="resume-degree-time">${edu.time}</div>
        `;
        educationContainer.appendChild(li);
    });
}

// Populate resume languages
if (document.querySelector(".resume-lang-section ul.list-unstyled")) {
    const languagesContainer = document.querySelector(".resume-lang-section ul.list-unstyled");
    resumeData.languages.forEach(lang => {
        const li = document.createElement("li");
        li.classList.add("mb-2");
        const fullStars = Math.floor(lang.level);
        const halfStar = lang.level % 1 !== 0;
        li.innerHTML = `
            <div class="resume-lang-name">${lang.name}</div>
            <div class="resume-level-indicator row gx-0 flex-nowrap">
                ${[...Array(fullStars)].map(() => '<div class="col"><span class="item item-full"></span></div>').join('')}
                ${halfStar ? '<div class="col"><span class="item item-half"></span></div>' : ''}
                ${[...Array(10 - fullStars - (halfStar ? 1 : 0))].map(() => '<div class="col"><span class="item"></span></div>').join('')}
            </div>
        `;
        languagesContainer.appendChild(li);
    });
}

}

document.addEventListener("DOMContentLoaded", function() {
    populateGeneral();
    populateResume();
});