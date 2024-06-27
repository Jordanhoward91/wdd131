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
    const provoTemperature = 25; // in Celsius
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
});
