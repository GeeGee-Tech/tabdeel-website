# Tabdeel IT & Security Solutions - Design Guidelines

## Design Approach

**Selected Framework:** Reference-Based + Custom Corporate Identity
- Primary inspiration: Modern B2B tech companies (Microsoft Azure, Cisco, Siemens)
- Clean, professional aesthetic emphasizing trust, reliability, and technical expertise
- UAE-market focused with international standards

## Color Palette

### Light Mode
- **Primary Brand:** 142 71% 45% (Tabdeel Green - professional, trustworthy)
- **Primary Hover:** 142 71% 38%
- **Background:** 0 0% 100% (Pure white for clean, professional look)
- **Surface:** 0 0% 98% (Subtle gray for card backgrounds)
- **Text Primary:** 220 13% 18% (Dark slate for excellent readability)
- **Text Secondary:** 220 9% 46%
- **Border:** 220 13% 91%
- **Accent (CTA):** 24 95% 53% (Warm orange for conversion actions)
- **Success/Tech:** 142 71% 45% (Reinforces brand)

### Dark Mode
- Not required for this B2B corporate site (light mode focus)

## Typography

### Font Families
- **Headings:** 'Inter', sans-serif (700, 600) - Modern, professional, excellent for tech
- **Body:** 'Inter', sans-serif (400, 500) - Consistent family for cohesion
- **Accent/Stats:** 'Inter', sans-serif (600) - Numbers and metrics

### Type Scale
- **Hero Headline:** text-5xl md:text-6xl lg:text-7xl font-bold
- **Section Titles:** text-3xl md:text-4xl lg:text-5xl font-bold
- **Subsection Titles:** text-2xl md:text-3xl font-semibold
- **Card Titles:** text-xl md:text-2xl font-semibold
- **Body Text:** text-base md:text-lg leading-relaxed
- **Small Text:** text-sm

## Layout System

### Spacing Primitives
Core units: **2, 4, 6, 8, 12, 16, 20, 24, 32**
- Component padding: p-6 md:p-8
- Section vertical: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Card gaps: gap-6 md:gap-8
- Grid columns: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### Grid Structure
- **Hero Section:** Full-width background, centered content (max-w-6xl)
- **Services Grid:** 3-column desktop, 2-column tablet, 1-column mobile
- **Benefits Grid:** 2-column layout for efficiency/reliability messaging
- **Industries Served:** 4-column grid showcasing sectors

## Component Library

### Navigation Header
- Fixed/sticky header with white background, subtle shadow on scroll
- Logo left (Tabdeel brand), navigation center, CTA button right
- Mobile: Hamburger menu with smooth slide-in drawer
- Height: h-20, backdrop-blur for modern feel

### Hero Section
- **Height:** min-h-[600px] lg:min-h-[700px] (not 100vh - purposeful space)
- **Layout:** Two-column on desktop (60/40 split) - Text left, Hero image right
- **Background:** Subtle gradient overlay (from brand green to lighter tint)
- **CTA Buttons:** Primary (solid green) + Secondary (outline with blur backdrop)
- **Hero Image:** Professional tech imagery (server room, security systems, or smart building)

### About Section
- **Layout:** Two-column alternating (text + image)
- **Background:** White with subtle texture/pattern
- **Stats Bar:** 4-column inline metrics (Projects, Clients, Engineers, Uptime) with large numbers

### Solutions/Services Cards
- **Card Design:** Elevated cards with hover lift effect (shadow-lg hover:shadow-xl)
- **Layout:** Grid with 6 primary services
- **Icon:** Top-aligned icon (64x64) with brand green background circle
- **Animation:** Framer Motion scroll-reveal (stagger children, fade-up from y: 20)
- **Hover State:** Scale: 1.02, border color change to brand green
- **Content:** Icon + Title + 2-line description + "Learn More" link

### Service Cards Structure
1. Labour Camp Wi-Fi
2. Staff Accommodation Wi-Fi  
3. Electrical Works (HV/LV)
4. CCTV & Security Systems
5. Networking & Telephone
6. Time Attendance Systems

### Industries Served Section
- **Layout:** 4-column grid (2-column mobile)
- **Cards:** Icon + Title + Brief description
- Industries: Construction, Corporate, Retail, Residential, Education, Healthcare, Hospitality
- **Background:** Light gray (surface color)

