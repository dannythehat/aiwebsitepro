// AI Website Pro - Logos Module
// Company logos and branding data

AIWebsitePro.logos = {
    tech: [
        { name: 'Apple', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg' },
        { name: 'Google', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg' },
        { name: 'Microsoft', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg' },
        { name: 'Amazon', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg' },
        { name: 'Meta', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg' },
        { name: 'Netflix', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg' },
        { name: 'Tesla', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tesla.svg' },
        { name: 'Spotify', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg' },
        { name: 'Adobe', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg' },
        { name: 'Salesforce', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/salesforce.svg' }
    ],
    
    finance: [
        { name: 'PayPal', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg' },
        { name: 'Stripe', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg' },
        { name: 'Visa', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg' },
        { name: 'Mastercard', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg' },
        { name: 'American Express', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/americanexpress.svg' }
    ],
    
    social: [
        { name: 'Facebook', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg' },
        { name: 'Twitter', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg' },
        { name: 'Instagram', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg' },
        { name: 'LinkedIn', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg' },
        { name: 'YouTube', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg' },
        { name: 'TikTok', url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg' }
    ]
};

// Get random logos
AIWebsitePro.getRandomLogos = function(category = 'tech', count = 5) {
    const logos = this.logos[category] || this.logos.tech;
    const shuffled = [...logos].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

AIWebsitePro.loadModule('logos');