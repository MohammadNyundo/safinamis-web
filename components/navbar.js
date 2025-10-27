class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.isMobileMenuOpen = false;
        this.originalParent = null;
        this.originalNextSibling = null;
    }

    connectedCallback() {
        this.render();
        this.initEventListeners();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar-component">
                <a href="/" class="navbar-logo">
                    <div class="navbar-logo-video-container">
                        <video class="navbar-logo-video" autoplay muted loop playsinline>
                            <source src="assets/grok-video-d80d7bf5-bbd8-4491-a852-411a63f509e4.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    Safina MIS
                </a>
                
                <button class="navbar-mobile-menu" id="mobileMenu" aria-label="Toggle navigation menu">
                    <svg class="navbar-mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                
                <ul class="navbar-links" id="navLinks">
                    <li><a href="#demo" class="navbar-link">
                        <svg class="navbar-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Live Demo
                    </a></li>
                    <li><a href="#health-check" class="navbar-link">
                        <svg class="navbar-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                        </svg>
                        Health Check
                    </a></li>
                    <li><a href="http://safina.kweliai.com" target="_blank" rel="noopener noreferrer" class="navbar-link">
                        <svg class="navbar-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                        </svg>
                        Login
                    </a></li>
                    <li><a href="#health-check" class="navbar-link navbar-cta-button">
                        <svg class="navbar-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        Get Started
                    </a></li>
                </ul>
            </nav>
            <div class="navbar-spacer"></div>
        `;
    }

    initEventListeners() {
        console.log('Initializing event listeners');
        const mobileMenu = this.querySelector('#mobileMenu');
        const navLinks = this.querySelector('#navLinks');
        
        if (mobileMenu && navLinks) {
            mobileMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMobileMenu();
            });
            
            navLinks.querySelectorAll('.navbar-link').forEach(link => {
                link.addEventListener('click', () => {
                    if (this.isMobileMenuOpen) {
                        this.closeMobileMenu();
                    }
                });
            });
            
            document.addEventListener('click', (e) => {
                if (this.isMobileMenuOpen && !this.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isMobileMenuOpen) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    toggleMobileMenu() {
        console.log('Toggling mobile menu');
        if (this.isMobileMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        console.log('Opening mobile menu');
        const navLinks = this.querySelector('#navLinks');
        const mobileMenuIcon = this.querySelector('.navbar-mobile-menu-icon');
        const mobileMenu = this.querySelector('#mobileMenu');
        
        if (!navLinks) return;
        
        // Save position (only if not already moved)
        if (this.originalParent === null) {
            this.originalParent = navLinks.parentNode;
            this.originalNextSibling = navLinks.nextSibling;
        }
        
        navLinks.classList.add('active');
        
        // Re-parent to body for z-index escape (only if not already there)
        if (navLinks.parentNode !== document.body) {
            document.body.appendChild(navLinks);
        }
        
        // Styles: Let CSS handle most (half-page via max-height), but enforce basics
        navLinks.style.position = 'fixed';
        navLinks.style.zIndex = '999999';
        navLinks.style.top = '70px';  // Below navbar (adjust to 65px on <480px if needed)
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.width = '100%';
        navLinks.style.height = 'auto';  // Content-driven, capped by CSS max-height
        navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
        navLinks.style.backdropFilter = 'blur(20px)';
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.alignItems = 'center';
        navLinks.style.padding = '0.75rem 1.25rem';
        navLinks.style.gap = '0.25rem';
        navLinks.style.overflowY = 'auto';
        navLinks.style.borderTop = '1px solid rgba(255, 215, 0, 0.1)';
        navLinks.style.boxShadow = '0 4px 16px rgba(0, 31, 63, 0.08)';
        navLinks.style.opacity = '0';
        navLinks.style.transform = 'translateY(-10px)';
        navLinks.style.isolation = 'isolate';
        
        mobileMenu.classList.add('active');
        mobileMenuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
        this.isMobileMenuOpen = true;
        document.body.style.overflow = 'hidden';
        document.body.classList.add('navbar-menu-open');
        
        // Fade-down animation
        requestAnimationFrame(() => {
            navLinks.style.opacity = '1';
            navLinks.style.transform = 'translateY(0)';
        });
        console.log('Half-page menu opened - Z:', window.getComputedStyle(navLinks).zIndex);
    }

    closeMobileMenu() {
        const navLinks = document.querySelector('#navLinks');  // Global query for safety
        const mobileMenuIcon = this.querySelector('.navbar-mobile-menu-icon');
        const mobileMenu = this.querySelector('#mobileMenu');
        
        if (!navLinks) return;
        
        navLinks.classList.remove('active');
        navLinks.style.pointerEvents = 'none';
        
        // Fade-up close
        navLinks.style.opacity = '0';
        navLinks.style.transform = 'translateY(-10px)';
        
        mobileMenu.classList.remove('active');
        mobileMenuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        
        setTimeout(() => {
            // Re-parent only if needed
            if (this.originalParent && navLinks.parentNode !== this.originalParent) {
                this.originalParent.insertBefore(navLinks, this.originalNextSibling);
            }
            // Reset all inline styles (let CSS take over)
            navLinks.style.cssText = '';
            navLinks.style.pointerEvents = '';
            this.originalParent = null;
            this.originalNextSibling = null;
            this.isMobileMenuOpen = false;
            document.body.style.overflow = '';
            document.body.classList.remove('navbar-menu-open');
            console.log('Half-page menu closed');
        }, 250);
    }

    disconnectedCallback() {
        document.body.style.overflow = '';
        document.body.classList.remove('navbar-menu-open');
    }
}

// Register the custom element
if (!customElements.get('custom-navbar')) {
    customElements.define('custom-navbar', CustomNavbar);
}