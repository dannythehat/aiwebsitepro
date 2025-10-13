// ENHANCED DEMO INTERFACE WITH LOGO AND THEME SELECTION
// This script adds multiple logo and theme options to the existing demo

// Function to add logo and theme selection to the demo interface
function enhanceDemo() {
    // Add logo selection section after industry selection
    const industryGroup = document.querySelector('#industry').parentElement;
    
    // Create logo selection section
    const logoSection = document.createElement('div');
    logoSection.className = 'form-group';
    logoSection.innerHTML = `
        <label for="logoStyle">Logo Style</label>
        <select id="logoStyle">
            <option value="0">Style 1 - Modern & Clean</option>
            <option value="1">Style 2 - Classic & Professional</option>
            <option value="2">Style 3 - Creative & Bold</option>
            <option value="3">Style 4 - Elegant & Sophisticated</option>
            <option value="4">Style 5 - Minimalist & Simple</option>
        </select>
    `;
    
    // Create theme selection section
    const themeSection = document.createElement('div');
    themeSection.className = 'form-group';
    themeSection.innerHTML = `
        <label for="businessTheme">Business Theme</label>
        <select id="businessTheme">
            <option value="">Select a theme (will auto-populate based on industry)</option>
        </select>
    `;
    
    // Insert after industry selection
    industryGroup.parentNode.insertBefore(logoSection, industryGroup.nextSibling);
    industryGroup.parentNode.insertBefore(themeSection, logoSection.nextSibling);
    
    // Add event listener for industry change to populate themes
    document.getElementById('industry').addEventListener('change', function() {
        populateThemes(this.value);
    });
}

// Function to populate theme options based on selected industry
function populateThemes(industry) {
    const themeSelect = document.getElementById('businessTheme');
    themeSelect.innerHTML = '<option value="">Select a theme</option>';
    
    if (industry && enhancedIndustryTemplates[industry] && enhancedIndustryTemplates[industry].themes) {
        const themes = enhancedIndustryTemplates[industry].themes;
        Object.keys(themes).forEach(themeKey => {
            const theme = themes[themeKey];
            const option = document.createElement('option');
            option.value = themeKey;
            option.textContent = getThemeDisplayName(themeKey, industry);
            themeSelect.appendChild(option);
        });
    }
}

// Function to get display name for themes
function getThemeDisplayName(themeKey, industry) {
    const themeNames = {
        restaurant: {
            elegant: "Elegant Fine Dining",
            rustic: "Rustic Family Style",
            modern: "Modern Sushi Bar",
            upscale: "Upscale Steakhouse",
            casual: "Casual Cafe & Bistro"
        },
        healthcare: {
            modern: "Modern Medical Center",
            dental: "Dental Practice",
            pediatric: "Pediatric Clinic",
            therapy: "Physical Therapy",
            wellness: "Mental Health & Wellness"
        },
        fitness: {
            powerhouse: "Powerhouse Gym",
            zen: "Zen Yoga Studio",
            crossfit: "CrossFit Box",
            personal: "Personal Training",
            wellness: "Wellness Center"
        },
        technology: {
            startup: "Tech Startup",
            development: "Software Development",
            cloud: "Cloud Computing",
            mobile: "Mobile App Development",
            security: "Cybersecurity"
        },
        beauty: {
            luxury: "Luxury Beauty Salon",
            trendy: "Trendy Nail Studio",
            zen: "Zen Spa Retreat",
            modern: "Modern Hair Salon",
            clinical: "Clinical Skincare"
        },
        legal: {
            corporate: "Corporate Law Firm",
            family: "Family Law Practice",
            criminal: "Criminal Defense",
            injury: "Personal Injury",
            business: "Business Legal Services"
        },
        consulting: {
            strategy: "Strategy Consulting",
            management: "Management Consulting",
            technology: "Technology Consulting",
            financial: "Financial Advisory",
            startup: "Startup Consulting"
        },
        realestate: {
            residential: "Residential Real Estate",
            luxury: "Luxury Properties",
            commercial: "Commercial Real Estate",
            investment: "Real Estate Investment",
            property: "Property Management"
        },
        education: {
            academy: "Learning Academy",
            online: "Online Education",
            professional: "Professional Training",
            language: "Language School",
            tutoring: "Tutoring Center"
        },
        automotive: {
            repair: "Auto Repair Shop",
            dealership: "Car Dealership",
            luxury: "Luxury Auto Services",
            parts: "Auto Parts Store",
            detailing: "Auto Detailing"
        },
        finance: {
            investment: "Investment Management",
            insurance: "Insurance Services",
            planning: "Financial Planning",
            banking: "Banking Services",
            credit: "Credit Solutions"
        }
    };
    
    return themeNames[industry] && themeNames[industry][themeKey] 
        ? themeNames[industry][themeKey] 
        : themeKey.charAt(0).toUpperCase() + themeKey.slice(1);
}

