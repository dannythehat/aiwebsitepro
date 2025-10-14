/**
 * 🏠 PLATINUM REAL ESTATE THEME
 * "Estate Prestige" - Ultra-luxury real estate with sophisticated property showcase
 * 
 * This theme creates an atmosphere of luxury real estate perfect for high-end agencies,
 * luxury property listings, exclusive developments, and premium real estate services.
 */

const platinumRealEstateTheme = {
  id: 'platinum-real-estate',
  name: 'Estate Prestige',
  industry: 'realestate',
  description: 'Ultra-luxury real estate with sophisticated grays, gold accents, and premium property showcase',
  
  // Color palette inspired by luxury real estate, premium properties, and sophisticated living
  colors: {
    primary: '#2C3E50',        // Sophisticated Slate
    secondary: '#34495E',      // Steel Blue
    accent: '#D4AF37',         // Luxury Gold
    background: '#FFFFFF',     // Pure White
    text: '#2C3E50',           // Dark Blue Gray
    light: '#F8F9FA',          // Light Gray
    dark: '#1A252F',           // Deep Slate
    white: '#FFFFFF',          // Pure White
    platinum: '#E5E4E2',       // Platinum
    charcoal: '#36454F',       // Charcoal
    cream: '#F5F5DC',          // Cream
    marble: '#F8F8FF'          // Marble White
  },
  
  // Sophisticated, professional typography
  fonts: {
    heading: '"Playfair Display", "Cormorant Garamond", serif',
    body: '"Source Sans Pro", "Lato", sans-serif',
    accent: '"Cinzel", "Trajan Pro", serif',
    luxury: '"Didot", "Bodoni MT", serif'
  },
  
  // Advanced styling properties
  styling: {
    borderRadius: '8px',           // Clean, professional edges
    borderRadiusLg: '15px',
    shadow: '0 15px 45px rgba(44, 62, 80, 0.15), 0 5px 25px rgba(0, 0, 0, 0.1)',
    shadowLg: '0 25px 75px rgba(44, 62, 80, 0.2), 0 10px 50px rgba(0, 0, 0, 0.15)',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    
    // Architectural patterns
    blueprintPattern: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%232C3E50" fill-opacity="0.02"%3E%3Cpath d="M0 0h40v1H0V0zm0 39h40v1H0v-1zM1 0v40h1V0H1zm38 0v40h1V0h-1zM10 10h20v20H10V10zm5 5h10v10H15V15z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    luxuryTexture: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.02"%3E%3Cpath d="M30 30m-25 0a25 25 0 1 1 50 0a25 25 0 1 1 -50 0"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
  },
  
  // Component-specific styling
  components: {
    hero: {
      background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.95), rgba(52, 73, 94, 0.9)), url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%232C3E50" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23D4AF37" stroke-width="0.5" opacity="0.2"%3E%3Cpath d="M0 0h1200M0 150h1200M0 300h1200M0 450h1200M0 600h1200M300 0v600M600 0v600M900 0v600"/%3E%3C/g%3E%3C/svg%3E")',
      overlay: 'rgba(44, 62, 80, 0.2)',
      textAlign: 'center',
      minHeight: '90vh'
    },
    
    buttons: {
      primary: {
        background: 'linear-gradient(135deg, #D4AF37, #B8941F)',
        border: '2px solid #D4AF37',
        color: '#2C3E50',
        fontWeight: '600',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        padding: '16px 32px',
        fontSize: '14px',
        boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        hoverTransform: 'translateY(-3px) scale(1.02)',
        hoverShadow: '0 12px 35px rgba(212, 175, 55, 0.4)'
      },
      
      secondary: {
        background: 'transparent',
        border: '2px solid #2C3E50',
        color: '#2C3E50',
        fontWeight: '600',
        letterSpacing: '0.3px',
        textTransform: 'uppercase',
        hoverBackground: '#2C3E50',
        hoverColor: '#FFFFFF'
      }
    },
    
    cards: {
      background: 'rgba(255, 255, 255, 0.98)',
      border: '1px solid rgba(212, 175, 55, 0.2)',
      borderRadius: '15px',
      boxShadow: '0 15px 45px rgba(44, 62, 80, 0.15), 0 5px 25px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      hoverTransform: 'translateY(-12px) scale(1.02)',
      hoverShadow: '0 25px 75px rgba(44, 62, 80, 0.2), 0 10px 50px rgba(0, 0, 0, 0.15)'
    },
    
    navigation: {
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      boxShadow: '0 4px 20px rgba(44, 62, 80, 0.1)'
    }
  },
  
  // Industry-specific elements
  industry_specific: {
    property_style: 'luxury-showcase',
    listing_style: 'premium-grid',
    agent_style: 'professional-profiles',
    search_style: 'advanced-filters',
    contact_style: 'consultation-form'
  },
  
  // Advanced CSS custom properties
  customCSS: `
    /* Platinum Real Estate Custom Styles */
    .theme-platinum-real-estate {
      background: #FFFFFF;
      background-image: 
        url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%232C3E50" fill-opacity="0.02"%3E%3Cpath d="M0 0h40v1H0V0zm0 39h40v1H0v-1zM1 0v40h1V0H1zm38 0v40h1V0h-1zM10 10h20v20H10V10zm5 5h10v10H15V15z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
        radial-gradient(circle at 20% 20%, rgba(44, 62, 80, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
    }
    
    /* Luxury property showcase effects */
    .theme-platinum-real-estate::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(45deg, transparent 0%, rgba(229, 228, 226, 0.05) 25%, transparent 50%, rgba(212, 175, 55, 0.05) 75%, transparent 100%);
      background-size: 150px 150px;
      animation: luxuryFlow 25s linear infinite;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes luxuryFlow {
      0% { background-position: 0% 0%; }
      100% { background-position: 150px 150px; }
    }
    
    /* Premium hero section */
    .theme-platinum-real-estate .hero {
      position: relative;
      overflow: hidden;
      background: 
        linear-gradient(135deg, rgba(44, 62, 80, 0.95), rgba(52, 73, 94, 0.9)),
        url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%232C3E50" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23D4AF37" stroke-width="0.5" opacity="0.2"%3E%3Cpath d="M0 0h1200M0 150h1200M0 300h1200M0 450h1200M0 600h1200M300 0v600M600 0v600M900 0v600"/%3E%3C/g%3E%3C/svg%3E");
    }
    
    .theme-platinum-real-estate .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%),
        radial-gradient(ellipse at 20% 80%, rgba(229, 228, 226, 0.1) 0%, transparent 50%);
      animation: estateGlow 15s ease-in-out infinite alternate;
      pointer-events: none;
    }
    
    @keyframes estateGlow {
      0% { opacity: 0.4; }
      100% { opacity: 0.8; }
    }
    
    /* Property listing cards */
    .theme-platinum-real-estate .card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 15px;
      position: relative;
      overflow: hidden;
    }
    
    .theme-platinum-real-estate .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #2C3E50, #D4AF37, #34495E);
      transform: scaleX(0);
      transition: transform 0.6s ease;
    }
    
    .theme-platinum-real-estate .card:hover::before {
      transform: scaleX(1);
    }
    
    .theme-platinum-real-estate .card::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 100%;
      background: 
        linear-gradient(135deg, transparent, rgba(212, 175, 55, 0.05));
      transform: skewX(-20deg);
      transition: all 0.4s ease;
      opacity: 0;
    }
    
    .theme-platinum-real-estate .card:hover::after {
      opacity: 1;
      transform: skewX(-20deg) translateX(30px);
    }
    
    /* Luxury typography */
    .theme-platinum-real-estate h1,
    .theme-platinum-real-estate h2,
    .theme-platinum-real-estate h3 {
      color: #2C3E50;
      position: relative;
    }
    
    .theme-platinum-real-estate .hero-title {
      font-size: 4rem;
      font-weight: 400;
      letter-spacing: 2px;
      margin-bottom: 2rem;
      color: #FFFFFF;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      position: relative;
    }
    
    .theme-platinum-real-estate .hero-title::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 3px;
      background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    }
    
    .theme-platinum-real-estate .section-title {
      position: relative;
      margin-bottom: 3rem;
      font-weight: 400;
      letter-spacing: 1px;
    }
    
    .theme-platinum-real-estate .section-title::before {
      content: '🏛️';
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;
      opacity: 0.7;
    }
    
    /* Premium property buttons */
    .theme-platinum-real-estate .btn-primary {
      background: linear-gradient(135deg, #D4AF37, #B8941F);
      border: 2px solid #D4AF37;
      color: #2C3E50;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: 'uppercase',
      position: relative;
      overflow: hidden;
      box-shadow: 
        0 8px 25px rgba(212, 175, 55, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    .theme-platinum-real-estate .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.6s ease;
    }
    
    .theme-platinum-real-estate .btn-primary:hover::before {
      left: 100%;
    }
    
    .theme-platinum-real-estate .btn-primary:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 
        0 12px 35px rgba(212, 175, 55, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    
    /* Professional navigation */
    .theme-platinum-real-estate .navbar {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(212, 175, 55, 0.2);
      box-shadow: 0 4px 20px rgba(44, 62, 80, 0.1);
    }
    
    .theme-platinum-real-estate .nav-link {
      color: #2C3E50;
      font-weight: 500;
      letter-spacing: 0.3px;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-platinum-real-estate .nav-link::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #2C3E50, #D4AF37);
      transition: width 0.3s ease;
    }
    
    .theme-platinum-real-estate .nav-link:hover {
      color: #D4AF37;
      transform: translateY(-1px);
    }
    
    .theme-platinum-real-estate .nav-link:hover::after {
      width: 100%;
    }
    
    /* Property showcase cards */
    .theme-platinum-real-estate .property-card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 15px;
      overflow: hidden;
      position: relative;
      transition: all 0.4s ease;
      box-shadow: 0 12px 35px rgba(44, 62, 80, 0.1);
    }
    
    .theme-platinum-real-estate .property-card:hover {
      transform: translateY(-12px) scale(1.02);
      border-color: #D4AF37;
      box-shadow: 
        0 25px 70px rgba(44, 62, 80, 0.2),
        0 12px 50px rgba(0, 0, 0, 0.1);
    }
    
    .theme-platinum-real-estate .property-image {
      height: 250px;
      background: linear-gradient(45deg, #2C3E50, #34495E);
      position: relative;
      overflow: hidden;
    }
    
    .theme-platinum-real-estate .property-image::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(212, 175, 55, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .theme-platinum-real-estate .property-card:hover .property-image::after {
      opacity: 1;
    }
    
    .theme-platinum-real-estate .property-info {
      padding: 2rem;
      background: #FFFFFF;
    }
    
    .theme-platinum-real-estate .property-title {
      font-size: 1.4rem;
      font-weight: 500;
      color: #2C3E50;
      margin-bottom: 0.5rem;
      letter-spacing: 0.3px;
    }
    
    .theme-platinum-real-estate .property-location {
      font-size: 1rem;
      color: #D4AF37;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    
    .theme-platinum-real-estate .property-price {
      font-size: 1.8rem;
      color: #2C3E50;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .theme-platinum-real-estate .property-details {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
      color: #708090;
    }
    
    /* Agent profiles */
    .theme-platinum-real-estate .agent-card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 15px;
      padding: 2.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-platinum-real-estate .agent-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: 
        radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
      transform: rotate(45deg);
      transition: all 0.6s ease;
      opacity: 0;
    }
    
    .theme-platinum-real-estate .agent-card:hover::before {
      opacity: 1;
      transform: rotate(45deg) scale(1.1);
    }
    
    .theme-platinum-real-estate .agent-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 
        0 20px 60px rgba(44, 62, 80, 0.2),
        0 8px 40px rgba(0, 0, 0, 0.1);
    }
    
    /* Featured property highlight */
    .theme-platinum-real-estate .featured-property {
      position: relative;
    }
    
    .theme-platinum-real-estate .featured-property::before {
      content: 'FEATURED LISTING';
      position: absolute;
      top: 20px;
      left: 20px;
      background: linear-gradient(135deg, #D4AF37, #B8941F);
      color: #2C3E50;
      padding: 8px 20px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      border-radius: 4px;
      z-index: 2;
      box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
    }
    
    .theme-platinum-real-estate .featured-property::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 3px solid #D4AF37;
      border-radius: 15px;
      pointer-events: none;
      animation: featuredGlow 4s ease-in-out infinite alternate;
    }
    
    @keyframes featuredGlow {
      0% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
      100% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
    }
    
    /* Market statistics */
    .theme-platinum-real-estate .market-stat {
      background: linear-gradient(135deg, rgba(44, 62, 80, 0.05), rgba(212, 175, 55, 0.05));
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-platinum-real-estate .market-stat:hover {
      transform: translateY(-5px);
      border-color: #D4AF37;
      box-shadow: 0 15px 45px rgba(212, 175, 55, 0.2);
    }
    
    .theme-platinum-real-estate .stat-number {
      font-size: 3rem;
      font-weight: 700;
      color: #2C3E50;
      margin-bottom: 0.5rem;
    }
    
    .theme-platinum-real-estate .stat-label {
      color: #D4AF37;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    /* Luxury footer */
    .theme-platinum-real-estate .footer {
      background: linear-gradient(135deg, #2C3E50, #34495E);
      color: #FFFFFF;
      border-top: 3px solid #D4AF37;
      position: relative;
    }
    
    .theme-platinum-real-estate .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    }
    
    /* Property search filters */
    .theme-platinum-real-estate .search-filter {
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 12px;
      padding: 2rem;
      position: relative;
      backdrop-filter: blur(10px);
    }
    
    .theme-platinum-real-estate .search-filter::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #2C3E50, #D4AF37);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .theme-platinum-real-estate .hero-title {
        font-size: 2.5rem;
        letter-spacing: 1px;
      }
      
      .theme-platinum-real-estate .property-details {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .theme-platinum-real-estate .card {
        margin-bottom: 2rem;
      }
    }
    
    /* Elegant entrance animations */
    .theme-platinum-real-estate .estate-fade-in {
      animation: estateFadeIn 0.8s ease-out;
    }
    
    @keyframes estateFadeIn {
      from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    /* Property tour animation */
    .theme-platinum-real-estate .property-tour {
      position: relative;
    }
    
    .theme-platinum-real-estate .property-tour::after {
      content: '🏠 🔍 📍';
      position: absolute;
      top: 50%;
      left: -100%;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 1.8rem;
      opacity: 0.3;
      animation: propertyTour 15s linear infinite;
      pointer-events: none;
    }
    
    @keyframes propertyTour {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  `,
  
  // Features and tags
  features: ['Ultra-Premium', 'Sophisticated', 'Luxury Properties', 'Professional', 'Exclusive'],
  
  // Target audience
  target_audience: 'Luxury real estate agencies, premium property listings, exclusive developments, high-end realtors',
  
  // Mood and atmosphere
  mood: 'Sophisticated, professional, luxurious, trustworthy, exclusive, premium',
  
  // Image generation prompts
  images: {
    hero: 'luxury real estate office, premium property showcase, sophisticated interior, professional atmosphere',
    properties: 'luxury homes, premium real estate, elegant architecture, high-end properties',
    agents: 'professional real estate agents, luxury office setting, sophisticated portraits',
    filter: 'contrast(110%) brightness(100%) saturate(95%) sepia(3%)'
  }
};

// Register the theme
if (typeof window !== 'undefined' && window.themeManager) {
  window.themeManager.registerTheme(platinumRealEstateTheme);
  console.log('🏠 Registered Platinum Real Estate theme');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = platinumRealEstateTheme;
}