# GitHub Copilot Instructions for SCHOLARIX Study Abroad Platform

## Architecture Overview

This is a **Hono-based TypeScript application** deployed on **Cloudflare Pages** - a study abroad consultancy website with integrated lead generation, 3D interactive features, and progressive form patterns.

**Key Architecture Pattern**: Single-file monolithic structure with client-server rendering via TSX templates. The entire app routes and content are defined in `src/index.tsx` (1600+ lines), with HTML templates rendered through `src/renderer.tsx`.

## Critical Development Workflows

```bash
# Development (uses Vite dev server)
npm run dev                    # Runs on http://localhost:5173

# Production build & deploy
npm run build                  # Builds to ./dist/
npm run deploy                 # Deploys to Cloudflare Pages
npm run deploy:prod            # Production deployment to scholarix-study-abroad

# Sandbox testing (legacy)
npm run dev:sandbox            # Wrangler dev server on port 3000
```

## Project-Specific Patterns

### 1. **TSX Route Definition Pattern**
Routes are defined as Hono handlers returning TSX components directly in `src/index.tsx`:
```tsx
app.get('/services/visa', (c) => {
  return c.render(<div>...inline TSX content...</div>)
})
```
**Never separate route handlers** - keep all route content inline with the handler.

### 2. **Progressive Form Implementation**
Forms use 2-step progressive disclosure pattern defined in lines 762-886 of `src/index.tsx`:
- **Step 1**: Essential fields (Name, Email, Phone) - 3 fields only  
- **Step 2**: Study preferences (Destination, Level, Timeline) - 4 fields
- **CSS Classes**: `.form-step`, `.progressive-form`, `.step-indicator`, `.progress-fill`
- **JavaScript**: Event handlers in `src/renderer.tsx` lines 678-782

### 3. **Interactive 3D Globe Integration**
3D globe implemented with Three.js in `src/renderer.tsx` lines 580-677:
- 10 countries with clickable pins and detailed modals
- Globe data stored in `globeCountries` array with university counts, visa info
- Mobile touch controls and responsive design
- **Integration Point**: Globe pins trigger destination modals with country-specific content

### 4. **Dual API Integration Pattern**
Lead form submissions (`POST /api/lead`) integrate with **two external services simultaneously**:
```tsx
// Parallel integration pattern in src/index.tsx lines 1516-1546
const results = await Promise.allSettled([
  sendToGoogleSheets(leadData),    // Google Sheets via Apps Script
  sendEmailNotification(leadData)  // EmailJS for notifications
])
```
**Key**: Always use `Promise.allSettled()` - partial failures are acceptable.

### 5. **Enhanced Error Handling System**
Critical JavaScript error handling implemented in `public/static/app.js` lines 1-50:
- **Error deduplication** with rate limiting (max 5 same errors per minute)
- **Browser extension compatibility** detection and CSP violation tracking
- **Performance monitoring** with resource timing API
- **Security headers** enforcement with violation reporting

## Technology Stack Integration Points

**Frontend Dependencies (package.json)**:
- `three@^0.180.0` - 3D globe rendering (loaded via CDN in renderer.tsx)
- `gsap@^3.13.0` - Advanced animations
- `swiper@^12.0.2` - Mobile carousels
- `aos@^2.3.4` - Scroll animations

**Build System**:
- `@hono/vite-build` - Cloudflare Pages adapter
- `@hono/vite-dev-server` - Development server with HMR
- TypeScript compilation handled by Vite

## Color System & Design Constraints

**Strict Color Palette** (defined in CSS variables):
```css
--primary-color: #1e3a8a    /* Deep Blue - trust & professionalism */
--secondary-color: #3b82f6  /* Bright Blue - CTAs */
--accent-color: #f59e0b     /* Amber/Orange - highlights */
--neutral-light: #f1f5f9    /* Light backgrounds */
--neutral-medium: #64748b   /* Text & borders */
```
**Never deviate from this palette** - it's business-critical for brand consistency.

## Key File Responsibilities

- **`src/index.tsx`**: All routes, API endpoints, TSX content (1600+ lines)
- **`src/renderer.tsx`**: HTML template, 3D globe, JavaScript functions (780+ lines)
- **`public/static/app.js`**: Client-side functionality, form handling, error systems (1150+ lines)
- **`public/static/style.css`**: Complete CSS including progressive forms, 3D globe styles (6400+ lines)
- **`wrangler.jsonc`**: Cloudflare deployment configuration

## Form Integration Requirements

When modifying forms, ensure compatibility with existing backend integrations:
1. **Field Mapping**: `fullName` → `firstName`/`lastName` split (app.js lines 127-150)
2. **Data Normalization**: Handle progressive form field names (studyLevel → service mapping)
3. **Analytics Tracking**: Form step completion events for progressive forms
4. **Success State**: Custom success messaging with CTA buttons (CSS: `.form-success-message`)

## Mobile-First Development Rules

1. **Logo Sizing**: Mobile 40px, Tablet 50px, Desktop 60px max height
2. **Progressive Forms**: Single column layout on mobile with centered trust indicators
3. **Touch Targets**: Minimum 44px for interactive elements
4. **3D Globe**: Touch controls for rotation/zoom on mobile devices

## Security & Performance Constraints

- **CSP Headers**: Strict policy defined in renderer.tsx - only add trusted CDNs
- **HTML Entity Encoding**: All JavaScript strings must use `&amp;&amp;` and `&apos;` patterns
- **Image Optimization**: WebP format preferred, lazy loading implemented
- **Bundle Size**: Keep individual JS files under 25KB for optimal performance

## Critical Success Metrics

The platform targets:
- **Form Conversion**: 5-7% (progressive forms designed for this target)
- **Mobile Performance**: 90+ PageSpeed score
- **Visa Success Rate**: 99% (prominently displayed, don't modify this claim)
- **Load Time**: <3 seconds (performance-critical for conversion)

When making changes, always consider impact on these KPIs and test progressive form conversion flows.