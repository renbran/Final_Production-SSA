/* Enhanced Form Interactions JavaScript */

class EnhancedFormManager {
  constructor() {
    this.forms = [];
    this.validationRules = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^[\+]?[0-9\s\-\(\)]{10,}$/,
      name: /^[a-zA-Z\s]{2,50}$/,
      required: (value) => value && value.trim().length > 0
    };
    
    this.init();
  }
  
  init() {
    console.log('🚀 Initializing Enhanced Form Manager...');
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupForms());
    } else {
      this.setupForms();
    }
  }
  
  setupForms() {
    // Find all enhanced forms
    const forms = document.querySelectorAll('.progressive-form, .enhanced-form');
    
    forms.forEach(form => {
      const formInstance = new ProgressiveForm(form, this.validationRules);
      this.forms.push(formInstance);
    });
    
    // Setup enhanced input behaviors
    this.setupEnhancedInputs();
    
    console.log(`✅ Enhanced Form Manager initialized with ${this.forms.length} forms`);
  }
  
  setupEnhancedInputs() {
    const inputs = document.querySelectorAll(
      '.form-input-enhanced, .form-select-enhanced, .form-textarea-enhanced, ' +
      '.form-input, .form-select, .form-textarea'
    );
    
    inputs.forEach(input => {
      // Add floating label behavior
      this.addFloatingLabelBehavior(input);
      
      // Add validation
      this.addInputValidation(input);
      
      // Add special formatting
      this.addInputFormatting(input);
      
      // Add accessibility enhancements
      this.addAccessibilityFeatures(input);
    });
  }
  
  addFloatingLabelBehavior(input) {
    const updateLabel = () => {
      const label = input.parentNode.querySelector('.form-label-enhanced, .form-label');
      if (!label) return;
      
      if (input.value.trim() || input === document.activeElement) {
        label.classList.add('floating');
      } else {
        label.classList.remove('floating');
      }
    };
    
    input.addEventListener('focus', updateLabel);
    input.addEventListener('blur', updateLabel);
    input.addEventListener('input', updateLabel);
    
    // Initial check
    updateLabel();
  }
  
  addInputValidation(input) {
    const validateField = () => {
      const value = input.value.trim();
      const fieldType = input.type;
      const fieldName = input.name;
      const isRequired = input.hasAttribute('required');
      
      let isValid = true;
      let errorMessage = '';
      
      // Required validation
      if (isRequired && !value) {
        isValid = false;
        errorMessage = 'This field is required';
      }
      
      // Type-specific validation
      if (value && isValid) {
        switch (fieldType) {
          case 'email':
            if (!this.validationRules.email.test(value)) {
              isValid = false;
              errorMessage = 'Please enter a valid email address';
            }
            break;
            
          case 'tel':
            if (!this.validationRules.phone.test(value)) {
              isValid = false;
              errorMessage = 'Please enter a valid phone number';
            }
            break;
        }
        
        // Name validation
        if (fieldName === 'fullName' || fieldName === 'firstName' || fieldName === 'lastName') {
          if (!this.validationRules.name.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid name (letters only, 2-50 characters)';
          }
        }
      }
      
      this.showFieldValidation(input, isValid, errorMessage);
      return isValid;
    };
    
    input.addEventListener('blur', validateField);
    input.addEventListener('input', () => {
      // Clear errors on input
      this.clearFieldError(input);
    });
    
    // Store validation function
    input._validateField = validateField;
  }
  
  addInputFormatting(input) {
    // Phone number formatting
    if (input.type === 'tel') {
      input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        // Format based on length
        if (value.length > 0) {
          if (value.startsWith('971')) {
            // UAE format: +971 50 123 4567
            value = value.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, '+$1 $2 $3 $4');
          } else if (value.length <= 10) {
            // US format: (123) 456-7890
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
          } else {
            // International format: +1 234 567 8900
            value = value.replace(/(\d{1,3})(\d{3})(\d{3})(\d{4})/, '+$1 $2 $3 $4');
          }
        }
        
        e.target.value = value;
      });
    }
    
    // Name formatting (capitalize)
    if (input.name === 'fullName' || input.name === 'firstName' || input.name === 'lastName') {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\b\w/g, l => l.toUpperCase());
      });
    }
    
    // Email formatting (lowercase)
    if (input.type === 'email') {
      input.addEventListener('blur', (e) => {
        e.target.value = e.target.value.toLowerCase();
      });
    }
  }
  
  addAccessibilityFeatures(input) {
    // Add ARIA attributes
    input.setAttribute('aria-describedby', `${input.id || input.name}-help`);
    
    // Announce validation errors to screen readers
    input.addEventListener('invalid', (e) => {
      e.preventDefault();
      input.setAttribute('aria-invalid', 'true');
    });
    
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') {
        input.setAttribute('aria-invalid', 'false');
      }
    });
  }
  
  showFieldValidation(input, isValid, errorMessage) {
    const container = input.parentNode;
    
    // Update input state
    input.classList.toggle('error', !isValid);
    input.setAttribute('aria-invalid', !isValid);
    
    // Update validation icon
    const validationIcon = container.querySelector('.form-validation-enhanced, .form-validation');
    if (validationIcon) {
      const successIcon = validationIcon.querySelector('.success-icon');
      const errorIcon = validationIcon.querySelector('.error-icon');
      
      if (successIcon) successIcon.style.opacity = isValid ? '1' : '0';
      if (errorIcon) errorIcon.style.opacity = isValid ? '0' : '1';
    }
    
    // Show/hide error message
    if (!isValid && errorMessage) {
      this.showFieldError(input, errorMessage);
    } else {
      this.clearFieldError(input);
    }
  }
  
  showFieldError(input, message) {
    const container = input.parentNode;
    
    // Remove existing error
    const existingError = container.querySelector('.field-error-enhanced, .field-error');
    if (existingError) {
      existingError.remove();
    }
    
    // Create new error message
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error-enhanced';
    errorElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    container.appendChild(errorElement);
    
    // Add shake animation
    input.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
      input.style.animation = '';
    }, 500);
    
    // Announce to screen readers
    input.setAttribute('aria-describedby', errorElement.id = `error-${Date.now()}`);
  }
  
  clearFieldError(input) {
    const container = input.parentNode;
    const errorElement = container.querySelector('.field-error-enhanced, .field-error');
    
    if (errorElement) {
      errorElement.remove();
    }
    
    input.removeAttribute('aria-describedby');
  }
}

