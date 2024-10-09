// main.js

// Function to load external HTML into a specified element
function loadHTML(elementId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // If you have any scripts inside your header or footer, you might need to execute them here
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

// Load Header and Footer
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header-placeholder', 'header.html');
    loadHTML('footer-placeholder', 'footer.html');
});


