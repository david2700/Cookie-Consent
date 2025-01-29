// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    // Navigation handling
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Single page navigation
    const navigationHandler = () => {
        const hash = window.location.hash || '#home';
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            section.classList.remove('active');
        });

        const activeSection = document.querySelector(hash);
        if (activeSection) {
            activeSection.classList.add('active');
        }
    };

    window.addEventListener('hashchange', navigationHandler);
    navigationHandler(); // Initial load

    // Cookie consent handling
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    // Check if user has already made a choice
    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'flex';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.style.display = 'none';
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        cookieConsent.style.display = 'none';
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted! This is a demo.');
    });

    // Accessibility improvements
    const handleEscKey = (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    };

    document.addEventListener('keydown', handleEscKey);
}); 