document.addEventListener("DOMContentLoaded", function() {
    // Set current year and last modified date in footer
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement && lastModifiedElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;

        const lastModified = document.lastModified;
        lastModifiedElement.textContent = lastModified;
    }

    // Function to handle hamburger menu based on viewport width
    function handleHamburgerMenu() {
        const header = document.querySelector('header');
        const nav = header.querySelector('nav');
        const hamburger = document.createElement('button');
        hamburger.textContent = '☰'; // Hamburger icon or text
        hamburger.classList.add('hamburger');

        if (window.innerWidth <= 768) { // Adjust breakpoint as needed
            header.appendChild(hamburger);

            // Toggle navigation menu on hamburger click
            hamburger.addEventListener('click', () => {
                nav.querySelector('ul').classList.toggle('show');
            });

            // Close navigation menu when clicking outside of it
            document.addEventListener('click', (event) => {
                if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
                    nav.querySelector('ul').classList.remove('show');
                }
            });
        } else {
            if (header.contains(hamburger)) {
                header.removeChild(hamburger);
            }
        }
    }

    // Call handleHamburgerMenu initially and on window resize
    handleHamburgerMenu();
    window.addEventListener('resize', handleHamburgerMenu);
});
