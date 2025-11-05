// Safina MIS - Main JavaScript Functionality (Complete & Fixed)
class SafinaApp {
    constructor() {
        this.init();
    }

    init() {
        // Initialize when DOM is fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.initSmoothScroll();
        this.initFormHandlers();
        this.initAnalyticsTracking();
        this.initHeroVideoCarousel(); // Fixed: Hero video carousel
        this.initTestimonialCarousel(); // Fixed: Testimonial carousel
        this.initEmotionalScrollReveal();
    }

    // Smooth scrolling for navigation
    initSmoothScroll() {
        // Wait a bit for components to load
        setTimeout(() => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    // Don't prevent default for navbar links - let navbar handle them
                    if (anchor.closest('custom-navbar')) return;
                    
                    e.preventDefault();
                    
                    const targetId = anchor.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const navbarHeight = 80;
                        const targetPosition = targetElement.offsetTop - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });

                        history.pushState(null, null, targetId);
                    }
                });
            });
        }, 100);
    }

    // Form submission handling only
    initFormHandlers() {
        const healthCheckForm = document.getElementById('health-check-form');
        
        if (healthCheckForm) {
            healthCheckForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const submitButton = document.getElementById('submit-button');
                const buttonText = submitButton.querySelector('.button-text');
                const loadingSpinner = submitButton.querySelector('.loading-spinner');
                const progressContainer = document.querySelector('.progress-container');
                const progressBar = document.querySelector('.progress-bar');
                const progressText = document.querySelector('.progress-text');
                
                const nameInput = document.getElementById('name-input');
                const emailInput = document.getElementById('email-input');
                const phoneInput = document.getElementById('phone-input');
                
                const originalText = buttonText.textContent;

                // Show loading state
                buttonText.textContent = 'Processing...';
                loadingSpinner.classList.remove('hidden');
                progressContainer.classList.remove('hidden');
                submitButton.disabled = true;

                // Simulate progress
                this.animateProgress(progressBar, progressText, () => {
                    // Form submission to Formspree
                    const formData = new FormData(healthCheckForm);
                    
                    fetch(healthCheckForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                    .then(response => {
                        if (response.ok) {
                            progressText.textContent = 'Request sent successfully!';
                            progressBar.classList.add('progress-100');
                            
                            this.showNotification('Thank you! We\'ll contact you within 24 hours with your free assessment.', 'success');
                            
                            setTimeout(() => {
                                nameInput.value = '';
                                emailInput.value = '';
                                phoneInput.value = '';
                                
                                buttonText.textContent = 'Request Sent! ✓';
                                submitButton.classList.add('btn-success');
                                
                                setTimeout(() => {
                                    progressContainer.classList.add('hidden');
                                    loadingSpinner.classList.add('hidden');
                                    submitButton.disabled = false;
                                    
                                    setTimeout(() => {
                                        buttonText.textContent = originalText;
                                        submitButton.classList.remove('btn-success');
                                        progressBar.style.width = '0%';
                                        progressBar.classList.remove('progress-100');
                                    }, 2000);
                                }, 1000);
                            }, 1000);
                        } else {
                            throw new Error('Form submission failed');
                        }
                    })
                    .catch(error => {
                        progressText.textContent = 'Failed to send. Please try again.';
                        progressBar.style.background = '#EF4444';
                        
                        this.showNotification('Sorry, there was an error. Please try again or contact us directly.', 'error');
                        
                        setTimeout(() => {
                            buttonText.textContent = originalText;
                            loadingSpinner.classList.add('hidden');
                            progressContainer.classList.add('hidden');
                            submitButton.disabled = false;
                            progressBar.style.background = '';
                            progressBar.style.width = '0%';
                        }, 3000);
                    });
                });
            });
        }
    }

    // Progress animation helper
    animateProgress(progressBar, progressText, callback) {
        const steps = [
            { width: '25%', text: 'Processing your information...' },
            { width: '50%', text: 'Analyzing your needs...' },
            { width: '75%', text: 'Preparing your assessment...' },
            { width: '100%', text: 'Finalizing your request...' }
        ];
        
        let step = 0;
        
        const animateStep = () => {
            if (step < steps.length) {
                progressBar.style.width = steps[step].width;
                progressText.textContent = steps[step].text;
                step++;
                setTimeout(animateStep, 600);
            } else {
                setTimeout(callback, 500);
            }
        };
        
        animateStep();
    }

    // Analytics and tracking only
    initAnalyticsTracking() {
        // Track demo button clicks (non-navbar buttons)
        document.addEventListener('click', (e) => {
            const demoLink = e.target.closest('[href*="safina.kweliai.com"]');
            if (demoLink && !demoLink.closest('custom-navbar')) {
                console.log('Demo accessed from:', window.location.href);
            }

            // Track CTA clicks (non-navbar buttons)
            const ctaButton = e.target.closest('.btn-gold, .btn-navy, .cta-button');
            if (ctaButton && !ctaButton.closest('custom-navbar')) {
                console.log('CTA clicked:', ctaButton.textContent.trim());
            }
        });
    }

    // FIXED: Hero Video Carousel (uses specific selector for hero section)
     initHeroVideoCarousel() {
        // Use a simpler selector - find the hero section by structure
        const heroSection = document.querySelector('section.relative.bg-gradient-to-r');
        if (!heroSection) {
            console.log('Hero section not found');
            return;
        }

        const heroSlides = heroSection.querySelectorAll('.carousel-slide');
        if (heroSlides.length === 0) {
            console.log('No hero slides found');
            return;
        }

        console.log('Found', heroSlides.length, 'hero slides');

        let currentHeroIndex = 0;
        const displayDuration = 6000;

        function showHeroSlide(index) {
            console.log('Showing hero slide:', index);
            heroSlides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
            });

            const video = heroSlides[index].querySelector('video');
            if (video) {
                video.currentTime = 0;
                video.play().catch(e => {
                    // Silent fail for autoplay
                });
            }
        }

        // Initial slide
        showHeroSlide(currentHeroIndex);

        // Loop through slides
        setInterval(() => {
            currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length;
            showHeroSlide(currentHeroIndex);
        }, displayDuration);
    }

    // FIXED: Simplified Testimonial Carousel
    initTestimonialCarousel() {
        const carousel = document.getElementById('testimonialCarousel');
        if (!carousel) {
            console.log('Testimonial carousel not found');
            return;
        }

        console.log('Initializing testimonial carousel');

        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(carousel.querySelectorAll('.testimonial-slide')); // ✅ fix class name
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const dots = carousel.querySelectorAll('.carousel-dot');
        
        let currentIndex = 0;
        let autoScrollInterval;
        const autoScrollDelay = 5000;

        function getSlidesPerView() {
            return window.innerWidth < 768 ? 1 : 2;
        }

        function updateCarousel() {
            const slidesPerView = getSlidesPerView();
            const totalGroups = Math.ceil(slides.length / slidesPerView);
            const trackWidth = track.offsetWidth;
            const translateX = -currentIndex * trackWidth; // ✅ smoother + works for % widths

            track.style.transform = `translateX(${translateX}px)`;

            // ✅ Update dot state correctly
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            const slidesPerView = getSlidesPerView();
            const maxIndex = Math.max(0, Math.ceil(slides.length / slidesPerView) - 1);

            currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
            updateCarousel();
        }

        function prevSlide() {
            const slidesPerView = getSlidesPerView();
            const maxIndex = Math.max(0, Math.ceil(slides.length / slidesPerView) - 1);

            currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
            updateCarousel();
        }

        // ✅ Touch swipe (mobile)
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            clearInterval(autoScrollInterval);
        });

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const difference = touchStartX - touchEndX;

            if (Math.abs(difference) > swipeThreshold) {
                if (difference > 0) nextSlide();
                else prevSlide();
            }

            setTimeout(() => startAutoScroll(), 800); // ✅ smoother resume
        }

        // ✅ Navigation
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoScroll(); });
        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoScroll(); });

        // ✅ Dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
                resetAutoScroll();
            });
        });

        // ✅ Auto scroll
        function startAutoScroll() {
            autoScrollInterval = setInterval(nextSlide, autoScrollDelay);
        }

        function resetAutoScroll() {
            clearInterval(autoScrollInterval);
            startAutoScroll();
        }

        // ✅ Hover pause
        carousel.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
        carousel.addEventListener('mouseleave', startAutoScroll);

        // ✅ Init
        updateCarousel();
        startAutoScroll();

        // ✅ Responsive recalculation
        window.addEventListener('resize', updateCarousel);
    }


    // Reveal emotional cards when scrolled into view
    // Reveal emotional cards when scrolled into view, reset when out of view
    initEmotionalScrollReveal() {
        const cards = document.querySelectorAll('.solution-emotion');
        if (!cards.length) return;

        // Only apply scroll-based reveal for mobile/tablet
        if (window.innerWidth < 1024) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            }, { threshold: 0.3 });

            cards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.2}s`;
                observer.observe(card);
            });
        }
    }


    // Notification system
    showNotification(message, type = 'info') {
        const existingNotification = document.querySelector('.safina-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `safina-notification fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500 text-white' : 
            type === 'error' ? 'bg-red-500 text-white' : 
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
}

// Initialize the application
const safinaApp = new SafinaApp();

// Make available globally for debugging
window.SafinaApp = safinaApp;

// Simple error handling
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
});

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SafinaApp;
}