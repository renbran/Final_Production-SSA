/*!
 * Working 3D Interactive Globe for SCHOLARIX Study Destinations
 * Simplified, reliable implementation with Three.js
 * Version: 3.0.0 - Production Ready
 */

// Global variables
let scene, camera, renderer, globe, controls;
let countryPins = [];
let isAutoRotating = true;
let animationId;
let globeContainer;

// Study destinations data
const studyDestinations = [
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    position: { lat: 51.1657, lng: 10.4515 },
    universities: '250+',
    tuitionRange: '€0 - €3,000',
    livingCost: '€800 - €1,200',
    visaSuccess: '95%',
    workPermit: '18 months post-study',
    description: 'European leader in engineering and technology education with excellent post-study work opportunities.',
    programs: [
      'Computer Science - Free tuition',
      'Mechanical Engineering - €350/semester',
      'Business Administration - €2,000-€20,000/year',
      'Data Science - €1,500/semester'
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    position: { lat: 56.1304, lng: -106.3468 },
    universities: '500+',
    tuitionRange: 'CAD 15,000 - 30,000',
    livingCost: 'CAD 12,000 - 15,000',
    visaSuccess: '85%',
    workPermit: '3 years post-graduation',
    description: 'World-class education system with excellent immigration pathways and multicultural environment.',
    programs: [
      'Software Engineering - CAD 25,000-40,000/year',
      'Business Analytics - CAD 20,000-35,000/year',
      'Healthcare Management - CAD 18,000-30,000/year',
      'Environmental Science - CAD 22,000-35,000/year'
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    position: { lat: -25.2744, lng: 133.7751 },
    universities: '300+',
    tuitionRange: 'AUD 20,000 - 45,000',
    livingCost: 'AUD 20,000 - 25,000',
    visaSuccess: '78%',
    workPermit: '2-4 years post-study',
    description: 'Innovation hub with excellent quality of life and strong industry connections.',
    programs: [
      'Information Technology - AUD 30,000-45,000/year',
      'Mining Engineering - AUD 35,000-50,000/year',
      'International Business - AUD 28,000-42,000/year',
      'Biotechnology - AUD 32,000-48,000/year'
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    position: { lat: 55.3781, lng: -3.4360 },
    universities: '400+',
    tuitionRange: '£10,000 - £38,000',
    livingCost: '£12,000 - £18,000',
    visaSuccess: '88%',
    workPermit: '2 years post-study',
    description: 'Home to world-renowned universities with rich academic heritage and excellent research opportunities.',
    programs: [
      'Computer Science - £15,000-35,000/year',
      'Business Management - £18,000-40,000/year',
      'Medicine - £25,000-50,000/year',
      'Engineering - £20,000-38,000/year'
    ]
  },
  {
    id: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    position: { lat: 53.1424, lng: -7.6921 },
    universities: '150+',
    tuitionRange: '€9,000 - €25,000',
    livingCost: '€7,000 - €12,000',
    visaSuccess: '90%',
    workPermit: '2 years post-graduation',
    description: 'Tech hub of Europe with friendly culture and strong industry connections.',
    programs: [
      'Technology - €12,000-25,000/year',
      'Pharmaceuticals - €15,000-28,000/year',
      'Finance - €10,000-22,000/year',
      'Data Analytics - €14,000-26,000/year'
    ]
  },
  {
    id: 'malta',
    name: 'Malta',
    flag: '🇲🇹',
    position: { lat: 35.9375, lng: 14.3754 },
    universities: '50+',
    tuitionRange: '€1,500 - €4,000',
    livingCost: '€600 - €900',
    visaSuccess: '96%',
    workPermit: 'EU work rights',
    description: 'Affordable EU education in English with Mediterranean lifestyle and EU benefits.',
    programs: [
      'Digital Marketing - €3,500/year',
      'Finance & Banking - €4,000/year',
      'Tourism Management - €3,000/year',
      'English Literature - €2,500/year'
    ]
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    position: { lat: 52.1326, lng: 5.2913 },
    universities: '200+',
    tuitionRange: '€8,000 - 20,000',
    livingCost: '€800 - €1,400',
    visaSuccess: '88%',
    workPermit: '1 year search + 5 years skilled work',
    description: 'English-taught programs in Europe\'s heart with innovative teaching methods.',
    programs: [
      'Engineering - €12,000-20,000/year',
      'Business Studies - €8,000-16,000/year',
      'International Relations - €10,000-18,000/year',
      'Environmental Science - €9,000-17,000/year'
    ]
  },
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    position: { lat: 46.6034, lng: 1.8883 },
    universities: '600+',
    tuitionRange: '€170 - €3,770',
    livingCost: '€600 - €1,200',
    visaSuccess: '87%',
    workPermit: '2 years post-graduation',
    description: 'Excellent higher education system with low tuition fees and rich cultural experience.',
    programs: [
      'Engineering - €600-3,000/year',
      'Business - €1,000-15,000/year',
      'Arts & Design - €400-2,000/year',
      'Sciences - €170-1,500/year'
    ]
  }
];

// Convert lat/lng to 3D coordinates
function latLngToVector3(lat, lng, radius = 2) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// Initialize the globe
function initializeWorkingGlobe(retryCount = 0) {
  console.log('🌍 Initializing Working Globe...');
  
  globeContainer = document.getElementById('interactive-globe');
  if (!globeContainer) {
    console.error('❌ Globe container not found');
    return;
  }

  // Clear existing content
  globeContainer.innerHTML = '';

  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    if (retryCount < 50) { // Max 5 seconds (50 * 100ms)
      console.log(`⏳ Waiting for Three.js to load... (attempt ${retryCount + 1})`);
      setTimeout(() => initializeWorkingGlobe(retryCount + 1), 100);
      return;
    } else {
      console.error('❌ Three.js failed to load after 5 seconds');
      showFallback();
      return;
    }
  }

  try {
    setupScene();
    createGlobe();
    createCountryPins();
    setupControls();
    setupLighting();
    startAnimation();
    setupEventListeners();
    
    console.log('✅ Globe initialized successfully');
    
    // Hide loading overlay with smooth transition
    const loader = document.getElementById('globe-loader');
    if (loader) {
      loader.classList.add('hidden');
      // Remove from DOM after transition
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
    
  } catch (error) {
    console.error('❌ Globe initialization failed:', error);
    showFallback();
  }
}

// Setup Three.js scene
function setupScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0e27);

  // Camera
  const containerRect = globeContainer.getBoundingClientRect();
  camera = new THREE.PerspectiveCamera(
    75,
    containerRect.width / containerRect.height,
    0.1,
    1000
  );
  camera.position.set(0, 0, 5);

  // Renderer
  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true 
  });
  renderer.setSize(containerRect.width, containerRect.height);
  renderer.setClearColor(0x0a0e27, 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  globeContainer.appendChild(renderer.domElement);
}

