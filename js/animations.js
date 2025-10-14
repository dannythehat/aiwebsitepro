// AI Website Pro - Animations Module
// Smooth animations and transitions

AIWebsitePro.animations = {
    // Fade in animation
    fadeIn: function(element, duration = 1000) {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease-in-out`;
        
        setTimeout(() => {
            element.style.opacity = '1';
        }, 10);
    },
    
    // Slide in from bottom
    slideInUp: function(element, duration = 800) {
        element.style.transform = 'translateY(50px)';
        element.style.opacity = '0';
        element.style.transition = `all ${duration}ms ease-out`;
        
        setTimeout(() => {
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }, 10);
    },
    
    // Scale in animation
    scaleIn: function(element, duration = 600) {
        element.style.transform = 'scale(0.8)';
        element.style.opacity = '0';
        element.style.transition = `all ${duration}ms ease-out`;
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
        }, 10);
    },
    
    // Typing effect
    typeWriter: function(element, text, speed = 50) {
        element.innerHTML = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    },
    
    // Pulse effect
    pulse: function(element, duration = 2000) {
        element.style.animation = `pulse ${duration}ms infinite`;
    }
};

// Add CSS animations
AIWebsitePro.addAnimationCSS = function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
            40%, 43% { transform: translateY(-30px); }
            70% { transform: translateY(-15px); }
            90% { transform: translateY(-4px); }
        }
        
        .animate-bounce { animation: bounce 1s infinite; }
        .animate-pulse { animation: pulse 2s infinite; }
    `;
    document.head.appendChild(style);
};

// Initialize animations
AIWebsitePro.initAnimations = function() {
    this.addAnimationCSS();
    
    // Auto-animate elements with data attributes
    document.querySelectorAll('[data-animate]').forEach(el => {
        const animationType = el.dataset.animate;
        const delay = parseInt(el.dataset.delay) || 0;
        
        setTimeout(() => {
            if (this.animations[animationType]) {
                this.animations[animationType](el);
            }
        }, delay);
    });
};

AIWebsitePro.loadModule('animations');