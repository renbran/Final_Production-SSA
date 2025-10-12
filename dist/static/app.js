// SCHOLARIX Study Abroad - JavaScript

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const consultationModal = document.getElementById('consultationModal');
const leadForm = document.getElementById('leadForm');

// Progressive Form Functions
window.showStep2 = function() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    
    if (step1 && step2) {
        step1.style.display = 'none';
        step2.style.display = 'block';
    }
};

window.showStep1 = function() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    
    if (step1 && step2) {
        step1.style.display = 'block';
        step2.style.display = 'none';
    }
};

// Country data for destination modals
const destinationData = {
    germany: {
        name: 'Germany',
        flag: '🇩🇪',
        description: 'European leader in engineering and technology education with excellent post-study work opportunities.',
        tuitionRange: '€0 - €3,000',
        livingCost: '€800 - €1,200',
        visaSuccess: '95%',
        workPermit: '18 months post-study',
        programs: [
            'Computer Science & IT',
            'Mechanical Engineering',
            'Business Administration',
            'Data Science & Analytics',
            'Automotive Engineering',
            'Renewable Energy'
        ]
    },
    canada: {
        name: 'Canada',
        flag: '🇨🇦',
        description: 'World-class education system with excellent immigration pathways and multicultural environment.',
        tuitionRange: 'CAD 15,000 - 30,000',
        livingCost: 'CAD 12,000 - 15,000',
        visaSuccess: '85%',
        workPermit: '3 years post-graduation',
        programs: [
            'Software Engineering',
            'Business Analytics',
            'Healthcare Management',
            'Environmental Science',
            'AI & Machine Learning',
            'International Business'
        ]
    },
    uk: {
        name: 'United Kingdom',
        flag: '🇬🇧',
        description: 'World-renowned universities with rich academic heritage and global recognition.',
        tuitionRange: '£10,000 - £38,000',
        livingCost: '£12,000 - £15,000',
        visaSuccess: '88%',
        workPermit: '2 years graduate visa',
        programs: [
            'Computer Science',
            'Business & Management',
            'Engineering',
            'Medicine & Healthcare',
            'Finance & Economics',
            'Creative Arts & Design'
        ]
    },
    ireland: {
        name: 'Ireland',
        flag: '🇮🇪',
        description: 'Tech hub of Europe with friendly culture and EU benefits for international students.',
        tuitionRange: '€9,000 - €25,000',
        livingCost: '€7,000 - €12,000',
        visaSuccess: '90%',
        workPermit: '2 years stay-back visa',
        programs: [
            'Computer Science',
            'Data Analytics',
            'International Business',
            'Pharmaceutical Science',
            'Digital Marketing',
            'Biotechnology'
        ]
    },
    australia: {
        name: 'Australia',
        flag: '🇦🇺',
        description: 'Innovation hub with excellent quality of life and strong industry connections.',
        tuitionRange: 'AUD 20,000 - 45,000',
        livingCost: 'AUD 20,000 - 25,000',
        visaSuccess: '82%',
        workPermit: '2-4 years post-study',
        programs: [
            'Information Technology',
            'Mining Engineering',
            'International Business',
            'Biotechnology',
            'Tourism & Hospitality',
            'Environmental Studies'
        ]
    },
    france: {
        name: 'France',
        flag: '🇫🇷',
        description: 'Low-cost, high-quality education in the heart of Europe with rich cultural heritage.',
        tuitionRange: '€170 - €3,770',
        livingCost: '€600 - €1,000',
        visaSuccess: '87%',
        workPermit: '2 years post-graduation',
        programs: [
            'Engineering',
            'Business Management',
            'Arts & Design',
            'International Relations',
            'Culinary Arts',
            'Fashion & Luxury'
        ]
    }
};

// Destination Modal Functions (for new destination cards)
window.showDestinationModal = function(countryId) {
    try {
        const modal = document.getElementById('country-info-modal');
        const countryData = destinationData[countryId];
        
        if (!modal || !countryData) {
            console.error('Modal or country data not found:', countryId);
            return;
        }

        // Populate modal content
        const modalCountryName = document.getElementById('modal-country-name');
        const modalCountryFlag = document.getElementById('modal-country-flag');
        const modalCountryDescription = document.getElementById('modal-country-description');
        const modalTuitionRange = document.getElementById('modal-tuition-range');
        const modalLivingCost = document.getElementById('modal-living-cost');
        const modalVisaSuccess = document.getElementById('modal-visa-success');
        const modalWorkPermit = document.getElementById('modal-work-permit');
        const modalPrograms = document.getElementById('modal-programs');

        if (modalCountryName) modalCountryName.textContent = countryData.name;
        if (modalCountryFlag) modalCountryFlag.textContent = countryData.flag;
        if (modalCountryDescription) modalCountryDescription.textContent = countryData.description;
        if (modalTuitionRange) modalTuitionRange.textContent = countryData.tuitionRange;
        if (modalLivingCost) modalLivingCost.textContent = countryData.livingCost;
        if (modalVisaSuccess) modalVisaSuccess.textContent = countryData.visaSuccess;
        if (modalWorkPermit) modalWorkPermit.textContent = countryData.workPermit;
        
        // Populate programs list
        if (modalPrograms && countryData.programs) {
            modalPrograms.innerHTML = countryData.programs
                .map(program => `<span class="program-tag">${program}</span>`)
                .join('');
        }

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Initialize close handlers immediately
        initializeModalCloseHandlers();
        
        // Also reinitialize with a delay as backup
        setTimeout(() => {
            initializeModalCloseHandlers();
        }, 100);
        
        // Track event
        if (typeof trackEvent === 'function') {
            trackEvent('destination_modal_opened', {
                country: countryId,
                country_name: countryData.name
            });
        }

    } catch (error) {
        console.error('Error showing destination modal:', error);
        handleError(error, 'showDestinationModal');
    }
};

