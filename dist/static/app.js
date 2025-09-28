// SCHOLARIX Study Abroad - JavaScript

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const consultationModal = document.getElementById('consultationModal');
const leadForm = document.getElementById('leadForm');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFormHandling();
    initializeScrollEffects();
    initializeAnimations();
    initializeAnalytics();
    initializeChatbot();
});

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scrolled');
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Form Handling
function initializeFormHandling() {
    if (leadForm) {
        leadForm.addEventListener('submit', handleFormSubmit);
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(leadForm);
    const submitButton = leadForm.querySelector('button[type="submit"]');
    const buttonText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<span class="spinner"></span> Sending...';
    submitButton.disabled = true;
    
    try {
        const response = await fetch('/api/lead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData))
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification(result.message, 'success');
            leadForm.reset();
            
            // Track conversion
            trackEvent('lead_generated', {
                service: formData.get('service'),
                country: formData.get('country')
            });
            
            // Show success modal or redirect
            setTimeout(() => {
                openConsultationModal();
            }, 2000);
            
        } else {
            showNotification(result.message, 'error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Something went wrong. Please try again or contact us directly.', 'error');
    } finally {
        // Reset button
        submitButton.innerHTML = buttonText;
        submitButton.disabled = false;
    }
}

// Modal Functions
function openConsultationModal() {
    if (consultationModal) {
        consultationModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Track modal open
        trackEvent('consultation_modal_opened');
    }
}

function closeConsultationModal() {
    if (consultationModal) {
        consultationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === consultationModal) {
        closeConsultationModal();
    }
});

// Destination Modal
function openDestinationModal(country) {
    const destinations = {
        usa: {
            title: 'Study in United States',
            description: 'Discover world-class education opportunities in the USA with over 500 partner universities.',
            highlights: [
                'Top-ranked universities worldwide',
                'Diverse range of programs',
                'Post-study work opportunities',
                'Scholarships up to 100%',
                'STEM OPT extensions'
            ],
            universities: ['Harvard', 'MIT', 'Stanford', 'Yale', 'Princeton'],
            requirements: 'IELTS 6.5+, TOEFL 90+, SAT/GRE (varies by program)'
        },
        uk: {
            title: 'Study in United Kingdom',
            description: 'Experience prestigious British education with shorter degree programs and rich cultural heritage.',
            highlights: [
                'Shorter degree duration',
                'World-renowned universities',
                'Post-study work visa (2 years)',
                'Research opportunities',
                'Historic and modern campuses'
            ],
            universities: ['Oxford', 'Cambridge', 'Imperial College', 'UCL', 'King\'s College'],
            requirements: 'IELTS 6.0+, UKVI approved tests required'
        },
        canada: {
            title: 'Study in Canada',
            description: 'Enjoy high-quality education in a multicultural environment with excellent immigration pathways.',
            highlights: [
                'High quality of life',
                'Affordable tuition fees',
                'Post-graduation work permit',
                'Immigration-friendly policies',
                'Safe and welcoming environment'
            ],
            universities: ['University of Toronto', 'UBC', 'McGill', 'Waterloo', 'McMaster'],
            requirements: 'IELTS 6.0+, TOEFL 80+, may require additional tests'
        },
        australia: {
            title: 'Study in Australia',
            description: 'Study in a country known for innovation, research excellence, and beautiful landscapes.',
            highlights: [
                'World-class education system',
                'Research and innovation focus',
                'Post-study work rights',
                'Diverse multicultural society',
                'Beautiful climate and lifestyle'
            ],
            universities: ['Melbourne', 'Sydney', 'ANU', 'UNSW', 'Monash'],
            requirements: 'IELTS 6.5+, TOEFL 90+, specific program requirements vary'
        },
        germany: {
            title: 'Study in Germany',
            description: 'Access world-class education with low tuition fees and strong industry connections.',
            highlights: [
                'Low or no tuition fees',
                'Strong engineering programs',
                'Industry partnerships',
                'Post-study job opportunities',
                'Central European location'
            ],
            universities: ['TU Munich', 'Heidelberg', 'Humboldt', 'RWTH Aachen', 'Frankfurt'],
            requirements: 'IELTS 6.0+, German language proficiency for some programs'
        },
        newzealand: {
            title: 'Study in New Zealand',
            description: 'Experience innovative education in stunning natural surroundings with excellent student support.',
            highlights: [
                'Innovative education approach',
                'Small class sizes',
                'Beautiful natural environment',
                'Safe and friendly culture',
                'Post-study work opportunities'
            ],
            universities: ['Auckland', 'Otago', 'Canterbury', 'Victoria Wellington', 'Massey'],
            requirements: 'IELTS 6.0+, TOEFL 80+, specific program requirements'
        }
    };
    
    const destination = destinations[country];
    if (!destination) return;
    
    // Create modal content
    const modalHTML = `
        <div class="modal" id="destinationModal">
            <div class="modal-content" style="max-width: 800px;">
                <span class="close" onclick="closeDestinationModal()">&times;</span>
                <h2>${destination.title}</h2>
                <p>${destination.description}</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
                    <div>
                        <h3>Why Choose ${destination.title.split(' ')[2]}?</h3>
                        <ul style="list-style: none; padding: 0;">
                            ${destination.highlights.map(highlight => 
                                `<li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--accent-color); margin-right: 0.5rem;"></i>${highlight}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div>
                        <h3>Top Universities</h3>
                        <ul style="list-style: none; padding: 0;">
                            ${destination.universities.map(uni => 
                                `<li style="margin-bottom: 0.5rem;"><i class="fas fa-university" style="color: var(--primary-color); margin-right: 0.5rem;"></i>${uni}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
                
                <div style="background: var(--neutral-light); padding: 1.5rem; border-radius: 0.5rem; margin: 2rem 0;">
                    <h4>Entry Requirements</h4>
                    <p style="margin: 0;">${destination.requirements}</p>
                </div>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn btn-primary btn-large" onclick="closeDestinationModal(); openConsultationModal();">
                        <i class="fas fa-calendar-alt"></i>
                        Get Personalized Guidance
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.getElementById('destinationModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Track destination interest
    trackEvent('destination_interest', { country: country });
}

function closeDestinationModal() {
    const modal = document.getElementById('destinationModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles if not already added
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 3000;
                max-width: 400px;
                padding: 1rem;
                border-radius: 0.5rem;
                box-shadow: var(--shadow-lg);
                animation: slideInRight 0.3s ease;
            }
            .notification-success {
                background-color: #10b981;
                color: white;
            }
            .notification-error {
                background-color: #ef4444;
                color: white;
            }
            .notification-info {
                background-color: var(--secondary-color);
                color: white;
            }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: currentColor;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Scroll Effects and Animations
function initializeScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .testimonial-card, .destination-card, .section-header').forEach(el => {
        observer.observe(el);
    });
    
    // Counter animation for stats
    animateCounters();
}

function initializeAnimations() {
    // Add CSS for animations
    if (!document.getElementById('animation-styles')) {
        const styles = document.createElement('style');
        styles.id = 'animation-styles';
        styles.textContent = `
            .service-card,
            .testimonial-card,
            .destination-card,
            .section-header {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            .header.scrolled {
                background-color: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                box-shadow: var(--shadow-base);
            }
            
            .header.hidden {
                transform: translateY(-100%);
            }
            
            .nav-menu.active {
                display: flex !important;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: white;
                box-shadow: var(--shadow-lg);
                padding: 1rem;
                gap: 1rem;
            }
            
            .nav-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        `;
        document.head.appendChild(styles);
    }
}

function animateCounters() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number
            let displayValue = Math.floor(current);
            if (stat.textContent.includes('+')) {
                displayValue = displayValue.toLocaleString() + '+';
            } else if (stat.textContent.includes('%')) {
                displayValue = displayValue + '%';
            } else {
                displayValue = displayValue.toLocaleString() + '+';
            }
            
            stat.textContent = displayValue;
        }, 20);
    });
}

// Analytics and Tracking
function initializeAnalytics() {
    // Track page view
    trackEvent('page_view', {
        page: window.location.pathname,
        title: document.title
    });
    
    // Track scroll depth
    let scrollDepth = 0;
    window.addEventListener('scroll', debounce(() => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent > scrollDepth && scrollPercent % 25 === 0) {
            scrollDepth = scrollPercent;
            trackEvent('scroll_depth', { depth: scrollDepth });
        }
    }, 250));
    
    // Track outbound links
    document.querySelectorAll('a[href^="http"], a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('outbound_link_click', {
                url: this.href,
                text: this.textContent.trim()
            });
        });
    });
}

function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Console log for development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Analytics Event:', eventName, parameters);
    }
    
    // You can add other analytics platforms here
    // Facebook Pixel, LinkedIn Insight Tag, etc.
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Chatbot Integration
function openChatbot() {
    // Check if Jotform chatbot is available
    if (typeof window.jfEmbed !== 'undefined') {
        // Trigger Jotform chatbot
        window.jfEmbed.openChat();
    } else {
        // Fallback - scroll to contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Track chatbot interaction
    trackEvent('chatbot_opened', { source: 'button_click' });
}

// Initialize chatbot when page loads
function initializeChatbot() {
    // Add click handler to floating chatbot button
    const chatbotTrigger = document.querySelector('.chatbot-trigger');
    if (chatbotTrigger) {
        chatbotTrigger.addEventListener('click', openChatbot);
    }
    
    // Track chatbot availability
    setTimeout(() => {
        if (typeof window.jfEmbed !== 'undefined') {
            trackEvent('chatbot_loaded', { status: 'success' });
        } else {
            trackEvent('chatbot_loaded', { status: 'fallback' });
        }
    }, 2000);
}

// Email Integration (for newsletter signup, etc.)
function subscribeNewsletter(email) {
    // This would integrate with your email marketing platform
    // MailChimp, ConvertKit, etc.
    
    trackEvent('newsletter_signup', { email_domain: email.split('@')[1] });
    
    // Placeholder implementation
    showNotification('Thank you for subscribing! You\'ll receive study abroad tips and updates.', 'success');
}

// Lead Scoring (for CRM integration)
function calculateLeadScore(formData) {
    let score = 0;
    
    // Country interest scoring
    const highValueCountries = ['usa', 'uk', 'canada', 'australia'];
    if (highValueCountries.includes(formData.country)) score += 20;
    
    // Service interest scoring
    const highValueServices = ['complete', 'admission', 'visa'];
    if (highValueServices.includes(formData.service)) score += 15;
    
    // Engagement scoring (if they filled optional fields)
    if (formData.message && formData.message.length > 50) score += 10;
    
    return score;
}

// Search Functionality (if needed for blog/resources)
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length > 2) {
                // Implement search logic here
                // This could search through blog posts, FAQs, etc.
                performSearch(query);
            } else {
                if (searchResults) searchResults.innerHTML = '';
            }
        }, 300));
    }
}

function performSearch(query) {
    // Implement search functionality
    // This would typically query your content API or search index
    
    trackEvent('search', { query: query });
    
    // Placeholder implementation
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.innerHTML = `
            <div class="search-result">
                <h4>Search Results for "${query}"</h4>
                <p>Search functionality will be implemented with your content management system.</p>
            </div>
        `;
    }
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modals
    if (e.key === 'Escape') {
        closeConsultationModal();
        closeDestinationModal();
    }
    
    // Ctrl/Cmd + K for search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.focus();
    }
});

// Performance Monitoring
window.addEventListener('load', function() {
    // Track page load performance
    if ('performance' in window) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        trackEvent('page_load_time', { load_time: loadTime });
    }
});

// Error Handling
window.addEventListener('error', function(e) {
    // Log JavaScript errors (in production, send to error monitoring service)
    console.error('JavaScript Error:', e.error);
    
    // Track errors for monitoring
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        line: e.lineno
    });
});

// Export functions for global use
window.openConsultationModal = openConsultationModal;
window.closeConsultationModal = closeConsultationModal;
window.openDestinationModal = openDestinationModal;
window.closeDestinationModal = closeDestinationModal;
window.openChatbot = openChatbot;
window.trackEvent = trackEvent;