/**
 * AI Website Pro - Theme Manager
 * Dynamic theme application system
 */

class ThemeManager {
  constructor() {
    this.currentTheme = null;
    this.themes = new Map();
    this.initialized = false;
    
    // Bind methods
    this.applyTheme = this.applyTheme.bind(this);
    this.registerTheme = this.registerTheme.bind(this);
    
    console.log('🎨 Theme Manager initialized');
  }
  
  /**
   * Initialize the theme manager
   */
  init() {
    if (this.initialized) return;
    
    // Load theme framework CSS if not already loaded
    this.loadThemeFramework();
    
    // Register default themes
    this.registerDefaultThemes();
    
    this.initialized = true;
    console.log('✅ Theme Manager ready');
  }
  
  /**
   * Load theme framework CSS
   */
  loadThemeFramework() {
    const existingLink = document.querySelector('link[href*="theme-framework.css"]');
    if (existingLink) return;
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'themes/theme-framework.css';
    document.head.appendChild(link);
  }
  
  /**
   * Register a theme
   */
  registerTheme(theme) {
    // Validate theme structure
    if (!this.validateTheme(theme)) {
      console.error('Invalid theme structure:', theme);
      return false;
    }
    
    this.themes.set(theme.id, theme);
    console.log(`📝 Registered theme: ${theme.name}`);
    return true;
  }
  
  /**
   * Validate theme structure
   */
  validateTheme(theme) {
    const required = ['id', 'name', 'colors', 'fonts'];
    return required.every(prop => theme.hasOwnProperty(prop));
  }
  
  /**
   * Apply theme to the page
   */
  applyTheme(themeId) {
    const theme = this.themes.get(themeId);
    if (!theme) {
      console.error(`❌ Theme ${themeId} not found`);
      return false;
    }
    
    console.log(`🎨 Applying theme: ${theme.name}`);
    
    this.currentTheme = theme;
    
    // Apply CSS custom properties
    this.applyCSSVariables(theme);
    
    // Apply theme classes
    this.applyThemeClasses(theme);
    
    // Apply industry-specific styles
    this.applyIndustryStyles(theme);
    
    // Apply image filters if specified
    if (theme.images && theme.images.filter) {
      this.applyImageFilters(theme.images.filter);
    }
    
    // Trigger theme change event
    this.triggerThemeChangeEvent(theme);
    
    console.log(`✅ Applied theme: ${theme.name}`);
    return true;
  }
  
  /**
   * Apply CSS custom properties
   */
  applyCSSVariables(theme) {
    const root = document.documentElement;
    
    // Colors
    if (theme.colors) {
      Object.keys(theme.colors).forEach(key => {
        root.style.setProperty(`--theme-${key}`, theme.colors[key]);
      });
    }
    
    // Fonts
    if (theme.fonts) {
      Object.keys(theme.fonts).forEach(key => {
        root.style.setProperty(`--theme-font-${key}`, theme.fonts[key]);
      });
    }
    
    // Layout properties
    if (theme.layout) {
      Object.keys(theme.layout).forEach(key => {
        root.style.setProperty(`--theme-${key}`, theme.layout[key]);
      });
    }
  }
  
  /**
   * Apply theme classes to body
   */
  applyThemeClasses(theme) {
    // Remove existing theme classes
    document.body.className = document.body.className
      .replace(/theme-[\w-]+/g, '')
      .replace(/industry-[\w-]+/g, '')
      .trim();
    
    // Add new theme classes
    const classes = [
      `theme-${theme.id}`,
      `industry-${theme.industry || 'general'}`
    ];
    
    if (theme.style) {
      classes.push(`style-${theme.style}`);
    }
    
    document.body.classList.add(...classes);
  }
  
  /**
   * Apply industry-specific styling
   */
  applyIndustryStyles(theme) {
    if (!theme.industry_specific) return;
    
    Object.keys(theme.industry_specific).forEach(componentType => {
      const styleClass = theme.industry_specific[componentType];
      const elements = document.querySelectorAll(`[data-component="${componentType}"]`);
      
      elements.forEach(el => {
        // Remove existing component style classes
        el.className = el.className.replace(/component-[\w-]+/g, '').trim();
        // Add new style class
        el.classList.add(`component-${styleClass}`);
      });
    });
  }
  
