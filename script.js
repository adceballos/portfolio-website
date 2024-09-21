const menuButton = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
})

