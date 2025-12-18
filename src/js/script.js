/**
 * Interactivity for Design Option B
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    const nav = document.getElementById('main-nav');
    const menuToggle = document.getElementById('menu-toggle');

    // Scroll Effect for Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Simple mobile menu toggle logic
    menuToggle.addEventListener('click', () => {
        // Since we are keeping it simple for the split files, 
        // this would typically trigger a full screen overlay in this design style.
        console.log("Mobile Menu Clicked");
        // Implementation would go here to show/hide a full screen nav
    });

    // Smooth reveal effect for program images
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply basic fade-in to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.transition = 'all 0.8s ease-out';
    });
});