// Create the main globe
function createGlobe() {
  const globeGeometry = new THREE.SphereGeometry(2, 64, 64);
  
  // Create base material with visible fallback
  const globeMaterial = new THREE.MeshPhongMaterial({
    color: 0x2563eb, // Blue earth color
    transparent: false,
    opacity: 1.0,
    shininess: 30,
    specular: 0x111111
  });

  // Load earth texture from multiple sources
  const loader = new THREE.TextureLoader();
  
  // Array of texture URLs to try
  const textureUrls = [
    'https://unpkg.com/three-globe@2.44.1/example/img/earth-night.jpg',
    'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg',
    'https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57752/land_shallow_topo_2048.jpg'
  ];
  
  let textureLoaded = false;
  
  function tryLoadTexture(urls, index = 0) {
    if (index >= urls.length || textureLoaded) {
      if (!textureLoaded) {
        console.log('🌍 Using solid color earth (all textures failed)');
        // Create a more earth-like appearance with gradients
        createProceduralEarth(globeMaterial);
      }
      return;
    }
    
    loader.load(
      urls[index],
      function(texture) {
        if (!textureLoaded) {
          textureLoaded = true;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          globeMaterial.map = texture;
          globeMaterial.needsUpdate = true;
          console.log(`✅ Earth texture loaded from source ${index + 1}`);
        }
      },
      function(progress) {
        console.log(`⏳ Loading texture ${index + 1}:`, (progress.loaded / progress.total * 100) + '%');
      },
      function(error) {
        console.log(`❌ Texture source ${index + 1} failed, trying next...`);
        tryLoadTexture(urls, index + 1);
      }
    );
  }
  
  // Start loading textures
  tryLoadTexture(textureUrls);

  globe = new THREE.Mesh(globeGeometry, globeMaterial);
  scene.add(globe);

  // Add atmosphere
  const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 64);
  const atmosphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x3b82f6,
    transparent: true,
    opacity: 0.1,
    side: THREE.BackSide
  });
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  scene.add(atmosphere);
}

