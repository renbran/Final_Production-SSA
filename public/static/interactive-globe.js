/*!
 * Interactive 3D Globe for Study Destinations
 * Enhanced with Three.js for immersive experience
 * Version: 2.1.0 - Fixed Globe Rendering
 */

// Globe initialization state
let isGlobeInitialized = false;
let globeScene, globeCamera, globeRenderer, globeControls;
let globeMesh, atmosphere;
let countryPins = [];
let isAutoRotating = true;
let globeContainer;
let animationId;

// Country data with comprehensive information
const globeCountries = [
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    position: { lat: 51.1657, lng: 10.4515 },
    type: 'popular',
    description: 'European leader in engineering and technology education with excellent post-study work opportunities.',
    tuitionRange: '€0 - €3,000',
    livingCost: '€800 - €1,200',
    visaSuccess: '95%',
    workPermit: '18 months post-study',
    programs: [
      { name: 'Computer Science', duration: '3-4 years', price: 'Free - €500/semester' },
      { name: 'Mechanical Engineering', duration: '3-4 years', price: 'Free - €350/semester' },
      { name: 'Business Administration', duration: '3-4 years', price: '€2,000 - €20,000/year' },
      { name: 'Data Science', duration: '2 years', price: 'Free - €1,500/semester' }
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    position: { lat: 56.1304, lng: -106.3468 },
    type: 'popular',
    description: 'World-class education system with excellent immigration pathways and multicultural environment.',
    tuitionRange: 'CAD 15,000 - 30,000',
    livingCost: 'CAD 12,000 - 15,000',
    visaSuccess: '85%',
    workPermit: '3 years post-graduation',
    programs: [
      { name: 'Software Engineering', duration: '4 years', price: 'CAD 25,000 - 40,000/year' },
      { name: 'Business Analytics', duration: '2 years', price: 'CAD 20,000 - 35,000/year' },
      { name: 'Healthcare Management', duration: '2-3 years', price: 'CAD 18,000 - 30,000/year' },
      { name: 'Environmental Science', duration: '4 years', price: 'CAD 22,000 - 35,000/year' }
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    position: { lat: -25.2744, lng: 133.7751 },
    type: 'premium',
    description: 'Innovation hub with excellent quality of life and strong industry connections.',
    tuitionRange: 'AUD 20,000 - 45,000',
    livingCost: 'AUD 20,000 - 25,000',
    visaSuccess: '78%',
    workPermit: '2-4 years post-study',
    programs: [
      { name: 'Information Technology', duration: '3-4 years', price: 'AUD 30,000 - 45,000/year' },
      { name: 'Mining Engineering', duration: '4 years', price: 'AUD 35,000 - 50,000/year' },
      { name: 'International Business', duration: '3 years', price: 'AUD 28,000 - 42,000/year' },
      { name: 'Biotechnology', duration: '3-4 years', price: 'AUD 32,000 - 48,000/year' }
    ]
  },
  {
    id: 'malta',
    name: 'Malta',
    flag: '🇲🇹',
    position: { lat: 35.9375, lng: 14.3754 },
    type: 'affordable',
    description: 'Affordable EU education in English with Mediterranean lifestyle and EU benefits.',
    tuitionRange: '€1,500 - €4,000',
    livingCost: '€600 - €900',
    visaSuccess: '96%',
    workPermit: 'EU work rights',
    programs: [
      { name: 'Digital Marketing', duration: '3 years', price: '€3,500/year' },
      { name: 'Finance & Banking', duration: '3 years', price: '€4,000/year' },
      { name: 'Tourism Management', duration: '3 years', price: '€3,000/year' },
      { name: 'English Literature', duration: '3 years', price: '€2,500/year' }
    ]
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    position: { lat: 52.1326, lng: 5.2913 },
    type: 'popular',
    description: 'English-taught programs in Europe\'s heart with innovative teaching methods.',
    tuitionRange: '€8,000 - 20,000',
    livingCost: '€800 - €1,400',
    visaSuccess: '88%',
    workPermit: '1 year search + 5 years skilled work',
    programs: [
      { name: 'International Business', duration: '3 years', price: '€8,500/year' },
      { name: 'Computer Science', duration: '3 years', price: '€12,000/year' },
      { name: 'Psychology', duration: '3 years', price: '€10,500/year' },
      { name: 'Architecture', duration: '5 years', price: '€15,000/year' }
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    position: { lat: 1.3521, lng: 103.8198 },
    type: 'premium',
    description: 'Asia\'s education and business hub with world-class universities and career opportunities.',
    tuitionRange: 'SGD 30,000 - 50,000',
    livingCost: 'SGD 15,000 - 20,000',
    visaSuccess: '82%',
    workPermit: '1 year + work visa options',
    programs: [
      { name: 'Financial Engineering', duration: '4 years', price: 'SGD 45,000/year' },
      { name: 'Computer Engineering', duration: '4 years', price: 'SGD 40,000/year' },
      { name: 'Business Administration', duration: '4 years', price: 'SGD 50,000/year' },
      { name: 'Data Science & Analytics', duration: '4 years', price: 'SGD 42,000/year' }
    ]
  },
  {
    id: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    position: { lat: 53.1424, lng: -7.6921 },
    type: 'popular',
    description: 'Tech hub of Europe with friendly culture and strong industry partnerships.',
    tuitionRange: '€10,000 - 25,000',
    livingCost: '€900 - €1,500',
    visaSuccess: '90%',
    workPermit: '2 years post-graduation',
    programs: [
      { name: 'Software Development', duration: '4 years', price: '€12,000/year' },
      { name: 'Pharmaceutical Science', duration: '4 years', price: '€18,000/year' },
      { name: 'Digital Marketing', duration: '3 years', price: '€11,000/year' },
      { name: 'International Business', duration: '4 years', price: '€13,500/year' }
    ]
  },
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    position: { lat: 46.6034, lng: 1.8883 },
    type: 'affordable',
    description: 'Rich cultural heritage with affordable education and excellent research facilities.',
    tuitionRange: '€170 - €3,000',
    livingCost: '€700 - €1,200',
    visaSuccess: '85%',
    workPermit: '2 years post-graduation',
    programs: [
      { name: 'Engineering', duration: '5 years', price: '€500/year (public)' },
      { name: 'Business School', duration: '3 years', price: '€15,000/year (private)' },
      { name: 'Arts & Design', duration: '3-5 years', price: '€200-600/year' },
      { name: 'Computer Science', duration: '3 years', price: '€170/year (EU)' }
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    position: { lat: 55.3781, lng: -3.4360 },
    type: 'premium',
    description: 'World-renowned universities with strong global recognition and networking opportunities.',
    tuitionRange: '£10,000 - 40,000',
    livingCost: '£12,000 - 15,000',
    visaSuccess: '75%',
    workPermit: '2 years post-study work visa',
    programs: [
      { name: 'Medicine', duration: '5-6 years', price: '£35,000-50,000/year' },
      { name: 'Computer Science', duration: '3 years', price: '£15,000-25,000/year' },
      { name: 'Business Administration', duration: '3 years', price: '£12,000-30,000/year' },
      { name: 'Law', duration: '3 years', price: '£14,000-28,000/year' }
    ]
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    position: { lat: 41.8719, lng: 12.5674 },
    type: 'affordable',
    description: 'Rich academic tradition with affordable tuition and beautiful study environment.',
    tuitionRange: '€900 - €4,000',
    livingCost: '€700 - €1,100',
    visaSuccess: '88%',
    workPermit: '1 year job search + work permit',
    programs: [
      { name: 'Fashion Design', duration: '3 years', price: '€2,000/year' },
      { name: 'Architecture', duration: '5 years', price: '€1,500/year' },
      { name: 'International Relations', duration: '3 years', price: '€1,800/year' },
      { name: 'Engineering', duration: '3+2 years', price: '€2,500/year' }
    ]
  }
];

// Initialize the 3D Globe
function initializeGlobe() {
  console.log('initializeGlobe called, isGlobeInitialized:', isGlobeInitialized);
  
  if (isGlobeInitialized) {
    console.log('Globe already initialized, skipping...');
    return;
  }
  
  globeContainer = document.getElementById('globe-canvas-container');
  if (!globeContainer) {
    console.error('Globe container not found');
    return;
  }
  
  console.log('Globe container found, setting loading state...');
  
  // Set loading state
  globeContainer.innerHTML = `
    <div class="globe-loading">
      <div class="globe-loading-spinner"></div>
      <div>Loading Interactive Globe...</div>
    </div>
  `;
  
  // Check if Three.js is loaded - wait for it if not
  let attempts = 0;
  const maxAttempts = 50; // 5 seconds max wait time
  
  const checkThreeJS = () => {
    attempts++;
    
    if (typeof THREE !== 'undefined') {
      console.log('Three.js loaded, creating globe scene');
      createGlobeScene();
    } else if (attempts < maxAttempts) {
      console.log(`Waiting for Three.js to load... (attempt ${attempts}/${maxAttempts})`);
      setTimeout(checkThreeJS, 100);
    } else {
      console.warn('Three.js failed to load after 5 seconds, showing fallback');
      showGlobeFallback();
    }
  };
  
  checkThreeJS();
}

// Create the main globe scene
function createGlobeScene() {
  try {
    console.log('Creating globe scene...');
    
    // Scene setup
    globeScene = new THREE.Scene();
    globeCamera = new THREE.PerspectiveCamera(75, globeContainer.offsetWidth / globeContainer.offsetHeight, 0.1, 1000);
    globeRenderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    
    globeRenderer.setSize(globeContainer.offsetWidth, globeContainer.offsetHeight);
    globeRenderer.setClearColor(0x0a0e27, 1);
    globeRenderer.shadowMap.enabled = true;
    globeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Clear loading content and add renderer
    globeContainer.innerHTML = '';
    globeContainer.appendChild(globeRenderer.domElement);
  
  // Create globe
  createGlobe();
  
  // Create atmosphere
  createAtmosphere();
  
  // Add lighting
  setupLighting();
  
  // Create country pins
  createCountryPins();
  
  // Setup controls
  setupControls();
  
  // Setup camera
  globeCamera.position.set(0, 0, 5);
  
  // Start animation
  animateGlobe();
  
    // Setup event listeners
    setupGlobeEventListeners();
    
    isGlobeInitialized = true;
    console.log('Globe scene created successfully');
  } catch (error) {
    console.error('Error creating globe scene:', error);
    showGlobeFallback();
  }
}

// Show fallback content if globe fails to load
function showGlobeFallback() {
  console.log('Showing globe fallback content');
  globeContainer.innerHTML = `
    <div class="globe-fallback">
      <div class="fallback-content">
        <h3>🌍 Study Destinations</h3>
        <p>Explore our top study destinations worldwide</p>
        <div class="fallback-countries">
          ${globeCountries.map(country => `
            <button class="fallback-country-btn" onclick="showCountryModal('${country.id}')">
              ${country.flag} ${country.name}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Create the main globe mesh
function createGlobe() {
  const globeGeometry = new THREE.SphereGeometry(2, 64, 64);
  
  // Load earth texture (fallback to color if texture fails)
  const textureLoader = new THREE.TextureLoader();
  
  const globeMaterial = new THREE.MeshPhongMaterial({
    color: 0x2563eb,
    shininess: 0.8,
    transparent: true,
    opacity: 0.9
  });
  
  // Try to load earth texture
  textureLoader.load(
    'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
    (texture) => {
      globeMaterial.map = texture;
      globeMaterial.needsUpdate = true;
    },
    undefined,
    () => {
      // Fallback gradient material
      globeMaterial.color = new THREE.Color(0x1e40af);
    }
  );
  
  globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
  globeMesh.rotation.y = Math.PI;
  globeScene.add(globeMesh);
}

// Create atmosphere effect
function createAtmosphere() {
  const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 64);
  const atmosphereMaterial = new THREE.MeshPhongMaterial({
    color: 0x60a5fa,
    transparent: true,
    opacity: 0.3,
    side: THREE.BackSide
  });
  
  atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  globeScene.add(atmosphere);
}

// Setup lighting for the globe
function setupLighting() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  globeScene.add(ambientLight);
  
  // Directional light (sun)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 3, 5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  globeScene.add(directionalLight);
  
  // Point light for better illumination
  const pointLight = new THREE.PointLight(0x60a5fa, 0.5, 100);
  pointLight.position.set(-5, -3, -5);
  globeScene.add(pointLight);
}

// Create interactive pins for countries
function createCountryPins() {
  countryPins = [];
  
  globeCountries.forEach((country, index) => {
    const pin = createCountryPin(country, index);
    countryPins.push(pin);
    globeScene.add(pin.group);
  });
}

// Create individual country pin
function createCountryPin(country, index) {
  const group = new THREE.Group();
  
  // Convert lat/lng to 3D coordinates
  const phi = (90 - country.position.lat) * (Math.PI / 180);
  const theta = (country.position.lng + 180) * (Math.PI / 180);
  
  const x = -(2.1 * Math.sin(phi) * Math.cos(theta));
  const y = 2.1 * Math.cos(phi);
  const z = 2.1 * Math.sin(phi) * Math.sin(theta);
  
  // Pin base
  const pinGeometry = new THREE.CylinderGeometry(0.02, 0.05, 0.3, 8);
  let pinColor;
  
  switch (country.type) {
    case 'popular':
      pinColor = 0x10b981; // Green
      break;
    case 'affordable':
      pinColor = 0xf59e0b; // Orange
      break;
    case 'premium':
      pinColor = 0x8b5cf6; // Purple
      break;
    default:
      pinColor = 0x3b82f6; // Blue
  }
  
  const pinMaterial = new THREE.MeshPhongMaterial({
    color: pinColor,
    shininess: 0.8
  });
  
  const pinMesh = new THREE.Mesh(pinGeometry, pinMaterial);
  
  // Pin glow effect
  const glowGeometry = new THREE.SphereGeometry(0.08, 16, 16);
  const glowMaterial = new THREE.MeshPhongMaterial({
    color: pinColor,
    transparent: true,
    opacity: 0.6,
    emissive: pinColor,
    emissiveIntensity: 0.3
  });
  
  const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
  glowMesh.position.y = 0.1;
  
  // Add pulsing animation
  const animationOffset = index * 0.5;
  
  group.add(pinMesh);
  group.add(glowMesh);
  group.position.set(x, y, z);
  group.lookAt(0, 0, 0);
  group.rotateX(Math.PI / 2);
  
  // Store country data
  group.userData = {
    country: country,
    originalScale: group.scale.clone(),
    animationOffset: animationOffset,
    glow: glowMesh
  };
  
  return {
    group: group,
    country: country
  };
}

// Setup orbit controls
function setupControls() {
  // Simple mouse controls without OrbitControls dependency
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  
  // Mouse event handlers
  globeRenderer.domElement.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMousePosition = { x: event.clientX, y: event.clientY };
  });
  
  globeRenderer.domElement.addEventListener('mouseup', () => {
    isDragging = false;
  });
  
  globeRenderer.domElement.addEventListener('mousemove', (event) => {
    if (!isDragging || !globeMesh) return;
    
    const deltaMove = {
      x: event.clientX - previousMousePosition.x,
      y: event.clientY - previousMousePosition.y
    };
    
    // Rotate globe based on mouse movement
    globeMesh.rotation.y += deltaMove.x * 0.01;
    globeMesh.rotation.x += deltaMove.y * 0.01;
    
    // Limit vertical rotation
    globeMesh.rotation.x = Math.max(-Math.PI/3, Math.min(Math.PI/3, globeMesh.rotation.x));
    
    previousMousePosition = { x: event.clientX, y: event.clientY };
  });
  
  // Zoom with scroll wheel
  globeRenderer.domElement.addEventListener('wheel', (event) => {
    event.preventDefault();
    const zoomDelta = event.deltaY > 0 ? 0.1 : -0.1;
    globeCamera.position.z = Math.max(3, Math.min(8, globeCamera.position.z + zoomDelta));
  });
}

