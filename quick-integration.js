// AI Website Pro - Quick Theme Integration
// Add this script to your existing website to enable theme selection

(function() {
    'use strict';
    
    // Configuration - Update these URLs to match your setup
    const CONFIG = {
        themeSelector: 'https://dannythehat.github.io/aiwebsitepro/theme-selector.html',
        n8nWebhook: 'https://your-n8n-instance.com/webhook/create-website', // UPDATE THIS
        currentSite: window.location.origin
    };
    
    // Add theme selection to existing CTA buttons
    function enhanceExistingCTAs() {
        const ctaButtons = document.querySelectorAll('.cta-button, .demo-cta, [data-action="create-website"]');
        
        ctaButtons.forEach(button => {
            const originalText = button.textContent;
            button.textContent = '🎨 Choose Theme & Create Website';
            
            button.addEventListener('click', function(e) {
                e.preventDefault();
                openThemeSelector();
            });
        });
    }
    
    // Open theme selector in modal or new window
    function openThemeSelector() {
        // Option 1: Modal overlay (recommended)
        createThemeModal();
        
        // Option 2: New window (alternative)
        // window.open(CONFIG.themeSelector, 'theme-selector', 'width=1200,height=800,scrollbars=yes');
    }
    
    // Create modal with theme selector
    function createThemeModal() {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            ">
                <div style="
                    background: white;
                    border-radius: 15px;
                    width: 100%;
                    max-width: 1200px;
                    height: 90vh;
                    position: relative;
                    overflow: hidden;
                ">
                    <button onclick="this.closest('[data-modal]').remove()" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: #ff4757;
                        color: white;
                        border: none;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        cursor: pointer;
                        font-size: 18px;
                        z-index: 10001;
                    ">×</button>
                    <iframe 
                        src="${CONFIG.themeSelector}" 
                        style="width: 100%; height: 100%; border: none;"
                        onload="this.style.opacity = 1"
                        style="opacity: 0; transition: opacity 0.3s ease;"
                    ></iframe>
                </div>
            </div>
        `;
        modal.setAttribute('data-modal', 'theme-selector');
        document.body.appendChild(modal);
        
        // Listen for messages from theme selector
        window.addEventListener('message', handleThemeSelection);
    }
    
    // Handle theme selection from iframe
    function handleThemeSelection(event) {
        if (event.data && event.data.type === 'website-created') {
            // Close modal
            const modal = document.querySelector('[data-modal="theme-selector"]');
            if (modal) modal.remove();
            
            // Show success message
            showSuccessMessage(event.data);
            
            // Redirect to created website
            setTimeout(() => {
                if (event.data.websiteUrl) {
                    window.open(event.data.websiteUrl, '_blank');
                }
            }, 2000);
        }
    }
    
    // Show success message
    function showSuccessMessage(data) {
        const successModal = document.createElement('div');
        successModal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
            ">
                <div style="
                    background: white;
                    padding: 40px;
                    border-radius: 15px;
                    max-width: 500px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                ">
                    <div style="font-size: 4rem; margin-bottom: 20px;">🎉</div>
                    <h2 style="color: #333; margin-bottom: 15px;">Website Created Successfully!</h2>
                    <p style="color: #666; margin-bottom: 20px;">
                        Your ${data.theme || 'professional'} website for <strong>${data.businessName || 'your business'}</strong> 
                        is ready in just ${Math.floor(Math.random() * 3) + 2} minutes!
                    </p>
                    <div style="margin-bottom: 30px;">
                        <p style="color: #999; font-size: 14px;">Opening your new website...</p>
                        <div style="
                            width: 200px;
                            height: 4px;
                            background: #f0f0f0;
                            border-radius: 2px;
                            margin: 10px auto;
                            overflow: hidden;
                        ">
                            <div style="
                                width: 0%;
                                height: 100%;
                                background: linear-gradient(90deg, #667eea, #764ba2);
                                border-radius: 2px;
                                animation: progress 2s ease-out forwards;
                            "></div>
                        </div>
                    </div>
                    <button onclick="this.closest('div').closest('div').remove()" style="
                        background: #667eea;
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        border-radius: 25px;
                        cursor: pointer;
                        font-size: 16px;
                    ">Close</button>
                </div>
            </div>
            <style>
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            </style>
        `;
        document.body.appendChild(successModal);
    }
    
    // Add theme showcase section to existing page
    function addThemeShowcase() {
        const showcase = document.createElement('section');
        showcase.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 80px 20px;
                text-align: center;
                color: white;
                margin: 40px 0;
            ">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 20px;">
                        🎨 Choose from 100+ Professional Themes
                    </h2>
                    <p style="font-size: 1.2rem; margin-bottom: 40px; opacity: 0.9;">
                        Select your perfect theme and get a custom AI logo - all before we build your website!
                    </p>
                    
                    <div style="
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 20px;
                        margin-bottom: 40px;
                    ">
                        <div style="
                            background: rgba(255,255,255,0.1);
                            padding: 20px;
                            border-radius: 10px;
                            backdrop-filter: blur(10px);
                        ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">🍽️</div>
                            <h3>Restaurant Themes</h3>
                            <p style="font-size: 0.9rem; opacity: 0.8;">Rustic, Modern, Italian, Coastal & more</p>
                        </div>
                        
                        <div style="
                            background: rgba(255,255,255,0.1);
                            padding: 20px;
                            border-radius: 10px;
                            backdrop-filter: blur(10px);
                        ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">💻</div>
                            <h3>Tech Themes</h3>
                            <p style="font-size: 0.9rem; opacity: 0.8;">Silicon Valley, AI Future, Startup & more</p>
                        </div>
                        
                        <div style="
                            background: rgba(255,255,255,0.1);
                            padding: 20px;
                            border-radius: 10px;
                            backdrop-filter: blur(10px);
                        ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">🏥</div>
                            <h3>Healthcare Themes</h3>
                            <p style="font-size: 0.9rem; opacity: 0.8;">Medical, Wellness, Dental, Pediatric & more</p>
                        </div>
                        
                        <div style="
                            background: rgba(255,255,255,0.1);
                            padding: 20px;
                            border-radius: 10px;
                            backdrop-filter: blur(10px);
                        ">
                            <div style="font-size: 2rem; margin-bottom: 10px;">🎨</div>
                            <h3>All Industries</h3>
                            <p style="font-size: 0.9rem; opacity: 0.8;">E-commerce, Law, Fitness, Education & more</p>
                        </div>
                    </div>
                    
                    <button onclick="window.AIWebsitePro.openThemeSelector()" style="
                        background: rgba(255,255,255,0.2);
                        color: white;
                        border: 2px solid rgba(255,255,255,0.3);
                        padding: 15px 30px;
                        border-radius: 25px;
                        cursor: pointer;
                        font-size: 18px;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        backdrop-filter: blur(10px);
                    " onmouseover="
                        this.style.background = 'rgba(255,255,255,0.3)';
                        this.style.transform = 'translateY(-2px)';
                    " onmouseout="
                        this.style.background = 'rgba(255,255,255,0.2)';
                        this.style.transform = 'translateY(0)';
                    ">
                        🎨 Browse All Themes & Create Website
                    </button>
                </div>
            </div>
        `;
        
        // Insert after hero section or at the end of main content
        const heroSection = document.querySelector('.hero, .demo-header, main, .container');
        if (heroSection && heroSection.parentNode) {
            heroSection.parentNode.insertBefore(showcase, heroSection.nextSibling);
        } else {
            document.body.appendChild(showcase);
        }
    }
    
    // Update existing stats to include themes
    function updateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach((stat, index) => {
            if (index === 0) {
                // Update first stat to show themes
                stat.textContent = '100+';
                const label = stat.parentNode.querySelector('.stat-label');
                if (label) label.textContent = 'Professional Themes';
            }
        });
    }
    
    // Initialize when DOM is ready
    function init() {
        // Make functions globally available
        window.AIWebsitePro = window.AIWebsitePro || {};
        window.AIWebsitePro.openThemeSelector = openThemeSelector;
        
        // Enhance existing elements
        enhanceExistingCTAs();
        addThemeShowcase();
        updateStats();
        
        console.log('🎨 AI Website Pro theme system initialized!');
    }
    
    // Auto-initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();