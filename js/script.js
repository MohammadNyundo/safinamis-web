// Safina MIS - Main JavaScript Functionality (Simplified)
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