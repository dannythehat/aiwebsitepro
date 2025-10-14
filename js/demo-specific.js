// AI Website Pro - Demo Specific Module
// Demo page enhancements and interactions

AIWebsitePro.demo = {
    // Simulate website generation process
    simulateGeneration: function() {
        const steps = [
            'Analyzing requirements...',
            'Selecting optimal design...',
            'Generating content structure...',
            'Applying AI enhancements...',
            'Optimizing for performance...',
            'Finalizing your website...'
        ];
        
        const progressBar = document.querySelector('.progress-bar');
        const statusText = document.querySelector('.status-text');
        let currentStep = 0;
        
        const interval = setInterval(() => {
            if (currentStep < steps.length) {
                if (statusText) statusText.textContent = steps[currentStep];
                if (progressBar) {
                    progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
                }
                currentStep++;
            } else {
                clearInterval(interval);
                if (statusText) statusText.textContent = 'Website generated successfully!';
            }
        }, 800);
    },
    
    // Add demo interactions
    addDemoInteractions: function() {
        // CTA button enhancement
        const ctaButtons = document.querySelectorAll('.cta-button, .demo-cta');
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showDemoModal();
            });
        });
        
        // Add demo testimonials rotation
        this.rotateTestimonials();
        
        // Add live stats counter
        this.animateStats();
    },
    
    // Show demo modal
    showDemoModal: function() {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center;">
                <div style="background: white; padding: 40px; border-radius: 15px; max-width: 500px; text-align: center;">
                    <h3 style="margin-bottom: 20px; color: #333;">🚀 Ready to Build Your Website?</h3>
                    <p style="margin-bottom: 30px; color: #666;">Get your professional website in just 2-5 minutes!</p>
                    <div style="margin-bottom: 20px;">
                        <strong style="font-size: 24px; color: #3B82F6;">Professional Pricing</strong>
                        <span style="color: #666;"> - Contact for details</span>
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" style="background: #3B82F6; color: white; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer; margin-right: 10px;">Get Started Now</button>
                    <button onclick="this.parentElement.parentElement.remove()" style="background: #f0f0f0; color: #333; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer;">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },
    
    // Rotate testimonials
    rotateTestimonials: function() {
        const testimonials = document.querySelectorAll('.testimonial');
        if (testimonials.length === 0) return;
        
        let current = 0;
        setInterval(() => {
            testimonials[current].style.opacity = '0';
            current = (current + 1) % testimonials.length;
            setTimeout(() => {
                testimonials.forEach(t => t.style.display = 'none');
                testimonials[current].style.display = 'block';
                testimonials[current].style.opacity = '1';
            }, 300);
        }, 5000);
    },
    
    // Animate statistics
    animateStats: function() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 50);
        });
    }
};

// Initialize demo features
AIWebsitePro.initDemo = function() {
    this.demo.addDemoInteractions();
    
    // Auto-start generation simulation if elements exist
    if (document.querySelector('.progress-bar')) {
        setTimeout(() => this.demo.simulateGeneration(), 1000);
    }
};

AIWebsitePro.loadModule('demo-specific');