// Create procedural earth pattern as fallback
function createProceduralEarth(material) {
  // Create a canvas for procedural earth texture
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  
  // Create gradient from blue (water) to green/brown (land)
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#87CEEB'); // Sky blue
  gradient.addColorStop(0.2, '#4682B4'); // Steel blue
  gradient.addColorStop(0.4, '#228B22'); // Forest green
  gradient.addColorStop(0.6, '#32CD32'); // Lime green
  gradient.addColorStop(0.8, '#8FBC8F'); // Dark sea green
  gradient.addColorStop(1, '#F4A460'); // Sandy brown
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add some procedural continents
  ctx.fillStyle = '#2F4F4F'; // Dark slate gray for continents
  
  // Simple continent shapes
  drawContinent(ctx, 100, 80, 80, 60); // Europe/Africa
  drawContinent(ctx, 250, 90, 90, 70); // Asia
  drawContinent(ctx, 400, 120, 70, 50); // Americas
  drawContinent(ctx, 50, 160, 100, 40); // Australia region
  
  // Create texture from canvas
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  
  material.map = texture;
  material.needsUpdate = true;
  
  console.log('🎨 Created procedural earth texture');
}

// Helper function to draw continent shapes
function drawContinent(ctx, x, y, width, height) {
  ctx.beginPath();
  ctx.ellipse(x, y, width/2, height/2, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Add some random smaller landmasses
  for (let i = 0; i < 3; i++) {
    const offsetX = (Math.random() - 0.5) * width;
    const offsetY = (Math.random() - 0.5) * height;
    const size = Math.random() * 20 + 10;
    
    ctx.beginPath();
    ctx.ellipse(x + offsetX, y + offsetY, size, size * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Create country pins
function createCountryPins() {
  studyDestinations.forEach(destination => {
    // Create pin group for better visibility
    const pinGroup = new THREE.Group();
    
    // Main pin (cone)
    const pinGeometry = new THREE.ConeGeometry(0.03, 0.12, 8);
    const pinMaterial = new THREE.MeshPhongMaterial({
      color: 0xff4444,
      transparent: false,
      opacity: 1.0,
      emissive: 0x330000,
      shininess: 100
    });
    
    const pin = new THREE.Mesh(pinGeometry, pinMaterial);
    
    // Add a glowing sphere at the tip
    const glowGeometry = new THREE.SphereGeometry(0.02, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 0.8
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.y = 0.06;
    
    pinGroup.add(pin);
    pinGroup.add(glow);
    
    // Position on globe surface
    const position = latLngToVector3(destination.position.lat, destination.position.lng, 2.05);
    pinGroup.position.copy(position);
    
    // Point pin outward from globe center
    pinGroup.lookAt(new THREE.Vector3(0, 0, 0));
    pinGroup.rotateX(Math.PI);
    
    // Add pulsing animation data
    pinGroup.userData = { 
      destination,
      originalScale: pinGroup.scale.clone(),
      pulsePhase: Math.random() * Math.PI * 2,
      pin: pin,
      glow: glow
    };
    
    scene.add(pinGroup);
    countryPins.push(pinGroup);
    
    // Add label
    createCountryLabel(destination, position);
  });
}

// Create country labels
function createCountryLabel(destination, position) {
  // Create a simple text label using DOM element
  const labelDiv = document.createElement('div');
  labelDiv.className = 'country-label';
  labelDiv.innerHTML = `
    <div class="country-pin-label">
      <span class="country-flag">${destination.flag}</span>
      <span class="country-name">${destination.name}</span>
      <span class="country-stats">${destination.universities} Universities</span>
    </div>
  `;
  labelDiv.style.position = 'absolute';
  labelDiv.style.pointerEvents = 'none';
  labelDiv.style.zIndex = '1000';
  labelDiv.style.fontSize = '12px';
  labelDiv.style.background = 'rgba(0,0,0,0.8)';
  labelDiv.style.color = 'white';
  labelDiv.style.padding = '4px 8px';
  labelDiv.style.borderRadius = '4px';
  labelDiv.style.whiteSpace = 'nowrap';
  
  globeContainer.appendChild(labelDiv);
  
  // Position label function will be called in animation loop
  labelDiv.userData = { position, destination };
}

// Setup camera controls
function setupControls() {
  // Manual controls for rotation
  let isMouseDown = false;
  let mouseX = 0, mouseY = 0;
  let rotationX = 0, rotationY = 0;

  globeContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
    isAutoRotating = false;
  });

  globeContainer.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    
    const deltaX = e.clientX - mouseX;
    const deltaY = e.clientY - mouseY;
    
    rotationY += deltaX * 0.01;
    rotationX += deltaY * 0.01;
    
    globe.rotation.y = rotationY;
    globe.rotation.x = Math.max(-0.5, Math.min(0.5, rotationX));
    
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  globeContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  // Touch controls for mobile
  let touchStartX = 0, touchStartY = 0;
  
  globeContainer.addEventListener('touchstart', (e) => {
    e.preventDefault();
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isAutoRotating = false;
  });

  globeContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const deltaX = e.touches[0].clientX - touchStartX;
    const deltaY = e.touches[0].clientY - touchStartY;
    
    rotationY += deltaX * 0.01;
    rotationX += deltaY * 0.01;
    
    globe.rotation.y = rotationY;
    globe.rotation.x = Math.max(-0.5, Math.min(0.5, rotationX));
    
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });

  // Zoom controls
  globeContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomSpeed = 0.1;
    camera.position.z += e.deltaY * zoomSpeed * 0.01;
    camera.position.z = Math.max(3, Math.min(8, camera.position.z));
  });

  // Click to select country
  globeContainer.addEventListener('click', onGlobeClick);
}

