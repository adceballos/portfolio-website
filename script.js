const menuButton = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});