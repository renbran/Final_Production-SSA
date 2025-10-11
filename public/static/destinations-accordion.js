/**
 * Destinations Budget Accordion Handler
 * Handles collapsible accordion sections for destination tables
 */

document.addEventListener('DOMContentLoaded', function() {
  initAccordion();
});

function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.budget-accordion-header');
  
  if (accordionHeaders.length === 0) {
    return; // Exit if no accordion headers found
  }

  // Set first accordion as open by default
  const firstHeader = accordionHeaders[0];
  const firstContent = firstHeader.nextElementSibling;
  firstHeader.classList.add('active');
  if (firstContent && firstContent.classList.contains('budget-accordion-content')) {
    firstContent.classList.add('show');
  }

  // Add click event listeners to all accordion headers
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isActive = this.classList.contains('active');

      // Option 1: Close all other accordions (only one open at a time)
      // Uncomment below to enable this behavior
      /*
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== this) {
          otherHeader.classList.remove('active');
          const otherContent = otherHeader.nextElementSibling;
          if (otherContent) {
            otherContent.classList.remove('show');
          }
        }
      });
      */

      // Toggle current accordion
      if (isActive) {
        // Close current
        this.classList.remove('active');
        if (content) {
          content.classList.remove('show');
        }
      } else {
        // Open current
        this.classList.add('active');
        if (content) {
          content.classList.add('show');
        }
      }
    });

    // Add keyboard accessibility
    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });

    // Ensure headers are keyboard focusable
    header.setAttribute('tabindex', '0');
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', header.classList.contains('active'));
  });
}

// Re-initialize if content is dynamically loaded
if (typeof window.reinitAccordion === 'undefined') {
  window.reinitAccordion = initAccordion;
}
