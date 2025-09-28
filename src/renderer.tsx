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
        {/* Header */}
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
                    <a href="/services/visa">Study Visa Support</a>
                    <a href="/services/admissions">University Admissions</a>
                    <a href="/services/scholarships">Scholarships</a>
                    <a href="/services/test-prep">IELTS/PTE Preparation</a>
                    <a href="/services/counselling">Career Counselling</a>
                    <a href="/services/pre-departure">Pre-Departure Support</a>
                  </div>
                </div>
                <a href="/about" className="nav-link">About</a>
                <a href="/blog" className="nav-link">Blog</a>
                <a href="/contact" className="nav-link">Contact</a>
              </div>
              <div className="nav-actions">
                <button className="btn btn-outline btn-small" onclick="openChatbot()">
                  <i className="fas fa-comments"></i>
                  Live Chat
                </button>
                <button className="btn btn-primary btn-small" onclick="openConsultationModal()">
                  Free Consultation
                </button>
              </div>
              <div className="nav-toggle" id="navToggle">
                <span></span>
                <span></span>
                <span></span>
              </div>
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
                  <p>Your trusted partner for international education. Helping students achieve their study abroad dreams with expert guidance and personalized support.</p>
                  <div className="social-links">
                    <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
                    <a href="#" className="social-link" onclick="openChatbot()"><i className="fas fa-comments"></i></a>
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
                  <li><a href="/services/pre-departure">Pre-Departure Support</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h3>Study Destinations</h3>
                <ul>
                  <li><a href="/destinations/usa">United States</a></li>
                  <li><a href="/destinations/uk">United Kingdom</a></li>
                  <li><a href="/destinations/canada">Canada</a></li>
                  <li><a href="/destinations/australia">Australia</a></li>
                  <li><a href="/destinations/germany">Germany</a></li>
                  <li><a href="/destinations/newzealand">New Zealand</a></li>
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
                <p>&copy; 2024 SCHOLARIX Study Abroad Consultants. All rights reserved.</p>
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
        
        {/* Jotform Chatbot */}
        <script src="https://cdn.jotfor.ms/agent/embedjs/01998a5c603976e5940cc26a09b91e250511/embed.js"></script>
        
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