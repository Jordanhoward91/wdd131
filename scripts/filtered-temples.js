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
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah",
    dedication: "2016, March, 20",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/800x500/Provo-City-Center-Temple01.jpg"
  },
  {
    templeName: "Sydney Australia Temple",
    location: "New South Wales, Australia",
    dedication: "1984, September, 20",
    area: 554423,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/1280x800/sydney-australia-temple-sunset-1116152-wallpaper.jpg"
  },
  {
    templeName: "Mount Timpanogos Temple",
    location: "Pleasant Grove, Utah",
    dedication: "1996, October, 13",
    area: 1007007,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mount-timpanogos-utah/1280x800/mount-timpanogos-temple-lds-994445-wallpaper.jpg"
  }
  // Add more temple objects here...
];


document.addEventListener('DOMContentLoaded', () => {
  const templeContainer = document.getElementById('temple-container');

  temples.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.className = 'temple-card';

    const templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.templeName;
    templeImage.loading = 'lazy';

    const templeName = document.createElement('h3');
    templeName.textContent = temple.templeName;

    const templeLocation = document.createElement('p');
    templeLocation.textContent = `Location: ${temple.location}`;

    const templeDedicated = document.createElement('p');
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const templeArea = document.createElement('p');
    templeArea.textContent = `Area: ${temple.area} sq ft`;

    templeCard.appendChild(templeImage);
    templeCard.appendChild(templeName);
    templeCard.appendChild(templeLocation);
    templeCard.appendChild(templeDedicated);
    templeCard.appendChild(templeArea);

    templeContainer.appendChild(templeCard);
  });
});

function filterTemples(filter) {
  templeContainer.innerHTML = ''; // Clear current temples
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

  filteredTemples.forEach(temple => {
    // ... (code to create and append temple cards, as above)
  });
}

document.getElementById('home').addEventListener('click', () => filterTemples('all'));
document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));