// Animation loop
function animateGlobe() {
  animationId = requestAnimationFrame(animateGlobe);
  
  const time = Date.now() * 0.001;
  
  // Auto-rotate globe (only if not being manually controlled)
  if (globeMesh && isAutoRotating) {
    globeMesh.rotation.y += 0.002;
  }
  
  // Animate pins
  countryPins.forEach((pin) => {
    if (pin.group && pin.group.userData) {
      const glow = pin.group.userData.glow;
      const offset = pin.group.userData.animationOffset;
      
      // Pulsing effect
      const scale = 1 + 0.2 * Math.sin(time * 2 + offset);
      if (glow) {
        glow.scale.set(scale, scale, scale);
      }
      
      // Subtle bounce
      const bounce = 0.02 * Math.sin(time * 3 + offset);
      if (pin.group.position) {
        pin.group.position.setY(pin.group.position.y + bounce);
      }
    }
  });
  
  // Render scene
  if (globeRenderer && globeScene && globeCamera) {
    globeRenderer.render(globeScene, globeCamera);
  }
}

// Setup event listeners for globe interactions
function setupGlobeEventListeners() {
  // Mouse click detection
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  function onMouseClick(event) {
    const rect = globeContainer.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.setFromCamera(mouse, globeCamera);
    
    // Check for pin intersections
    const pinObjects = countryPins.map(pin => pin.group);
    const intersects = raycaster.intersectObjects(pinObjects, true);
    
    if (intersects.length > 0) {
      const clickedPin = intersects[0].object.parent;
      if (clickedPin.userData && clickedPin.userData.country) {
        showCountryModal(clickedPin.userData.country);
      }
    }
  }
  
  function onMouseMove(event) {
    const rect = globeContainer.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.setFromCamera(mouse, globeCamera);
    
    // Check for pin intersections
    const pinObjects = countryPins.map(pin => pin.group);
    const intersects = raycaster.intersectObjects(pinObjects, true);
    
    // Reset all pins
    countryPins.forEach(pin => {
      pin.group.scale.copy(pin.group.userData.originalScale);
    });
    
    // Highlight hovered pin
    if (intersects.length > 0) {
      const hoveredPin = intersects[0].object.parent;
      hoveredPin.scale.multiplyScalar(1.5);
      globeContainer.style.cursor = 'pointer';
    } else {
      globeContainer.style.cursor = 'grab';
    }
  }
  
  globeRenderer.domElement.addEventListener('click', onMouseClick);
  globeRenderer.domElement.addEventListener('mousemove', onMouseMove);
  
  // Globe controls
  setupGlobeControls();
  
  // Window resize
  window.addEventListener('resize', onGlobeWindowResize);
}

