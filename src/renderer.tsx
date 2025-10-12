                                                                                                                                                                                                                                                                                                                                                      import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SCHOLARIX - Study Abroad Consultants | Visa, Admission & IELTS</title>
        <meta name="description" content="Expert study abroad guidance for students. Get support for study visas, university admissions, scholarships, and IELTS/PTE preparation. 99% visa success rate. Book free consultation today!" />
        <meta name="keywords" content="study abroad, student visa, university admission, scholarships, IELTS, PTE, career counselling, international education" />
        <meta name="author" content="SCHOLARIX Study Abroad Consultants" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SCHOLARIX - Study Abroad Consultants" />
        <meta property="og:description" content="Expert study abroad guidance with 99% visa success rate. Get support for visas, admissions, scholarships & test prep." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SCHOLARIX - Study Abroad Consultants" />
        <meta name="twitter:description" content="Expert study abroad guidance with 99% visa success rate." />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="apple-touch-icon" href="/static/images/scholarix-logo-icon-hd.png" />
        
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        <link href="/static/enhanced-styles.css" rel="stylesheet" />
        <link href="/static/enhanced-loader-3d.css" rel="stylesheet" />
        <link href="/static/course-finder.css" rel="stylesheet" />
        
        {/* Three.js for 3D Globe and Study Elements */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        
        {/* GSAP for Animations */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
        
        {/* Particles.js for Background Effects */}
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "SCHOLARIX Study Abroad Consultants",
            "description": "Expert study abroad guidance for students seeking international education opportunities",
            "url": "https://scholarixstudy.com",
            "telephone": "+971525438784",
            "email": "info@scholarixstudy.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UAE"
            },
            "serviceArea": "Worldwide",
            "offers": {
              "@type": "Service",
              "name": "Study Abroad Consulting",
              "description": "Comprehensive study abroad services including visa support, university admissions, scholarships, and test preparation"
            }
          })}
        </script>
      </head>
      <body>
        {/* 3D Floating Study Elements Background */}
        <div id="floating-3d-elements"></div>
        
        {/* Minimalist Header */}
        <header className="header">
          <nav className="navbar">
            <div className="nav-container">
              <div className="nav-brand">
                <img src="/static/images/scholarix-logo-professional.png" alt="SCHOLARIX Study Abroad" className="logo" />
              </div>
              
              <div className="nav-menu" id="navMenu">
                <a href="/" className="nav-link">Home</a>
                <div className="nav-dropdown">
                  <a href="#" className="nav-link dropdown-toggle">Services <i className="fas fa-chevron-down"></i></a>
                  <div className="dropdown-content">
                    <a href="/services/visa"><i className="fas fa-passport"></i>Visa Support</a>
                    <a href="/services/admissions"><i className="fas fa-graduation-cap"></i>University Admissions</a>
                    <a href="/services/scholarships"><i className="fas fa-trophy"></i>Scholarships</a>
                    <a href="/services/test-prep"><i className="fas fa-book"></i>Test Preparation</a>
                    <a href="/services/counselling"><i className="fas fa-user-tie"></i>Career Counselling</a>
                    <a href="/services/pre-departure"><i className="fas fa-plane"></i>Pre-Departure</a>
                  </div>
                </div>
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact</a>
                <div className="mobile-cta">
                  <button className="nav-cta-btn" onclick="openConsultationModal()">
                    Free Consultation
                  </button>
                </div>
              </div>
              
              <div className="nav-actions">
                <button className="nav-cta-btn" onclick="openConsultationModal()">
                  Free Consultation
                </button>
              </div>
              
              <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </header>

        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <div className="footer-brand">
                  <img src="/static/images/scholarix-logo-professional.png" alt="SCHOLARIX Study Abroad" className="footer-logo" />
                  <p>Your trusted partner for international education since 2023. Established in Dubai, we help students achieve their study abroad dreams with expert guidance and personalized support. Specializing in European study destinations with high visa success from UAE.</p>
                  <div className="social-links">
                    <a href="https://facebook.com/scholarixstudy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://instagram.com/scholarixstudy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com/company/scholarix" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://youtube.com/@scholarixstudy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                    <a href="#" className="social-link" onclick="openChatbot()" aria-label="Live Chat"><i className="fas fa-comments"></i></a>
                  </div>
                </div>
              </div>
              
              <div className="footer-section">
                <h3>Services</h3>
                <ul>
                  <li><a href="/services/visa">Study Visa Support</a></li>
                  <li><a href="/services/admissions">University Admissions</a></li>
                  <li><a href="/services/scholarships">Scholarships</a></li>
                  <li><a href="/services/test-prep">IELTS/PTE Preparation</a></li>
                  <li><a href="/services/counselling">Career Counselling</a></li>
                  <li><a href="/services/pre-departure">Pre/Post Departure Support</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Study Destinations</h3>
                <ul>
                  <li><a href="/destinations/germany">Germany</a></li>
                  <li><a href="/destinations/france">France</a></li>
                  <li><a href="/destinations/ireland">Ireland</a></li>
                  <li><a href="/destinations/uk">United Kingdom</a></li>
                  <li><a href="/destinations/canada">Canada</a></li>
                  <li><a href="/destinations/usa">United States</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Contact Info</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>+971 52 543 8784</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>info@scholarixstudy.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Dubai, United Arab Emirates</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-clock"></i>
                    <span>Mon-Sat: 9AM-7PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p>&copy; 2025 SCHOLARIX Study Abroad Consultants. All rights reserved.</p>
                <div className="footer-links">
                  <a href="/privacy">Privacy Policy</a>
                  <a href="/terms">Terms of Service</a>
                  <a href="/sitemap">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Chatbot */}
        <div className="floating-chatbot">
          <div className="chatbot-trigger">
            <i className="fas fa-comments"></i>
            <span className="chatbot-text">Chat with us</span>
          </div>
        </div>

        {/* Scripts */}
        <script src="/static/app.js"></script>
        <script src="/static/enhanced-animations.js"></script>
        <script src="/static/study-abroad-3d.js"></script>
        <script src="/static/course-finder.js"></script>
        <script src="/static/destinations-accordion.js"></script>
        
        {/* Jotform Chatbot */}
        <script src="https://cdn.jotfor.ms/agent/embedjs/01998a5c603976e5940cc26a09b91e250511/embed.js"></script>
        
        {/* Mobile Navigation JavaScript */}
        <script>
          {`
          // Mobile Navigation Toggle
          document.addEventListener('DOMContentLoaded', function() {
            const navToggle = document.getElementById('navToggle');
            const navMenu = document.getElementById('navMenu');
            const header = document.querySelector('.header');
            
            // Mobile menu toggle
            if (navToggle && navMenu) {
              navToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
              });
              
              // Close menu when clicking nav links
              navMenu.addEventListener('click', function(e) {
                if (e.target.matches('.nav-link') && !e.target.matches('.dropdown-toggle')) {
                  closeMenu();
                }
              });
              
              // Close menu when clicking outside
              document.addEventListener('click', function(e) {
                if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
                  closeMenu();
                }
              });
              
              // Close menu function
              function closeMenu() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
              }
              
              // Handle window resize
              window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                  closeMenu();
                }
              });
            }
            
            // Header scroll effect
            if (header) {
              let lastScroll = 0;
              window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 10) {
                  header.classList.add('scrolled');
                } else {
                  header.classList.remove('scrolled');
                }
                
                lastScroll = currentScroll;
              });
            }
          });
          `}
        </script>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </script>
      </body>
    </html>
  )
})