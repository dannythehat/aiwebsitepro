// AI Website Pro - Module Loader
// Loads all modules in the correct order

(function() {
    'use strict';
    
    const modules = [
        'js/core.js',
        'js/logos.js', 
        'js/themes.js',
        'js/animations.js',
        'js/ui-enhancements.js',
        'js/demo-specific.js'
    ];
    
    let loadedCount = 0;
    
    function loadScript(src, callback) {
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // Maintain order
        
        script.onload = function() {
            loadedCount++;
            console.log(`Loaded: ${src} (${loadedCount}/${modules.length})`);
            if (callback) callback();
        };
        
        script.onerror = function() {
            console.error(`Failed to load: ${src}`);
            if (callback) callback();
        };
        
        document.head.appendChild(script);
    }
    
    function loadAllModules() {
        modules.forEach((module, index) => {
            setTimeout(() => {
                loadScript(module, () => {
                    if (loadedCount === modules.length) {
                        initializeAll();
                    }
                });
            }, index * 100); // Stagger loading
        });
    }
    
    function initializeAll() {
        console.log('🚀 All AI Website Pro modules loaded!');
        
        // Initialize all modules
        if (window.AIWebsitePro) {
            setTimeout(() => {
                if (AIWebsitePro.initAnimations) AIWebsitePro.initAnimations();
                if (AIWebsitePro.initUI) AIWebsitePro.initUI();
                if (AIWebsitePro.initDemo) AIWebsitePro.initDemo();
                
                // Apply random theme
                const randomTheme = AIWebsitePro.getRandomTheme();
                AIWebsitePro.applyTheme(randomTheme.name);
                
                console.log(`✨ Applied theme: ${randomTheme.name}`);
            }, 500);
        }
    }
    
    // Start loading when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAllModules);
    } else {
        loadAllModules();
    }
})();