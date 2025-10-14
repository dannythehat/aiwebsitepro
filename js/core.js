// AI Website Pro - Core Module
// Essential functions and initialization

window.AIWebsitePro = window.AIWebsitePro || {};

// Core configuration
AIWebsitePro.config = {
    version: '1.0.0',
    debug: false,
    modules: []
};

// Module loader
AIWebsitePro.loadModule = function(name, callback) {
    if (this.config.modules.includes(name)) {
        if (callback) callback();
        return;
    }
    
    this.config.modules.push(name);
    if (this.config.debug) console.log('Loaded module:', name);
    if (callback) callback();
};

// Initialize core
AIWebsitePro.init = function() {
    console.log('AI Website Pro Core initialized');
    this.loadModule('core');
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AIWebsitePro.init());
} else {
    AIWebsitePro.init();
}