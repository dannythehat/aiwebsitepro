/**
 * 🎨 ALL BREATHTAKING THEMES COLLECTION
 * Master loader for all premium, jaw-dropping themes
 * 
 * This file loads all the breathtaking themes that will destroy the competition
 * and make customers' jaws drop with their incredible detail and sophistication.
 */

// Import all breathtaking themes
const allBreathtakingThemes = [
  // RESTAURANT THEMES
  {
    id: 'luxury-steakhouse',
    name: 'The Gentleman\'s Choice',
    industry: 'restaurant',
    description: 'Ultra-premium steakhouse with dark luxury, leather textures, and masculine sophistication',
    premium: true,
    file: 'luxury-steakhouse-theme.js'
  },
  
  // TECH THEMES  
  {
    id: 'cyberpunk-tech',
    name: 'Neural Network',
    industry: 'tech',
    description: 'Futuristic cyberpunk design with neon glows, dark backgrounds, and cutting-edge tech aesthetics',
    premium: true,
    file: 'cyberpunk-tech-theme.js'
  },
  
  // HEALTHCARE THEMES
  {
    id: 'luxury-medical-spa',
    name: 'Zen Sanctuary',
    industry: 'healthcare',
    description: 'Ultra-modern medical spa with clean whites, healing blues, zen minimalism, and luxury wellness aesthetics',
    premium: true,
    file: 'luxury-medical-spa-theme.js'
  },
  
  // LAW THEMES
  {
    id: 'luxury-law-firm',
    name: 'Constitutional Elite',
    industry: 'law',
    description: 'Ultra-premium law firm with deep navy, gold accents, classical elegance, and authoritative sophistication',
    premium: true,
    file: 'luxury-law-firm-theme.js'
  },
  
  // EVENT THEMES
  {
    id: 'luxury-wedding-venue',
    name: 'Eternal Romance',
    industry: 'events',
    description: 'Ultra-romantic wedding venue with dreamy pastels, rose gold accents, and fairytale elegance',
    premium: true,
    file: 'luxury-wedding-venue-theme.js'
  },
  
  // FITNESS THEMES
  {
    id: 'premium-fitness',
    name: 'Power Elite',
    industry: 'fitness',
    description: 'High-energy fitness studio with bold oranges, dynamic animations, and motivational design',
    premium: true,
    file: 'premium-fitness-theme.js'
  },
  
  // ART THEMES
  {
    id: 'exclusive-art-gallery',
    name: 'Avant-Garde Sanctuary',
    industry: 'art',
    description: 'Ultra-sophisticated art gallery with pure whites, dramatic blacks, and artistic flair',
    premium: true,
    file: 'exclusive-art-gallery-theme.js'
  },
  
  // E-COMMERCE THEMES
  {
    id: 'luxury-ecommerce',
    name: 'Platinum Boutique',
    industry: 'ecommerce',
    description: 'Ultra-premium e-commerce with sophisticated blacks, platinum accents, and luxury shopping experience',
    premium: true,
    file: 'luxury-ecommerce-theme.js'
  },
  
  // EDUCATION THEMES
  {
    id: 'elite-education',
    name: 'Ivy League Academy',
    industry: 'education',
    description: 'Prestigious educational institution with deep blues, gold accents, and academic excellence',
    premium: true,
    file: 'elite-education-theme.js'
  },
  
  // REAL ESTATE THEMES
  {
    id: 'platinum-real-estate',
    name: 'Estate Prestige',
    industry: 'realestate',
    description: 'Ultra-luxury real estate with sophisticated grays, gold accents, and premium property showcase',
    premium: true,
    file: 'platinum-real-estate-theme.js'
  }
];

/**
 * Load all breathtaking themes
 */
async function loadAllBreathtakingThemes() {
  console.log('🎨 Loading all breathtaking themes...');
  
  if (typeof window === 'undefined' || !window.themeManager) {
    console.error('❌ Theme Manager not available');
    return false;
  }
  
  let loadedCount = 0;
  
  for (const themeInfo of allBreathtakingThemes) {
    try {
      // Load theme file dynamically
      const script = document.createElement('script');
      script.src = `themes/${themeInfo.file}`;
      script.onload = () => {
        loadedCount++;
        console.log(`✅ Loaded: ${themeInfo.name}`);
        
        if (loadedCount === allBreathtakingThemes.length) {
          console.log('🎉 All breathtaking themes loaded successfully!');
          triggerThemesLoadedEvent();
        }
      };
      script.onerror = () => {
        console.error(`❌ Failed to load: ${themeInfo.name}`);
      };
      
      document.head.appendChild(script);
      
    } catch (error) {
      console.error(`❌ Error loading ${themeInfo.name}:`, error);
    }
  }
  
  return true;
}

