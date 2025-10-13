// COMPREHENSIVE DEMO ENHANCEMENTS
// 60+ Logos and Themes for AI Website Demo
// Add this script to your demo.html file

// Enhanced Industry Templates with Multiple Logos and Themes
const enhancedIndustryTemplates = {
    restaurant: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/85ac6a42.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/9e298356.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/5416baed.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/3bef3ad6.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/2f24bf27.png"
        ],
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
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/9d40660a.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/501b9a55.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/eeb2ab4c.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/8e5b88af.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/bf723af8.png"
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
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/bb02b6a5.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/01040dd4.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/84bb45bc.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/5a537076.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/5805d950.png"
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
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/cba0b502.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/de4bacb7.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/84791cdf.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f0e2524f.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/c9dc1828.png"
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
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/848148ee.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/75df4059.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/fa3e8666.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f115a55e.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/a49f3c27.png"
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
    },
    legal: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/02ef6d91.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/cb965834.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/02ef6d91.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/cb965834.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/02ef6d91.png"
        ],
        themes: {
            corporate: {
                title: "Sterling & Associates Law Firm",
                subtitle: "Premier legal services for corporations and high-net-worth individuals with decades of experience",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#191970", secondary: "#FFD700", accent: "#F5F5F5" },
                features: [
                    { icon: "⚖️", title: "Corporate Law", desc: "Comprehensive business legal services and compliance" },
                    { icon: "🏛️", title: "Litigation", desc: "Experienced trial attorneys with proven track record" },
                    { icon: "📋", title: "Contract Review", desc: "Thorough contract analysis and negotiation services" }
                ]
            },
            family: {
                title: "Compassionate Family Law",
                subtitle: "Sensitive legal guidance for family matters with personalized attention and care",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#4682B4", secondary: "#DDA0DD", accent: "#F0F8FF" },
                features: [
                    { icon: "👨‍👩‍👧‍👦", title: "Family Matters", desc: "Divorce, custody, and family legal issues" },
                    { icon: "💝", title: "Mediation", desc: "Peaceful resolution through professional mediation" },
                    { icon: "🤝", title: "Collaborative Law", desc: "Working together for the best family outcomes" }
                ]
            },
            criminal: {
                title: "Defense Attorney Group",
                subtitle: "Aggressive criminal defense representation protecting your rights and freedom",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#8B0000", secondary: "#000000", accent: "#FFFFFF" },
                features: [
                    { icon: "🛡️", title: "Criminal Defense", desc: "Experienced defense for all criminal charges" },
                    { icon: "⏰", title: "24/7 Availability", desc: "Emergency legal assistance when you need it most" },
                    { icon: "🎯", title: "Case Strategy", desc: "Personalized defense strategies for each case" }
                ]
            },
            injury: {
                title: "Personal Injury Advocates",
                subtitle: "Fighting for maximum compensation for accident victims and their families",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#DC143C", secondary: "#4169E1", accent: "#F0F8FF" },
                features: [
                    { icon: "🚗", title: "Auto Accidents", desc: "Comprehensive representation for vehicle accidents" },
                    { icon: "🏥", title: "Medical Malpractice", desc: "Holding healthcare providers accountable" },
                    { icon: "💰", title: "No Fee Unless We Win", desc: "Contingency fee structure - no upfront costs" }
                ]
            },
            business: {
                title: "Business Legal Solutions",
                subtitle: "Strategic legal counsel for startups, SMEs, and growing businesses",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#2F4F4F", secondary: "#20B2AA", accent: "#F0FFFF" },
                features: [
                    { icon: "🏢", title: "Business Formation", desc: "Entity formation and corporate structuring" },
                    { icon: "📄", title: "Contracts", desc: "Business agreements and contract management" },
                    { icon: "🔒", title: "IP Protection", desc: "Intellectual property and trademark services" }
                ]
            }
        }
    },
    consulting: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/0ac5324b.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/5a66be64.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/0ac5324b.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/5a66be64.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/0ac5324b.png"
        ],
        themes: {
            strategy: {
                title: "Strategic Growth Consultants",
                subtitle: "Transforming businesses through strategic planning, operational excellence, and growth initiatives",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#4169E1", secondary: "#32CD32", accent: "#F0F8FF" },
                features: [
                    { icon: "📈", title: "Growth Strategy", desc: "Data-driven strategies for sustainable business growth" },
                    { icon: "🎯", title: "Market Analysis", desc: "Comprehensive market research and competitive analysis" },
                    { icon: "⚡", title: "Process Optimization", desc: "Streamlining operations for maximum efficiency" }
                ]
            },
            management: {
                title: "Executive Management Solutions",
                subtitle: "Leadership development and organizational transformation for high-performing companies",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#2F4F4F", secondary: "#B8860B", accent: "#F5F5DC" },
                features: [
                    { icon: "👔", title: "Leadership Development", desc: "Executive coaching and leadership training programs" },
                    { icon: "🏗️", title: "Organizational Design", desc: "Restructuring for optimal performance and culture" },
                    { icon: "📊", title: "Performance Management", desc: "KPI development and performance tracking systems" }
                ]
            },
            technology: {
                title: "Digital Transformation Partners",
                subtitle: "Guiding businesses through digital transformation with technology strategy and implementation",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#9370DB", secondary: "#00CED1", accent: "#F0F8FF" },
                features: [
                    { icon: "💻", title: "IT Strategy", desc: "Technology roadmaps and digital transformation planning" },
                    { icon: "🔄", title: "System Integration", desc: "Seamless integration of business systems and processes" },
                    { icon: "📱", title: "Digital Solutions", desc: "Custom software and digital platform development" }
                ]
            },
            financial: {
                title: "Financial Advisory Group",
                subtitle: "Expert financial consulting for business optimization, investment strategy, and risk management",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#006400", secondary: "#FFD700", accent: "#F0FFF0" },
                features: [
                    { icon: "💰", title: "Financial Planning", desc: "Comprehensive financial analysis and planning services" },
                    { icon: "📈", title: "Investment Strategy", desc: "Portfolio management and investment advisory services" },
                    { icon: "🛡️", title: "Risk Management", desc: "Risk assessment and mitigation strategies" }
                ]
            },
            startup: {
                title: "Startup Success Partners",
                subtitle: "Specialized consulting for startups and entrepreneurs from ideation to scale",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#FF4500", secondary: "#4169E1", accent: "#FFFFFF" },
                features: [
                    { icon: "🚀", title: "Business Planning", desc: "Comprehensive business plan development and validation" },
                    { icon: "💡", title: "Innovation Strategy", desc: "Product development and go-to-market strategies" },
                    { icon: "💼", title: "Funding Support", desc: "Investor relations and funding strategy assistance" }
                ]
            }
        }
    },
    realestate: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/e1c54d9b.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/2f5969ef.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/e1c54d9b.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/2f5969ef.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/e1c54d9b.png"
        ],
        themes: {
            residential: {
                title: "Premier Home Realty",
                subtitle: "Your trusted partner in finding the perfect home with personalized service and local expertise",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#228B22", secondary: "#FFD700", accent: "#F0FFF0" },
                features: [
                    { icon: "🏠", title: "Home Sales", desc: "Expert guidance through buying and selling process" },
                    { icon: "🔍", title: "Property Search", desc: "Advanced search tools and personalized recommendations" },
                    { icon: "📍", title: "Local Expertise", desc: "Deep knowledge of neighborhoods and market trends" }
                ]
            },
            luxury: {
                title: "Elite Luxury Properties",
                subtitle: "Exclusive representation for luxury homes and high-end real estate investments",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#FFD700", secondary: "#000000", accent: "#FFFAF0" },
                features: [
                    { icon: "👑", title: "Luxury Homes", desc: "Exclusive access to premium properties and estates" },
                    { icon: "🥂", title: "White Glove Service", desc: "Concierge-level service for discerning clients" },
                    { icon: "🌟", title: "Global Network", desc: "International luxury real estate connections" }
                ]
            },
            commercial: {
                title: "Commercial Property Solutions",
                subtitle: "Comprehensive commercial real estate services for investors, businesses, and developers",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#4682B4", secondary: "#C0C0C0", accent: "#F0F8FF" },
                features: [
                    { icon: "🏢", title: "Office Spaces", desc: "Prime commercial office locations and leasing" },
                    { icon: "🏭", title: "Industrial Properties", desc: "Warehouses, manufacturing, and industrial facilities" },
                    { icon: "🛒", title: "Retail Locations", desc: "High-traffic retail spaces and shopping centers" }
                ]
            },
            investment: {
                title: "Real Estate Investment Group",
                subtitle: "Strategic real estate investment opportunities with proven returns and portfolio growth",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#8B0000", secondary: "#FFD700", accent: "#FFF8DC" },
                features: [
                    { icon: "📊", title: "Investment Analysis", desc: "Comprehensive ROI analysis and market research" },
                    { icon: "🏘️", title: "Portfolio Management", desc: "Diversified real estate investment portfolios" },
                    { icon: "💹", title: "Market Insights", desc: "Expert analysis of real estate market trends" }
                ]
            },
            property: {
                title: "Property Management Pros",
                subtitle: "Full-service property management for residential and commercial property owners",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#2E8B57", secondary: "#F0E68C", accent: "#F0FFF0" },
                features: [
                    { icon: "🔧", title: "Maintenance Services", desc: "24/7 maintenance and repair coordination" },
                    { icon: "👥", title: "Tenant Relations", desc: "Professional tenant screening and management" },
                    { icon: "💰", title: "Financial Management", desc: "Rent collection and financial reporting services" }
                ]
            }
        }
    },
    education: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/1b8d814c.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f703cdc2.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/1b8d814c.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f703cdc2.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/1b8d814c.png"
        ],
        themes: {
            academy: {
                title: "Excellence Learning Academy",
                subtitle: "Comprehensive educational programs designed to unlock potential and achieve academic success",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#4169E1", secondary: "#FF8C00", accent: "#F0F8FF" },
                features: [
                    { icon: "📚", title: "Comprehensive Curriculum", desc: "Well-rounded education covering all core subjects" },
                    { icon: "👨‍🏫", title: "Expert Teachers", desc: "Qualified educators with proven teaching experience" },
                    { icon: "🎓", title: "College Prep", desc: "Advanced placement and college preparation programs" }
                ]
            },
            online: {
                title: "Digital Learning Platform",
                subtitle: "Innovative online education with interactive courses and personalized learning experiences",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#9370DB", secondary: "#FF8C00", accent: "#F8F8FF" },
                features: [
                    { icon: "💻", title: "Online Courses", desc: "Flexible online learning with interactive content" },
                    { icon: "📱", title: "Mobile Learning", desc: "Learn anywhere with mobile-optimized platform" },
                    { icon: "🎯", title: "Personalized Path", desc: "Adaptive learning tailored to individual needs" }
                ]
            },
            professional: {
                title: "Professional Development Institute",
                subtitle: "Career-focused training and certification programs for professional advancement",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#2F4F4F", secondary: "#20B2AA", accent: "#F0FFFF" },
                features: [
                    { icon: "💼", title: "Career Training", desc: "Industry-specific skills and certification programs" },
                    { icon: "🏆", title: "Professional Certs", desc: "Recognized certifications for career advancement" },
                    { icon: "🤝", title: "Industry Partnerships", desc: "Direct connections with leading employers" }
                ]
            },
            language: {
                title: "Global Language Center",
                subtitle: "Immersive language learning programs with native speakers and cultural immersion",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#DC143C", secondary: "#FFD700", accent: "#FFF8DC" },
                features: [
                    { icon: "🌍", title: "Multiple Languages", desc: "Comprehensive programs in 15+ languages" },
                    { icon: "🗣️", title: "Native Speakers", desc: "Learn from qualified native-speaking instructors" },
                    { icon: "🎭", title: "Cultural Immersion", desc: "Language learning through cultural experiences" }
                ]
            },
            tutoring: {
                title: "Academic Success Tutoring",
                subtitle: "Personalized one-on-one tutoring and small group instruction for all grade levels",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#228B22", secondary: "#FF6347", accent: "#F0FFF0" },
                features: [
                    { icon: "👨‍🎓", title: "One-on-One", desc: "Personalized tutoring tailored to individual needs" },
                    { icon: "📈", title: "Progress Tracking", desc: "Regular assessments and progress monitoring" },
                    { icon: "🎯", title: "Test Prep", desc: "Specialized preparation for standardized tests" }
                ]
            }
        }
    },
    automotive: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f94d0668.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f94d0668.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f94d0668.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f94d0668.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/f94d0668.png"
        ],
        themes: {
            repair: {
                title: "Expert Auto Repair Shop",
                subtitle: "Professional automotive repair and maintenance services with certified technicians",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#DC143C", secondary: "#000000", accent: "#F5F5F5" },
                features: [
                    { icon: "🔧", title: "Expert Repairs", desc: "Certified technicians for all makes and models" },
                    { icon: "⚡", title: "Quick Service", desc: "Fast turnaround times with quality workmanship" },
                    { icon: "🛡️", title: "Warranty", desc: "Comprehensive warranty on all repairs and parts" }
                ]
            },
            dealership: {
                title: "Premium Auto Dealership",
                subtitle: "New and pre-owned vehicles with financing options and exceptional customer service",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#4169E1", secondary: "#C0C0C0", accent: "#F0F8FF" },
                features: [
                    { icon: "🚗", title: "Quality Vehicles", desc: "Extensive inventory of new and certified pre-owned cars" },
                    { icon: "💰", title: "Financing Options", desc: "Competitive rates and flexible financing solutions" },
                    { icon: "🤝", title: "Trade-In Program", desc: "Fair market value for your current vehicle" }
                ]
            },
            luxury: {
                title: "Luxury Auto Services",
                subtitle: "Premium automotive services for luxury and exotic vehicles with specialized expertise",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#FFD700", secondary: "#000000", accent: "#FFFAF0" },
                features: [
                    { icon: "👑", title: "Luxury Specialists", desc: "Expert service for premium and exotic vehicles" },
                    { icon: "🏆", title: "Concierge Service", desc: "White-glove service with pickup and delivery" },
                    { icon: "✨", title: "Premium Parts", desc: "Genuine OEM parts and premium aftermarket options" }
                ]
            },
            parts: {
                title: "Auto Parts Warehouse",
                subtitle: "Comprehensive inventory of automotive parts and accessories for all vehicle types",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#FF4500", secondary: "#2F4F4F", accent: "#FFFFFF" },
                features: [
                    { icon: "🔩", title: "Vast Inventory", desc: "Extensive selection of parts for all makes and models" },
                    { icon: "🚚", title: "Fast Delivery", desc: "Same-day delivery and nationwide shipping options" },
                    { icon: "💡", title: "Expert Advice", desc: "Knowledgeable staff to help find the right parts" }
                ]
            },
            detailing: {
                title: "Premium Auto Detailing",
                subtitle: "Professional car detailing and protection services to keep your vehicle looking pristine",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#00CED1", secondary: "#FFFFFF", accent: "#F0FFFF" },
                features: [
                    { icon: "✨", title: "Paint Protection", desc: "Ceramic coating and paint protection film services" },
                    { icon: "🧽", title: "Interior Detailing", desc: "Deep cleaning and protection for all interior surfaces" },
                    { icon: "🚗", title: "Mobile Service", desc: "Convenient on-site detailing at your location" }
                ]
            }
        }
    },
    finance: {
        logos: [
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/55de3646.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/55de3646.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/55de3646.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/55de3646.png",
            "https://agents-storage.nyc3.digitaloceanspaces.com/images/55de3646.png"
        ],
        themes: {
            investment: {
                title: "Wealth Management Partners",
                subtitle: "Comprehensive investment management and wealth building strategies for long-term financial success",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#006400", secondary: "#FFD700", accent: "#F0FFF0" },
                features: [
                    { icon: "📈", title: "Portfolio Management", desc: "Diversified investment portfolios tailored to your goals" },
                    { icon: "💰", title: "Wealth Planning", desc: "Comprehensive financial planning and wealth strategies" },
                    { icon: "🎯", title: "Risk Management", desc: "Balanced approach to risk and return optimization" }
                ]
            },
            insurance: {
                title: "Comprehensive Insurance Solutions",
                subtitle: "Complete insurance coverage for individuals, families, and businesses with personalized service",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#4169E1", secondary: "#20B2AA", accent: "#F0F8FF" },
                features: [
                    { icon: "🛡️", title: "Life Insurance", desc: "Term and whole life insurance policies for family protection" },
                    { icon: "🏠", title: "Property Insurance", desc: "Home, auto, and property insurance coverage" },
                    { icon: "🏢", title: "Business Insurance", desc: "Commercial insurance solutions for businesses" }
                ]
            },
            planning: {
                title: "Financial Planning Advisors",
                subtitle: "Personalized financial planning services to help you achieve your financial goals and dreams",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#2F4F4F", secondary: "#B8860B", accent: "#F5F5DC" },
                features: [
                    { icon: "🎯", title: "Goal Planning", desc: "Strategic planning for retirement, education, and major purchases" },
                    { icon: "📊", title: "Financial Analysis", desc: "Comprehensive analysis of your current financial situation" },
                    { icon: "🔮", title: "Future Security", desc: "Long-term strategies for financial independence" }
                ]
            },
            banking: {
                title: "Community Banking Services",
                subtitle: "Full-service banking with personal attention and competitive rates for individuals and businesses",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#191970", secondary: "#32CD32", accent: "#F0F8FF" },
                features: [
                    { icon: "🏦", title: "Personal Banking", desc: "Checking, savings, and personal loan services" },
                    { icon: "🏢", title: "Business Banking", desc: "Commercial accounts and business lending solutions" },
                    { icon: "💳", title: "Digital Banking", desc: "Online and mobile banking with 24/7 access" }
                ]
            },
            credit: {
                title: "Credit Solutions Group",
                subtitle: "Credit repair, debt consolidation, and financial rehabilitation services",
                heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/2d48107a.png",
                colorScheme: { primary: "#8B0000", secondary: "#FFD700", accent: "#FFF8DC" },
                features: [
                    { icon: "📈", title: "Credit Repair", desc: "Professional credit restoration and improvement services" },
                    { icon: "💳", title: "Debt Consolidation", desc: "Streamline multiple debts into manageable payments" },
                    { icon: "🎓", title: "Financial Education", desc: "Credit counseling and financial literacy programs" }
                ]
            }
        }
    }
};

