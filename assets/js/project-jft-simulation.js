function populateCaseStudy() {
    const caseStudyData = {
        intro: {
            profileImage: "assets/images/profile.png",
            title: "JFT Basic Simulation Software",
            bannerImage: "assets/images/projects/project-jft-simulation.png",
            introText: "The JFT-Basic Simulation software, developed for Mega Cahaya Gemilang, is a comprehensive tool designed to help users prepare for the Japanese Proficiency Test (JFT-Basic). It covers key test components such as Kanji recognition, reading comprehension, sentence structure, and listening tests. The software features two main interfaces: an <strong>administration side</strong> for authorized personnel to input and monitor test materials, and a <strong>public side</strong> where users can take the test. The test interface is designed to mimic the official examination, providing a realistic practice environment. The software runs locally on multiple computers connected through a network, with an easy-to-install executable file for seamless setup."
        },
        sections: [
            {
                heading: "Background",
                content: `
                    <p>
            The JFT-Basic Simulation software was developed to address two major challenges faced by students preparing for the Japanese Proficiency Test. First, many students experience anxiety and lose confidence during the actual test, often forgetting the material they’ve studied. Second, the official test requires a fee, making it costly for students to practice repeatedly. To help students overcome these challenges, Mega Cahaya Gemilang created this software to provide a realistic, stress-free practice environment. By simulating the official test format, students can build confidence, improve their skills, and reduce test anxiety before taking the actual exam. Based on many factors mentioned, it can be concluded as follows:
        </p>
        <ul>
            <li><strong>Test Anxiety</strong>: Students often feel overwhelmed during the official test, leading to poor performance.</li>
            <li><strong>Cost Barriers</strong>: The official test fee makes it difficult for students to practice multiple times.</li>
            <li><strong>Lack of Realistic Practice</strong>: Students need a tool that closely mimics the official test format to prepare effectively.</li>
        </ul>`
            },
            {
                heading: "Solutions & Results",
                content: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/IZGvyJq21q4?si=HjIVif4mOvXp0Ix4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p>
            The JFT-Basic Simulation software provides a practical solution to these challenges by offering a realistic and accessible practice platform. The software includes a <strong>test simulation</strong> that mirrors the official JFT-Basic exam, allowing students to familiarize themselves with the test format and timing. Additionally, the <strong>administration side</strong> enables educators to create, update, and monitor test materials, ensuring the content remains relevant and up-to-date.
        </p>
        <h3>Key Features:</h3>
        <ul>
            <li><strong>Realistic Test Simulation</strong>: The test interface replicates the official JFT-Basic exam, helping students adapt to the test environment.</li>
            <li><strong>Comprehensive Test Components</strong>: Includes Kanji recognition, reading comprehension, sentence structure, and listening tests.</li>
            <li><strong>Easy Installation</strong>: The software runs locally on networked computers, with an executable file for quick installation.</li>
            <li><strong>Administration Tools</strong>: Allows authorized personnel to input, update, and monitor test materials.</li>
        </ul>
        <h3>Results:</h3>
        <ul>
            <li>Students reported increased confidence and reduced anxiety during the actual test.</li>
            <li>Educators observed improved test scores due to consistent practice.</li>
            <li>The software provided a cost-effective alternative to repeated official test attempts.</li>
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


