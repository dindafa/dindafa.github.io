function populateGeneral() {
    
const resumeData = {
    social: [
        { platform: "GitHub", icon: "fa-brands fa-github fa-fw", url: "https://dindafa.github.io" },
        { platform: "LinkedIn", icon: "fa-brands fa-linkedin-in fa-fw", url: "https://linkedin.com/in/dindafa" },
        { platform: "Medium", icon: "fa-brands fa-medium fa-fw", url: "#" }
    ],
    navbar: [
        { name: "Resume", icon: "fa-solid fa-file-lines", url: "index.html" },
        { name: "Projects", icon: "fa-solid fa-briefcase", url: "projects.html" },
        { name: "Blog", icon: "fa-solid fa-pen-fancy", url: "blog.html" },
        { name: "Contact", icon: "fa-solid fa-comment-dots", url: "contact.html" }
    ],
    defaultMode: "light", // or "dark"
    // Add footer-related data
    footer: {
        templateCopyright: 'Template by <b>3rd Wave Media</b><br>Further Developed by <b>Dinda Fariz Alamsyah</b>',
    },
    leadgen: {
        heading: "Need Help With Your Project?",
        content: "Two heads are better than one! If your project needs a fresh perspective or a creative spark, let's join forces. With my expertise in full-stack development, cross-cultural collaboration, and blending tech with creativity, we can turn your ideas into reality. Let's put our heads together, brainstorm, and build something extraordinary. Ready to team up? Let's chat and make it happen! 🚀✨",
        buttonText: "Get In Touch",
        buttonUrl: "contact.html"
    },
    // Add metadata configuration
    metadata: {
        description: "Professional software developer portfolio showcasing full-stack development skills, projects, and experience",
        author: "Dinda Fariz Alamsyah"
    }
};

// Update meta tags using conditional statement
if (document.querySelector('meta[name="description"]') && document.querySelector('meta[name="author"]')) {
    document.querySelector('meta[name="description"]').setAttribute('content', resumeData.metadata.description);
    document.querySelector('meta[name="author"]').setAttribute('content', resumeData.metadata.author);
}

if (document.querySelector(".social-list")) {
    const socialList = document.querySelector(".social-list");
    socialList.innerHTML = resumeData.social.map(social => `
        <li class="list-inline-item me-0 me-md-1 me-lg-2"><a href="${social.url}"><i class="${social.icon}"></i></a></li>
    `).join('');
}

// Populate navbar
if (document.querySelector(".main-nav")) {
    const navbarContainer = document.querySelector(".main-nav");
    resumeData.navbar.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        li.innerHTML = `
            <a class="nav-link d-flex flex-column" href="${item.url}"><span class="icon-holder"><i class="${item.icon}"></i></span><span class="nav-text">${item.name}</span></a>
        `;
        navbarContainer.appendChild(li);
    });
}

// Set default mode
if (document.querySelector("#darkmode")) {
    const modeToggle = document.querySelector("#darkmode");
    if (resumeData.defaultMode === "dark") {
        modeToggle.checked = true;
        document.body.classList.add("dark-mode");
    }
}

// Check if the .footer element exists in the DOM
if (document.querySelector(".footer")) {
    // Create the footer content dynamically using resumeData
    const footerContent = `<small class="copyright">${resumeData.footer.templateCopyright}</small>`;
    // Insert the footer content into the footer element
    document.querySelector(".footer").innerHTML = footerContent;
}

// Populate leadgen section
if (document.querySelector(".leadgen-section")) {
    const leadgenSection = document.querySelector(".leadgen-section");
    const heading = leadgenSection.querySelector(".section-heading");
    const intro = leadgenSection.querySelector(".intro");
    const button = leadgenSection.querySelector(".btn-secondary");

    if (heading) heading.textContent = resumeData.leadgen.heading;
    if (intro) intro.textContent = resumeData.leadgen.content;
    if (button) {
        button.href = resumeData.leadgen.buttonUrl;
        button.innerHTML = `${resumeData.leadgen.buttonText} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
        </svg>`;
    }
}

}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
    )};