// Responsive Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create the nav toggle button with hamburger icon
    const header = document.querySelector('header .nav-container');
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Create the three bars for the hamburger icon
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('span');
        bar.className = 'bar';
        navToggle.appendChild(bar);
    }
    
    // Insert the toggle button into the header
    if (header) {
        header.appendChild(navToggle);
    }
    
    // Get the navigation menu
    const navMenu = document.querySelector('nav ul');
    
    // Toggle menu visibility when the button is clicked
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('show');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('show')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('show');
        }
    });
    
    // Close menu when window is resized beyond mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('show');
        }
    });
});