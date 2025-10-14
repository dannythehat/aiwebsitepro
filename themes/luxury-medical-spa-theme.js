/**
 * 🏥 LUXURY MEDICAL SPA THEME
 * "Zen Sanctuary" - Ultra-modern medical spa with healing aesthetics and zen minimalism
 * 
 * This theme creates a serene, luxurious atmosphere perfect for medical spas,
 * wellness centers, aesthetic clinics, and high-end healthcare facilities.
 */

const luxuryMedicalSpaTheme = {
  id: 'luxury-medical-spa',
  name: 'Zen Sanctuary',
  industry: 'healthcare',
  description: 'Ultra-modern medical spa with clean whites, healing blues, zen minimalism, and luxury wellness aesthetics',
  
  // Color palette inspired by luxury spas, clean medical environments, and zen aesthetics
  colors: {
    primary: '#4A90E2',        // Healing Blue
    secondary: '#7ED321',      // Wellness Green
    accent: '#D4AF37',         // Luxury Gold
    background: '#FFFFFF',     // Pure White
    text: '#2C3E50',           // Sophisticated Gray
    light: '#F8FFFE',          // Spa White
    dark: '#34495E',           // Deep Blue Gray
    white: '#FFFFFF',          // Pure White
    mint: '#A8E6CF',           // Mint Green
    lavender: '#E6E6FA',       // Soft Lavender
    pearl: '#F8F8FF',          // Ghost White
    sage: '#9CAF88'            // Sage Green
  },
  
  // Clean, modern typography
  fonts: {
    heading: '"Poppins", "Montserrat", "Lato", sans-serif',
    body: '"Source Sans Pro", "Open Sans", "Nunito", sans-serif',
    accent: '"Playfair Display", "Cormorant Garamond", serif',
    zen: '"Quicksand", "Comfortaa", sans-serif'
  },
  
  // Advanced styling properties
  styling: {
    borderRadius: '12px',          // Soft, organic curves
    borderRadiusLg: '20px',
    shadow: '0 10px 40px rgba(74, 144, 226, 0.1), 0 4px 20px rgba(0, 0, 0, 0.05)',
    shadowLg: '0 20px 60px rgba(74, 144, 226, 0.15), 0 8px 40px rgba(0, 0, 0, 0.08)',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    
    // Organic patterns
    wavePattern: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234A90E2" fill-opacity="0.03"%3E%3Cpath d="M30 0c16.569 0 30 13.431 30 30s-13.431 30-30 30S0 46.569 0 30 13.431 0 30 0zm0 10c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    leafPattern: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%237ED321" fill-opacity="0.02"%3E%3Cpath d="M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0zm0 5C12.268 5 6 11.268 6 19s6.268 14 14 14 14-6.268 14-14S27.732 5 20 5z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
  },
  
  // Component-specific styling
  components: {
    hero: {
      background: 'linear-gradient(135deg, rgba(248, 255, 254, 0.95), rgba(168, 230, 207, 0.3)), url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23FFFFFF" width="1200" height="600"/%3E%3Cg fill="none" stroke="%234A90E2" stroke-width="0.5" opacity="0.1"%3E%3Cpath d="M0 300c200-100 400 100 600 0s400-100 600 0v300H0V300z"/%3E%3C/g%3E%3C/svg%3E")',
      overlay: 'rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
      minHeight: '90vh'
    },
    
    buttons: {
      primary: {
        background: 'linear-gradient(135deg, #4A90E2, #357ABD)',
        border: 'none',
        color: '#FFFFFF',
        fontWeight: '500',
        letterSpacing: '0.5px',
        padding: '16px 32px',
        fontSize: '16px',
        boxShadow: '0 8px 25px rgba(74, 144, 226, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        hoverTransform: 'translateY(-3px) scale(1.02)',
        hoverShadow: '0 12px 35px rgba(74, 144, 226, 0.4)'
      },
      
      secondary: {
        background: 'transparent',
        border: '2px solid #7ED321',
        color: '#7ED321',
        fontWeight: '500',
        letterSpacing: '0.3px',
        hoverBackground: 'rgba(126, 211, 33, 0.1)',
        hoverColor: '#7ED321',
        hoverBorder: '#7ED321'
      }
    },
    
    cards: {
      background: 'rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(74, 144, 226, 0.1)',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(74, 144, 226, 0.1), 0 4px 20px rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(20px)',
      hoverTransform: 'translateY(-10px) scale(1.02)',
      hoverShadow: '0 20px 60px rgba(74, 144, 226, 0.15), 0 8px 40px rgba(0, 0, 0, 0.08)'
    },
    
    navigation: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(74, 144, 226, 0.1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
    }
  },
  
  // Industry-specific elements
  industry_specific: {
    service_style: 'wellness-cards',
    treatment_style: 'zen-list',
    testimonial_style: 'peaceful-quotes',
    team_style: 'healing-profiles',
    booking_style: 'serene-form'
  },
  
  // Advanced CSS custom properties
  customCSS: `
    /* Luxury Medical Spa Custom Styles */
    .theme-luxury-medical-spa {
      background: #FFFFFF;
      background-image: 
        radial-gradient(circle at 20% 20%, rgba(74, 144, 226, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(126, 211, 33, 0.03) 0%, transparent 50%),
        url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234A90E2" fill-opacity="0.02"%3E%3Cpath d="M30 0c16.569 0 30 13.431 30 30s-13.431 30-30 30S0 46.569 0 30 13.431 0 30 0zm0 10c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    
    /* Floating zen elements */
    .theme-luxury-medical-spa::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 10% 10%, rgba(168, 230, 207, 0.1) 0%, transparent 30%),
        radial-gradient(circle at 90% 90%, rgba(230, 230, 250, 0.1) 0%, transparent 30%),
        radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 40%);
      animation: zenFloat 15s ease-in-out infinite alternate;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes zenFloat {
      0% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
      100% { transform: translateY(-20px) rotate(1deg); opacity: 0.6; }
    }
    
    /* Serene hero section */
    .theme-luxury-medical-spa .hero {
      position: relative;
      overflow: hidden;
      background: 
        linear-gradient(135deg, rgba(248, 255, 254, 0.95), rgba(168, 230, 207, 0.3)),
        url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23FFFFFF" width="1200" height="600"/%3E%3Cg fill="none" stroke="%234A90E2" stroke-width="0.5" opacity="0.1"%3E%3Cpath d="M0 300c200-100 400 100 600 0s400-100 600 0v300H0V300z"/%3E%3C/g%3E%3C/svg%3E");
    }
    
    .theme-luxury-medical-spa .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at center, rgba(74, 144, 226, 0.05) 0%, transparent 70%),
        radial-gradient(ellipse at 30% 70%, rgba(126, 211, 33, 0.05) 0%, transparent 50%);
      animation: healingAura 8s ease-in-out infinite alternate;
      pointer-events: none;
    }
    
    @keyframes healingAura {
      0% { opacity: 0.3; transform: scale(1); }
      100% { opacity: 0.7; transform: scale(1.05); }
    }
    
    /* Wellness cards with organic shapes */
    .theme-luxury-medical-spa .card {
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(74, 144, 226, 0.1);
      border-radius: 20px;
      backdrop-filter: blur(20px);
      position: relative;
      overflow: hidden;
    }
    
    .theme-luxury-medical-spa .card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: 
        radial-gradient(circle, rgba(74, 144, 226, 0.05) 0%, transparent 70%);
      transform: rotate(45deg);
      transition: all 0.8s ease;
      opacity: 0;
    }
    
    .theme-luxury-medical-spa .card:hover::before {
      opacity: 1;
      transform: rotate(45deg) scale(1.2);
    }
    
    .theme-luxury-medical-spa .card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, #4A90E2, #7ED321, transparent);
      transform: scaleX(0);
      transition: transform 0.6s ease;
    }
    
    .theme-luxury-medical-spa .card:hover::after {
      transform: scaleX(1);
    }
    
    /* Zen typography */
    .theme-luxury-medical-spa h1,
    .theme-luxury-medical-spa h2,
    .theme-luxury-medical-spa h3 {
      color: #4A90E2;
      position: relative;
    }
    
    .theme-luxury-medical-spa .hero-title {
      font-size: 3.5rem;
      font-weight: 300;
      letter-spacing: 1px;
      margin-bottom: 2rem;
      position: relative;
      color: #2C3E50;
    }
    
    .theme-luxury-medical-spa .hero-title::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, #4A90E2, #7ED321);
      border-radius: 2px;
    }
    
    .theme-luxury-medical-spa .section-title {
      position: relative;
      margin-bottom: 3rem;
    }
    
    .theme-luxury-medical-spa .section-title::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      background: 
        radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%);
      border-radius: 50%;
    }
    
    /* Healing button effects */
    .theme-luxury-medical-spa .btn-primary {
      background: linear-gradient(135deg, #4A90E2, #357ABD);
      border: none;
      color: #FFFFFF;
      font-weight: 500;
      letter-spacing: 0.5px;
      position: relative;
      overflow: hidden;
      box-shadow: 
        0 8px 25px rgba(74, 144, 226, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    .theme-luxury-medical-spa .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.8s ease;
    }
    
    .theme-luxury-medical-spa .btn-primary:hover::before {
      left: 100%;
    }
    
    .theme-luxury-medical-spa .btn-primary:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 
        0 12px 35px rgba(74, 144, 226, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    
    /* Serene navigation */
    .theme-luxury-medical-spa .navbar {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(74, 144, 226, 0.1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }
    
    .theme-luxury-medical-spa .nav-link {
      color: #2C3E50;
      font-weight: 400;
      letter-spacing: 0.3px;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-luxury-medical-spa .nav-link::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #4A90E2, #7ED321);
      border-radius: 1px;
      transition: width 0.3s ease;
    }
    
    .theme-luxury-medical-spa .nav-link:hover {
      color: #4A90E2;
      transform: translateY(-1px);
    }
    
    .theme-luxury-medical-spa .nav-link:hover::after {
      width: 100%;
    }
    
    /* Treatment/service cards */
    .theme-luxury-medical-spa .service-card {
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(74, 144, 226, 0.1);
      border-radius: 20px;
      padding: 2.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-luxury-medical-spa .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #4A90E2, #7ED321, #D4AF37);
      transform: scaleX(0);
      transition: transform 0.6s ease;
    }
    
    .theme-luxury-medical-spa .service-card:hover::before {
      transform: scaleX(1);
    }
    
    .theme-luxury-medical-spa .service-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 
        0 20px 60px rgba(74, 144, 226, 0.15),
        0 8px 40px rgba(0, 0, 0, 0.08);
      border-color: rgba(74, 144, 226, 0.2);
    }
    
    .theme-luxury-medical-spa .service-icon {
      font-size: 3rem;
      color: #4A90E2;
      margin-bottom: 1.5rem;
      display: block;
      transition: all 0.3s ease;
    }
    
    .theme-luxury-medical-spa .service-card:hover .service-icon {
      transform: scale(1.1);
      color: #7ED321;
    }
    
    /* Wellness pricing tables */
    .theme-luxury-medical-spa .pricing-card {
      background: rgba(255, 255, 255, 0.95);
      border: 2px solid rgba(74, 144, 226, 0.1);
      border-radius: 25px;
      padding: 3rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-luxury-medical-spa .pricing-card.featured {
      border-color: #D4AF37;
      transform: scale(1.05);
    }
    
    .theme-luxury-medical-spa .pricing-card.featured::before {
      content: 'Most Popular';
      position: absolute;
      top: 20px;
      right: -30px;
      background: #D4AF37;
      color: white;
      padding: 5px 40px;
      font-size: 0.8rem;
      font-weight: 600;
      transform: rotate(45deg);
    }
    
    .theme-luxury-medical-spa .pricing-card:hover {
      transform: translateY(-10px) scale(1.02);
      border-color: #4A90E2;
      box-shadow: 
        0 25px 70px rgba(74, 144, 226, 0.2),
        0 10px 50px rgba(0, 0, 0, 0.1);
    }
    
    /* Peaceful footer */
    .theme-luxury-medical-spa .footer {
      background: linear-gradient(135deg, #F8FFFE, #A8E6CF);
      border-top: 1px solid rgba(74, 144, 226, 0.1);
      position: relative;
    }
    
    .theme-luxury-medical-spa .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #4A90E2, #7ED321, #D4AF37, transparent);
    }
    
    /* Testimonial styling */
    .theme-luxury-medical-spa .testimonial {
      background: rgba(255, 255, 255, 0.8);
      border-left: 4px solid #7ED321;
      border-radius: 15px;
      padding: 2rem;
      position: relative;
      margin: 2rem 0;
    }
    
    .theme-luxury-medical-spa .testimonial::before {
      content: '"';
      position: absolute;
      top: -10px;
      left: 20px;
      font-size: 4rem;
      color: #4A90E2;
      opacity: 0.3;
      font-family: Georgia, serif;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .theme-luxury-medical-spa .hero-title {
        font-size: 2.5rem;
        letter-spacing: 0.5px;
      }
      
      .theme-luxury-medical-spa .card {
        margin-bottom: 2rem;
      }
      
      .theme-luxury-medical-spa .pricing-card.featured {
        transform: none;
      }
    }
    
    /* Smooth entrance animations */
    .theme-luxury-medical-spa .fade-in {
      animation: fadeInUp 0.8s ease-out;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  
  // Features and tags
  features: ['Luxury', 'Zen', 'Healing', 'Modern', 'Wellness'],
  
  // Target audience
  target_audience: 'Medical spas, wellness centers, aesthetic clinics, luxury healthcare facilities, holistic healing centers',
  
  // Mood and atmosphere
  mood: 'Serene, luxurious, healing, peaceful, modern, sophisticated, zen-like',
  
  // Image generation prompts
  images: {
    hero: 'luxury medical spa interior, clean white spaces, natural lighting, zen aesthetics, healing environment',
    services: 'spa treatments, wellness therapy, modern medical equipment, serene atmosphere',
    team: 'professional spa therapists, clean medical environment, healing hands, peaceful setting',
    filter: 'brightness(110%) contrast(105%) saturate(95%) hue-rotate(-5deg)'
  }
};

// Register the theme
if (typeof window !== 'undefined' && window.themeManager) {
  window.themeManager.registerTheme(luxuryMedicalSpaTheme);
  console.log('🏥 Registered Luxury Medical Spa theme');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = luxuryMedicalSpaTheme;
}