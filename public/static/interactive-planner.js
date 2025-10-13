// ===== INTERACTIVE PLANNER FUNCTIONALITY =====

// Program Finder Data
const programRecommendations = {
  engineering: {
    germany: { programs: "Computer Science, Mechanical Engineering", cost: "€0-500/year", scholarships: "DAAD Scholarships" },
    canada: { programs: "Software Engineering, Electrical Engineering", cost: "CAD 25,000-40,000/year", scholarships: "Ontario Graduate Scholarships" },
    uk: { programs: "Artificial Intelligence, Robotics", cost: "£22,000-35,000/year", scholarships: "Chevening Scholarships" }
  },
  business: {
    germany: { programs: "MBA, International Business", cost: "€0-20,000/year", scholarships: "Deutschlandstipendium" },
    canada: { programs: "MBA, Business Analytics", cost: "CAD 30,000-80,000/year", scholarships: "Vanier Canada Graduate Scholarships" },
    uk: { programs: "MBA, Finance", cost: "£25,000-60,000/year", scholarships: "Commonwealth Scholarships" }
  },
  health: {
    germany: { programs: "Medicine, Public Health", cost: "€0-15,000/year", scholarships: "DAAD Health Scholarships" },
    canada: { programs: "Nursing, Health Administration", cost: "CAD 20,000-35,000/year", scholarships: "Canadian Health Research Scholarships" },
    ireland: { programs: "Medicine, Physiotherapy", cost: "€45,000-55,000/year", scholarships: "Irish Government Scholarships" }
  },
  arts: {
    france: { programs: "Fine Arts, Literature", cost: "€170-4,000/year", scholarships: "Campus France Scholarships" },
    uk: { programs: "Creative Writing, Film Studies", cost: "£18,000-28,000/year", scholarships: "Arts Council Grants" },
    ireland: { programs: "Creative Arts, Psychology", cost: "€12,000-18,000/year", scholarships: "Irish Arts Council" }
  }
};

// Cost Calculator Data
const costData = {
  germany: {
    bachelor: { tuition: [0, 500], living: [8000, 12000] },
    master: { tuition: [0, 20000], living: [9000, 13000] },
    phd: { tuition: [0, 500], living: [9000, 13000] }
  },
  canada: {
    bachelor: { tuition: [15000, 35000], living: [12000, 18000] },
    master: { tuition: [18000, 45000], living: [13000, 20000] },
    phd: { tuition: [8000, 25000], living: [13000, 20000] }
  },
  uk: {
    bachelor: { tuition: [15000, 35000], living: [12000, 18000] },
    master: { tuition: [18000, 45000], living: [13000, 20000] },
    phd: { tuition: [15000, 30000], living: [13000, 20000] }
  },
  ireland: {
    bachelor: { tuition: [12000, 25000], living: [9000, 14000] },
    master: { tuition: [15000, 35000], living: [10000, 15000] },
    phd: { tuition: [8000, 20000], living: [10000, 15000] }
  },
  australia: {
    bachelor: { tuition: [20000, 40000], living: [15000, 22000] },
    master: { tuition: [25000, 50000], living: [16000, 24000] },
    phd: { tuition: [18000, 35000], living: [16000, 24000] }
  },
  france: {
    bachelor: { tuition: [170, 15000], living: [8000, 12000] },
    master: { tuition: [250, 20000], living: [9000, 13000] },
    phd: { tuition: [380, 15000], living: [9000, 13000] }
  }
};

