/* ========================================
   MOBILE CONTACT FORM JAVASCRIPT
   ======================================== */

(function() {
    'use strict';

    // Mobile form functionality
    class MobileContactForm {
        constructor() {
            this.currentStep = 1;
            this.form = null;
            this.steps = null;
            this.init();
        }

        init() {
            this.bindElements();
            this.bindEvents();
            this.setupValidation();
            this.setupProgressTracking();
        }

        bindElements() {
            this.form = document.getElementById('mobileLeadForm');
            this.steps = {
                step1: document.getElementById('mobileStep1'),
                step2: document.getElementById('mobileStep2')
            };
            
            this.buttons = {
                next: document.querySelector('.mobile-next-btn'),
                back: document.querySelector('.mobile-back-btn'),
                submit: document.querySelector('.mobile-submit-btn')
            };

            this.inputs = {
                fullName: document.querySelector('[name="fullName"]'),
                email: document.querySelector('[name="email"]'),
                phone: document.querySelector('[name="phone"]'),
                countryCode: document.querySelector('[name="countryCode"]'),
                destination: document.querySelector('[name="destination"]'),
                studyLevel: document.querySelector('[name="studyLevel"]'),
                timeline: document.querySelector('[name="timeline"]'),
                message: document.querySelector('[name="message"]')
            };
        }

        bindEvents() {
            // Make sure functions are globally accessible for onclick handlers
            window.showMobileStep2 = () => this.showStep2();
            window.showMobileStep1 = () => this.showStep1();

            // Form submission
            if (this.form) {
                this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            }

            // Input validation on blur
            Object.values(this.inputs).forEach(input => {
                if (input) {
                    input.addEventListener('blur', () => this.validateField(input));
                    input.addEventListener('input', () => this.clearFieldError(input));
                }
            });

            // Phone number formatting
            if (this.inputs.phone) {
                this.inputs.phone.addEventListener('input', (e) => this.formatPhoneNumber(e));
            }

            // Enhanced mobile interactions
            this.setupTouchInteractions();
        }

        setupValidation() {
            this.validators = {
                fullName: (value) => {
                    if (!value || value.trim().length < 2) {
                        return 'Please enter your full name (at least 2 characters)';
                    }
                    if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
                        return 'Please enter a valid name (letters only)';
                    }
                    return null;
                },

                email: (value) => {
                    if (!value || !value.trim()) {
                        return 'Email address is required';
                    }
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value.trim())) {
                        return 'Please enter a valid email address';
                    }
                    return null;
                },

                phone: (value) => {
                    if (!value || !value.trim()) {
                        return 'Phone number is required';
                    }
                    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
                    if (!phoneRegex.test(value.trim()) || value.trim().length < 8) {
                        return 'Please enter a valid phone number';
                    }
                    return null;
                },

                destination: (value) => {
                    if (!value) {
                        return 'Please select your preferred destination';
                    }
                    return null;
                },

                studyLevel: (value) => {
                    if (!value) {
                        return 'Please select your study level';
                    }
                    return null;
                },

                timeline: (value) => {
                    if (!value) {
                        return 'Please select when you want to start';
                    }
                    return null;
                }
            };
        }

        setupProgressTracking() {
            // Track form interaction for analytics
            this.trackEvent('form_started', { step: 1 });
            
            // Auto-save form data to localStorage
            this.loadSavedData();
            this.setupAutoSave();
        }

        showStep2() {
            if (!this.validateStep1()) {
                return;
            }

            this.currentStep = 2;
            this.steps.step1.style.display = 'none';
            this.steps.step2.style.display = 'block';
            
            // Update step indicators
            this.updateStepIndicators();
            
            // Smooth scroll to form
            this.scrollToForm();
            
            // Track progress
            this.trackEvent('form_step_2_reached', { step: 2 });
            
            // Focus first field in step 2
            setTimeout(() => {
                if (this.inputs.destination) {
                    this.inputs.destination.focus();
                }
            }, 300);
        }

        showStep1() {
            this.currentStep = 1;
            this.steps.step2.style.display = 'none';
            this.steps.step1.style.display = 'block';
            
            // Update step indicators
            this.updateStepIndicators();
            
            // Smooth scroll to form
            this.scrollToForm();
        }

        updateStepIndicators() {
            const step1Indicator = document.querySelector('.step-number:first-child');
            const step2Indicator = document.querySelector('.step-number:last-child');
            const divider = document.querySelector('.step-divider');

            if (this.currentStep === 1) {
                step1Indicator?.classList.add('active');
                step1Indicator?.classList.remove('completed');
                step2Indicator?.classList.remove('active');
                divider?.classList.remove('active');
            } else {
                step1Indicator?.classList.remove('active');
                step1Indicator?.classList.add('completed');
                step2Indicator?.classList.add('active');
                divider?.classList.add('active');
            }
        }

        validateStep1() {
            const fields = ['fullName', 'email', 'phone'];
            let isValid = true;

            fields.forEach(fieldName => {
                const field = this.inputs[fieldName];
                if (field && !this.validateField(field)) {
                    isValid = false;
                }
            });

            // Show error message if validation fails
            if (!isValid) {
                this.showNotification('Please fill in all required fields correctly', 'error');
            }

            return isValid;
        }

        validateField(field) {
            const fieldName = field.name;
            const validator = this.validators[fieldName];
            
            if (!validator) return true;

            const error = validator(field.value);
            
            if (error) {
                this.showFieldError(field, error);
                return false;
            } else {
                this.clearFieldError(field);
                return true;
            }
        }

        showFieldError(field, message) {
            field.classList.add('error');
            field.classList.remove('success');
            
            // Remove existing error message
            const existingError = field.parentNode.querySelector('.field-error');
            if (existingError) {
                existingError.remove();
            }
            
            // Add error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.style.cssText = `
                color: #ef4444;
                font-size: 12px;
                margin-top: 4px;
                font-weight: 500;
            `;
            errorDiv.textContent = message;
            field.parentNode.appendChild(errorDiv);
        }

        clearFieldError(field) {
            field.classList.remove('error');
            field.classList.add('success');
            
            const errorDiv = field.parentNode.querySelector('.field-error');
            if (errorDiv) {
                errorDiv.remove();
            }
        }

        formatPhoneNumber(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Format based on country code
            const countryCode = this.inputs.countryCode?.value || '+971';
            
            if (countryCode === '+971') {
                // UAE format: 50 123 4567
                if (value.length >= 2) {
                    value = value.substring(0, 2) + ' ' + value.substring(2);
                }
                if (value.length >= 6) {
                    value = value.substring(0, 6) + ' ' + value.substring(6, 10);
                }
            } else if (countryCode === '+1') {
                // US format: (123) 456-7890
                if (value.length >= 6) {
                    value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6, 10)}`;
                } else if (value.length >= 3) {
                    value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
                }
            }
            
            e.target.value = value;
        }

        handleSubmit(e) {
            e.preventDefault();
            
            // Validate all fields
            if (!this.validateAllFields()) {
                return;
            }

            // Show loading state
            this.setSubmitLoading(true);
            
            // Prepare form data
            const formData = new FormData(this.form);
            
            // Add additional tracking data
            formData.append('source', 'mobile_form');
            formData.append('step_completed', '2');
            formData.append('timestamp', new Date().toISOString());
            
            // Submit form
            this.submitForm(formData);
        }

        validateAllFields() {
            const requiredFields = ['fullName', 'email', 'phone', 'destination', 'studyLevel', 'timeline'];
            let isValid = true;

            requiredFields.forEach(fieldName => {
                const field = this.inputs[fieldName];
                if (field && !this.validateField(field)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                this.showNotification('Please fill in all required fields correctly', 'error');
                // Go back to first step if there are errors there
                const step1Fields = ['fullName', 'email', 'phone'];
                const hasStep1Errors = step1Fields.some(fieldName => {
                    const field = this.inputs[fieldName];
                    return field && field.classList.contains('error');
                });
                
                if (hasStep1Errors) {
                    this.showStep1();
                }
            }

            return isValid;
        }

        async submitForm(formData) {
            try {
                const response = await fetch(this.form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    this.handleSubmitSuccess();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                this.handleSubmitError(error);
            } finally {
                this.setSubmitLoading(false);
            }
        }

        handleSubmitSuccess() {
            // Clear saved data
            localStorage.removeItem('scholarix_mobile_form_data');
            
            // Track success
            this.trackEvent('form_submitted_success', { 
                step: 2,
                method: 'mobile_form'
            });
            
            // Show success message
            this.showSuccessMessage();
            
            // Redirect after delay
            setTimeout(() => {
                window.location.href = '/thank-you';
            }, 2000);
        }

        handleSubmitError(error) {
            this.showNotification('Something went wrong. Please try again or contact us directly.', 'error');
            
            // Track error
            this.trackEvent('form_submit_error', { 
                error: error.message,
                step: 2 
            });
        }

        showSuccessMessage() {
            const successHtml = `
                <div class="mobile-success-message" style="
                    text-align: center;
                    padding: 40px 20px;
                    background: linear-gradient(135deg, #10b981, #059669);
                    color: white;
                    border-radius: 16px;
                    margin: 20px 0;
                ">
                    <div style="font-size: 48px; margin-bottom: 16px;">🎉</div>
                    <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 12px;">
                        Thank You!
                    </h3>
                    <p style="font-size: 16px; opacity: 0.9; margin-bottom: 20px;">
                        Your consultation request has been submitted successfully.
                    </p>
                    <p style="font-size: 14px; opacity: 0.8;">
                        Our experts will contact you within 24 hours.
                    </p>
                </div>
            `;
            
            this.steps.step2.innerHTML = successHtml;
        }

        setSubmitLoading(loading) {
            const submitBtn = this.buttons.submit;
            if (!submitBtn) return;

            if (loading) {
                submitBtn.classList.add('loading');
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <i class="fas fa-spinner fa-spin"></i>
                    <span>Submitting...</span>
                `;
            } else {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.innerHTML = `
                    <i class="fas fa-paper-plane"></i>
                    <span>Get Free Consultation</span>
                `;
            }
        }

        showNotification(message, type = 'info') {
            // Remove existing notifications
            const existing = document.querySelector('.mobile-notification');
            if (existing) {
                existing.remove();
            }

            const notification = document.createElement('div');
            notification.className = `mobile-notification mobile-notification-${type}`;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1000;
                padding: 16px 24px;
                border-radius: 12px;
                font-weight: 600;
                font-size: 14px;
                max-width: 90%;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                animation: slideInDown 0.3s ease;
                ${type === 'error' 
                    ? 'background: #fef2f2; color: #dc2626; border: 1px solid #fecaca;'
                    : 'background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0;'
                }
            `;
            notification.textContent = message;

            document.body.appendChild(notification);

            // Auto remove after 5 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.animation = 'slideOutUp 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }
            }, 5000);
        }

        setupAutoSave() {
            // Save form data every 30 seconds
            setInterval(() => {
                this.saveFormData();
            }, 30000);

            // Save when user leaves page
            window.addEventListener('beforeunload', () => {
                this.saveFormData();
            });
        }

        saveFormData() {
            const data = {};
            Object.entries(this.inputs).forEach(([key, input]) => {
                if (input && input.value) {
                    data[key] = input.value;
                }
            });
            
            if (Object.keys(data).length > 0) {
                localStorage.setItem('scholarix_mobile_form_data', JSON.stringify(data));
            }
        }

        loadSavedData() {
            const savedData = localStorage.getItem('scholarix_mobile_form_data');
            if (savedData) {
                try {
                    const data = JSON.parse(savedData);
                    Object.entries(data).forEach(([key, value]) => {
                        const input = this.inputs[key];
                        if (input) {
                            input.value = value;
                        }
                    });
                } catch (error) {
                    console.error('Error loading saved form data:', error);
                }
            }
        }

        setupTouchInteractions() {
            // Add touch-friendly interactions
            const touchElements = document.querySelectorAll('.mobile-contact-item');
            
            touchElements.forEach(element => {
                element.addEventListener('touchstart', () => {
                    element.style.transform = 'scale(0.98)';
                });
                
                element.addEventListener('touchend', () => {
                    element.style.transform = '';
                });
            });
        }

        scrollToForm() {
            const formSection = document.getElementById('contact-form');
            if (formSection) {
                formSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }

        trackEvent(eventName, properties = {}) {
            // Track with Google Analytics if available
            if (typeof gtag !== 'undefined') {
                gtag('event', eventName, {
                    ...properties,
                    event_category: 'mobile_form',
                    event_label: 'contact_form'
                });
            }

            // Track with custom analytics
            if (window.scholarixAnalytics) {
                window.scholarixAnalytics.track(eventName, properties);
            }

            console.log('Event tracked:', eventName, properties);
        }
    }

    // Animation styles
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        @keyframes slideInDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
        
        @keyframes slideOutUp {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
        }
    `;
    document.head.appendChild(animationStyles);

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new MobileContactForm();
        });
    } else {
        new MobileContactForm();
    }

})();