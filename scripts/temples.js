document.addEventListener("DOMContentLoaded", function() {
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement && lastModifiedElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    
        const lastModified = document.lastModified;
        lastModifiedElement.textContent = lastModified;
    }

    // Hamburger menu functionality
    const header = document.querySelector('header');
    const nav = header.querySelector('nav');
    const hamburger = document.createElement('button');
    hamburger.textContent = '☰';
    hamburger.classList.add('hamburger');
    header.appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        nav.querySelector('ul').classList.toggle('show');
    });
});
