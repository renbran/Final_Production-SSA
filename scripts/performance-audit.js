#!/usr/bin/env node

/**
 * Performance Audit & Optimization Script
 * Runs comprehensive Lighthouse audit and provides actionable insights
 */

import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance targets (world-class standards)
const PERFORMANCE_TARGETS = {
  performance: 90,
  accessibility: 90,
  bestPractices: 90,
  seo: 90,
  pwa: 80,
  // Core Web Vitals
  lcp: 2.5,  // seconds
  inp: 200,  // milliseconds
  cls: 0.1   // unitless
};

async function runPerformanceAudit() {
  console.log('🚀 Starting Comprehensive Performance Audit...\n');
  
  const chrome = await chromeLauncher.launch({ 
    chromeFlags: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'] 
  });
  
  try {
    // Mobile audit (primary focus)
    console.log('📱 Running Mobile Audit...');
    const mobileResult = await lighthouse('https://scholarixstudy.com', {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port,
      formFactor: 'mobile',
      throttling: {
        rttMs: 150,
        throughputKbps: 1.6 * 1024,
        cpuSlowdownMultiplier: 4
      },
      screenEmulation: {
        mobile: true,
        width: 375,
        height: 812,
        deviceScaleFactor: 3
      }
    });
    
    // Desktop audit
    console.log('💻 Running Desktop Audit...');
    const desktopResult = await lighthouse('https://scholarixstudy.com', {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port,
      formFactor: 'desktop',
      throttling: {
        rttMs: 40,
        throughputKbps: 10 * 1024,
        cpuSlowdownMultiplier: 1
      },
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1
      }
    });
    
    await chrome.kill();
    
    // Analyze results
    const mobileAnalysis = analyzeResults(mobileResult.lhr, 'Mobile');
    const desktopAnalysis = analyzeResults(desktopResult.lhr, 'Desktop');
    
    // Generate optimization report
    const optimizationPlan = generateOptimizationPlan(mobileResult.lhr, desktopResult.lhr);
    
    // Save detailed report
    await saveDetailedReport({
      mobile: mobileAnalysis,
      desktop: desktopAnalysis,
      optimization: optimizationPlan,
      timestamp: new Date().toISOString()
    });
    
    // Display summary
    displaySummary(mobileAnalysis, desktopAnalysis);
    
    return { mobile: mobileResult, desktop: desktopResult };
    
  } catch (error) {
    await chrome.kill();
    throw error;
  }
}

function analyzeResults(lhr, device) {
  const categories = lhr.categories;
  const audits = lhr.audits;
  
  // Extract scores
  const scores = {
    performance: Math.round(categories.performance.score * 100),
    accessibility: Math.round(categories.accessibility.score * 100),
    bestPractices: Math.round(categories['best-practices'].score * 100),
    seo: Math.round(categories.seo.score * 100)
  };
  
  // Extract Core Web Vitals
  const vitals = {
    lcp: audits['largest-contentful-paint']?.numericValue / 1000 || 0,
    inp: audits['interaction-to-next-paint']?.numericValue || audits['max-potential-fid']?.numericValue || 0,
    cls: audits['cumulative-layout-shift']?.numericValue || 0,
    fcp: audits['first-contentful-paint']?.numericValue / 1000 || 0,
    speedIndex: audits['speed-index']?.numericValue / 1000 || 0,
    tti: audits['interactive']?.numericValue / 1000 || 0
  };
  
  // Performance opportunities
  const opportunities = [];
  const diagnostics = [];
  
  Object.entries(audits).forEach(([key, audit]) => {
    if (audit.details && audit.details.type === 'opportunity' && audit.numericValue > 100) {
      opportunities.push({
        id: key,
        title: audit.title,
        description: audit.description,
        savings: Math.round(audit.numericValue / 1000 * 100) / 100, // seconds
        score: audit.score
      });
    }
    
    if (audit.score !== null && audit.score < 0.9 && audit.scoreDisplayMode === 'binary') {
      diagnostics.push({
        id: key,
        title: audit.title,
        description: audit.description,
        score: audit.score
      });
    }
  });
  
  // Sort by impact
  opportunities.sort((a, b) => b.savings - a.savings);
  
  return {
    device,
    scores,
    vitals,
    opportunities: opportunities.slice(0, 10), // Top 10
    diagnostics: diagnostics.slice(0, 10),
    passedTargets: getPassedTargets(scores, vitals),
    failedTargets: getFailedTargets(scores, vitals)
  };
}