class ProgressiveForm {
  constructor(formElement, validationRules) {
    this.form = formElement;
    this.validationRules = validationRules;
    this.steps = Array.from(formElement.querySelectorAll('.form-step'));
    this.currentStep = 0;
    this.isSubmitting = false;
    
    this.init();
  }
  
  init() {
    this.setupStepNavigation();
    this.setupProgressIndicators();
    this.showStep(0);
    
    console.log(`✅ Progressive form initialized with ${this.steps.length} steps`);
  }
  
  setupStepNavigation() {
    // Next buttons
    const nextButtons = this.form.querySelectorAll('.btn-next-step, [data-next-step]');
    nextButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.nextStep();
      });
    });
    
    // Previous buttons
    const prevButtons = this.form.querySelectorAll('.btn-prev-step, [data-prev-step]');
    prevButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.prevStep();
      });
    });
    
    // Form submission
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }
  
  setupProgressIndicators() {
    const progressContainer = this.form.querySelector('.progress-container-enhanced');
    if (!progressContainer) return;
    
    const stepsIndicator = progressContainer.querySelector('.step-indicator-enhanced');
    const progressBar = progressContainer.querySelector('.progress-fill-enhanced');
    const progressText = progressContainer.querySelector('.progress-text-enhanced');
    
    this.progressElements = {
      stepsIndicator,
      progressBar,
      progressText
    };
  }
  
  showStep(stepIndex, direction = 'forward') {
    if (stepIndex < 0 || stepIndex >= this.steps.length) return;
    
    // Hide all steps
    this.steps.forEach((step, index) => {
      step.classList.remove('active', 'slide-in-right', 'slide-in-left');
      
      if (index === stepIndex) {
        step.style.display = 'block';
        setTimeout(() => {
          step.classList.add('active');
          step.classList.add(direction === 'forward' ? 'slide-in-right' : 'slide-in-left');
        }, 10);
      } else {
        setTimeout(() => {
          step.style.display = 'none';
        }, 300);
      }
    });
    
    this.currentStep = stepIndex;
    this.updateProgress();
    
    // Focus first input in new step
    setTimeout(() => {
      const firstInput = this.steps[stepIndex].querySelector('input, select, textarea');
      if (firstInput) firstInput.focus();
    }, 350);
    
    // Track step view
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_step_view', {
        step_number: stepIndex + 1,
        form_name: this.form.id || 'progressive_form'
      });
    }
  }
  
  updateProgress() {
    const { stepsIndicator, progressBar, progressText } = this.progressElements;
    
    // Update progress bar
    if (progressBar) {
      const progress = ((this.currentStep + 1) / this.steps.length) * 100;
      progressBar.style.width = `${progress}%`;
    }
    
    // Update progress text
    if (progressText) {
      progressText.textContent = `Step ${this.currentStep + 1} of ${this.steps.length}`;
    }
    
    // Update step indicators
    if (stepsIndicator) {
      const stepElements = stepsIndicator.querySelectorAll('.step-enhanced');
      stepElements.forEach((stepEl, index) => {
        stepEl.classList.remove('active', 'completed');
        
        if (index === this.currentStep) {
          stepEl.classList.add('active');
        } else if (index < this.currentStep) {
          stepEl.classList.add('completed');
        }
      });
    }
  }
  
  validateCurrentStep() {
    const currentStepElement = this.steps[this.currentStep];
    const inputs = currentStepElement.querySelectorAll('input, select, textarea');
    
    let isValid = true;
    let firstInvalidInput = null;
    
    inputs.forEach(input => {
      if (input._validateField) {
        const fieldValid = input._validateField();
        if (!fieldValid && !firstInvalidInput) {
          firstInvalidInput = input;
        }
        isValid = isValid && fieldValid;
      }
    });
    
    if (firstInvalidInput) {
      firstInvalidInput.focus();
    }
    
    return isValid;
  }
  
  nextStep() {
    if (this.validateCurrentStep()) {
      if (this.currentStep < this.steps.length - 1) {
        this.showStep(this.currentStep + 1, 'forward');
        
        // Track step completion
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_step_completed', {
            step_number: this.currentStep,
            form_name: this.form.id || 'progressive_form'
          });
        }
      } else {
        // Last step, submit form
        this.handleSubmit();
      }
    }
  }
  
  prevStep() {
    if (this.currentStep > 0) {
      this.showStep(this.currentStep - 1, 'backward');
    }
  }
  
  async handleSubmit() {
    if (this.isSubmitting) return;
    
    // Validate all steps
    let allValid = true;
    for (let i = 0; i < this.steps.length; i++) {
      const stepElement = this.steps[i];
      const inputs = stepElement.querySelectorAll('input, select, textarea');
      
      inputs.forEach(input => {
        if (input._validateField) {
          const fieldValid = input._validateField();
          allValid = allValid && fieldValid;
        }
      });
    }
    
    if (!allValid) {
      // Go to first invalid step
      for (let i = 0; i < this.steps.length; i++) {
        const stepElement = this.steps[i];
        const invalidInput = stepElement.querySelector('.error');
        if (invalidInput) {
          this.showStep(i);
          invalidInput.focus();
          break;
        }
      }
      return;
    }
    
    this.isSubmitting = true;
    
    try {
      // Show loading state
      const submitBtn = this.form.querySelector('[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
      submitBtn.disabled = true;
      
      // Collect form data
      const formData = new FormData(this.form);
      const data = Object.fromEntries(formData);
      
      // Submit to multiple endpoints (if configured)
      const results = await Promise.allSettled([
        this.submitToFormspree(data),
        this.submitToGoogleSheets(data),
        this.sendEmailNotification(data)
      ]);
      
      // Check if at least one submission succeeded
      const hasSuccess = results.some(result => result.status === 'fulfilled');
      
      if (hasSuccess) {
        this.showSuccessMessage();
        
        // Track successful submission
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit', {
            form_name: this.form.id || 'progressive_form',
            value: 1
          });
        }
      } else {
        throw new Error('All submission methods failed');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      this.showErrorMessage('There was an error submitting your form. Please try again.');
      
      // Restore button
      const submitBtn = this.form.querySelector('[type="submit"]');
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    } finally {
      this.isSubmitting = false;
    }
  }
  
  async submitToFormspree(data) {
    const response = await fetch(this.form.action || '/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Formspree submission failed');
    }
    
    return response.json();
  }
  
  async submitToGoogleSheets(data) {
    // This would be your Google Sheets endpoint
    // For now, just simulate success
    return new Promise(resolve => setTimeout(resolve, 500));
  }
  
  async sendEmailNotification(data) {
    // This would be your email notification endpoint
    // For now, just simulate success
    return new Promise(resolve => setTimeout(resolve, 300));
  }
  
  showSuccessMessage() {
    const successHtml = `
      <div class="form-success-message">
        <div class="success-icon-large">
          <i class="fas fa-check-circle"></i>
        </div>
        <h3>Thank You!</h3>
        <p>Your inquiry has been submitted successfully. Our team will contact you within 24 hours.</p>
        <div class="success-actions">
          <button class="btn-primary-enhanced" onclick="location.reload()">
            <i class="fas fa-plus"></i> Submit Another Inquiry
          </button>
          <a href="/" class="btn-secondary-enhanced">
            <i class="fas fa-home"></i> Return to Home
          </a>
        </div>
      </div>
    `;
    
    this.form.innerHTML = successHtml;
  }
  
  showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error-message';
    errorDiv.innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      <span>${message}</span>
      <button onclick="this.parentNode.remove()" class="error-close">×</button>
    `;
    
    this.form.insertBefore(errorDiv, this.form.firstChild);
    
    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }
}

// Enhanced Viewport Control
class ViewportController {
  constructor() {
    this.init();
  }
  
  init() {
    this.preventZoom();
    this.enforceResponsiveView();
    this.setupEventListeners();
  }
  
  preventZoom() {
    // Disable zoom on iOS Safari
    document.addEventListener('touchstart', (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, { passive: false });
    
    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    }, false);
    
    // Prevent keyboard zoom
    document.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && 
          (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
      }
    });
  }
  
  enforceResponsiveView() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      );
    }
    
    // Reset any existing zoom
    document.body.style.zoom = '1';
    document.documentElement.style.zoom = '1';
  }
  
  setupEventListeners() {
    window.addEventListener('load', () => this.enforceResponsiveView());
    window.addEventListener('resize', () => this.enforceResponsiveView());
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.enforceResponsiveView(), 100);
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Enhanced Form Manager
  window.enhancedFormManager = new EnhancedFormManager();
  
  // Initialize Viewport Controller
  window.viewportController = new ViewportController();
  
  console.log('🎉 Enhanced Form System fully initialized!');
});

// Export for global use
window.EnhancedFormManager = EnhancedFormManager;
window.ProgressiveForm = ProgressiveForm;
window.ViewportController = ViewportController;