/**
 * SCHOLARIX Study Abroad - Enhanced 3D Animations & Interactive Elements
 * World-class animations using Three.js, GSAP, and Particles.js
 */

// Import libraries (will be added via CDN in HTML)
// Three.js for 3D globe
// GSAP for smooth animations
// Particles.js for background effects

/* ===================================
   1. ANIMATED PARTICLE BACKGROUND
   =================================== */
function initParticleBackground() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#1e3a8a', '#3b82f6', '#f59e0b']
                },
                shape: {
                    type: 'circle',
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#3b82f6',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

/* ===================================
   2. 3D INTERACTIVE GLOBE
   =================================== */
let globe, globeRenderer, globeScene, globeCamera;
let isGlobeInitialized = false;

function init3DGlobe() {
    if (typeof THREE === 'undefined') {
        console.log('Three.js not loaded yet, will retry...');
        setTimeout(init3DGlobe, 1000);
        return;
    }

    const container = document.getElementById('globe-container');
    if (!container || isGlobeInitialized) return;

    isGlobeInitialized = true;

    // Scene setup
    globeScene = new THREE.Scene();
    
    // Camera setup
    const width = container.offsetWidth;
    const height = container.offsetHeight || 500;
    globeCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    globeCamera.position.z = 2.5;

    // Renderer setup
    globeRenderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
    });
    globeRenderer.setSize(width, height);
    globeRenderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(globeRenderer.domElement);

    // Create Earth
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Load Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
        'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
        () => console.log('Earth texture loaded')
    );
    
    const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        bumpScale: 0.05,
        specular: new THREE.Color(0x333333),
        shininess: 10
    });
    
    globe = new THREE.Mesh(geometry, material);
    globeScene.add(globe);

    // Add atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.05, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeScene.add(atmosphere);

    // Add study destination markers
    const destinations = [
        { name: 'USA', lat: 37.0902, lng: -95.7129, color: 0xf59e0b },
        { name: 'UK', lat: 55.3781, lng: -3.4360, color: 0xf59e0b },
        { name: 'Canada', lat: 56.1304, lng: -106.3468, color: 0xf59e0b },
        { name: 'Australia', lat: -25.2744, lng: 133.7751, color: 0xf59e0b },
        { name: 'Germany', lat: 51.1657, lng: 10.4515, color: 0xf59e0b },
        { name: 'New Zealand', lat: -40.9006, lng: 174.8860, color: 0xf59e0b }
    ];

    destinations.forEach(dest => {
        const markerGeometry = new THREE.SphereGeometry(0.02, 16, 16);
        const markerMaterial = new THREE.MeshBasicMaterial({ 
            color: dest.color,
            emissive: dest.color,
            emissiveIntensity: 0.5
        });
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        
        // Convert lat/lng to 3D coordinates
        const phi = (90 - dest.lat) * (Math.PI / 180);
        const theta = (dest.lng + 180) * (Math.PI / 180);
        const radius = 1.01;
        
        marker.position.x = -(radius * Math.sin(phi) * Math.cos(theta));
        marker.position.y = radius * Math.cos(phi);
        marker.position.z = radius * Math.sin(phi) * Math.sin(theta);
        
        marker.userData = { destination: dest.name };
        globeScene.add(marker);

        // Add pulsing animation
        gsap.to(marker.scale, {
            x: 1.5,
            y: 1.5,
            z: 1.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    globeScene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    globeScene.add(directionalLight);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    let targetRotationX = 0, targetRotationY = 0;

    container.addEventListener('mousemove', (event) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / height) * 2 + 1;
        targetRotationX = mouseY * 0.2;
        targetRotationY = mouseX * 0.2;
    });

    // Animation loop
    function animateGlobe() {
        requestAnimationFrame(animateGlobe);
        
        // Auto-rotate
        globe.rotation.y += 0.002;
        
        // Smooth mouse follow
        globeCamera.position.x += (targetRotationY - globeCamera.position.x) * 0.05;
        globeCamera.position.y += (targetRotationX - globeCamera.position.y) * 0.05;
        globeCamera.lookAt(globeScene.position);
        
        globeRenderer.render(globeScene, globeCamera);
    }
    animateGlobe();

    // Handle resize
    window.addEventListener('resize', () => {
        const newWidth = container.offsetWidth;
        const newHeight = container.offsetHeight || 500;
        globeCamera.aspect = newWidth / newHeight;
        globeCamera.updateProjectionMatrix();
        globeRenderer.setSize(newWidth, newHeight);
    });
}

/* ===================================
   3. GSAP SCROLL ANIMATIONS
   =================================== */
function initScrollAnimations() {
    if (typeof gsap === 'undefined') {
        console.log('GSAP not loaded yet');
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.hero-stats .stat', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.6,
        ease: 'power3.out'
    });

    gsap.from('.hero-cta .btn', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: 'back.out(1.7)'
    });

    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            rotation: -5,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Destination cards
    gsap.utils.toArray('.destination-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.7)'
        });
    });

    // Testimonial cards
    gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Section headers parallax
    gsap.utils.toArray('.section-header h2').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1
            },
            y: 50,
            opacity: 0.5
        });
    });

    // Floating animation for hero image
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        gsap.to(heroImage, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    }
}

/* ===================================
   4. ANIMATED COUNTER
   =================================== */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent.replace(/[^0-9]/g, '');
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        
        gsap.from(counter, {
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            textContent: 0,
            duration: 2,
            ease: 'power1.out',
            snap: { textContent: 1 },
            onUpdate: function() {
                counter.textContent = Math.ceil(counter.textContent) + suffix;
            }
        });
    });
}

/* ===================================
   5. 3D CARD TILT EFFECT
   =================================== */
function init3DCardTilt() {
    const cards = document.querySelectorAll('.service-card, .destination-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

/* ===================================
   6. SMOOTH SCROLL REVEAL
   =================================== */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/* ===================================
   7. MAGNETIC BUTTON EFFECT
   =================================== */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-accent');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

/* ===================================
   8. PARALLAX BACKGROUND
   =================================== */
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

/* ===================================
   9. LOADING ANIMATION
   =================================== */
function createLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <img src="/static/images/scholarix-logo-professional.png" alt="SCHOLARIX">
            </div>
            <div class="loader-spinner"></div>
            <p>Loading your journey...</p>
        </div>
    `;
    document.body.prepend(loader);

    window.addEventListener('load', () => {
        gsap.to('.page-loader', {
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            onComplete: () => {
                loader.remove();
            }
        });
    });
}

/* ===================================
   10. INITIALIZE ALL ANIMATIONS
   =================================== */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing SCHOLARIX Enhanced Animations...');
    
    // Create loading animation
    createLoadingAnimation();
    
    // Initialize particle background
    setTimeout(() => initParticleBackground(), 100);
    
    // Initialize 3D globe
    setTimeout(() => init3DGlobe(), 500);
    
    // Initialize GSAP animations
    setTimeout(() => {
        initScrollAnimations();
        animateCounters();
    }, 100);
    
    // Initialize interactive effects
    setTimeout(() => {
        init3DCardTilt();
        initMagneticButtons();
        initScrollReveal();
        initParallax();
    }, 200);
    
    console.log('✅ All animations initialized successfully!');
});

// Refresh ScrollTrigger on resize
window.addEventListener('resize', () => {
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
});
