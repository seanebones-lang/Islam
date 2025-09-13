// Islamic Learning Companion - Interactive Features

// Global functions
window.joinCommunity = function() {
    window.location.href = 'community-board.html';
};

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(26, 79, 58, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(26, 79, 58, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });

    // Feature cards animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Button interactions
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline, .nav-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Islamic greeting functionality
    const islamicGreetings = [
        "As-salaam alaikum (Peace be upon you)",
        "Barakallahu feeki (May Allah bless you)",
        "Jazakallahu khair (May Allah reward you with good)",
        "Alhamdulillahi rabbil alameen (Praise be to Allah, Lord of all worlds)"
    ];

    // Display random Islamic greeting
    function showIslamicGreeting() {
        const greeting = islamicGreetings[Math.floor(Math.random() * islamicGreetings.length)];
        
        // Create greeting notification
        const notification = document.createElement('div');
        notification.className = 'islamic-greeting';
        notification.textContent = greeting;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #d4af37, #e6c757);
            color: #1a4f3a;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.5s ease;
            max-width: 300px;
            font-size: 0.9rem;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 4000);
    }

    // Show greeting after page load
    setTimeout(showIslamicGreeting, 2000);

    // Prayer time functionality (simplified for demo)
    function updatePrayerTimes() {
        const now = new Date();
        const prayerTimes = {
            Fajr: '05:30',
            Dhuhr: '12:30',
            Asr: '15:45',
            Maghrib: '18:20',
            Isha: '19:50'
        };

        // This would normally connect to a real prayer time API
        console.log('Current prayer times:', prayerTimes);
    }

    // Initialize prayer times
    updatePrayerTimes();

    // Mobile menu toggle (if needed for mobile version)
    const createMobileMenu = () => {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggle.style.cssText = `
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        `;

        // Add mobile styles
        const mobileStyles = document.createElement('style');
        mobileStyles.textContent = `
            @media (max-width: 768px) {
                .mobile-menu-toggle {
                    display: block !important;
                }
                .nav-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(26, 79, 58, 0.98);
                    flex-direction: column;
                    padding: 2rem;
                    transform: translateY(-100%);
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s ease;
                }
                .nav-menu.active {
                    transform: translateY(0);
                    opacity: 1;
                    pointer-events: all;
                }
            }
        `;
        document.head.appendChild(mobileStyles);

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelector('.nav-container').appendChild(menuToggle);
    };

    createMobileMenu();

    // Add Islamic pattern background animation
    const heroSection = document.querySelector('.hero');
    const createFloatingElements = () => {
        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.style.cssText = `
                position: absolute;
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                background: rgba(212, 175, 55, 0.1);
                border-radius: 50%;
                animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                pointer-events: none;
            `;
            heroSection.appendChild(element);
        }
    };

    // Add floating animation keyframes
    const floatingStyles = document.createElement('style');
    floatingStyles.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.3;
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
                opacity: 0.6;
            }
        }
    `;
    document.head.appendChild(floatingStyles);

    createFloatingElements();

    // Add CSS for ripple effect
    const rippleStyles = document.createElement('style');
    rippleStyles.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            pointer-events: none;
            animation: ripple-animation 0.6s linear;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        button {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(rippleStyles);
});

// Utility functions for Islamic features
const IslamicUtils = {
    // Convert date to Islamic calendar (simplified)
    toIslamicDate: function(date = new Date()) {
        // This is a simplified conversion - real implementation would use proper Islamic calendar libraries
        const islamicYear = date.getFullYear() - 579;
        return `${islamicYear} AH`;
    },

    // Get Qibla direction (simplified - would need geolocation and calculation)
    getQiblaDirection: function() {
        return "Qibla direction: Northeast (45°)";
    },

    // Islamic phrases
    phrases: {
        bismillah: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم",
        alhamdulillah: "الْحَمْدُ لِلَّهِ",
        subhanallah: "سُبْحَانَ اللَّه",
        allahAkbar: "اللَّهُ أَكْبَر"
    }
};

// Export for potential use in other scripts
window.IslamicUtils = IslamicUtils;
