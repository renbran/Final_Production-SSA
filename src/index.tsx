import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use JSX renderer
app.use(renderer)

// Home Page
app.get('/', (c) => {
  return c.render(
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div id="particles-js"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text animate-on-scroll">
              <h1 className="hero-title">
                Your Dream <span className="text-accent">Study Abroad</span> Journey Starts Here
              </h1>
              <p className="hero-subtitle">
                Get expert guidance for study visas, scholarships, university admissions, and IELTS/PTE preparation. 
                Join 10,000+ students who achieved their international education dreams with SCHOLARIX.
              </p>
              <div className="hero-stats">
                <div className="stat glass-card">
                  <div className="stat-number">10000</div>
                  <div className="stat-label">Students Placed</div>
                </div>
                <div className="stat glass-card">
                  <div className="stat-number">99</div>
                  <div className="stat-label">Visa Success %</div>
                </div>
                <div className="stat glass-card">
                  <div className="stat-number">500</div>
                  <div className="stat-label">Partner Universities</div>
                </div>
              </div>
              <div className="hero-cta">
                <button className="btn btn-primary btn-large" onclick="openConsultationModal()">
                  <i className="fas fa-calendar-alt"></i>
                  Book Free Consultation
                </button>
                <button className="btn btn-accent btn-large" onclick="openChatbot()">
                  <i className="fas fa-comments"></i>
                  Live Chat
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/static/images/hero-graduate-3d.png" alt="International Graduate Student" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SCHOLARIX?</h2>
            <p>Comprehensive support for your international education journey</p>
          </div>
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className="fas fa-passport text-primary"></i>
              </div>
              <h3>Study Visa Support</h3>
              <p>Expert guidance for student visa applications with 99% success rate. We handle all documentation and interview preparation.</p>
              <a href="/services/visa" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            
            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className="fas fa-graduation-cap text-primary"></i>
              </div>
              <h3>University Admissions</h3>
              <p>Get admitted to top universities worldwide. We help with applications, essays, and course selection.</p>
              <a href="/services/admissions" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className="fas fa-trophy text-accent"></i>
              </div>
              <h3>Scholarships</h3>
              <p>Access exclusive scholarships worth millions. We help you find and apply for the best funding opportunities.</p>
              <a href="/services/scholarships" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className="fas fa-book text-primary"></i>
              </div>
              <h3>IELTS/PTE Preparation</h3>
              <p>Achieve your target scores with our expert trainers. Online and offline classes available.</p>
              <a href="/services/test-prep" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className="fas fa-user-tie text-primary"></i>
              </div>
              <h3>Career Counselling</h3>
              <p>Get personalized career guidance to choose the right course and country for your future.</p>
              <a href="/services/counselling" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className="fas fa-plane text-accent"></i>
              </div>
              <h3>Pre-Departure Support</h3>
              <p>Complete support for accommodation, travel, and settling in your destination country.</p>
              <a href="/services/pre-departure" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="destinations-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Popular Study Destinations</h2>
            <p>Explore top countries for international education with our interactive 3D globe</p>
          </div>
          
          {/* 3D Interactive Globe */}
          <div id="globe-container" className="animate-on-scroll"></div>
          
          <div className="destinations-grid">
            <div className="destination-card" data-country="usa" onclick="openDestinationModal('usa')">
              <div className="destination-overlay">
                <h3>United States</h3>
                <p>500+ Universities</p>
              </div>
            </div>
            <div className="destination-card" data-country="uk" onclick="openDestinationModal('uk')">
              <div className="destination-overlay">
                <h3>United Kingdom</h3>
                <p>150+ Universities</p>
              </div>
            </div>
            <div className="destination-card" data-country="canada" onclick="openDestinationModal('canada')">
              <div className="destination-overlay">
                <h3>Canada</h3>
                <p>200+ Universities</p>
              </div>
            </div>
            <div className="destination-card" data-country="australia" onclick="openDestinationModal('australia')">
              <div className="destination-overlay">
                <h3>Australia</h3>
                <p>100+ Universities</p>
              </div>
            </div>
            <div className="destination-card" data-country="germany" onclick="openDestinationModal('germany')">
              <div className="destination-overlay">
                <h3>Germany</h3>
                <p>300+ Universities</p>
              </div>
            </div>
            <div className="destination-card" data-country="newzealand" onclick="openDestinationModal('newzealand')">
              <div className="destination-overlay">
                <h3>New Zealand</h3>
                <p>50+ Universities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>Hear from our successful students</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-content">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>"SCHOLARIX helped me get admission to Harvard University with a 50% scholarship. Their guidance was exceptional!"</p>
              </div>
              <div className="testimonial-author">
                <img src="/static/images/student1.jpg" alt="Priya Sharma" />
                <div className="author-info">
                  <h4>Priya Sharma</h4>
                  <p>Harvard University, USA</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-content">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>"Got my UK visa in just 15 days! The team was very professional and supportive throughout the process."</p>
              </div>
              <div className="testimonial-author">
                <img src="/static/images/student2.jpg" alt="Raj Patel" />
                <div className="author-info">
                  <h4>Raj Patel</h4>
                  <p>Oxford University, UK</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card animate-on-scroll">
              <div className="testimonial-content">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>"IELTS coaching was excellent. I achieved 8.0 overall band score and got into my dream university in Canada!"</p>
              </div>
              <div className="testimonial-author">
                <img src="/static/images/student3.jpg" alt="Sarah Ahmed" />
                <div className="author-info">
                  <h4>Sarah Ahmed</h4>
                  <p>University of Toronto, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Study Abroad Journey?</h2>
            <p>Get expert guidance and personalized support to achieve your international education dreams</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large" onclick="openConsultationModal()">
                <i className="fas fa-calendar-alt"></i>
                Book Free Consultation
              </button>
              <button className="btn btn-outline btn-large" onclick="document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})">
                <i className="fas fa-envelope"></i>
                Get Information
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="form-container">
            <div className="form-content">
              <h2>Get Your Free Consultation</h2>
              <p>Fill out this form and our experts will contact you within 24 hours</p>
              <form id="leadForm" className="lead-form">
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="firstName" placeholder="First Name*" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="lastName" placeholder="Last Name*" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Email Address*" required />
                  </div>
                  <div className="form-group phone-input-group">
                    <select name="countryCode" className="country-code-select" required>
                      <option value="+971">🇦🇪 UAE (+971)</option>
                      <option value="+1">🇺🇸 USA (+1)</option>
                      <option value="+44">🇬🇧 UK (+44)</option>
                      <option value="+1">🇨🇦 Canada (+1)</option>
                      <option value="+61">🇦🇺 Australia (+61)</option>
                      <option value="+49">🇩🇪 Germany (+49)</option>
                      <option value="+64">🇳🇿 New Zealand (+64)</option>
                      <option value="+91">🇮🇳 India (+91)</option>
                      <option value="+92">🇵🇰 Pakistan (+92)</option>
                      <option value="+880">🇧🇩 Bangladesh (+880)</option>
                      <option value="+94">🇱🇰 Sri Lanka (+94)</option>
                      <option value="+977">🇳🇵 Nepal (+977)</option>
                      <option value="+60">🇲🇾 Malaysia (+60)</option>
                      <option value="+65">🇸🇬 Singapore (+65)</option>
                      <option value="+86">🇨🇳 China (+86)</option>
                      <option value="+82">🇰🇷 South Korea (+82)</option>
                      <option value="+81">🇯🇵 Japan (+81)</option>
                      <option value="+234">🇳🇬 Nigeria (+234)</option>
                      <option value="+27">🇿🇦 South Africa (+27)</option>
                      <option value="+20">🇪🇬 Egypt (+20)</option>
                    </select>
                    <input type="tel" name="phone" placeholder="Phone Number*" className="phone-number-input" required />
                  </div>
                </div>
                <div className="form-group">
                  <select name="country" required>
                    <option value="">Preferred Study Destination*</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="newzealand">New Zealand</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <select name="service" required>
                    <option value="">Service Interested In*</option>
                    <option value="visa">Study Visa Support</option>
                    <option value="admission">University Admission</option>
                    <option value="scholarship">Scholarships</option>
                    <option value="ielts">IELTS/PTE Preparation</option>
                    <option value="counselling">Career Counselling</option>
                    <option value="complete">Complete Package</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Tell us about your study goals and any specific questions..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-large btn-full">
                  <i className="fas fa-paper-plane"></i>
                  Get My Free Consultation
                </button>
              </form>
            </div>
            <div className="form-image">
              <img src="/static/images/scholarix-logo-professional.png" alt="SCHOLARIX - Free Consultation" />
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="contact-item">
                  <i className="fas fa-phone text-primary"></i>
                  <div>
                    <strong>Call Us</strong>
                    <p>+971 52 543 8784</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope text-primary"></i>
                  <div>
                    <strong>Email Us</strong>
                    <p>info@scholarixstudy.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-comments text-accent"></i>
                  <div>
                    <strong>Live Chat</strong>
                    <p>Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <div id="consultationModal" className="modal">
        <div className="modal-content">
          <span className="close" onclick="closeConsultationModal()">&times;</span>
          <h2>Book Your Free Consultation</h2>
          <p>Choose your preferred consultation method:</p>
          <div className="consultation-options">
            <button className="btn btn-primary btn-large" onclick="openChatbot()">
              <i className="fas fa-comments"></i>
              Live Chat Consultation
            </button>
            <button className="btn btn-secondary btn-large" onclick="window.open('tel:+971525438784', '_self')">
              <i className="fas fa-phone"></i>
              Phone Call
            </button>
            <button className="btn btn-outline btn-large" onclick="closeConsultationModal(); document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})">
              <i className="fas fa-envelope"></i>
              Email Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

// About Page
app.get('/about', (c) => {
  return c.render(
    <div className="about-page">
      <div className="container">
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About SCHOLARIX</h1>
            <p className="hero-subtitle">
              Empowering students to achieve their international education dreams since 2018. 
              With over 10,000 successful student placements and a 99% visa success rate, 
              we are your trusted partner for study abroad success.
            </p>
          </div>
        </section>

        <section className="about-mission">
          <div className="section-header">
            <h2>Our Mission</h2>
            <p>To provide world-class educational guidance and support, helping students navigate their academic journeys and achieve their full potential in international education.</p>
          </div>
        </section>

        <section className="about-stats">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Students Placed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-label">Visa Success Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Partner Universities</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Countries Covered</div>
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="section-header">
            <h2>Our Expert Team</h2>
            <p>Experienced counselors and visa experts dedicated to your success</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <img src="/static/images/team1.jpg" alt="Sarah Johnson" />
              <h3>Sarah Johnson</h3>
              <p>Senior Education Counselor</p>
              <p>10+ years experience in US and UK admissions</p>
            </div>
            <div className="team-member">
              <img src="/static/images/team2.jpg" alt="Michael Chen" />
              <h3>Michael Chen</h3>
              <p>Visa Specialist</p>
              <p>Expert in student visa applications for all countries</p>
            </div>
            <div className="team-member">
              <img src="/static/images/team3.jpg" alt="Dr. Priya Patel" />
              <h3>Dr. Priya Patel</h3>
              <p>Academic Director</p>
              <p>PhD in International Education, 15+ years experience</p>
            </div>
          </div>
        </section>

        <div className="about-cta">
          <button className="btn btn-primary btn-large" onclick="openConsultationModal()">
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  )
})

// Contact Page
app.get('/contact', (c) => {
  return c.render(
    <div className="contact-page">
      <div className="container">
        <section className="contact-hero">
          <h1>Contact SCHOLARIX</h1>
          <p>Ready to start your study abroad journey? Get in touch with our experts today!</p>
        </section>

        <section className="contact-main">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <i className="fas fa-phone text-primary"></i>
                  <div>
                    <h4>Phone</h4>
                    <p>+971 52 543 8784</p>
                    <small>Mon-Sat: 9AM-7PM GST</small>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="fas fa-envelope text-primary"></i>
                  <div>
                    <h4>Email</h4>
                    <p>info@scholarixstudy.com</p>
                    <small>Response within 24 hours</small>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="fas fa-comments text-accent"></i>
                  <div>
                    <h4>Live Chat</h4>
                    <p>24/7 Available</p>
                    <small>Instant messaging support</small>
                  </div>
                </div>
                <div className="contact-method">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <div>
                    <h4>Office</h4>
                    <p>Dubai, United Arab Emirates</p>
                    <small>By appointment only</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form id="contactForm" className="lead-form">
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="firstName" placeholder="First Name*" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="lastName" placeholder="Last Name*" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address*" required />
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number*" required />
                </div>
                <div className="form-group">
                  <select name="subject" required>
                    <option value="">Subject*</option>
                    <option value="general">General Inquiry</option>
                    <option value="visa">Visa Support</option>
                    <option value="admission">University Admission</option>
                    <option value="scholarship">Scholarships</option>
                    <option value="ielts">IELTS/PTE Preparation</option>
                    <option value="appointment">Book Appointment</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message*" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-large btn-full">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="office-hours">
          <h2>Office Hours</h2>
          <div className="hours-grid">
            <div className="hours-item">
              <strong>Monday - Friday</strong>
              <span>9:00 AM - 7:00 PM GST</span>
            </div>
            <div className="hours-item">
              <strong>Saturday</strong>
              <span>10:00 AM - 4:00 PM GST</span>
            </div>
            <div className="hours-item">
              <strong>Sunday</strong>
              <span>Closed</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
})

// Blog Page
app.get('/blog', (c) => {
  return c.render(
    <div className="blog-page">
      <div className="container">
        <section className="blog-hero">
          <h1>Study Abroad Blog</h1>
          <p>Latest insights, tips, and updates for international students</p>
        </section>

        <section className="blog-grid">
          <article className="blog-post">
            <img src="/static/images/blog1.jpg" alt="IELTS Preparation Tips" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">March 15, 2024</span>
                <span className="blog-category">Test Preparation</span>
              </div>
              <h2>10 Essential IELTS Preparation Tips for High Scores</h2>
              <p>Master the IELTS exam with these proven strategies and achieve your target band score for university admission...</p>
              <a href="/blog/ielts-preparation-tips" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>

          <article className="blog-post">
            <img src="/static/images/blog2.jpg" alt="Scholarship Guide" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">March 10, 2024</span>
                <span className="blog-category">Scholarships</span>
              </div>
              <h2>Complete Guide to International Scholarships for 2024</h2>
              <p>Discover available scholarships, application deadlines, and expert tips to secure funding for your studies abroad...</p>
              <a href="/blog/scholarship-guide-2024" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>

          <article className="blog-post">
            <img src="/static/images/blog3.jpg" alt="Visa Interview Tips" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">March 5, 2024</span>
                <span className="blog-category">Visa Support</span>
              </div>
              <h2>Ace Your Student Visa Interview: Common Questions & Answers</h2>
              <p>Prepare for your visa interview with confidence using these expert tips and practice questions...</p>
              <a href="/blog/visa-interview-tips" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>

          <article className="blog-post">
            <img src="/static/images/blog4.jpg" alt="University Selection" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">February 28, 2024</span>
                <span className="blog-category">University Selection</span>
              </div>
              <h2>How to Choose the Right University: A Complete Guide</h2>
              <p>Make informed decisions about your higher education with our comprehensive university selection guide...</p>
              <a href="/blog/university-selection-guide" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>

          <article className="blog-post">
            <img src="/static/images/blog5.jpg" alt="Canada Study Guide" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">February 20, 2024</span>
                <span className="blog-category">Country Guide</span>
              </div>
              <h2>Why Canada is the Best Choice for International Students</h2>
              <p>Explore Canada's education system, work opportunities, and immigration pathways for international students...</p>
              <a href="/blog/study-in-canada-guide" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>

          <article className="blog-post">
            <img src="/static/images/blog6.jpg" alt="SOP Writing" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">February 15, 2024</span>
                <span className="blog-category">Application Tips</span>
              </div>
              <h2>Writing a Winning Statement of Purpose (SOP)</h2>
              <p>Create a compelling SOP that stands out to admission committees with our step-by-step guide...</p>
              <a href="/blog/sop-writing-guide" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          </article>
        </section>

        <section className="blog-categories">
          <h2>Browse by Category</h2>
          <div className="categories-grid">
            <a href="/blog/category/test-preparation" className="category-card">
              <i className="fas fa-book text-primary"></i>
              <h3>Test Preparation</h3>
              <p>IELTS, TOEFL, PTE, SAT, GRE guides</p>
            </a>
            <a href="/blog/category/visa-support" className="category-card">
              <i className="fas fa-passport text-primary"></i>
              <h3>Visa Support</h3>
              <p>Student visa tips and guidelines</p>
            </a>
            <a href="/blog/category/scholarships" className="category-card">
              <i className="fas fa-trophy text-accent"></i>
              <h3>Scholarships</h3>
              <p>Funding opportunities and tips</p>
            </a>
            <a href="/blog/category/country-guides" className="category-card">
              <i className="fas fa-globe text-primary"></i>
              <h3>Country Guides</h3>
              <p>Study destination information</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
})

// Services Pages
app.get('/services/:service', (c) => {
  const service = c.req.param('service')
  
  const serviceContent = {
    visa: {
      title: 'Study Visa Support',
      description: 'Expert guidance for student visa applications with 99% success rate',
      content: `
        <h3>Comprehensive Visa Support Services</h3>
        <p>Our expert visa consultants provide end-to-end support for your student visa application, ensuring a smooth and successful process.</p>
        
        <div class="service-features">
          <h4>What We Offer:</h4>
          <ul>
            <li>Document preparation and review</li>
            <li>Application form assistance</li>
            <li>Interview preparation and mock sessions</li>
            <li>Financial documentation guidance</li>
            <li>Timeline management and tracking</li>
            <li>Post-visa services and support</li>
          </ul>
        </div>
        
        <div class="service-benefits">
          <h4>Why Choose Our Visa Services:</h4>
          <ul>
            <li>99% success rate across all countries</li>
            <li>Expert knowledge of visa requirements</li>
            <li>Personalized support throughout the process</li>
            <li>Quick turnaround time</li>
            <li>24/7 support during application period</li>
          </ul>
        </div>
      `
    },
    admissions: {
      title: 'University Admissions',
      description: 'Get admitted to top universities worldwide with our expert guidance',
      content: `
        <h3>University Admission Services</h3>
        <p>Our admission experts help you secure admission to your dream university with personalized guidance and proven strategies.</p>
        
        <div class="service-features">
          <h4>Our Admission Services Include:</h4>
          <ul>
            <li>University and course selection guidance</li>
            <li>Application preparation and submission</li>
            <li>Statement of Purpose (SOP) writing</li>
            <li>Letter of Recommendation assistance</li>
            <li>Portfolio development (for specific programs)</li>
            <li>Application tracking and follow-up</li>
          </ul>
        </div>
        
        <div class="service-stats">
          <h4>Our Success Record:</h4>
          <ul>
            <li>500+ partner universities worldwide</li>
            <li>95% admission success rate</li>
            <li>Students placed in top 100 universities</li>
            <li>Average processing time: 2-4 weeks</li>
          </ul>
        </div>
      `
    },
    scholarships: {
      title: 'Scholarship Assistance',
      description: 'Access exclusive scholarships and funding opportunities worth millions',
      content: `
        <h3>Scholarship and Financial Aid Services</h3>
        <p>Unlock funding opportunities and make your international education dreams affordable with our comprehensive scholarship assistance.</p>
        
        <div class="service-features">
          <h4>Scholarship Services:</h4>
          <ul>
            <li>Scholarship research and identification</li>
            <li>Application preparation and submission</li>
            <li>Essay and personal statement writing</li>
            <li>Merit-based scholarship guidance</li>
            <li>Need-based financial aid assistance</li>
            <li>University-specific scholarship applications</li>
          </ul>
        </div>
        
        <div class="scholarship-types">
          <h4>Types of Scholarships Available:</h4>
          <ul>
            <li>Merit-based scholarships (up to 100% tuition)</li>
            <li>Need-based financial aid</li>
            <li>Country-specific scholarships</li>
            <li>Subject-specific funding</li>
            <li>Research assistantships</li>
            <li>Sports and talent scholarships</li>
          </ul>
        </div>
      `
    },
    'test-prep': {
      title: 'IELTS/PTE Preparation',
      description: 'Achieve your target scores with our expert trainers and proven methods',
      content: `
        <h3>English Proficiency Test Preparation</h3>
        <p>Master IELTS, PTE, and TOEFL with our comprehensive preparation programs designed to help you achieve your target scores.</p>
        
        <div class="service-features">
          <h4>Our Test Prep Programs Include:</h4>
          <ul>
            <li>Diagnostic assessment and personalized study plan</li>
            <li>Live online and offline classes</li>
            <li>One-on-one tutoring sessions</li>
            <li>Mock tests and performance analysis</li>
            <li>Speaking practice sessions</li>
            <li>Writing feedback and improvement strategies</li>
          </ul>
        </div>
        
        <div class="test-formats">
          <h4>Tests We Prepare You For:</h4>
          <ul>
            <li>IELTS Academic (Speaking, Writing, Reading, Listening)</li>
            <li>PTE Academic (All modules)</li>
            <li>TOEFL iBT (Comprehensive preparation)</li>
            <li>Duolingo English Test</li>
          </ul>
        </div>
        
        <div class="success-stats">
          <h4>Our Success Rates:</h4>
          <ul>
            <li>Average score improvement: 1.5 bands</li>
            <li>95% students achieve target scores</li>
            <li>Flexible batch timings</li>
            <li>Money-back guarantee available</li>
          </ul>
        </div>
      `
    },
    counselling: {
      title: 'Career Counselling',
      description: 'Get personalized career guidance to choose the right path for your future',
      content: `
        <h3>Professional Career Counselling Services</h3>
        <p>Make informed decisions about your academic and career path with our expert counsellors who understand global education trends.</p>
        
        <div class="service-features">
          <h4>Our Counselling Services:</h4>
          <ul>
            <li>Career assessment and aptitude testing</li>
            <li>Course and university selection guidance</li>
            <li>Country selection based on career goals</li>
            <li>Industry trend analysis and job market insights</li>
            <li>Post-graduation career pathway planning</li>
            <li>Skills gap analysis and development recommendations</li>
          </ul>
        </div>
        
        <div class="counselling-process">
          <h4>Our Counselling Process:</h4>
          <ol>
            <li>Initial consultation and goal setting</li>
            <li>Comprehensive assessment and testing</li>
            <li>Detailed analysis and recommendations</li>
            <li>Action plan development</li>
            <li>Ongoing support and guidance</li>
          </ol>
        </div>
      `
    },
    'pre-departure': {
      title: 'Pre-Departure Support',
      description: 'Complete support for accommodation, travel, and settling in your destination',
      content: `
        <h3>Comprehensive Pre-Departure Services</h3>
        <p>Ensure a smooth transition to your new country with our complete pre-departure support services.</p>
        
        <div class="service-features">
          <h4>Pre-Departure Services Include:</h4>
          <ul>
            <li>Accommodation arrangement and booking</li>
            <li>Travel planning and flight booking assistance</li>
            <li>Airport pickup arrangements</li>
            <li>Bank account opening guidance</li>
            <li>Mobile connection and insurance setup</li>
            <li>Cultural orientation and country briefing</li>
          </ul>
        </div>
        
        <div class="orientation-topics">
          <h4>Orientation Program Covers:</h4>
          <ul>
            <li>Local culture and customs</li>
            <li>Transportation and navigation</li>
            <li>Healthcare system and emergency contacts</li>
            <li>Shopping and daily life essentials</li>
            <li>University campus and academic expectations</li>
            <li>Part-time work regulations and opportunities</li>
          </ul>
        </div>
        
        <div class="support-timeline">
          <h4>Support Timeline:</h4>
          <ul>
            <li>6 weeks before departure: Initial planning</li>
            <li>4 weeks before: Documentation and bookings</li>
            <li>2 weeks before: Final preparations and orientation</li>
            <li>Upon arrival: 30-day settling support</li>
          </ul>
        </div>
      `
    }
  }

  const currentService = serviceContent[service] || serviceContent.visa

  return c.render(
    <div className="service-page">
      <div className="container">
        <div className="service-hero">
          <h1>{currentService.title}</h1>
          <p className="hero-subtitle">{currentService.description}</p>
        </div>
        
        <div className="service-content" dangerouslySetInnerHTML={{ __html: currentService.content }}></div>
        
        <div className="service-cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Book your free consultation today and take the first step toward your study abroad journey.</p>
          <div className="service-actions">
            <button className="btn btn-primary btn-large" onclick="openConsultationModal()">
              <i className="fas fa-calendar-alt"></i>
              Book Free Consultation
            </button>
            <button className="btn btn-outline btn-large" onclick="openChatbot()">
              <i className="fas fa-comments"></i>
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

// API Routes
app.post('/api/lead', async (c) => {
  try {
    const formData = await c.req.json()
    console.log('New lead received:', formData)
    
    // Process form data
    const leadData = {
      timestamp: new Date().toISOString(),
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      email: formData.email || '',
      phone: `${formData.countryCode || ''} ${formData.phone || ''}`.trim(),
      country: formData.country || '',
      service: formData.service || '',
      message: formData.message || ''
    }
    
    // Send to Google Sheets and Email in parallel
    const results = await Promise.allSettled([
      sendToGoogleSheets(leadData),
      sendEmailNotification(leadData)
    ])
    
    // Check if at least one succeeded
    const hasSuccess = results.some(result => result.status === 'fulfilled')
    
    if (hasSuccess) {
      return c.json({ 
        success: true, 
        message: 'Thank you! We have received your inquiry and will contact you within 24 hours.' 
      })
    } else {
      // Log errors for debugging
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.error(`Integration ${index} failed:`, result.reason)
        }
      })
      
      return c.json({ 
        success: false, 
        message: 'Thank you for your interest. Please call us directly at +971-XX-XXX-XXXX for immediate assistance.' 
      })
    }
  } catch (error) {
    console.error('API Error:', error)
    return c.json({ 
      success: false, 
      message: 'Something went wrong. Please try again or contact us directly.' 
    }, 500)
  }
})

// Google Sheets Integration
async function sendToGoogleSheets(leadData: any) {
  try {
    // Using Google Apps Script Web App as a simple integration method
    // You'll need to create a Google Apps Script and deploy it as a web app
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'addLead',
        data: leadData
      })
    })
    
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status}`)
    }
    
    const result = await response.json()
    console.log('Successfully added to Google Sheets:', result)
    return result
  } catch (error) {
    console.error('Google Sheets integration error:', error)
    throw error
  }
}

// Email Notification
async function sendEmailNotification(leadData: any) {
  try {
    // Using a simple email service API (you can replace with your preferred service)
    // This example uses a webhook approach - replace with your email service
    const EMAIL_WEBHOOK_URL = 'https://api.emailjs.com/api/v1.0/email/send'
    
    const emailData = {
      service_id: 'YOUR_SERVICE_ID',
      template_id: 'YOUR_TEMPLATE_ID',
      user_id: 'YOUR_USER_ID',
      template_params: {
        to_email: 'info@scholarixstudy.com',
        from_name: `${leadData.firstName} ${leadData.lastName}`,
        reply_to: leadData.email,
        subject: 'New SCHOLARIX Consultation Request',
        message: `
New consultation request received:

Name: ${leadData.firstName} ${leadData.lastName}
Email: ${leadData.email}
Phone: ${leadData.phone}
Preferred Country: ${leadData.country}
Service: ${leadData.service}
Message: ${leadData.message}

Submitted: ${new Date(leadData.timestamp).toLocaleString()}
        `
      }
    }
    
    const response = await fetch(EMAIL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })
    
    if (!response.ok) {
      throw new Error(`Email service error: ${response.status}`)
    }
    
    console.log('Email notification sent successfully')
    return { success: true }
  } catch (error) {
    console.error('Email notification error:', error)
    throw error
  }
}

export default app