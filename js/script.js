// Safina MIS - Main JavaScript Functionality
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
        this.initScrollAnimations();
        this.initComponentLoaders();
    }

    // Smooth scrolling for navigation
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navbarHeight = 80; // Match navbar height
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, targetId);
                }
            });
        });
    }

    // Form submission handling
    // Form submission handling with Formspree
    // Enhanced Form submission handling with Progress Bar
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
                            // Success state
                            progressText.textContent = 'Request sent successfully!';
                            progressBar.classList.add('progress-100');
                            
                            // Show success notification
                            this.showNotification('Thank you! We\'ll contact you within 24 hours with your free assessment.', 'success');
                            
                            // Reset form and button after delay
                            setTimeout(() => {
                                // Clear form inputs
                                nameInput.value = '';
                                emailInput.value = '';
                                phoneInput.value = '';
                                
                                // Reset button
                                buttonText.textContent = 'Request Sent! ✓';
                                submitButton.classList.add('btn-success');
                                
                                // Hide progress
                                setTimeout(() => {
                                    progressContainer.classList.add('hidden');
                                    loadingSpinner.classList.add('hidden');
                                    submitButton.disabled = false;
                                    
                                    // Reset to original state after 3 seconds
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
                        // Error state
                        progressText.textContent = 'Failed to send. Please try again.';
                        progressBar.style.background = '#EF4444';
                        
                        this.showNotification('Sorry, there was an error. Please try again or contact us directly.', 'error');
                        
                        // Reset button
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

    // Form submission logic
    handleFormSubmission(form) {
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate API call (replace with actual endpoint)
        setTimeout(() => {
            console.log('Form submitted:', formValues);
            
            // Show success message
            this.showNotification('Thank you for your interest! We will contact you shortly.', 'success');
            
            // Reset form
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Track form submission
            this.trackEvent('form_submission', {
                form_type: form.id || 'general_form',
                timestamp: new Date().toISOString()
            });

        }, 1500);
    }

    // Analytics and tracking
    initAnalyticsTracking() {
        // Track demo button clicks
        document.addEventListener('click', (e) => {
            const demoLink = e.target.closest('[href*="safina.kweliai.com"]');
            if (demoLink) {
                this.trackEvent('demo_access', {
                    source: window.location.href,
                    timestamp: new Date().toISOString()
                });
            }

            // Track CTA clicks
            const ctaButton = e.target.closest('.btn-gold, .btn-navy, .cta-button');
            if (ctaButton) {
                this.trackEvent('cta_click', {
                    button_text: ctaButton.textContent.trim(),
                    location: ctaButton.closest('section')?.id || 'unknown'
                });
            }
        });

        // Track page visibility for engagement
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.trackEvent('page_hidden');
            } else {
                this.trackEvent('page_visible');
            }
        });
    }

    // Scroll animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.card-elegant, .testimonial-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Component initialization
    initComponentLoaders() {
        // Wait for custom elements to be defined
        if (customElements.get('custom-navbar') && customElements.get('custom-footer')) {
            this.onComponentsReady();
        } else {
            // Fallback: check again after a short delay
            setTimeout(() => this.onComponentsReady(), 100);
        }
    }

    onComponentsReady() {
        console.log('Safina MIS components loaded successfully');
        
        // Additional component-specific initialization can go here
        this.trackEvent('page_loaded', {
            url: window.location.href,
            user_agent: navigator.userAgent
        });
    }

    // Event tracking (replace with your analytics service)
    trackEvent(eventName, properties = {}) {
        const eventData = {
            event: eventName,
            timestamp: new Date().toISOString(),
            ...properties
        };
        
        console.log('Event tracked:', eventData);
        
        // Example: Send to Google Analytics
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', eventName, properties);
        // }
        
        // Example: Send to your backend
        // this.sendToAnalytics(eventData);
    }

    // Send data to analytics endpoint
    async sendToAnalytics(data) {
        try {
            // Replace with your actual analytics endpoint
            await fetch('/api/analytics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.warn('Analytics error:', error);
        }
    }

    // Notification system
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.safina-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create new notification
        const notification = document.createElement('div');
        notification.className = `safina-notification fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500 text-white' : 
            type === 'error' ? 'bg-red-500 text-white' : 
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Utility method for external links
    handleExternalLinks() {
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (link.hostname !== window.location.hostname) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }
}

// Initialize the application
const safinaApp = new SafinaApp();

// Make available globally for debugging
window.SafinaApp = safinaApp;

// Error handling
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
    safinaApp.trackEvent('error', {
        message: event.error?.message,
        filename: event.filename,
        lineno: event.lineno
    });
});

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SafinaApp;
}