// Program Inquiry Modal Functions
window.openProgramInquiryModal = function(programId, programName, price, duration, icon, features) {
    try {
        const modal = document.getElementById('program-inquiry-modal');
        if (!modal) {
            console.error('Program inquiry modal not found');
            return;
        }

        // Populate program information
        const titleElement = document.getElementById('program-modal-title');
        const nameElement = document.getElementById('program-name');
        const iconElement = document.getElementById('program-icon');
        const priceElement = document.getElementById('program-price');
        const durationElement = document.getElementById('program-duration');
        const featuresElement = document.getElementById('program-features-display');
        const programInputElement = document.getElementById('inquiry-program');

        if (titleElement) titleElement.textContent = `${programName} - Inquiry`;
        if (nameElement) nameElement.textContent = programName;
        if (iconElement) iconElement.textContent = icon;
        if (priceElement) priceElement.textContent = price;
        if (durationElement) durationElement.textContent = duration;
        if (programInputElement) programInputElement.value = programName;

        // Populate features
        if (featuresElement && features && Array.isArray(features)) {
            featuresElement.innerHTML = features
                .slice(0, 4) // Show only first 4 features
                .map(feature => `<span class="feature-tag"><i class="fas fa-check"></i> ${feature}</span>`)
                .join('');
        }

        // Reset form to first step
        resetProgramInquiryForm();

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Initialize form handlers
        setTimeout(() => {
            initializeProgramInquiryHandlers();
        }, 100);

        // Track event
        if (typeof trackEvent === 'function') {
            trackEvent('program_inquiry_opened', {
                program_id: programId,
                program_name: programName,
                price: price
            });
        }

    } catch (error) {
        console.error('Error showing program inquiry modal:', error);
        handleError(error, 'openProgramInquiryModal');
    }
};

window.closeProgramInquiryModal = function() {
    try {
        const modal = document.getElementById('program-inquiry-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            
            // Reset form
            resetProgramInquiryForm();
        }
    } catch (error) {
        console.error('Error closing program inquiry modal:', error);
    }
};

function resetProgramInquiryForm() {
    try {
        const form = document.getElementById('program-inquiry-form');
        if (form) {
            form.reset();
            
            // Reset to first step
            const steps = form.querySelectorAll('.form-step');
            const indicators = document.querySelectorAll('.step-indicator .step');
            const progressFill = document.querySelector('.progress-fill');
            const nextBtn = document.getElementById('program-form-next');
            const prevBtn = document.getElementById('program-form-prev');
            const submitBtn = document.getElementById('program-form-submit');
            
            steps.forEach((step, index) => {
                step.classList.toggle('active', index === 0);
            });
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === 0);
            });
            
            if (progressFill) progressFill.style.width = '0%';
            if (nextBtn) nextBtn.style.display = 'inline-block';
            if (prevBtn) prevBtn.style.display = 'none';
            if (submitBtn) submitBtn.style.display = 'none';
        }
    } catch (error) {
        console.error('Error resetting program inquiry form:', error);
    }
}

function initializeProgramInquiryHandlers() {
    try {
        const form = document.getElementById('program-inquiry-form');
        const nextBtn = document.getElementById('program-form-next');
        const prevBtn = document.getElementById('program-form-prev');
        const submitBtn = document.getElementById('program-form-submit');
        const modal = document.getElementById('program-inquiry-modal');
        const closeBtn = document.getElementById('program-modal-close-btn');

        if (!form) return;

        // Next button handler
        if (nextBtn) {
            nextBtn.onclick = function() {
                // Validate current step
                const currentStep = form.querySelector('.form-step.active');
                const requiredFields = currentStep.querySelectorAll('input[required], select[required]');
                let isValid = true;

                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        field.classList.add('error');
                        isValid = false;
                    } else {
                        field.classList.remove('error');
                    }
                });

                if (isValid) {
                    goToNextStep();
                } else {
                    showFormError('Please fill in all required fields');
                }
            };
        }

        // Previous button handler
        if (prevBtn) {
            prevBtn.onclick = function() {
                goToPreviousStep();
            };
        }

        // Form submission handler
        if (submitBtn) {
            submitBtn.onclick = function(e) {
                e.preventDefault();
                submitProgramInquiry();
            };
        }

        // Close button handler
        if (closeBtn) {
            closeBtn.onclick = function() {
                closeProgramInquiryModal();
            };
        }

        // Outside click handler
        if (modal) {
            modal.onclick = function(e) {
                if (e.target === modal) {
                    closeProgramInquiryModal();
                }
            };
        }

        // ESC key handler
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeProgramInquiryModal();
            }
        });

    } catch (error) {
        console.error('Error initializing program inquiry handlers:', error);
    }
}

function goToNextStep() {
    try {
        const form = document.getElementById('program-inquiry-form');
        const currentStep = form.querySelector('.form-step.active');
        const nextStep = currentStep.nextElementSibling;
        
        if (nextStep && nextStep.classList.contains('form-step')) {
            currentStep.classList.remove('active');
            nextStep.classList.add('active');
            
            // Update indicators
            const indicators = document.querySelectorAll('.step-indicator .step');
            const progressFill = document.querySelector('.progress-fill');
            const currentStepIndex = parseInt(nextStep.dataset.step) - 1;
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index <= currentStepIndex);
            });
            
            if (progressFill) {
                progressFill.style.width = (currentStepIndex / (indicators.length - 1)) * 100 + '%';
            }
            
            // Update buttons
            const nextBtn = document.getElementById('program-form-next');
            const prevBtn = document.getElementById('program-form-prev');
            const submitBtn = document.getElementById('program-form-submit');
            
            if (nextStep.dataset.step === '2') {
                if (nextBtn) nextBtn.style.display = 'none';
                if (submitBtn) submitBtn.style.display = 'inline-block';
            }
            if (prevBtn) prevBtn.style.display = 'inline-block';
        }
    } catch (error) {
        console.error('Error going to next step:', error);
    }
}

