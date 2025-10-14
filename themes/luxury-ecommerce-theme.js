/**
 * 🛒 LUXURY E-COMMERCE THEME
 * "Platinum Boutique" - Ultra-premium e-commerce with sophisticated shopping experience
 * 
 * This theme creates a high-end shopping atmosphere perfect for luxury brands,
 * premium products, designer goods, and exclusive retail experiences.
 */

const luxuryEcommerceTheme = {
  id: 'luxury-ecommerce',
  name: 'Platinum Boutique',
  industry: 'ecommerce',
  description: 'Ultra-premium e-commerce with sophisticated blacks, platinum accents, and luxury shopping experience',
  
  // Color palette inspired by luxury retail, premium brands, and sophisticated shopping
  colors: {
    primary: '#1C1C1C',        // Sophisticated Black
    secondary: '#C0C0C0',      // Platinum Silver
    accent: '#D4AF37',         // Luxury Gold
    background: '#FFFFFF',     // Pure White
    text: '#2C3E50',           // Dark Blue Gray
    light: '#F8F8F8',          // Light Gray
    dark: '#000000',           // Pure Black
    white: '#FFFFFF',          // Pure White
    rose: '#E8B4CB',           // Rose Gold
    charcoal: '#36454F',       // Charcoal
    pearl: '#F8F6F0',          // Pearl White
    onyx: '#0F0F0F'            // Onyx Black
  },
  
  // Elegant, luxury typography
  fonts: {
    heading: '"Playfair Display", "Cormorant Garamond", serif',
    body: '"Source Sans Pro", "Lato", sans-serif',
    accent: '"Cinzel", "Trajan Pro", serif',
    price: '"Oswald", "Roboto Condensed", sans-serif'
  },
  
  // Advanced styling properties
  styling: {
    borderRadius: '8px',           // Refined curves
    borderRadiusLg: '15px',
    shadow: '0 15px 45px rgba(28, 28, 28, 0.15), 0 5px 25px rgba(0, 0, 0, 0.1)',
    shadowLg: '0 25px 75px rgba(28, 28, 28, 0.2), 0 10px 50px rgba(0, 0, 0, 0.15)',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    
    // Luxury patterns
    diamondPattern: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.03"%3E%3Cpath d="M20 0l20 20-20 20L0 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    luxuryTexture: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C0C0C0" fill-opacity="0.02"%3E%3Cpath d="M30 30m-25 0a25 25 0 1 1 50 0a25 25 0 1 1 -50 0"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
  },
  
  // Component-specific styling
  components: {
    hero: {
      background: 'linear-gradient(135deg, rgba(28, 28, 28, 0.95), rgba(192, 192, 192, 0.3)), url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%231C1C1C" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23D4AF37" stroke-width="0.5" opacity="0.2"%3E%3Cpath d="M0 0h1200M0 200h1200M0 400h1200M0 600h1200M400 0v600M800 0v600"/%3E%3C/g%3E%3C/svg%3E")',
      overlay: 'rgba(28, 28, 28, 0.3)',
      textAlign: 'center',
      minHeight: '85vh'
    },
    
    buttons: {
      primary: {
        background: 'linear-gradient(135deg, #1C1C1C, #000000)',
        border: '2px solid #D4AF37',
        color: '#FFFFFF',
        fontWeight: '600',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        padding: '16px 32px',
        fontSize: '14px',
        boxShadow: '0 8px 25px rgba(28, 28, 28, 0.3), inset 0 1px 0 rgba(212, 175, 55, 0.2)',
        hoverTransform: 'translateY(-3px) scale(1.02)',
        hoverShadow: '0 12px 35px rgba(28, 28, 28, 0.4)'
      },
      
      secondary: {
        background: 'transparent',
        border: '2px solid #C0C0C0',
        color: '#C0C0C0',
        fontWeight: '500',
        letterSpacing: '0.3px',
        textTransform: 'uppercase',
        hoverBackground: '#C0C0C0',
        hoverColor: '#1C1C1C'
      }
    },
    
    cards: {
      background: 'rgba(255, 255, 255, 0.98)',
      border: '1px solid rgba(192, 192, 192, 0.2)',
      borderRadius: '15px',
      boxShadow: '0 15px 45px rgba(28, 28, 28, 0.15), 0 5px 25px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      hoverTransform: 'translateY(-12px) scale(1.02)',
      hoverShadow: '0 25px 75px rgba(28, 28, 28, 0.2), 0 10px 50px rgba(0, 0, 0, 0.15)'
    },
    
    navigation: {
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(192, 192, 192, 0.2)',
      boxShadow: '0 4px 20px rgba(28, 28, 28, 0.1)'
    }
  },
  
  // Industry-specific elements
  industry_specific: {
    product_style: 'luxury-showcase',
    category_style: 'boutique-grid',
    cart_style: 'premium-checkout',
    review_style: 'testimonial-luxury',
    brand_style: 'signature-display'
  },
  
  // Advanced CSS custom properties
  customCSS: `
    /* Luxury E-commerce Custom Styles */
    .theme-luxury-ecommerce {
      background: #FFFFFF;
      background-image: 
        url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.02"%3E%3Cpath d="M20 0l20 20-20 20L0 20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
        radial-gradient(circle at 15% 15%, rgba(28, 28, 28, 0.02) 0%, transparent 50%),
        radial-gradient(circle at 85% 85%, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
    }
    
    /* Luxury shimmer effects */
    .theme-luxury-ecommerce::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(45deg, transparent 0%, rgba(192, 192, 192, 0.05) 25%, transparent 50%, rgba(212, 175, 55, 0.05) 75%, transparent 100%);
      background-size: 200px 200px;
      animation: luxuryShimmer 20s linear infinite;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes luxuryShimmer {
      0% { background-position: 0% 0%; }
      100% { background-position: 200px 200px; }
    }
    
    /* Premium hero section */
    .theme-luxury-ecommerce .hero {
      position: relative;
      overflow: hidden;
      background: 
        linear-gradient(135deg, rgba(28, 28, 28, 0.95), rgba(192, 192, 192, 0.3)),
        url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%231C1C1C" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23D4AF37" stroke-width="0.5" opacity="0.2"%3E%3Cpath d="M0 0h1200M0 200h1200M0 400h1200M0 600h1200M400 0v600M800 0v600"/%3E%3C/g%3E%3C/svg%3E");
    }
    
    .theme-luxury-ecommerce .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%),
        radial-gradient(ellipse at 20% 80%, rgba(192, 192, 192, 0.1) 0%, transparent 50%);
      animation: luxuryGlow 10s ease-in-out infinite alternate;
      pointer-events: none;
    }
    
    @keyframes luxuryGlow {
      0% { opacity: 0.4; }
      100% { opacity: 0.8; }
    }
    
    /* Product showcase cards */
    .theme-luxury-ecommerce .card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(192, 192, 192, 0.2);
      border-radius: 15px;
      position: relative;
      overflow: hidden;
    }
    
    .theme-luxury-ecommerce .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #1C1C1C, #D4AF37, #C0C0C0);
      transform: scaleX(0);
      transition: transform 0.6s ease;
    }
    
    .theme-luxury-ecommerce .card:hover::before {
      transform: scaleX(1);
    }
    
    .theme-luxury-ecommerce .card::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 80px;
      height: 100%;
      background: 
        linear-gradient(135deg, transparent, rgba(212, 175, 55, 0.05));
      transform: skewX(-15deg);
      transition: all 0.4s ease;
      opacity: 0;
    }
    
    .theme-luxury-ecommerce .card:hover::after {
      opacity: 1;
      transform: skewX(-15deg) translateX(20px);
    }
    
    /* Luxury typography */
    .theme-luxury-ecommerce h1,
    .theme-luxury-ecommerce h2,
    .theme-luxury-ecommerce h3 {
      color: #1C1C1C;
      position: relative;
    }
    
    .theme-luxury-ecommerce .hero-title {
      font-size: 4rem;
      font-weight: 300;
      letter-spacing: 3px;
      margin-bottom: 2rem;
      color: #FFFFFF;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      position: relative;
    }
    
    .theme-luxury-ecommerce .hero-title::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    }
    
    .theme-luxury-ecommerce .section-title {
      position: relative;
      margin-bottom: 3rem;
      font-weight: 300;
      letter-spacing: 1px;
    }
    
    .theme-luxury-ecommerce .section-title::before {
      content: '◆';
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.5rem;
      color: #D4AF37;
    }
    
    /* Premium shopping buttons */
    .theme-luxury-ecommerce .btn-primary {
      background: linear-gradient(135deg, #1C1C1C, #000000);
      border: 2px solid #D4AF37;
      color: #FFFFFF;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: 'uppercase',
      position: relative;
      overflow: hidden;
      box-shadow: 
        0 8px 25px rgba(28, 28, 28, 0.3),
        inset 0 1px 0 rgba(212, 175, 55, 0.2);
    }
    
    .theme-luxury-ecommerce .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
      transition: left 0.6s ease;
    }
    
    .theme-luxury-ecommerce .btn-primary:hover::before {
      left: 100%;
    }
    
    .theme-luxury-ecommerce .btn-primary:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 
        0 12px 35px rgba(28, 28, 28, 0.4),
        inset 0 1px 0 rgba(212, 175, 55, 0.3);
    }
    
    /* Sophisticated navigation */
    .theme-luxury-ecommerce .navbar {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(192, 192, 192, 0.2);
      box-shadow: 0 4px 20px rgba(28, 28, 28, 0.1);
    }
    
    .theme-luxury-ecommerce .nav-link {
      color: #2C3E50;
      font-weight: 400;
      letter-spacing: 0.5px;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-luxury-ecommerce .nav-link::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #1C1C1C, #D4AF37);
      transition: width 0.3s ease;
    }
    
    .theme-luxury-ecommerce .nav-link:hover {
      color: #1C1C1C;
      transform: translateY(-1px);
    }
    
    .theme-luxury-ecommerce .nav-link:hover::after {
      width: 100%;
    }
    
    /* Product showcase cards */
    .theme-luxury-ecommerce .product-card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(192, 192, 192, 0.2);
      border-radius: 15px;
      overflow: hidden;
      position: relative;
      transition: all 0.4s ease;
      box-shadow: 0 10px 30px rgba(28, 28, 28, 0.1);
    }
    
    .theme-luxury-ecommerce .product-card:hover {
      transform: translateY(-10px) scale(1.02);
      border-color: #D4AF37;
      box-shadow: 
        0 20px 60px rgba(28, 28, 28, 0.2),
        0 8px 40px rgba(0, 0, 0, 0.1);
    }
    
    .theme-luxury-ecommerce .product-image {
      height: 250px;
      background: linear-gradient(45deg, #F8F8F8, #FFFFFF);
      position: relative;
      overflow: hidden;
    }
    
    .theme-luxury-ecommerce .product-image::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(28, 28, 28, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .theme-luxury-ecommerce .product-card:hover .product-image::after {
      opacity: 1;
    }
    
    .theme-luxury-ecommerce .product-info {
      padding: 2rem;
      background: #FFFFFF;
    }
    
    .theme-luxury-ecommerce .product-title {
      font-size: 1.3rem;
      font-weight: 400;
      color: #1C1C1C;
      margin-bottom: 0.5rem;
      letter-spacing: 0.3px;
    }
    
    .theme-luxury-ecommerce .product-brand {
      font-size: 0.9rem;
      color: #C0C0C0;
      font-weight: 500;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .theme-luxury-ecommerce .product-price {
      font-size: 1.5rem;
      color: #D4AF37;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    
    .theme-luxury-ecommerce .product-rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .theme-luxury-ecommerce .stars {
      color: #D4AF37;
    }
    
    /* Category showcase */
    .theme-luxury-ecommerce .category-card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(192, 192, 192, 0.2);
      border-radius: 15px;
      padding: 3rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-luxury-ecommerce .category-card::before {
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
    
    .theme-luxury-ecommerce .category-card:hover::before {
      opacity: 1;
      transform: rotate(45deg) scale(1.1);
    }
    
    .theme-luxury-ecommerce .category-card:hover {
      transform: translateY(-12px) scale(1.02);
      border-color: #D4AF37;
      box-shadow: 
        0 25px 70px rgba(28, 28, 28, 0.2),
        0 10px 50px rgba(0, 0, 0, 0.1);
    }
    
    .theme-luxury-ecommerce .category-icon {
      font-size: 3.5rem;
      color: #1C1C1C;
      margin-bottom: 1.5rem;
      display: block;
      transition: all 0.3s ease;
    }
    
    .theme-luxury-ecommerce .category-card:hover .category-icon {
      transform: scale(1.1);
      color: #D4AF37;
    }
    
    /* Shopping cart and checkout */
    .theme-luxury-ecommerce .cart-item {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(192, 192, 192, 0.2);
      border-radius: 10px;
      padding: 1.5rem;
      margin-bottom: 1rem;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-luxury-ecommerce .cart-item:hover {
      transform: translateX(10px);
      border-color: #D4AF37;
      box-shadow: 0 8px 25px rgba(28, 28, 28, 0.1);
    }
    
    .theme-luxury-ecommerce .cart-total {
      background: linear-gradient(135deg, #1C1C1C, #000000);
      color: #FFFFFF;
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      position: relative;
    }
    
    .theme-luxury-ecommerce .cart-total::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #D4AF37, #C0C0C0, #D4AF37);
    }
    
    /* Customer reviews */
    .theme-luxury-ecommerce .review {
      background: rgba(248, 248, 248, 0.8);
      border: 1px solid rgba(192, 192, 192, 0.2);
      border-radius: 15px;
      padding: 2rem;
      position: relative;
      margin: 2rem 0;
    }
    
    .theme-luxury-ecommerce .review::before {
      content: '★★★★★';
      position: absolute;
      top: -15px;
      left: 25px;
      color: #D4AF37;
      background: #FFFFFF;
      padding: 0 10px;
      font-size: 1rem;
    }
    
    .theme-luxury-ecommerce .review::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #D4AF37, transparent);
      border-radius: 0 0 15px 15px;
    }
    
    /* Luxury footer */
    .theme-luxury-ecommerce .footer {
      background: linear-gradient(135deg, #1C1C1C, #000000);
      color: #FFFFFF;
      border-top: 3px solid #D4AF37;
      position: relative;
    }
    
    .theme-luxury-ecommerce .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #D4AF37, #C0C0C0, transparent);
    }
    
    /* Featured product highlight */
    .theme-luxury-ecommerce .featured-product {
      position: relative;
    }
    
    .theme-luxury-ecommerce .featured-product::before {
      content: 'FEATURED';
      position: absolute;
      top: 15px;
      left: 15px;
      background: #D4AF37;
      color: #000000;
      padding: 5px 15px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      z-index: 2;
    }
    
    .theme-luxury-ecommerce .featured-product::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid #D4AF37;
      border-radius: 15px;
      pointer-events: none;
      animation: featuredGlow 3s ease-in-out infinite alternate;
    }
    
    @keyframes featuredGlow {
      0% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
      100% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .theme-luxury-ecommerce .hero-title {
        font-size: 2.5rem;
        letter-spacing: 1px;
      }
      
      .theme-luxury-ecommerce .card {
        margin-bottom: 2rem;
      }
    }
    
    /* Elegant entrance animations */
    .theme-luxury-ecommerce .luxury-fade-in {
      animation: luxuryFadeIn 0.8s ease-out;
    }
    
    @keyframes luxuryFadeIn {
      from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    /* Shopping bag animation */
    .theme-luxury-ecommerce .shopping-bag {
      position: relative;
    }
    
    .theme-luxury-ecommerce .shopping-bag::after {
      content: '🛍️';
      position: absolute;
      top: 50%;
      right: -50px;
      font-size: 2rem;
      animation: bagFloat 4s ease-in-out infinite;
      pointer-events: none;
    }
    
    @keyframes bagFloat {
      0%, 100% { transform: translateY(-50%) rotate(-5deg); }
      50% { transform: translateY(-60%) rotate(5deg); }
    }
  `,
  
  // Features and tags
  features: ['Ultra-Premium', 'Sophisticated', 'Luxury Shopping', 'Elegant', 'Exclusive'],
  
  // Target audience
  target_audience: 'Luxury brands, premium products, designer goods, exclusive retail, high-end e-commerce',
  
  // Mood and atmosphere
  mood: 'Sophisticated, luxurious, elegant, exclusive, premium, refined',
  
  // Image generation prompts
  images: {
    hero: 'luxury retail store, premium shopping experience, elegant product displays, sophisticated atmosphere',
    products: 'luxury goods, premium products, elegant packaging, high-end merchandise',
    lifestyle: 'luxury lifestyle, premium shopping, elegant customers, sophisticated retail',
    filter: 'contrast(110%) brightness(105%) saturate(95%) sepia(5%)'
  }
};

// Register the theme
if (typeof window !== 'undefined' && window.themeManager) {
  window.themeManager.registerTheme(luxuryEcommerceTheme);
  console.log('🛒 Registered Luxury E-commerce theme');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = luxuryEcommerceTheme;
}