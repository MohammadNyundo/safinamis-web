// js/animations.js
// Main animation orchestrator

// Import functions (if using ES modules, otherwise keep as is)
// For now, we'll assume you're loading scripts traditionally

function initAllAnimations() {
  // Wait for page to be fully ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      executeAnimations();
    });
  } else {
    // DOM already ready
    executeAnimations();
  }
}

function executeAnimations() {
  console.log('🚀 Initializing all animations...');
  
  try {
    // Initialize hero animation
    if (typeof initHeroAnimation === 'function') {
      initHeroAnimation();
    }
    
    // Wait a moment for hero to settle, then init story animation
    setTimeout(() => {
      if (typeof initStoryAnimation === 'function') {
        initStoryAnimation();
      }
      
      // Optional: Initialize Story 02 if needed
      // if (typeof createStoryAnimation === 'function') {
      //   createStoryAnimation('#story2', 0.4);
      // }
    }, 100);
    
    // Initialize any ScrollTriggers that need refreshing
    if (ScrollTrigger) {
      ScrollTrigger.refresh();
    }
    
    console.log('✅ All animations initialized successfully');
    
  } catch (error) {
    console.error('❌ Error initializing animations:', error);
  }
}

// Add reduced motion preference check
function shouldReduceMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Initialize animations with reduced motion check
if (!shouldReduceMotion()) {
  initAllAnimations();
} else {
  console.log('⚡ Reduced motion preference detected - animations disabled');
  
  // Still ensure content is visible
  gsap.set(".hero-headline, .hero-subtext, .hero-cta", { opacity: 1 });
  gsap.set("#story1 > *", { opacity: 1 });
}

// Export for potential module usage
window.Animations = {
  initAllAnimations,
  shouldReduceMotion
};