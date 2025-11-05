class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.render();
        this.initEventListeners();
    }

    render() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-brand">
                        <div class="footer-logo">
                            <video class="footer-logo-icon" autoplay loop muted playsinline>
                                <source src="/assets/grok-video-d80d7bf5-bbd8-4491-a852-411a63f509e4.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            Safina MIS
                        </div>
                        <div class="footer-tagline">The Ark for Your Business Operations</div>
                        <p class="footer-description">
                            Transform your accommodation management with our comprehensive solution. Eliminate manual errors, gain real-time insights, and reclaim your peace of mind with Safina MIS.
                        </p>
                        <div class="social-links">
                            <!-- WhatsApp -->
                            <a href="https://wa.me/254752012827?text=Hi%20Safina%20MIS%20team,%20I%20saw%20your%20website%20and%20would%20like%20to%20learn%20more%20about%20your%20accommodation%20management%20system." 
                                class="social-link" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Contact us on WhatsApp">
                                <svg class="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                </svg>
                            </a>

                            <!-- Twitter/X -->
                            <a href="https://x.com/prolific_va" 
                                class="social-link" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Follow us on Twitter">
                                <svg class="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                </svg>
                            </a>

                            <!-- Email -->
                            <a href="mailto:prolificva.services@gmail.com" 
                                class="social-link" 
                                aria-label="Send us an email">
                                <svg class="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </a>

                            <!-- 🔹 TikTok -->
                            <a href="https://www.tiktok.com/@prolific_va" 
                                class="social-link" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Follow us on TikTok">
                                <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.5 2h2.4c.2 1.5 1.1 2.8 2.5 3.6V9c-.9 0-1.8-.2-2.6-.5V15a5.5 5.5 0 11-5.5-5.5v2.4a3.1 3.1 0 103.1 3.1V2z"/>
                                </svg>
                            </a>

                            <!-- 🔹 Instagram -->
                            <a href="https://www.instagram.com/prolific__va?igsh=ZWNsdTdkZ2Q5bmtu" 
                                class="social-link" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Follow us on Instagram">
                                <svg class="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                                <circle cx="17.5" cy="6.5" r="1.5"/>
                                </svg>
                            </a>
                        </div>

                    </div>
                    
                    <div class="footer-section">
                        <h3 class="footer-heading">Quick Links</h3>
                        <ul class="footer-links">
                            <li class="footer-link">
                                <a href="#" class="footer-link-item">
                                    <svg class="footer-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li class="footer-link">
                                <a href="#demo" class="footer-link-item">
                                    <svg class="footer-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    Live Demo
                                </a>
                            </li>
                            <li class="footer-link">
                                <a href="#health-check" class="footer-link-item">
                                    <svg class="footer-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
                                    </svg>
                                    Health Check
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3 class="footer-heading">Product</h3>
                        <ul class="footer-links">
                            <li class="footer-link">
                                <a href="#demo" class="footer-link-item">
                                    <svg class="footer-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                    </svg>
                                    Features
                                </a>
                            </li>
                            <li class="footer-link">
                                <a href="http://safina.kweliai.com" target="_blank" rel="noopener noreferrer" class="footer-link-item">
                                    <svg class="footer-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                                    </svg>
                                    Login
                                </a>
                            </li>
                            <li class="footer-link">
                                <a href="#" class="footer-link-item contact-link" data-open="pricingModal">
                                    <svg class="footer-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                                    </svg>
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3 class="footer-heading">Contact Us</h3>
                        <ul class="footer-links">
                            <li class="footer-link">
                                <a href="https://wa.me/254752012827?text=Hi%20Safina%20MIS%20team,%20I%20saw%20your%20website%20and%20would%20like%20to%20learn%20more%20about%20your%20accommodation%20management%20system." 
                                   target="_blank" 
                                   class="footer-link-item contact-link">
                                    <svg class="footer-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    +254 752 012 827
                                </a>
                            </li>
                            <li class="footer-link">
                                <a href="mailto:prolificva.services@gmail.com" class="footer-link-item contact-link">
                                    <svg class="footer-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    prolificva.services@gmail.com
                                </a>
                            </li>
                            <li class="footer-link">
                                <a href="https://prolificva.com" target="_blank" rel="noopener noreferrer" class="footer-link-item contact-link">
                                    <svg class="footer-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"/>
                                    </svg>
                                    prolificva.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2024 Safina MIS by Prolific Virtual Assistant. All rights reserved.</p>
                    <p class="prolific-credit">Crafted with excellence by Prolific VA</p>
                </div>

                <!-- Floating WhatsApp Button -->
                <a href="https://wa.me/254752012827?text=Hi%20Safina%20MIS%20team,%20I%20saw%20your%20website%20and%20would%20like%20to%20learn%20more%20about%20your%20accommodation%20management%20system." 
                   target="_blank"
                   class="whatsapp-float"
                   aria-label="Chat with us on WhatsApp">
                   <svg class="whatsapp-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444"/>
                   </svg>
                   <span class="whatsapp-pulse"></span>
                </a>
            </footer>
        `;

        // Inject styles
        this.injectStyles();
    }

    injectStyles() {
        const styles = `
            <style>
                .footer {
                    background: linear-gradient(135deg, #001F3F 0%, #002E5D 100%);
                    color: white;
                    padding: 4rem 2rem 2rem;
                    font-family: 'Inter', sans-serif;
                    position: relative;
                    overflow: hidden;
                }
                
                .footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #FFD700, transparent);
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                    gap: 3rem;
                    position: relative;
                    z-index: 2;
                }
                
                .footer-brand {
                    display: flex;
                    flex-direction: column;
                }
                
                .footer-logo {
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    color: white;
                }
                
                .footer-logo-icon {
                    margin-right: 0.75rem;
                    width: 24px;
                    height: 24px;
                    border-radius: 4px;
                    object-fit: cover;
                }
                
                .footer-tagline {
                    font-size: 1.1rem;
                    color: #FFD700;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                
                .footer-description {
                    color: #CBD5E1;
                    line-height: 1.7;
                    margin-bottom: 2rem;
                    font-size: 0.95rem;
                }
                
                .footer-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: white;
                    position: relative;
                }
                
                .footer-heading::after {
                    content: '';
                    position: absolute;
                    bottom: -0.5rem;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background: #FFD700;
                    border-radius: 2px;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-link {
                    margin-bottom: 1rem;
                }
                
                .footer-link-item {
                    color: #CBD5E1;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    padding: 0.5rem 0;
                    border-radius: 6px;
                    transition: all 0.3s ease;
                }
                
                .footer-link-item:hover {
                    color: #FFD700;
                    transform: translateX(8px);
                    background: rgba(255, 215, 0, 0.05);
                    padding-left: 1rem;
                }
                
                .footer-link-icon {
                    margin-right: 0.75rem;
                    width: 18px;
                    height: 18px;
                    stroke-width: 1.5;
                }
                
                .contact-link {
                    color: #CBD5E1 !important;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .contact-link:hover {
                    color: #FFD700 !important;
                    transform: translateX(0) !important;
                    background: none !important;
                    padding-left: 0 !important;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    color: #CBD5E1;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 1px solid rgba(255, 215, 0, 0.1);
                }
                
                .social-link:hover {
                    background: #FFD700;
                    color: #001F3F;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
                }
                
                .social-icon {
                    width: 20px;
                    height: 20px;
                    stroke-width: 1.5;
                }
                
                .footer-bottom {
                    max-width: 1200px;
                    margin: 4rem auto 0;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 215, 0, 0.2);
                    text-align: center;
                    color: #94A3B8;
                    font-size: 0.9rem;
                    position: relative;
                    z-index: 2;
                }
                
                .prolific-credit {
                    color: #FFD700;
                    font-weight: 500;
                    margin-top: 0.5rem;
                }

                /* WhatsApp Floating Button */
                .whatsapp-float {
                    position: fixed;
                    bottom: 25px;
                    right: 25px;
                    background: #25D366;
                    color: white;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
                    z-index: 1000;
                    transition: all 0.3s ease;
                    animation: float 3s ease-in-out infinite;
                    text-decoration: none;
                }

                .whatsapp-float:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
                    background: #20bd5a;
                }

                .whatsapp-icon {
                    width: 30px;
                    height: 30px;
                }

                /* WhatsApp Pulse Animation */
                .whatsapp-pulse {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: #25D366;
                    animation: pulse 2s infinite;
                    z-index: -1;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        opacity: 0.8;
                    }
                    70% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }
                
                @media (max-width: 1024px) {
                    .footer-content {
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem;
                    }
                }
                
                @media (max-width: 768px) {
                    .footer {
                        padding: 3rem 1.5rem 1.5rem;
                    }
                    
                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                    
                    .footer-logo {
                        font-size: 1.5rem;
                    }
                    
                    .social-links {
                        justify-content: center;
                    }

                    .whatsapp-float {
                        bottom: 20px;
                        right: 20px;
                        width: 55px;
                        height: 55px;
                    }
                    
                    .whatsapp-icon {
                        width: 28px;
                        height: 28px;
                    }
                }
            </style>
        `;
        
        this.insertAdjacentHTML('beforeend', styles);
    }

    initEventListeners() {
        // Add any footer-specific event listeners here
        // For example, tracking social link clicks
        this.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const platform = link.getAttribute('aria-label')?.replace('Contact us on ', '').replace('Follow us on ', '').replace('Send us an ', '');
                if (window.SafinaApp) {
                    window.SafinaApp.trackEvent('social_click', { platform });
                }
            });
        });

        // Track WhatsApp button clicks
        const whatsappButton = this.querySelector('.whatsapp-float');
        if (whatsappButton) {
            whatsappButton.addEventListener('click', (e) => {
                if (window.SafinaApp) {
                    window.SafinaApp.trackEvent('whatsapp_click', { source: 'floating_button' });
                }
            });
        }
    }
}

// Register the custom element
if (!customElements.get('custom-footer')) {
    customElements.define('custom-footer', CustomFooter);
}