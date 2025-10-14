/**
 * ⚖️ LUXURY LAW FIRM THEME
 * "Constitutional Elite" - Ultra-premium law firm with classical elegance and authority
 * 
 * This theme creates an atmosphere of legal authority, classical sophistication,
 * and premium professional services for top-tier law firms.
 */

const luxuryLawFirmTheme = {
  id: 'luxury-law-firm',
  name: 'Constitutional Elite',
  industry: 'law',
  description: 'Ultra-premium law firm with deep navy, gold accents, classical elegance, and authoritative sophistication',
  
  // Color palette inspired by Supreme Court, prestigious law firms, and classical authority
  colors: {
    primary: '#1B2951',        // Deep Navy (Authority)
    secondary: '#2C3E50',      // Slate Blue (Professional)
    accent: '#D4AF37',         // Legal Gold (Prestige)
    background: '#FFFFFF',     // Pure White (Clean)
    text: '#2C3E50',           // Dark Blue Gray (Readable)
    light: '#F8F9FA',          // Light Gray (Subtle)
    dark: '#0F1419',           // Deep Navy Black (Strong)
    white: '#FFFFFF',          // Pure White
    burgundy: '#800020',       // Legal Burgundy (Traditional)
    silver: '#C0C0C0',         // Silver (Refined)
    cream: '#F5F5DC',          // Cream (Elegant)
    marble: '#F8F8FF'          // Ghost White (Marble)
  },
  
  // Classical, authoritative typography
  fonts: {
    heading: '"Playfair Display", "Cormorant Garamond", "Crimson Text", serif',
    body: '"Source Serif Pro", "Lora", "Crimson Text", serif',
    accent: '"Cinzel", "Trajan Pro", serif',
    legal: '"Times New Roman", "Georgia", serif'
  },
  
  // Advanced styling properties
  styling: {
    borderRadius: '2px',           // Sharp, authoritative edges
    borderRadiusLg: '6px',
    shadow: '0 8px 32px rgba(27, 41, 81, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)',
    shadowLg: '0 16px 64px rgba(27, 41, 81, 0.2), 0 8px 32px rgba(0, 0, 0, 0.15)',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    
    // Classical patterns
    marbleTexture: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.03"%3E%3Cpath d="M0 0h60v60H0V0zm30 30a30 30 0 0 1 0-60 30 30 0 0 1 0 60z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    columnPattern: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%231B2951" fill-opacity="0.02"%3E%3Cpath d="M20 0v40M0 20h40"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
  },
  
  // Component-specific styling
  components: {
    hero: {
      background: 'linear-gradient(135deg, rgba(27, 41, 81, 0.95), rgba(44, 62, 80, 0.9)), url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%231B2951" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23D4AF37" stroke-width="0.5" opacity="0.2"%3E%3Cpath d="M0 0h1200M0 150h1200M0 300h1200M0 450h1200M0 600h1200M300 0v600M600 0v600M900 0v600"/%3E%3C/g%3E%3C/svg%3E")',
      overlay: 'rgba(27, 41, 81, 0.3)',
      textAlign: 'center',
      minHeight: '85vh'
    },
    
    buttons: {
      primary: {
        background: 'linear-gradient(135deg, #D4AF37, #B8941F)',
        border: '2px solid #D4AF37',
        color: '#1B2951',
        fontWeight: '600',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        padding: '16px 32px',
        fontSize: '14px',
        boxShadow: '0 6px 20px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        hoverTransform: 'translateY(-2px) scale(1.02)',
        hoverShadow: '0 8px 30px rgba(212, 175, 55, 0.4)'
      },
      
      secondary: {
        background: 'transparent',
        border: '2px solid #1B2951',
        color: '#1B2951',
        fontWeight: '600',
        letterSpacing: '0.3px',
        textTransform: 'uppercase',
        hoverBackground: '#1B2951',
        hoverColor: '#FFFFFF'
      }
    },
    
    cards: {
      background: 'rgba(255, 255, 255, 0.98)',
      border: '1px solid rgba(212, 175, 55, 0.2)',
      borderRadius: '6px',
      boxShadow: '0 8px 32px rgba(27, 41, 81, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      hoverTransform: 'translateY(-8px) scale(1.01)',
      hoverShadow: '0 16px 64px rgba(27, 41, 81, 0.2), 0 8px 32px rgba(0, 0, 0, 0.15)'
    },
    
    navigation: {
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      boxShadow: '0 4px 20px rgba(27, 41, 81, 0.1)'
    }
  },
  
  // Industry-specific elements
  industry_specific: {
    practice_style: 'classical-columns',
    attorney_style: 'distinguished-profiles',
    testimonial_style: 'legal-testimonials',
    case_style: 'victory-showcase',
    contact_style: 'consultation-form'
  },
  
  // Advanced CSS custom properties
  customCSS: `
    /* Luxury Law Firm Custom Styles */
    .theme-luxury-law-firm {
      background: #FFFFFF;
      background-image: 
        url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.02"%3E%3Cpath d="M0 0h60v60H0V0zm30 30a30 30 0 0 1 0-60 30 30 0 0 1 0 60z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
        radial-gradient(circle at 10% 10%, rgba(27, 41, 81, 0.02) 0%, transparent 50%),
        radial-gradient(circle at 90% 90%, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
    }
    
    /* Classical column effects */
    .theme-luxury-law-firm::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.02) 25%, transparent 50%, rgba(27, 41, 81, 0.02) 75%, transparent 100%);
      background-size: 200px 100%;
      animation: classicalFlow 30s linear infinite;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes classicalFlow {
      0% { background-position: 0% 0%; }
      100% { background-position: 200px 0%; }
    }
    
    /* Authoritative hero section */
    .theme-luxury-law-firm .hero {
      position: relative;
      overflow: hidden;
      background: 
        linear-gradient(135deg, rgba(27, 41, 81, 0.95), rgba(44, 62, 80, 0.9)),
        url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%231B2951" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23D4AF37" stroke-width="0.5" opacity="0.2"%3E%3Cpath d="M0 0h1200M0 150h1200M0 300h1200M0 450h1200M0 600h1200M300 0v600M600 0v600M900 0v600"/%3E%3C/g%3E%3C/svg%3E");
    }
    
    .theme-luxury-law-firm .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%),
        radial-gradient(ellipse at 20% 80%, rgba(27, 41, 81, 0.1) 0%, transparent 50%);
      animation: authorityGlow 10s ease-in-out infinite alternate;
      pointer-events: none;
    }
    
    @keyframes authorityGlow {
      0% { opacity: 0.3; }
      100% { opacity: 0.7; }
    }
    
    /* Premium legal cards */
    .theme-luxury-law-firm .card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 6px;
      position: relative;
      overflow: hidden;
    }
    
    .theme-luxury-law-firm .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #1B2951, #D4AF37, #1B2951);
      transform: scaleX(0);
      transition: transform 0.6s ease;
    }
    
    .theme-luxury-law-firm .card:hover::before {
      transform: scaleX(1);
    }
    
    .theme-luxury-law-firm .card::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 60px;
      height: 100%;
      background: 
        linear-gradient(135deg, transparent, rgba(212, 175, 55, 0.05));
      transform: skewX(-10deg);
      transition: all 0.4s ease;
      opacity: 0;
    }
    
    .theme-luxury-law-firm .card:hover::after {
      opacity: 1;
      transform: skewX(-10deg) translateX(10px);
    }
    
    /* Distinguished typography */
    .theme-luxury-law-firm h1,
    .theme-luxury-law-firm h2,
    .theme-luxury-law-firm h3 {
      color: #1B2951;
      position: relative;
    }
    
    .theme-luxury-law-firm .hero-title {
      font-size: 4rem;
      font-weight: 400;
      letter-spacing: 2px;
      margin-bottom: 2rem;
      color: #FFFFFF;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      position: relative;
    }
    
    .theme-luxury-law-firm .hero-title::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 3px;
      background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    }
    
    .theme-luxury-law-firm .section-title {
      position: relative;
      margin-bottom: 3rem;
    }
    
    .theme-luxury-law-firm .section-title::before {
      content: '⚖';
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;
      color: #D4AF37;
      opacity: 0.7;
    }
    
    /* Legal authority buttons */
    .theme-luxury-law-firm .btn-primary {
      background: linear-gradient(135deg, #D4AF37, #B8941F);
      border: 2px solid #D4AF37;
      color: #1B2951;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      position: relative;
      overflow: hidden;
      box-shadow: 
        0 6px 20px rgba(212, 175, 55, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    .theme-luxury-law-firm .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.6s ease;
    }
    
    .theme-luxury-law-firm .btn-primary:hover::before {
      left: 100%;
    }
    
    .theme-luxury-law-firm .btn-primary:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 
        0 8px 30px rgba(212, 175, 55, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    
    /* Professional navigation */
    .theme-luxury-law-firm .navbar {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(212, 175, 55, 0.2);
      box-shadow: 0 4px 20px rgba(27, 41, 81, 0.1);
    }
    
    .theme-luxury-law-firm .nav-link {
      color: #2C3E50;
      font-weight: 500;
      letter-spacing: 0.3px;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-luxury-law-firm .nav-link::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #1B2951, #D4AF37);
      transition: width 0.3s ease;
    }
    
    .theme-luxury-law-firm .nav-link:hover {
      color: #1B2951;
      transform: translateY(-1px);
    }
    
    .theme-luxury-law-firm .nav-link:hover::after {
      width: 100%;
    }
    
    /* Practice area cards */
    .theme-luxury-law-firm .practice-card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-left: 4px solid #1B2951;
      border-radius: 6px;
      padding: 2.5rem;
      position: relative;
      transition: all 0.4s ease;
    }
    
    .theme-luxury-law-firm .practice-card::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent);
      transition: width 0.4s ease;
    }
    
    .theme-luxury-law-firm .practice-card:hover::before {
      width: 100px;
    }
    
    .theme-luxury-law-firm .practice-card:hover {
      transform: translateY(-8px) scale(1.01);
      border-left-color: #D4AF37;
      box-shadow: 
        0 16px 64px rgba(27, 41, 81, 0.2),
        0 8px 32px rgba(0, 0, 0, 0.15);
    }
    
    .theme-luxury-law-firm .practice-card h3 {
      color: #1B2951;
      margin-bottom: 1rem;
      position: relative;
    }
    
    .theme-luxury-law-firm .practice-card h3::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background: #D4AF37;
      transition: width 0.3s ease;
    }
    
    .theme-luxury-law-firm .practice-card:hover h3::after {
      width: 80px;
    }
    
    /* Attorney profiles */
    .theme-luxury-law-firm .attorney-card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 6px;
      padding: 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-luxury-law-firm .attorney-card::before {
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
    
    .theme-luxury-law-firm .attorney-card:hover::before {
      opacity: 1;
      transform: rotate(45deg) scale(1.1);
    }
    
    .theme-luxury-law-firm .attorney-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 
        0 20px 60px rgba(27, 41, 81, 0.2),
        0 8px 40px rgba(0, 0, 0, 0.1);
    }
    
    /* Legal testimonials */
    .theme-luxury-law-firm .testimonial {
      background: rgba(248, 249, 250, 0.8);
      border-left: 4px solid #D4AF37;
      border-radius: 6px;
      padding: 2.5rem;
      position: relative;
      margin: 2rem 0;
    }
    
    .theme-luxury-law-firm .testimonial::before {
      content: '"';
      position: absolute;
      top: -15px;
      left: 25px;
      font-size: 5rem;
      color: #1B2951;
      opacity: 0.2;
      font-family: "Playfair Display", serif;
    }
    
    .theme-luxury-law-firm .testimonial::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #D4AF37, transparent);
    }
    
    /* Case results showcase */
    .theme-luxury-law-firm .case-result {
      background: linear-gradient(135deg, rgba(27, 41, 81, 0.05), rgba(212, 175, 55, 0.05));
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 6px;
      padding: 2rem;
      text-align: center;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-luxury-law-firm .case-result:hover {
      transform: translateY(-5px);
      border-color: #D4AF37;
      box-shadow: 0 10px 40px rgba(212, 175, 55, 0.2);
    }
    
    .theme-luxury-law-firm .case-amount {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1B2951;
      margin-bottom: 0.5rem;
    }
    
    .theme-luxury-law-firm .case-type {
      color: #D4AF37;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    /* Distinguished footer */
    .theme-luxury-law-firm .footer {
      background: linear-gradient(135deg, #1B2951, #2C3E50);
      color: #FFFFFF;
      border-top: 3px solid #D4AF37;
      position: relative;
    }
    
    .theme-luxury-law-firm .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .theme-luxury-law-firm .hero-title {
        font-size: 2.5rem;
        letter-spacing: 1px;
      }
      
      .theme-luxury-law-firm .card {
        margin-bottom: 2rem;
      }
    }
    
    /* Elegant loading states */
    .theme-luxury-law-firm .loading {
      position: relative;
      overflow: hidden;
    }
    
    .theme-luxury-law-firm .loading::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent);
      animation: legalLoading 2s infinite;
    }
    
    @keyframes legalLoading {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  `,
  
  // Features and tags
  features: ['Ultra-Premium', 'Authoritative', 'Classical', 'Distinguished', 'Professional'],
  
  // Target audience
  target_audience: 'Premium law firms, corporate legal services, litigation specialists, legal consultancies, attorney practices',
  
  // Mood and atmosphere
  mood: 'Authoritative, distinguished, classical, professional, trustworthy, prestigious',
  
  // Image generation prompts
  images: {
    hero: 'prestigious law firm office, classical architecture, mahogany furniture, legal books, professional atmosphere',
    team: 'distinguished attorneys, professional portraits, law office setting, authoritative presence',
    office: 'luxury law firm interior, classical columns, legal library, sophisticated workspace',
    filter: 'contrast(110%) brightness(95%) saturate(105%) sepia(5%)'
  }
};

// Register the theme
if (typeof window !== 'undefined' && window.themeManager) {
  window.themeManager.registerTheme(luxuryLawFirmTheme);
  console.log('⚖️ Registered Luxury Law Firm theme');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = luxuryLawFirmTheme;
}