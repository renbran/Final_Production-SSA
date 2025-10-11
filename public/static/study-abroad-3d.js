/**
 * SCHOLARIX Study Abroad - Themed 3D Animations
 * Study-specific 3D elements: Books, Graduation Cap, Airplane, Passport, Globe
 */

let scene3D, camera3D, renderer3D, studyElements = [];
let isStudy3DInitialized = false;

/* ===================================
   1. FLOATING 3D STUDY ELEMENTS
   =================================== */
function initFloating3DElements() {
    if (typeof THREE === 'undefined') {
        console.log('Three.js not loaded for 3D elements, retrying...');
        setTimeout(initFloating3DElements, 1000);
        return;
    }

    const container = document.getElementById('floating-3d-elements');
    if (!container || isStudy3DInitialized) return;

    isStudy3DInitialized = true;

    // Scene setup
    scene3D = new THREE.Scene();
    
    // Camera
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera3D = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera3D.position.z = 15;

    // Renderer
    renderer3D = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
    });
    renderer3D.setSize(width, height);
    renderer3D.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer3D.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene3D.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene3D.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x3b82f6, 0.4);
    directionalLight2.position.set(-5, -5, 5);
    scene3D.add(directionalLight2);

    // Create study-themed 3D objects
    createGraduationCap();
    createBooks();
    createAirplane();
    createPassport();
    createDiploma();

    // Animation loop
    animate3DElements();

    // Handle resize
    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        camera3D.aspect = newWidth / newHeight;
        camera3D.updateProjectionMatrix();
        renderer3D.setSize(newWidth, newHeight);
    });
}

/* === GRADUATION CAP === */
function createGraduationCap() {
    const group = new THREE.Group();
    
    // Cap base (flat square)
    const baseGeometry = new THREE.BoxGeometry(2, 0.1, 2);
    const baseMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x1e3a8a,
        shininess: 100
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    group.add(base);

    // Cap top (pyramid)
    const topGeometry = new THREE.ConeGeometry(1, 0.5, 4);
    const top = new THREE.Mesh(topGeometry, baseMaterial);
    top.rotation.y = Math.PI / 4;
    top.position.y = 0.3;
    group.add(top);

    // Tassel
    const tasselGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
    const tasselMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xf59e0b,
        shininess: 50
    });
    const tassel = new THREE.Mesh(tasselGeometry, tasselMaterial);
    tassel.position.set(0, -0.3, 0);
    group.add(tassel);

    // Position
    group.position.set(-8, 4, 0);
    group.rotation.x = Math.PI / 6;
    
    scene3D.add(group);
    studyElements.push({ 
        mesh: group, 
        rotationSpeed: { x: 0.002, y: 0.005, z: 0.001 },
        floatAmplitude: 0.3,
        floatSpeed: 0.8
    });
}

/* === STACK OF BOOKS === */
function createBooks() {
    const group = new THREE.Group();
    
    const colors = [0x1e3a8a, 0x3b82f6, 0xf59e0b];
    
    for (let i = 0; i < 3; i++) {
        const bookGeometry = new THREE.BoxGeometry(1.5, 0.3, 2);
        const bookMaterial = new THREE.MeshPhongMaterial({ 
            color: colors[i],
            shininess: 80
        });
        const book = new THREE.Mesh(bookGeometry, bookMaterial);
        book.position.y = i * 0.35;
        book.rotation.y = (Math.random() - 0.5) * 0.3;
        group.add(book);
    }

    group.position.set(8, -3, 0);
    group.rotation.z = Math.PI / 12;
    
    scene3D.add(group);
    studyElements.push({ 
        mesh: group, 
        rotationSpeed: { x: 0.001, y: 0.003, z: 0.002 },
        floatAmplitude: 0.4,
        floatSpeed: 1.2
    });
}

