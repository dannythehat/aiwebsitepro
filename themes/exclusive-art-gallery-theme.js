/**
 * 🎭 EXCLUSIVE ART GALLERY THEME
 * "Avant-Garde Sanctuary" - Ultra-sophisticated art gallery with dramatic contrasts
 * 
 * This theme creates a museum-quality atmosphere perfect for art galleries,
 * contemporary art spaces, artist portfolios, and cultural institutions.
 */

const exclusiveArtGalleryTheme = {
  id: 'exclusive-art-gallery',
  name: 'Avant-Garde Sanctuary',
  industry: 'art',
  description: 'Ultra-sophisticated art gallery with pure whites, dramatic blacks, and artistic flair',
  
  // Color palette inspired by modern art galleries, museum spaces, and artistic sophistication
  colors: {
    primary: '#000000',        // Pure Black (Drama)
    secondary: '#FFFFFF',      // Pure White (Clean)
    accent: '#FF6B35',         // Gallery Orange (Accent)
    background: '#FFFFFF',     // Gallery White (Pure)
    text: '#000000',           // Black Text (Contrast)
    light: '#F8F8F8',          // Off White (Subtle)
    dark: '#1A1A1A',           // Deep Black (Bold)
    white: '#FFFFFF',          // Pure White
    charcoal: '#36454F',       // Charcoal (Sophisticated)
    silver: '#C0C0C0',         // Silver (Refined)
    gold: '#FFD700',           // Gold (Luxury)
    crimson: '#DC143C'         // Crimson (Passion)
  },
  
  // Sophisticated, artistic typography
  fonts: {
    heading: '"Helvetica Neue", "Arial", sans-serif',
    body: '"Helvetica", "Arial", sans-serif',
    accent: '"Futura", "Century Gothic", sans-serif',
    artistic: '"Didot", "Bodoni MT", serif'
  },
  
  // Advanced styling properties
  styling: {
    borderRadius: '0px',           // Sharp, gallery edges
    borderRadiusLg: '2px',
    shadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1)',
    shadowLg: '0 30px 90px rgba(0, 0, 0, 0.2), 0 15px 60px rgba(0, 0, 0, 0.15)',
    textShadow: 'none',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    
    // Artistic patterns
    gridPattern: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Cpath d="M0 0h40v1H0V0zm0 39h40v1H0v-1zM1 0v40h1V0H1zm38 0v40h1V0h-1z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    framePattern: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FF6B35" fill-opacity="0.03"%3E%3Crect x="10" y="10" width="40" height="40" rx="2"/%3E%3Crect x="15" y="15" width="30" height="30" rx="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
  },
  
  // Component-specific styling
  components: {
    hero: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 248, 248, 0.95)), url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23FFFFFF" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23000000" stroke-width="0.5" opacity="0.1"%3E%3Cpath d="M0 0h1200M0 150h1200M0 300h1200M0 450h1200M0 600h1200M300 0v600M600 0v600M900 0v600"/%3E%3C/g%3E%3C/svg%3E")',
      overlay: 'rgba(0, 0, 0, 0.05)',
      textAlign: 'center',
      minHeight: '90vh'
    },
    
    buttons: {
      primary: {
        background: '#000000',
        border: '2px solid #000000',
        color: '#FFFFFF',
        fontWeight: '500',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        padding: '16px 32px',
        fontSize: '14px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
        hoverTransform: 'translateY(-3px) scale(1.02)',
        hoverShadow: '0 12px 35px rgba(0, 0, 0, 0.3)'
      },
      
      secondary: {
        background: 'transparent',
        border: '2px solid #FF6B35',
        color: '#FF6B35',
        fontWeight: '500',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        hoverBackground: '#FF6B35',
        hoverColor: '#FFFFFF'
      }
    },
    
    cards: {
      background: '#FFFFFF',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '2px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'none',
      hoverTransform: 'translateY(-15px) scale(1.02)',
      hoverShadow: '0 30px 90px rgba(0, 0, 0, 0.2), 0 15px 60px rgba(0, 0, 0, 0.15)'
    },
    
    navigation: {
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
    }
  },
  
  // Industry-specific elements
  industry_specific: {
    artwork_style: 'gallery-showcase',
    artist_style: 'curator-profiles',
    exhibition_style: 'museum-display',
    collection_style: 'artistic-grid',
    contact_style: 'curator-form'
  },
  
  // Advanced CSS custom properties
  customCSS: `
    /* Exclusive Art Gallery Custom Styles */
    .theme-exclusive-art-gallery {
      background: #FFFFFF;
      background-image: 
        url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.01"%3E%3Cpath d="M0 0h40v1H0V0zm0 39h40v1H0v-1zM1 0v40h1V0H1zm38 0v40h1V0h-1z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    
    /* Gallery lighting effects */
    .theme-exclusive-art-gallery::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at 25% 25%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
        radial-gradient(ellipse at 75% 75%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.02) 0%, transparent 70%);
      animation: galleryLighting 15s ease-in-out infinite alternate;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes galleryLighting {
      0% { opacity: 0.3; }
      100% { opacity: 0.7; }
    }
    
    /* Museum-quality hero section */
    .theme-exclusive-art-gallery .hero {
      position: relative;
      overflow: hidden;
      background: 
        linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 248, 248, 0.95)),
        url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23FFFFFF" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23000000" stroke-width="0.5" opacity="0.05"%3E%3Cpath d="M0 0h1200M0 150h1200M0 300h1200M0 450h1200M0 600h1200M300 0v600M600 0v600M900 0v600"/%3E%3C/g%3E%3C/svg%3E");
    }
    
    .theme-exclusive-art-gallery .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, transparent 70%),
        radial-gradient(ellipse at 30% 70%, rgba(0, 0, 0, 0.05) 0%, transparent 50%);
      animation: spotlightEffect 12s ease-in-out infinite alternate;
      pointer-events: none;
    }
    
    @keyframes spotlightEffect {
      0% { opacity: 0.5; transform: scale(1); }
      100% { opacity: 1; transform: scale(1.1); }
    }
    
    /* Gallery artwork cards */
    .theme-exclusive-art-gallery .card {
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-exclusive-art-gallery .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.05));
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    
    .theme-exclusive-art-gallery .card:hover::before {
      opacity: 1;
    }
    
    .theme-exclusive-art-gallery .card::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      border: 1px solid rgba(255, 107, 53, 0.3);
      border-radius: 1px;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    
    .theme-exclusive-art-gallery .card:hover::after {
      opacity: 1;
    }
    
    /* Sophisticated typography */
    .theme-exclusive-art-gallery h1,
    .theme-exclusive-art-gallery h2,
    .theme-exclusive-art-gallery h3 {
      color: #000000;
      position: relative;
      font-weight: 300;
    }
    
    .theme-exclusive-art-gallery .hero-title {
      font-size: 4rem;
      font-weight: 100;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 2rem;
      color: #000000;
      position: relative;
    }
    
    .theme-exclusive-art-gallery .hero-title::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 1px;
      background: #000000;
    }
    
    .theme-exclusive-art-gallery .section-title {
      position: relative;
      margin-bottom: 4rem;
      font-weight: 200;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    
    .theme-exclusive-art-gallery .section-title::before {
      content: '';
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 1px;
      background: #FF6B35;
    }
    
    /* Gallery buttons */
    .theme-exclusive-art-gallery .btn-primary {
      background: #000000;
      border: 2px solid #000000;
      color: #FFFFFF;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      position: relative;
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    }
    
    .theme-exclusive-art-gallery .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
    }
    
    .theme-exclusive-art-gallery .btn-primary:hover::before {
      left: 100%;
    }
    
    .theme-exclusive-art-gallery .btn-primary:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
    }
    
    /* Minimalist navigation */
    .theme-exclusive-art-gallery .navbar {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }
    
    .theme-exclusive-art-gallery .nav-link {
      color: #000000;
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 0.9rem;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-exclusive-art-gallery .nav-link::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 1px;
      background: #FF6B35;
      transition: width 0.3s ease;
    }
    
    .theme-exclusive-art-gallery .nav-link:hover {
      color: #FF6B35;
    }
    
    .theme-exclusive-art-gallery .nav-link:hover::after {
      width: 100%;
    }
    
    /* Artwork showcase cards */
    .theme-exclusive-art-gallery .artwork-card {
      background: #FFFFFF;
      border: none;
      border-radius: 0;
      padding: 0;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .theme-exclusive-art-gallery .artwork-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
    }
    
    .theme-exclusive-art-gallery .artwork-image {
      width: 100%;
      height: 300px;
      background: linear-gradient(45deg, #F8F8F8, #FFFFFF);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;
    }
    
    .theme-exclusive-art-gallery .artwork-image::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(255, 107, 53, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .theme-exclusive-art-gallery .artwork-card:hover .artwork-image::after {
      opacity: 1;
    }
    
    .theme-exclusive-art-gallery .artwork-info {
      padding: 2rem;
      background: #FFFFFF;
    }
    
    .theme-exclusive-art-gallery .artwork-title {
      font-size: 1.3rem;
      font-weight: 300;
      color: #000000;
      margin-bottom: 0.5rem;
      letter-spacing: 0.5px;
    }
    
    .theme-exclusive-art-gallery .artwork-artist {
      font-size: 1rem;
      color: #FF6B35;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    
    .theme-exclusive-art-gallery .artwork-price {
      font-size: 1.1rem;
      color: #000000;
      font-weight: 600;
    }
    
    /* Exhibition cards */
    .theme-exclusive-art-gallery .exhibition-card {
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      padding: 3rem;
      text-align: center;
      position: relative;
      transition: all 0.4s ease;
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
    }
    
    .theme-exclusive-art-gallery .exhibition-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #000000, #FF6B35, #000000);
      transform: scaleX(0);
      transition: transform 0.6s ease;
    }
    
    .theme-exclusive-art-gallery .exhibition-card:hover::before {
      transform: scaleX(1);
    }
    
    .theme-exclusive-art-gallery .exhibition-card:hover {
      transform: translateY(-12px) scale(1.01);
      box-shadow: 0 25px 75px rgba(0, 0, 0, 0.15);
    }
    
    /* Artist profiles */
    .theme-exclusive-art-gallery .artist-card {
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      padding: 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-exclusive-art-gallery .artist-card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, transparent, #FF6B35, transparent);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }
    
    .theme-exclusive-art-gallery .artist-card:hover::after {
      transform: scaleX(1);
    }
    
    .theme-exclusive-art-gallery .artist-card:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    }
    
    /* Gallery grid layout */
    .theme-exclusive-art-gallery .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
      margin-top: 3rem;
    }
    
    .theme-exclusive-art-gallery .gallery-item {
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0;
      overflow: hidden;
      position: relative;
      transition: all 0.4s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .theme-exclusive-art-gallery .gallery-item:hover {
      transform: scale(1.03);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    }
    
    .theme-exclusive-art-gallery .gallery-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(0, 0, 0, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .theme-exclusive-art-gallery .gallery-item:hover::after {
      opacity: 1;
    }
    
    /* Sophisticated footer */
    .theme-exclusive-art-gallery .footer {
      background: #000000;
      color: #FFFFFF;
      border-top: 1px solid #FF6B35;
      position: relative;
    }
    
    .theme-exclusive-art-gallery .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #FF6B35, transparent);
    }
    
    /* Quote styling for artist statements */
    .theme-exclusive-art-gallery .artist-quote {
      background: #F8F8F8;
      border-left: 3px solid #FF6B35;
      border-radius: 0;
      padding: 2rem;
      position: relative;
      margin: 2rem 0;
      font-style: italic;
    }
    
    .theme-exclusive-art-gallery .artist-quote::before {
      content: '"';
      position: absolute;
      top: -10px;
      left: 20px;
      font-size: 4rem;
      color: #000000;
      opacity: 0.2;
      font-family: "Didot", serif;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .theme-exclusive-art-gallery .hero-title {
        font-size: 2.5rem;
        letter-spacing: 2px;
      }
      
      .theme-exclusive-art-gallery .gallery-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .theme-exclusive-art-gallery .card {
        margin-bottom: 2rem;
      }
    }
    
    /* Elegant entrance animations */
    .theme-exclusive-art-gallery .fade-in {
      animation: galleryFadeIn 0.8s ease-out;
    }
    
    @keyframes galleryFadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Spotlight effect for featured artwork */
    .theme-exclusive-art-gallery .featured-artwork {
      position: relative;
    }
    
    .theme-exclusive-art-gallery .featured-artwork::before {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      background: 
        radial-gradient(ellipse at center, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
      animation: spotlight 8s ease-in-out infinite alternate;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes spotlight {
      0% { opacity: 0.3; transform: scale(1); }
      100% { opacity: 0.8; transform: scale(1.1); }
    }
  `,
  
  // Features and tags
  features: ['Sophisticated', 'Minimalist', 'Museum-Quality', 'Artistic', 'Exclusive'],
  
  // Target audience
  target_audience: 'Art galleries, museums, artist portfolios, cultural institutions, contemporary art spaces',
  
  // Mood and atmosphere
  mood: 'Sophisticated, minimalist, artistic, refined, exclusive, museum-like',
  
  // Image generation prompts
  images: {
    hero: 'modern art gallery interior, white walls, dramatic lighting, contemporary art displays',
    gallery: 'art exhibitions, contemporary artwork, gallery spaces, artistic installations',
    artists: 'professional artists, gallery curators, art professionals, creative portraits',
    filter: 'contrast(110%) brightness(105%) saturate(95%)'
  }
};

// Register the theme
if (typeof window !== 'undefined' && window.themeManager) {
  window.themeManager.registerTheme(exclusiveArtGalleryTheme);
  console.log('🎭 Registered Exclusive Art Gallery theme');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = exclusiveArtGalleryTheme;
}