/**
 * Get all premium themes
 */
function getAllPremiumThemes() {
  if (typeof window === 'undefined' || !window.themeManager) {
    return [];
  }
  
  return window.themeManager.getAllThemes().filter(theme => 
    allBreathtakingThemes.some(info => 
      info.id === theme.id && info.premium
    )
  );
}

/**
 * Get themes by industry with premium flag
 */
function getBreathtakingThemesByIndustry(industry) {
  if (typeof window === 'undefined' || !window.themeManager) {
    return [];
  }
  
  return window.themeManager.getThemesByIndustry(industry).filter(theme =>
    allBreathtakingThemes.some(info => 
      info.id === theme.id && info.premium
    )
  );
}

/**
 * Check if theme is premium/breathtaking
 */
function isBreathtakingTheme(themeId) {
  return allBreathtakingThemes.some(info => info.id === themeId && info.premium);
}

/**
 * Get theme showcase data
 */
function getThemeShowcaseData() {
  const industries = {};
  
  allBreathtakingThemes.forEach(themeInfo => {
    if (!industries[themeInfo.industry]) {
      industries[themeInfo.industry] = [];
    }
    industries[themeInfo.industry].push(themeInfo);
  });
  
  return {
    totalThemes: allBreathtakingThemes.length,
    industries: Object.keys(industries).length,
    premiumThemes: allBreathtakingThemes.filter(t => t.premium).length,
    byIndustry: industries
  };
}

/**
 * Trigger themes loaded event
 */
function triggerThemesLoadedEvent() {
  const event = new CustomEvent('breathtakingThemesLoaded', {
    detail: {
      themes: allBreathtakingThemes,
      count: allBreathtakingThemes.length,
      showcase: getThemeShowcaseData()
    }
  });
  document.dispatchEvent(event);
}

/**
 * Create premium theme selector
 */
function createPremiumThemeSelector(containerId, industry = null) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`❌ Container ${containerId} not found`);
    return;
  }
  
  const themes = industry ? 
    getBreathtakingThemesByIndustry(industry) : 
    getAllPremiumThemes();
  
  const selectorHTML = `
    <div class="premium-theme-selector">
      <div class="selector-header">
        <h2>🎨 Choose Your Breathtaking Theme</h2>
        <p>Premium themes that rival $15,000+ custom websites</p>
      </div>
      
      <div class="premium-theme-grid">
        ${themes.map(theme => `
          <div class="premium-theme-card" data-theme-id="${theme.id}">
            <div class="premium-badge">👑 PREMIUM</div>
            <div class="theme-preview-area">
              ${window.themeManager.generatePreviewHTML(theme)}
            </div>
            <div class="theme-details">
              <h3>${theme.name}</h3>
              <p>${theme.description}</p>
              <div class="theme-features">
                ${(theme.features || []).map(feature => 
                  `<span class="feature-tag premium">${feature}</span>`
                ).join('')}
              </div>
              <button class="select-premium-theme" onclick="selectPremiumTheme('${theme.id}')">
                Select This Masterpiece
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  container.innerHTML = selectorHTML;
  addPremiumSelectorStyles();
}

/**
 * Add premium selector styles
 */
