
// Example: Display a welcome message in the console
console.log('Welcome to My Awesome Website!');

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.text').classList.add('fly-animation');
    }, 1000); // Adjust the delay (in milliseconds) as needed
});
// Add this JavaScript code

// Add this JavaScript code
const ownerImage = document.getElementById('ownerImage');

ownerImage.addEventListener('click', function() {
    // Toggle the 'large' class on click
    ownerImage.classList.toggle('large');
});