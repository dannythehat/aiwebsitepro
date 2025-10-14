// AI Website Pro - Mini Demo Enhancements
// Lightweight version that loads modular components

(function() {
    'use strict';
    
    // Quick check if already loaded
    if (window.AIWebsiteProLoaded) return;
    window.AIWebsiteProLoaded = true;
    
    console.log('🚀 Loading AI Website Pro Mini Enhancements...');
    
    // Load the main module loader
    const loader = document.createElement('script');
    loader.src = 'js/loader.js';
    loader.async = true;
    
    loader.onload = function() {
        console.log('✅ AI Website Pro modules loading...');
    };
    
    loader.onerror = function() {
        console.warn('⚠️ Could not load modular version, falling back to basic enhancements');
        loadBasicEnhancements();
    };
    
    document.head.appendChild(loader);
    
    // Fallback basic enhancements
    function loadBasicEnhancements() {
        // Add basic button hover effects
        const style = document.createElement('style');
        style.textContent = `
            button, .btn, .cta-button {
                transition: all 0.3s ease !important;
            }
            button:hover, .btn:hover, .cta-button:hover {
                transform: translateY(-2px) !important;
                box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
            }
            .animate-pulse {
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
        
        console.log('✅ Basic enhancements loaded');
    }
})();