// Theme display names
const enhancedThemeNames = {
    restaurant: {
        elegant: "Elegant Fine Dining",
        rustic: "Rustic Family Style",
        modern: "Modern Sushi Bar",
        upscale: "Upscale Steakhouse",
        casual: "Casual Cafe & Bistro"
    },
    healthcare: {
        modern: "Modern Medical Center",
        dental: "Dental Practice",
        pediatric: "Pediatric Clinic",
        therapy: "Physical Therapy",
        wellness: "Mental Health & Wellness"
    },
    fitness: {
        powerhouse: "Powerhouse Gym",
        zen: "Zen Yoga Studio",
        crossfit: "CrossFit Box",
        personal: "Personal Training",
        wellness: "Wellness Center"
    },
    technology: {
        startup: "Tech Startup",
        development: "Software Development",
        cloud: "Cloud Computing",
        mobile: "Mobile App Development",
        security: "Cybersecurity"
    },
    beauty: {
        luxury: "Luxury Beauty Salon",
        trendy: "Trendy Nail Studio",
        zen: "Zen Spa Retreat",
        modern: "Modern Hair Salon",
        clinical: "Clinical Skincare"
    },
    legal: {
        corporate: "Corporate Law Firm",
        family: "Family Law Practice",
        criminal: "Criminal Defense",
        injury: "Personal Injury",
        business: "Business Legal Services"
    },
    consulting: {
        strategy: "Strategy Consulting",
        management: "Management Consulting",
        technology: "Technology Consulting",
        financial: "Financial Advisory",
        startup: "Startup Consulting"
    },
    realestate: {
        residential: "Residential Real Estate",
        luxury: "Luxury Properties",
        commercial: "Commercial Real Estate",
        investment: "Real Estate Investment",
        property: "Property Management"
    },
    education: {
        academy: "Learning Academy",
        online: "Online Education",
        professional: "Professional Training",
        language: "Language School",
        tutoring: "Tutoring Center"
    },
    automotive: {
        repair: "Auto Repair Shop",
        dealership: "Car Dealership",
        luxury: "Luxury Auto Services",
        parts: "Auto Parts Store",
        detailing: "Auto Detailing"
    },
    finance: {
        investment: "Investment Management",
        insurance: "Insurance Services",
        planning: "Financial Planning",
        banking: "Banking Services",
        credit: "Credit Solutions"
    }
};

