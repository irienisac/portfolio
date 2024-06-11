// script.js

document.getElementById('download-resume').addEventListener('click', function() {
    window.location.href = 'file:///C:/Notes/Web/IrienIsacCV.pdf';  // Update this path to the actual location of your resume
});

// Smooth scrolling for navigation
document.querySelectorAll('#sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
