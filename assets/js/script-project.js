document.addEventListener("DOMContentLoaded", function() {
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
});