function goToPreviousStep() {
    try {
        const form = document.getElementById('program-inquiry-form');
        const currentStep = form.querySelector('.form-step.active');
        const prevStep = currentStep.previousElementSibling;
        
        if (prevStep && prevStep.classList.contains('form-step')) {
            currentStep.classList.remove('active');
            prevStep.classList.add('active');
            
            // Update indicators
            const indicators = document.querySelectorAll('.step-indicator .step');
            const progressFill = document.querySelector('.progress-fill');
            const currentStepIndex = parseInt(prevStep.dataset.step) - 1;
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index <= currentStepIndex);
            });
            
            if (progressFill) {
                progressFill.style.width = (currentStepIndex / (indicators.length - 1)) * 100 + '%';
            }
            
            // Update buttons
            const nextBtn = document.getElementById('program-form-next');
            const prevBtn = document.getElementById('program-form-prev');
            const submitBtn = document.getElementById('program-form-submit');
            
            if (prevStep.dataset.step === '1') {
                if (prevBtn) prevBtn.style.display = 'none';
            }
            if (nextBtn) nextBtn.style.display = 'inline-block';
            if (submitBtn) submitBtn.style.display = 'none';
        }
    } catch (error) {
        console.error('Error going to previous step:', error);
    }
}

function submitProgramInquiry() {
    try {
        const form = document.getElementById('program-inquiry-form');
        if (!form) return;

        // Validate all required fields
        const requiredFields = form.querySelectorAll('input[required], select[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            } else {
                field.classList.remove('error');
            }
        });

        if (!isValid) {
            showFormError('Please fill in all required fields');
            return;
        }

        // Collect form data
        const formData = new FormData(form);
        const inquiryData = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            program: formData.get('program'),
            educationLevel: formData.get('educationLevel'),
            startDate: formData.get('startDate'),
            message: formData.get('message'),
            inquiryType: 'program',
            timestamp: new Date().toISOString()
        };

        // Show loading state
        const submitBtn = document.getElementById('program-form-submit');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }

        // Submit via existing API endpoint
        submitProgramInquiryToAPI(inquiryData).then(() => {
            showProgramInquirySuccess();
            
            // Track conversion
            if (typeof trackEvent === 'function') {
                trackEvent('program_inquiry_submitted', {
                    program: inquiryData.program,
                    education_level: inquiryData.educationLevel,
                    start_date: inquiryData.startDate
                });
            }
        }).catch(error => {
            console.error('Program inquiry submission error:', error);
            showFormError('Failed to send inquiry. Please try again.');
            
            // Reset button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Inquiry';
            }
        });

    } catch (error) {
        console.error('Error submitting program inquiry:', error);
        showFormError('An error occurred. Please try again.');
    }
}

function showProgramInquirySuccess() {
    try {
        const modal = document.getElementById('program-inquiry-modal');
        const modalBody = modal.querySelector('.modal-body');
        
        if (modalBody) {
            modalBody.innerHTML = `
                <div class="form-success-message">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>Inquiry Sent Successfully!</h3>
                    <p>Thank you for your interest in our programs. Our education consultants will contact you within 24 hours with detailed information.</p>
                    
                    <div class="success-benefits">
                        <div class="benefit-item">
                            <i class="fas fa-user-tie"></i>
                            <span>Personal consultant assigned</span>
                        </div>
                        <div class="benefit-item">
                            <i class="fas fa-file-alt"></i>
                            <span>Detailed program brochure</span>
                        </div>
                        <div class="benefit-item">
                            <i class="fas fa-phone"></i>
                            <span>Free consultation call</span>
                        </div>
                    </div>
                    
                    <div class="success-actions">
                        <button class="btn btn-primary" onclick="closeProgramInquiryModal()">
                            <i class="fas fa-check"></i> Got it!
                        </button>
                        <button class="btn btn-secondary" onclick="window.open('https://wa.me/971501234567', '_blank')">
                            <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                        </button>
                    </div>
                </div>
            `;
        }
        
        // Auto close after 10 seconds
        setTimeout(() => {
            closeProgramInquiryModal();
        }, 10000);
        
    } catch (error) {
        console.error('Error showing success message:', error);
    }
}

