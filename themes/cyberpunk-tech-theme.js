/**
 * 💻 CYBERPUNK TECH STARTUP THEME
 * "Neural Network" - Futuristic AI/Tech company with neon glows and dark sci-fi aesthetics
 * 
 * This theme creates a cutting-edge, futuristic atmosphere perfect for AI companies,
 * tech startups, blockchain projects, and innovative software companies.
 */

const cyberpunkTechTheme = {
  id: 'cyberpunk-tech',
  name: 'Neural Network',
  industry: 'tech',
  description: 'Futuristic cyberpunk design with neon glows, dark backgrounds, and cutting-edge tech aesthetics',
  
  // Color palette inspired by Blade Runner, Cyberpunk 2077, and futuristic interfaces
  colors: {
    primary: '#00D4FF',        // Electric Cyan
    secondary: '#FF0080',      // Hot Pink/Magenta
    accent: '#00FF88',         // Neon Green
    background: '#0D1117',     // Deep Space Black
    text: '#FFFFFF',           // Pure White
    light: '#1C1C1C',          // Dark Gray
    dark: '#000000',           // Pure Black
    white: '#FFFFFF',          // White
    purple: '#8B5CF6',         // Electric Purple
    orange: '#FF6B35',         // Neon Orange
    blue: '#3B82F6',           // Electric Blue
    grid: '#1E293B'            // Grid Lines
  },
  
  // Futuristic typography
  fonts: {
    heading: '"Orbitron", "Rajdhani", "Exo 2", monospace',
    body: '"Source Code Pro", "Fira Code", "JetBrains Mono", monospace',
    accent: '"Audiowide", "Electrolize", sans-serif',
    code: '"Fira Code", "Source Code Pro", monospace'
  },
  
  // Advanced styling properties
  styling: {
    borderRadius: '0px',           // Sharp, tech edges
    borderRadiusLg: '4px',
    shadow: '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)',
    shadowLg: '0 0 40px rgba(0, 212, 255, 0.5), 0 0 80px rgba(0, 212, 255, 0.2)',
    textShadow: '0 0 10px rgba(0, 212, 255, 0.8)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Tech grid pattern
    gridPattern: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300D4FF" fill-opacity="0.1"%3E%3Cpath d="M0 0h40v1H0V0zm0 39h40v1H0v-1zM1 0v40h1V0H1zm38 0v40h1V0h-1z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    circuitPattern: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300FF88" fill-opacity="0.05"%3E%3Cpath d="M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0M30 10v20M10 30h20M30 50V30M50 30H30"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
  },
  
  // Component-specific styling
  components: {
    hero: {
      background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.95), rgba(28, 28, 28, 0.9)), url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%230D1117" width="1200" height="600"/%3E%3Cg fill="none" stroke="%2300D4FF" stroke-width="0.5" opacity="0.3"%3E%3Cpath d="M0 0L1200 600M0 600L1200 0M600 0v600M0 300h1200"/%3E%3C/g%3E%3C/svg%3E")',
      overlay: 'rgba(0, 0, 0, 0.4)',
      textAlign: 'center',
      minHeight: '100vh'
    },
    
    buttons: {
      primary: {
        background: 'linear-gradient(45deg, #00D4FF, #0EA5E9)',
        border: '1px solid #00D4FF',
        color: '#000000',
        fontWeight: '600',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        padding: '14px 28px',
        fontSize: '14px',
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        hoverTransform: 'translateY(-2px) scale(1.05)',
        hoverShadow: '0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 212, 255, 0.3)'
      },
      
      secondary: {
        background: 'transparent',
        border: '1px solid #FF0080',
        color: '#FF0080',
        fontWeight: '600',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        hoverBackground: 'rgba(255, 0, 128, 0.1)',
        hoverColor: '#FF0080',
        hoverShadow: '0 0 20px rgba(255, 0, 128, 0.4)'
      }
    },
    
    cards: {
      background: 'linear-gradient(145deg, rgba(28, 28, 28, 0.8), rgba(13, 17, 23, 0.9))',
      border: '1px solid rgba(0, 212, 255, 0.2)',
      borderRadius: '4px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 212, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      hoverTransform: 'translateY(-8px) scale(1.02)',
      hoverShadow: '0 16px 64px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 212, 255, 0.3)'
    },
    
    navigation: {
      background: 'rgba(13, 17, 23, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
      boxShadow: '0 4px 32px rgba(0, 0, 0, 0.8)'
    }
  },
  
  // Industry-specific elements
  industry_specific: {
    feature_style: 'tech-grid',
    service_style: 'neural-cards',
    testimonial_style: 'hologram-quotes',
    team_style: 'cyber-profiles',
    pricing_style: 'matrix-tables'
  },
  
  // Advanced CSS custom properties
  customCSS: `
    /* Cyberpunk Tech Custom Styles */
    .theme-cyberpunk-tech {
      background: #0D1117;
      background-image: 
        url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300D4FF" fill-opacity="0.05"%3E%3Cpath d="M0 0h40v1H0V0zm0 39h40v1H0v-1zM1 0v40h1V0H1zm38 0v40h1V0h-1z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
        radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 0, 128, 0.1) 0%, transparent 50%);
    }
    
    /* Animated circuit lines */
    .theme-cyberpunk-tech::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        linear-gradient(90deg, transparent 0%, rgba(0, 212, 255, 0.1) 50%, transparent 100%),
        linear-gradient(0deg, transparent 0%, rgba(0, 255, 136, 0.1) 50%, transparent 100%);
      background-size: 200px 200px, 200px 200px;
      animation: circuitFlow 20s linear infinite;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes circuitFlow {
      0% { background-position: 0% 0%, 0% 0%; }
      100% { background-position: 200px 200px, -200px 200px; }
    }
    
    /* Neon glow effects */
    .theme-cyberpunk-tech .hero {
      position: relative;
      overflow: hidden;
    }
    
    .theme-cyberpunk-tech .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%),
        radial-gradient(ellipse at 20% 20%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%);
      animation: neonPulse 6s ease-in-out infinite alternate;
      pointer-events: none;
    }
    
    @keyframes neonPulse {
      0% { opacity: 0.3; }
      100% { opacity: 0.8; }
    }
    
    /* Holographic cards */
    .theme-cyberpunk-tech .card {
      background: 
        linear-gradient(145deg, rgba(28, 28, 28, 0.8), rgba(13, 17, 23, 0.9)),
        url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300FF88" fill-opacity="0.03"%3E%3Cpath d="M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0M30 10v20M10 30h20M30 50V30M50 30H30"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      border: 1px solid rgba(0, 212, 255, 0.2);
      position: relative;
      overflow: hidden;
    }
    
    .theme-cyberpunk-tech .card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.1), transparent);
      transform: rotate(45deg);
      transition: all 0.6s ease;
      opacity: 0;
    }
    
    .theme-cyberpunk-tech .card:hover::before {
      animation: hologramScan 1.5s ease-in-out;
    }
    
    @keyframes hologramScan {
      0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
    }
    
    /* Glitch text effect for headings */
    .theme-cyberpunk-tech h1,
    .theme-cyberpunk-tech h2,
    .theme-cyberpunk-tech h3 {
      color: #00D4FF;
      text-shadow: 
        0 0 5px rgba(0, 212, 255, 0.8),
        0 0 10px rgba(0, 212, 255, 0.6),
        0 0 15px rgba(0, 212, 255, 0.4);
      position: relative;
    }
    
    .theme-cyberpunk-tech .hero-title {
      font-size: 4rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 2rem;
      position: relative;
      animation: textGlow 3s ease-in-out infinite alternate;
    }
    
    @keyframes textGlow {
      0% { 
        text-shadow: 
          0 0 5px rgba(0, 212, 255, 0.8),
          0 0 10px rgba(0, 212, 255, 0.6),
          0 0 15px rgba(0, 212, 255, 0.4);
      }
      100% { 
        text-shadow: 
          0 0 10px rgba(0, 212, 255, 1),
          0 0 20px rgba(0, 212, 255, 0.8),
          0 0 30px rgba(0, 212, 255, 0.6);
      }
    }
    
    .theme-cyberpunk-tech .hero-title::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #00D4FF, #FF0080, #00FF88, transparent);
      animation: lineGlow 2s ease-in-out infinite alternate;
    }
    
    @keyframes lineGlow {
      0% { box-shadow: 0 0 5px rgba(0, 212, 255, 0.5); }
      100% { box-shadow: 0 0 20px rgba(0, 212, 255, 1); }
    }
    
    /* Cyberpunk buttons */
    .theme-cyberpunk-tech .btn-primary {
      background: linear-gradient(45deg, #00D4FF, #0EA5E9);
      border: 1px solid #00D4FF;
      color: #000000;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      position: relative;
      overflow: hidden;
      box-shadow: 
        0 0 20px rgba(0, 212, 255, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    .theme-cyberpunk-tech .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s ease;
    }
    
    .theme-cyberpunk-tech .btn-primary:hover::before {
      left: 100%;
    }
    
    .theme-cyberpunk-tech .btn-primary:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 
        0 0 30px rgba(0, 212, 255, 0.6),
        0 0 60px rgba(0, 212, 255, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    
    /* Matrix-style navigation */
    .theme-cyberpunk-tech .navbar {
      background: rgba(13, 17, 23, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0, 212, 255, 0.2);
      box-shadow: 0 4px 32px rgba(0, 0, 0, 0.8);
    }
    
    .theme-cyberpunk-tech .nav-link {
      color: #FFFFFF;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 0.9rem;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-cyberpunk-tech .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #00D4FF, #FF0080);
      transition: width 0.3s ease;
    }
    
    .theme-cyberpunk-tech .nav-link:hover {
      color: #00D4FF;
      text-shadow: 0 0 10px rgba(0, 212, 255, 0.8);
      transform: translateY(-2px);
    }
    
    .theme-cyberpunk-tech .nav-link:hover::after {
      width: 100%;
    }
    
    /* Tech feature cards */
    .theme-cyberpunk-tech .tech-feature {
      background: linear-gradient(135deg, rgba(28, 28, 28, 0.9), rgba(13, 17, 23, 0.8));
      border: 1px solid rgba(0, 255, 136, 0.3);
      border-radius: 4px;
      padding: 2rem;
      position: relative;
      overflow: hidden;
    }
    
    .theme-cyberpunk-tech .tech-feature::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #00D4FF, #FF0080, #00FF88);
      animation: borderFlow 3s linear infinite;
    }
    
    @keyframes borderFlow {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    .theme-cyberpunk-tech .tech-feature:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.8),
        0 0 40px rgba(0, 255, 136, 0.3);
      border-color: rgba(0, 255, 136, 0.6);
    }
    
    .theme-cyberpunk-tech .tech-feature h3 {
      color: #00FF88;
      margin-bottom: 1rem;
      text-shadow: 0 0 10px rgba(0, 255, 136, 0.6);
    }
    
    /* Futuristic footer */
    .theme-cyberpunk-tech .footer {
      background: linear-gradient(135deg, #000000, #0D1117);
      border-top: 1px solid rgba(0, 212, 255, 0.3);
      position: relative;
    }
    
    .theme-cyberpunk-tech .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #00D4FF, #FF0080, #00FF88, transparent);
      animation: footerGlow 4s ease-in-out infinite alternate;
    }
    
    @keyframes footerGlow {
      0% { opacity: 0.5; }
      100% { opacity: 1; }
    }
    
    /* Code-style text */
    .theme-cyberpunk-tech code,
    .theme-cyberpunk-tech .code {
      background: rgba(0, 212, 255, 0.1);
      color: #00D4FF;
      padding: 2px 6px;
      border-radius: 2px;
      font-family: "Fira Code", monospace;
      border: 1px solid rgba(0, 212, 255, 0.2);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .theme-cyberpunk-tech .hero-title {
        font-size: 2.5rem;
        letter-spacing: 1px;
      }
      
      .theme-cyberpunk-tech .card {
        margin-bottom: 2rem;
      }
    }
    
    /* Loading animation for tech elements */
    .theme-cyberpunk-tech .loading {
      position: relative;
      overflow: hidden;
    }
    
    .theme-cyberpunk-tech .loading::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent);
      animation: loading 2s infinite;
    }
    
    @keyframes loading {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  `,
  
  // Features and tags
  features: ['Futuristic', 'Cyberpunk', 'AI-Ready', 'Neon Glows', 'Tech-Forward'],
  
  // Target audience
  target_audience: 'AI companies, tech startups, blockchain projects, software companies, cybersecurity firms',
  
  // Mood and atmosphere
  mood: 'Futuristic, cutting-edge, innovative, high-tech, cyberpunk, electric',
  
  // Image generation prompts
  images: {
    hero: 'futuristic tech office, neon lights, cyberpunk aesthetic, AI servers, holographic displays',
    features: 'AI neural networks, circuit boards, holographic interfaces, futuristic technology',
    team: 'tech professionals, modern office, neon lighting, cyberpunk style',
    filter: 'contrast(120%) brightness(110%) saturate(120%) hue-rotate(10deg)'
  }
};

// Register the theme
if (typeof window !== 'undefined' && window.themeManager) {
  window.themeManager.registerTheme(cyberpunkTechTheme);
  console.log('💻 Registered Cyberpunk Tech theme');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cyberpunkTechTheme;
}