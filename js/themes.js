// AI Website Pro - Themes Module
// Color schemes and visual themes

AIWebsitePro.themes = {
    modern: {
        primary: '#3B82F6',
        secondary: '#1E40AF',
        accent: '#F59E0B',
        background: '#FFFFFF',
        text: '#1F2937',
        gradient: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)'
    },
    
    dark: {
        primary: '#10B981',
        secondary: '#059669',
        accent: '#F59E0B',
        background: '#111827',
        text: '#F9FAFB',
        gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    
    elegant: {
        primary: '#8B5CF6',
        secondary: '#7C3AED',
        accent: '#F59E0B',
        background: '#FAFAFA',
        text: '#374151',
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
    },
    
    corporate: {
        primary: '#1F2937',
        secondary: '#374151',
        accent: '#3B82F6',
        background: '#FFFFFF',
        text: '#1F2937',
        gradient: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)'
    },
    
    vibrant: {
        primary: '#EF4444',
        secondary: '#DC2626',
        accent: '#F59E0B',
        background: '#FFFFFF',
        text: '#1F2937',
        gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
    }
};

// Apply theme to page
AIWebsitePro.applyTheme = function(themeName) {
    const theme = this.themes[themeName];
    if (!theme) return;
    
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--bg-color', theme.background);
    root.style.setProperty('--text-color', theme.text);
    root.style.setProperty('--gradient', theme.gradient);
};

// Get random theme
AIWebsitePro.getRandomTheme = function() {
    const themeNames = Object.keys(this.themes);
    const randomName = themeNames[Math.floor(Math.random() * themeNames.length)];
    return { name: randomName, theme: this.themes[randomName] };
};

AIWebsitePro.loadModule('themes');