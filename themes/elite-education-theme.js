/**
 * 🎓 ELITE EDUCATION THEME
 * "Ivy League Academy" - Prestigious educational institution with academic excellence
 * 
 * This theme creates an atmosphere of academic prestige perfect for universities,
 * private schools, online academies, and premium educational institutions.
 */

const eliteEducationTheme = {
  id: 'elite-education',
  name: 'Ivy League Academy',
  industry: 'education',
  description: 'Prestigious educational institution with deep blues, gold accents, and academic excellence',
  
  // Color palette inspired by Ivy League universities, academic tradition, and scholarly excellence
  colors: {
    primary: '#003366',        // Deep Academic Blue
    secondary: '#1E3A8A',      // Royal Blue
    accent: '#D4AF37',         // Academic Gold
    background: '#FFFFFF',     // Pure White
    text: '#1F2937',           // Dark Gray
    light: '#F9FAFB',          // Off White
    dark: '#111827',           // Deep Navy
    white: '#FFFFFF',          // Pure White
    burgundy: '#800020',       // Academic Burgundy
    forest: '#355E3B',         // Forest Green
    cream: '#F5F5DC',          // Cream
    slate: '#708090'           // Slate Gray
  },
  
  // Academic, scholarly typography
  fonts: {
    heading: '"Playfair Display", "Cormorant Garamond", "Crimson Text", serif',
    body: '"Source Serif Pro", "Lora", "Crimson Text", serif',
    accent: '"Cinzel", "Trajan Pro", serif',
    academic: '"Times New Roman", "Georgia", serif'
  },
  
  // Advanced styling properties
  styling: {
    borderRadius: '6px',           // Classical, refined edges
    borderRadiusLg: '12px',
    shadow: '0 12px 40px rgba(0, 51, 102, 0.15), 0 4px 20px rgba(0, 0, 0, 0.1)',
    shadowLg: '0 20px 60px rgba(0, 51, 102, 0.2), 0 8px 40px rgba(0, 0, 0, 0.15)',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    
    // Academic patterns
    crestPattern: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.03"%3E%3Cpath d="M30 0l15 15-15 15-15-15zM30 30l15 15-15 15-15-15z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    bookPattern: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23003366" fill-opacity="0.02"%3E%3Crect x="5" y="5" width="30" height="30" rx="2"/%3E%3Crect x="10" y="10" width="20" height="20" rx="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
  },
  
  // Component-specific styling
  components: {
    hero: {
      background: 'linear-gradient(135deg, rgba(0, 51, 102, 0.95), rgba(30, 58, 138, 0.9)), url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23003366" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23D4AF37" stroke-width="0.5" opacity="0.3"%3E%3Cpath d="M0 0h1200M0 120h1200M0 240h1200M0 360h1200M0 480h1200M0 600h1200M200 0v600M400 0v600M600 0v600M800 0v600M1000 0v600"/%3E%3C/g%3E%3C/svg%3E")',
      overlay: 'rgba(0, 51, 102, 0.2)',
      textAlign: 'center',
      minHeight: '90vh'
    },
    
    buttons: {
      primary: {
        background: 'linear-gradient(135deg, #D4AF37, #B8941F)',
        border: '2px solid #D4AF37',
        color: '#003366',
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
        border: '2px solid #003366',
        color: '#003366',
        fontWeight: '600',
        letterSpacing: '0.3px',
        textTransform: 'uppercase',
        hoverBackground: '#003366',
        hoverColor: '#FFFFFF'
      }
    },
    
    cards: {
      background: 'rgba(255, 255, 255, 0.98)',
      border: '1px solid rgba(212, 175, 55, 0.2)',
      borderRadius: '12px',
      boxShadow: '0 12px 40px rgba(0, 51, 102, 0.15), 0 4px 20px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      hoverTransform: 'translateY(-10px) scale(1.02)',
      hoverShadow: '0 20px 60px rgba(0, 51, 102, 0.2), 0 8px 40px rgba(0, 0, 0, 0.15)'
    },
    
    navigation: {
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      boxShadow: '0 4px 20px rgba(0, 51, 102, 0.1)'
    }
  },
  
  // Industry-specific elements
  industry_specific: {
    course_style: 'academic-showcase',
    faculty_style: 'distinguished-profiles',
    program_style: 'curriculum-display',
    admission_style: 'enrollment-form',
    achievement_style: 'honor-roll'
  },
  
  // Advanced CSS custom properties
  customCSS: `
    /* Elite Education Custom Styles */
    .theme-elite-education {
      background: #FFFFFF;
      background-image: 
        url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.02"%3E%3Cpath d="M30 0l15 15-15 15-15-15zM30 30l15 15-15 15-15-15z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
        radial-gradient(circle at 20% 20%, rgba(0, 51, 102, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.03) 0%, transparent 50%);
    }
    
    /* Academic excellence aura */
    .theme-elite-education::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at 25% 25%, rgba(0, 51, 102, 0.05) 0%, transparent 50%),
        radial-gradient(ellipse at 75% 75%, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
      animation: academicAura 20s ease-in-out infinite alternate;
      pointer-events: none;
      z-index: -1;
    }
    
    @keyframes academicAura {
      0% { opacity: 0.3; }
      100% { opacity: 0.7; }
    }
    
    /* Prestigious hero section */
    .theme-elite-education .hero {
      position: relative;
      overflow: hidden;
      background: 
        linear-gradient(135deg, rgba(0, 51, 102, 0.95), rgba(30, 58, 138, 0.9)),
        url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Crect fill="%23003366" width="1200" height="600"/%3E%3Cg fill="none" stroke="%23D4AF37" stroke-width="0.5" opacity="0.3"%3E%3Cpath d="M0 0h1200M0 120h1200M0 240h1200M0 360h1200M0 480h1200M0 600h1200M200 0v600M400 0v600M600 0v600M800 0v600M1000 0v600"/%3E%3C/g%3E%3C/svg%3E");
    }
    
    .theme-elite-education .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%),
        radial-gradient(ellipse at 30% 70%, rgba(0, 51, 102, 0.1) 0%, transparent 50%);
      animation: scholarlyGlow 12s ease-in-out infinite alternate;
      pointer-events: none;
    }
    
    @keyframes scholarlyGlow {
      0% { opacity: 0.4; }
      100% { opacity: 0.8; }
    }
    
    /* Academic course cards */
    .theme-elite-education .card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 12px;
      position: relative;
      overflow: hidden;
    }
    
    .theme-elite-education .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #003366, #D4AF37, #1E3A8A);
      transform: scaleX(0);
      transition: transform 0.6s ease;
    }
    
    .theme-elite-education .card:hover::before {
      transform: scaleX(1);
    }
    
    .theme-elite-education .card::after {
      content: '🎓';
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 1.5rem;
      opacity: 0.2;
      transition: all 0.4s ease;
    }
    
    .theme-elite-education .card:hover::after {
      opacity: 0.6;
      transform: rotate(15deg) scale(1.2);
    }
    
    /* Distinguished typography */
    .theme-elite-education h1,
    .theme-elite-education h2,
    .theme-elite-education h3 {
      color: #003366;
      position: relative;
    }
    
    .theme-elite-education .hero-title {
      font-size: 4rem;
      font-weight: 400;
      letter-spacing: 2px;
      margin-bottom: 2rem;
      color: #FFFFFF;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      position: relative;
    }
    
    .theme-elite-education .hero-title::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    }
    
    .theme-elite-education .section-title {
      position: relative;
      margin-bottom: 3rem;
      font-weight: 400;
      letter-spacing: 1px;
    }
    
    .theme-elite-education .section-title::before {
      content: '📚';
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2rem;
      opacity: 0.7;
    }
    
    /* Academic excellence buttons */
    .theme-elite-education .btn-primary {
      background: linear-gradient(135deg, #D4AF37, #B8941F);
      border: 2px solid #D4AF37;
      color: #003366;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: 'uppercase',
      position: relative;
      overflow: hidden;
      box-shadow: 
        0 8px 25px rgba(212, 175, 55, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    .theme-elite-education .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.6s ease;
    }
    
    .theme-elite-education .btn-primary:hover::before {
      left: 100%;
    }
    
    .theme-elite-education .btn-primary:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 
        0 12px 35px rgba(212, 175, 55, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    
    /* Scholarly navigation */
    .theme-elite-education .navbar {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(212, 175, 55, 0.2);
      box-shadow: 0 4px 20px rgba(0, 51, 102, 0.1);
    }
    
    .theme-elite-education .nav-link {
      color: #1F2937;
      font-weight: 500;
      letter-spacing: 0.3px;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-elite-education .nav-link::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #003366, #D4AF37);
      transition: width 0.3s ease;
    }
    
    .theme-elite-education .nav-link:hover {
      color: #003366;
      transform: translateY(-1px);
    }
    
    .theme-elite-education .nav-link:hover::after {
      width: 100%;
    }
    
    /* Course showcase cards */
    .theme-elite-education .course-card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      transition: all 0.4s ease;
      box-shadow: 0 10px 30px rgba(0, 51, 102, 0.1);
    }
    
    .theme-elite-education .course-card:hover {
      transform: translateY(-10px) scale(1.02);
      border-color: #D4AF37;
      box-shadow: 
        0 20px 60px rgba(0, 51, 102, 0.2),
        0 8px 40px rgba(0, 0, 0, 0.1);
    }
    
    .theme-elite-education .course-image {
      height: 200px;
      background: linear-gradient(45deg, #003366, #1E3A8A);
      position: relative;
      overflow: hidden;
    }
    
    .theme-elite-education .course-image::after {
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
    
    .theme-elite-education .course-card:hover .course-image::after {
      opacity: 1;
    }
    
    .theme-elite-education .course-info {
      padding: 2rem;
      background: #FFFFFF;
    }
    
    .theme-elite-education .course-title {
      font-size: 1.4rem;
      font-weight: 500;
      color: #003366;
      margin-bottom: 0.5rem;
      letter-spacing: 0.3px;
    }
    
    .theme-elite-education .course-instructor {
      font-size: 1rem;
      color: #D4AF37;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    
    .theme-elite-education .course-price {
      font-size: 1.3rem;
      color: #003366;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .theme-elite-education .course-duration {
      font-size: 0.9rem;
      color: #708090;
      margin-bottom: 1.5rem;
    }
    
    /* Faculty profiles */
    .theme-elite-education .faculty-card {
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 12px;
      padding: 2.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-elite-education .faculty-card::before {
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
    
    .theme-elite-education .faculty-card:hover::before {
      opacity: 1;
      transform: rotate(45deg) scale(1.1);
    }
    
    .theme-elite-education .faculty-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 
        0 20px 60px rgba(0, 51, 102, 0.2),
        0 8px 40px rgba(0, 0, 0, 0.1);
    }
    
    /* Academic achievements */
    .theme-elite-education .achievement {
      background: linear-gradient(135deg, rgba(0, 51, 102, 0.05), rgba(212, 175, 55, 0.05));
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .theme-elite-education .achievement:hover {
      transform: translateY(-5px);
      border-color: #D4AF37;
      box-shadow: 0 15px 45px rgba(212, 175, 55, 0.2);
    }
    
    .theme-elite-education .achievement-number {
      font-size: 3rem;
      font-weight: 700;
      color: #003366;
      margin-bottom: 0.5rem;
    }
    
    .theme-elite-education .achievement-label {
      color: #D4AF37;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    /* Student testimonials */
    .theme-elite-education .testimonial {
      background: rgba(249, 250, 251, 0.8);
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 12px;
      padding: 2.5rem;
      position: relative;
      margin: 2rem 0;
    }
    
    .theme-elite-education .testimonial::before {
      content: '🎓';
      position: absolute;
      top: -15px;
      left: 25px;
      font-size: 2rem;
      background: #FFFFFF;
      padding: 0 10px;
    }
    
    .theme-elite-education .testimonial::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, #003366, #D4AF37, transparent);
      border-radius: 0 0 12px 12px;
    }
    
    /* Academic footer */
    .theme-elite-education .footer {
      background: linear-gradient(135deg, #003366, #1E3A8A);
      color: #FFFFFF;
      border-top: 3px solid #D4AF37;
      position: relative;
    }
    
    .theme-elite-education .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    }
    
    /* Program highlights */
    .theme-elite-education .program-highlight {
      background: rgba(255, 255, 255, 0.98);
      border: 2px solid rgba(212, 175, 55, 0.3);
      border-radius: 12px;
      padding: 3rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    
    .theme-elite-education .program-highlight.featured {
      border-color: #D4AF37;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(212, 175, 55, 0.05));
    }
    
    .theme-elite-education .program-highlight.featured::before {
      content: 'Featured Program';
      position: absolute;
      top: 20px;
      right: -35px;
      background: linear-gradient(135deg, #003366, #D4AF37);
      color: white;
      padding: 8px 45px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      transform: rotate(45deg);
      box-shadow: 0 4px 15px rgba(0, 51, 102, 0.3);
    }
    
    .theme-elite-education .program-highlight:hover {
      transform: translateY(-12px) scale(1.02);
      box-shadow: 
        0 25px 70px rgba(0, 51, 102, 0.2),
        0 12px 50px rgba(0, 0, 0, 0.1);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .theme-elite-education .hero-title {
        font-size: 2.5rem;
        letter-spacing: 1px;
      }
      
      .theme-elite-education .program-highlight.featured {
        transform: none;
      }
      
      .theme-elite-education .card {
        margin-bottom: 2rem;
      }
    }
    
    /* Scholarly entrance animations */
    .theme-elite-education .academic-fade-in {
      animation: academicFadeIn 0.8s ease-out;
    }
    
    @keyframes academicFadeIn {
      from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    /* Knowledge flow animation */
    .theme-elite-education .knowledge-flow {
      position: relative;
      overflow: hidden;
    }
    
    .theme-elite-education .knowledge-flow::after {
      content: '📖 🎓 📚';
      position: absolute;
      top: 50%;
      left: -100%;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 2rem;
      opacity: 0.3;
      animation: knowledgeFlow 12s linear infinite;
      pointer-events: none;
    }
    
    @keyframes knowledgeFlow {
      0% { left: -100%; }
      100% { left: 100%; }
    }
  `,
  
  // Features and tags
  features: ['Prestigious', 'Academic', 'Distinguished', 'Scholarly', 'Elite'],
  
  // Target audience
  target_audience: 'Universities, private schools, online academies, educational institutions, academic programs',
  
  // Mood and atmosphere
  mood: 'Prestigious, scholarly, distinguished, academic, traditional, authoritative',
  
  // Image generation prompts
  images: {
    hero: 'prestigious university campus, academic buildings, scholarly atmosphere, ivy league setting',
    courses: 'academic classrooms, educational materials, scholarly environment, learning spaces',
    faculty: 'distinguished professors, academic professionals, scholarly portraits, university setting',
    filter: 'contrast(110%) brightness(100%) saturate(95%) sepia(5%)'
  }
};

// Register the theme
if (typeof window !== 'undefined' && window.themeManager) {
  window.themeManager.registerTheme(eliteEducationTheme);
  console.log('🎓 Registered Elite Education theme');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = eliteEducationTheme;
}