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
        
        {/* Three.js for 3D Globe and Study Elements */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" defer></script>
        
        {/* Globe.gl for Interactive Globe */}
        <script src="https://unpkg.com/globe.gl" defer></script>
        
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
        <script src="/static/interactive-globe.js" defer></script>
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

            // Additional Globe Control Functions
            window.resetGlobe = function() {
              if (globe) {
                globe.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1000);
              }
            };

            window.toggleGlobeRotation = function() {
              isAutoRotating = !isAutoRotating;
              const rotationIcon = document.getElementById('rotation-icon');
              
              if (isAutoRotating) {
                startAutoRotation();
                if (rotationIcon) {
                  rotationIcon.className = 'fas fa-pause';
                }
              } else {
                stopAutoRotation();
                if (rotationIcon) {
                  rotationIcon.className = 'fas fa-play';
                }
              }
            };

            window.zoomGlobe = function(factor) {
              if (!globe) return;
              
              const currentPov = globe.pointOfView();
              const newAltitude = Math.max(1.2, Math.min(4, currentPov.altitude * factor));
              
              globe.pointOfView({
                lat: currentPov.lat,
                lng: currentPov.lng,
                altitude: newAltitude
              }, 400);
              
              // Auto-fit to screen after zoom
              setTimeout(() => {
                if (globe) {
                  const container = document.getElementById('interactive-globe');
                  if (container) {
                    const rect = container.getBoundingClientRect();
                    globe.width(rect.width).height(Math.min(rect.height, 600));
                  }
                }
              }, 450);
            };
            
            // Enhanced responsive globe resizing
            window.resetGlobeView = function() {
              if (!globe) return;
              
              // Reset to optimal view
              globe.pointOfView({ lat: 20, lng: 0, altitude: 2.2 }, 1000);
              
              // Adjust size to container
              setTimeout(() => {
                const container = document.getElementById('interactive-globe');
                if (container && globe) {
                  const rect = container.getBoundingClientRect();
                  const optimalHeight = Math.min(window.innerHeight * 0.6, 600);
                  globe.width(rect.width).height(optimalHeight);
                }
              }, 100);
            };
            
            // Auto-resize globe on window resize
            let resizeTimeout;
            window.addEventListener('resize', function() {
              clearTimeout(resizeTimeout);
              resizeTimeout = setTimeout(() => {
                if (globe) {
                  const container = document.getElementById('interactive-globe');
                  if (container) {
                    const rect = container.getBoundingClientRect();
                    const optimalHeight = Math.min(window.innerHeight * 0.6, 600);
                    globe.width(rect.width).height(optimalHeight);
                  }
                }
              }, 100);
            });

            window.showDestinationModal = function(countryId) {
              const country = studyDestinations.find(dest => dest.id === countryId);
              if (!country) return;

              const modal = document.getElementById('country-info-modal');
              if (!modal) return;

              // Update modal content
              document.getElementById('modal-country-name').textContent = country.name;
              document.getElementById('modal-country-flag').textContent = country.flag;
              document.getElementById('modal-country-description').textContent = country.description;
              document.getElementById('modal-tuition-range').textContent = country.tuitionRange;
              document.getElementById('modal-living-cost').textContent = country.livingCost || 'Contact for details';
              document.getElementById('modal-visa-success').textContent = country.visaSuccess;
              document.getElementById('modal-work-permit').textContent = country.workPermit || 'Available';

              // Update programs
              const programsList = document.getElementById('modal-programs');
              if (programsList && country.programs) {
                programsList.innerHTML = country.programs.map(program => 
                  '<span class="program-tag">' + program.name + ' (' + program.level + ')</span>'
                ).join('');
              }

              // Show modal
              modal.style.display = 'block';
              document.body.style.overflow = 'hidden';
            };

            window.downloadCountryGuide = function() {
              // This would trigger a download of country-specific guide
              alert('Country guide download feature coming soon!');
            };

            // Initialize globe when DOM is ready
            if (document.getElementById('interactive-globe')) {
              initializeGlobe();
            }
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
        
        {/* Backup Typewriter Initialization */}
        <script>
          {`
          // Backup initialization after all scripts load
          window.addEventListener('load', function() {
            setTimeout(function() {
              if (typeof window.initializeCinematicTypewriter === 'function') {
                const typewriterElement = document.getElementById('typewriter-text');
                if (typewriterElement && (!typewriterElement.innerHTML.trim() || typewriterElement.innerHTML === '')) {
                  console.log('🔄 Running backup typewriter initialization...');
                  window.initializeCinematicTypewriter();
                }
              } else {
                console.log('⚠️ Typewriter function not available, trying manual initialization...');
                const typewriterElement = document.getElementById('typewriter-text');
                if (typewriterElement && !typewriterElement.innerHTML.trim()) {
                  typewriterElement.innerHTML = 'Your Dream <span class="text-accent">Study Abroad</span> Journey Starts Here';
                }
              }
            }, 1000);
          });
          `}
        </script>
        
        {/* Immediate typewriter initialization */}
        <script>
          {`
          // Immediate check and initialization
          document.addEventListener('DOMContentLoaded', function() {
            console.log('🚀 DOM loaded, checking typewriter...');
            const element = document.getElementById('typewriter-text');
            if (element) {
              console.log('✅ Found typewriter element with content:', element.innerHTML);
              if (!element.innerHTML.trim() || element.innerHTML === '') {
                element.innerHTML = 'Your Dream <span class="text-accent">Study Abroad</span> Journey Starts Here';
                console.log('🔧 Added emergency fallback text');
              }
            } else {
              console.error('❌ Typewriter element not found in DOM');
            }
          });
          `}
        </script>
        
        {/* Advanced Performance & Analytics Monitoring */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Advanced Performance Monitoring System
            window.ScholarixAnalytics = {
              metrics: {},
              events: [],
              
              // Core Web Vitals tracking
              initPerformanceTracking() {
                if ('PerformanceObserver' in window) {
                  // Track LCP (Largest Contentful Paint)
                  new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                      this.metrics.lcp = entry.startTime;
                      console.log('🎯 LCP:', entry.startTime.toFixed(2) + 'ms');
                      
                      // Send to analytics if > 2.5s (poor)
                      if (entry.startTime > 2500) {
                        this.trackEvent('performance_warning', { metric: 'lcp', value: entry.startTime });
                      }
                    }
                  }).observe({ entryTypes: ['largest-contentful-paint'] });
                  
                  // Track FID (First Input Delay) 
                  new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                      this.metrics.fid = entry.processingStart - entry.startTime;
                      console.log('⚡ FID:', this.metrics.fid.toFixed(2) + 'ms');
                      
                      if (this.metrics.fid > 100) {
                        this.trackEvent('performance_warning', { metric: 'fid', value: this.metrics.fid });
                      }
                    }
                  }).observe({ entryTypes: ['first-input'] });
                  
                  // Track CLS (Cumulative Layout Shift)
                  let clsValue = 0;
                  new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                      if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                        this.metrics.cls = clsValue;
                        console.log('📐 CLS:', clsValue.toFixed(4));
                        
                        if (clsValue > 0.1) {
                          this.trackEvent('performance_warning', { metric: 'cls', value: clsValue });
                        }
                      }
                    }
                  }).observe({ entryTypes: ['layout-shift'] });
                  
                  console.log('🔍 Advanced performance monitoring active');
                }
                
                // Track page load metrics
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const navigation = performance.getEntriesByType('navigation')[0];
                    if (navigation) {
                      this.metrics.pageLoad = navigation.loadEventEnd - navigation.navigationStart;
                      this.metrics.domReady = navigation.domContentLoadedEventEnd - navigation.navigationStart;
                      this.metrics.ttfb = navigation.responseStart - navigation.navigationStart;
                      
                      console.log('📊 Page Metrics:', {
                        'Page Load': this.metrics.pageLoad + 'ms',
                        'DOM Ready': this.metrics.domReady + 'ms', 
                        'TTFB': this.metrics.ttfb + 'ms'
                      });
                      
                      // Track slow loading
                      if (this.metrics.pageLoad > 3000) {
                        this.trackEvent('slow_page_load', { duration: this.metrics.pageLoad });
                      }
                    }
                  }, 0);
                });
              },
              
              // User engagement tracking
              initEngagementTracking() {
                let startTime = Date.now();
                let isActive = true;
                let totalEngagementTime = 0;
                
                // Track visibility changes
                document.addEventListener('visibilitychange', () => {
                  isActive = !document.hidden;
                  if (document.hidden) {
                    this.trackEvent('page_blur', { engagement_time: totalEngagementTime });
                  } else {
                    this.trackEvent('page_focus', { engagement_time: totalEngagementTime });
                  }
                });
                
                // Track scroll depth
                let maxScroll = 0;
                window.addEventListener('scroll', () => {
                  const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                  if (scrollPercent > maxScroll) {
                    maxScroll = scrollPercent;
                    if (maxScroll % 25 === 0 && maxScroll > 0) {
                      this.trackEvent('scroll_depth', { percent: maxScroll });
                    }
                  }
                }, { passive: true });
                
                console.log('📈 User engagement tracking active');
              },
              
              // Error tracking
              initErrorTracking() {
                window.addEventListener('error', (e) => {
                  this.trackEvent('javascript_error', {
                    message: e.message,
                    filename: e.filename,
                    lineno: e.lineno,
                    stack: e.error?.stack
                  });
                });
                
                window.addEventListener('unhandledrejection', (e) => {
                  this.trackEvent('promise_rejection', {
                    reason: e.reason?.toString()
                  });
                });
                
                console.log('🛡️ Error tracking active');
              },
              
              // Event tracking
              trackEvent(eventName, data = {}) {
                const event = {
                  name: eventName,
                  timestamp: Date.now(),
                  url: window.location.href,
                  userAgent: navigator.userAgent,
                  data: data
                };
                
                this.events.push(event);
                
                // Send to Google Analytics if available
                if (typeof gtag !== 'undefined') {
                  gtag('event', eventName, data);
                }
                
                // Log to console in development
                if (window.location.hostname === 'localhost') {
                  console.log('📊 Event:', eventName, data);
                }
              },
              
              // Initialize all tracking
              init() {
                this.initPerformanceTracking();
                this.initEngagementTracking(); 
                this.initErrorTracking();
                
                // Track page view
                this.trackEvent('page_view', {
                  title: document.title,
                  referrer: document.referrer
                });
                
                console.log('🚀 SCHOLARIX Analytics initialized');
              }
            };
            
            // Initialize analytics when DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', () => window.ScholarixAnalytics.init());
            } else {
              window.ScholarixAnalytics.init();
            }
            
            // Service Worker Registration for PWA
            if ('serviceWorker' in navigator && 'caches' in window) {
              window.addEventListener('load', async () => {
                try {
                  const registration = await navigator.serviceWorker.register('/static/sw.js', {
                    scope: '/'
                  });
                  
                  console.log('✅ Service Worker registered:', registration.scope);
                  
                  // Handle updates
                  registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (newWorker) {
                      newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                          // Show update notification
                          showUpdateNotification();
                        }
                      });
                    }
                  });
                  
                  // Track service worker events
                  if (window.ScholarixAnalytics) {
                    window.ScholarixAnalytics.trackEvent('service_worker_registered', {
                      scope: registration.scope
                    });
                  }
                  
                } catch (error) {
                  console.error('🚨 Service Worker registration failed:', error);
                  if (window.ScholarixAnalytics) {
                    window.ScholarixAnalytics.trackEvent('service_worker_failed', {
                      error: error.message
                    });
                  }
                }
              });
              
              // Show update notification
              function showUpdateNotification() {
                const notification = document.createElement('div');
                notification.className = 'update-notification';
                notification.innerHTML = \`
                  <div class="update-content">
                    <span>🚀 New version available!</span>
                    <button onclick="window.location.reload()" class="update-btn">Update</button>
                    <button onclick="this.parentElement.parentElement.remove()" class="dismiss-btn">×</button>
                  </div>
                \`;
                
                notification.style.cssText = \`
                  position: fixed;
                  top: 80px;
                  right: 20px;
                  background: #1e3a8a;
                  color: white;
                  padding: 1rem;
                  border-radius: 8px;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                  z-index: 10000;
                  font-family: Inter, sans-serif;
                  font-size: 14px;
                  max-width: 300px;
                  animation: slideInRight 0.3s ease;
                \`;
                
                document.body.appendChild(notification);
                
                // Auto-remove after 10 seconds
                setTimeout(() => {
                  if (notification.parentElement) {
                    notification.remove();
                  }
                }, 10000);
              }
            }
            
            // Install prompt for PWA
            let deferredPrompt;
            window.addEventListener('beforeinstallprompt', (e) => {
              e.preventDefault();
              deferredPrompt = e;
              
              // Show install button after user engagement
              setTimeout(() => {
                showInstallPrompt();
              }, 30000); // Show after 30 seconds
            });
            
            function showInstallPrompt() {
              if (!deferredPrompt) return;
              
              const installBanner = document.createElement('div');
              installBanner.className = 'install-prompt';
              installBanner.innerHTML = \`
                <div class="install-content">
                  <div class="install-icon">📱</div>
                  <div class="install-text">
                    <div class="install-title">Install SCHOLARIX App</div>
                    <div class="install-subtitle">Get quick access to study abroad guidance</div>
                  </div>
                  <div class="install-actions">
                    <button class="install-btn" onclick="installApp()">Install</button>
                    <button class="dismiss-btn" onclick="dismissInstallPrompt()">Not now</button>
                  </div>
                </div>
              \`;
              
              installBanner.style.cssText = \`
                position: fixed;
                bottom: 20px;
                left: 20px;
                right: 20px;
                background: white;
                border: 1px solid #e5e7eb;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                z-index: 10000;
                font-family: Inter, sans-serif;
                animation: slideInUp 0.3s ease;
                max-width: 400px;
                margin: 0 auto;
              \`;
              
              document.body.appendChild(installBanner);
              
              window.installApp = async () => {
                if (deferredPrompt) {
                  deferredPrompt.prompt();
                  const { outcome } = await deferredPrompt.userChoice;
                  
                  if (window.ScholarixAnalytics) {
                    window.ScholarixAnalytics.trackEvent('pwa_install_prompt', { outcome });
                  }
                  
                  deferredPrompt = null;
                  installBanner.remove();
                }
              };
              
              window.dismissInstallPrompt = () => {
                installBanner.remove();
                if (window.ScholarixAnalytics) {
                  window.ScholarixAnalytics.trackEvent('pwa_install_dismissed');
                }
              };
            }
            
            // Enhanced Progressive Form System
            document.addEventListener('DOMContentLoaded', function() {
              console.log('🚀 Initializing enhanced progressive form system...');
              
              // Initialize all progressive forms
              const forms = document.querySelectorAll('.progressive-form');
              forms.forEach(initializeProgressiveForm);
              
              // Initialize enhanced form inputs
              initializeEnhancedInputs();
              
              function initializeProgressiveForm(form) {
                const steps = form.querySelectorAll('.form-step');
                const nextButtons = form.querySelectorAll('[data-next-step], .btn-next-step');
                const prevButtons = form.querySelectorAll('[data-prev-step], .btn-prev-step');
                let currentStep = 0;
                
                function showStep(n, direction = 'forward') {
                  if (n < 0 || n >= steps.length) return;
                  
                  steps.forEach((step, index) => {
                    step.classList.remove('active', 'slide-in-right', 'slide-in-left');
                    
                    if (index === n) {
                      step.style.display = 'block';
                      setTimeout(() => {
                        step.classList.add('active');
                        if (direction === 'forward') {
                          step.classList.add('slide-in-right');
                        } else {
                          step.classList.add('slide-in-left');
                        }
                      }, 10);
                    } else {
                      setTimeout(() => {
                        step.style.display = 'none';
                      }, 300);
                    }
                  });
                  
                  updateProgressIndicator(n, steps.length);
                  currentStep = n;
                  
                  // Focus first input in new step
                  setTimeout(() => {
                    const firstInput = steps[n].querySelector('input, select, textarea');
                    if (firstInput) firstInput.focus();
                  }, 350);
                }
                
                function updateProgressIndicator(step, total) {
                  const progressFill = form.querySelector('.progress-fill');
                  const progressText = form.querySelector('.progress-indicator, .progress-text');
                  const stepIndicators = form.querySelectorAll('.step-indicator .step');
                  
                  if (progressFill) {
                    const progress = ((step + 1) / total) * 100;
                    progressFill.style.width = progress + '%';
                  }
                  
                  if (progressText) {
                    progressText.textContent = 'Step ' + (step + 1) + ' of ' + total;
                  }
                  
                  // Update step indicators
                  stepIndicators.forEach((indicator, index) => {
                    indicator.classList.remove('active', 'completed');
                    if (index === step) {
                      indicator.classList.add('active');
                    } else if (index < step) {
                      indicator.classList.add('completed');
                    }
                  });
                }
                
                // Initialize first step
                showStep(0);
                
                // Handle next buttons
                nextButtons.forEach(button => {
                  button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const currentStepElement = steps[currentStep];
                    if (validateStep(currentStepElement)) {
                      if (currentStep < steps.length - 1) {
                        showStep(currentStep + 1, 'forward');
                        
                        // Track step completion
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'form_step_completed', {
                            step_number: currentStep + 1,
                            form_name: form.id || 'progressive_form'
                          });
                        }
                      }
                    }
                  });
                });
                
                // Handle previous buttons
                prevButtons.forEach(button => {
                  button.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (currentStep > 0) {
                      showStep(currentStep - 1, 'backward');
                    }
                  });
                });
                
                console.log('✅ Progressive form initialized with', steps.length, 'steps');
              }
              
              function validateStep(stepElement) {
                const requiredFields = stepElement.querySelectorAll('[required]');
                let isValid = true;
                let firstInvalidField = null;
                
                requiredFields.forEach(field => {
                  const isFieldValid = validateField(field);
                  if (!isFieldValid && !firstInvalidField) {
                    firstInvalidField = field;
                  }
                  isValid = isValid && isFieldValid;
                });
                
                if (!isValid && firstInvalidField) {
                  firstInvalidField.focus();
                  showFieldError(firstInvalidField, 'This field is required');
                }
                
                return isValid;
              }
              
              function validateField(field) {
                const value = field.value.trim();
                const fieldType = field.type;
                const fieldName = field.name;
                
                // Basic required validation
                if (field.hasAttribute('required') && !value) {
                  return false;
                }
                
                // Email validation
                if (fieldType === 'email' && value) {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!emailRegex.test(value)) {
                    showFieldError(field, 'Please enter a valid email address');
                    return false;
                  }
                }
                
                // Phone validation
                if (fieldType === 'tel' && value) {
                  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                  if (!phoneRegex.test(value)) {
                    showFieldError(field, 'Please enter a valid phone number');
                    return false;
                  }
                }
                
                // Name validation
                if (fieldName === 'fullName' && value) {
                  if (value.length < 2) {
                    showFieldError(field, 'Name must be at least 2 characters');
                    return false;
                  }
                }
                
                clearFieldError(field);
                return true;
              }
              
              function showFieldError(field, message) {
                field.classList.add('error');
                field.setAttribute('aria-invalid', 'true');
                
                // Remove existing error message
                const existingError = field.parentNode.querySelector('.field-error');
                if (existingError) {
                  existingError.remove();
                }
                
                // Add new error message
                const errorElement = document.createElement('div');
                errorElement.className = 'field-error';
                errorElement.textContent = message;
                field.parentNode.appendChild(errorElement);
                
                // Add shake animation
                field.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                  field.style.animation = '';
                }, 500);
              }
              
              function clearFieldError(field) {
                field.classList.remove('error');
                field.setAttribute('aria-invalid', 'false');
                
                const errorElement = field.parentNode.querySelector('.field-error');
                if (errorElement) {
                  errorElement.remove();
                }
              }
              
              function initializeEnhancedInputs() {
                // Add floating label behavior
                const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
                
                formInputs.forEach(input => {
                  // Real-time validation
                  input.addEventListener('blur', function() {
                    validateField(this);
                  });
                  
                  // Clear errors on focus
                  input.addEventListener('focus', function() {
                    clearFieldError(this);
                  });
                  
                  // Auto-format phone numbers
                  if (input.type === 'tel') {
                    input.addEventListener('input', function() {
                      let value = this.value.replace(/\D/g, '');
                      if (value.length > 0) {
                        if (value.length <= 3) {
                          value = value;
                        } else if (value.length <= 6) {
                          value = value.slice(0, 3) + ' ' + value.slice(3);
                        } else if (value.length <= 10) {
                          value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6);
                        } else {
                          value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 10);
                        }
                      }
                      this.value = value;
                    });
                  }
                  
                  // Auto-capitalize names
                  if (input.name === 'fullName' || input.name === 'firstName' || input.name === 'lastName') {
                    input.addEventListener('input', function() {
                      this.value = this.value.replace(/\b\w/g, l => l.toUpperCase());
                    });
                  }
                });
                
                console.log('✅ Enhanced input behaviors initialized');
              }
            });
            
            // Preload next page resources on hover
            let preloadedLinks = new Set();
            document.addEventListener('mouseover', function(e) {
              const link = e.target.closest('a[href]');
              if (link && link.hostname === location.hostname && !preloadedLinks.has(link.href)) {
                const preloadLink = document.createElement('link');
                preloadLink.rel = 'prefetch';
                preloadLink.href = link.href;
                document.head.appendChild(preloadLink);
                preloadedLinks.add(link.href);
                console.log('🔮 Prefetched:', link.href);
              }
            }, { passive: true });
          `
        }} />
      </body>
    </html>
  )
})