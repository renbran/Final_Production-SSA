                                                                                                                                                                                                                                                                                                                                                      import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SCHOLARIX - Study Abroad Consultants | Visa, Admission &amp; IELTS</title>
        <meta name="description" content="Expert study abroad guidance for students. Get support for study visas, university admissions, scholarships, and IELTS/PTE preparation. 99% visa success rate. Book free consultation today!" />
        <meta name="keywords" content="study abroad, student visa, university admission, scholarships, IELTS, PTE, career counselling, international education" />
        <meta name="author" content="SCHOLARIX Study Abroad Consultants" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SCHOLARIX - Study Abroad Consultants" />
        <meta property="og:description" content="Expert study abroad guidance with 99% visa success rate. Get support for visas, admissions, scholarships &amp; test prep." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SCHOLARIX - Study Abroad Consultants" />
        <meta name="twitter:description" content="Expert study abroad guidance with 99% visa success rate." />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'none'; object-src 'none'; base-uri 'self';" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" defer></script>
        
        {/* Globe.gl for Interactive Globe */}
        <script src="https://unpkg.com/globe.gl" defer></script>
        
        {/* GSAP for Animations */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" defer></script>
        
        {/* Particles.js for Background Effects */}
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" defer></script>
        
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

        {/* Modern Minimalist Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              {/* Brand Section */}
              <div className="footer-brand">
                <img src="/static/images/scholarix-logo-professional.png" alt="SCHOLARIX" className="footer-logo" />
                <p className="footer-tagline">Your trusted study abroad partner since 2023</p>
              </div>
              
              {/* Quick Links */}
              <div className="footer-links-section">
                <h4>Services</h4>
                <ul className="footer-links-list">
                  <li><a href="/services/visa">Visa Support</a></li>
                  <li><a href="/services/admissions">Admissions</a></li>
                  <li><a href="/services/scholarships">Scholarships</a></li>
                  <li><a href="/services/test-prep">Test Prep</a></li>
                </ul>
              </div>

              <div className="footer-links-section">
                <h4>Destinations</h4>
                <ul className="footer-links-list">
                  <li><a href="/destinations/germany">Germany</a></li>
                  <li><a href="/destinations/canada">Canada</a></li>
                  <li><a href="/destinations/uk">UK</a></li>
                  <li><a href="/destinations/usa">USA</a></li>
                </ul>
              </div>

              <div className="footer-links-section">
                <h4>Connect</h4>
                <div className="footer-contact">
                  <a href="tel:+971525438784" className="contact-link">+971 52 543 8784</a>
                  <a href="mailto:info@scholarixstudy.com" className="contact-link">info@scholarixstudy.com</a>
                </div>
                <div className="social-links">
                  <a href="https://facebook.com/scholarixstudy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com/scholarixstudy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com/company/scholarix" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://youtube.com/@scholarixstudy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              
              {/* Newsletter Subscription */}
              <div className="footer-newsletter">
                <h4>Stay Updated</h4>
                <p>Get study abroad tips &amp; updates</p>
                <form className="newsletter-form" id="newsletterForm">
                  <div className="input-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Enter your email" 
                      required 
                      className="newsletter-input"
                    />
                    <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="copyright">&copy; 2025 SCHOLARIX. All rights reserved.</p>
                <div className="footer-legal">
                  <a href="/privacy">Privacy</a>
                  <a href="/terms">Terms</a>
                  <a href="/contact">Contact</a>
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
        <script src="/static/app.js" defer></script>
        <script src="/static/enhanced-animations.js"></script>
        <script src="/static/study-abroad-3d.js"></script>
        <script src="/static/interactive-globe.js" defer></script>
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

        {/* Interactive Globe JavaScript */}
        <script>
          {`
          // Interactive Globe Implementation
          document.addEventListener('DOMContentLoaded', function() {
            // Study destinations data with coordinates and details
            const studyDestinations = [
              {
                id: 'germany',
                name: 'Germany',
                flag: '🇩🇪',
                lat: 51.1657,
                lng: 10.4515,
                description: 'European leader in engineering and technology',
                tuitionRange: '€5,000-10,000',
                visaSuccess: '95%',
                programs: [
                  { name: 'Computer Science', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Engineering', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Business Management', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Data Science', duration: '2-4 years', level: 'Master/PhD' }
                ],
                highlights: ['No tuition fees at public universities', 'Strong industrial connections', 'Post-study work visa available']
              },
              {
                id: 'canada',
                name: 'Canada',
                flag: '🇨🇦',
                lat: 56.1304,
                lng: -106.3468,
                description: 'World-class education with work opportunities',
                tuitionRange: '€8,000-15,000',
                visaSuccess: '92%',
                programs: [
                  { name: 'Information Technology', duration: '2-4 years', level: 'Bachelor/Master' },
                  { name: 'Healthcare', duration: '4-6 years', level: 'Bachelor/Master' },
                  { name: 'Business Analytics', duration: '1-2 years', level: 'Master' },
                  { name: 'Environmental Science', duration: '3-4 years', level: 'Bachelor/Master' }
                ],
                highlights: ['3-year post-graduation work permit', 'Pathway to permanent residency', 'High quality of life']
              },
              {
                id: 'australia',
                name: 'Australia',
                flag: '🇦🇺',
                lat: -25.2744,
                lng: 133.7751,
                description: 'Innovation hub with excellent quality of life',
                tuitionRange: '€7,000-15,000',
                visaSuccess: '90%',
                programs: [
                  { name: 'Medicine', duration: '5-6 years', level: 'Bachelor/Master' },
                  { name: 'Mining Engineering', duration: '4 years', level: 'Bachelor' },
                  { name: 'Marine Science', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Tourism Management', duration: '3 years', level: 'Bachelor' }
                ],
                highlights: ['48 hours work per fortnight', 'World-renowned universities', 'Diverse cultural environment']
              },
              {
                id: 'netherlands',
                name: 'Netherlands',
                flag: '🇳🇱',
                lat: 52.1326,
                lng: 5.2913,
                description: 'English-taught programs in Europe\'s heart',
                tuitionRange: '€12,000-18,000',
                visaSuccess: '88%',
                programs: [
                  { name: 'International Business', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Sustainable Energy', duration: '2 years', level: 'Master' },
                  { name: 'Art & Design', duration: '4 years', level: 'Bachelor' },
                  { name: 'Psychology', duration: '3 years', level: 'Bachelor' }
                ],
                highlights: ['Over 2,000 English-taught programs', 'Central location in Europe', 'Excellent cycling infrastructure']
              },
              {
                id: 'malta',
                name: 'Malta',
                flag: '🇲🇹',
                lat: 35.9375,
                lng: 14.3754,
                description: 'Affordable EU education in English',
                tuitionRange: '€2,500-4,000',
                visaSuccess: '96%',
                programs: [
                  { name: 'Maritime Studies', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Gaming & Interactive Media', duration: '3 years', level: 'Bachelor' },
                  { name: 'Hospitality Management', duration: '3 years', level: 'Bachelor' },
                  { name: 'Finance', duration: '3-4 years', level: 'Bachelor/Master' }
                ],
                highlights: ['EU membership benefits', 'English-speaking environment', 'Mediterranean lifestyle']
              },
              {
                id: 'singapore',
                name: 'Singapore',
                flag: '🇸🇬',
                lat: 1.3521,
                lng: 103.8198,
                description: 'Asia\'s education and business hub',
                tuitionRange: '€12,000-20,000',
                visaSuccess: '87%',
                programs: [
                  { name: 'Fintech', duration: '1-2 years', level: 'Master' },
                  { name: 'Supply Chain Management', duration: '18 months', level: 'Master' },
                  { name: 'Artificial Intelligence', duration: '2 years', level: 'Master' },
                  { name: 'International Relations', duration: '2 years', level: 'Master' }
                ],
                highlights: ['Gateway to Asia-Pacific', 'Top-ranked universities', 'Multicultural environment']
              },
              {
                id: 'ireland',
                name: 'Ireland',
                flag: '🇮🇪',
                lat: 53.1424,
                lng: -7.6921,
                description: 'Tech hub with vibrant culture',
                tuitionRange: '€9,000-16,000',
                visaSuccess: '93%',
                programs: [
                  { name: 'Software Engineering', duration: '4 years', level: 'Bachelor' },
                  { name: 'Pharmaceutical Science', duration: '4 years', level: 'Bachelor' },
                  { name: 'Creative Writing', duration: '1-2 years', level: 'Master' },
                  { name: 'Renewable Energy', duration: '2 years', level: 'Master' }
                ],
                highlights: ['EU\'s tech capital', '2-year post-study visa', 'English-speaking country']
              },
              {
                id: 'uk',
                name: 'United Kingdom',
                flag: '🇬🇧',
                lat: 55.3781,
                lng: -3.4360,
                description: 'World-renowned education excellence',
                tuitionRange: '€15,000-25,000',
                visaSuccess: '85%',
                programs: [
                  { name: 'Law', duration: '3 years', level: 'Bachelor' },
                  { name: 'Medicine', duration: '5-6 years', level: 'Bachelor' },
                  { name: 'Literature', duration: '3 years', level: 'Bachelor' },
                  { name: 'Economics', duration: '3-4 years', level: 'Bachelor/Master' }
                ],
                highlights: ['Historic universities', 'Graduate route visa', 'Research excellence']
              },
              {
                id: 'usa',
                name: 'United States',
                flag: '🇺🇸',
                lat: 39.8283,
                lng: -98.5795,
                description: 'Leading innovation and research',
                tuitionRange: '€20,000-40,000',
                visaSuccess: '82%',
                programs: [
                  { name: 'MBA', duration: '2 years', level: 'Master' },
                  { name: 'Computer Science', duration: '4 years', level: 'Bachelor' },
                  { name: 'Biotechnology', duration: '4-6 years', level: 'Bachelor/Master' },
                  { name: 'Film Studies', duration: '4 years', level: 'Bachelor' }
                ],
                highlights: ['World\'s top universities', 'OPT work opportunities', 'Diverse academic programs']
              },
              {
                id: 'france',
                name: 'France',
                flag: '🇫🇷',
                lat: 46.2276,
                lng: 2.2137,
                description: 'Excellence in arts and sciences',
                tuitionRange: '€3,000-8,000',
                visaSuccess: '89%',
                programs: [
                  { name: 'Fashion Design', duration: '3-4 years', level: 'Bachelor/Master' },
                  { name: 'Culinary Arts', duration: '2-3 years', level: 'Diploma/Bachelor' },
                  { name: 'International Relations', duration: '2 years', level: 'Master' },
                  { name: 'Aerospace Engineering', duration: '5 years', level: 'Master' }
                ],
                highlights: ['Low tuition fees', 'Rich cultural heritage', 'Central European location']
              }
            ];

            let globe;
            let isAutoRotating = false;

            // Initialize Globe with enhanced error handling
            function initializeGlobe() {
              const globeElement = document.getElementById('interactive-globe');
              if (!globeElement || typeof Globe === 'undefined') {
                setTimeout(initializeGlobe, 500);
                return;
              }

              // Show loading
              globeElement.innerHTML = '<div class="globe-loading">Loading Interactive Globe...</div>';

              try {
                globe = Globe()
                  (globeElement)
                  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
                  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                  .pointsData(studyDestinations)
                  .pointAltitude(0.02)
                  .pointRadius(0.8)
                  .pointColor(() => '#3b82f6')
                  .pointLabel(function(d) {
                    return '<div style="background: rgba(0,0,0,0.8); color: white; padding: 10px; border-radius: 8px; font-size: 14px; max-width: 200px;">' +
                           '<strong>' + d.flag + ' ' + d.name + '</strong><br/>' +
                           '<em>' + d.description + '</em><br/>' +
                           '<small>Click to explore programs</small>' +
                           '</div>';
                  })
                  .onPointClick(openDestinationModal)
                  .pointResolution(6)
                  .atmosphereColor('#3b82f6')
                  .atmosphereAltitude(0.15)
                  .enablePointerInteraction(true);

                // Set initial globe position
                globe.pointOfView({ altitude: 2.5 });

                // Auto-rotate functionality
                setupGlobeControls();

              } catch (error) {
                console.error('Globe initialization error:', error);
                globeElement.innerHTML = '&lt;div class="globe-loading"&gt;Globe temporarily unavailable&lt;/div&gt;';
                if (window.handleError) {
                  window.handleError({
                    message: error.message,
                    filename: 'Globe Initialization',
                    lineno: 0,
                    error: error
                  }, 'Interactive Globe');
                }
              }
            }

            // Setup globe controls
            function setupGlobeControls() {
              const autoRotateBtn = document.getElementById('autoRotateBtn');
              const resetViewBtn = document.getElementById('resetViewBtn');

              if (autoRotateBtn) {
                autoRotateBtn.addEventListener('click', function() {
                  isAutoRotating = !isAutoRotating;
                  if (isAutoRotating) {
                    startAutoRotation();
                    autoRotateBtn.classList.add('active');
                    autoRotateBtn.innerHTML = '<i class="fas fa-pause"></i><span>Stop Rotation</span>';
                  } else {
                    stopAutoRotation();
                    autoRotateBtn.classList.remove('active');
                    autoRotateBtn.innerHTML = '<i class="fas fa-play"></i><span>Auto Rotate</span>';
                  }
                });
              }

              if (resetViewBtn) {
                resetViewBtn.addEventListener('click', function() {
                  if (globe) {
                    globe.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1000);
                  }
                });
              }
            }

            // Auto-rotation functionality
            function startAutoRotation() {
              if (!globe) return;
              globe.controls().autoRotate = true;
              globe.controls().autoRotateSpeed = 0.5;
            }

            function stopAutoRotation() {
              if (!globe) return;
              globe.controls().autoRotate = false;
            }

            // Open destination modal
            function openDestinationModal(destination) {
              const modal = document.getElementById('destinationModal');
              const content = document.getElementById('destinationContent');
              
              if (!modal || !content) return;

              // Generate programs HTML
              const programsHTML = destination.programs.map(program => \`
                <div class="program-card">
                  <h4>\${program.name}</h4>
                  <p>Duration: \${program.duration}</p>
                  <div class="program-meta">
                    <span>Level: \${program.level}</span>
                  </div>
                </div>
              \`).join('');

              // Generate highlights HTML
              const highlightsHTML = destination.highlights.map(highlight => \`
                <li><i class="fas fa-check-circle" style="color: var(--primary-600); margin-right: 8px;"></i>\${highlight}</li>
              \`).join('');

              content.innerHTML = \`
                <div class="destination-header">
                  <div class="destination-flag">\${destination.flag}</div>
                  <div class="destination-title">
                    <h2>\${destination.name}</h2>
                    <p>\${destination.description}</p>
                  </div>
                </div>
                
                <div class="destination-stats-grid">
                  <div class="destination-stat">
                    <div class="destination-stat-value">\${destination.tuitionRange}</div>
                    <div class="destination-stat-label">Annual Tuition</div>
                  </div>
                  <div class="destination-stat">
                    <div class="destination-stat-value">\${destination.visaSuccess}</div>
                    <div class="destination-stat-label">Visa Success Rate</div>
                  </div>
                  <div class="destination-stat">
                    <div class="destination-stat-value">\${destination.programs.length}+</div>
                    <div class="destination-stat-label">Programs Available</div>
                  </div>
                </div>

                <div class="destination-programs">
                  <h3>Popular Study Programs</h3>
                  <div class="programs-grid">
                    \${programsHTML}
                  </div>
                </div>

                <div class="destination-highlights" style="margin-bottom: 2rem;">
                  <h3>Why Choose \${destination.name}?</h3>
                  <ul style="list-style: none; padding: 0;">
                    \${highlightsHTML}
                  </ul>
                </div>

                <div class="destination-cta-section">
                  <button class="btn btn-primary btn-large" onclick="closeDestinationModal(); openConsultationModal();">
                    <i class="fas fa-calendar-alt"></i>
                    Get Guidance for \${destination.name}
                  </button>
                </div>
              \`;

              modal.classList.add('active');
              document.body.style.overflow = 'hidden';
            }

            // Close destination modal
            window.closeDestinationModal = function() {
              const modal = document.getElementById('destinationModal');
              if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
              }
            };

            // Initialize globe when page loads
            initializeGlobe();

            // Handle window resize
            window.addEventListener('resize', function() {
              if (globe) {
                globe.width(globe.width());
                globe.height(globe.height());
              }
            });
          });

          // Progressive Form Functions
          function showStep2() {
            // Validate Step 1 fields
            const fullName = document.querySelector('input[name="fullName"]');
            const email = document.querySelector('input[name="email"]');
            const phone = document.querySelector('input[name="phone"]');
            
            if (!fullName || !email || !phone) {
              return; // Elements not found
            }
            
            const fullNameValue = fullName.value.trim();
            const emailValue = email.value.trim();
            const phoneValue = phone.value.trim();
            
            if (!fullNameValue || !emailValue || !phoneValue) {
              alert('Please fill in all required fields before continuing.');
              return;
            }
            
            // Basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailValue)) {
              alert('Please enter a valid email address.');
              return;
            }
            
            // Show step 2, hide step 1
            const step1 = document.getElementById('step1');
            const step2 = document.getElementById('step2');
            
            if (step1 &amp;&amp; step2) {
              step1.classList.remove('active');
              step1.classList.add('hidden');
              step2.classList.remove('hidden');
              step2.classList.add('active');
              
              // Smooth scroll to top of form
              const form = document.getElementById('leadForm');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              
              // Track step completion
              if (typeof gtag !== 'undefined') {
                gtag('event', 'form_step_completed', {
                  'step_number': 1,
                  'form_name': 'consultation_form'
                });
              }
            }
          }
          
          function showStep1() {
            // Show step 1, hide step 2
            const step1 = document.getElementById('step1');
            const step2 = document.getElementById('step2');
            
            if (step1 &amp;&amp; step2) {
              step2.classList.remove('active');
              step2.classList.add('hidden');
              step1.classList.remove('hidden');
              step1.classList.add('active');
              
              // Smooth scroll to top of form
              const form = document.getElementById('leadForm');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }
          
          // Initialize progressive form event listeners
          document.addEventListener('DOMContentLoaded', function() {
            const continueBtn = document.getElementById('continueToStep2');
            const backBtn = document.getElementById('backToStep1');
            
            if (continueBtn) {
              continueBtn.addEventListener('click', showStep2);
            }
            
            if (backBtn) {
              backBtn.addEventListener('click', showStep1);
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