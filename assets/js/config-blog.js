//structure:
//Variables - Populate - Calling Function

function populateBlog() {
    
    const projectData = {
        profile: {
            image: "assets/images/profile.png",
            name: "My Blog",
            intro: "Whoops! looks like the blog is still cooking.<br>Please visit another time when it's ready."
        }
    };
    

     // Populate profile holder
     if (document.querySelector(".profile-pic")) {
        document.querySelector(".profile-pic").src = projectData.profile.image;
        document.querySelector(".intro-name").textContent = projectData.profile.name;
        document.querySelector(".profile-intro p").innerHTML = projectData.profile.intro;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    populateGeneral();
    populateBlog();
});
