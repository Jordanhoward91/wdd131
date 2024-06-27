document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearElem = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElem.textContent = currentYear;

    // Set last modified date in footer (example)
    const lastModifiedElem = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElem.textContent = lastModifiedDate;

    // Example static values for Provo, Utah
    const provoTemperature = 5; // Adjusted to 5°C for testing windchill
    const provoConditions = "Sunny"; // example condition
    const provoWindSpeed = 8; // in km/h

    // Function to calculate windchill factor
    function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
            return windChill;
        } else {
            return 'N/A';
        }
    }

    // Display windchill factor for Provo, Utah
    const provoWindchillElem = document.getElementById('provoWindchill');
    const provoWindchillFactor = calculateWindChill(provoTemperature, provoWindSpeed);
    provoWindchillElem.textContent = provoWindchillFactor;

    // Display weather information for Provo, Utah
    document.getElementById('temperature').textContent = provoTemperature;
    document.getElementById('conditions').textContent = provoConditions;
    document.getElementById('windSpeed').textContent = provoWindSpeed;

    // Example data for Provo, Utah
    const area = "114.4 km²";
    const population = "116,618";
    const capital = "Salt Lake City";
    const languages = "English";
    const currency = "US Dollar (USD)";
    const timeZone = "Mountain Time Zone (MT)";
    const callingCode = "+1";
    const internetTLD = ".us";

    // Set data values in the DOM
    document.getElementById('area').textContent = area;
    document.getElementById('population').textContent = population;
    document.getElementById('capital').textContent = capital;
    document.getElementById('languages').textContent = languages;
    document.getElementById('currency').textContent = currency;
    document.getElementById('timeZone').textContent = timeZone;
    document.getElementById('callingCode').textContent = callingCode;
    document.getElementById('internetTLD').textContent = internetTLD;
});