// Enhanced Demo Functions
function initializeEnhancedDemo() {
    // Add logo and theme selection fields
    addEnhancedFormFields();
    
    // Override existing functions with enhanced versions
    overrideExistingFunctions();
    
    // Add event listeners
    addEnhancedEventListeners();
}

function addEnhancedFormFields() {
    // Find the industry selection field
    const industryGroup = document.querySelector('#industry').parentElement;
    
    // Create logo selection section
    const logoSection = document.createElement('div');
    logoSection.className = 'form-group';
    logoSection.innerHTML = `
        <label for="logoStyle">Logo Style</label>
        <select id="logoStyle">
            <option value="0">Style 1 - Modern & Clean</option>
            <option value="1">Style 2 - Classic & Professional</option>
            <option value="2">Style 3 - Creative & Bold</option>
            <option value="3">Style 4 - Elegant & Sophisticated</option>
            <option value="4">Style 5 - Minimalist & Simple</option>
        </select>
    `;
    
    // Create theme selection section
    const themeSection = document.createElement('div');
    themeSection.className = 'form-group';
    themeSection.innerHTML = `
        <label for="businessTheme">Business Theme</label>
        <select id="businessTheme">
            <option value="">Select a theme (will auto-populate based on industry)</option>
        </select>
    `;
    
    // Insert after industry selection
    industryGroup.parentNode.insertBefore(logoSection, industryGroup.nextSibling);
    industryGroup.parentNode.insertBefore(themeSection, logoSection.nextSibling);
}