/* === AIRPLANE === */
function createAirplane() {
    const group = new THREE.Group();
    
    // Fuselage
    const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.3, 3, 16);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x3b82f6,
        shininess: 100
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.z = Math.PI / 2;
    group.add(body);

    // Wings
    const wingGeometry = new THREE.BoxGeometry(4, 0.1, 1);
    const wingMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xffffff,
        shininess: 100
    });
    const wings = new THREE.Mesh(wingGeometry, wingMaterial);
    wings.position.y = 0;
    group.add(wings);

    // Tail
    const tailGeometry = new THREE.BoxGeometry(0.1, 1.5, 0.8);
    const tail = new THREE.Mesh(tailGeometry, wingMaterial);
    tail.position.x = -1.3;
    tail.position.y = 0.5;
    group.add(tail);

    // Nose cone
    const noseGeometry = new THREE.ConeGeometry(0.3, 0.8, 16);
    const nose = new THREE.Mesh(noseGeometry, bodyMaterial);
    nose.rotation.z = -Math.PI / 2;
    nose.position.x = 1.9;
    group.add(nose);

    group.position.set(-6, -5, 0);
    group.rotation.set(Math.PI / 8, Math.PI / 4, 0);
    group.scale.set(0.6, 0.6, 0.6);
    
    scene3D.add(group);
    studyElements.push({ 
        mesh: group, 
        rotationSpeed: { x: 0.003, y: 0.002, z: 0.001 },
        floatAmplitude: 0.5,
        floatSpeed: 1.5,
        orbitRadius: 2,
        orbitSpeed: 0.001
    });
}

/* === PASSPORT === */
function createPassport() {
    const group = new THREE.Group();
    
    // Cover
    const coverGeometry = new THREE.BoxGeometry(1.5, 2, 0.1);
    const coverMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x8b0000,
        shininess: 60
    });
    const cover = new THREE.Mesh(coverGeometry, coverMaterial);
    group.add(cover);

    // Gold emblem (small sphere)
    const emblemGeometry = new THREE.CircleGeometry(0.3, 32);
    const emblemMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xffd700,
        shininess: 100
    });
    const emblem = new THREE.Mesh(emblemGeometry, emblemMaterial);
    emblem.position.z = 0.06;
    group.add(emblem);

    group.position.set(6, 5, 0);
    group.rotation.x = Math.PI / 6;
    
    scene3D.add(group);
    studyElements.push({ 
        mesh: group, 
        rotationSpeed: { x: 0.002, y: 0.004, z: 0.001 },
        floatAmplitude: 0.3,
        floatSpeed: 1.0
    });
}

/* === DIPLOMA === */
function createDiploma() {
    const group = new THREE.Group();
    
    // Rolled diploma
    const diplomaGeometry = new THREE.CylinderGeometry(0.15, 0.15, 2, 32);
    const diplomaMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xfff8dc,
        shininess: 30
    });
    const diploma = new THREE.Mesh(diplomaGeometry, diplomaMaterial);
    diploma.rotation.z = Math.PI / 2;
    group.add(diploma);

    // Ribbon
    const ribbonGeometry = new THREE.TorusGeometry(0.2, 0.05, 16, 32);
    const ribbonMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xf59e0b,
        shininess: 80
    });
    const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    ribbon.rotation.y = Math.PI / 2;
    group.add(ribbon);

    group.position.set(0, 6, 0);
    group.rotation.z = Math.PI / 8;
    
    scene3D.add(group);
    studyElements.push({ 
        mesh: group, 
        rotationSpeed: { x: 0.001, y: 0.003, z: 0.002 },
        floatAmplitude: 0.4,
        floatSpeed: 0.9
    });
}

/* === ANIMATION LOOP === */
let time3D = 0;
function animate3DElements() {
    requestAnimationFrame(animate3DElements);
    
    time3D += 0.01;
    
    studyElements.forEach((element, index) => {
        const mesh = element.mesh;
        
        // Rotation
        mesh.rotation.x += element.rotationSpeed.x;
        mesh.rotation.y += element.rotationSpeed.y;
        mesh.rotation.z += element.rotationSpeed.z;
        
        // Floating animation
        const floatOffset = Math.sin(time3D * element.floatSpeed + index * 2) * element.floatAmplitude;
        mesh.position.y += (floatOffset - mesh.userData.lastFloat || 0);
        mesh.userData.lastFloat = floatOffset;
        
        // Orbital motion for airplane
        if (element.orbitRadius) {
            const orbitAngle = time3D * element.orbitSpeed;
            mesh.position.x = Math.cos(orbitAngle) * element.orbitRadius - 6;
            mesh.position.z = Math.sin(orbitAngle) * element.orbitRadius;
        }
    });
    
    renderer3D.render(scene3D, camera3D);
}

