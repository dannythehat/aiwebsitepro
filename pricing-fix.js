// PRICING FIX SCRIPT
// Updates all pricing from €460/€560/€760 to €160/€290/€450

const pricingUpdates = {
    // Main pricing structure
    starter: {
        oldPrice: '€460',
        newPrice: '€160',
        pages: '5 AI-Generated Pages',
        title: 'AI Starter',
        features: [
            '5 AI-Generated Pages',
            'Neural Responsive Design', 
            'AI SEO Optimization',
            'Contact Forms',
            '60-Minute Delivery',
            'Website Files Included'
        ]
    },
    professional: {
        oldPrice: '€560',
        newPrice: '€290', 
        pages: '10 AI-Crafted Pages',
        title: 'AI Professional',
        features: [
            '10 AI-Crafted Pages',
            'Advanced Neural Design',
            'Premium AI SEO Engine', 
            'Social Media Integration',
            '45-Minute Delivery',
            'Priority AI Processing'
        ]
    },
    enterprise: {
        oldPrice: '€760',
        newPrice: '€450',
        pages: '20 AI-Optimized Pages', 
        title: 'AI Enterprise',
        features: [
            '20 AI-Optimized Pages',
            'Custom Neural Architecture',
            'E-commerce Integration',
            'Advanced Features',
            '30-Minute Delivery',
            'White-Glove Service'
        ]
    }
};

// Files that need pricing updates
const filesToUpdate = [
    'index.html',
    'demo-ultimate.html',
    'demo-v2.html',
    'consultation.html'
];

// Meta tags and titles to update
const metaUpdates = {
    title: 'AI Website Builder Pro - Professional Websites in Minutes | €160',
    description: 'Get a professional website built by AI in minutes. Perfect for restaurants, healthcare, retail, and more. Starting at €160 with hosting included.'
};

console.log('Pricing Fix Script Ready');
console.log('New Pricing Structure:', pricingUpdates);