function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// Slow load detection: Set a timeout for slow loading
const loadTimeout = 10000; // 10 seconds threshold
const timeoutRedirect = 'fallback.html'; // Path to your fallback page

// Timer to redirect if the page load takes longer than the threshold
const loadTimer = setTimeout(() => {
    window.location.href = timeoutRedirect; // Redirect to fallback page
}, loadTimeout);

// Listen for the load event to clear the timeout if the page loads within time
window.addEventListener('load', () => {
    clearTimeout(loadTimer); // Clear the timer if the page loads quickly
});