function getPassedTargets(scores, vitals) {
  const passed = [];
  
  if (scores.performance >= PERFORMANCE_TARGETS.performance) passed.push('Performance Score');
  if (scores.accessibility >= PERFORMANCE_TARGETS.accessibility) passed.push('Accessibility Score');
  if (scores.bestPractices >= PERFORMANCE_TARGETS.bestPractices) passed.push('Best Practices Score');
  if (scores.seo >= PERFORMANCE_TARGETS.seo) passed.push('SEO Score');
  if (vitals.lcp <= PERFORMANCE_TARGETS.lcp) passed.push('LCP');
  if (vitals.inp <= PERFORMANCE_TARGETS.inp) passed.push('INP');
  if (vitals.cls <= PERFORMANCE_TARGETS.cls) passed.push('CLS');
  
  return passed;
}

function getFailedTargets(scores, vitals) {
  const failed = [];
  
  if (scores.performance < PERFORMANCE_TARGETS.performance) {
    failed.push({
      metric: 'Performance Score',
      current: scores.performance,
      target: PERFORMANCE_TARGETS.performance,
      gap: PERFORMANCE_TARGETS.performance - scores.performance
    });
  }
  
  if (scores.accessibility < PERFORMANCE_TARGETS.accessibility) {
    failed.push({
      metric: 'Accessibility Score',
      current: scores.accessibility,
      target: PERFORMANCE_TARGETS.accessibility,
      gap: PERFORMANCE_TARGETS.accessibility - scores.accessibility
    });
  }
  
  if (vitals.lcp > PERFORMANCE_TARGETS.lcp) {
    failed.push({
      metric: 'LCP',
      current: `${vitals.lcp.toFixed(2)}s`,
      target: `${PERFORMANCE_TARGETS.lcp}s`,
      gap: `+${(vitals.lcp - PERFORMANCE_TARGETS.lcp).toFixed(2)}s`
    });
  }
  
  if (vitals.inp > PERFORMANCE_TARGETS.inp) {
    failed.push({
      metric: 'INP',
      current: `${Math.round(vitals.inp)}ms`,
      target: `${PERFORMANCE_TARGETS.inp}ms`,
      gap: `+${Math.round(vitals.inp - PERFORMANCE_TARGETS.inp)}ms`
    });
  }
  
  if (vitals.cls > PERFORMANCE_TARGETS.cls) {
    failed.push({
      metric: 'CLS',
      current: vitals.cls.toFixed(3),
      target: PERFORMANCE_TARGETS.cls.toString(),
      gap: `+${(vitals.cls - PERFORMANCE_TARGETS.cls).toFixed(3)}`
    });
  }
  
  return failed;
}

