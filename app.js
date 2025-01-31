// Wait for all HTML elements to load before running any JavaScript
document.addEventListener('DOMContentLoaded', () => {

    // MOBILE MENU SETUP
    // Find the hamburger button and navigation menu in the HTML
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // When hamburger button is clicked, show/hide the mobile menu
    // The '?' means "only add listener if element exists" (prevents errors)
    mobileMenuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Add click handlers to all nav links to close mobile menu when clicked
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener("click", () => {
            link.classList.remove("active");
        })
   })

    // PAGE NAVIGATION SETUP
    // This function handles showing/hiding different sections of the page
    const navigationHandler = () => {
        // Get the current URL's hash (example: in "website.com#about", "#about" is the hash)
        // If no hash exists, default to '#home'
        const hash = window.location.hash || '#home';
        
        // Find all sections on the page
        const sections = document.querySelectorAll('.section');
        
        // Hide all sections first
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Find and show only the section that matches the current hash
        const activeSection = document.querySelector(hash);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    };

    // Run navigation handler when user clicks navigation links
    window.addEventListener('hashchange', navigationHandler);
    // Also run it when page first loads
    navigationHandler();

    // COOKIE CONSENT POPUP SETUP
    // Get all needed elements from HTML
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    // Check if user has made a cookie choice before
    // If not, show the cookie popup
    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'flex';
    }

    // When user clicks Accept
    acceptBtn.addEventListener('click', () => {
        // Save their choice
        localStorage.setItem('cookieConsent', 'accepted');
        // Hide the popup
        cookieConsent.style.display = 'none';
    });

    // When user clicks Decline
    declineBtn.addEventListener('click', () => {
        // Save their choice
        localStorage.setItem('cookieConsent', 'declined');
        // Hide the popup
        cookieConsent.style.display = 'none';
    });

    // CONTACT FORM SETUP
    const contactForm = document.querySelector('.contact-form');
    // When form is submitted
    contactForm?.addEventListener('submit', (e) => {
        // Prevent the default form submission
        e.preventDefault();
        // Currently just shows an alert - you can add real form submission here
        alert('Form submitted! This is a demo.');
    });

    // ACCESSIBILITY FEATURE
    // Allow users to close mobile menu with Escape key
    const handleEscKey = (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    };

    document.addEventListener('keydown', handleEscKey);
}); 