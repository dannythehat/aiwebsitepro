// EMERGENCY PRICING FIX - Inject this into demo-ultimate.html
// This immediately updates all pricing on the live site

(function() {
    console.log('🚀 EMERGENCY PRICING UPDATE STARTING...');
    
    // Update all €460 references to €160
    document.body.innerHTML = document.body.innerHTML.replace(/€460/g, '€160');
    
    // Update title and meta
    document.title = 'AI Website Builder Pro - Professional Websites in Hours | €160';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = 'Get a professional website built by AI within hours. Starting at €160 with pinpointed customization.';
    }
    
    // Update timing references
    document.body.innerHTML = document.body.innerHTML.replace(/5 minutes/g, 'within hours');
    document.body.innerHTML = document.body.innerHTML.replace(/24-48 hours/g, 'within hours with pinpointed customization');
    
    // Update ROI calculator
    const roiItems = document.querySelectorAll('.roi-item');
    roiItems.forEach(item => {
        if (item.innerHTML.includes('€460')) {
            item.innerHTML = item.innerHTML.replace('€460', '€160');
        }
    });
    
    // Add new pricing structure notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 15px;
        text-align: center;
        z-index: 10000;
        font-weight: bold;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    `;
    notification.innerHTML = `
        🎉 NEW COMPETITIVE PRICING! Starter: €160 (5 pages) | Business: €290 (10 pages) | Enterprise: €550 (20 pages)
        <button onclick="this.parentElement.remove()" style="float: right; background: none; border: none; color: white; cursor: pointer; font-size: 18px;">×</button>
    `;
    document.body.insertBefore(notification, document.body.firstChild);
    
    console.log('✅ EMERGENCY PRICING UPDATE COMPLETE!');
    console.log('📊 New pricing: €160 (65% more competitive!)');
    
})();