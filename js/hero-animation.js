// js/hero-animation.js
export function initHeroAnimation() {
  // Enhanced Hero "Sunrise" Animation
  // More intentional, more emotional pacing
  
  // Set initial states with more nuance
  gsap.set(".hero", {
    opacity: 1 // Ensure hero container is visible
  });
  
  gsap.set(".hero-headline", {
    opacity: 0,
    scale: 0.94,
    filter: "blur(8px)" // Slight blur for "dreamlike" start
  });

  gsap.set(".hero-subtext", {
    opacity: 0,
    x: -30,
    filter: "blur(4px)"
  });

  gsap.set(".hero-cta", {
    opacity: 0,
    y: 30,
    scale: 0.95
  });

  // Create a master timeline with more emotional pacing
  const heroTL = gsap.timeline({
    defaults: { 
      ease: "expo.out", // Smoother, more natural than power3
      overwrite: "auto"
    },
    delay: 0.3 // Tiny delay for page to settle
  });

  heroTL
    // PHASE 1: THE DAWN (Headline appears like first light)
    .to(".hero-headline", {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 2.2, // Slower for gravitas
      ease: "power2.inOut" // Gentle acceleration then deceleration
    }, "dawn")

    // PHASE 2: THE MORNING LIGHT (Subtext clarifies meaning)
    .to(".hero-subtext", {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 1.8,
      ease: "power2.out"
    }, "dawn+=0.8") // Starts 0.8s after headline begins

    // PHASE 3: THE INVITATION (CTA emerges naturally)
    .to(".hero-cta", {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.4,
      ease: "back.out(1.6)" // Even gentler overshoot
    }, "dawn+=1.6")

    // Add a subtle background brightness shift for depth
    .fromTo(".hero .bg-black\\/15", {
      opacity: 0.2
    }, {
      opacity: 0.15,
      duration: 3,
      ease: "none"
    }, "dawn")
    
    // Add a very slight vignette fade for focus
    .fromTo(".hero .bg-radial-vignette", {
      opacity: 0.5
    }, {
      opacity: 0.7,
      duration: 2.5,
      ease: "sine.inOut"
    }, "dawn");

  // Add micro-interactions for extra polish
  const ctaButton = document.querySelector(".hero-cta .btn-gold");
  if (ctaButton) {
    // Hover effect
    ctaButton.addEventListener("mouseenter", () => {
      gsap.to(ctaButton, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    ctaButton.addEventListener("mouseleave", () => {
      gsap.to(ctaButton, {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)"
      });
    });
  }

  // Optional: Add scroll hint animation (more elegant)
  const scrollHint = document.querySelector(".absolute.bottom-8");
  if (scrollHint) {
    gsap.to(scrollHint, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 3 // Wait for hero animation to complete
    });
  }

  // Optional: Parallax effect on background for depth
  gsap.to(".hero .absolute.inset-0.z-0", {
    y: "10%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.2
    }
  });

  console.log("✨ Hero animation enhanced with emotional pacing");
}