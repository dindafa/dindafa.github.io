document.addEventListener("DOMContentLoaded", function() {
// Populate page intro section
if (document.querySelector(".profile-pic")) {
    document.querySelector(".profile-pic").src = resumeData.pageIntro.image;
    document.querySelector(".intro-name").textContent = resumeData.pageIntro.name;
    document.querySelector(".profile-intro p").innerHTML = resumeData.pageIntro.intro;
}

// Populate testimonials section
if (document.querySelector(".testimonials-slider")) {
    const testimonialsContainer = document.querySelector(".testimonials-slider");
    resumeData.testimonials.forEach(testimonial => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <div class="item-inner position-relative">    
                <div class="quote-holder">
                    <i class="quote-icon fa-solid fa-quote-left"></i>
                    <i class="quote-icon fa-solid fa-quote-right"></i>
                    <blockquote class="quote-content px-3 px-lg-5 mb-3 text-start">
                        ${testimonial.quote}
                    </blockquote>
                </div>
                <div class="source-holder ps-3 ps-lg-5 text-start">
                    <div class="source-meta">
                        <div class="name">${testimonial.name}</div>
                    </div>
                </div>
            </div>
        `;
        testimonialsContainer.appendChild(div);
    });
}

// Populate skills section
if (document.querySelector(".skill-blocks")) {
    const skillsContainer = document.querySelector(".skill-blocks");
    if (resumeData.skills) {
        resumeData.skills.forEach(skill => {
            const div = document.createElement("div");
            div.classList.add("item", "col-md-6", "col-lg-4", "text-md-center");
            div.innerHTML = `
                <div class="item-icon-holder mx-md-auto"><i class="item-icon ${skill.icon}"></i></div>
                <h3 class="item-title mb-3">${skill.name}</h3>
                <div class="item-desc">${skill.description}</div>
            `;
            skillsContainer.appendChild(div);
        });
    }
}

// Populate projects section
if (document.querySelector(".projects-section .row")) {
    const projectsContainer = document.querySelector(".projects-section .row");
    resumeData.projects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project-item", "col-12", "col-md-6", "col-lg-12", "mb-5");
        div.innerHTML = `
            <div class="project-item-inner row">
                <div class="col-12 col-lg-5 col-xl-4">
                    <img class="project-thumb rounded-2 mb-3 mb-lg-0 rounded mx-auto" src="${project.image}" alt="image">
                </div>
                <div class="col-12 col-lg-7 col-xl-8">
                    <h3 class="title"><a href="${project.url}">${project.title}</a></h3>
                    <div class="intro mb-3">${project.summary}</div>
                    <h4 class="subtitle">Tech Stack:</h4>
                    <ul class="tech-stack list-inline">
                        ${project.techStack.map(tech => `<li class="list-inline-item"><img class="rounded" src="assets/images/tech-icons/${tech}.svg" alt=""></li>`).join('')}
                    </ul>
                    <a class="more-link" href="${project.url}">View Case Study <span class="link-arrow"><i class="bi bi-arrow-right"></i></span></a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(div);
    });
}

// Populate case study section
if (document.querySelector(".case-study-section")) {
    document.querySelector(".intro-name").textContent = resumeData.caseStudy.title;
    document.querySelector(".case-study-intro p").textContent = resumeData.caseStudy.intro;
    document.querySelector(".case-study-intro img").src = resumeData.caseStudy.image;
    document.querySelector(".case-study-section .case-study-section-content p").textContent = resumeData.caseStudy.background;
    const objectivesContainer = document.querySelector(".case-study-section .case-study-section-content ul");
    resumeData.caseStudy.objectives.forEach(objective => {
        const li = document.createElement("li");
        li.classList.add("mb-3");
        li.textContent = objective;
        objectivesContainer.appendChild(li);
    });
    document.querySelector(".case-study-section .case-study-section-content .challenge").textContent = resumeData.caseStudy.challenge;
    const challengePointsContainer = document.querySelector(".case-study-section .case-study-section-content .challenge-points");
    resumeData.caseStudy.challengePoints.forEach(point => {
        const li = document.createElement("li");
        li.classList.add("mb-3");
        li.textContent = point;
        challengePointsContainer.appendChild(li);
    });
    document.querySelector(".case-study-section .case-study-section-content .solutions").textContent = resumeData.caseStudy.solutions;
    const solutionImagesContainer = document.querySelector(".case-study-section .case-study-section-content .solution-images");
    resumeData.caseStudy.solutionImages.forEach(image => {
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `<img class="img-fluid" src="${image}">`;
        solutionImagesContainer.appendChild(div);
    });
    const techStackContainer = document.querySelector(".case-study-section .case-study-section-content .tech-stack");
    resumeData.caseStudy.techStack.forEach(tech => {
        const li = document.createElement("li");
        li.classList.add("list-inline-item");
        li.innerHTML = `<img class="rounded" src="assets/images/tech-icons/${tech}.svg" alt="">`;
        techStackContainer.appendChild(li);
    });
}

});