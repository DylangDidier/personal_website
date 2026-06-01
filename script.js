// Locate theme toggler components
const themeToggle = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

themeToggle.addEventListener('click', () => {
    let theme = 'light';
    if (document.documentElement.getAttribute('data-theme') !== 'dark') {
        theme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});


const revealProjects = () => {
    const cards = document.querySelectorAll('.project-detailed-card');
    
    const observerOptions = {
        root: null, // default to the browser viewport frame
        threshold: 0.10, // trigger when 10% of the card enters the frame
        rootMargin: "0px 0px -40px 0px" // slight boundary offset for a smoother pop-up
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); // Stop tracking after animating once
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
};

// Run the setup function once the document layout finishes loading
document.addEventListener('DOMContentLoaded', revealProjects);