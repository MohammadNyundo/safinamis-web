// js/story-animation.js
export function initStoryAnimation() {
  // ============================================
  // Story Section 01 - "Opening a Book" Animation
  // ============================================
  
  // First, set initial states for all elements in story section
  gsap.set("#story1 span", { opacity: 0, y: 10 }); // "Story 01" label
  gsap.set("#story1 h2", { opacity: 0, y: 15 }); // Title
  gsap.set("#story1 .space-y-7 p", { opacity: 0, y: 8 }); // First two paragraphs
  gsap.set("#story1 blockquote", { opacity: 0, scale: 0.98 }); // The question
  gsap.set("#story1 .space-y-6 p", { opacity: 0, y: 8 }); // Resolution paragraphs

  // Create a ScrollTrigger timeline for the entire story section
  const storyTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#story1",
      start: "top 80%", // When top of section is 80% down from top of viewport
      end: "bottom 20%", // When bottom of section is 20% up from bottom
      scrub: 1.2, // Smooth scrubbing for that "reading pace" feel
      markers: false, // Set to true for debugging, false for production
      toggleActions: "play none none reverse" // Play forward, reverse on scroll back
    },
    defaults: { 
      ease: "sine.out", // Gentle, natural easing - no bounces
      duration: 1.2 // Deliberate pace
    }
  });

  // Sequence the animations in reading order
  storyTL
    // 1. "Story 01" label appears first - like a chapter marker
    .to("#story1 span", { 
      opacity: 1, 
      y: 0, 
      duration: 0.8 
    }, 0)
    
    // 2. Title follows gently - as the page settles
    .to("#story1 h2", { 
      opacity: 1, 
      y: 0, 
      duration: 1.2 
    }, 0.4)
    
    // 3. First paragraph - like reading line by line
    .to("#story1 .space-y-7 p:nth-child(1)", { 
      opacity: 1, 
      y: 0, 
      duration: 1 
    }, 0.8)
    
    // 4. Second paragraph with slight pause
    .to("#story1 .space-y-7 p:nth-child(2)", { 
      opacity: 1, 
      y: 0, 
      duration: 1 
    }, 1.4)
    
    // 5. The quoted question - arrives last, slower, for reflection
    .to("#story1 blockquote", { 
      opacity: 1, 
      scale: 1, 
      duration: 1.6 // Slower for emphasis
    }, 2.0)
    
    // 6. Resolution paragraphs - one after another
    .to("#story1 .space-y-6 p:nth-child(1)", { 
      opacity: 1, 
      y: 0, 
      duration: 1 
    }, 2.8)
    
    // 7. Final paragraph with Safina MIS mention
    .to("#story1 .space-y-6 p:nth-child(2)", { 
      opacity: 1, 
      y: 0, 
      duration: 1.2 
    }, 3.4);

  // Add a very subtle fade-in for the entire section container
  // This creates the "ink becoming noticeable" effect
  gsap.from("#story1", {
    scrollTrigger: {
      trigger: "#story1",
      start: "top 90%",
      end: "top 70%",
      scrub: 0.8,
      toggleActions: "play none none reverse"
    },
    opacity: 0.7,
    duration: 2.5,
    ease: "none"
  });
}

// Reusable function for other story sections
export function createStoryAnimation(sectionId, staggerDelay = 0.3) {
  // Find all direct children of the main content div
  const container = document.querySelector(`${sectionId} .max-w-3xl.mx-auto`);
  if (!container) return;

  // Set initial state for all elements
  gsap.set(`${sectionId} .max-w-3xl.mx-auto > *`, { 
    opacity: 0, 
    y: 12 
  });

  // Create timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionId,
      start: "top 75%",
      scrub: 1,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // Animate each element with stagger
  tl.to(`${sectionId} .max-w-3xl.mx-auto > *`, {
    opacity: 1,
    y: 0,
    stagger: staggerDelay,
    duration: 1.4,
    ease: "sine.out"
  });

  // Subtle section fade-in
  gsap.from(sectionId, {
    scrollTrigger: {
      trigger: sectionId,
      start: "top 85%",
      scrub: 0.6
    },
    opacity: 0.6,
    duration: 2,
    ease: "none"
  });
}