// Scholarship Data
const scholarshipData = {
  engineering: [
    { name: "DAAD Engineering Scholarships", amount: "€850/month + tuition", country: "Germany", requirements: "Academic excellence, research proposal" },
    { name: "Mitacs Research Training Awards", amount: "CAD 6,000", country: "Canada", requirements: "Graduate research project" },
    { name: "British Council STEM Scholarships", amount: "£15,000", country: "UK", requirements: "STEM field, leadership potential" }
  ],
  business: [
    { name: "Fulbright Business Scholarships", amount: "$25,000", country: "USA", requirements: "Professional experience, leadership" },
    { name: "INSEAD Diversity Scholarships", amount: "€20,000", country: "France", requirements: "MBA program, diversity criteria" },
    { name: "Chevening Business Scholarships", amount: "Full funding", country: "UK", requirements: "Work experience, leadership potential" }
  ],
  medicine: [
    { name: "WHO Health Scholarships", amount: "Full funding", country: "Various", requirements: "Health sector commitment" },
    { name: "Gates Cambridge Scholarships", amount: "Full cost", country: "UK", requirements: "Academic excellence, leadership" },
    { name: "Irish Health Research Board", amount: "€18,500/year", country: "Ireland", requirements: "Health research focus" }
  ],
  arts: [
    { name: "Fulbright Arts Fellowships", amount: "$30,000", country: "USA", requirements: "Artistic excellence, project proposal" },
    { name: "British Council Creative Scholarships", amount: "£12,000", country: "UK", requirements: "Creative portfolio, innovation" },
    { name: "Irish Arts Council International", amount: "€15,000", country: "Ireland", requirements: "Artistic merit, cultural exchange" }
  ],
  science: [
    { name: "Marie Skłodowska-Curie Actions", amount: "€4,000/month", country: "EU", requirements: "PhD research, mobility" },
    { name: "NSF Graduate Research Fellowship", amount: "$37,000/year", country: "USA", requirements: "STEM PhD, US citizen/resident" },
    { name: "Australian Research Council", amount: "AUD 28,000/year", country: "Australia", requirements: "Research excellence" }
  ]
};

// Timeline Templates
const timelineTemplates = {
  germany: {
    "2025-fall": [
      { date: "Now - Feb 2025", title: "Prepare Documents", desc: "Gather transcripts, language certificates, recommendation letters" },
      { date: "Mar - May 2025", title: "Submit Applications", desc: "Apply to universities, prepare motivation letters" },
      { date: "Jun - Jul 2025", title: "Receive Decisions", desc: "Wait for admission decisions, choose your program" },
      { date: "Aug - Sep 2025", title: "Visa & Preparation", desc: "Apply for student visa, find accommodation, book flights" }
    ],
    "2026-spring": [
      { date: "Now - Aug 2025", title: "Prepare & Research", desc: "Research programs, improve German language skills" },
      { date: "Sep - Nov 2025", title: "Submit Applications", desc: "Apply for spring intake programs" },
      { date: "Dec 2025 - Jan 2026", title: "Receive Decisions", desc: "Get admission results, make final choice" },
      { date: "Feb - Mar 2026", title: "Visa & Departure", desc: "Complete visa process, prepare for departure" }
    ]
  },
  canada: {
    "2025-fall": [
      { date: "Now - Jan 2025", title: "Prepare Applications", desc: "IELTS/TOEFL, transcripts, statement of purpose" },
      { date: "Feb - Apr 2025", title: "Submit & Follow-up", desc: "Submit applications, check status regularly" },
      { date: "May - Jun 2025", title: "Decisions & Acceptance", desc: "Receive offers, accept program, pay deposit" },
      { date: "Jul - Aug 2025", title: "Visa & Preparation", desc: "Study permit application, accommodation, flights" }
    ]
  },
  uk: {
    "2025-fall": [
      { date: "Now - Jan 2025", title: "UCAS Applications", desc: "Submit through UCAS, personal statement, references" },
      { date: "Feb - May 2025", title: "Wait & Interviews", desc: "Respond to offers, attend interviews if required" },
      { date: "Jun - Jul 2025", title: "Final Decisions", desc: "Confirm firm and insurance choices" },
      { date: "Aug - Sep 2025", title: "Visa & Departure", desc: "Student visa, accommodation, pre-departure prep" }
    ]
  }
};

// Program Finder Logic
let finderAnswers = {};

function initializeProgramFinder() {
  // Field selection
  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', function() {
      const field = this.dataset.field;
      finderAnswers.field = field;
      
      // Visual feedback
      document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
      
      // Move to next step after delay
      setTimeout(() => {
        showFinderStep(2);
      }, 800);
    });
  });

  // Budget selection
  document.querySelectorAll('.budget-card').forEach(card => {
    card.addEventListener('click', function() {
      const budget = this.dataset.budget;
      finderAnswers.budget = budget;
      
      document.querySelectorAll('.budget-card').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
      
      setTimeout(() => {
        showFinderStep(3);
      }, 800);
    });
  });

  // Priority selection
  document.querySelectorAll('.priority-card').forEach(card => {
    card.addEventListener('click', function() {
      const priority = this.dataset.priority;
      finderAnswers.priority = priority;
      
      document.querySelectorAll('.priority-card').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
      
      setTimeout(() => {
        generateRecommendations();
      }, 800);
    });
  });
}