function generateOptimizationPlan(mobileLhr, desktopLhr) {
  const plan = {
    immediate: [],
    shortTerm: [],
    longTerm: []
  };
  
  // Analyze mobile opportunities (primary focus)
  const mobileAudits = mobileLhr.audits;
  
  // Critical immediate fixes
  if (mobileAudits['largest-contentful-paint']?.numericValue > 2500) {
    plan.immediate.push({
      priority: 'CRITICAL',
      task: 'Optimize LCP Element',
      description: 'The largest contentful paint is too slow. Optimize hero images and critical CSS.',
      implementation: [
        'Add fetchpriority="high" to hero image',
        'Preload critical CSS',
        'Optimize hero image format (WebP/AVIF)',
        'Implement critical CSS inlining'
      ],
      impact: 'High - Directly affects Core Web Vitals ranking'
    });
  }
  
  if (mobileAudits['cumulative-layout-shift']?.numericValue > 0.1) {
    plan.immediate.push({
      priority: 'CRITICAL',
      task: 'Fix Layout Shifts',
      description: 'Content is shifting during page load, affecting user experience.',
      implementation: [
        'Add width/height attributes to images',
        'Reserve space for dynamic content',
        'Avoid inserting content above existing content',
        'Use transform animations instead of layout-triggering properties'
      ],
      impact: 'High - Core Web Vitals compliance'
    });
  }
  
  // Short-term optimizations
  if (mobileAudits['unused-javascript']?.numericValue > 30000) {
    plan.shortTerm.push({
      priority: 'HIGH',
      task: 'Remove Unused JavaScript',
      description: `Remove unused JavaScript (${Math.round(mobileAudits['unused-javascript'].numericValue / 1024)}KB)`,
      implementation: [
        'Implement code splitting',
        'Remove unused dependencies',
        'Lazy load non-critical scripts',
        'Use dynamic imports for features'
      ],
      impact: 'Medium - Faster initial load'
    });
  }
  
  if (mobileAudits['render-blocking-resources']?.numericValue > 100) {
    plan.shortTerm.push({
      priority: 'HIGH',
      task: 'Eliminate Render Blocking Resources',
      description: 'CSS and JavaScript are blocking page rendering',
      implementation: [
        'Inline critical CSS',
        'Defer non-critical CSS',
        'Add async/defer to JavaScript',
        'Implement resource hints (preload, prefetch)'
      ],
      impact: 'High - Faster visual rendering'
    });
  }
  
  // Long-term architectural improvements
  plan.longTerm.push({
    priority: 'MEDIUM',
    task: 'Implement Advanced Caching Strategy',
    description: 'Set up comprehensive caching for improved performance',
    implementation: [
      'Service Worker for offline capabilities',
      'CDN optimization',
      'Browser caching headers',
      'Edge caching strategy'
    ],
    impact: 'Medium - Faster repeat visits'
  });
  
  plan.longTerm.push({
    priority: 'MEDIUM',
    task: 'Advanced Image Optimization',
    description: 'Implement next-generation image delivery',
    implementation: [
      'Responsive images with srcset',
      'Lazy loading with Intersection Observer',
      'WebP/AVIF format adoption',
      'Image CDN integration'
    ],
    impact: 'Medium - Reduced bandwidth usage'
  });
  
  return plan;
}

async function saveDetailedReport(data) {
  const reportPath = path.join(process.cwd(), 'performance-audit-report.json');
  await fs.writeFile(reportPath, JSON.stringify(data, null, 2));
  
  // Also create a human-readable markdown report
  const markdownReport = generateMarkdownReport(data);
  const markdownPath = path.join(process.cwd(), 'PERFORMANCE_AUDIT_REPORT.md');
  await fs.writeFile(markdownPath, markdownReport);
  
  console.log(`\n📄 Detailed reports saved:`);
  console.log(`   • JSON: ${reportPath}`);
  console.log(`   • Markdown: ${markdownPath}`);
}

function generateMarkdownReport(data) {
  const { mobile, desktop, optimization, timestamp } = data;
  
  return `# 📊 SCHOLARIX Performance Audit Report

**Generated:** ${new Date(timestamp).toLocaleString()}  
**URL:** https://scholarixstudy.com

---

## 🎯 **EXECUTIVE SUMMARY**

### Mobile Performance (Primary Focus)
${generateScoreTable(mobile.scores, mobile.vitals)}

### Desktop Performance
${generateScoreTable(desktop.scores, desktop.vitals)}

---

## 🔍 **DETAILED ANALYSIS**

### ✅ **Passing Targets**
**Mobile:** ${mobile.passedTargets.join(', ') || 'None'}  
**Desktop:** ${desktop.passedTargets.join(', ') || 'None'}

### ❌ **Failed Targets**
${generateFailedTargetsTable(mobile.failedTargets, desktop.failedTargets)}

---

## 🚀 **OPTIMIZATION OPPORTUNITIES**

### 🔥 **Immediate Fixes (This Week)**
${optimization.immediate.map(item => `
**${item.task}** (${item.priority})
- **Issue:** ${item.description}
- **Impact:** ${item.impact}
- **Implementation:**
${item.implementation.map(impl => `  - ${impl}`).join('\n')}
`).join('\n')}

### 🎯 **Short-term Improvements (Next 2-4 Weeks)**
${optimization.shortTerm.map(item => `
**${item.task}** (${item.priority})
- **Issue:** ${item.description}
- **Impact:** ${item.impact}
- **Implementation:**
${item.implementation.map(impl => `  - ${impl}`).join('\n')}
`).join('\n')}

### 🔮 **Long-term Enhancements (Next 2-3 Months)**
${optimization.longTerm.map(item => `
**${item.task}** (${item.priority})
- **Issue:** ${item.description}
- **Impact:** ${item.impact}
- **Implementation:**
${item.implementation.map(impl => `  - ${impl}`).join('\n')}
`).join('\n')}

---

## 📈 **TOP PERFORMANCE OPPORTUNITIES**

### Mobile Opportunities
${mobile.opportunities.slice(0, 5).map((opp, i) => 
  `${i + 1}. **${opp.title}** - Potential savings: ${opp.savings}s`
).join('\n')}

### Desktop Opportunities  
${desktop.opportunities.slice(0, 5).map((opp, i) => 
  `${i + 1}. **${opp.title}** - Potential savings: ${opp.savings}s`
).join('\n')}

---

## 🎖️ **AWWWARDS SCORING ALIGNMENT**

Based on current performance metrics:

- **Technical Quality (30%):** ${getTechnicalQuality(mobile, desktop)}/10
- **Performance (25%):** ${getPerformanceScore(mobile, desktop)}/10  
- **Mobile Experience (20%):** ${getMobileScore(mobile)}/10
- **Accessibility (15%):** ${getAccessibilityScore(mobile, desktop)}/10
- **Innovation (10%):** Pending implementation

**Current Total:** ${getCurrentAwwwardsScore(mobile, desktop)}/10

---

*This report provides actionable insights for achieving world-class performance standards (Lighthouse ≥90, Core Web Vitals passing) and Awwwards submission readiness.*`;
}

