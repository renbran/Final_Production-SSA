                                                                                                                                                                                                                                                                                                                                                      import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Preconnect to critical external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/static/style.css" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style" />
        
        <title>SCHOLARIX - Study Abroad Consultants | Visa, Admission &amp; IELTS</title>
        <meta name="description" content="Expert study abroad guidance for students. Get support for study visas, university admissions, scholarships, and IELTS/PTE preparation. 99% visa success rate. Book free consultation today!" />
        <meta name="keywords" content="study abroad, student visa, university admission, scholarships, IELTS, PTE, career counselling, international education, Germany study visa, Canada student visa, UK admission, Ireland universities" />
        <meta name="author" content="SCHOLARIX Study Abroad Consultants" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="SCHOLARIX - Study Abroad Consultants | 99% Visa Success Rate" />
        <meta property="og:description" content="Expert study abroad guidance with 99% visa success rate. Get support for visas, admissions, scholarships &amp; test prep. Serving students from Dubai, UAE since 2023." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scholarixstudy.com" />
        <meta property="og:site_name" content="SCHOLARIX Study Abroad" />
        <meta property="og:image" content="https://scholarixstudy.com/static/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SCHOLARIX Study Abroad Consultants - Your trusted partner for international education" />
        <meta property="og:locale" content="en_US" />
        <meta property="business:contact_data:street_address" content="Dubai, UAE" />
        <meta property="business:contact_data:locality" content="Dubai" />
        <meta property="business:contact_data:region" content="UAE" />
        <meta property="business:contact_data:postal_code" content="00000" />
        <meta property="business:contact_data:country_name" content="United Arab Emirates" />
        
        {/* Enhanced Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@scholarixstudy" />
        <meta name="twitter:creator" content="@scholarixstudy" />
        <meta name="twitter:title" content="SCHOLARIX - Study Abroad Consultants | 99% Visa Success" />
        <meta name="twitter:description" content="Expert study abroad guidance with 99% visa success rate. Specialized in European destinations from UAE." />
        <meta name="twitter:image" content="https://scholarixstudy.com/static/images/og-image.jpg" />
        <meta name="twitter:image:alt" content="SCHOLARIX Study Abroad Consultants" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <link rel="canonical" href="https://scholarixstudy.com" />
        <link rel="alternate" hrefLang="en" href="https://scholarixstudy.com" />
        <link rel="alternate" hrefLang="x-default" href="https://scholarixstudy.com" />
        
        {/* Enhanced Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://unpkg.com https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jotfor.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https: blob:; connect-src 'self' https: wss:; frame-src 'self' https://www.google.com https://jotform.com; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io; upgrade-insecure-requests;" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(self), payment=()" />
        <meta httpEquiv="Cross-Origin-Embedder-Policy" content="unsafe-none" />
        <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin-allow-popups" />
        <meta httpEquiv="Cross-Origin-Resource-Policy" content="cross-origin" />
        
        {/* Enhanced Favicon and App Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/images/scholarix-logo-icon-hd.png" />
        <link rel="mask-icon" href="/static/images/scholarix-logo-icon-hd.png" color="#1e3a8a" />
        <link rel="shortcut icon" href="/static/images/scholarix-logo-icon-hd.png" />
        <meta name="msapplication-TileImage" content="/static/images/scholarix-logo-icon-hd.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/static/manifest.json" />
        <meta name="application-name" content="SCHOLARIX Study Abroad" />
        <meta name="apple-mobile-web-app-title" content="SCHOLARIX" />
        
        {/* Critical CSS inline - Above-the-fold performance optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --primary-color: #1e3a8a;
              --secondary-color: #3b82f6;
              --accent-color: #f59e0b;
              --neutral-light: #f1f5f9;
              --neutral-medium: #64748b;
              --neutral-dark: #1f2937;
            }
            
            * {
              box-sizing: border-box;
            }
            
            html {
              scroll-behavior: smooth;
              overflow-x: hidden;
              width: 100%;
              height: 100%;
            }
            
            body {
              margin: 0;
              padding: 0;
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
              line-height: 1.6;
              color: #1f2937;
              font-size: 16px;
              width: 100%;
              min-height: 100vh;
              overflow-x: hidden;
              position: relative;
              -webkit-text-size-adjust: 100%;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              -webkit-overflow-scrolling: touch;
              zoom: 1;
            }
            
            /* Prevent zoom on iOS */
            input, select, textarea, button {
              font-size: 16px !important;
              -webkit-appearance: none;
              border-radius: 0;
            }
            
            .header {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 1000;
              background: rgba(255, 255, 255, 0.95);
              backdrop-filter: blur(10px);
              padding: 0.5rem 0;
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .header-container {
              padding: 0 1rem;
              max-width: 1200px;
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            
            .logo img {
              height: 40px;
              width: auto;
              max-width: 150px;
            }
            
            @media (min-width: 768px) {
              .logo img { height: 50px; }
              .header { padding: 0.75rem 0; }
              .header-container { padding: 0 2rem; }
            }
            
            @media (min-width: 1024px) {
              .logo img { height: 60px; }
            }
            
            .hero {
              min-height: 100vh;
              display: flex;
              align-items: center;
              background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
              color: white;
              padding: 6rem 1rem 3rem;
              text-align: center;
            }
            
            .hero-content h1 {
              font-size: 2rem;
              line-height: 1.2;
              margin-bottom: 1rem;
              font-weight: 700;
            }
            
            @media (min-width: 768px) {
              .hero {
                padding: 6rem 2rem 3rem;
                text-align: left;
              }
              .hero-content h1 { font-size: 3rem; }
            }
            
            @media (min-width: 1024px) {
              .hero { padding: 8rem 2rem 4rem; }
              .hero-content h1 { font-size: 3.5rem; }
            }
            
            .btn-primary {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              padding: 0.875rem 2rem;
              background-color: var(--accent-color);
              color: white;
              text-decoration: none;
              border-radius: 0.5rem;
              font-weight: 600;
              min-height: 48px;
              min-width: 48px;
              transition: all 0.2s ease;
              border: none;
              cursor: pointer;
              font-size: 1rem;
            }
            
            .btn-primary:hover {
              background-color: #e08e0b;
              transform: translateY(-1px);
              box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
            }
            
            .btn-primary:focus {
              outline: 3px solid rgba(245, 158, 11, 0.5);
              outline-offset: 2px;
            }
            
            /* Enhanced Interactive Form Styles */
            .form-group {
              position: relative;
              margin-bottom: 1.5rem;
            }
            
            .form-input, .form-select, .form-textarea {
              width: 100%;
              padding: 1rem 1rem 1rem 3rem;
              border: 2px solid #e5e7eb;
              border-radius: 0.75rem;
              font-size: 16px;
              min-height: 56px;
              font-family: inherit;
              background: #fafbfc;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              position: relative;
              z-index: 2;
            }
            
            .form-input:focus, .form-select:focus, .form-textarea:focus {
              outline: none;
              border-color: var(--secondary-color);
              background: #ffffff;
              box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 8px 25px rgba(59, 130, 246, 0.15);
              transform: translateY(-2px);
            }
            
            .form-input:valid, .form-select:valid, .form-textarea:valid {
              border-color: #10b981;
              background: #f0fdf4;
            }
            
            .form-input:invalid:not(:placeholder-shown) {
              border-color: #ef4444;
              background: #fef2f2;
            }
            
            .form-label {
              position: absolute;
              left: 3rem;
              top: 50%;
              transform: translateY(-50%);
              font-size: 16px;
              color: #6b7280;
              transition: all 0.3s ease;
              pointer-events: none;
              z-index: 1;
            }
            
            .form-input:focus + .form-label,
            .form-input:not(:placeholder-shown) + .form-label {
              top: -0.5rem;
              left: 1rem;
              font-size: 12px;
              color: var(--secondary-color);
              background: white;
              padding: 0 0.5rem;
            }
            
            .form-icon {
              position: absolute;
              left: 1rem;
              top: 50%;
              transform: translateY(-50%);
              color: #9ca3af;
              font-size: 1.125rem;
              z-index: 3;
              transition: color 0.3s ease;
            }
            
            .form-group:focus-within .form-icon {
              color: var(--secondary-color);
            }
            
            .form-validation {
              position: absolute;
              right: 1rem;
              top: 50%;
              transform: translateY(-50%);
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            
            .form-input:valid + .form-label + .form-validation .success-icon {
              opacity: 1;
              color: #10b981;
            }
            
            .form-input:invalid:not(:placeholder-shown) + .form-label + .form-validation .error-icon {
              opacity: 1;
              color: #ef4444;
            }
            
            .form-help-text {
              font-size: 0.875rem;
              color: #6b7280;
              margin-top: 0.5rem;
              padding-left: 3rem;
              transition: color 0.3s ease;
            }
            
            .form-group:focus-within .form-help-text {
              color: var(--secondary-color);
            }
            
            /* Touch targets (WCAG 2.2 AA) */
            a, button, input, select, textarea {
              min-height: 44px;
              min-width: 44px;
            }
            
            /* Focus indicators */
            a:focus, button:focus, input:focus, select:focus, textarea:focus {
              outline: 3px solid var(--secondary-color);
              outline-offset: 2px;
            }
            
            /* Enhanced Form Animations */
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-5px); }
              75% { transform: translateX(5px); }
            }
            
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.7; }
            }
            
            .slide-in-right {
              animation: slideInRight 0.3s ease-out;
            }
            
            .slide-in-left {
              animation: slideInLeft 0.3s ease-out;
            }
            
            .form-step {
              transition: all 0.3s ease;
            }
            
            .field-error {
              color: #ef4444;
              font-size: 0.875rem;
              margin-top: 0.25rem;
              padding-left: 3rem;
              animation: slideInRight 0.3s ease-out;
            }
            
            .form-input.error, .form-select.error, .form-textarea.error {
              border-color: #ef4444 !important;
              background: #fef2f2 !important;
              box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
            }
            
            /* Enhanced Progress Indicators */
            .step-indicator {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 2rem;
            }
            
            .step {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: #e5e7eb;
              color: #6b7280;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 600;
              transition: all 0.3s ease;
              position: relative;
            }
            
            .step.active {
              background: var(--secondary-color);
              color: white;
              transform: scale(1.1);
              box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
            }
            
            .step.completed {
              background: #10b981;
              color: white;
            }
            
            .step.completed::after {
              content: '✓';
              position: absolute;
            }
            
            .progress-line {
              height: 2px;
              background: #e5e7eb;
              flex: 1;
              margin: 0 0.5rem;
              position: relative;
              overflow: hidden;
            }
            
            .progress-fill {
              height: 100%;
              background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
              transition: width 0.5s ease;
              position: relative;
            }
            
            .progress-fill::after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
              animation: shimmer 2s infinite;
            }
            
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            
            /* Responsive Enhancements */
            @media (max-width: 768px) {
              .form-input, .form-select, .form-textarea {
                padding: 0.875rem 0.875rem 0.875rem 2.5rem;
                font-size: 16px;
              }
              
              .form-label {
                left: 2.5rem;
                font-size: 15px;
              }
              
              .form-icon {
                left: 0.75rem;
                font-size: 1rem;
              }
              
              .form-help-text {
                padding-left: 2.5rem;
                font-size: 0.8rem;
              }
              
              .step {
                width: 28px;
                height: 28px;
                font-size: 0.875rem;
              }
            }
            
            /* Globe Container Responsive */
            .interactive-globe {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              min-height: 400px;
              max-height: 600px;
            }
            
            @media (max-width: 768px) {
              .interactive-globe {
                min-height: 300px;
                max-height: 400px;
              }
            }
            
            /* Prevent zoom on mobile forms */
            @media screen and (max-width: 768px) {
              input[type="text"],
              input[type="email"],
              input[type="tel"],
              input[type="password"],
              select,
              textarea {
                font-size: 16px !important;
                transform: scale(1);
              }
            }
            
            /* Full viewport lock */
            .viewport-lock {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              overflow: hidden;
            }
            
            /* Reduced motion support */
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
          `
        }} />
        
        {/* Fonts - Load asynchronously after critical CSS */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Icons - Load asynchronously */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        <link href="/static/enhanced-styles.css" rel="stylesheet" />
        <link href="/static/enhanced-forms.css" rel="stylesheet" />
        <link href="/static/interactive-planner.css" rel="stylesheet" />
        <link href="/static/enhanced-loader-3d.css" rel="stylesheet" />
        <link href="/static/course-finder.css" rel="stylesheet" />
        <link href="/static/mobile-contact-form-production.css" rel="stylesheet" />
        <link href="/static/enhanced-pwa.css" rel="stylesheet" />
        <link href="/static/enhanced-globe-contrast.css" rel="stylesheet" />
        <link href="/static/working-globe-styles.css" rel="stylesheet" />
        
        {/* Three.js for 3D Globe */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" defer></script>
        
        {/* GSAP for Animations */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" defer></script>
        
        {/* Particles.js for Background Effects */}
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" defer></script>
        
        {/* Typed.js for Typewriter Effect */}
        <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
        
        {/* Simple Text Animation */}
        <script>
          {`
          // Ensure text is always visible
          document.addEventListener('DOMContentLoaded', function() {
            console.log('🎬 Ensuring text visibility...');
            
            const element = document.getElementById('typewriter-text');
            if (element) {
              // Force visibility styles
              element.style.display = 'inline-block';
              element.style.visibility = 'visible';
              element.style.opacity = '1';
              element.style.color = '#1e3a8a';
              element.style.fontWeight = '700';
              element.style.background = 'none';
              
              // Ensure text content is always there
              if (!element.innerHTML || element.innerHTML.trim() === '') {
                element.innerHTML = 'Your Dream <span class="text-accent">Study Abroad</span> Journey Starts Here';
              }
              
              console.log('✅ Text visibility ensured:', element.innerHTML);
              
              // Add simple fade-in animation
              element.style.animation = 'fadeInUp 1s ease-out';
              
              // Optional: Add subtle text glow animation
              setTimeout(function() {
                element.classList.add('hero-text-glow');
              }, 500);
            } else {
              console.error('❌ Typewriter element not found');
            }
          });
          `}
        </script>
        
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
                <a href="/" className="logo-link">
                  <img src="/static/images/scholarix-logo-professional.png" alt="SCHOLARIX Study Abroad" className="logo" />
                </a>
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
                <a href="https://scholarixstudy.com" target="_blank" rel="noopener noreferrer" className="nav-employee-btn">
                  Employee Login
                </a>
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
                <a href="/" className="footer-logo-link">
                  <img src="/static/images/scholarix-logo-professional.png" alt="SCHOLARIX" className="footer-logo" />
                </a>
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
        <script src="/static/enhanced-forms.js" defer></script>
        <script src="/static/interactive-planner.js" defer></script>
        <script src="/static/mobile-contact-form-production.js" defer></script>
        <script src="/static/enhanced-animations.js"></script>
        <script src="/static/study-abroad-3d.js"></script>
        <script src="/static/working-globe-3d.js" defer></script>
        <script src="/static/course-finder.js"></script>
        <script src="/static/destinations-accordion.js"></script>
        
        {/* Jotform Chatbot */}
        <script src="https://cdn.jotfor.ms/agent/embedjs/01998a5c603976e5940cc26a09b91e250511/embed.js"></script>
        
        {/* Viewport and Zoom Control */}
        <script>
          {`
          // Prevent zoom and maintain responsive behavior
          (function() {
            // Disable zoom on iOS Safari
            document.addEventListener('touchstart', function(event) {
              if (event.touches.length > 1) {
                event.preventDefault();
              }
            }, { passive: false });
            
            let lastTouchEnd = 0;
            document.addEventListener('touchend', function(event) {
              const now = (new Date()).getTime();
              if (now - lastTouchEnd <= 300) {
                event.preventDefault();
              }
              lastTouchEnd = now;
            }, false);
            
            // Prevent zoom with keyboard
            document.addEventListener('keydown', function(event) {
              if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '0')) {
                event.preventDefault();
              }
            });
            
            // Force responsive behavior
            function enforceResponsiveView() {
              const viewport = document.querySelector('meta[name="viewport"]');
              if (viewport) {
                viewport.setAttribute('content', 
                  'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
                );
              }
              
              // Reset any zoom
              if (window.outerWidth && window.innerWidth) {
                const zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100) / 100;
                if (zoomLevel !== 1) {
                  document.body.style.zoom = '1';
                  document.documentElement.style.zoom = '1';
                }
              }
            }
            
            // Run on load and resize
            window.addEventListener('load', enforceResponsiveView);
            window.addEventListener('resize', enforceResponsiveView);
            window.addEventListener('orientationchange', function() {
              setTimeout(enforceResponsiveView, 100);
            });
            
            enforceResponsiveView();
          })();
          
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

        {/* Interactive Globe JavaScript - All handled by working-globe-3d.js */}
      </body>
    </html>
  )
})