function addPremiumSelectorStyles() {
  const existingStyles = document.querySelector('#premium-theme-styles');
  if (existingStyles) return;
  
  const styles = document.createElement('style');
  styles.id = 'premium-theme-styles';
  styles.textContent = `
    .premium-theme-selector {
      padding: 3rem;
      background: linear-gradient(135deg, #f8f9fa, #ffffff);
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    }
    
    .selector-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .selector-header h2 {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    
    .selector-header p {
      font-size: 1.2rem;
      color: #666;
      opacity: 0.8;
    }
    
    .premium-theme-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
    }
    
    .premium-theme-card {
      background: rgba(255, 255, 255, 0.98);
      border: 2px solid rgba(212, 175, 55, 0.2);
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      transition: all 0.4s ease;
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
    }
    
    .premium-theme-card:hover {
      transform: translateY(-10px) scale(1.02);
      border-color: #D4AF37;
      box-shadow: 0 25px 75px rgba(212, 175, 55, 0.3);
    }
    
    .premium-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background: linear-gradient(135deg, #D4AF37, #B8941F);
      color: white;
      padding: 5px 15px;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 700;
      z-index: 2;
      box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
    }
    
    .theme-preview-area {
      height: 200px;
      overflow: hidden;
    }
    
    .theme-details {
      padding: 2rem;
    }
    
    .theme-details h3 {
      font-size: 1.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    
    .theme-details p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .theme-features {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 2rem;
    }
    
    .feature-tag.premium {
      background: linear-gradient(135deg, #D4AF37, #B8941F);
      color: white;
      padding: 4px 12px;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
    }
    
    .select-premium-theme {
      width: 100%;
      background: linear-gradient(135deg, #2c3e50, #34495e);
      color: white;
      border: none;
      padding: 15px;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .select-premium-theme:hover {
      background: linear-gradient(135deg, #D4AF37, #B8941F);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
    }
  `;
  
  document.head.appendChild(styles);
}

/**
 * Select premium theme
 */
function selectPremiumTheme(themeId) {
  if (typeof window === 'undefined' || !window.themeManager) {
    console.error('❌ Theme Manager not available');
    return;
  }
  
  const success = window.themeManager.applyTheme(themeId);
  
  if (success) {
    console.log(`🎨 Applied premium theme: ${themeId}`);
    
    // Trigger selection event
    const event = new CustomEvent('premiumThemeSelected', {
      detail: { themeId: themeId }
    });
    document.dispatchEvent(event);
    
    // Visual feedback
    const button = event.target;
    if (button) {
      const originalText = button.textContent;
      button.textContent = '✅ Theme Applied!';
      button.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
      
      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
      }, 2000);
    }
  }
}

/**
 * Auto-load all themes when script loads
 */
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllBreathtakingThemes);
  } else {
    loadAllBreathtakingThemes();
  }
  
  // Make functions globally available
  window.loadAllBreathtakingThemes = loadAllBreathtakingThemes;
  window.getAllPremiumThemes = getAllPremiumThemes;
  window.getBreathtakingThemesByIndustry = getBreathtakingThemesByIndustry;
  window.isBreathtakingTheme = isBreathtakingTheme;
  window.getThemeShowcaseData = getThemeShowcaseData;
  window.createPremiumThemeSelector = createPremiumThemeSelector;
  window.selectPremiumTheme = selectPremiumTheme;
  
  console.log('🎨 Breathtaking Themes System Ready!');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    allBreathtakingThemes,
    loadAllBreathtakingThemes,
    getAllPremiumThemes,
    getBreathtakingThemesByIndustry,
    isBreathtakingTheme,
    getThemeShowcaseData,
    createPremiumThemeSelector,
    selectPremiumTheme
  };
}

/**
 * THEME STATISTICS
 */
console.log(`
🎨 BREATHTAKING THEMES COLLECTION
================================
Total Premium Themes: ${allBreathtakingThemes.length}
Industries Covered: ${new Set(allBreathtakingThemes.map(t => t.industry)).size}
Premium Features: Advanced animations, custom CSS, luxury styling
Market Position: Rivals $15,000+ custom websites
Competitive Advantage: DESTROYS all competitors

🏆 THEMES CREATED:
${allBreathtakingThemes.map(t => `• ${t.name} (${t.industry})`).join('\n')}

🚀 Ready to dominate the market!
`);

/**
 * USAGE EXAMPLES
 */
/*

// Load all themes
loadAllBreathtakingThemes();

// Get premium themes for restaurant industry
const restaurantThemes = getBreathtakingThemesByIndustry('restaurant');

// Create theme selector
createPremiumThemeSelector('theme-container', 'restaurant');

// Apply a specific theme
window.themeManager.applyTheme('luxury-steakhouse');

// Check if theme is premium
if (isBreathtakingTheme('cyberpunk-tech')) {
  console.log('This is a premium theme!');
}

*/