function showFormError(message) {
    try {
        // Create or update error message
        let errorElement = document.querySelector('.form-error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.classList.add('form-error-message');
            const form = document.getElementById('program-inquiry-form');
            if (form) {
                form.insertBefore(errorElement, form.firstChild);
            }
        }
        
        errorElement.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            ${message}
        `;
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (errorElement) {
                errorElement.remove();
            }
        }, 5000);
        
    } catch (error) {
        console.error('Error showing form error:', error);
    }
}

// Submit program inquiry to API
async function submitProgramInquiryToAPI(inquiryData) {
    try {
        // Format data for existing API endpoint
        const formattedData = {
            fullName: inquiryData.fullName,
            email: inquiryData.email,
            phone: inquiryData.phone,
            service: 'Program Inquiry',
            studyLevel: inquiryData.educationLevel || 'Not specified',
            timeline: inquiryData.startDate || 'Flexible',
            message: `Program of Interest: ${inquiryData.program}\n\nEducation Level: ${inquiryData.educationLevel || 'Not specified'}\nPreferred Start Date: ${inquiryData.startDate || 'Flexible'}\n\nAdditional Questions:\n${inquiryData.message || 'None'}`,
            source: 'Program Inquiry Modal',
            timestamp: inquiryData.timestamp,
            programSpecific: {
                program: inquiryData.program,
                educationLevel: inquiryData.educationLevel,
                startDate: inquiryData.startDate,
                inquiryType: inquiryData.inquiryType
            }
        };

        const response = await fetch('/api/lead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedData)
        });

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.error || 'Failed to submit inquiry');
        }
        
        return result;
        
    } catch (error) {
        console.error('Program inquiry API error:', error);
        throw error;
    }
}

// Initialize app with enhanced error handling
safeDOMReady(function() {
    // Initialize core functionality with error boundaries
    const initFunctions = [
        { name: 'Navigation', fn: initializeNavigation },
        { name: 'Form Handling', fn: initializeFormHandling },
        { name: 'Scroll Effects', fn: initializeScrollEffects },
        { name: 'Animations', fn: initializeAnimations },
        { name: 'Analytics', fn: initializeAnalytics },
        { name: 'Chatbot', fn: initializeChatbot },
        { name: 'Newsletter', fn: initializeNewsletter },
        { name: 'Browser Extension Compatibility', fn: initializeBrowserExtensionCompatibility },
        { name: 'Performance Monitoring', fn: initializePerformanceMonitoring },
        { name: 'Content Security Policy', fn: enforceCSP }
    ];
    
    initFunctions.forEach(({ name, fn }) => {
        try {
            if (typeof fn === 'function') {
                fn();
                if (typeof console !== 'undefined' && console.log) {
                    console.log(`✅ ${name} initialized successfully`);
                }
            }
        } catch (error) {
            handleError({
                message: error.message,
                filename: 'Initialization',
                lineno: 0,
                error: error
            }, name);
        }
    });
    
    // Initialize animations after DOM is ready
    initializeAnimationSystem();
    
}, 'Main App Initialization');

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Initialize destination modal close functionality with retry
    initializeModalCloseHandlers();
    
    // Set up a retry mechanism in case modal is not ready yet
    setTimeout(initializeModalCloseHandlers, 100);
    setTimeout(initializeModalCloseHandlers, 500);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scrolled');
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Form Handling
function initializeFormHandling() {
    if (leadForm) {
        leadForm.addEventListener('submit', handleFormSubmit);
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(leadForm);
    const submitButton = leadForm.querySelector('button[type="submit"]');
    const buttonText = submitButton.innerHTML;

    // Show loading state
    submitButton.innerHTML = '<span class="spinner"></span> Sending...';
    submitButton.disabled = true;

    // Normalize form data for backward compatibility
    const formObj = Object.fromEntries(formData);
    
    // Handle fullName -> firstName/lastName split for progressive form
    if (formObj.fullName && !formObj.firstName && !formObj.lastName) {
        const nameParts = formObj.fullName.trim().split(' ');
        formObj.firstName = nameParts[0] || '';
        formObj.lastName = nameParts.slice(1).join(' ') || '';
    }
    
    // Map new field names to expected backend fields
    if (formObj.studyLevel && !formObj.service) {
        formObj.service = formObj.studyLevel;
    }
    
    if (formObj.timeline && !formObj.message) {
        formObj.message = `Preferred timeline: ${formObj.timeline}. ${formObj.message || ''}`.trim();
    }

    try {
        const response = await fetch('/api/lead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObj)
        });        const result = await response.json();
        
        if (result.success) {
            showNotification(result.message, 'success');
            
            // Show success state in progressive form
            const step2 = document.getElementById('step2');
            if (step2) {
                step2.innerHTML = `
                    <div class="form-success-message">
                        <i class="fas fa-check-circle"></i>
                        <h3>Thank You!</h3>
                        <p>Your consultation request has been submitted successfully. Our expert counselors will contact you within 24 hours.</p>
                        <div class="success-actions">
                            <a href="tel:+971508908777" class="btn btn-primary">
                                <i class="fas fa-phone"></i> Call Us Now
                            </a>
                            <button type="button" class="btn btn-secondary" onclick="location.reload()">
                                <i class="fas fa-plus"></i> Submit Another Request
                            </button>
                        </div>
                    </div>
                `;
            } else {
                leadForm.reset();
                
                // Show success modal or redirect
                setTimeout(() => {
                    openConsultationModal();
                }, 2000);
            }
            
            // Track conversion
            trackEvent('lead_generated', {
                service: formObj.service || formObj.studyLevel,
                country: formObj.country,
                timeline: formObj.timeline,
                form_type: 'progressive'
            });
            
        } else {
            showNotification(result.message, 'error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Something went wrong. Please try again or contact us directly.', 'error');
    } finally {
        // Reset button
        submitButton.innerHTML = buttonText;
        submitButton.disabled = false;
    }
}

// Modal Functions
function openConsultationModal() {
    if (consultationModal) {
        consultationModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Track modal open
        trackEvent('consultation_modal_opened');
    }
}

function closeConsultationModal() {
    if (consultationModal) {
        consultationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === consultationModal) {
        closeConsultationModal();
    }
});

// Destination Modal
function openDestinationModal(country) {
    const destinations = {
        usa: {
            title: 'Study in United States',
            description: 'Discover world-class education opportunities in the USA with over 500 partner universities.',
            highlights: [
                'Top-ranked universities worldwide',
                'Diverse range of programs',
                'Post-study work opportunities',
                'Scholarships up to 100%',
                'STEM OPT extensions'
            ],
            universities: ['Harvard', 'MIT', 'Stanford', 'Yale', 'Princeton'],
            requirements: 'IELTS 6.5+, TOEFL 90+, SAT/GRE (varies by program)'
        },
        uk: {
            title: 'Study in United Kingdom',
            description: 'Experience prestigious British education with shorter degree programs and rich cultural heritage.',
            highlights: [
                'Shorter degree duration',
                'World-renowned universities',
                'Post-study work visa (2 years)',
                'Research opportunities',
                'Historic and modern campuses'
            ],
            universities: ['Oxford', 'Cambridge', 'Imperial College', 'UCL', 'King\'s College'],
            requirements: 'IELTS 6.0+, UKVI approved tests required'
        },
        canada: {
            title: 'Study in Canada',
            description: 'Enjoy high-quality education in a multicultural environment with excellent immigration pathways.',
            highlights: [
                'High quality of life',
                'Affordable tuition fees',
                'Post-graduation work permit',
                'Immigration-friendly policies',
                'Safe and welcoming environment'
            ],
            universities: ['University of Toronto', 'UBC', 'McGill', 'Waterloo', 'McMaster'],
            requirements: 'IELTS 6.0+, TOEFL 80+, may require additional tests'
        },
        australia: {
            title: 'Study in Australia',
            description: 'Study in a country known for innovation, research excellence, and beautiful landscapes.',
            highlights: [
                'World-class education system',
                'Research and innovation focus',
                'Post-study work rights',
                'Diverse multicultural society',
                'Beautiful climate and lifestyle'
            ],
            universities: ['Melbourne', 'Sydney', 'ANU', 'UNSW', 'Monash'],
            requirements: 'IELTS 6.5+, TOEFL 90+, specific program requirements vary'
        },
        germany: {
            title: 'Study in Germany',
            description: 'Access world-class education with low tuition fees and strong industry connections.',
            highlights: [
                'Low or no tuition fees',
                'Strong engineering programs',
                'Industry partnerships',
                'Post-study job opportunities',
                'Central European location'
            ],
            universities: ['TU Munich', 'Heidelberg', 'Humboldt', 'RWTH Aachen', 'Frankfurt'],
            requirements: 'IELTS 6.0+, German language proficiency for some programs'
        },
        newzealand: {
            title: 'Study in New Zealand',
            description: 'Experience innovative education in stunning natural surroundings with excellent student support.',
            highlights: [
                'Innovative education approach',
                'Small class sizes',
                'Beautiful natural environment',
                'Safe and friendly culture',
                'Post-study work opportunities'
            ],
            universities: ['Auckland', 'Otago', 'Canterbury', 'Victoria Wellington', 'Massey'],
            requirements: 'IELTS 6.0+, TOEFL 80+, specific program requirements'
        }
    };
    
    const destination = destinations[country];
    if (!destination) return;
    
    // Create modal content
    const modalHTML = `
        <div class="modal" id="destinationModal">
            <div class="modal-content" style="max-width: 800px;">
                <span class="close" onclick="closeDestinationModal()">&times;</span>
                <h2>${destination.title}</h2>
                <p>${destination.description}</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
                    <div>
                        <h3>Why Choose ${destination.title.split(' ')[2]}?</h3>
                        <ul style="list-style: none; padding: 0;">
                            ${destination.highlights.map(highlight => 
                                `<li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--accent-color); margin-right: 0.5rem;"></i>${highlight}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div>
                        <h3>Top Universities</h3>
                        <ul style="list-style: none; padding: 0;">
                            ${destination.universities.map(uni => 
                                `<li style="margin-bottom: 0.5rem;"><i class="fas fa-university" style="color: var(--primary-color); margin-right: 0.5rem;"></i>${uni}</li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
                
                <div style="background: var(--neutral-light); padding: 1.5rem; border-radius: 0.5rem; margin: 2rem 0;">
                    <h4>Entry Requirements</h4>
                    <p style="margin: 0;">${destination.requirements}</p>
                </div>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn btn-primary btn-large" onclick="closeDestinationModal(); openConsultationModal();">
                        <i class="fas fa-calendar-alt"></i>
                        Get Personalized Guidance
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.getElementById('destinationModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Track destination interest
    trackEvent('destination_interest', { country: country });
}

// Initialize modal close handlers
function initializeModalCloseHandlers() {
    try {
        const modalCloseBtn = document.getElementById('modal-close-btn');
        const countryModal = document.getElementById('country-info-modal');
        
        // Close button handler with multiple event types
        if (modalCloseBtn && !modalCloseBtn.hasAttribute('data-close-handler-added')) {
            // Add multiple event listeners for reliability
            modalCloseBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeDestinationModal();
            });
            
            modalCloseBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeDestinationModal();
            });
            
            // Also ensure inline onclick works
            modalCloseBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeDestinationModal(); 
                return false;
            };
            
            modalCloseBtn.setAttribute('data-close-handler-added', 'true');
            
            if (typeof console !== 'undefined' && console.log) {
                console.log('✅ Modal close button handlers added (click, touch, inline)');
            }
        }
        
        // Close when clicking outside modal
        if (countryModal && !countryModal.hasAttribute('data-outside-click-handler-added')) {
            countryModal.addEventListener('click', function(e) {
                if (e.target === countryModal) {
                    closeDestinationModal();
                }
            });
            countryModal.setAttribute('data-outside-click-handler-added', 'true');
            
            if (typeof console !== 'undefined' && console.log) {
                console.log('✅ Modal outside click handler added');
            }
        }
        
        // ESC key handler
        if (!document.hasAttribute('data-modal-esc-handler-added')) {
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    const modal = document.getElementById('country-info-modal');
                    if (modal && modal.style.display === 'block') {
                        closeDestinationModal();
                    }
                }
            });
            document.setAttribute('data-modal-esc-handler-added', 'true');
            
            if (typeof console !== 'undefined' && console.log) {
                console.log('✅ Modal ESC key handler added');
            }
        }
        
    } catch (error) {
        if (typeof console !== 'undefined' && console.error) {
            console.error('Error initializing modal close handlers:', error);
        }
        handleError(error, 'initializeModalCloseHandlers');
    }
}

