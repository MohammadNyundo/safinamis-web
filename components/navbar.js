class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.isMobileMenuOpen = false;
    }

    connectedCallback() {
        this.render();
        this.initEventListeners();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar">
                <a href="/" class="logo">
                    <div class="logo-video-container">
                        <video class="logo-video" autoplay muted loop playsinline>
                            <source src="assets/grok-video-d80d7bf5-bbd8-4491-a852-411a63f509e4.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    Safina MIS
                </a>
                
                <button class="mobile-menu" id="mobileMenu" aria-label="Toggle navigation menu">
                    <svg class="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                
                <ul class="nav-links" id="navLinks">
                    <li><a href="#demo" class="nav-link">
                        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Live Demo
                    </a></li>
                    <li><a href="#health-check" class="nav-link">
                        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                        </svg>
                        Health Check
                    </a></li>
                    <li><a href="http://safina.kweliai.com" target="_blank" rel="noopener noreferrer" class="nav-link">
                        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                        </svg>
                        Login
                    </a></li>
                    <li><a href="#health-check" class="nav-link cta-button">
                        <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                        </svg>
                        Get Started
                    </a></li>
                </ul>
            </nav>
            <div class="navbar-spacer"></div>
        `;

        // Inject styles
        this.injectStyles();
    }

    injectStyles() {
        const styles = `
            <style>
                .navbar {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    padding: 1rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 4px 30px rgba(0, 31, 63, 0.08);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
                    font-family: 'Inter', sans-serif;
                }
                
                .logo {
                    color: #001F3F;
                    font-weight: 700;
                    font-size: 1.25rem;
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    z-index: 1001;
                }
                
                /* === LOGO VIDEO STYLES === */
                .logo-video-container {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    margin-right: 0.75rem;
                }
                
                .logo-video {
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    object-fit: cover;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    border: 2px solid rgba(255, 215, 0, 0.3);
                    transition: all 0.3s ease;
                }
                
                .logo-video:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
                    border-color: rgba(255, 215, 0, 0.6);
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    align-items: center;
                }
                
                .nav-link {
                    color: #4b5563;
                    text-decoration: none;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    padding: 0.5rem 0;
                    position: relative;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #001F3F;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #FFD700, #001F3F);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .nav-icon {
                    margin-right: 0.5rem;
                    width: 18px;
                    height: 18px;
                    stroke-width: 1.5;
                }
                
                .cta-button {
                    background: linear-gradient(135deg, #001F3F, #002E5D);
                    color: white !important;
                    padding: 0.75rem 1.5rem;
                    border-radius: 12px;
                    font-weight: 600;
                    text-decoration: none;
                    box-shadow: 0 4px 20px rgba(0, 31, 63, 0.3);
                    border: 2px solid transparent;
                }
                
                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(0, 31, 63, 0.4);
                    background: linear-gradient(135deg, #002E5D, #003D7A);
                    color: white !important;
                }
                
                .cta-button::after {
                    display: none;
                }
                
                .mobile-menu {
                    display: none;
                    background: none;
                    border: none;
                    color: #001F3F;
                    cursor: pointer;
                    padding: 0.5rem;
                    z-index: 1001;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }
                
                .mobile-menu:hover {
                    background: rgba(0, 31, 63, 0.05);
                }
                
                .mobile-menu-icon {
                    width: 24px;
                    height: 24px;
                    transition: transform 0.3s ease;
                }
                
                .navbar-spacer {
                    height: 80px;
                }
                
                /* === MOBILE STYLES - FIXED === */
                @media (max-width: 768px) {
                    .navbar {
                        padding: 1rem 1.25rem;
                    }
                    
                    .mobile-menu {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .logo {
                        font-size: 1.1rem;
                    }
                    
                    .logo-video {
                        width: 28px;
                        height: 28px;
                    }
                    
                    .nav-links {
                        position: fixed;
                        top: 70px; /* CHANGED: Start below navbar */
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(255, 255, 255, 0.98);
                        backdrop-filter: blur(20px);
                        flex-direction: column;
                        justify-content: flex-start;
                        padding-top: 2rem; /* CHANGED: Reduced padding */
                        padding-left: 2rem;
                        padding-right: 2rem;
                        box-shadow: 0 4px 30px rgba(0, 31, 63, 0.1);
                        display: none;
                        gap: 0;
                        z-index: 999;
                        overflow-y: auto;
                        border-top: 1px solid rgba(255, 215, 0, 0.1); /* ADDED: Visual separation */
                    }
                    
                    .nav-links.active {
                        display: flex;
                        animation: slideIn 0.3s ease-out;
                    }
                    
                    @keyframes slideIn {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .nav-link {
                        padding: 1.25rem 0;
                        width: 100%;
                        justify-content: flex-start;
                        border-bottom: 1px solid rgba(0, 31, 63, 0.08);
                        font-size: 1.1rem;
                        font-weight: 500;
                    }
                    
                    .nav-link:last-child {
                        border-bottom: none;
                    }
                    
                    .nav-icon {
                        width: 20px;
                        height: 20px;
                        margin-right: 0.75rem;
                    }
                    
                    .cta-button {
                        margin-top: 1rem;
                        text-align: center;
                        padding: 1rem 1.5rem;
                        font-size: 1rem;
                        border-radius: 10px;
                        justify-content: center;
                        background: linear-gradient(135deg, #001F3F, #002E5D);
                    }
                    
                    .cta-button:hover {
                        transform: translateY(-1px);
                    }
                    
                    /* Close button styling */
                    .mobile-menu.active .mobile-menu-icon {
                        transform: rotate(90deg);
                    }
                }
                
                /* Desktop styles */
                @media (min-width: 769px) {
                    .nav-links {
                        display: flex !important;
                    }
                    
                    .navbar {
                        padding: 1rem 2rem;
                    }
                    
                    .logo {
                        font-size: 1.5rem;
                    }
                }
                
                /* Extra small devices */
                @media (max-width: 480px) {
                    .navbar {
                        padding: 0.875rem 1rem;
                    }
                    
                    .logo {
                        font-size: 1rem;
                    }
                    
                    .logo-video {
                        width: 24px;
                        height: 24px;
                        margin-right: 0.5rem;
                    }
                    
                    .nav-links {
                        top: 65px; /* CHANGED: Adjusted for smaller navbar */
                        padding-top: 1.5rem; /* CHANGED: Reduced padding */
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                    }
                    
                    .nav-link {
                        padding: 1rem 0;
                        font-size: 1rem;
                    }
                }
            </style>
        `;
        
        this.insertAdjacentHTML('beforeend', styles);
    }

    initEventListeners() {
        const mobileMenu = this.querySelector('#mobileMenu');
        const navLinks = this.querySelector('#navLinks');
        
        if (mobileMenu && navLinks) {
            // Mobile menu toggle
            mobileMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMobileMenu();
            });
            
            // Close mobile menu when clicking on links
            navLinks.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    if (this.isMobileMenuOpen) {
                        this.closeMobileMenu();
                    }
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (this.isMobileMenuOpen && !this.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });
            
            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isMobileMenuOpen) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    toggleMobileMenu() {
        if (this.isMobileMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        const navLinks = this.querySelector('#navLinks');
        const mobileMenuIcon = this.querySelector('.mobile-menu-icon');
        const mobileMenu = this.querySelector('#mobileMenu');
        
        navLinks.classList.add('active');
        mobileMenu.classList.add('active');
        mobileMenuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
        this.isMobileMenuOpen = true;
        document.body.style.overflow = 'hidden';
        document.body.classList.add('navbar-menu-open'); // ADD THIS LINE
    }

    closeMobileMenu() {
        const navLinks = this.querySelector('#navLinks');
        const mobileMenuIcon = this.querySelector('.mobile-menu-icon');
        const mobileMenu = this.querySelector('#mobileMenu');
        
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        this.isMobileMenuOpen = false;
        document.body.style.overflow = '';
        document.body.classList.remove('navbar-menu-open'); // ADD THIS LINE
    }

    // Cleanup when component is removed
    disconnectedCallback() {
        document.body.style.overflow = '';
    }
}

// Register the custom element
if (!customElements.get('custom-navbar')) {
    customElements.define('custom-navbar', CustomNavbar);
}