### Benefits Grid
- **Layout:** 2-column grid featuring 6 key benefits
- **Icons:** Simple line icons in brand green
- Benefits: Increased Productivity, Better CX, Scalability, 24/7 Availability, Cost Reduction, Data Insights

### Contact Form
- **Layout:** Two-column on desktop (Form 60% | Info sidebar 40%)
- **Form Fields:** Name, Email, Message (textarea)
- **Styling:** Clean inputs with focus ring in brand green
- **Submit Button:** Full-width primary CTA
- **Sidebar:** Contact info (phone, email), Quick response promise, Office hours

### Footer
- **Background:** Dark slate (220 13% 15%)
- **Text:** White/light gray
- **Layout:** 4-column grid (Quick Links, Services, Social, Contact)
- **Logo:** White version top-left
- **Bottom Bar:** Copyright, Privacy, Terms centered
- **Social Icons:** Facebook, Twitter, Instagram, LinkedIn with hover states

## Animations & Interactions

### Framer Motion Implementations
1. **Hero:** Fade-in from opacity 0, duration 0.8s
2. **Service Cards:** Stagger scroll-reveal (viewport trigger at 0.2)
   - Container: staggerChildren 0.1s
   - Children: y: 20 to 0, opacity: 0 to 1, duration: 0.6s
3. **Stats Counter:** Animate numbers on scroll into view
4. **About Section:** Slide from left (text) and right (image)

### Hover Effects
- **Buttons:** Scale 1.05, brightness increase
- **Cards:** Lift (translateY: -4px), shadow increase
- **Links:** Underline slide-in effect
- **Service Icons:** Rotate 5deg on hover

## Images

### Required Images with Descriptions

1. **Hero Image (Right side):**
   - Professional photo of modern security control room or smart building automation system
   - Shows monitors with security feeds, network diagrams, or building management interfaces
   - Bright, clean, high-tech aesthetic
   - Dimensions: 1200x800px minimum
   - Position: Right 40% of hero section

2. **About Section Image:**
   - Tabdeel engineers working on site (electrical panel or CCTV installation)
   - Shows professionalism, UAE location context
   - Dimensions: 800x600px
   - Position: Alternating with text content

3. **Service Card Images (6 total):**
   - Labour Camp WiFi: Modern WiFi router in accommodation setting
   - Electrical Works: Electrical panel/switchboard installation
   - CCTV: Modern IP camera system
   - Networking: Structured cabling/server rack
   - Time Attendance: Biometric scanner device
   - Each: 400x300px, consistent styling

4. **Industry Icons/Illustrations:**
   - Use Heroicons or similar for clean, professional iconography
   - No photographic images needed for industry cards

### Image Treatment
- **Border Radius:** rounded-xl (12px) for modern feel
- **Shadow:** Subtle drop shadow on images
- **Aspect Ratio:** Maintain 4:3 or 16:9 consistently
- **Lazy Loading:** All images below fold
- **Alt Text:** Descriptive for SEO

## Responsive Breakpoints
- **Mobile:** < 768px (single column, stacked layout)
- **Tablet:** 768px - 1024px (2-column grids)
- **Desktop:** > 1024px (full 3-4 column grids)

## SEO Requirements
- **Title:** "Tabdeel - IT & Security Solutions UAE | Smart Infrastructure & CCTV"
- **Meta Description:** "Leading IT and security solutions provider in UAE. Electrical works, CCTV security, networking, WiFi, and automation systems for businesses across Dubai, Sharjah, and Abu Dhabi."
- **Keywords:** IT solutions UAE, CCTV security Dubai, electrical contractors, networking services
- **Alt Text:** Descriptive for all images mentioning Tabdeel and service type

## Design Principles
1. **Trust First:** Professional, clean design conveys reliability
2. **Clarity:** Clear service descriptions, no jargon without explanation
3. **Action-Oriented:** Multiple CTAs (Get Quote, Contact, Book Call)
4. **UAE-Focused:** Mention cities, local presence, Arabic-friendly (future)
5. **Mobile-First:** Ensure touch-friendly targets (min 44px)