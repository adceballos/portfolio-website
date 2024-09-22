const menuButton = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Check for saved user preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save the theme preference
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.removeItem('theme');
    }
});

function adjustIframeSize() {
    const iframe = document.getElementById('pdf-iframe');
    if (window.innerWidth < 768) {
        iframe.style.width = '100%';
        iframe.style.height = '600px';
    }
}
// Initial call
adjustIframeSize();

// Adjust on resize
window.addEventListener('resize', adjustIframeSize);