  /**
   * Apply image filters
   */
  applyImageFilters(filter) {
    const selectors = [
      'img:not(.no-filter)',
      '.hero:not(.no-filter)',
      '.card-image:not(.no-filter)',
      '.background-image:not(.no-filter)'
    ];
    
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.filter = filter;
      });
    });
  }
  
  /**
   * Get theme by ID
   */
  getTheme(themeId) {
    return this.themes.get(themeId);
  }
  
  /**
   * Get all themes
   */
  getAllThemes() {
    return Array.from(this.themes.values());
  }
  
  /**
   * Get themes by industry
   */
  getThemesByIndustry(industry) {
    return this.getAllThemes().filter(theme => theme.industry === industry);
  }
  
  /**
   * Get theme preview data
   */
  getThemePreview(themeId) {
    const theme = this.themes.get(themeId);
    if (!theme) return null;
    
    return {
      id: theme.id,
      name: theme.name,
      description: theme.description,
      industry: theme.industry,
      colors: theme.colors,
      preview: this.generatePreviewHTML(theme),
      features: theme.features || []
    };
  }
  
  /**
   * Generate preview HTML
   */
  generatePreviewHTML(theme) {
    const colors = theme.colors;
    const fonts = theme.fonts;
    
    return `
      <div class="theme-preview-card" style="
        background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
        color: ${colors.background || colors.white || '#ffffff'};
        padding: 20px;
        border-radius: 10px;
        font-family: ${fonts.heading};
        position: relative;
        overflow: hidden;
      ">
        <div style="position: relative; z-index: 2;">
          <h3 style="margin: 0 0 10px 0; font-size: 1.2rem;">${theme.name}</h3>
          <p style="
            margin: 0 0 15px 0; 
            opacity: 0.9; 
            font-family: ${fonts.body};
            font-size: 0.9rem;
            line-height: 1.4;
          ">
            ${theme.description}
          </p>
          <div style="display: flex; gap: 5px; margin-top: 15px;">
            <span style="
              width: 16px; 
              height: 16px; 
              background: ${colors.primary}; 
              border-radius: 50%;
              border: 2px solid rgba(255,255,255,0.3);
            "></span>
            <span style="
              width: 16px; 
              height: 16px; 
              background: ${colors.secondary}; 
              border-radius: 50%;
              border: 2px solid rgba(255,255,255,0.3);
            "></span>
            <span style="
              width: 16px; 
              height: 16px; 
              background: ${colors.accent}; 
              border-radius: 50%;
              border: 2px solid rgba(255,255,255,0.3);
            "></span>
          </div>
        </div>
        <div style="
          position: absolute;
          top: -50%;
          right: -20%;
          width: 100px;
          height: 100px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          z-index: 1;
        "></div>
      </div>
    `;
  }
  
  /**
   * Create theme selector interface
   */
  createThemeSelector(containerId, industry = null) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container ${containerId} not found`);
      return;
    }
    
    const themes = industry ? this.getThemesByIndustry(industry) : this.getAllThemes();
    
    const selectorHTML = `
      <div class="theme-selector">
        <h3>Choose Your Theme</h3>
        <div class="theme-grid">
          ${themes.map(theme => `
            <div class="theme-option" data-theme-id="${theme.id}">
              ${this.generatePreviewHTML(theme)}
              <button class="select-theme-btn" onclick="themeManager.applyTheme('${theme.id}')">
                Select Theme
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    container.innerHTML = selectorHTML;
    
    // Add selector styles
    this.addSelectorStyles();
  }
  
  /**
   * Add theme selector styles
   */
  addSelectorStyles() {
    const existingStyles = document.querySelector('#theme-selector-styles');
    if (existingStyles) return;
    
    const styles = document.createElement('style');
    styles.id = 'theme-selector-styles';
    styles.textContent = `
      .theme-selector {
        padding: 2rem;
      }
      
      .theme-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      
      .theme-option {
        position: relative;
        transition: transform 0.3s ease;
      }
      
      .theme-option:hover {
        transform: translateY(-5px);
      }
      
      .select-theme-btn {
        width: 100%;
        padding: 10px;
        background: rgba(255,255,255,0.9);
        border: none;
        border-radius: 5px;
        margin-top: 10px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
      }
      
      .select-theme-btn:hover {
        background: white;
        transform: translateY(-2px);
      }
    `;
    
    document.head.appendChild(styles);
  }
  
  /**
   * Trigger theme change event
   */
  triggerThemeChangeEvent(theme) {
    const event = new CustomEvent('themeChanged', {
      detail: { theme: theme }
    });
    document.dispatchEvent(event);
  }
  
  /**
   * Register default themes
   */
  registerDefaultThemes() {
    // Restaurant themes
    this.registerTheme({
      id: 'rustic-charm',
      name: 'Rustic Charm',
      industry: 'restaurant',
      description: 'Warm woods, earth tones, farmhouse feel',
      colors: {
        primary: '#8B4513',
        secondary: '#D2691E',
        accent: '#F4A460',
        background: '#FFF8DC',
        text: '#2F1B14',
        light: '#F5F5DC',
        dark: '#654321',
        white: '#FFFFFF'
      },
      fonts: {
        heading: 'Georgia, "Times New Roman", serif',
        body: 'Crimson Text, Georgia, serif',
        accent: 'Playfair Display, serif'
      },
      features: ['Cozy', 'Traditional', 'Family-friendly']
    });
    
    this.registerTheme({
      id: 'modern-elegance',
      name: 'Modern Elegance',
      industry: 'restaurant',
      description: 'Clean lines, sophisticated colors, minimalist design',
      colors: {
        primary: '#2C3E50',
        secondary: '#34495E',
        accent: '#BDC3C7',
        background: '#FFFFFF',
        text: '#2C3E50',
        light: '#ECF0F1',
        dark: '#1A252F',
        white: '#FFFFFF'
      },
      fonts: {
        heading: 'Helvetica Neue, Arial, sans-serif',
        body: 'Arial, sans-serif',
        accent: 'Lato, sans-serif'
      },
      features: ['Sophisticated', 'Clean', 'Upscale']
    });
    
    // Tech themes
    this.registerTheme({
      id: 'silicon-valley',
      name: 'Silicon Valley',
      industry: 'tech',
      description: 'Blue and white, clean corporate look',
      colors: {
        primary: '#3498DB',
        secondary: '#2980B9',
        accent: '#E74C3C',
        background: '#FFFFFF',
        text: '#2C3E50',
        light: '#EBF5FB',
        dark: '#1B4F72',
        white: '#FFFFFF'
      },
      fonts: {
        heading: 'Inter, -apple-system, sans-serif',
        body: 'Roboto, Arial, sans-serif',
        accent: 'Source Code Pro, monospace'
      },
      features: ['Corporate', 'Clean', 'Professional']
    });
    
    this.registerTheme({
      id: 'ai-future',
      name: 'AI Future',
      industry: 'tech',
      description: 'Purple and cyan, futuristic tech-forward design',
      colors: {
        primary: '#8E44AD',
        secondary: '#9B59B6',
        accent: '#00FFFF',
        background: '#0D1117',
        text: '#FFFFFF',
        light: '#1C1C1C',
        dark: '#000000',
        white: '#FFFFFF'
      },
      fonts: {
        heading: 'Orbitron, monospace',
        body: 'Source Code Pro, monospace',
        accent: 'Rajdhani, sans-serif'
      },
      features: ['Futuristic', 'Tech', 'Innovation']
    });
    
    // Healthcare themes
    this.registerTheme({
      id: 'medical-professional',
      name: 'Medical Professional',
      industry: 'healthcare',
      description: 'White and blue, clean and trustworthy',
      colors: {
        primary: '#3498DB',
        secondary: '#2980B9',
        accent: '#27AE60',
        background: '#FFFFFF',
        text: '#2C3E50',
        light: '#F8FFFE',
        dark: '#1B4F72',
        white: '#FFFFFF'
      },
      fonts: {
        heading: 'Lato, Arial, sans-serif',
        body: 'Open Sans, Arial, sans-serif',
        accent: 'Roboto, sans-serif'
      },
      features: ['Clean', 'Trustworthy', 'Professional']
    });
    
    this.registerTheme({
      id: 'wellness-spa',
      name: 'Wellness Spa',
      industry: 'healthcare',
      description: 'Soft greens, calming and holistic feel',
      colors: {
        primary: '#58D68D',
        secondary: '#52C41A',
        accent: '#A9DFBF',
        background: '#FFFFFF',
        text: '#2C3E50',
        light: '#F0FFF4',
        dark: '#1E8449',
        white: '#FFFFFF'
      },
      fonts: {
        heading: 'Nunito, Arial, sans-serif',
        body: 'Source Sans Pro, Arial, sans-serif',
        accent: 'Dancing Script, cursive'
      },
      features: ['Calming', 'Natural', 'Wellness']
    });
  }
  
  /**
   * Export theme configuration
   */
  exportTheme(themeId) {
    const theme = this.themes.get(themeId);
    if (!theme) return null;
    
    return JSON.stringify(theme, null, 2);
  }
  
  /**
   * Import theme configuration
   */
  importTheme(themeJSON) {
    try {
      const theme = JSON.parse(themeJSON);
      return this.registerTheme(theme);
    } catch (error) {
      console.error('Failed to import theme:', error);
      return false;
    }
  }
}

// Initialize global theme manager
const themeManager = new ThemeManager();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => themeManager.init());
} else {
  themeManager.init();
}

// Make available globally
window.themeManager = themeManager;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeManager;
}