/**
 * 💒 LUXURY WEDDING VENUE THEME
 * "Eternal Romance" - Ultra-romantic wedding venue with dreamy pastels and gold elegance
 * 
 * This theme creates a fairytale atmosphere perfect for luxury wedding venues,
 * event spaces, bridal services, and romantic celebration destinations.
 */

const luxuryWeddingVenueTheme = {
  id: 'luxury-wedding-venue',
  name: 'Eternal Romance',
  industry: 'events',
  description: 'Ultra-romantic wedding venue with dreamy pastels, rose gold accents, and fairytale elegance',
  
  // Color palette inspired by romantic weddings, soft florals, and luxury celebrations
  colors: {
    primary: '#E8B4CB',        // Dusty Rose (Romance)
    secondary: '#F7E7CE',      // Champagne (Elegance)
    accent: '#D4AF37',         // Rose Gold (Luxury)
    background: '#FFFEF9',     // Ivory White (Pure)
    text: '#5D4E75',           // Mauve Gray (Soft)
    light: '#FAF0E6',          // Linen (Delicate)
    dark: '#8B7D8B',           // Dusty Purple (Sophisticated)
    white: '#FFFFFF',          // Pure White
    blush: '#F8BBD9',          // Blush Pink (Sweet)
    sage: '#B2C2B2',           // Sage Green (Natural)
    pearl: '#F8F6F0',          // Pearl (Lustrous)
    lavender: '#E6E6FA'        // Soft Lavender (Dreamy)
  },
  
  // Romantic, elegant typography
  fonts: {
    heading: '"Playfair Display", "Cormorant Garamond", "Dancing Script", serif',
    body: '"Lora", "Crimson Text", "Source Serif Pro", serif',
    accent: '"Great Vibes", "Dancing Script", "Allura", cursive',
    script: '"Pacifico", "Sacramento", cursive'
  },
  
  // Advanced styling properties
  styling: {
    borderRadius: '15px',          // Soft, romantic curves
    borderRadiusLg: '25px',
    shadow: '0 15px 45px rgba(232, 180, 203, 0.2), 0 5px 25px rgba(0, 0, 0, 0.05)',
    shadowLg: '0 25px 75px rgba(232, 180, 203, 0.3), 0 10px 50px rgba(0, 0, 0, 0.08)',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    
    // Romantic patterns
    floralPattern: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23E8B4CB" fill-opacity="0.05"%3E%3Cpath d="M30 30m-15 0a15 15 0 1 1 30 0a15 15 0 1 1 -30 0M30 15a15 15 0 0 1 0 30 15 15 0 0 1 0-30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    lacePattern: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.03"%3E%3Cpath d="M20 20m-10 0a10 10 0 1 1 20 0a10 10 0 1 1 -20 0M20 10a10 10 0 0 1 0 20 10 10 0 0 1 0-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
  },
  
  // Component-specific styling
  components: {
    hero: {
      background: 'linear-gradient(135deg, rgba(255, 254, 249, 0.95), rgba(248, 187, 217, 0.3)), url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23FFFEF9" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23E8B4CB" stroke-width="0.5" opacity="0.2"%3E%3Cpath d="M0 300c150-50 300 50 450 0s300-50 450 0s300 50 450 0v300H0V300z"/%3E%3Cpath d="M0 200c200-75 400 75 600 0s400-75 600 0v400H0V200z"/%3E%3C/g%3E%3C/svg%3E")',
      overlay: 'rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
      minHeight: '100vh'
    },
    
    buttons: {
      primary: {
        background: 'linear-gradient(135deg, #E8B4CB, #D4AF37)',
        border: 'none',
        color: '#FFFFFF',
        fontWeight: '500',
        letterSpacing: '0.5px',
        padding: '18px 36px',
        fontSize: '16px',
        boxShadow: '0 10px 30px rgba(232, 180, 203, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        hoverTransform: 'translateY(-3px) scale(1.05)',
        hoverShadow: '0 15px 45px rgba(232, 180, 203, 0.5)'
      },
      
      secondary: {
        background: 'transparent',
        border: '2px solid #E8B4CB',
        color: '#E8B4CB',
        fontWeight: '500',
        letterSpacing: '0.3px',
        hoverBackground: 'rgba(232, 180, 203, 0.1)',
        hoverColor: '#E8B4CB',
        hoverBorder: '#D4AF37'
      }
    },
    
    cards: {
      background: 'rgba(255, 255, 255, 0.95)',
      border: '1px solid rgba(232, 180, 203, 0.2)',
      borderRadius: '25px',
      boxShadow: '0 15px 45px rgba(232, 180, 203, 0.2), 0 5px 25px rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(20px)',
      hoverTransform: 'translateY(-12px) scale(1.03)',
      hoverShadow: '0 25px 75px rgba(232, 180, 203, 0.3), 0 10px 50px rgba(0, 0, 0, 0.08)'
    },
    
    navigation: {
      background: 'rgba(255, 254, 249, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(232, 180, 203, 0.2)',
      boxShadow: '0 4px 25px rgba(232, 180, 203, 0.1)'
    }
  },
  
  // Industry-specific elements
  industry_specific: {
    package_style: 'romantic-pricing',
    gallery_style: 'dreamy-showcase',
    testimonial_style: 'love-stories',
    venue_style: 'fairytale-spaces',
    contact_style: 'consultation-form'
  },
  
  // Advanced CSS custom properties
  customCSS: `
    /* Luxury Wedding Venue Custom Styles */
    .theme-luxury-wedding-venue {
      background: #FFFEF9;
      background-image: 
        url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23E8B4CB" fill-opacity="0.03"%3E%3Cpath d="M30 30m-15 0a15 15 0 1 1 30 0a15 15 0 1 1 -30 0M30 15a15 15 0 0 1 0 30 15 15 0 0 1 0-30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
        radial-gradient(circle at 15% 15%, rgba(232, 180, 203, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 85% 85%, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
    }
    
    /* Floating romantic elements */
    .theme-luxury-wedding-venue::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 20%, rgba(248, 187, 217, 0.1) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(230, 230, 250, 0.1) 0%, transparent 40%),
        radial-gradient(circle at 50% 10%, rgba(212, 175, 55, 0.05) 0%, transparent 30%);
      animation: romanticFloat 20s ease-in-out infinite alternate;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes romanticFloat {
      0% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
      100% { transform: translateY(-30px) rotate(2deg); opacity: 0.8; }
    }
    
    /* Dreamy hero section */
    .theme-luxury-wedding-venue .hero {
      position: relative;
      overflow: hidden;
      background: 
        linear-gradient(135deg, rgba(255, 254, 249, 0.95), rgba(248, 187, 217, 0.3)),
        url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23FFFEF9" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23E8B4CB" stroke-width="0.5" opacity="0.2"%3E%3Cpath d="M0 300c150-50 300 50 450 0s300-50 450 0s300 50 450 0v300H0V300z"/%3E%3Cpath d="M0 200c200-75 400 75 600 0s400-75 600 0v400H0V200z"/%3E%3C/g%3E%3C/svg%3E");
    }
    
    .theme-luxury-wedding-venue .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at center, rgba(232, 180, 203, 0.1) 0%, transparent 70%),
        radial-gradient(ellipse at 30% 70%, rgba(212, 175, 55, 0.08) 0%, transparent 50%);
      animation: dreamyAura 12s ease-in-out infinite alternate;
      pointer-events: none;
    }
    
    @keyframes dreamyAura {
      0% { opacity: 0.4; transform: scale(1); }
      100% { opacity: 0.8; transform: scale(1.1); }
    }
    
    /* Romantic cards with floral touches */
    .theme-luxury-wedding-venue .card {
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(232, 180, 203, 0.2);
      border-radius: 25px;
      backdrop-filter: blur(20px);
      position: relative;
      overflow: hidden;
    }
    
    .theme-luxury-wedding-venue .card::before {
      content: '🌸';
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 1.5rem;
      opacity: 0.3;
      transition: all 0.4s ease;
    }
    
    .theme-luxury-wedding-venue .card:hover::before {
      opacity: 0.7;
      transform: rotate(15deg) scale(1.2);
    }
    
    .theme-luxury-wedding-venue .card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, transparent, #E8B4CB, #D4AF37, transparent);
      transform: scaleX(0);
      transition: transform 0.6s ease;
    }
    
    .theme-luxury-wedding-venue .card:hover::after {
      transform: scaleX(1);
    }
    
    /* Elegant typography with romantic flair */
    .theme-luxury-wedding-venue h1,
    .theme-luxury-wedding-venue h2,
    .theme-luxury-wedding-venue h3 {
      color: #5D4E75;
      position: relative;
    }
    
    .theme-luxury-wedding-venue .hero-title {
      font-size: 4.5rem;
      font-weight: 300;
      letter-spacing: 2px;
      margin-bottom: 2rem;
      color: #5D4E75;
      font-family: "Great Vibes", cursive;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      position: relative;
    }
    
    .theme-luxury-wedding-venue .hero-title::after {
      content: '💕';
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;
      animation: heartbeat 2s ease-in-out infinite;
    }
    
    @keyframes heartbeat {
      0%, 100% { transform: translateX(-50%) scale(1); }
      50% { transform: translateX(-50%) scale(1.2); }
    }
    
    .theme-luxury-wedding-venue .section-title {
      position: relative;
      margin-bottom: 3rem;
      font-family: "Playfair Display", serif;
    }
    
    .theme-luxury-wedding-venue .section-title::before {
      content: '';
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #E8B4CB, #D4AF37);
      border-radius: 2px;
    }
    
    .theme-luxury-wedding-venue .section-title::after {
      content: '✨';
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      animation: sparkle 3s ease-in-out infinite;
    }
    
    @keyframes sparkle {
      0%, 100% { opacity: 0.5; transform: translateX(-50%) rotate(0deg); }
      50% { opacity: 1; transform: translateX(-50%) rotate(180deg); }
    }
    
    /* Romantic button effects */
    .theme-luxury-wedding-venue .btn-primary {
      background: linear-gradient(135deg, #E8B4CB, #D4AF37);
      border: none;
      color: #FFFFFF;
      font-weight: 500;
      letter-spacing: 0.5px;
      position: relative;
      overflow: hidden;
      box-shadow: 
        0 10px 30px rgba(232, 180, 203, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    
    .theme-luxury-wedding-venue .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.8s ease;
    }
    
    .theme-luxury-wedding-venue .btn-primary:hover::before {
      left: 100%;
    }
    
    .theme-luxury-wedding-venue .btn-primary:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 
        0 15px 45px rgba(232, 180, 203, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }
    
    /* Elegant navigation */
    .theme-luxury-wedding-venue .navbar {
      background: rgba(255, 254, 249, 0.98);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(232, 180, 203, 0.2);
      box-shadow: 0 4px 25px rgba(232, 180, 203, 0.1);
    }
    
    .theme-luxury-wedding-venue .nav-link {
      color: #5D4E75;
      font-weight: 400;
      letter-spacing: 0.3px;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-luxury-wedding-venue .nav-link::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #E8B4CB, #D4AF37);
      border-radius: 1px;
      transition: width 0.3s ease;
    }
    
    .theme-luxury-wedding-venue .nav-link:hover {
      color: #E8B4CB;
      transform: translateY(-1px);
    }
    
    .theme-luxury-wedding-venue .nav-link:hover::after {
      width: 100%;
    }
    
    /* Wedding package cards */
    .theme-luxury-wedding-venue .package-card {
      background: rgba(255, 255, 255, 0.95);
      border: 2px solid rgba(232, 180, 203, 0.2);
      border-radius: 25px;
      padding: 3rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s ease;
    }
    
    .theme-luxury-wedding-venue .package-card.featured {
      border-color: #D4AF37;
      transform: scale(1.05);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 187, 217, 0.05));
    }
    
    .theme-luxury-wedding-venue .package-card.featured::before {
      content: 'Most Popular';
      position: absolute;
      top: 25px;
      right: -35px;
      background: linear-gradient(135deg, #E8B4CB, #D4AF37);
      color: white;
      padding: 8px 45px;
      font-size: 0.8rem;
      font-weight: 600;
      transform: rotate(45deg);
      box-shadow: 0 4px 15px rgba(232, 180, 203, 0.3);
    }
    
    .theme-luxury-wedding-venue .package-card:hover {
      transform: translateY(-15px) scale(1.03);
      border-color: #E8B4CB;
      box-shadow: 
        0 30px 80px rgba(232, 180, 203, 0.3),
        0 15px 60px rgba(0, 0, 0, 0.1);
    }
    
    .theme-luxury-wedding-venue .package-price {
      font-size: 3rem;
      font-weight: 300;
      color: #E8B4CB;
      margin-bottom: 1rem;
      font-family: "Playfair Display", serif;
    }
    
    .theme-luxury-wedding-venue .package-name {
      font-size: 1.5rem;
      color: #5D4E75;
      margin-bottom: 2rem;
      font-family: "Great Vibes", cursive;
    }
    
    /* Gallery showcase */
    .theme-luxury-wedding-venue .gallery-item {
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      transition: all 0.4s ease;
      box-shadow: 0 10px 30px rgba(232, 180, 203, 0.2);
    }
    
    .theme-luxury-wedding-venue .gallery-item:hover {
      transform: scale(1.05) rotate(2deg);
      box-shadow: 0 20px 60px rgba(232, 180, 203, 0.3);
    }
    
    .theme-luxury-wedding-venue .gallery-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(232, 180, 203, 0.1), rgba(212, 175, 55, 0.1));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .theme-luxury-wedding-venue .gallery-item:hover::after {
      opacity: 1;
    }
    
    /* Love story testimonials */
    .theme-luxury-wedding-venue .testimonial {
      background: rgba(250, 240, 230, 0.8);
      border: 1px solid rgba(232, 180, 203, 0.3);
      border-radius: 20px;
      padding: 3rem;
      position: relative;
      margin: 2rem 0;
      text-align: center;
    }
    
    .theme-luxury-wedding-venue .testimonial::before {
      content: '💕';
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;
      background: #FFFEF9;
      padding: 0 10px;
    }
    
    .theme-luxury-wedding-venue .testimonial::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, #E8B4CB, #D4AF37, transparent);
      border-radius: 0 0 20px 20px;
    }
    
    .theme-luxury-wedding-venue .testimonial-text {
      font-style: italic;
      font-size: 1.1rem;
      color: #5D4E75;
      margin-bottom: 1.5rem;
      line-height: 1.8;
    }
    
    .theme-luxury-wedding-venue .testimonial-couple {
      font-weight: 600;
      color: #E8B4CB;
      font-family: "Great Vibes", cursive;
      font-size: 1.3rem;
    }
    
    /* Romantic footer */
    .theme-luxury-wedding-venue .footer {
      background: linear-gradient(135deg, #FAF0E6, #E8B4CB);
      border-top: 3px solid #D4AF37;
      position: relative;
    }
    
    .theme-luxury-wedding-venue .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #E8B4CB, #D4AF37, transparent);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .theme-luxury-wedding-venue .hero-title {
        font-size: 3rem;
        letter-spacing: 1px;
      }
      
      .theme-luxury-wedding-venue .package-card.featured {
        transform: none;
      }
      
      .theme-luxury-wedding-venue .card {
        margin-bottom: 2rem;
      }
    }
    
    /* Magical entrance animations */
    .theme-luxury-wedding-venue .fade-in {
      animation: romanticFadeIn 1s ease-out;
    }
    
    @keyframes romanticFadeIn {
      from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    /* Floating hearts animation */
    .theme-luxury-wedding-venue .floating-hearts {
      position: relative;
      overflow: hidden;
    }
    
    .theme-luxury-wedding-venue .floating-hearts::after {
      content: '💕 💖 💕';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 1.5rem;
      opacity: 0.3;
      animation: floatingHearts 15s linear infinite;
      pointer-events: none;
    }
    
    @keyframes floatingHearts {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  `,
  
  // Features and tags
  features: ['Ultra-Romantic', 'Dreamy', 'Elegant', 'Fairytale', 'Luxury'],
  
  // Target audience
  target_audience: 'Luxury wedding venues, event spaces, bridal services, wedding planners, romantic destinations',
  
  // Mood and atmosphere
  mood: 'Romantic, dreamy, elegant, fairytale-like, luxurious, enchanting',
  
  // Image generation prompts
  images: {
    hero: 'luxury wedding venue, romantic garden setting, fairy lights, elegant decor, dreamy atmosphere',
    gallery: 'beautiful wedding ceremonies, elegant receptions, romantic venues, floral arrangements',
    packages: 'luxury wedding setups, elegant table settings, romantic lighting, premium decor',
    filter: 'brightness(110%) contrast(105%) saturate(110%) hue-rotate(-5deg) sepia(10%)'
  }
};

// Register the theme
if (typeof window !== 'undefined' && window.themeManager) {
  window.themeManager.registerTheme(luxuryWeddingVenueTheme);
  console.log('💒 Registered Luxury Wedding Venue theme');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = luxuryWeddingVenueTheme;
}