/**
 * IMMEDIATE PERFORMANCE OPTIMIZATIONS
 * Quick wins that can be implemented right now
 */

// Critical CSS extraction and inlining
const criticalCSS = `
/* Critical Above-the-Fold Styles */
:root {
  --primary-color: #1e3a8a;
  --secondary-color: #3b82f6;
  --accent-color: #f59e0b;
  --neutral-light: #f1f5f9;
  --neutral-medium: #64748b;
  --neutral-dark: #1f2937;
}

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: var(--neutral-dark);
  background-color: #ffffff;
}

/* Header - Critical for LCP */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.75rem 0;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo - Critical for brand recognition */
.logo img {
  height: 40px;
  width: auto;
}

@media (min-width: 768px) {
  .logo img {
    height: 50px;
  }
}

@media (min-width: 1024px) {
  .logo img {
    height: 60px;
  }
}

/* Hero section - Critical for LCP */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .hero-content h1 {
    font-size: 3.5rem;
  }
}

.hero-content p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* CTA Button - Critical for conversion */
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
  font-size: 1rem;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  min-height: 48px;
  min-width: 48px;
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

/* Progressive Form - Critical for conversion */
.progressive-form {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.form-step {
  display: none;
}

.form-step.active {
  display: block;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--neutral-dark);
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;
  min-height: 48px;
}

.form-input:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Loading state to prevent CLS */
.loading-placeholder {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Prevent layout shifts for images */
img {
  max-width: 100%;
  height: auto;
}

/* Ensure proper aspect ratios */
.image-container {
  position: relative;
  overflow: hidden;
}

.image-container::before {
  content: '';
  display: block;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Preload critical resources hint */
.preload-hints {
  display: none;
}
`;

// Critical JavaScript for above-the-fold functionality
const criticalJS = `
// Critical JavaScript - Inline for fastest execution
(function() {
  'use strict';
  
  // Performance observer for monitoring
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          // Track LCP for optimization
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          // Track CLS for optimization
          console.log('CLS:', entry.value);
        }
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
  }
  
  // Progressive form enhancement
  function initProgressiveForm() {
    const form = document.querySelector('.progressive-form');
    if (!form) return;
    
    const steps = form.querySelectorAll('.form-step');
    let currentStep = 0;
    
    function showStep(n) {
      steps.forEach((step, index) => {
        step.classList.toggle('active', index === n);
      });
    }
    
    function nextStep() {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    }
    
    // Initialize first step
    showStep(0);
    
    // Handle form progression
    const nextButtons = form.querySelectorAll('[data-next-step]');
    nextButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Basic validation before proceeding
        const currentStepElement = steps[currentStep];
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.focus();
            field.style.borderColor = '#ef4444';
          } else {
            field.style.borderColor = '#e5e7eb';
          }
        });
        
        if (isValid) {
          nextStep();
        }
      });
    });
  }
  
  // Mobile menu toggle
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', 
          mobileMenu.classList.contains('open')
        );
      });
    }
  }
  
  // Lazy loading for images below the fold
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initProgressiveForm();
      initMobileMenu();
      initLazyLoading();
    });
  } else {
    initProgressiveForm();
    initMobileMenu();
    initLazyLoading();
  }
  
  // Preload next page resources on hover
  function preloadOnHover() {
    document.addEventListener('mouseover', (e) => {
      const link = e.target.closest('a[href]');
      if (link && link.hostname === location.hostname) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'prefetch';
        preloadLink.href = link.href;
        document.head.appendChild(preloadLink);
      }
    }, { once: true });
  }
  
  preloadOnHover();
})();
`;

// Resource hints for critical resources
const resourceHints = `
<!-- DNS prefetch for external domains -->
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//fonts.gstatic.com">
<link rel="dns-prefetch" href="//cdnjs.cloudflare.com">

<!-- Preconnect to critical external resources -->
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Critical CSS inline -->
<style>
${criticalCSS}
</style>

<!-- Preload critical resources -->
<link rel="preload" href="/static/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/static/images/hero-bg.webp" as="image">

<!-- Non-critical CSS loaded asynchronously -->
<link rel="preload" href="/static/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/static/style.css"></noscript>

<!-- Critical JavaScript inline -->
<script>
${criticalJS}
</script>
`;

// Image optimization helper
const imageOptimization = {
  // Generate responsive image HTML
  generateResponsiveImage(src, alt, sizes = "100vw") {
    const baseName = src.replace(/\.[^/.]+$/, "");
    const ext = src.split('.').pop();
    
    return `
<picture>
  <source 
    srcset="${baseName}.avif" 
    type="image/avif"
  >
  <source 
    srcset="${baseName}.webp" 
    type="image/webp"
  >
  <img 
    src="${src}" 
    alt="${alt}"
    loading="lazy"
    decoding="async"
    sizes="${sizes}"
    style="aspect-ratio: 16/9; object-fit: cover;"
  >
</picture>`;
  },
  
  // Hero image with priority loading
  generateHeroImage(src, alt) {
    return `
<picture>
  <source 
    srcset="/static/images/hero-1920.avif 1920w,
            /static/images/hero-1536.avif 1536w,
            /static/images/hero-1024.avif 1024w,
            /static/images/hero-768.avif 768w,
            /static/images/hero-480.avif 480w" 
    type="image/avif"
  >
  <source 
    srcset="/static/images/hero-1920.webp 1920w,
            /static/images/hero-1536.webp 1536w,
            /static/images/hero-1024.webp 1024w,
            /static/images/hero-768.webp 768w,
            /static/images/hero-480.webp 480w" 
    type="image/webp"
  >
  <img 
    src="${src}" 
    alt="${alt}"
    fetchpriority="high"
    decoding="async"
    sizes="100vw"
    style="aspect-ratio: 16/9; object-fit: cover; width: 100%; height: auto;"
  >
</picture>`;
  }
};

// Export for use in the application
export { criticalCSS, criticalJS, resourceHints, imageOptimization };