function generateScoreTable(scores, vitals) {
  const performanceEmoji = scores.performance >= 90 ? '✅' : scores.performance >= 70 ? '⚠️' : '❌';
  const accessibilityEmoji = scores.accessibility >= 90 ? '✅' : scores.accessibility >= 70 ? '⚠️' : '❌';
  const bestPracticesEmoji = scores.bestPractices >= 90 ? '✅' : scores.bestPractices >= 70 ? '⚠️' : '❌';
  const seoEmoji = scores.seo >= 90 ? '✅' : scores.seo >= 70 ? '⚠️' : '❌';
  
  const lcpEmoji = vitals.lcp <= 2.5 ? '✅' : vitals.lcp <= 4.0 ? '⚠️' : '❌';
  const inpEmoji = vitals.inp <= 200 ? '✅' : vitals.inp <= 500 ? '⚠️' : '❌';
  const clsEmoji = vitals.cls <= 0.1 ? '✅' : vitals.cls <= 0.25 ? '⚠️' : '❌';
  
  return `
| Metric | Score | Target | Status |
|--------|-------|--------|--------|
| Performance | ${scores.performance} | 90+ | ${performanceEmoji} |
| Accessibility | ${scores.accessibility} | 90+ | ${accessibilityEmoji} |
| Best Practices | ${scores.bestPractices} | 90+ | ${bestPracticesEmoji} |
| SEO | ${scores.seo} | 90+ | ${seoEmoji} |
| **LCP** | ${vitals.lcp.toFixed(2)}s | ≤2.5s | ${lcpEmoji} |
| **INP** | ${Math.round(vitals.inp)}ms | ≤200ms | ${inpEmoji} |
| **CLS** | ${vitals.cls.toFixed(3)} | ≤0.1 | ${clsEmoji} |`;
}

function generateFailedTargetsTable(mobileFailures, desktopFailures) {
  if (mobileFailures.length === 0 && desktopFailures.length === 0) {
    return '🎉 **All targets are passing!**';
  }
  
  let table = '\n| Device | Metric | Current | Target | Gap |\n|--------|--------|---------|--------|----|';
  
  mobileFailures.forEach(failure => {
    table += `\n| Mobile | ${failure.metric} | ${failure.current} | ${failure.target} | ${failure.gap} |`;
  });
  
  desktopFailures.forEach(failure => {
    table += `\n| Desktop | ${failure.metric} | ${failure.current} | ${failure.target} | ${failure.gap} |`;
  });
  
  return table;
}

function getTechnicalQuality(mobile, desktop) {
  const avgBestPractices = (mobile.scores.bestPractices + desktop.scores.bestPractices) / 2;
  return Math.round(avgBestPractices / 10);
}

function getPerformanceScore(mobile, desktop) {
  const avgPerformance = (mobile.scores.performance + desktop.scores.performance) / 2;
  return Math.round(avgPerformance / 10);
}