function showFinderStep(stepNumber) {
  document.querySelectorAll('.finder-step').forEach(step => step.classList.remove('active'));
  document.getElementById(`finderStep${stepNumber}`).classList.add('active');
}

function generateRecommendations() {
  const { field, budget, priority } = finderAnswers;
  
  // Hide steps and show results
  document.querySelectorAll('.finder-step').forEach(step => step.classList.remove('active'));
  document.getElementById('finderResults').style.display = 'block';
  
  // Generate recommendations based on answers
  const recommendations = [];
  const fieldData = programRecommendations[field] || {};
  
  // Filter countries based on budget and priority
  let countries = Object.keys(fieldData);
  
  if (budget === 'low') {
    countries = countries.filter(c => ['germany', 'france'].includes(c));
  } else if (budget === 'medium') {
    countries = countries.filter(c => ['canada', 'ireland'].includes(c));
  }
  
  // Create recommendation cards
  const container = document.querySelector('.recommendations-container');
  container.innerHTML = '';
  
  countries.slice(0, 3).forEach(country => {
    const data = fieldData[country];
    if (data) {
      const card = document.createElement('div');
      card.className = 'recommendation-card';
      card.innerHTML = `
        <h4>🇬🇧 ${country.charAt(0).toUpperCase() + country.slice(1)}</h4>
        <div class="recommendation-tags">
          <span class="tag">${data.programs.split(',')[0]}</span>
          <span class="tag">${data.cost}</span>
        </div>
        <p><strong>Programs:</strong> ${data.programs}</p>
        <p><strong>Scholarships:</strong> ${data.scholarships}</p>
      `;
      container.appendChild(card);
    }
  });
  
  if (container.innerHTML === '') {
    container.innerHTML = '<p>No specific matches found. Our counselors can help you explore more options!</p>';
  }
}

function resetProgramFinder() {
  finderAnswers = {};
  document.querySelectorAll('.option-card, .budget-card, .priority-card').forEach(card => {
    card.classList.remove('selected');
  });
  document.getElementById('finderResults').style.display = 'none';
  showFinderStep(1);
}

// Interactive Planner Logic
function initializePlanner() {
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const targetTab = this.dataset.tab;
      
      // Update active tab button
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Update active tab content
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(targetTab).classList.add('active');
    });
  });
}

// Cost Calculator
function updateCostCalculation() {
  const country = document.getElementById('calcCountry').value;
  const level = document.getElementById('calcLevel').value;
  const duration = parseInt(document.getElementById('calcDuration').value) || 1;
  
  if (!country || !level) {
    document.getElementById('tuitionCost').textContent = 'Select options above';
    document.getElementById('livingCost').textContent = '-';
    document.getElementById('totalCost').textContent = '-';
    return;
  }
  
  const data = costData[country]?.[level];
  if (!data) return;
  
  const avgTuition = (data.tuition[0] + data.tuition[1]) / 2;
  const avgLiving = (data.living[0] + data.living[1]) / 2;
  
  const totalTuition = avgTuition * duration;
  const totalLiving = avgLiving * duration;
  const totalCost = totalTuition + totalLiving;
  
  // Format currency based on country
  const formatCurrency = (amount, country) => {
    switch(country) {
      case 'germany':
      case 'france':
        return `€${amount.toLocaleString()}`;
      case 'canada':
        return `CAD ${amount.toLocaleString()}`;
      case 'uk':
        return `£${amount.toLocaleString()}`;
      case 'ireland':
        return `€${amount.toLocaleString()}`;
      case 'australia':
        return `AUD ${amount.toLocaleString()}`;
      default:
        return `$${amount.toLocaleString()}`;
    }
  };
  
  document.getElementById('tuitionCost').textContent = formatCurrency(totalTuition, country);
  document.getElementById('livingCost').textContent = formatCurrency(totalLiving, country);
  document.getElementById('totalCost').textContent = formatCurrency(totalCost, country);
}

