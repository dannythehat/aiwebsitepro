/**
 * 🏋️ PREMIUM FITNESS STUDIO THEME
 * "Power Elite" - High-energy fitness studio with bold oranges and dynamic animations
 * 
 * This theme creates an energetic, motivational atmosphere perfect for premium gyms,
 * fitness studios, personal trainers, and athletic performance centers.
 */

const premiumFitnessTheme = {
  id: 'premium-fitness',
  name: 'Power Elite',
  industry: 'fitness',
  description: 'High-energy fitness studio with bold oranges, dynamic animations, and motivational design',
  
  // Color palette inspired by energy, strength, and athletic performance
  colors: {
    primary: '#FF6B35',        // Energy Orange (Power)
    secondary: '#FF4757',      // Vibrant Red (Intensity)
    accent: '#FFA726',         // Amber (Energy)
    background: '#FFFFFF',     // Pure White (Clean)
    text: '#2C3E50',           // Dark Blue Gray (Strong)
    light: '#F8F9FA',          // Light Gray (Fresh)
    dark: '#1A1A1A',           // Deep Black (Bold)
    white: '#FFFFFF',          // Pure White
    electric: '#00D4FF',       // Electric Blue (Tech)
    lime: '#32CD32',           // Lime Green (Fresh)
    steel: '#708090',          // Steel Gray (Equipment)
    fire: '#FF4500'            // Fire Orange (Intensity)
  },
  
  // Bold, energetic typography
  fonts: {
    heading: '"Oswald", "Bebas Neue", "Anton", sans-serif',
    body: '"Source Sans Pro", "Open Sans", "Roboto", sans-serif',
    accent: '"Rajdhani", "Exo 2", sans-serif',
    impact: '"Impact", "Anton", sans-serif'
  },
  
  // Advanced styling properties
  styling: {
    borderRadius: '8px',           // Sharp, athletic edges
    borderRadiusLg: '15px',
    shadow: '0 8px 25px rgba(255, 107, 53, 0.3), 0 4px 15px rgba(0, 0, 0, 0.1)',
    shadowLg: '0 15px 45px rgba(255, 107, 53, 0.4), 0 8px 30px rgba(0, 0, 0, 0.15)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Athletic patterns
    geometricPattern: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FF6B35" fill-opacity="0.05"%3E%3Cpath d="M0 0h20v20H0V0zm20 20h20v20H20V20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    hexPattern: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FF4757" fill-opacity="0.03"%3E%3Cpath d="M30 0l25.98 15v30L30 60 4.02 45V15z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
  },
  
  // Component-specific styling
  components: {
    hero: {
      background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(255, 107, 53, 0.8)), url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%231A1A1A" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23FF6B35" stroke-width="1" opacity="0.3"%3E%3Cpath d="M0 0l1200 600M0 600l1200-600M600 0v600M0 300h1200M300 0v600M900 0v600"/%3E%3C/g%3E%3C/svg%3E")',
      overlay: 'rgba(26, 26, 26, 0.4)',
      textAlign: 'center',
      minHeight: '100vh'
    },
    
    buttons: {
      primary: {
        background: 'linear-gradient(135deg, #FF6B35, #FF4757)',
        border: 'none',
        color: '#FFFFFF',
        fontWeight: '700',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        padding: '16px 32px',
        fontSize: '14px',
        boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        hoverTransform: 'translateY(-3px) scale(1.05)',
        hoverShadow: '0 12px 35px rgba(255, 107, 53, 0.6)'
      },
      
      secondary: {
        background: 'transparent',
        border: '2px solid #FF6B35',
        color: '#FF6B35',
        fontWeight: '700',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        hoverBackground: 'rgba(255, 107, 53, 0.1)',
        hoverColor: '#FF6B35',
        hoverBorder: '#FF4757'
      }
    },
    
    cards: {
      background: 'rgba(255, 255, 255, 0.98)',
      border: '1px solid rgba(255, 107, 53, 0.2)',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3), 0 4px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      hoverTransform: 'translateY(-10px) scale(1.02)',
      hoverShadow: '0 15px 45px rgba(255, 107, 53, 0.4), 0 8px 30px rgba(0, 0, 0, 0.15)'
    },
    
    navigation: {
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 107, 53, 0.2)',
      boxShadow: '0 4px 20px rgba(255, 107, 53, 0.1)'
    }
  },
  
  // Industry-specific elements
  industry_specific: {
    program_style: 'power-cards',
    trainer_style: 'athlete-profiles',
    testimonial_style: 'success-stories',
    membership_style: 'elite-pricing',
    schedule_style: 'dynamic-timetable'
  },
  
  // Advanced CSS custom properties
  customCSS: `
    /* Premium Fitness Custom Styles */
    .theme-premium-fitness {
      background: #FFFFFF;
      background-image: 
        url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FF6B35" fill-opacity="0.03"%3E%3Cpath d="M0 0h20v20H0V0zm20 20h20v20H20V20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
        radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 71, 87, 0.05) 0%, transparent 50%);
    }
    
    /* Dynamic energy lines */
    .theme-premium-fitness::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(45deg, transparent 0%, rgba(255, 107, 53, 0.1) 25%, transparent 50%, rgba(255, 71, 87, 0.1) 75%, transparent 100%);
      background-size: 100px 100px;
      animation: energyFlow 8s linear infinite;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes energyFlow {
      0% { background-position: 0% 0%; }
      100% { background-position: 100px 100px; }
    }
    
    /* High-energy hero section */
    .theme-premium-fitness .hero {
      position: relative;
      overflow: hidden;
      background: 
        linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(255, 107, 53, 0.8)),
        url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%231A1A1A" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23FF6B35" stroke-width="1" opacity="0.3"%3E%3Cpath d="M0 0l1200 600M0 600l1200-600M600 0v600M0 300h1200M300 0v600M900 0v600"/%3E%3C/g%3E%3C/svg%3E");
    }
    
    .theme-premium-fitness .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at center, rgba(255, 107, 53, 0.2) 0%, transparent 70%),
        radial-gradient(ellipse at 20% 80%, rgba(255, 71, 87, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
      animation: powerPulse 4s ease-in-out infinite alternate;
      pointer-events: none;
    }
    
    @keyframes powerPulse {
      0% { opacity: 0.5; transform: scale(1); }
      100% { opacity: 1; transform: scale(1.05); }
    }
    
    /* Athletic cards with energy effects */
    .theme-premium-fitness .card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(255, 107, 53, 0.2);
      border-radius: 15px;
      position: relative;
      overflow: hidden;
    }
    
    .theme-premium-fitness .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #FF6B35, #FF4757, #FFA726);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }
    
    .theme-premium-fitness .card:hover::before {
      transform: scaleX(1);
    }
    
    .theme-premium-fitness .card::after {
      content: '';
      position: absolute;
      top: 0;
      right: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
      transition: right 0.6s ease;
    }
    
    .theme-premium-fitness .card:hover::after {
      right: 100%;
    }
    
    /* Power typography */
    .theme-premium-fitness h1,
    .theme-premium-fitness h2,
    .theme-premium-fitness h3 {
      color: #FF6B35;
      position: relative;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .theme-premium-fitness .hero-title {
      font-size: 5rem;
      font-weight: 900;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 2rem;
      color: #FFFFFF;
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
      position: relative;
      animation: titlePower 3s ease-in-out infinite alternate;
    }
    
    @keyframes titlePower {
      0% { 
        text-shadow: 
          3px 3px 6px rgba(0, 0, 0, 0.5),
          0 0 20px rgba(255, 107, 53, 0.5);
      }
      100% { 
        text-shadow: 
          3px 3px 6px rgba(0, 0, 0, 0.5),
          0 0 40px rgba(255, 107, 53, 0.8),
          0 0 60px rgba(255, 71, 87, 0.6);
      }
    }
    
    .theme-premium-fitness .hero-title::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 150px;
      height: 4px;
      background: linear-gradient(90deg, #FF6B35, #FF4757, #FFA726);
      animation: powerLine 2s ease-in-out infinite alternate;
    }
    
    @keyframes powerLine {
      0% { box-shadow: 0 0 10px rgba(255, 107, 53, 0.5); }
      100% { box-shadow: 0 0 30px rgba(255, 107, 53, 1); }
    }
    
    .theme-premium-fitness .section-title {
      position: relative;
      margin-bottom: 3rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    
    .theme-premium-fitness .section-title::before {
      content: '💪';
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2.5rem;
      animation: flexPower 2s ease-in-out infinite;
    }
    
    @keyframes flexPower {
      0%, 100% { transform: translateX(-50%) scale(1); }
      50% { transform: translateX(-50%) scale(1.2); }
    }
    
    /* High-energy buttons */
    .theme-premium-fitness .btn-primary {
      background: linear-gradient(135deg, #FF6B35, #FF4757);
      border: none;
      color: #FFFFFF;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      position: relative;
      overflow: hidden;
      box-shadow: 
        0 8px 25px rgba(255, 107, 53, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    .theme-premium-fitness .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s ease;
    }
    
    .theme-premium-fitness .btn-primary:hover::before {
      left: 100%;
    }
    
    .theme-premium-fitness .btn-primary:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 
        0 12px 35px rgba(255, 107, 53, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    
    /* Athletic navigation */
    .theme-premium-fitness .navbar {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 107, 53, 0.2);
      box-shadow: 0 4px 20px rgba(255, 107, 53, 0.1);
    }
    
    .theme-premium-fitness .nav-link {
      color: #2C3E50;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-size: 0.9rem;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-premium-fitness .nav-link::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #FF6B35, #FF4757);
      transition: width 0.3s ease;
    }
    
    .theme-premium-fitness .nav-link:hover {
      color: #FF6B35;
      transform: translateY(-2px);
    }
    
    .theme-premium-fitness .nav-link:hover::after {
      width: 100%;
    }
    
    /* Program/workout cards */
    .theme-premium-fitness .program-card {
      background: rgba(255, 255, 255, 0.98);
      border: 2px solid rgba(255, 107, 53, 0.2);
      border-radius: 15px;
      padding: 2.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-premium-fitness .program-card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: 
        radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
      transform: rotate(45deg);
      transition: all 0.6s ease;
      opacity: 0;
    }
    
    .theme-premium-fitness .program-card:hover::before {
      opacity: 1;
      transform: rotate(45deg) scale(1.2);
    }
    
    .theme-premium-fitness .program-card:hover {
      transform: translateY(-10px) scale(1.02);
      border-color: #FF6B35;
      box-shadow: 
        0 20px 60px rgba(255, 107, 53, 0.4),
        0 8px 40px rgba(0, 0, 0, 0.15);
    }
    
    .theme-premium-fitness .program-icon {
      font-size: 4rem;
      color: #FF6B35;
      margin-bottom: 1.5rem;
      display: block;
      transition: all 0.3s ease;
    }
    
    .theme-premium-fitness .program-card:hover .program-icon {
      transform: scale(1.2) rotate(10deg);
      color: #FF4757;
    }
    
    /* Trainer profiles */
    .theme-premium-fitness .trainer-card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(255, 107, 53, 0.2);
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-premium-fitness .trainer-card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, #FF6B35, #FF4757, #FFA726);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }
    
    .theme-premium-fitness .trainer-card:hover::after {
      transform: scaleX(1);
    }
    
    .theme-premium-fitness .trainer-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 
        0 15px 45px rgba(255, 107, 53, 0.3),
        0 8px 30px rgba(0, 0, 0, 0.1);
    }
    
    /* Membership pricing */
    .theme-premium-fitness .membership-card {
      background: rgba(255, 255, 255, 0.98);
      border: 2px solid rgba(255, 107, 53, 0.2);
      border-radius: 20px;
      padding: 3rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-premium-fitness .membership-card.featured {
      border-color: #FF4757;
      transform: scale(1.05);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 107, 53, 0.05));
    }
    
    .theme-premium-fitness .membership-card.featured::before {
      content: 'Most Popular';
      position: absolute;
      top: 20px;
      right: -30px;
      background: linear-gradient(135deg, #FF6B35, #FF4757);
      color: white;
      padding: 8px 40px;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      transform: rotate(45deg);
      box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
    }
    
    .theme-premium-fitness .membership-card:hover {
      transform: translateY(-12px) scale(1.03);
      border-color: #FF6B35;
      box-shadow: 
        0 25px 70px rgba(255, 107, 53, 0.4),
        0 12px 50px rgba(0, 0, 0, 0.15);
    }
    
    .theme-premium-fitness .membership-price {
      font-size: 3.5rem;
      font-weight: 900;
      color: #FF6B35;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    /* Success stories/testimonials */
    .theme-premium-fitness .testimonial {
      background: linear-gradient(135deg, rgba(248, 249, 250, 0.9), rgba(255, 107, 53, 0.05));
      border-left: 5px solid #FF6B35;
      border-radius: 15px;
      padding: 2.5rem;
      position: relative;
      margin: 2rem 0;
    }
    
    .theme-premium-fitness .testimonial::before {
      content: '🔥';
      position: absolute;
      top: -15px;
      left: 25px;
      font-size: 2rem;
      background: #FFFFFF;
      padding: 0 10px;
    }
    
    .theme-premium-fitness .testimonial::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #FF6B35, #FF4757, #FFA726);
      border-radius: 0 0 15px 15px;
    }
    
    /* Dynamic footer */
    .theme-premium-fitness .footer {
      background: linear-gradient(135deg, #1A1A1A, #2C3E50);
      color: #FFFFFF;
      border-top: 4px solid #FF6B35;
      position: relative;
    }
    
    .theme-premium-fitness .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #FF6B35, #FF4757, #FFA726, transparent);
      animation: footerEnergy 3s ease-in-out infinite alternate;
    }
    
    @keyframes footerEnergy {
      0% { opacity: 0.5; }
      100% { opacity: 1; }
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .theme-premium-fitness .hero-title {
        font-size: 3rem;
        letter-spacing: 2px;
      }
      
      .theme-premium-fitness .membership-card.featured {
        transform: none;
      }
      
      .theme-premium-fitness .card {
        margin-bottom: 2rem;
      }
    }
    
    /* Power-up animations */
    .theme-premium-fitness .power-up {
      animation: powerUp 0.6s ease-out;
    }
    
    @keyframes powerUp {
      from {
        opacity: 0;
        transform: translateY(50px) scale(0.8);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    /* Energy burst effect */
    .theme-premium-fitness .energy-burst {
      position: relative;
      overflow: hidden;
    }
    
    .theme-premium-fitness .energy-burst::after {
      content: '⚡ 🔥 ⚡';
      position: absolute;
      top: 50%;
      left: -100%;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 2rem;
      animation: energyBurst 10s linear infinite;
      pointer-events: none;
    }
    
    @keyframes energyBurst {
      0% { left: -100%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { left: 100%; opacity: 0; }
    }
  `,
  
  // Features and tags
  features: ['High-Energy', 'Dynamic', 'Motivational', 'Athletic', 'Premium'],
  
  // Target audience
  target_audience: 'Premium gyms, fitness studios, personal trainers, athletic centers, sports facilities',
  
  // Mood and atmosphere
  mood: 'Energetic, powerful, motivational, dynamic, athletic, intense',
  
  // Image generation prompts
  images: {
    hero: 'premium fitness studio, modern gym equipment, energetic atmosphere, athletic training',
    programs: 'fitness classes, personal training, gym workouts, athletic performance',
    trainers: 'professional fitness trainers, athletic coaches, gym instructors',
    filter: 'contrast(120%) brightness(110%) saturate(120%) hue-rotate(5deg)'
  }
};

// Register the theme
if (typeof window !== 'undefined' && window.themeManager) {
  window.themeManager.registerTheme(premiumFitnessTheme);
  console.log('🏋️ Registered Premium Fitness theme');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = premiumFitnessTheme;
}