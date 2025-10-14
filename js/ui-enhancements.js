// AI Website Pro - UI Enhancements Module
// Interactive UI improvements and effects

AIWebsitePro.ui = {
    // Add hover effects to buttons
    enhanceButtons: function() {
        document.querySelectorAll('button, .btn, .cta-button').forEach(btn => {
            btn.style.transition = 'all 0.3s ease';
            
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
                btn.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            });
        });
    },
    
    // Add loading states
    addLoadingStates: function() {
        const style = document.createElement('style');
        style.textContent = `
            .loading {
                position: relative;
                pointer-events: none;
                opacity: 0.7;
            }
            
            .loading::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 20px;
                height: 20px;
                margin: -10px 0 0 -10px;
                border: 2px solid #f3f3f3;
                border-top: 2px solid #3498db;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    },
    
    // Smooth scrolling
    enableSmoothScroll: function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },
    
    // Add parallax effect
    addParallax: function() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(el => {
                const rate = scrolled * -0.5;
                el.style.transform = `translateY(${rate}px)`;
            });
        });
    },
    
    // Add typing indicator
    addTypingIndicator: function(element) {
        const dots = document.createElement('div');
        dots.innerHTML = '<span>.</span><span>.</span><span>.</span>';
        dots.style.cssText = `
            display: inline-block;
            animation: typing 1.4s infinite;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes typing {
                0%, 60%, 100% { opacity: 0; }
                30% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        element.appendChild(dots);
    }
};

// Initialize UI enhancements
AIWebsitePro.initUI = function() {
    this.ui.enhanceButtons();
    this.ui.addLoadingStates();
    this.ui.enableSmoothScroll();
    this.ui.addParallax();
};

AIWebsitePro.loadModule('ui-enhancements');