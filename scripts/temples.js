// Update the footer with the current year and last modified date
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
});

// Hamburger menu functionality
const nav = document.querySelector('nav ul');
const hamburger = document.createElement('button');
hamburger.textContent = '☰';
hamburger.classList.add('hamburger');
document.querySelector('header').appendChild(hamburger);

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Style for the hamburger button and show class
const style = document.createElement('style');
style.textContent = `
    .hamburger {
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 2em;
    }

    @media (max-width: 767px) {
        .hamburger {
            display: block;
        }

        nav ul {
            display: none;
        }

        nav ul.show {
            display: block;
        }
    }
`;
document.head.appendChild(style);
