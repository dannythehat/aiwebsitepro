/**
 * 🥩 LUXURY STEAKHOUSE THEME
 * "The Gentleman's Choice" - Ultra-premium steakhouse experience
 * 
 * This theme creates an atmosphere of masculine luxury, dark sophistication,
 * and premium dining. Every detail screams high-end steakhouse.
 */

const luxurySteakhouseTheme = {
  id: 'luxury-steakhouse',
  name: 'The Gentleman\'s Choice',
  industry: 'restaurant',
  description: 'Ultra-premium steakhouse with dark luxury, leather textures, and masculine sophistication',
  
  // Color palette inspired by premium steakhouses like Peter Luger, The Capital Grille
  colors: {
    primary: '#1A0E0A',        // Deep Mahogany (almost black)
    secondary: '#8B0000',      // Dark Red (blood red)
    accent: '#DAA520',         // Goldenrod (premium gold)
    background: '#0F0F0F',     // Rich Black
    text: '#F5F5DC',           // Beige (cream text)
    light: '#2F1B14',          // Dark Brown
    dark: '#000000',           // Pure Black
    white: '#FFFEF7',          // Cream White
    leather: '#8B4513',        // Saddle Brown (leather)
    smoke: '#696969',          // Dim Gray (smoke effect)
    fire: '#FF4500',           // Orange Red (fire glow)
    silver: '#C0C0C0'          // Silver (cutlery)
  },
  
  // Typography that screams luxury and tradition
  fonts: {
    heading: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
    body: '"Crimson Text", "Lora", Georgia, serif',
    accent: '"Cinzel", "Trajan Pro", serif',
    menu: '"Cormorant Garamond", Georgia, serif'
  },
  
  // Advanced styling properties
  styling: {
    borderRadius: '2px',           // Sharp, masculine edges
    borderRadiusLg: '4px',
    shadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
    shadowLg: '0 16px 64px rgba(0, 0, 0, 0.9)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    
    // Texture overlays
    leatherTexture: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    woodTexture: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Cpath d="M0 0h40v40H0V0zm20 20a20 20 0 1 1 0-40 20 20 0 0 1 0 40z"/%3E%3C/g%3E%3C/svg%3E")'
  },
  
  // Component-specific styling
  components: {
    hero: {
      background: 'linear-gradient(135deg, rgba(26, 14, 10, 0.95), rgba(139, 0, 0, 0.85)), url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23000" width="1200" height="600"/%3E%3Cg fill="%23111"%3E%3Ccircle cx="200" cy="150" r="80"/%3E%3Ccircle cx="800" cy="400" r="60"/%3E%3Ccircle cx="1000" cy="200" r="40"/%3E%3C/g%3E%3C/svg%3E")',
      overlay: 'rgba(0, 0, 0, 0.6)',
      textAlign: 'center',
      minHeight: '100vh'
    },
    
    buttons: {
      primary: {
        background: 'linear-gradient(45deg, #DAA520, #B8860B)',
        border: '2px solid #DAA520',
        color: '#000000',
        fontWeight: '700',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        padding: '16px 32px',
        fontSize: '14px',
        boxShadow: '0 4px 16px rgba(218, 165, 32, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        hoverTransform: 'translateY(-3px) scale(1.05)',
        hoverShadow: '0 8px 32px rgba(218, 165, 32, 0.6)'
      },
      
      secondary: {
        background: 'transparent',
        border: '2px solid #8B0000',
        color: '#8B0000',
        fontWeight: '600',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        hoverBackground: '#8B0000',
        hoverColor: '#FFFEF7'
      }
    },
    
    cards: {
      background: 'linear-gradient(145deg, #1A0E0A, #2F1B14)',
      border: '1px solid rgba(218, 165, 32, 0.2)',
      borderRadius: '4px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(218, 165, 32, 0.1)',
      backdropFilter: 'blur(10px)',
      hoverTransform: 'translateY(-8px) rotateX(5deg)',
      hoverShadow: '0 16px 64px rgba(0, 0, 0, 0.9)'
    },
    
    navigation: {
      background: 'rgba(15, 15, 15, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(218, 165, 32, 0.3)',
      boxShadow: '0 4px 32px rgba(0, 0, 0, 0.8)'
    }
  },
  
  // Industry-specific elements
  industry_specific: {
    menu_style: 'luxury-steakhouse',
    reservation_style: 'gentleman-form',
    testimonial_style: 'leather-bound',
    wine_list_style: 'sommelier-selection',
    chef_profile_style: 'master-craftsman'
  },
  
  // Advanced CSS custom properties
  customCSS: `
    /* Luxury Steakhouse Custom Styles */
    .theme-luxury-steakhouse {
      background: #0F0F0F;
      background-image: 
        radial-gradient(circle at 25% 25%, rgba(139, 0, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(218, 165, 32, 0.05) 0%, transparent 50%);
    }
    
    /* Animated fire glow effect */
    .theme-luxury-steakhouse .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at center bottom, rgba(255, 69, 0, 0.1) 0%, transparent 70%),
        radial-gradient(ellipse at 20% 80%, rgba(218, 165, 32, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(139, 0, 0, 0.1) 0%, transparent 50%);
      animation: fireGlow 4s ease-in-out infinite alternate;
      pointer-events: none;
    }
    
    @keyframes fireGlow {
      0% { opacity: 0.3; }
      100% { opacity: 0.7; }
    }
    
    /* Leather texture for cards */
    .theme-luxury-steakhouse .card {
      background: 
        linear-gradient(145deg, #1A0E0A, #2F1B14),
        url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      border: 1px solid rgba(218, 165, 32, 0.2);
      position: relative;
      overflow: hidden;
    }
    
    .theme-luxury-steakhouse .card::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.1), transparent);
      transition: left 0.6s ease;
    }
    
    .theme-luxury-steakhouse .card:hover::after {
      left: 100%;
    }
    
    /* Premium menu styling */
    .theme-luxury-steakhouse .menu-item {
      background: linear-gradient(135deg, rgba(26, 14, 10, 0.8), rgba(47, 27, 20, 0.6));
      border: none;
      border-left: 4px solid #DAA520;
      border-radius: 0;
      position: relative;
      overflow: hidden;
    }
    
    .theme-luxury-steakhouse .menu-item::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 60px;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.1));
      transform: skewX(-15deg);
    }
    
    .theme-luxury-steakhouse .menu-item-price {
      color: #DAA520;
      font-family: "Cinzel", serif;
      font-weight: 600;
      font-size: 1.4rem;
      text-shadow: 0 0 10px rgba(218, 165, 32, 0.3);
    }
    
    /* Elegant typography effects */
    .theme-luxury-steakhouse h1,
    .theme-luxury-steakhouse h2,
    .theme-luxury-steakhouse h3 {
      background: linear-gradient(135deg, #DAA520, #B8860B, #DAA520);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: none;
      position: relative;
    }
    
    .theme-luxury-steakhouse .hero-title {
      font-size: 4.5rem;
      font-weight: 400;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 2rem;
      position: relative;
    }
    
    .theme-luxury-steakhouse .hero-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #DAA520, transparent);
    }
    
    /* Button hover effects */
    .theme-luxury-steakhouse .btn-primary {
      position: relative;
      overflow: hidden;
      background: linear-gradient(45deg, #DAA520, #B8860B);
      border: 2px solid #DAA520;
      color: #000000;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: 
        0 4px 16px rgba(218, 165, 32, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    .theme-luxury-steakhouse .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
    }
    
    .theme-luxury-steakhouse .btn-primary:hover::before {
      left: 100%;
    }
    
    .theme-luxury-steakhouse .btn-primary:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 
        0 8px 32px rgba(218, 165, 32, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    
    /* Sophisticated navigation */
    .theme-luxury-steakhouse .navbar {
      background: rgba(15, 15, 15, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(218, 165, 32, 0.3);
      box-shadow: 0 4px 32px rgba(0, 0, 0, 0.8);
    }
    
    .theme-luxury-steakhouse .nav-link {
      color: #F5F5DC;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-size: 0.9rem;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-luxury-steakhouse .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #DAA520, #B8860B);
      transition: width 0.3s ease;
    }
    
    .theme-luxury-steakhouse .nav-link:hover {
      color: #DAA520;
      transform: translateY(-2px);
    }
    
    .theme-luxury-steakhouse .nav-link:hover::after {
      width: 100%;
    }
    
    /* Premium footer */
    .theme-luxury-steakhouse .footer {
      background: linear-gradient(135deg, #000000, #1A0E0A);
      border-top: 1px solid rgba(218, 165, 32, 0.3);
      position: relative;
    }
    
    .theme-luxury-steakhouse .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #DAA520, transparent);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .theme-luxury-steakhouse .hero-title {
        font-size: 3rem;
        letter-spacing: 2px;
      }
      
      .theme-luxury-steakhouse .card {
        margin-bottom: 2rem;
      }
    }
  `,
  
  // Features and tags
  features: ['Ultra-Premium', 'Masculine', 'Sophisticated', 'Dark Luxury', 'Steakhouse'],
  
  // Target audience
  target_audience: 'High-end steakhouses, premium dining establishments, masculine luxury brands',
  
  // Mood and atmosphere
  mood: 'Sophisticated, masculine, luxurious, traditional, premium, exclusive',
  
  // Image generation prompts
  images: {
    hero: 'luxury steakhouse interior, dark wood, leather seating, dim lighting, premium atmosphere, masculine sophistication',
    menu: 'premium steak cuts, marble background, elegant presentation, fine dining',
    ambiance: 'upscale restaurant interior, leather booths, dark wood, candlelight, sophisticated dining',
    filter: 'contrast(120%) brightness(85%) sepia(15%) saturate(110%)'
  }
};

// Register the theme
if (typeof window !== 'undefined' && window.themeManager) {
  window.themeManager.registerTheme(luxurySteakhouseTheme);
  console.log('🥩 Registered Luxury Steakhouse theme');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = luxurySteakhouseTheme;
}