function getMobileScore(mobile) {
  // Weight Core Web Vitals heavily for mobile score
  const vitalsScore = [
    mobile.vitals.lcp <= 2.5 ? 100 : Math.max(0, 100 - (mobile.vitals.lcp - 2.5) * 20),
    mobile.vitals.inp <= 200 ? 100 : Math.max(0, 100 - ((mobile.vitals.inp - 200) / 50)),
    mobile.vitals.cls <= 0.1 ? 100 : Math.max(0, 100 - (mobile.vitals.cls - 0.1) * 500)
  ].reduce((a, b) => a + b) / 3;
  
  return Math.round((mobile.scores.performance * 0.6 + vitalsScore * 0.4) / 10);
}

function getAccessibilityScore(mobile, desktop) {
  const avgAccessibility = (mobile.scores.accessibility + desktop.scores.accessibility) / 2;
  return Math.round(avgAccessibility / 10);
}

function getCurrentAwwwardsScore(mobile, desktop) {
  const technical = getTechnicalQuality(mobile, desktop) * 0.3;
  const performance = getPerformanceScore(mobile, desktop) * 0.25;
  const mobileExp = getMobileScore(mobile) * 0.2;
  const accessibility = getAccessibilityScore(mobile, desktop) * 0.15;
  const innovation = 7 * 0.1; // Placeholder - assess after 3D globe implementation
  
  return Math.round((technical + performance + mobileExp + accessibility + innovation) * 10) / 10;
}

function displaySummary(mobile, desktop) {
  console.log('\n' + '='.repeat(60));
  console.log('🏆 SCHOLARIX PERFORMANCE AUDIT SUMMARY');
  console.log('='.repeat(60));
  
  console.log('\n📱 MOBILE SCORES:');
  console.log(`   Performance: ${mobile.scores.performance}/100 ${mobile.scores.performance >= 90 ? '✅' : '❌'}`);
  console.log(`   Accessibility: ${mobile.scores.accessibility}/100 ${mobile.scores.accessibility >= 90 ? '✅' : '❌'}`);
  console.log(`   Best Practices: ${mobile.scores.bestPractices}/100 ${mobile.scores.bestPractices >= 90 ? '✅' : '❌'}`);
  console.log(`   SEO: ${mobile.scores.seo}/100 ${mobile.scores.seo >= 90 ? '✅' : '❌'}`);
  
  console.log('\n🔥 CORE WEB VITALS (Mobile):');
  console.log(`   LCP: ${mobile.vitals.lcp.toFixed(2)}s ${mobile.vitals.lcp <= 2.5 ? '✅' : '❌'} (Target: ≤2.5s)`);
  console.log(`   INP: ${Math.round(mobile.vitals.inp)}ms ${mobile.vitals.inp <= 200 ? '✅' : '❌'} (Target: ≤200ms)`);
  console.log(`   CLS: ${mobile.vitals.cls.toFixed(3)} ${mobile.vitals.cls <= 0.1 ? '✅' : '❌'} (Target: ≤0.1)`);
  
  console.log('\n💻 DESKTOP SCORES:');
  console.log(`   Performance: ${desktop.scores.performance}/100 ${desktop.scores.performance >= 90 ? '✅' : '❌'}`);
  console.log(`   Accessibility: ${desktop.scores.accessibility}/100 ${desktop.scores.accessibility >= 90 ? '✅' : '❌'}`);
  
  console.log('\n🎯 OPTIMIZATION PRIORITIES:');
  if (mobile.failedTargets.length > 0) {
    console.log('   Failed Targets:');
    mobile.failedTargets.forEach(target => {
      console.log(`   • ${target.metric}: ${target.current} (needs ${target.target})`);
    });
  }
  
  console.log('\n🏆 AWWWARDS READINESS:');
  console.log(`   Current Score: ${getCurrentAwwwardsScore(mobile, desktop)}/10`);
  console.log(`   Technical Quality: ${getTechnicalQuality(mobile, desktop)}/10`);
  console.log(`   Performance: ${getPerformanceScore(mobile, desktop)}/10`);
  console.log(`   Mobile Experience: ${getMobileScore(mobile)}/10`);
  console.log(`   Accessibility: ${getAccessibilityScore(mobile, desktop)}/10`);
  
  console.log('\n' + '='.repeat(60));
  console.log('📄 View detailed reports: PERFORMANCE_AUDIT_REPORT.md');
  console.log('='.repeat(60));
}

// Execute audit if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runPerformanceAudit()
    .then(() => {
      console.log('\n✅ Performance audit completed successfully!');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n❌ Performance audit failed:', error.message);
      process.exit(1);
    });
}

export { runPerformanceAudit };