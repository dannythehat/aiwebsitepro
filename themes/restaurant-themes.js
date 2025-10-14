/**
 * Restaurant Industry Themes
 * 10 professional themes for restaurant businesses
 */

const restaurantThemes = [
  {
    id: 'rustic-charm',
    name: 'Rustic Charm',
    industry: 'restaurant',
    description: 'Warm woods, earth tones, farmhouse feel perfect for family restaurants',
    colors: {
      primary: '#8B4513',      // Saddle Brown
      secondary: '#D2691E',    // Chocolate
      accent: '#F4A460',       // Sandy Brown
      background: '#FFF8DC',   // Cornsilk
      text: '#2F1B14',         // Dark Brown
      light: '#F5F5DC',        // Beige
      dark: '#654321',         // Dark Brown
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Georgia, "Times New Roman", serif',
      body: 'Crimson Text, Georgia, serif',
      accent: 'Playfair Display, serif'
    },
    layout: {
      style: 'farmhouse',
      headerStyle: 'rustic',
      navigationStyle: 'horizontal'
    },
    images: {
      style: 'warm, rustic, wooden textures, farmhouse interior',
      filter: 'sepia(20%) contrast(110%) brightness(105%)'
    },
    features: ['Cozy', 'Traditional', 'Family-friendly'],
    industry_specific: {
      menu_style: 'wooden-board',
      reservation_style: 'cozy-form',
      testimonial_style: 'handwritten'
    }
  },

  {
    id: 'modern-elegance',
    name: 'Modern Elegance',
    industry: 'restaurant',
    description: 'Clean lines, sophisticated colors, minimalist design for upscale dining',
    colors: {
      primary: '#2C3E50',      // Dark Blue Gray
      secondary: '#34495E',    // Wet Asphalt
      accent: '#BDC3C7',       // Silver
      background: '#FFFFFF',   // White
      text: '#2C3E50',         // Dark Blue Gray
      light: '#ECF0F1',        // Clouds
      dark: '#1A252F',         // Dark Gray
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Helvetica Neue, Arial, sans-serif',
      body: 'Arial, Helvetica, sans-serif',
      accent: 'Lato, sans-serif'
    },
    layout: {
      style: 'minimalist',
      headerStyle: 'clean',
      navigationStyle: 'centered'
    },
    images: {
      style: 'clean, modern, sophisticated dining, minimalist',
      filter: 'contrast(105%) brightness(102%)'
    },
    features: ['Sophisticated', 'Clean', 'Upscale'],
    industry_specific: {
      menu_style: 'elegant-list',
      reservation_style: 'modern-form',
      testimonial_style: 'clean-cards'
    }
  },

  {
    id: 'italian-classic',
    name: 'Italian Classic',
    industry: 'restaurant',
    description: 'Rich reds, golds, traditional European styling for authentic Italian cuisine',
    colors: {
      primary: '#C0392B',      // Pomegranate
      secondary: '#E74C3C',    // Alizarin
      accent: '#F1C40F',       // Sun Flower
      background: '#FFFEF7',   // Cream
      text: '#2C1810',         // Dark Brown
      light: '#FDF2E9',        // Light Cream
      dark: '#922B21',         // Dark Red
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Playfair Display, Georgia, serif',
      body: 'Crimson Text, Georgia, serif',
      accent: 'Dancing Script, cursive'
    },
    layout: {
      style: 'traditional',
      headerStyle: 'ornate',
      navigationStyle: 'classic'
    },
    images: {
      style: 'Italian cuisine, traditional, warm lighting, European',
      filter: 'sepia(10%) saturate(110%) contrast(105%)'
    },
    features: ['Authentic', 'Traditional', 'European'],
    industry_specific: {
      menu_style: 'italian-classic',
      reservation_style: 'traditional-form',
      testimonial_style: 'italic-quotes'
    }
  },

  {
    id: 'coastal-fresh',
    name: 'Coastal Fresh',
    industry: 'restaurant',
    description: 'Blues, whites, seafood restaurant vibe with ocean-inspired elements',
    colors: {
      primary: '#3498DB',      // Peter River
      secondary: '#5DADE2',    // Sky Blue
      accent: '#48C9B0',       // Medium Turquoise
      background: '#FFFFFF',   // White
      text: '#2C3E50',         // Midnight Blue
      light: '#EBF5FB',        // Light Blue
      dark: '#1B4F72',         // Dark Blue
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Montserrat, Arial, sans-serif',
      body: 'Open Sans, Arial, sans-serif',
      accent: 'Lobster, cursive'
    },
    layout: {
      style: 'coastal',
      headerStyle: 'wave',
      navigationStyle: 'floating'
    },
    images: {
      style: 'seafood, ocean, coastal, fresh, nautical',
      filter: 'hue-rotate(10deg) saturate(110%) brightness(105%)'
    },
    features: ['Fresh', 'Seafood', 'Coastal'],
    industry_specific: {
      menu_style: 'ocean-wave',
      reservation_style: 'coastal-form',
      testimonial_style: 'wave-cards'
    }
  },

  {
    id: 'urban-chic',
    name: 'Urban Chic',
    industry: 'restaurant',
    description: 'Dark backgrounds, neon accents, trendy metropolitan restaurant style',
    colors: {
      primary: '#1C1C1C',      // Almost Black
      secondary: '#FF6B35',    // Orange Red
      accent: '#00D4FF',       // Cyan
      background: '#FFFFFF',   // White
      text: '#1C1C1C',         // Almost Black
      light: '#F8F8F8',        // Light Gray
      dark: '#000000',         // Black
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Oswald, Arial, sans-serif',
      body: 'Source Sans Pro, Arial, sans-serif',
      accent: 'Bebas Neue, cursive'
    },
    layout: {
      style: 'urban',
      headerStyle: 'bold',
      navigationStyle: 'sidebar'
    },
    images: {
      style: 'urban, trendy, neon lights, metropolitan, modern',
      filter: 'contrast(115%) saturate(120%)'
    },
    features: ['Trendy', 'Modern', 'Urban'],
    industry_specific: {
      menu_style: 'neon-glow',
      reservation_style: 'urban-form',
      testimonial_style: 'neon-cards'
    }
  },

  {
    id: 'family-friendly',
    name: 'Family Friendly',
    industry: 'restaurant',
    description: 'Bright colors, playful fonts, welcoming atmosphere for families',
    colors: {
      primary: '#F39C12',      // Orange
      secondary: '#E67E22',    // Carrot
      accent: '#E74C3C',       // Alizarin
      background: '#FFFFFF',   // White
      text: '#2C3E50',         // Midnight Blue
      light: '#FEF9E7',        // Light Yellow
      dark: '#D68910',         // Dark Orange
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Fredoka One, Arial, sans-serif',
      body: 'Nunito, Arial, sans-serif',
      accent: 'Comic Neue, cursive'
    },
    layout: {
      style: 'playful',
      headerStyle: 'fun',
      navigationStyle: 'colorful'
    },
    images: {
      style: 'family dining, colorful, playful, kids friendly',
      filter: 'saturate(120%) brightness(110%)'
    },
    features: ['Playful', 'Colorful', 'Kid-friendly'],
    industry_specific: {
      menu_style: 'colorful-cards',
      reservation_style: 'fun-form',
      testimonial_style: 'happy-bubbles'
    }
  },

  {
    id: 'fine-dining',
    name: 'Fine Dining',
    industry: 'restaurant',
    description: 'Black and gold luxury feel for premium positioning and high-end restaurants',
    colors: {
      primary: '#000000',      // Black
      secondary: '#FFD700',    // Gold
      accent: '#C0C0C0',       // Silver
      background: '#FFFFFF',   // White
      text: '#000000',         // Black
      light: '#F8F8F8',        // Light Gray
      dark: '#1A1A1A',         // Dark Gray
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Cormorant Garamond, Georgia, serif',
      body: 'Lora, Georgia, serif',
      accent: 'Great Vibes, cursive'
    },
    layout: {
      style: 'luxury',
      headerStyle: 'elegant',
      navigationStyle: 'refined'
    },
    images: {
      style: 'fine dining, luxury, elegant, gold accents, premium',
      filter: 'contrast(110%) brightness(95%) sepia(5%)'
    },
    features: ['Luxury', 'Premium', 'Elegant'],
    industry_specific: {
      menu_style: 'gold-border',
      reservation_style: 'luxury-form',
      testimonial_style: 'elegant-quotes'
    }
  },

  {
    id: 'cafe-cozy',
    name: 'Cafe Cozy',
    industry: 'restaurant',
    description: 'Soft pastels, comfortable, coffee shop aesthetic with warm atmosphere',
    colors: {
      primary: '#D7BDE2',      // Light Purple
      secondary: '#F8C471',    // Light Orange
      accent: '#85C1E9',       // Light Blue
      background: '#FFFFFF',   // White
      text: '#5D4E75',         // Dark Purple
      light: '#FAF0E6',        // Linen
      dark: '#6C3483',         // Dark Purple
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Quicksand, Arial, sans-serif',
      body: 'Karla, Arial, sans-serif',
      accent: 'Kalam, cursive'
    },
    layout: {
      style: 'cozy',
      headerStyle: 'soft',
      navigationStyle: 'rounded'
    },
    images: {
      style: 'coffee shop, cozy, pastels, comfortable seating',
      filter: 'sepia(15%) saturate(90%) brightness(110%)'
    },
    features: ['Cozy', 'Comfortable', 'Cafe'],
    industry_specific: {
      menu_style: 'coffee-menu',
      reservation_style: 'cozy-form',
      testimonial_style: 'soft-cards'
    }
  },

  {
    id: 'steakhouse-bold',
    name: 'Steakhouse Bold',
    industry: 'restaurant',
    description: 'Deep reds, leather textures, masculine steakhouse atmosphere',
    colors: {
      primary: '#922B21',      // Dark Red
      secondary: '#CB4335',    // Red
      accent: '#D4AF37',       // Gold
      background: '#FFFFFF',   // White
      text: '#1C1C1C',         // Almost Black
      light: '#FADBD8',        // Light Red
      dark: '#641E16',         // Very Dark Red
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Merriweather, Georgia, serif',
      body: 'Source Serif Pro, Georgia, serif',
      accent: 'Cinzel, serif'
    },
    layout: {
      style: 'bold',
      headerStyle: 'strong',
      navigationStyle: 'masculine'
    },
    images: {
      style: 'steakhouse, leather, dark wood, masculine, premium meat',
      filter: 'contrast(115%) saturate(105%) brightness(95%)'
    },
    features: ['Bold', 'Masculine', 'Premium'],
    industry_specific: {
      menu_style: 'leather-bound',
      reservation_style: 'bold-form',
      testimonial_style: 'strong-quotes'
    }
  },

  {
    id: 'fusion-modern',
    name: 'Fusion Modern',
    industry: 'restaurant',
    description: 'Mixed cultural elements, contemporary design for fusion cuisine',
    colors: {
      primary: '#8E44AD',      // Purple
      secondary: '#3498DB',    // Blue
      accent: '#E67E22',       // Orange
      background: '#FFFFFF',   // White
      text: '#2C3E50',         // Dark Blue Gray
      light: '#F4F6F7',        // Light Gray
      dark: '#6C3483',         // Dark Purple
      white: '#FFFFFF'
    },
    fonts: {
      heading: 'Poppins, Arial, sans-serif',
      body: 'Roboto, Arial, sans-serif',
      accent: 'Pacifico, cursive'
    },
    layout: {
      style: 'fusion',
      headerStyle: 'modern',
      navigationStyle: 'dynamic'
    },
    images: {
      style: 'fusion cuisine, modern, multicultural, contemporary',
      filter: 'saturate(110%) contrast(105%) hue-rotate(5deg)'
    },
    features: ['Modern', 'Fusion', 'Contemporary'],
    industry_specific: {
      menu_style: 'fusion-grid',
      reservation_style: 'modern-form',
      testimonial_style: 'dynamic-cards'
    }
  }
];

// Register all restaurant themes
if (typeof window !== 'undefined' && window.themeManager) {
  restaurantThemes.forEach(theme => {
    window.themeManager.registerTheme(theme);
  });
  console.log('🍽️ Registered 10 restaurant themes');
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = restaurantThemes;
}