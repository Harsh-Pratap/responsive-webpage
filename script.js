// Function to toggle the collapsible left menu
function toggleMenu() {
    const menu = document.getElementById('left-menu');
    menu.classList.toggle('collapsed');
}

// Function to adjust page width based on screen size
function adjustPageWidth() {
    const screenWidth = window.innerWidth;
    const container = document.querySelector('.container');

    if (screenWidth >= 992 && screenWidth <= 1600) {
        container.style.transform = 'scale(0.9)';
        container.style.transformOrigin = 'top center';
    } else if (screenWidth >= 700 && screenWidth < 767) {
        container.style.transform = 'scale(0.8)';
        container.style.transformOrigin = 'top center';
    } else if (screenWidth >= 600 && screenWidth < 700) {
        container.style.transform = 'scale(0.75)';
        container.style.transformOrigin = 'top center';
    } else if (screenWidth <= 600) {
        container.style.transform = 'scale(0.5)';
        container.style.transformOrigin = 'top center';
    } else {
        container.style.transform = 'scale(1)';
        container.style.transformOrigin = 'top center';
    }
}

// Add event listeners for screen resizing and page load
window.addEventListener('resize', adjustPageWidth);
window.addEventListener('load', adjustPageWidth);