/* ===================================
   2. ENHANCED LOADING SCREEN
   =================================== */
function createEnhancedLoadingScreen() {
    const loader = document.createElement('div');
    loader.className = 'enhanced-page-loader';
    loader.innerHTML = `
        <div class="loader-background">
            <canvas id="loader-particles"></canvas>
        </div>
        <div class="loader-content-enhanced">
            <div class="loader-logo-container">
                <img src="/static/images/scholarix-logo-professional.png" alt="SCHOLARIX" class="loader-logo-enhanced">
                <div class="logo-glow"></div>
            </div>
            <div class="loader-progress-container">
                <div class="loader-progress-bar">
                    <div class="loader-progress-fill"></div>
                </div>
                <div class="loader-percentage">0%</div>
            </div>
            <p class="loader-text-enhanced">Preparing your journey to success...</p>
            <div class="loader-icons">
                <i class="fas fa-graduation-cap loader-icon"></i>
                <i class="fas fa-passport loader-icon"></i>
                <i class="fas fa-plane loader-icon"></i>
                <i class="fas fa-book loader-icon"></i>
                <i class="fas fa-globe loader-icon"></i>
            </div>
        </div>
    `;
    document.body.prepend(loader);

    // Animated progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
        }
        
        const fillElement = document.querySelector('.loader-progress-fill');
        const percentageElement = document.querySelector('.loader-percentage');
        
        if (fillElement && percentageElement) {
            fillElement.style.width = progress + '%';
            percentageElement.textContent = Math.floor(progress) + '%';
        }
    }, 200);

    // Initialize loader particles
    initLoaderParticles();

    // Remove loader when page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (typeof gsap !== 'undefined') {
                gsap.to('.enhanced-page-loader', {
                    opacity: 0,
                    duration: 0.8,
                    onComplete: () => {
                        loader.remove();
                    }
                });
            } else {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 800);
            }
        }, 500);
    });
}

/* === LOADER PARTICLE ANIMATION === */
function initLoaderParticles() {
    const canvas = document.getElementById('loader-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            radius: Math.random() * 3 + 1,
            color: ['#1e3a8a', '#3b82f6', '#f59e0b'][Math.floor(Math.random() * 3)]
        });
    }

    function animateLoaderParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        
        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 150})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animateLoaderParticles);
    }
    
    animateLoaderParticles();
}

/* ===================================
   3. BACKGROUND WAVE ANIMATION
   =================================== */
function initWaveBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'wave-background';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
    `;
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;
    
    function drawWave(offset, amplitude, frequency, color, opacity) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 5) {
            const y = canvas.height - 100 + Math.sin((x + offset) * frequency) * amplitude;
            ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(0, canvas.height - 200, 0, canvas.height);
        gradient.addColorStop(0, `${color}00`);
        gradient.addColorStop(1, `${color}${opacity}`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
    }
    
    function animateWaves() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        time += 0.01;
        
        // Multiple wave layers
        drawWave(time * 50, 30, 0.01, '#1e3a8a', '10');
        drawWave(time * 40, 25, 0.012, '#3b82f6', '08');
        drawWave(time * 60, 20, 0.008, '#f59e0b', '05');
        
        requestAnimationFrame(animateWaves);
    }
    
    animateWaves();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/* ===================================
   4. INITIALIZE ALL
   =================================== */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎓 Initializing Study Abroad 3D Elements...');
    
    // Create enhanced loading screen first
    createEnhancedLoadingScreen();
    
    // Initialize background animations
    setTimeout(() => {
        initWaveBackground();
    }, 100);
    
    // Initialize 3D elements after a delay
    setTimeout(() => {
        initFloating3DElements();
    }, 1000);
    
    console.log('✅ Study Abroad 3D Elements initialized!');
});
