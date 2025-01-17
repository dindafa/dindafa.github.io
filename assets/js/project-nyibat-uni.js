function populateCaseStudy() {
    const caseStudyData = {
        intro: {
            profileImage: "assets/images/profile.png",
            title: "Nyibat Web Scraping App",
            bannerImage: "assets/images/projects/project-nyibat-uni.png",
            introText: "<strong>Nyibat</strong> (or <em>Mengambil (Dengan Paksa)</em> in traditional Jambi language) is a University Final Project software designed for web scraping multiple Indonesian marketplaces. The name, suggested by a college dormmate, reflects the software's purpose: to 'take' data from marketplace websites for market analysis and price referencing. The scraped data is stored locally and can be used for research purposes, such as analyzing market trends or setting competitive prices for marketplace listings. Due to Indonesian laws prohibiting unauthorized web scraping, the software is strictly for research and is not publicly hosted or shared. Nyibat features a user-friendly interface that works on both desktop and mobile devices, along with import/export functionality for saving results. It also includes scrape settings that warn users to input variables carefully, as improper use may lead to IP bans from the target websites."
        },
        sections: [
            {
                heading: "Background",
                content: `
                    <p>
            Nyibat was developed to address the growing need for accurate and up-to-date market data in Indonesia. Many small businesses and researchers struggle to access reliable pricing and product information from multiple marketplaces, as manual data collection is time-consuming and inefficient. Additionally, the lack of a centralized database for marketplace listings makes it difficult to conduct market analysis or set competitive prices. However, web scraping is a legally sensitive practice in Indonesia, so the software was designed strictly for research purposes. The goal was to create a tool that could efficiently gather data while minimizing the risk of detection or IP bans, ensuring users could conduct their research responsibly. Based on many factors mentioned, it can be concluded as follows:
        </p>
        <ul>
            <li><strong>Data Accessibility</strong>: Manual data collection from multiple marketplaces is slow and impractical.</li>
            <li><strong>Legal Restrictions</strong>: Web scraping is illegal in Indonesia without proper authorization.</li>
            <li><strong>Risk of IP Bans</strong>: Aggressive scraping can lead to IP bans, disrupting data collection.</li>
            <li><strong>Need for Local Storage</strong>: Researchers require a way to store and analyze scraped data securely.</li>
        </ul>`
            },
            {
                heading: "Solutions & Results",
                content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_vFlHJVv9JE?si=Kw4jDisZfhzyowoq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p>
            Nyibat provides a practical solution for researchers and small businesses by offering a secure and efficient web scraping tool. The software allows users to scrape data from multiple Indonesian marketplaces, store it locally, and analyze it for market trends or price referencing. To minimize legal and technical risks, Nyibat includes scrape settings that warn users to input variables carefully, reducing the likelihood of IP bans. The software also features import/export functionality, enabling users to save and share their results securely. While Nyibat is not publicly hosted or shared due to legal restrictions, it serves as a valuable research tool for authorized users.
        </p>
        <h3>Key Features:</h3>
        <ul>
            <li><strong>Web Scraping</strong>: Collects data from multiple Indonesian marketplaces for market analysis.</li>
            <li><strong>Local Storage</strong>: Stores scraped data securely on the user’s device.</li>
            <li><strong>Import/Export Functionality</strong>: Allows users to save and share results in various formats.</li>
            <li><strong>Scrape Settings</strong>: Warns users to input variables wisely to avoid IP bans.</li>
            <li><strong>Cross-Platform Compatibility</strong>: Works on both desktop and mobile interfaces.</li>
        </ul>
        <h3>Results:</h3>
        <ul>
            <li>Researchers and small businesses can access accurate and up-to-date market data for analysis.</li>
            <li>The software minimizes the risk of IP bans through careful scrape settings.</li>
            <li>Local storage ensures data security and compliance with legal restrictions.</li>
            <li>The import/export feature enables easy sharing and analysis of scraped data.</li>
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


