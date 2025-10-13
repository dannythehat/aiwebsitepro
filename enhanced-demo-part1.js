// ENHANCED INDUSTRY TEMPLATES WITH MULTIPLE LOGOS AND THEMES
// Part 1: Restaurant, Healthcare, Fitness, Technology, Beauty & Spa

const enhancedIndustryTemplates = {
    restaurant: {
        // Multiple logo options for restaurants
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/85ac6a42.png", // Modern elegant
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/9e298356.png", // Rustic Italian
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/5416baed.png", // Modern sushi
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/3bef3ad6.png", // Upscale steakhouse
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/2f24bf27.png"  // Cozy cafe
        ],
        
        // Multiple theme variations
        themes: {
            elegant: {
                title: "Bella Vista Ristorante",
                subtitle: "Authentic Italian cuisine crafted with passion and served with elegance in our warm, inviting atmosphere",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/ce3ea410.png",
                colorScheme: { primary: "#8B4513", secondary: "#DAA520", accent: "#FFF8DC" },
                features: [
                    { icon: "🍝", title: "Handmade Pasta", desc: "Fresh pasta made daily with traditional Italian techniques" },
                    { icon: "🍷", title: "Wine Cellar", desc: "Extensive collection of Italian and international wines" },
                    { icon: "👨‍🍳", title: "Master Chef", desc: "Michelin-trained chef with 20+ years experience" }
                ]
            },
            rustic: {
                title: "Nonna's Kitchen",
                subtitle: "Family recipes passed down through generations, served in a cozy, rustic setting that feels like home",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/cf73b914.png",
                colorScheme: { primary: "#8B0000", secondary: "#228B22", accent: "#FFFAF0" },
                features: [
                    { icon: "🏠", title: "Family Recipes", desc: "Traditional dishes from our grandmother's cookbook" },
                    { icon: "🌿", title: "Fresh Herbs", desc: "Grown in our own garden behind the restaurant" },
                    { icon: "🔥", title: "Wood-Fired Oven", desc: "Authentic flavors from our traditional brick oven" }
                ]
            },
            modern: {
                title: "Sakura Sushi Bar",
                subtitle: "Contemporary Japanese dining experience with fresh sashimi, creative rolls, and authentic flavors",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/ce3ea410.png",
                colorScheme: { primary: "#000000", secondary: "#DC143C", accent: "#F5F5F5" },
                features: [
                    { icon: "🍣", title: "Fresh Sashimi", desc: "Daily selection of premium fish flown in from Japan" },
                    { icon: "🥢", title: "Omakase Experience", desc: "Chef's choice tasting menu with seasonal specialties" },
                    { icon: "🍵", title: "Tea Ceremony", desc: "Traditional Japanese tea service and sake pairings" }
                ]
            },
            upscale: {
                title: "Prime Cut Steakhouse",
                subtitle: "Premium steaks and fine dining in an sophisticated atmosphere with impeccable service",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/ce3ea410.png",
                colorScheme: { primary: "#800000", secondary: "#FFD700", accent: "#2F2F2F" },
                features: [
                    { icon: "🥩", title: "Prime Cuts", desc: "USDA Prime beef aged to perfection" },
                    { icon: "🍾", title: "Wine Sommelier", desc: "Expert wine pairings and rare vintage selections" },
                    { icon: "🕯️", title: "Private Dining", desc: "Exclusive dining rooms for special occasions" }
                ]
            },
            casual: {
                title: "Corner Cafe & Bistro",
                subtitle: "Relaxed neighborhood spot serving comfort food, artisan coffee, and homemade pastries all day",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/cf73b914.png",
                colorScheme: { primary: "#8B4513", secondary: "#DEB887", accent: "#FFF8DC" },
                features: [
                    { icon: "☕", title: "Artisan Coffee", desc: "Locally roasted beans and specialty brewing methods" },
                    { icon: "🥐", title: "Fresh Pastries", desc: "Baked daily in our kitchen with organic ingredients" },
                    { icon: "📚", title: "Cozy Atmosphere", desc: "Perfect spot for work, study, or catching up with friends" }
                ]
            }
        }
    },

    healthcare: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/9d40660a.png", // Modern medical clinic
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/501b9a55.png", // Dental practice
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/eeb2ab4c.png", // Pediatric clinic
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/8e5b88af.png", // Physical therapy
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/bf723af8.png"  // Mental health
        ],
        
        themes: {
            modern: {
                title: "Advanced Medical Center",
                subtitle: "Comprehensive healthcare services with cutting-edge technology and compassionate patient care",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#0066CC", secondary: "#00A86B", accent: "#F0F8FF" },
                features: [
                    { icon: "🏥", title: "State-of-Art Facility", desc: "Modern equipment and comfortable patient environments" },
                    { icon: "👩‍⚕️", title: "Expert Physicians", desc: "Board-certified doctors with specialized training" },
                    { icon: "📱", title: "Digital Health", desc: "Telemedicine and electronic health records" }
                ]
            },
            dental: {
                title: "Bright Smile Dental",
                subtitle: "Complete dental care for the whole family in a comfortable, anxiety-free environment",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#00CED1", secondary: "#98FB98", accent: "#F0FFFF" },
                features: [
                    { icon: "🦷", title: "Preventive Care", desc: "Regular cleanings and comprehensive oral health exams" },
                    { icon: "✨", title: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, and smile makeovers" },
                    { icon: "🔧", title: "Restorative Work", desc: "Crowns, bridges, and dental implant services" }
                ]
            },
            pediatric: {
                title: "Little Stars Pediatrics",
                subtitle: "Specialized healthcare for children from infancy through adolescence with gentle, caring approach",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#FF69B4", secondary: "#87CEEB", accent: "#FFF0F5" },
                features: [
                    { icon: "👶", title: "Infant Care", desc: "Well-baby visits and developmental screenings" },
                    { icon: "💉", title: "Immunizations", desc: "Complete vaccination schedules and travel vaccines" },
                    { icon: "🎈", title: "Child-Friendly", desc: "Playful environment designed to reduce anxiety" }
                ]
            },
            therapy: {
                title: "Active Recovery Physical Therapy",
                subtitle: "Personalized rehabilitation programs to restore function and improve quality of life",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/a1586c09.png",
                colorScheme: { primary: "#FF4500", secondary: "#4169E1", accent: "#F5F5DC" },
                features: [
                    { icon: "🏃", title: "Sports Rehab", desc: "Specialized treatment for athletic injuries and performance" },
                    { icon: "🧘", title: "Manual Therapy", desc: "Hands-on techniques for pain relief and mobility" },
                    { icon: "💪", title: "Strength Training", desc: "Progressive exercise programs for full recovery" }
                ]
            },
            wellness: {
                title: "Mindful Wellness Center",
                subtitle: "Holistic mental health services promoting emotional well-being and personal growth",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#9370DB", secondary: "#32CD32", accent: "#F0F8FF" },
                features: [
                    { icon: "🧠", title: "Counseling Services", desc: "Individual and group therapy for various mental health needs" },
                    { icon: "🌱", title: "Mindfulness Training", desc: "Meditation and stress reduction techniques" },
                    { icon: "💚", title: "Holistic Approach", desc: "Integrating mind, body, and spirit for complete wellness" }
                ]
            }
        }
    },

    fitness: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/bb02b6a5.png", // Modern gym
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/01040dd4.png", // Yoga studio
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/84bb45bc.png", // CrossFit box
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/5a537076.png", // Personal trainer
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/5805d950.png"  // Wellness spa
        ],
        
        themes: {
            powerhouse: {
                title: "Iron Temple Gym",
                subtitle: "Serious training facility for dedicated athletes and fitness enthusiasts seeking maximum results",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/a1586c09.png",
                colorScheme: { primary: "#DC143C", secondary: "#000000", accent: "#C0C0C0" },
                features: [
                    { icon: "🏋️", title: "Heavy Iron", desc: "Olympic lifting platforms and competition-grade equipment" },
                    { icon: "💪", title: "Strength Focus", desc: "Powerlifting and bodybuilding specialized programs" },
                    { icon: "🔥", title: "Intense Training", desc: "High-intensity workouts for serious athletes" }
                ]
            },
            zen: {
                title: "Serenity Yoga Studio",
                subtitle: "Peaceful sanctuary for yoga practice, meditation, and mindful movement in a tranquil setting",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#9370DB", secondary: "#FFD700", accent: "#F5F5DC" },
                features: [
                    { icon: "🧘", title: "Mindful Practice", desc: "Various yoga styles from gentle to advanced levels" },
                    { icon: "🕯️", title: "Meditation Space", desc: "Quiet areas for reflection and mindfulness practice" },
                    { icon: "🌿", title: "Natural Elements", desc: "Eco-friendly studio with plants and natural lighting" }
                ]
            },
            crossfit: {
                title: "Beast Mode CrossFit",
                subtitle: "High-intensity functional fitness training in a supportive community environment",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/a1586c09.png",
                colorScheme: { primary: "#FF4500", secondary: "#000000", accent: "#FFFFFF" },
                features: [
                    { icon: "⚡", title: "WOD Training", desc: "Daily varied workouts challenging all fitness levels" },
                    { icon: "🏆", title: "Competition Prep", desc: "Training for CrossFit competitions and events" },
                    { icon: "👥", title: "Community Spirit", desc: "Supportive team atmosphere and group motivation" }
                ]
            },
            personal: {
                title: "Elite Personal Training",
                subtitle: "One-on-one fitness coaching with customized programs designed for your specific goals",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/a1586c09.png",
                colorScheme: { primary: "#4169E1", secondary: "#32CD32", accent: "#F0F8FF" },
                features: [
                    { icon: "🎯", title: "Goal-Oriented", desc: "Personalized programs targeting your specific objectives" },
                    { icon: "📊", title: "Progress Tracking", desc: "Detailed monitoring and regular fitness assessments" },
                    { icon: "🏃", title: "Flexible Scheduling", desc: "Training sessions that fit your busy lifestyle" }
                ]
            },
            wellness: {
                title: "Harmony Wellness Center",
                subtitle: "Holistic approach to fitness combining physical training with mental and spiritual well-being",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#20B2AA", secondary: "#FFFFFF", accent: "#F0FFFF" },
                features: [
                    { icon: "🌊", title: "Mind-Body Balance", desc: "Integrating physical fitness with mental wellness" },
                    { icon: "💆", title: "Recovery Services", desc: "Massage therapy and relaxation treatments" },
                    { icon: "🥗", title: "Nutrition Guidance", desc: "Holistic nutrition counseling and meal planning" }
                ]
            }
        }
    },

    technology: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/cba0b502.png", // Tech startup
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/de4bacb7.png", // Software development
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/84791cdf.png", // Cloud computing
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f0e2524f.png", // Mobile app development
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/c9dc1828.png"  // Cybersecurity
        ],
        
        themes: {
            startup: {
                title: "InnovateTech Solutions",
                subtitle: "Cutting-edge technology solutions driving digital transformation and business innovation",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#0080FF", secondary: "#C0C0C0", accent: "#F0F8FF" },
                features: [
                    { icon: "🚀", title: "Innovation First", desc: "Pioneering solutions using latest technologies" },
                    { icon: "⚡", title: "Rapid Development", desc: "Agile methodologies for fast project delivery" },
                    { icon: "🌐", title: "Global Reach", desc: "Scalable solutions for worldwide deployment" }
                ]
            },
            development: {
                title: "CodeCraft Software",
                subtitle: "Custom software development with expertise in modern frameworks and emerging technologies",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#00FF00", secondary: "#191970", accent: "#F5F5F5" },
                features: [
                    { icon: "💻", title: "Full-Stack Development", desc: "End-to-end web and mobile application development" },
                    { icon: "🤖", title: "AI Integration", desc: "Machine learning and artificial intelligence solutions" },
                    { icon: "🔧", title: "DevOps Excellence", desc: "Automated deployment and continuous integration" }
                ]
            },
            cloud: {
                title: "CloudSync Technologies",
                subtitle: "Cloud infrastructure and migration services for scalable, secure, and efficient operations",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#9370DB", secondary: "#00CED1", accent: "#F0F8FF" },
                features: [
                    { icon: "☁️", title: "Cloud Migration", desc: "Seamless transition to cloud infrastructure" },
                    { icon: "🔄", title: "Auto Scaling", desc: "Dynamic resource allocation and optimization" },
                    { icon: "🛡️", title: "Security First", desc: "Enterprise-grade security and compliance" }
                ]
            },
            mobile: {
                title: "MobileFirst Apps",
                subtitle: "Native and cross-platform mobile applications with exceptional user experience and performance",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#FF4500", secondary: "#4169E1", accent: "#FFFFFF" },
                features: [
                    { icon: "📱", title: "Native Development", desc: "iOS and Android apps with platform-specific features" },
                    { icon: "🎨", title: "UI/UX Design", desc: "Intuitive interfaces and engaging user experiences" },
                    { icon: "📊", title: "Analytics Integration", desc: "Comprehensive app performance and user analytics" }
                ]
            },
            security: {
                title: "CyberShield Security",
                subtitle: "Comprehensive cybersecurity solutions protecting businesses from digital threats and vulnerabilities",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#DC143C", secondary: "#000000", accent: "#F5F5F5" },
                features: [
                    { icon: "🛡️", title: "Threat Protection", desc: "Advanced threat detection and prevention systems" },
                    { icon: "🔒", title: "Data Encryption", desc: "End-to-end encryption for sensitive information" },
                    { icon: "👁️", title: "24/7 Monitoring", desc: "Continuous security monitoring and incident response" }
                ]
            }
        }
    },

    beauty: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/848148ee.png", // Luxury beauty salon
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/75df4059.png", // Modern nail salon
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/fa3e8666.png", // Spa wellness
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f115a55e.png", // Hair salon
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/a49f3c27.png"  // Skincare clinic
        ],
        
        themes: {
            luxury: {
                title: "Elegance Beauty Salon",
                subtitle: "Luxury beauty treatments and spa services in an opulent setting designed for ultimate relaxation",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#FFB6C1", secondary: "#FFD700", accent: "#FFF0F5" },
                features: [
                    { icon: "💎", title: "Premium Services", desc: "Luxury treatments using high-end products and techniques" },
                    { icon: "🌹", title: "Elegant Atmosphere", desc: "Sophisticated environment with attention to every detail" },
                    { icon: "👑", title: "VIP Experience", desc: "Personalized service and exclusive treatment packages" }
                ]
            },
            trendy: {
                title: "Chic Nail Studio",
                subtitle: "Modern nail art and beauty services with the latest trends and innovative techniques",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#FF6347", secondary: "#FFD700", accent: "#FFFFFF" },
                features: [
                    { icon: "💅", title: "Nail Art", desc: "Creative designs and latest nail fashion trends" },
                    { icon: "✨", title: "Gel & Acrylics", desc: "Long-lasting manicures with premium products" },
                    { icon: "🎨", title: "Custom Designs", desc: "Personalized nail art tailored to your style" }
                ]
            },
            zen: {
                title: "Tranquil Spa Retreat",
                subtitle: "Peaceful wellness sanctuary offering holistic treatments for mind, body, and spirit rejuvenation",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#32CD32", secondary: "#FFFFFF", accent: "#F0FFF0" },
                features: [
                    { icon: "🧘", title: "Holistic Wellness", desc: "Treatments that nurture both body and mind" },
                    { icon: "🌿", title: "Natural Products", desc: "Organic and eco-friendly beauty treatments" },
                    { icon: "🕯️", title: "Serene Environment", desc: "Peaceful atmosphere for complete relaxation" }
                ]
            },
            modern: {
                title: "Style Studio Hair Salon",
                subtitle: "Contemporary hair styling and color services with expert stylists and modern techniques",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#000000", secondary: "#C0C0C0", accent: "#FFFFFF" },
                features: [
                    { icon: "✂️", title: "Expert Styling", desc: "Professional cuts and styles for all hair types" },
                    { icon: "🎨", title: "Color Specialists", desc: "Advanced coloring techniques and treatments" },
                    { icon: "💫", title: "Hair Treatments", desc: "Restorative treatments for healthy, beautiful hair" }
                ]
            },
            clinical: {
                title: "Pure Skin Clinic",
                subtitle: "Advanced skincare treatments and medical aesthetics for healthy, radiant skin",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/8fbaa114.png",
                colorScheme: { primary: "#E6E6FA", secondary: "#DDA0DD", accent: "#F8F8FF" },
                features: [
                    { icon: "🔬", title: "Medical Grade", desc: "Clinical-strength treatments and professional products" },
                    { icon: "🌸", title: "Anti-Aging", desc: "Advanced treatments for youthful, healthy skin" },
                    { icon: "💧", title: "Hydration Therapy", desc: "Deep moisturizing and skin barrier restoration" }
                ]
            }
        }
    }
};