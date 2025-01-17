document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('cname').value;
    const email = document.getElementById('cemail').value;
    const subject = document.getElementById('csubject').value;
    const message = document.getElementById('cmessage').value;

    // Construct the mailto URL
    const encodedSubject = encodeURIComponent(subject);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoUrl = `mailto:dindafa@pm.me?subject=${encodedSubject}&body=${body}`;

    // Open the default email client
    window.location.href = mailtoUrl;
});

function populateContact() {
    const contactData = {
        profile: {
            image: "assets/images/profile.png",
            name: "Contact Me",
            intro: "Thank you for visiting! I’d love to hear from you. Whether you have a question, a project idea, or just want to say hello, feel free to reach out using the contact form below. I’ll do my best to get back to you as soon as possible. Looking forward to connecting!"
        }
    };

    // Populate profile holder
    if (document.querySelector(".profile-pic")) {
        document.querySelector(".profile-pic").src = contactData.profile.image;
        document.querySelector(".intro-name").textContent = contactData.profile.name;
        document.querySelector(".contact-intro p").innerHTML = contactData.profile.intro;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    populateGeneral();
    populateContact();
});