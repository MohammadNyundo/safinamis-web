class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initEvents();
  }

  render() {
    this.innerHTML = `
      <nav class="fixed top-0 left-0 right-0 z-[9999] bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div class="container mx-auto px-6 h-16 flex items-center justify-between">

          <!-- Brand -->
          <a href="/" class="flex items-center gap-3 font-bold text-navy">
            <div class="w-8 h-8 rounded-full overflow-hidden">
              <video autoplay muted loop playsinline class="w-full h-full object-cover">
                <source src="assets/grok-video-d80d7bf5-bbd8-4491-a852-411a63f509e4.mp4" type="video/mp4">
              </video>
            </div>
            Safina MIS
          </a>

          <!-- Desktop Nav -->
          <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <li><a href="#story1" class="nav-link">Story</a></li>
            <li><a href="#how-it-works" class="nav-link">How It Works</a></li>
            <li><a href="#demo" class="nav-link">Proof</a></li>
            <li><a href="#partnership" class="nav-link">Join Us</a></li>
            <li>
              <!-- Revamped: Now just a smooth-scroll link to CTA section -->
              <a href="#cta-section" 
                 class="ml-4 px-5 py-2 rounded-full bg-gold text-navy font-semibold
                       pulse-gold hover:scale-105 transition-transform inline-block text-center">
                Schedule a Meeting
              </a>
            </li>
          </ul>

          <!-- Mobile Toggle -->
          <button id="navToggle" class="md:hidden">
            <svg class="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobileNav" class="hidden md:hidden bg-white border-t border-gray-200">
          <div class="px-6 py-6 flex flex-col gap-4 text-gray-700 font-medium">
            <a href="#story1" class="mobile-link">Story</a>
            <a href="#how-it-works" class="mobile-link">How It Works</a>
            <a href="#demo" class="mobile-link">Proof</a>
            <a href="#partnership" class="mobile-link">Join Us</a>

            <!-- Revamped mobile: smooth-scroll link to CTA section -->
            <a href="#cta-section" 
               class="mt-4 px-6 py-3 rounded-lg bg-gold text-navy font-semibold
                     pulse-gold hover:scale-105 transition-transform duration-300 inline-block text-center">
              Schedule a Meeting
            </a>

            <a href="http://safina.kweliai.com" target="_blank"
               class="text-sm text-gray-500 text-center mt-4">
              System Login →
            </a>
          </div>
        </div>
      </nav>

      <!-- Spacer -->
      <div class="h-16"></div>
    `;
  }

  initEvents() {
    const toggle = this.querySelector('#navToggle');
    const mobileNav = this.querySelector('#mobileNav');

    if (toggle) {
      toggle.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
      });
    }

    if (mobileNav) {
      mobileNav.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('click', () => {
          mobileNav.classList.add('hidden');
        });
      });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);