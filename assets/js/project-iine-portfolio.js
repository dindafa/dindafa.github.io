function populateCaseStudy() {
    const caseStudyData = {
        intro: {
            profileImage: "assets/images/profile.png",
            title: "IINE INTERNATIONAL Portfolio Website",
            bannerImage: "assets/images/projects/project-iine-portfolio.png",
            introText: "The IINE International Portfolio website is a one-page design tailored for Japanese audiences, featuring a clean and minimalist layout that aligns with common Japanese design aesthetics. It showcases essential information such as company details, student profiles, facilities, standardization practices, and the company’s location. The contact form is seamlessly connected to the company’s email, LINE, and international phone number, making communication quick and convenient for users. With Japanese localization and a responsive design, the site ensures a smooth and professional experience across all devices. Its intuitive navigation and interactive elements make it an effective platform for connecting with clients and showcasing IINE International’s services."
        },
        sections: [
            {
                heading: "Background",
                content: `
                    <p>
            The IINE International Portfolio website was developed to address the need for a professional and culturally relevant online presence in Japan. Many international companies struggle to connect with Japanese clients due to language barriers and design preferences. To bridge this gap, the website was designed with Japanese localization and a minimalist layout that resonates with local users. The goal was to create a platform that effectively communicates IINE International’s offerings while providing a seamless user experience.
        </p>
        <ul>
            <li><strong>Language Barriers</strong>: Non-localized websites often fail to engage Japanese audiences.</li>
            <li><strong>Cultural Relevance</strong>: Japanese users prefer clean, minimalist designs.</li>
            <li><strong>Communication Gaps</strong>: Lack of accessible contact options can hinder client interaction.</li>
        </ul>`
            },
            {
                heading: "Solutions & Results",
                content: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/j6NISb_2Hdo?si=65Qr0UNT2dd2LtFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p>
            The IINE International Portfolio website provides a practical solution by combining Japanese localization with a user-friendly design. The one-page layout ensures easy navigation, while the contact form connects users directly to the company’s email, LINE, and international phone number. The responsive design works flawlessly on all devices, and the minimalist aesthetic aligns with Japanese preferences. These features make the website an effective tool for showcasing IINE International’s services and connecting with clients.
        </p>
        <h3>Key Features:</h3>
        <ul>
            <li><strong>Japanese Localization</strong>: Tailored content and design for Japanese audiences.</li>
            <li><strong>One-Page Layout</strong>: Easy navigation and quick access to information.</li>
            <li><strong>Contact Integration</strong>: Connects users to email, LINE, and international phone.</li>
            <li><strong>Responsive Design</strong>: Works seamlessly on desktop and mobile devices.</li>
        </ul>
        <h3>Results:</h3>
        <ul>
            <li>Improved engagement with Japanese clients.</li>
            <li>Enhanced user experience with intuitive navigation.</li>
            <li>Increased accessibility through multiple contact options.</li>
        </ul>`
            }
        ]
    };

    // Update title population with querySelector
    if (document.querySelector('title')) {
        document.title = caseStudyData.intro.title;
    }

    // Populate intro section
    if (document.querySelector(".profile-pic")) {
        document.querySelector(".profile-pic").src = caseStudyData.intro.profileImage;
        document.querySelector(".intro-name").textContent = caseStudyData.intro.title;
        document.querySelector(".banner").src = caseStudyData.intro.bannerImage;
        document.querySelector(".case-study-intro p").innerHTML = caseStudyData.intro.introText;
    }

    // Populate sections with new layout
    if (document.querySelector(".case-study-section")) {
        const sectionsContainer = document.querySelector(".case-study-section");
        caseStudyData.sections.forEach(section => {
            const div = document.createElement("div");
            div.classList.add("section", "mb-5");
            div.innerHTML = `
                <div class="row gx-5">
                    <div class="col-12 col-lg-3">
                        <h3 class="case-study-heading mb-3 text-center">${section.heading}</h3>
                    </div>
                    <div class="col-12 col-lg-9 case-study-section-content" style="text-align: justify;">
                        ${section.content}
                    </div>
                </div>
            `;
            sectionsContainer.appendChild(div);
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    populateGeneral();
    populateCaseStudy();
});