function addEnhancedEventListeners() {
    // Add event listener for industry change to populate themes
    document.getElementById('industry').addEventListener('change', function() {
        populateEnhancedThemes(this.value);
    });
}

function populateEnhancedThemes(industry) {
    const themeSelect = document.getElementById('businessTheme');
    themeSelect.innerHTML = '<option value="">Select a theme</option>';
    
    if (industry && enhancedIndustryTemplates[industry] && enhancedIndustryTemplates[industry].themes) {
        const themes = enhancedIndustryTemplates[industry].themes;
        Object.keys(themes).forEach(themeKey => {
            const option = document.createElement('option');
            option.value = themeKey;
            option.textContent = getEnhancedThemeDisplayName(themeKey, industry);
            themeSelect.appendChild(option);
        });
    }
}

function getEnhancedThemeDisplayName(themeKey, industry) {
    return enhancedThemeNames[industry] && enhancedThemeNames[industry][themeKey] 
        ? enhancedThemeNames[industry][themeKey] 
        : themeKey.charAt(0).toUpperCase() + themeKey.slice(1);
}

function generateEnhancedWebsiteTemplate(businessName, industry, description, style, features) {
    const logoIndex = parseInt(document.getElementById('logoStyle').value) || 0;
    const selectedTheme = document.getElementById('businessTheme').value;
    
    // Get the enhanced template
    const industryTemplate = enhancedIndustryTemplates[industry];
    if (!industryTemplate) {
        return generateEnhancedCustomTemplate(industry, description);
    }
    
    // Select logo
    const selectedLogo = industryTemplate.logos[logoIndex] || industryTemplate.logos[0];
    
    // Select theme
    const themeData = selectedTheme && industryTemplate.themes[selectedTheme] 
        ? industryTemplate.themes[selectedTheme]
        : Object.values(industryTemplate.themes)[0];
    
    // Create enhanced template with selected options
    return {
        title: themeData.title.replace(/^[^\s]+/, businessName),
        subtitle: themeData.subtitle,
        heroImage: themeData.heroImage,
        logoImage: selectedLogo,
        colorScheme: themeData.colorScheme,
        features: themeData.features,
        functionalPages: themeData.functionalPages || {
            services: {
                title: "Our Services",
                offerings: [
                    { name: "Premium Service", desc: "High-quality service tailored to your needs" },
                    { name: "Expert Consultation", desc: "Professional advice from industry experts" },
                    { name: "24/7 Support", desc: "Round-the-clock customer support" }
                ]
            }
        }
    };
}

