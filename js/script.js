const themeToggle = document.getElementById('theme-toggle');

// Check for saved user preference, otherwise default to light
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';
    
    if (currentTheme === 'light') {
        newTheme = 'dark';
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ==========================================================================
// Live Clock & Calendar Engine
// ==========================================================================
function updateDateTime() {
    const dateTimeElement = document.getElementById('live-datetime');
    
    // Only execute if the element exists on the current page (index.html)
    if (!dateTimeElement) return;

    const now = new Date();

    // Format Options
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    };

    // Render localized string format
    dateTimeElement.textContent = now.toLocaleString('en-US', options);
}

// Run immediately on page load
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    // Refresh the clock tick every 1000 milliseconds (1 second)
    setInterval(updateDateTime, 1000);
});
