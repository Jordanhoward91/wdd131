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

const temples = [
    // Temple objects go here
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah",
        dedicated: "2016-03-20",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple01.jpg"
    },
    {
        templeName: "Sydney Australia Temple",
        location: "New South Wales, Australia",
        dedicated: "1984-09-20",
        area: 554423,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/400x250/sydney-australia-temple-sunset-1116152-wallpaper.jpg"
    },
    {
        templeName: "Mount Timpanogos Temple",
        location: "Pleasant Grove, Utah",
        dedicated: "1996-10-13",
        area: 1007007,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mount-timpanogos-utah/400x250/mount-timpanogos-temple-lds-994445-wallpaper.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const templeContainer = document.querySelector('.gallery');
    
    const displayTemples = (templesToDisplay) => {
        templeContainer.innerHTML = '';
        templesToDisplay.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.className = 'temple-card';
            
            const templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;

            const templeLocation = document.createElement('p');
            templeLocation.textContent = `Location: ${temple.location}`;

            const templeDedicated = document.createElement('p');
            templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

            const templeArea = document.createElement('p');
            templeArea.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

            const templeImage = document.createElement('img');
            templeImage.src = temple.imageUrl;
            templeImage.alt = temple.templeName;
            templeImage.loading = 'lazy';

            templeCard.appendChild(templeName);
            templeCard.appendChild(templeLocation);
            templeCard.appendChild(templeDedicated);
            templeCard.appendChild(templeArea);
            templeCard.appendChild(templeImage);

            templeContainer.appendChild(templeCard);
        });
    };

    displayTemples(temples);

    const filterTemples = (filter) => {
        let filteredTemples = temples;
        if (filter === 'old') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        } else if (filter === 'new') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        } else if (filter === 'large') {
            filteredTemples = temples.filter(temple => temple.area > 90000);
        } else if (filter === 'small') {
            filteredTemples = temples.filter(temple => temple.area < 10000);
        }
        displayTemples(filteredTemples);
    };

    document.getElementById('home').addEventListener('click', () => displayTemples(temples));
    document.getElementById('old').addEventListener('click', () => filterTemples('old'));
    document.getElementById('new').addEventListener('click', () => filterTemples('new'));
    document.getElementById('large').addEventListener('click', () => filterTemples('large'));
    document.getElementById('small').addEventListener('click', () => filterTemples('small'));
});
