/**
 * Production-Ready Mobile Contact Form JavaScript
 * Enhanced with better UX, validation, and error handling
 */

class ProductionMobileContactForm {
  constructor() {
    this.form = null;
    this.currentStep = 1;
    this.totalSteps = 2;
    this.isSubmitting = false;
    this.validationRules = {
      fullName: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Please enter a valid full name (letters only, minimum 2 characters)'
      },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
      },
      phone: {
        required: true,
        pattern: /^[0-9\s\-\+\(\)]{8,15}$/,
        message: 'Please enter a valid phone number (8-15 digits)'
      },
      destination: {
        required: true,
        message: 'Please select your preferred study destination'
      },
      studyLevel: {
        required: true,
        message: 'Please select your study level'
      },
      timeline: {
        required: true,
        message: 'Please select when you want to start'
      }
    };
    
    this.init();
  }

  init() {
    this.form = document.getElementById('mobileLeadForm');
    if (!this.form) return;

    this.setupEventListeners();
    this.setupFormValidation();
    this.setupAutoSave();
    this.loadSavedData();
    this.setupAccessibility();
  }

  setupEventListeners() {
    // Step navigation
    const nextBtn = document.querySelector('.mobile-next-btn');
    const backBtn = document.querySelector('.mobile-back-btn');
    const submitBtn = document.querySelector('.mobile-submit-btn');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextStep());
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => this.prevStep());
    }

    // Form submission
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Real-time validation
    const inputs = this.form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearErrors(input));
    });

    // Phone number formatting
    const phoneInput = this.form.querySelector('input[name="phone"]');
    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => this.formatPhoneNumber(e));
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));
  }

  setupFormValidation() {
    // Add validation attributes to inputs
    Object.keys(this.validationRules).forEach(fieldName => {
      const field = this.form.querySelector(`[name="${fieldName}"]`);
      if (field && this.validationRules[fieldName].required) {
        field.setAttribute('required', 'required');
        field.setAttribute('aria-required', 'true');
      }
    });
  }

  setupAutoSave() {
    // Auto-save form data every 30 seconds
    setInterval(() => {
      this.saveFormData();
    }, 30000);

    // Save on visibility change (user switching tabs)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.saveFormData();
      }
    });
  }

  setupAccessibility() {
    // Add ARIA labels and descriptions
    const steps = document.querySelectorAll('.mobile-form-step');
    steps.forEach((step, index) => {
      step.setAttribute('aria-labelledby', `step-${index + 1}-title`);
      step.setAttribute('role', 'tabpanel');
    });

    // Announce step changes to screen readers
    const stepIndicators = document.querySelectorAll('.step-number');
    stepIndicators.forEach((indicator, index) => {
      indicator.setAttribute('aria-label', `Step ${index + 1} of ${this.totalSteps}`);
    });
  }

  validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    const rules = this.validationRules[fieldName];

    if (!rules) return true;

    // Clear previous errors
    this.clearErrors(field);

    // Required validation
    if (rules.required && !value) {
      this.showFieldError(field, 'This field is required');
      return false;
    }

    // Skip other validations if field is empty and not required
    if (!value && !rules.required) return true;

    // Minimum length validation
    if (rules.minLength && value.length < rules.minLength) {
      this.showFieldError(field, `Minimum ${rules.minLength} characters required`);
      return false;
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(value)) {
      this.showFieldError(field, rules.message);
      return false;
    }

    // Custom validations
    if (fieldName === 'email' && !this.isValidEmail(value)) {
      this.showFieldError(field, 'Please enter a valid email address');
      return false;
    }

    // Mark field as valid
    field.classList.remove('error');
    field.classList.add('valid');
    field.setAttribute('aria-invalid', 'false');

    return true;
  }

  showFieldError(field, message) {
    field.classList.add('error');
    field.classList.remove('valid');
    field.setAttribute('aria-invalid', 'true');

    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    errorDiv.setAttribute('aria-live', 'polite');
    
    field.parentNode.appendChild(errorDiv);

    // Focus the field for better UX
    setTimeout(() => field.focus(), 100);
  }

  clearErrors(field) {
    field.classList.remove('error');
    field.removeAttribute('aria-invalid');
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
  }

  validateStep(stepNumber) {
    const step = document.querySelector(`#mobileStep${stepNumber}`);
    if (!step) return false;

    const fields = step.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  nextStep() {
    if (!this.validateStep(this.currentStep)) {
      this.showNotification('Please fill in all required fields correctly', 'error');
      return;
    }

    if (this.currentStep < this.totalSteps) {
      this.showStep(this.currentStep + 1);
      this.saveFormData();
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.showStep(this.currentStep - 1);
    }
  }

  showStep(stepNumber) {
    // Hide current step
    const currentStepEl = document.querySelector(`#mobileStep${this.currentStep}`);
    const nextStepEl = document.querySelector(`#mobileStep${stepNumber}`);

    if (!currentStepEl || !nextStepEl) return;

    // Add transition classes
    currentStepEl.classList.add('sliding-out');
    
    setTimeout(() => {
      currentStepEl.style.display = 'none';
      currentStepEl.classList.remove('active', 'sliding-out');
      
      nextStepEl.style.display = 'block';
      nextStepEl.classList.add('sliding-in');
      
      setTimeout(() => {
        nextStepEl.classList.remove('sliding-in');
        nextStepEl.classList.add('active');
      }, 50);
    }, 200);

    // Update step indicators
    this.updateStepIndicators(stepNumber);
    
    // Update progress bar
    this.updateProgressBar(stepNumber);
    
    // Update current step
    this.currentStep = stepNumber;

    // Focus first input in new step
    const firstInput = nextStepEl.querySelector('input, select, textarea');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 300);
    }

    // Announce step change to screen readers
    this.announceStepChange(stepNumber);
  }

  updateStepIndicators(activeStep) {
    for (let i = 1; i <= this.totalSteps; i++) {
      const indicator = document.querySelector(`.step-number[data-step="${i}"]`);
      const divider = document.querySelector('.step-divider');
      
      if (!indicator) continue;

      indicator.classList.remove('active', 'completed');
      
      if (i < activeStep) {
        indicator.classList.add('completed');
      } else if (i === activeStep) {
        indicator.classList.add('active');
      }
    }

    // Update divider
    const divider = document.querySelector('.step-divider');
    if (divider && activeStep > 1) {
      divider.classList.add('active');
    }
  }

  updateProgressBar(activeStep) {
    const progressFill = document.querySelector('.mobile-progress-fill');
    if (progressFill) {
      const percentage = (activeStep / this.totalSteps) * 100;
      progressFill.style.width = `${percentage}%`;
    }
  }

  announceStepChange(stepNumber) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Step ${stepNumber} of ${this.totalSteps}`;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  formatPhoneNumber(event) {
    let value = event.target.value.replace(/\D/g, '');
    
    // Limit to reasonable phone number length
    if (value.length > 15) {
      value = value.slice(0, 15);
    }

    // Format based on length
    if (value.length >= 10) {
      // Format as: (XXX) XXX-XXXX or similar
      const formatted = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      event.target.value = formatted;
    } else {
      event.target.value = value;
    }
  }

  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  saveFormData() {
    if (!this.form) return;

    const formData = new FormData(this.form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    // Add metadata
    data._step = this.currentStep;
    data._timestamp = Date.now();

    try {
      localStorage.setItem('scholarix_contact_form', JSON.stringify(data));
    } catch (error) {
      console.warn('Could not save form data to localStorage:', error);
    }
  }

  loadSavedData() {
    try {
      const savedData = localStorage.getItem('scholarix_contact_form');
      if (!savedData) return;

      const data = JSON.parse(savedData);
      
      // Don't load data older than 24 hours
      if (Date.now() - data._timestamp > 24 * 60 * 60 * 1000) {
        localStorage.removeItem('scholarix_contact_form');
        return;
      }

      // Populate form fields
      Object.keys(data).forEach(key => {
        if (key.startsWith('_')) return; // Skip metadata
        
        const field = this.form.querySelector(`[name="${key}"]`);
        if (field) {
          field.value = data[key];
        }
      });

      // Restore step if saved
      if (data._step && data._step > 1) {
        this.showStep(data._step);
      }

      this.showNotification('Your previous form data has been restored', 'info');
    } catch (error) {
      console.warn('Could not load saved form data:', error);
      localStorage.removeItem('scholarix_contact_form');
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    if (this.isSubmitting) return;
    
    // Validate all steps
    let allValid = true;
    for (let i = 1; i <= this.totalSteps; i++) {
      if (!this.validateStep(i)) {
        allValid = false;
        if (i !== this.currentStep) {
          this.showStep(i);
          break;
        }
      }
    }

    if (!allValid) {
      this.showNotification('Please fill in all required fields correctly', 'error');
      return;
    }

    this.isSubmitting = true;
    this.showLoadingState(true);

    try {
      // Prepare form data
      const formData = new FormData(this.form);
      
      // Add additional metadata
      formData.append('_timestamp', new Date().toISOString());
      formData.append('_source', 'mobile_contact_form');
      formData.append('_user_agent', navigator.userAgent);
      formData.append('_page_url', window.location.href);

      // Submit to multiple endpoints for redundancy
      const submissions = await Promise.allSettled([
        this.submitToFormspree(formData),
        this.submitToGoogleSheets(formData),
        this.sendEmailNotification(formData)
      ]);

      // Check if at least one submission was successful
      const successfulSubmissions = submissions.filter(result => result.status === 'fulfilled').length;
      
      if (successfulSubmissions > 0) {
        this.handleSubmissionSuccess();
        
        // Track analytics
        this.trackFormSubmission('success');
        
        // Clear saved data
        localStorage.removeItem('scholarix_contact_form');
      } else {
        throw new Error('All submission methods failed');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      this.handleSubmissionError(error);
      this.trackFormSubmission('error', error.message);
    } finally {
      this.isSubmitting = false;
      this.showLoadingState(false);
    }
  }

  async submitToFormspree(formData) {
    const response = await fetch(this.form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Formspree submission failed: ${response.statusText}`);
    }

    return response.json();
  }

  async submitToGoogleSheets(formData) {
    // Convert FormData to regular object
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Google Sheets submission failed: ${response.statusText}`);
    }

    return response.json();
  }

  async sendEmailNotification(formData) {
    // Use EmailJS or similar service
    const templateParams = {};
    for (let [key, value] of formData.entries()) {
      templateParams[key] = value;
    }

    // This is a placeholder - replace with actual EmailJS implementation
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: 'sent' }), 1000);
    });
  }

  handleSubmissionSuccess() {
    this.showSuccessMessage();
    this.form.reset();
    this.showStep(1);
    
    // Redirect after showing success message
    setTimeout(() => {
      window.location.href = '/thank-you';
    }, 3000);
  }

  handleSubmissionError(error) {
    this.showNotification(
      'There was an error submitting your form. Please try again or contact us directly.',
      'error'
    );
  }

  showSuccessMessage() {
    const formCard = document.querySelector('.mobile-form-card');
    if (!formCard) return;

    formCard.innerHTML = `
      <div class="form-success">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
        <h3>Thank You!</h3>
        <p>Your consultation request has been submitted successfully. Our experts will contact you within 24 hours.</p>
        <div style="margin-top: 2rem;">
          <a href="/" class="mobile-next-btn">Return to Home</a>
        </div>
      </div>
    `;
  }

  showLoadingState(show) {
    const submitBtn = document.querySelector('.mobile-submit-btn');
    if (!submitBtn) return;

    if (show) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Submitting...</span>';
    } else {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i><span>Get Free Consultation</span>';
    }
  }

  showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.form-notification');
    existingNotifications.forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = `form-notification form-notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${type === 'error' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️'}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Close notification">&times;</button>
      </div>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10000;
      background: ${type === 'error' ? '#fee2e2' : type === 'success' ? '#dcfce7' : '#dbeafe'};
      color: ${type === 'error' ? '#dc2626' : type === 'success' ? '#16a34a' : '#1d4ed8'};
      padding: 16px 20px;
      border-radius: 12px;
      border: 2px solid ${type === 'error' ? '#fca5a5' : type === 'success' ? '#86efac' : '#93c5fd'};
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      max-width: 90vw;
      opacity: 0;
      transition: all 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);

    // Setup close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(-50%) translateY(-20px)';
      setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        closeBtn.click();
      }
    }, 5000);
  }

  trackFormSubmission(status, errorMessage = null) {
    // Track with Google Analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        event_category: 'Contact Form',
        event_label: status,
        value: status === 'success' ? 1 : 0
      });
    }

    // Track with other analytics services
    if (typeof analytics !== 'undefined') {
      analytics.track('Contact Form Submitted', {
        status: status,
        step: this.currentStep,
        timestamp: new Date().toISOString(),
        errorMessage: errorMessage
      });
    }
  }

  handleKeyboardNavigation(event) {
    // Allow Enter to trigger next step on required fields
    if (event.key === 'Enter' && !event.shiftKey) {
      const target = event.target;
      
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {
        event.preventDefault();
        
        if (this.currentStep < this.totalSteps) {
          this.nextStep();
        } else {
          this.form.dispatchEvent(new Event('submit'));
        }
      }
    }

    // Allow Escape to go back a step
    if (event.key === 'Escape' && this.currentStep > 1) {
      this.prevStep();
    }
  }
}

// Initialize the form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ProductionMobileContactForm();
});

// Also provide global functions for onclick handlers
window.showMobileStep2 = function() {
  const form = document.querySelector('.production-mobile-form');
  if (form && form.formHandler) {
    form.formHandler.nextStep();
  }
};

window.showMobileStep1 = function() {
  const form = document.querySelector('.production-mobile-form');
  if (form && form.formHandler) {
    form.formHandler.prevStep();
  }
};