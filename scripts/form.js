// Product Array (provided data source)
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
];

// Function to populate Product Name options
function populateProductOptions() {
    const select = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.textContent = product.name;
        option.value = product.id;
        select.appendChild(option);
    });
}

// Call the function to populate options on page load
document.addEventListener('DOMContentLoaded', () => {
    populateProductOptions();
});
