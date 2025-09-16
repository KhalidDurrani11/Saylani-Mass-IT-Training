// Saylani Roti Bank - Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavbar();
    initHeroBackground();
    initScrollAnimations();
    initCounterAnimations();
    initSmoothScrolling();
    initContactForm();
    initGallery();
    initMobileMenu();
});

// Navbar functionality
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Hero background image rotation
function initHeroBackground() {
    const heroImages = document.querySelectorAll('.hero-bg-img');
    let currentImage = 0;
    
    if (heroImages.length > 0) {
        // Show first image
        heroImages[0].classList.add('active');
        
        // Rotate images every 5 seconds
        setInterval(() => {
            heroImages[currentImage].classList.remove('active');
            currentImage = (currentImage + 1) % heroImages.length;
            heroImages[currentImage].classList.add('active');
        }, 5000);
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = [
        '.section-header',
        '.about-text',
        '.about-image',
        '.stat-card',
        '.donation-card',
        '.gallery-item',
        '.contact-info',
        '.contact-form'
    ];

    animatedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.classList.add('fade-in');
            element.style.animationDelay = `${index * 0.1}s`;
            observer.observe(element);
        });
    });

    // Special animations for about section
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    
    if (aboutText && aboutImage) {
        aboutText.classList.add('slide-in-left');
        aboutImage.classList.add('slide-in-right');
        observer.observe(aboutText);
        observer.observe(aboutImage);
    }
}

// Counter animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Also animate hero stats immediately when page loads
    const heroStats = document.querySelectorAll('.hero-stats .stat-number');
    heroStats.forEach(stat => {
        setTimeout(() => {
            animateCounter(stat);
        }, 1000);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    
    // Check if target is valid
    if (isNaN(target) || target <= 0) {
        console.warn('Invalid target value for counter:', element.getAttribute('data-target'));
        return;
    }
    
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number with commas and add + for large numbers
        let displayValue = Math.floor(current).toLocaleString();
        if (target >= 1000) {
            displayValue += '+';
        }
        element.textContent = displayValue;
    }, 16);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero scroll down button
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', function(e) {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            this.reset();
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#0d6efd'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Gallery functionality
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('h4').textContent;
            const description = this.querySelector('p').textContent;
            
            openLightbox(img.src, title, description);
        });
    });
}

// Lightbox functionality
function openLightbox(imageSrc, title, description) {
    // Remove existing lightbox
    const existingLightbox = document.querySelector('.lightbox');
    if (existingLightbox) {
        existingLightbox.remove();
    }
    
    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="${imageSrc}" alt="${title}">
            <div class="lightbox-info">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        </div>
    `;
    
    // Add styles
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    lightboxContent.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background: white;
        border-radius: 15px;
        overflow: hidden;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;
    
    const lightboxImg = lightbox.querySelector('img');
    lightboxImg.style.cssText = `
        width: 100%;
        height: auto;
        max-height: 70vh;
        object-fit: contain;
    `;
    
    const lightboxInfo = lightbox.querySelector('.lightbox-info');
    lightboxInfo.style.cssText = `
        padding: 1.5rem;
        text-align: center;
    `;
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 20px;
        background: rgba(0,0,0,0.5);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1;
    `;
    
    // Add to page
    document.body.appendChild(lightbox);
    
    // Animate in
    setTimeout(() => {
        lightbox.style.opacity = '1';
        lightboxContent.style.transform = 'scale(1)';
    }, 100);
    
    // Close functionality
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.style.opacity = '0';
        lightboxContent.style.transform = 'scale(0.8)';
        setTimeout(() => lightbox.remove(), 300);
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Close menu when window is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Initialize parallax on desktop only
if (window.innerWidth > 768) {
    initParallax();
}

// Add loading animation to page
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading animation to elements
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Donation button functionality
document.addEventListener('click', function(e) {
    if (e.target.matches('.donation-card .btn-primary')) {
        e.preventDefault();
        showNotification('Thank you for your interest in donating! Please contact us for payment details.', 'info');
    }
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.donation-card, .stat-card, .gallery-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add typing effect to hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const timer = setInterval(function() {
            heroTitle.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(timer);
            }
        }, 100);
    }
}

// Initialize typing effect after a delay
setTimeout(initTypingEffect, 500);

// Add scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #0d6efd, #28a745);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
initScrollProgress();

// Add smooth reveal animations
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.section-header, .about-text, .about-image, .stat-card, .donation-card, .gallery-item');
    
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(element);
    });
}

// Initialize reveal animations
initRevealAnimations();