function closeDestinationModal() {
    try {
        if (typeof console !== 'undefined' && console.log) {
            console.log('🔄 closeDestinationModal function called');
        }
        
        const modal = document.getElementById('country-info-modal');
        if (modal) {
            if (typeof console !== 'undefined' && console.log) {
                console.log('✅ Modal found, closing...');
            }
            
            // Add closing animation
            modal.style.opacity = '0';
            modal.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                modal.style.display = 'none';
                modal.style.opacity = '';
                modal.style.transform = '';
            }, 200);
            
            document.body.style.overflow = 'auto'; // Restore scrolling
            
            if (typeof console !== 'undefined' && console.log) {
                console.log('✅ Destination modal closed successfully');
            }
        } else {
            if (typeof console !== 'undefined' && console.warn) {
                console.warn('⚠️ Modal not found');
            }
        }
    } catch (error) {
        if (typeof console !== 'undefined' && console.error) {
            console.error('❌ Error closing destination modal:', error);
        }
        handleError(error, 'closeDestinationModal');
    }
}

// Make sure the function is immediately available
window.closeDestinationModal = closeDestinationModal;

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles if not already added
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 3000;
                max-width: 400px;
                padding: 1rem;
                border-radius: 0.5rem;
                box-shadow: var(--shadow-lg);
                animation: slideInRight 0.3s ease;
            }
            .notification-success {
                background-color: #10b981;
                color: white;
            }
            .notification-error {
                background-color: #ef4444;
                color: white;
            }
            .notification-info {
                background-color: var(--secondary-color);
                color: white;
            }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: currentColor;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Scroll Effects and Animations
function initializeScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .testimonial-card, .destination-card, .section-header').forEach(el => {
        observer.observe(el);
    });
    
    // Counter animation for stats
    animateCounters();
}

function initializeAnimations() {
    // Add CSS for animations
    if (!document.getElementById('animation-styles')) {
        const styles = document.createElement('style');
        styles.id = 'animation-styles';
        styles.textContent = `
            .service-card,
            .testimonial-card,
            .destination-card,
            .section-header {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            .header.scrolled {
                background-color: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                box-shadow: var(--shadow-base);
            }
            
            .header.hidden {
                transform: translateY(-100%);
            }
            
            .nav-menu.active {
                display: flex !important;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: white;
                box-shadow: var(--shadow-lg);
                padding: 1rem;
                gap: 1rem;
            }
            
            .nav-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        `;
        document.head.appendChild(styles);
    }
}

function animateCounters() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number
            let displayValue = Math.floor(current);
            if (stat.textContent.includes('+')) {
                displayValue = displayValue.toLocaleString() + '+';
            } else if (stat.textContent.includes('%')) {
                displayValue = displayValue + '%';
            } else {
                displayValue = displayValue.toLocaleString() + '+';
            }
            
            stat.textContent = displayValue;
        }, 20);
    });
}

// Analytics and Tracking
function initializeAnalytics() {
    // Track page view
    trackEvent('page_view', {
        page: window.location.pathname,
        title: document.title
    });
    
    // Track scroll depth
    let scrollDepth = 0;
    window.addEventListener('scroll', debounce(() => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent > scrollDepth && scrollPercent % 25 === 0) {
            scrollDepth = scrollPercent;
            trackEvent('scroll_depth', { depth: scrollDepth });
        }
    }, 250));
    
    // Track outbound links
    document.querySelectorAll('a[href^="http"], a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('outbound_link_click', {
                url: this.href,
                text: this.textContent.trim()
            });
        });
    });
}

function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Console log for development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Analytics Event:', eventName, parameters);
    }
    
    // You can add other analytics platforms here
    // Facebook Pixel, LinkedIn Insight Tag, etc.
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Chatbot Integration
function openChatbot() {
    // Check if Jotform chatbot is available
    if (typeof window.jfEmbed !== 'undefined') {
        // Trigger Jotform chatbot
        window.jfEmbed.openChat();
    } else {
        // Fallback - scroll to contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Track chatbot interaction
    trackEvent('chatbot_opened', { source: 'button_click' });
}

// Initialize chatbot when page loads
function initializeChatbot() {
    // Add click handler to floating chatbot button
    const chatbotTrigger = document.querySelector('.chatbot-trigger');
    if (chatbotTrigger) {
        chatbotTrigger.addEventListener('click', openChatbot);
    }
    
    // Track chatbot availability
    setTimeout(() => {
        if (typeof window.jfEmbed !== 'undefined') {
            trackEvent('chatbot_loaded', { status: 'success' });
        } else {
            trackEvent('chatbot_loaded', { status: 'fallback' });
        }
    }, 2000);
}

// Email Integration (for newsletter signup, etc.)
function subscribeNewsletter(email) {
    // This would integrate with your email marketing platform
    // MailChimp, ConvertKit, etc.
    
    trackEvent('newsletter_signup', { email_domain: email.split('@')[1] });
    
    // Placeholder implementation
    showNotification('Thank you for subscribing! You\'ll receive study abroad tips and updates.', 'success');
}

// Lead Scoring (for CRM integration)
function calculateLeadScore(formData) {
    let score = 0;
    
    // Country interest scoring
    const highValueCountries = ['usa', 'uk', 'canada', 'australia'];
    if (highValueCountries.includes(formData.country)) score += 20;
    
    // Service interest scoring
    const highValueServices = ['complete', 'admission', 'visa'];
    if (highValueServices.includes(formData.service)) score += 15;
    
    // Engagement scoring (if they filled optional fields)
    if (formData.message && formData.message.length > 50) score += 10;
    
    return score;
}

// Search Functionality (if needed for blog/resources)
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length > 2) {
                // Implement search logic here
                // This could search through blog posts, FAQs, etc.
                performSearch(query);
            } else {
                if (searchResults) searchResults.innerHTML = '';
            }
        }, 300));
    }
}

function performSearch(query) {
    // Implement search functionality
    // This would typically query your content API or search index
    
    trackEvent('search', { query: query });
    
    // Placeholder implementation
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.innerHTML = `
            <div class="search-result">
                <h4>Search Results for "${query}"</h4>
                <p>Search functionality will be implemented with your content management system.</p>
            </div>
        `;
    }
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modals
    if (e.key === 'Escape') {
        closeConsultationModal();
        closeDestinationModal();
    }
    
    // Ctrl/Cmd + K for search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.focus();
    }
});

// Performance Monitoring
window.addEventListener('load', function() {
    // Track page load performance
    if ('performance' in window) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        trackEvent('page_load_time', { load_time: loadTime });
    }
});

// Enhanced Error Handling with Deduplication
let errorCache = new Map();
let errorCount = 0;
const MAX_ERRORS = 10;

