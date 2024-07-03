// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = lastModified.toLocaleString();
});
