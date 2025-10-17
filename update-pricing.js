// Quick pricing update script
// Run this in browser console on your website to update pricing

// Update title
document.title = "AI Website Builder Pro - Professional Websites in Hours | €160";

// Update meta description
document.querySelector('meta[name="description"]').content = "Get a professional website built by AI within hours. Perfect for restaurants, healthcare, retail, and more. Starting at €160 with pinpointed customization.";

// Update nav CTA
document.querySelector('.nav-cta').textContent = "Get Started €160";
document.querySelector('.nav-cta').href = "#pricing";

// Update hero timing
document.querySelector('.hero-feature span:contains("Ready in 5 minutes")').textContent = "Ready within hours";

// Update pricing cards
const pricingCards = document.querySelectorAll('.pricing-card');

// Starter Package (was Website Only)
pricingCards[0].querySelector('.pricing-title').textContent = "Starter";
pricingCards[0].querySelector('.pricing-price').textContent = "€160";
pricingCards[0].querySelector('.pricing-features').innerHTML = `
    <li>Up to 5 professional pages</li>
    <li>AI-powered design & content</li>
    <li>Mobile-responsive layout</li>
    <li>SEO optimization</li>
    <li>Contact forms & functionality</li>
    <li>Social media integration</li>
    <li>SSL certificate included</li>
    <li>30-day support</li>
`;

// Business Package (was Complete Package)
pricingCards[1].querySelector('.pricing-title').textContent = "Business";
pricingCards[1].querySelector('.pricing-price').textContent = "€290";
pricingCards[1].querySelector('.pricing-features').innerHTML = `
    <li>Up to 10 professional pages</li>
    <li>Everything in Starter</li>
    <li>Custom domain (.com/.eu)</li>
    <li>1 year premium hosting</li>
    <li>Professional email setup</li>
    <li>Advanced analytics</li>
    <li>Online booking system</li>
    <li>Priority support (1 year)</li>
`;

// Enterprise Package
pricingCards[2].querySelector('.pricing-title').textContent = "Enterprise";
pricingCards[2].querySelector('.pricing-price').textContent = "€550";
pricingCards[2].querySelector('.pricing-features').innerHTML = `
    <li>Up to 20 professional pages</li>
    <li>Everything in Business</li>
    <li>E-commerce functionality</li>
    <li>Payment processing setup</li>
    <li>Multi-language support</li>
    <li>Custom integrations</li>
    <li>Dedicated account manager</li>
    <li>Lifetime updates & support</li>
`;

// Update FAQ timing
document.querySelector('.faq-answer').innerHTML = "Your website will be ready within a few hours after you provide your business information. Our AI creates the initial design in minutes, then we add pinpointed customization to ensure it perfectly matches your business needs.";

// Update contact section
document.querySelector('#contact .section-subtitle').textContent = "Join thousands of successful businesses. Get your professional website with pinpointed customization ready within hours.";

// Update email CTA
const emailCTA = document.querySelector('a[href*="mailto"]');
emailCTA.href = "mailto:hello@aiwebsitepro.com?subject=Website Order - Starter €160&body=Hi! I'd like to order the Starter package (€160). Please send me the next steps.";
emailCTA.querySelector('span:last-child').textContent = "Order Now - €160";

console.log("✅ Pricing updated successfully!");
console.log("New pricing: €160 (5 pages) | €290 (10 pages) | €550 (20 pages)");
console.log("Timing updated to: 'within hours' with pinpointed customization");