function generateEnhancedCustomTemplate(industry, description) {
    return {
        title: `Professional ${industry.charAt(0).toUpperCase() + industry.slice(1)} Services`,
        subtitle: description || `Quality ${industry} services tailored to meet your specific needs and requirements`,
        heroImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/02cad362.png",
        logoImage: "https://agents-storage.nyc3.digitaloceanspaces.com/images/c0a0819b.png",
        colorScheme: { primary: "#9333ea", secondary: "#a855f7", accent: "#ffffff" },
        features: [
            { icon: "⭐", title: "Quality Service", desc: "Committed to delivering exceptional results" },
            { icon: "🎯", title: "Focused Approach", desc: "Tailored solutions for your unique needs" },
            { icon: "💼", title: "Professional Team", desc: "Experienced professionals you can trust" }
        ]
    };
}

function generateEnhancedWebsiteContent(data) {
    const { businessName, industry, template } = data;
    const colorScheme = template.colorScheme || { primary: "#9333ea", secondary: "#a855f7", accent: "#ffffff" };
    
    let websiteHTML = `
        <style>
            .website-preview {
                --primary-color: ${colorScheme.primary};
                --secondary-color: ${colorScheme.secondary};
                --accent-color: ${colorScheme.accent};
            }
            .website-nav {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: var(--accent-color);
            }
            .hero-section {
                background: linear-gradient(135deg, var(--primary-color)22, var(--secondary-color)22);
                color: var(--accent-color);
            }
            .feature-card {
                border: 2px solid var(--primary-color);
                background: linear-gradient(135deg, var(--primary-color)11, var(--secondary-color)11);
            }
            .cta-button {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: var(--accent-color);
            }
        </style>
        
        <div class="website-nav">
            <div class="website-logo">
                <img src="${template.logoImage}" alt="${businessName}" class="logo-image" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
                ${businessName}
            </div>
            <div class="website-menu">
                <a href="#" class="nav-link active" data-page="home">Home</a>
                <a href="#" class="nav-link" data-page="services">Services</a>
                <a href="#" class="nav-link" data-page="about">About</a>
                <a href="#" class="nav-link" data-page="contact">Contact</a>
                ${industry === 'retail' ? '<div class="cart-icon" onclick="alert(\\'🛒 Shopping cart with 3 items! Full e-commerce functionality integrated.\\')">🛒<span class="cart-count">3</span></div>' : ''}
            </div>
        </div>

        <!-- Home Page -->
        <div class="page-content active" id="page-home">
            <div class="hero-section">
                <h1 class="hero-title">${template.title}</h1>
                <p class="hero-subtitle">${template.subtitle}</p>
                <img src="${template.heroImage}" alt="${businessName}" class="hero-image" style="max-width: 100%; height: 300px; object-fit: cover; border-radius: 15px; margin: 20px 0;">
                
                <div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 40px 0;">
                    ${template.features.map(feature => `
                        <div class="feature-card" style="padding: 20px; border-radius: 15px; text-align: center;">
                            <div style="font-size: 2rem; margin-bottom: 10px;">${feature.icon}</div>
                            <h3 style="margin-bottom: 10px; color: var(--primary-color);">${feature.title}</h3>
                            <p style="color: #666;">${feature.desc}</p>
                        </div>
                    `).join('')}
                </div>
                
                <button class="cta-button" style="padding: 15px 30px; border: none; border-radius: 25px; font-size: 1.1rem; font-weight: bold; cursor: pointer; margin-top: 20px;">
                    Get Started Today
                </button>
            </div>
        </div>
        
        <!-- Services Page -->
        <div class="page-content" id="page-services">
            <div style="padding: 40px;">
                <h2 style="color: var(--primary-color); margin-bottom: 30px;">Our Services</h2>
                <div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    ${template.features.map(feature => `
                        <div class="feature-card" style="padding: 20px; border-radius: 15px; text-align: center;">
                            <div style="font-size: 2rem; margin-bottom: 10px;">${feature.icon}</div>
                            <h3 style="margin-bottom: 10px; color: var(--primary-color);">${feature.title}</h3>
                            <p style="color: #666;">${feature.desc}</p>
                            <button class="cta-button" style="margin-top: 15px; padding: 10px 20px; font-size: 0.9rem; border: none; border-radius: 15px; cursor: pointer;">Learn More</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <!-- About Page -->
        <div class="page-content" id="page-about">
            <div style="padding: 40px;">
                <h2 style="color: var(--primary-color); margin-bottom: 30px;">About ${businessName}</h2>
                <p style="font-size: 1.2rem; line-height: 1.6; color: #666; margin-bottom: 30px;">
                    ${template.subtitle}
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                    <div style="text-align: center; padding: 20px;">
                        <div style="font-size: 3rem; margin-bottom: 10px;">🏆</div>
                        <h3 style="color: var(--primary-color);">Excellence</h3>
                        <p style="color: #666;">Committed to delivering the highest quality service</p>
                    </div>
                    <div style="text-align: center; padding: 20px;">
                        <div style="font-size: 3rem; margin-bottom: 10px;">🤝</div>
                        <h3 style="color: var(--primary-color);">Trust</h3>
                        <p style="color: #666;">Building lasting relationships with our clients</p>
                    </div>
                    <div style="text-align: center; padding: 20px;">
                        <div style="font-size: 3rem; margin-bottom: 10px;">💡</div>
                        <h3 style="color: var(--primary-color);">Innovation</h3>
                        <p style="color: #666;">Always staying ahead with the latest solutions</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Contact Page -->
        <div class="page-content" id="page-contact">
            <div style="padding: 40px;">
                <h2 style="color: var(--primary-color); margin-bottom: 30px;">Contact Us</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
                    <div>
                        <h3 style="color: var(--primary-color); margin-bottom: 20px;">Get in Touch</h3>
                        <div style="margin-bottom: 15px;">
                            <strong>📍 Address:</strong><br>
                            123 Business Street<br>
                            City, State 12345
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>📞 Phone:</strong><br>
                            (555) 123-4567
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>✉️ Email:</strong><br>
                            info@${businessName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>🕒 Hours:</strong><br>
                            Mon-Fri: 9:00 AM - 6:00 PM<br>
                            Sat: 10:00 AM - 4:00 PM
                        </div>
                    </div>
                    <div>
                        <h3 style="color: var(--primary-color); margin-bottom: 20px;">Send Message</h3>
                        <form style="display: flex; flex-direction: column; gap: 15px;">
                            <input type="text" placeholder="Your Name" style="padding: 12px; border: 2px solid var(--primary-color); border-radius: 8px;">
                            <input type="email" placeholder="Your Email" style="padding: 12px; border: 2px solid var(--primary-color); border-radius: 8px;">
                            <textarea placeholder="Your Message" rows="4" style="padding: 12px; border: 2px solid var(--primary-color); border-radius: 8px; resize: vertical;"></textarea>
                            <button type="submit" class="cta-button" style="padding: 12px; border: none; border-radius: 8px; cursor: pointer;">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return websiteHTML;
}

function overrideExistingFunctions() {
    // Store original functions
    const originalShowGeneratedWebsite = window.showGeneratedWebsite;
    
    // Override showGeneratedWebsite function
    window.showGeneratedWebsite = function(businessName, industry, description, style, features) {
        // Hide AI thinking
        document.getElementById('aiThinking').style.display = 'none';
        
        // Get enhanced template
        const template = generateEnhancedWebsiteTemplate(businessName, industry, description, style, features);
        
        // Store current website data
        window.currentWebsiteData = {
            businessName,
            industry,
            description,
            style,
            features,
            template
        };
        
        // Generate the complete website with enhanced features
        const websiteHTML = generateEnhancedWebsiteContent(window.currentWebsiteData);
        document.getElementById('websiteContent').innerHTML = websiteHTML;
        
        // Show website preview
        document.getElementById('websitePreview').style.display = 'block';
        
        // Reset button
        document.getElementById('generateBtn').disabled = false;
        document.getElementById('generateBtn').textContent = '🔄 Generate Another Website';
        
        // Add page navigation functionality
        addEnhancedPageNavigation();
    };
}

function addEnhancedPageNavigation() {
    // Add click handlers for navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            
            // Remove active class from all nav links and pages
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked nav and corresponding page
            this.classList.add('active');
            const targetPage = document.getElementById('page-' + page);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for original demo to load, then initialize enhancements
    setTimeout(() => {
        initializeEnhancedDemo();
        console.log('🎉 Enhanced Demo with 60+ Logos and Themes Loaded Successfully!');
    }, 1000);
});