// Enhanced website generation function
function generateEnhancedWebsite(businessName, industry, description, style, features) {
    const logoIndex = parseInt(document.getElementById('logoStyle').value) || 0;
    const selectedTheme = document.getElementById('businessTheme').value;
    
    // Get the enhanced template
    const industryTemplate = enhancedIndustryTemplates[industry];
    if (!industryTemplate) {
        return generateCustomTemplate(industry, description);
    }
    
    // Select logo
    const selectedLogo = industryTemplate.logos[logoIndex] || industryTemplate.logos[0];
    
    // Select theme
    const themeData = selectedTheme && industryTemplate.themes[selectedTheme] 
        ? industryTemplate.themes[selectedTheme]
        : Object.values(industryTemplate.themes)[0];
    
    // Create enhanced template with selected options
    return {
        title: themeData.title.replace(/^[^\\s]+/, businessName),
        subtitle: themeData.subtitle,
        heroImage: themeData.heroImage,
        logoImage: selectedLogo,
        colorScheme: themeData.colorScheme,
        features: themeData.features,
        functionalPages: themeData.functionalPages || {
            services: {
                title: "Our Services",
                offerings: [
                    { name: "Premium Service", desc: "High-quality service tailored to your needs" },
                    { name: "Expert Consultation", desc: "Professional advice from industry experts" },
                    { name: "24/7 Support", desc: "Round-the-clock customer support" }
                ]
            }
        }
    };
}

// Enhanced website content generation with color schemes
function generateEnhancedWebsiteContent(data) {
    const { businessName, industry, template } = data;
    const colorScheme = template.colorScheme || { primary: "#9333ea", secondary: "#a855f7", accent: "#ffffff" };
    
    let websiteHTML = `
        <style>
            .website-preview {
                --primary-color: ${colorScheme.primary};
                --secondary-color: ${colorScheme.secondary};
                --accent-color: ${colorScheme.accent};
            }
            .website-nav {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: var(--accent-color);
            }
            .hero-section {
                background: linear-gradient(135deg, var(--primary-color)22, var(--secondary-color)22);
                color: var(--accent-color);
            }
            .feature-card {
                border: 2px solid var(--primary-color);
                background: linear-gradient(135deg, var(--primary-color)11, var(--secondary-color)11);
            }
            .cta-button {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: var(--accent-color);
            }
        </style>
        
        <div class="website-nav">
            <div class="website-logo">
                <img src="${template.logoImage}" alt="${businessName}" class="logo-image" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
                ${businessName}
            </div>
            <div class="website-menu">
                <a href="#" class="nav-link active" data-page="home">Home</a>
                ${getIndustrySpecificNavigation(industry)}
                <a href="#" class="nav-link" data-page="about">About</a>
                <a href="#" class="nav-link" data-page="contact">Contact</a>
                ${industry === 'retail' ? '<div class="cart-icon" onclick="alert(\\'🛒 Shopping cart with 3 items! Full e-commerce functionality integrated.\\')">🛒<span class="cart-count">3</span></div>' : ''}
            </div>
        </div>

        <!-- Home Page -->
        <div class="page-content active" id="page-home">
            <div class="hero-section">
                <h1 class="hero-title">${template.title}</h1>
                <p class="hero-subtitle">${template.subtitle}</p>
                <img src="${template.heroImage}" alt="${businessName}" class="hero-image" style="max-width: 100%; height: 300px; object-fit: cover; border-radius: 15px; margin: 20px 0;">
                
                <div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 40px 0;">
                    ${template.features.map(feature => `
                        <div class="feature-card" style="padding: 20px; border-radius: 15px; text-align: center;">
                            <div style="font-size: 2rem; margin-bottom: 10px;">${feature.icon}</div>
                            <h3 style="margin-bottom: 10px; color: var(--primary-color);">${feature.title}</h3>
                            <p style="color: #666;">${feature.desc}</p>
                        </div>
                    `).join('')}
                </div>
                
                <button class="cta-button" style="padding: 15px 30px; border: none; border-radius: 25px; font-size: 1.1rem; font-weight: bold; cursor: pointer; margin-top: 20px;">
                    Get Started Today
                </button>
            </div>
        </div>
        
        ${generateIndustrySpecificPages(industry, template)}
    `;
    
    return websiteHTML;
}

// Override the original function to use enhanced version
const originalShowGeneratedWebsite = showGeneratedWebsite;
function showGeneratedWebsite(businessName, industry, description, style, features) {
    // Hide AI thinking
    document.getElementById('aiThinking').style.display = 'none';
    
    // Get enhanced template
    const template = generateEnhancedWebsite(businessName, industry, description, style, features);
    
    // Store current website data
    currentWebsiteData = {
        businessName,
        industry,
        description,
        style,
        features,
        template
    };
    
    // Generate the complete website with enhanced features
    const websiteHTML = generateEnhancedWebsiteContent(currentWebsiteData);
    document.getElementById('websiteContent').innerHTML = websiteHTML;
    
    // Show website preview
    document.getElementById('websitePreview').style.display = 'block';
    
    // Reset button
    document.getElementById('generateBtn').disabled = false;
    document.getElementById('generateBtn').textContent = '🔄 Generate Another Website';
    
    // Add page navigation functionality
    addPageNavigation();
}

// Initialize enhanced demo when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for the original demo to load
    setTimeout(() => {
        if (typeof enhancedIndustryTemplates !== 'undefined') {
            enhanceDemo();
        }
    }, 1000);
});