function handleError(error, context = '') {
    const errorKey = `${error.message}-${error.filename}-${error.lineno}`;
    const now = Date.now();
    
    // Deduplicate errors (only log if not seen in last 5 seconds)
    if (errorCache.has(errorKey)) {
        const lastTime = errorCache.get(errorKey);
        if (now - lastTime < 5000) {
            return; // Skip duplicate error
        }
    }
    
    errorCache.set(errorKey, now);
    errorCount++;
    
    // Prevent error spam
    if (errorCount > MAX_ERRORS) {
        console.warn('Too many errors detected, suppressing further error logs');
        return;
    }
    
    // Enhanced error logging
    console.group(`🚨 JavaScript Error ${context ? `[${context}]` : ''}`);
    console.error('Message:', error.message);
    console.error('File:', error.filename);
    console.error('Line:', error.lineno);
    console.error('Stack:', error.error?.stack);
    console.groupEnd();
    
    // Track errors for monitoring
    trackEvent('javascript_error', {
        message: error.message,
        filename: error.filename,
        line: error.lineno,
        context: context,
        timestamp: now
    });
    
    // Clean old errors from cache
    if (errorCache.size > 50) {
        const oldestTime = now - 60000; // 1 minute
        for (let [key, time] of errorCache) {
            if (time < oldestTime) {
                errorCache.delete(key);
            }
        }
    }
}

// Global error handler
window.addEventListener('error', function(e) {
    handleError(e, 'Global');
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
    handleError({
        message: e.reason?.message || 'Unhandled Promise Rejection',
        filename: 'Promise',
        lineno: 0,
        error: e.reason
    }, 'Promise');
});

// Safe MutationObserver utility
function createSafeMutationObserver(callback, options = {}) {
    return {
        observe: function(target, config) {
            try {
                // Validate target exists and is a valid DOM node
                if (!target) {
                    console.warn('MutationObserver: Target is null or undefined');
                    return null;
                }
                
                if (!(target instanceof Node)) {
                    console.warn('MutationObserver: Target is not a valid DOM Node', target);
                    return null;
                }
                
                // Create observer with error handling
                const observer = new MutationObserver(function(mutations, obs) {
                    try {
                        callback(mutations, obs);
                    } catch (error) {
                        handleError({
                            message: error.message,
                            filename: 'MutationObserver',
                            lineno: 0,
                            error: error
                        }, 'MutationObserver Callback');
                    }
                });
                
                // Observe with default config
                const defaultConfig = {
                    childList: true,
                    subtree: true,
                    attributes: false,
                    ...config
                };
                
                observer.observe(target, defaultConfig);
                return observer;
                
            } catch (error) {
                handleError({
                    message: error.message,
                    filename: 'MutationObserver',
                    lineno: 0,
                    error: error
                }, 'MutationObserver Creation');
                return null;
            }
        }
    };
}

// DOM Ready utility with error handling
function safeDOMReady(callback, context = '') {
    try {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                try {
                    callback();
                } catch (error) {
                    handleError({
                        message: error.message,
                        filename: 'DOMReady',
                        lineno: 0,
                        error: error
                    }, context);
                }
            });
        } else {
            callback();
        }
    } catch (error) {
        handleError({
            message: error.message,
            filename: 'DOMReady',
            lineno: 0,
            error: error
        }, context);
    }
}

// Safe element query with retry mechanism
function safeQuerySelector(selector, retries = 3, delay = 100) {
    return new Promise((resolve) => {
        function attempt(remainingRetries) {
            try {
                const element = document.querySelector(selector);
                if (element && element instanceof Node) {
                    resolve(element);
                    return;
                }
                
                if (remainingRetries > 0) {
                    setTimeout(() => attempt(remainingRetries - 1), delay);
                } else {
                    console.warn(`Element not found after ${retries} attempts: ${selector}`);
                    resolve(null);
                }
            } catch (error) {
                handleError({
                    message: error.message,
                    filename: 'SafeQuery',
                    lineno: 0,
                    error: error
                }, 'Element Query');
                resolve(null);
            }
        }
        attempt(retries);
    });
}

// Newsletter Subscription
function initializeNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[name="email"]');
            const submitBtn = this.querySelector('.newsletter-btn');
            const email = emailInput.value.trim();
            
            if (!email || !isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            try {
                // Simulate API call (replace with actual newsletter service)
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Success
                showNotification('Thank you for subscribing! You\'ll receive study abroad tips and updates.', 'success');
                emailInput.value = '';
                
                // Track subscription
                trackEvent('newsletter_subscription', { email: email });
                
            } catch (error) {
                console.error('Newsletter subscription error:', error);
                showNotification('Something went wrong. Please try again later.', 'error');
            } finally {
                // Reset button
                submitBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
                submitBtn.disabled = false;
            }
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Browser Extension Compatibility
function initializeBrowserExtensionCompatibility() {
    // Detect common browser extensions that might interfere
    const extensionMarkers = [
        'data-odoo-debug',
        'data-chrome-extension',
        'data-firefox-addon',
        '__REACT_DEVTOOLS_GLOBAL_HOOK__',
        '__VUE_DEVTOOLS_GLOBAL_HOOK__'
    ];
    
    // Check for extension markers
    extensionMarkers.forEach(marker => {
        if (document.body.hasAttribute && document.body.hasAttribute(marker)) {
            console.info(`🔧 Detected browser extension marker: ${marker}`);
        }
        if (window[marker]) {
            console.info(`🔧 Detected browser extension global: ${marker}`);
        }
    });
    
    // Protect critical functions from extension interference
    const criticalFunctions = [
        'openConsultationModal',
        'closeConsultationModal',
        'trackEvent',
        'showNotification'
    ];
    
    criticalFunctions.forEach(fnName => {
        if (window[fnName]) {
            const original = window[fnName];
            window[fnName] = function(...args) {
                try {
                    return original.apply(this, args);
                } catch (error) {
                    handleError({
                        message: error.message,
                        filename: 'Extension Protected Function',
                        lineno: 0,
                        error: error
                    }, `Protected Function: ${fnName}`);
                    
                    // Provide fallback behavior
                    if (fnName === 'showNotification') {
                        console.warn('Notification system unavailable due to extension conflict');
                    }
                }
            };
        }
    });
    
    // Monitor for DOM modifications by extensions
    if (typeof MutationObserver !== 'undefined') {
        const extensionObserver = createSafeMutationObserver(function(mutations) {
            mutations.forEach(mutation => {
                if (mutation.addedNodes) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Check for common extension injected elements
                            if (node.classList && (
                                node.classList.contains('react-extension') ||
                                node.classList.contains('vue-devtools') ||
                                node.classList.contains('chrome-extension')
                            )) {
                                console.info('🔧 Browser extension DOM modification detected');
                            }
                        }
                    });
                }
            });
        });
        
        if (extensionObserver) {
            extensionObserver.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['data-*', 'class']
            });
        }
    }
}

