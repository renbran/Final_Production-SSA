// AI Course Finder - USP Feature for SCHOLARIX
(function() {
  'use strict';

  // Initialize Course Finder
  function initCourseFinder() {
    const finderForm = document.getElementById('courseFinderForm');
    if (!finderForm) return;

    finderForm.addEventListener('submit', handleCourseSearch);

    // Add interactive hints
    addInteractiveHints();
  }

  // Handle course search submission
  function handleCourseSearch(e) {
    e.preventDefault();

    const formData = {
      studyField: document.getElementById('studyField').value,
      studyLevel: document.getElementById('studyLevel').value,
      budget: document.getElementById('budget').value,
      country: document.getElementById('preferredCountry').value,
      intake: document.getElementById('intake').value
    };

    // Show loading state
    showLoadingState();

    // Simulate AI processing (replace with actual API call)
    setTimeout(() => {
      const results = generateCourseResults(formData);
      displayResults(results);
    }, 1500);
  }

  // Generate course results based on form data
  function generateCourseResults(data) {
    const courses = {
      'Computer Science': {
        'Germany': [
          { name: 'M.Sc. Computer Science', uni: 'Technical University of Munich', tuition: '€0 - €500/semester', duration: '2 years' },
          { name: 'M.Sc. Software Engineering', uni: 'RWTH Aachen University', tuition: '€0 - €350/semester', duration: '2 years' },
          { name: 'M.Sc. Data Science', uni: 'University of Stuttgart', tuition: '€0 - €300/semester', duration: '2 years' }
        ],
        'France': [
          { name: 'Master in Computer Science', uni: 'Université Paris-Saclay', tuition: '€3,770/year', duration: '2 years' },
          { name: 'M.Sc. AI & Data Science', uni: 'École Polytechnique', tuition: '€12,000/year', duration: '2 years' }
        ],
        'Ireland': [
          { name: 'M.Sc. Computer Science', uni: 'Trinity College Dublin', tuition: '€18,000/year', duration: '1 year' },
          { name: 'M.Sc. Data Analytics', uni: 'University College Dublin', tuition: '€16,500/year', duration: '1 year' }
        ]
      },
      'Business Management': {
        'Germany': [
          { name: 'MBA', uni: 'ESMT Berlin', tuition: '€36,000 (total)', duration: '1 year' },
          { name: 'M.Sc. Management', uni: 'WHU Otto Beisheim', tuition: '€30,000/year', duration: '2 years' }
        ],
        'France': [
          { name: 'Master in Management', uni: 'HEC Paris', tuition: '€45,000/year', duration: '2 years' },
          { name: 'MBA', uni: 'INSEAD', tuition: '€89,000 (total)', duration: '1 year' }
        ],
        'UK': [
          { name: 'MSc Management', uni: 'London Business School', tuition: '£38,000/year', duration: '1 year' },
          { name: 'MBA', uni: 'Warwick Business School', tuition: '£41,000/year', duration: '1 year' }
        ]
      },
      'Engineering': {
        'Germany': [
          { name: 'M.Sc. Mechanical Engineering', uni: 'TU Berlin', tuition: '€0 - €300/semester', duration: '2 years' },
          { name: 'M.Sc. Automotive Engineering', uni: 'University of Stuttgart', tuition: '€0 - €350/semester', duration: '2 years' }
        ],
        'Ireland': [
          { name: 'M.Eng. Civil Engineering', uni: 'University College Cork', tuition: '€17,000/year', duration: '1.5 years' }
        ],
        'Canada': [
          { name: 'M.Eng. Electrical Engineering', uni: 'University of Waterloo', tuition: 'CAD $15,000/year', duration: '2 years' }
        ]
      }
    };

    const field = data.studyField || 'Computer Science';
    const country = data.country || 'Germany';
    
    let results = courses[field]?.[country] || courses['Computer Science']['Germany'];
    
    return results;
  }

  // Display search results
  function displayResults(results) {
    const resultsContainer = document.getElementById('courseResults');
    const loadingIndicator = document.getElementById('finderLoading');

    loadingIndicator.style.display = 'none';
    resultsContainer.style.display = 'block';

    const resultsHTML = `
      <div class="course-results-header">
        <h3><i class="fas fa-graduation-cap"></i> We found ${results.length} matching programs for you!</h3>
        <p>Based on your preferences, here are the best-fit courses:</p>
      </div>
      <div class="course-results-grid">
        ${results.map(course => `
          <div class="course-result-card">
            <div class="course-badge">Recommended</div>
            <h4>${course.name}</h4>
            <div class="course-uni">
              <i class="fas fa-university"></i>
              ${course.uni}
            </div>
            <div class="course-details">
              <div class="course-detail">
                <i class="fas fa-euro-sign"></i>
                <span>${course.tuition}</span>
              </div>
              <div class="course-detail">
                <i class="fas fa-clock"></i>
                <span>${course.duration}</span>
              </div>
            </div>
            <button class="btn btn-primary btn-small" onclick="requestCourseInfo('${course.name}', '${course.uni}')">
              <i class="fas fa-info-circle"></i> Get Details
            </button>
          </div>
        `).join('')}
      </div>
      <div class="course-results-cta">
        <p><strong>Want personalized guidance?</strong> Our experts can help you choose the perfect program!</p>
        <button class="btn btn-accent btn-large" onclick="openConsultationModal()">
          <i class="fas fa-comments"></i> Talk to Our Experts
        </button>
      </div>
    `;

    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Show loading state
  function showLoadingState() {
    const resultsContainer = document.getElementById('courseResults');
    const loadingIndicator = document.getElementById('finderLoading');

    resultsContainer.style.display = 'none';
    loadingIndicator.style.display = 'block';
  }

  // Add interactive hints
  function addInteractiveHints() {
    const selects = document.querySelectorAll('#courseFinderForm select');
    selects.forEach(select => {
      select.addEventListener('change', function() {
        this.classList.add('selected');
      });
    });
  }

  // Request course information (triggers chatbot or form)
  window.requestCourseInfo = function(courseName, university) {
    // Open chatbot with pre-filled message
    if (typeof openChatbot === 'function') {
      openChatbot();
      // You can integrate with your chatbot API to pre-fill the message
      console.log(`User interested in: ${courseName} at ${university}`);
    } else {
      // Fallback to consultation modal
      openConsultationModal();
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCourseFinder);
  } else {
    initCourseFinder();
  }

})();