// Handle globe clicks
function onGlobeClick(event) {
  const mouse = new THREE.Vector2();
  const rect = globeContainer.getBoundingClientRect();
  
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  // Create array of all pin objects for intersection testing
  const allPinObjects = [];
  countryPins.forEach(pinGroup => {
    pinGroup.traverse((child) => {
      if (child.isMesh) {
        allPinObjects.push(child);
      }
    });
  });

  const intersects = raycaster.intersectObjects(allPinObjects);

  if (intersects.length > 0) {
    // Find the parent pin group
    let clickedPinGroup = intersects[0].object;
    while (clickedPinGroup.parent && !clickedPinGroup.userData.destination) {
      clickedPinGroup = clickedPinGroup.parent;
    }
    
    if (clickedPinGroup.userData && clickedPinGroup.userData.destination) {
      const destination = clickedPinGroup.userData.destination;
      console.log('🎯 Clicked on:', destination.name);
      showDestinationModal(destination.id);
    }
  }
}

// Setup lighting
function setupLighting() {
  // Ambient light - increased intensity for better visibility
  const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
  scene.add(ambientLight);

  // Primary directional light from top-left
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
  directionalLight.position.set(5, 3, 5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  scene.add(directionalLight);

  // Secondary light from opposite side for even illumination
  const directionalLight2 = new THREE.DirectionalLight(0x6699ff, 0.5);
  directionalLight2.position.set(-3, -2, -3);
  scene.add(directionalLight2);

  // Point light for pin highlighting
  const pointLight = new THREE.PointLight(0xffaa00, 0.8, 15);
  pointLight.position.set(0, 0, 4);
  scene.add(pointLight);
}

// Animation loop
function startAnimation() {
  function animate() {
    animationId = requestAnimationFrame(animate);

    // Auto-rotate if enabled
    if (isAutoRotating && globe) {
      globe.rotation.y += 0.005;
    }

    // Animate pins (pulsing effect)
    // Animate country pins with pulsing effect
    countryPins.forEach(pin => {
      if (pin.userData) {
        pin.userData.pulsePhase += 0.05;
        const scale = 1 + Math.sin(pin.userData.pulsePhase) * 0.3;
        pin.scale.setScalar(scale);
        
        // Animate glow effect
        if (pin.userData.glow) {
          pin.userData.glow.material.opacity = 0.5 + Math.sin(pin.userData.pulsePhase * 2) * 0.3;
        }
      }
    });

    // Update labels positions
    updateLabelsPosition();

    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }
  animate();
}

// Update label positions
function updateLabelsPosition() {
  const labels = globeContainer.querySelectorAll('.country-label');
  labels.forEach(label => {
    if (label.userData && label.userData.position) {
      const vector = label.userData.position.clone();
      vector.project(camera);

      const x = (vector.x * 0.5 + 0.5) * globeContainer.offsetWidth;
      const y = (vector.y * -0.5 + 0.5) * globeContainer.offsetHeight;

      label.style.left = x + 'px';
      label.style.top = y + 'px';

      // Hide labels on back side of globe
      const distance = camera.position.distanceTo(label.userData.position);
      label.style.opacity = distance > 4 ? '0' : '1';
    }
  });
}

// Show destination modal
function showDestinationModal(destination) {
  console.log('🎯 Showing modal for:', destination.name);
  
  // Try to use existing modal function
  if (typeof window.showDestinationModal === 'function') {
    window.showDestinationModal(destination.id);
    return;
  }

  // Create simple modal if no existing function
  const modal = document.createElement('div');
  modal.className = 'globe-destination-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>${destination.flag} ${destination.name}</h3>
        <button class="modal-close" onclick="this.closest('.globe-destination-modal').remove()">×</button>
      </div>
      <div class="modal-body">
        <p>${destination.description}</p>
        <div class="destination-stats">
          <div class="stat">
            <strong>Universities:</strong> ${destination.universities}
          </div>
          <div class="stat">
            <strong>Tuition:</strong> ${destination.tuitionRange}
          </div>
          <div class="stat">
            <strong>Living Cost:</strong> ${destination.livingCost}
          </div>
          <div class="stat">
            <strong>Visa Success:</strong> ${destination.visaSuccess}
          </div>
        </div>
        <div class="programs-list">
          <h4>Popular Programs:</h4>
          <ul>
            ${destination.programs.map(program => `<li>${program}</li>`).join('')}
          </ul>
        </div>
        <button class="btn btn-primary" onclick="openConsultationModal()">Get More Info</button>
      </div>
    </div>
  `;

  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  `;

  const content = modal.querySelector('.modal-content');
  content.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 24px;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
    margin: 20px;
  `;

  document.body.appendChild(modal);
}

// Setup event listeners
function setupEventListeners() {
  // Resize handler
  window.addEventListener('resize', handleResize);
  
  // Globe controls
  window.resetGlobe = resetGlobe;
  window.toggleGlobeRotation = toggleAutoRotation;
  window.zoomGlobe = zoomGlobe;
  window.focusCountry = focusCountry;
}

// Handle window resize
function handleResize() {
  if (!camera || !renderer || !globeContainer) return;

  const rect = globeContainer.getBoundingClientRect();
  camera.aspect = rect.width / rect.height;
  camera.updateProjectionMatrix();
  renderer.setSize(rect.width, rect.height);
}

// Globe control functions
function resetGlobe() {
  if (camera) {
    camera.position.set(0, 0, 5);
  }
  if (globe) {
    globe.rotation.set(0, 0, 0);
  }
  isAutoRotating = true;
}

function toggleAutoRotation() {
  isAutoRotating = !isAutoRotating;
  const icon = document.getElementById('rotation-icon');
  if (icon) {
    icon.className = isAutoRotating ? 'fas fa-pause' : 'fas fa-play';
  }
}

function zoomGlobe(factor) {
  if (camera) {
    camera.position.z *= factor;
    camera.position.z = Math.max(3, Math.min(8, camera.position.z));
  }
}

function focusCountry(countryId) {
  const destination = studyDestinations.find(d => d.id === countryId);
  if (!destination || !globe) return;

  // Rotate globe to show country
  const targetRotY = -destination.position.lng * (Math.PI / 180);
  const targetRotX = destination.position.lat * (Math.PI / 180) * 0.3;

  // Animate to target rotation
  const startRotY = globe.rotation.y;
  const startRotX = globe.rotation.x;
  const duration = 1000; // 1 second
  const startTime = Date.now();

  function animateToCountry() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

    globe.rotation.y = startRotY + (targetRotY - startRotY) * easeProgress;
    globe.rotation.x = startRotX + (targetRotX - startRotX) * easeProgress;

    if (progress < 1) {
      requestAnimationFrame(animateToCountry);
    } else {
      // Show modal after animation
      setTimeout(() => showDestinationModal(destination), 300);
    }
  }

  isAutoRotating = false;
  animateToCountry();
}

// Show fallback if globe fails
function showFallback() {
  // Hide the loader first
  const loader = document.getElementById('globe-loader');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }

  globeContainer.innerHTML = `
    <div class="globe-fallback">
      <div class="fallback-content">
        <h3>🌍 Explore Study Destinations</h3>
        <p>Interactive globe temporarily unavailable. Use the destination cards below:</p>
        <div class="fallback-destinations">
          ${studyDestinations.map(dest => `
            <button class="fallback-dest-btn" onclick="showDestinationModal('${dest.id}')">
              ${dest.flag} ${dest.name}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Working Globe: DOM ready, waiting for Three.js...');
  
  // Wait for Three.js to load
  let attempts = 0;
  const maxAttempts = 100; // 10 seconds
  
  function checkAndInit() {
    attempts++;
    
    if (typeof THREE !== 'undefined') {
      console.log('✅ Three.js loaded, initializing globe...');
      setTimeout(initializeWorkingGlobe, 100);
    } else if (attempts < maxAttempts) {
      setTimeout(checkAndInit, 100);
    } else {
      console.warn('⚠️ Three.js failed to load, showing fallback');
      const container = document.getElementById('interactive-globe');
      if (container) {
        showFallback();
      }
    }
  }
  
  checkAndInit();
});

// Cleanup function
window.addEventListener('beforeunload', function() {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  if (renderer) {
    renderer.dispose();
  }
});

console.log('🌍 Working Globe script loaded');