// Setup globe control buttons
function setupGlobeControls() {
  const rotateBtn = document.getElementById('globe-rotate-btn');
  const resetBtn = document.getElementById('globe-reset-btn');
  const fullscreenBtn = document.getElementById('globe-fullscreen-btn');
  
  if (rotateBtn) {
    rotateBtn.addEventListener('click', toggleAutoRotation);
  }
  
  if (resetBtn) {
    resetBtn.addEventListener('click', resetGlobeView);
  }
  
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', toggleGlobeFullscreen);
  }
  
  // Quick country buttons
  document.querySelectorAll('.quick-country-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const countryId = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
      focusCountry(countryId);
    });
  });
}

// Toggle auto-rotation
function toggleAutoRotation() {
  isAutoRotating = !isAutoRotating;
  if (globeControls) {
    globeControls.autoRotate = isAutoRotating;
  }
  
  const btn = document.getElementById('globe-rotate-btn');
  if (btn) {
    btn.classList.toggle('active', isAutoRotating);
  }
}

// Reset globe view
function resetGlobeView() {
  if (globeCamera && globeControls) {
    globeCamera.position.set(0, 0, 5);
    globeControls.reset();
  }
}

// Toggle fullscreen mode
function toggleGlobeFullscreen() {
  if (!document.fullscreenElement) {
    globeContainer.requestFullscreen().catch(err => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Focus on specific country
function focusCountry(countryId) {
  const country = globeCountries.find(c => c.id === countryId);
  if (!country) return;
  
  // Convert lat/lng to 3D coordinates for camera
  const phi = (90 - country.position.lat) * (Math.PI / 180);
  const theta = (country.position.lng + 180) * (Math.PI / 180);
  
  const distance = 4;
  const x = -(distance * Math.sin(phi) * Math.cos(theta));
  const y = distance * Math.cos(phi);
  const z = distance * Math.sin(phi) * Math.sin(theta);
  
  // Animate camera to country
  if (globeCamera && globeControls) {
    const targetPosition = new THREE.Vector3(x, y, z);
    
    // Smooth camera animation (basic implementation)
    const currentPosition = globeCamera.position.clone();
    const animationSteps = 60;
    let currentStep = 0;
    
    function animateCamera() {
      if (currentStep < animationSteps) {
        const progress = currentStep / animationSteps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        globeCamera.position.lerpVectors(currentPosition, targetPosition, easeProgress);
        globeCamera.lookAt(0, 0, 0);
        
        currentStep++;
        requestAnimationFrame(animateCamera);
      } else {
        // Show country modal after animation
        setTimeout(() => showCountryModal(country), 500);
      }
    }
    
    animateCamera();
  }
}

// Show country information modal
function showCountryModal(country) {
  const modal = document.getElementById('country-info-modal');
  if (!modal) return;
  
  // Populate modal content
  const countryName = document.getElementById('modal-country-name');
  const countryFlag = document.getElementById('modal-country-flag');
  const countryDescription = document.getElementById('modal-country-description');
  const tuitionRange = document.getElementById('modal-tuition-range');
  const livingCost = document.getElementById('modal-living-cost');
  const visaSuccess = document.getElementById('modal-visa-success');
  const workPermit = document.getElementById('modal-work-permit');
  const programsList = document.getElementById('modal-programs');
  
  if (countryName) countryName.textContent = country.name;
  if (countryFlag) countryFlag.textContent = country.flag;
  if (countryDescription) countryDescription.textContent = country.description;
  if (tuitionRange) tuitionRange.textContent = country.tuitionRange;
  if (livingCost) livingCost.textContent = country.livingCost;
  if (visaSuccess) visaSuccess.textContent = country.visaSuccess;
  if (workPermit) workPermit.textContent = country.workPermit;
  
  // Populate programs
  if (programsList && country.programs) {
    programsList.innerHTML = country.programs.map(program => `
      <div class="program-item">
        <h5>${program.name}</h5>
        <p>Duration: ${program.duration}</p>
        <div class="program-price">${program.price}</div>
      </div>
    `).join('');
  }
  
  // Show modal
  modal.classList.add('active');
  modal.style.display = 'flex';
  
  // Setup close functionality
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.onclick = () => hideCountryModal();
  }
  
  // Close on backdrop click
  modal.onclick = (e) => {
    if (e.target === modal) {
      hideCountryModal();
    }
  };
  
  // ESC key to close
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      hideCountryModal();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

// Hide country modal
function hideCountryModal() {
  const modal = document.getElementById('country-info-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

// Handle window resize
function onGlobeWindowResize() {
  if (!globeCamera || !globeRenderer || !globeContainer) return;
  
  const width = globeContainer.offsetWidth;
  const height = globeContainer.offsetHeight;
  
  globeCamera.aspect = width / height;
  globeCamera.updateProjectionMatrix();
  
  globeRenderer.setSize(width, height);
}

// Fallback for when Three.js fails to load
function showGlobeFallback() {
  globeContainer.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: rgba(255,255,255,0.8); text-align: center; padding: 2rem;">
      <div style="font-size: 4rem; margin-bottom: 1rem;">🌍</div>
      <h3 style="color: white; margin-bottom: 1rem;">Interactive Globe Unavailable</h3>
      <p style="margin-bottom: 2rem;">Please check your internet connection or try refreshing the page.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
        ${globeCountries.map(country => `
          <button class="quick-country-btn" onclick="showCountryModal(${JSON.stringify(country).replace(/"/g, '&quot;')})">
            ${country.flag} ${country.name}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

// Global functions for external access
window.initializeGlobe = initializeGlobe;
window.focusCountry = focusCountry;
window.showCountryModal = showCountryModal;
window.hideCountryModal = hideCountryModal;
window.openConsultationModal = function() {
  // Integration with existing consultation modal
  const consultationModal = document.getElementById('consultationModal');
  if (consultationModal) {
    consultationModal.style.display = 'block';
  }
};

window.downloadCountryGuide = function() {
  // Trigger download functionality
  showNotification('Country guide download will be available soon!', 'info');
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, checking for globe section...');
  
  const globeSection = document.getElementById('destinations-globe');
  if (globeSection) {
    console.log('Globe section found, setting up observer...');
    
    // Try immediate initialization first
    setTimeout(() => {
      if (!isGlobeInitialized) {
        console.log('Attempting immediate globe initialization...');
        initializeGlobe();
      }
    }, 1000);
    
    // Also set up intersection observer as backup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isGlobeInitialized) {
          console.log('Globe section in view, initializing...');
          setTimeout(initializeGlobe, 500);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(globeSection);
  } else {
    console.error('Globe section not found!');
  }
});

// Utility function for notifications
function showNotification(message, type = 'info') {
  // Integration with existing notification system
  console.log(`${type.toUpperCase()}: ${message}`);
}