// Performance monitoring
function initializePerformanceMonitoring() {
    if ('performance' in window && 'PerformanceObserver' in window) {
        try {
            // Monitor Long Tasks
            const longTaskObserver = new PerformanceObserver(function(list) {
                list.getEntries().forEach(entry => {
                    if (entry.duration > 50) { // Tasks longer than 50ms
                        trackEvent('performance_long_task', {
                            duration: entry.duration,
                            startTime: entry.startTime
                        });
                    }
                });
            });
            longTaskObserver.observe({ entryTypes: ['longtask'] });
            
            // Monitor Layout Shifts
            const clsObserver = new PerformanceObserver(function(list) {
                let clsValue = 0;
                list.getEntries().forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });
                if (clsValue > 0.1) { // CLS threshold
                    trackEvent('performance_layout_shift', { cls: clsValue });
                }
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
            
        } catch (error) {
            handleError({
                message: error.message,
                filename: 'Performance Monitoring',
                lineno: 0,
                error: error
            }, 'Performance Observer');
        }
    }
}

// Content Security Policy helper
function enforceCSP() {
    // Report CSP violations
    document.addEventListener('securitypolicyviolation', function(e) {
        handleError({
            message: `CSP Violation: ${e.violatedDirective}`,
            filename: e.sourceFile || 'Unknown',
            lineno: e.lineNumber || 0,
            error: new Error(e.originalPolicy)
        }, 'CSP Violation');
        
        trackEvent('security_csp_violation', {
            directive: e.violatedDirective,
            blockedURI: e.blockedURI,
            sourceFile: e.sourceFile
        });
    });
}

// Test Prep Show More/Less Toggle
function toggleTestPrepCourses() {
    try {
        const hiddenCourses = document.querySelectorAll('.test-prep-hidden');
        const showMoreBtn = document.getElementById('showMoreTestPrep');
        
        if (!showMoreBtn) return;
        
        const isExpanded = showMoreBtn.getAttribute('data-expanded') === 'true';
        
        hiddenCourses.forEach(course => {
            if (isExpanded) {
                course.style.display = 'none';
                course.classList.remove('animate-on-scroll');
            } else {
                course.style.display = 'block';
                course.classList.add('animate-on-scroll');
                // Trigger animation if AOS is available
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            }
        });
        
        // Update button text and state
        if (isExpanded) {
            showMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Show More Courses';
            showMoreBtn.setAttribute('data-expanded', 'false');
        } else {
            showMoreBtn.innerHTML = '<i class="fas fa-minus"></i> Show Less Courses';
            showMoreBtn.setAttribute('data-expanded', 'true');
        }
        
        // Track the interaction
        trackEvent('test_prep_toggle', {
            action: isExpanded ? 'collapse' : 'expand',
            visible_courses: isExpanded ? 3 : 4
        });
        
    } catch (error) {
        handleError(error, 'toggleTestPrepCourses');
    }
}

// Animation System Initialization
function initializeAnimationSystem() {
    try {
        // Initialize scroll-triggered animations
        initializeScrollAnimations();
        
        // Initialize button animations
        initializeButtonAnimations();
        
        // Initialize form animations
        initializeFormAnimations();
        
        if (typeof console !== 'undefined' && console.log) {
            console.log('✅ Animation system initialized');
        }
    } catch (error) {
        handleError(error, 'initializeAnimationSystem');
    }
}

// Scroll-based animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        animatedElements.forEach(el => el.classList.add('animated'));
    }
}

// Button hover and click animations
function initializeButtonAnimations() {
    const buttons = document.querySelectorAll('.btn, button');
    
    buttons.forEach(button => {
        if (!button.hasAttribute('data-animation-initialized')) {
            button.addEventListener('mousedown', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = '';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
            
            button.setAttribute('data-animation-initialized', 'true');
        }
    });
}

// Form field animations
function initializeFormAnimations() {
    const formFields = document.querySelectorAll('input, textarea, select');
    
    formFields.forEach(field => {
        if (!field.hasAttribute('data-animation-initialized')) {
            field.addEventListener('focus', function() {
                this.parentNode.classList.add('focused');
            });
            
            field.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentNode.classList.remove('focused');
                }
            });
            
            // Check if field has value on load
            if (field.value) {
                field.parentNode.classList.add('focused');
            }
            
            field.setAttribute('data-animation-initialized', 'true');
        }
    });
}

// Export functions for global use
window.openConsultationModal = openConsultationModal;
window.closeConsultationModal = closeConsultationModal;
window.openDestinationModal = openDestinationModal;
window.closeDestinationModal = closeDestinationModal;
window.openChatbot = openChatbot;
window.trackEvent = trackEvent;
window.initializeNewsletter = initializeNewsletter;
window.showNotification = showNotification;
window.safeDOMReady = safeDOMReady;
window.safeQuerySelector = safeQuerySelector;
window.createSafeMutationObserver = createSafeMutationObserver;
window.handleError = handleError;
window.toggleTestPrepCourses = toggleTestPrepCourses;
window.initializeAnimationSystem = initializeAnimationSystem;