// Eligibility Checker
function checkEligibility() {
  const education = document.getElementById('currentEducation').value;
  const grade = document.getElementById('gradeLevel').value;
  const english = document.getElementById('englishLevel').value;
  
  if (!education || !grade || !english) {
    alert('Please fill in all fields to check your eligibility.');
    return;
  }
  
  const resultsDiv = document.getElementById('eligibilityResults');
  let score = 0;
  let recommendations = [];
  let className = 'error';
  
  // Calculate eligibility score
  if (grade === 'excellent') score += 40;
  else if (grade === 'good') score += 25;
  else score += 10;
  
  if (english === 'native' || english === 'advanced') score += 35;
  else if (english === 'intermediate') score += 20;
  else score += 5;
  
  if (education === 'master') score += 25;
  else if (education === 'bachelor') score += 20;
  else score += 15;
  
  // Determine eligibility level
  if (score >= 80) {
    className = '';
    recommendations = [
      'Excellent eligibility for top universities worldwide',
      'Strong candidate for prestigious scholarships',
      'Consider applying to 8-10 universities for safety'
    ];
  } else if (score >= 60) {
    className = 'warning';
    recommendations = [
      'Good eligibility for most universities',
      'Consider improving English test scores',
      'Apply to 6-8 universities with varied requirements'
    ];
  } else {
    recommendations = [
      'Consider improving academic scores first',
      'Focus on English language preparation',
      'Look into foundation programs or pathway courses',
      'Our counselors can help create an improvement plan'
    ];
  }
  
  resultsDiv.className = `eligibility-results ${className}`;
  resultsDiv.innerHTML = `
    <div class="eligibility-score">Eligibility Score: ${score}/100</div>
    <div class="eligibility-recommendations">
      <h4>Recommendations:</h4>
      <ul>
        ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
      </ul>
    </div>
  `;
  resultsDiv.style.display = 'block';
}

// Timeline Builder
function generateTimeline() {
  const startDate = document.getElementById('startDate').value;
  const country = document.getElementById('timelineCountry').value;
  
  if (!startDate || !country) {
    alert('Please select both start date and country.');
    return;
  }
  
  const template = timelineTemplates[country]?.[startDate];
  if (!template) {
    alert('Timeline not available for this combination. Our counselors can create a custom timeline for you.');
    return;
  }
  
  const resultsDiv = document.getElementById('timelineResults');
  resultsDiv.innerHTML = `
    <h4>Your Application Timeline for ${country.charAt(0).toUpperCase() + country.slice(1)}</h4>
    <div class="timeline-steps">
      ${template.map(step => `
        <div class="timeline-step">
          <div class="timeline-date">${step.date}</div>
          <div class="timeline-title">${step.title}</div>
          <div class="timeline-desc">${step.desc}</div>
        </div>
      `).join('')}
    </div>
    <div style="margin-top: 24px; padding: 16px; background: #f0f9ff; border-radius: 8px;">
      <strong>💡 Pro Tip:</strong> Start your preparation early and keep track of deadlines. Our team can help you stay on schedule!
    </div>
  `;
  resultsDiv.style.display = 'block';
}

// Scholarship Finder
function findScholarships() {
  const field = document.getElementById('scholarshipField').value;
  const level = document.getElementById('scholarshipLevel').value;
  
  if (!field) {
    alert('Please select your field of study.');
    return;
  }
  
  const scholarships = scholarshipData[field] || [];
  const resultsDiv = document.getElementById('scholarshipResults');
  
  if (scholarships.length === 0) {
    resultsDiv.innerHTML = '<p>No scholarships found for this field. Contact our team for more scholarship opportunities!</p>';
  } else {
    resultsDiv.innerHTML = `
      <h4>Available Scholarships in ${field.charAt(0).toUpperCase() + field.slice(1)}</h4>
      ${scholarships.map(scholarship => `
        <div class="scholarship-card">
          <div class="scholarship-header">
            <div class="scholarship-title">${scholarship.name}</div>
            <div class="scholarship-amount">${scholarship.amount}</div>
          </div>
          <div class="scholarship-details">
            <strong>Country:</strong> ${scholarship.country}
          </div>
          <div class="scholarship-requirements">
            <strong>Requirements:</strong> ${scholarship.requirements}
          </div>
        </div>
      `).join('')}
      <div style="margin-top: 16px; padding: 12px; background: #f0f9ff; border-radius: 8px; font-size: 14px;">
        💡 Our team can help you identify more scholarships and assist with applications!
      </div>
    `;
  }
  resultsDiv.style.display = 'block';
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize if elements exist
  if (document.querySelector('.program-finder-section')) {
    initializeProgramFinder();
  }
  
  if (document.querySelector('.interactive-planner-section')) {
    initializePlanner();
  }
  
  // Make functions globally available
  window.updateCostCalculation = updateCostCalculation;
  window.checkEligibility = checkEligibility;
  window.generateTimeline = generateTimeline;
  window.findScholarships = findScholarships;
  window.resetProgramFinder = resetProgramFinder;
});