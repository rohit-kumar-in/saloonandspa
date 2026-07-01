/**
 * Glow & Grace Unisex Salon & Spa - Bangalore Boutique
 * Client-Side JS with English / Kannada Translation Engine
 */

// Translation Dictionary
const translations = {
    en: {
        banner_badge: "🔥 SPECIAL OFFER",
        banner_text: "Flat <strong>20% OFF</strong> on First Visit + Free L'Oreal Hair Spa Trial!",
        banner_timer: "Closes in:",
        banner_cta: "Claim Offer Now",
        
        nav_about: "About",
        nav_services: "Services",
        nav_packages: "Combo Packages",
        nav_coupons: "Coupons",
        nav_gallery: "Gallery",
        nav_reviews: "Reviews",
        nav_booking: "Book Appointment",
        
        hero_stars: "⭐⭐⭐⭐⭐ 4.9/5 Rating (680+ Google Reviews)",
        hero_title: "Look Good. Feel Confident. Every Day.",
        hero_subtitle: "Premium Unisex Beauty & Wellness. 100% Hygienic treatments by certified experts in Indiranagar, Bengaluru. Designed for both men & women.",
        hero_badge_hygiene: "100% Hygienic",
        hero_badge_stylists: "Expert Stylists",
        hero_badge_unisex: "Premium Unisex",
        hero_btn_whatsapp: "Book on WhatsApp",
        hero_btn_call: "Call Now",
        hero_offer_text: "🎟️ First-time customer? Copy code NEW20 for 20% off!",
        
        highlight1_title: "Premium Unisex Care",
        highlight1_desc: "Separate private sections and expert services for men and women.",
        highlight2_title: "100% Hygienic Setup",
        highlight2_desc: "Disinfected tools, disposable sheets, & clean premises daily.",
        highlight3_title: "Expert Stylists",
        highlight3_desc: "Highly trained professionals with 6+ years of boutique experience.",
        highlight4_title: "Premium Products",
        highlight4_desc: "We use only genuine brands like L'Oreal, O3+, and Matrix.",
        
        about_tag: "WHO WE ARE",
        about_title: "Your Premier Neighborhood Unisex Salon & Spa",
        about_desc1: "Welcome to Glow & Grace, Indiranagar's leading unisex styling and wellness destination. We bridge the gap between expensive luxury branding and low-trust local shops by offering a highly professional, pristine, air-conditioned boutique experience at honest, value-driven prices.",
        about_desc2: "Our salon has separate, fully equipped styling sections to ensure comfort for both men and women. From styling haircuts to advanced skin treatments and deep relaxing body spas, our certified beauticians and hair specialists are dedicated to bringing out your best look and feel.",
        about_trust1: "Disposable sheets & towels",
        about_trust2: "Tools sanitized in UV chambers",
        about_trust3: "L'Oreal & O3+ certified staff",
        about_trust4: "Free consultation included",
        about_btn: "Explore Services & Prices",
        
        services_tag: "PREMIUM SERVICES",
        services_title: "Signature Services & Inclusions",
        services_sub: "No placeholders. Read exactly what is included in each signature treatment and book instantly.",
        tab_all: "All Services",
        tab_hair: "Hair Styling",
        tab_skin: "Skin & Facials",
        tab_spa: "Spa & Massage",
        tab_grooming: "Grooming Essentials",
        
        service1_title: "Trendy Haircut & Wash",
        service1_desc: "Includes custom hair styling consultation, L'Oreal clarifying wash, deep conditioning, precision styling cut, and blow dry finish.",
        service1_inc: "Consultation + Wash + Cut + Style",
        service2_title: "L'Oreal Deep Hair Spa",
        service2_desc: "Premium L'Oreal mask application, soothing scalp massage (15 mins), deep steam treatment, restorative wash, and professional blow dry.",
        service2_inc: "L'Oreal Mask + Steam + Scalp Massage + Wash",
        service3_title: "O3+ Brightening Facial",
        service3_desc: "Premium dermatologist-approved treatment. Includes skin cleansing, micro-scrubbing, O3+ tan removal peel, brightening massage, and hydrating sheet mask.",
        service3_inc: "Tan Clear + O3+ Brightening + Sheet Mask",
        service4_title: "Instant Glow Skin Treatment",
        service4_desc: "Perfect for quick events. Gentle exfoliation, pore cleansing, skin firming facial massage, and application of instant vitamin glow pack.",
        service4_inc: "Cleansing + Scrub + Vitamin Pack + Serum",
        service5_title: "Aromatherapy Body Massage",
        service5_desc: "Full 60-minute relaxing body massage using organic therapeutic oils, hot towel back compression, and relaxing herbal tea service.",
        service5_inc: "60-Min Full Body + Essential Oils + Hot Steam Towels",
        service6_title: "Head & Shoulder Spa Massage",
        service6_desc: "30-minute stress-relief massage focusing on pressure points, using warm herbal oil for scalp and neck relaxation.",
        service6_inc: "30-Min Scalp Massage + Shoulder Pressure Points",
        service7_title: "Signature Beard Styling & Shave",
        service7_desc: "Razor-sharp beard alignment, warm towel steam, facial scrubbing, trimming, and premium beard oil application.",
        service7_inc: "Hot Towel Steam + Razor Alignment + Scrub + Oil",
        service8_title: "Hygienic Spa Pedicure",
        service8_desc: "Relaxing sea salt foot soak, natural scrub exfoliation, nail trimming/shaping, cuticle clean, and hydrating foot massage.",
        service8_inc: "Foot Soak + Scrub + Cuticle Care + Massage",
        services_footer: "Need threading, waxing, or custom bridal makeup? Rates start from ₹49 onwards. Call us directly to inquire!",
        
        packages_tag: "BEST VALUE COMBOS",
        packages_title: "Unisex Package Deals",
        packages_sub: "Get premium styling and relaxation combinations at special boutique rates. Perfect for weekend grooming.",
        pkg1_title: "Smart Unisex Styling Combo",
        pkg1_features: "Trendy Haircut & Wash; Professional Beard Trim OR Threading; Relaxing Hair Wash & Blow Dry; Hydrating Face Pack & Steam",
        pkg2_title: "Head-to-Toe Premium Care",
        pkg2_features: "L'Oreal Deep Hair Spa (45 min); O3+ Skin Whitening Facial; Hygienic Spa Pedicure OR Manicure; Relaxing Neck & Shoulder Massage",
        pkg3_title: "Ultimate Wellness Spa Combo",
        pkg3_features: "60-Min Aromatherapy Full Body Massage; Hot Towel Back Compress & Steam; Refreshing Skin Cleansing Facial; Soothing Green Tea Serve",
        pkg_save: "You Save:",
        pkg_btn: "Book Package Now",
        
        coupons_tag: "SPECIAL COUPONS",
        coupons_title: "Claim Instant Discount Coupons",
        coupons_sub: "Click to copy the code. It will be automatically applied to the booking form below.",
        coupon1_title: "First Visit Discount",
        coupon1_desc: "Applicable on any service combination above ₹299.",
        coupon2_title: "Body Spa Special",
        coupon2_desc: "Applicable on aromatherapy and deep tissue massage.",
        coupon3_title: "Premium Haircut Special",
        coupon3_desc: "Applicable on haircut & hair spa services.",
        coupon_btn: "Copy Code",
        
        reviews_tag: "LOCAL REVIEWS",
        reviews_title: "Loved by Bangalore Residents",
        reviews_sub: "Check out what our regular clients from Indiranagar and Koramangala say about their premium experience.",
        review1_text: "\"I visited Glow & Grace for an O3+ facial and haircut. The staff is highly certified, and the unisex layout is very comfortable and neat. Highly recommend their services!\"",
        review1_loc: "Indiranagar, Resident",
        review2_text: "\"The L'Oreal Hair Spa here is incredible. The stylist takes their time, gives a great scalp massage, and uses genuine products. Great value for a premium boutique salon!\"",
        review2_loc: "Koramangala, Resident",
        review3_text: "\"Excellent aromatherapy body massage. Extremely clean towels, serene room, and the pricing is very transparent. Will visit again next month!\"",
        review3_loc: "HSR Layout, Resident",
        
        booking_tag: "APPOINTMENT BOOKING",
        booking_title: "Secure Your Appointment Slot",
        booking_desc: "Select a service & preferred time. We will immediately confirm your reservation via WhatsApp.",
        label_name: "Your Full Name",
        label_phone: "WhatsApp Phone Number",
        label_date: "Preferred Date",
        label_time: "Preferred Time",
        label_service: "Select Service / Package",
        label_coupon: "Coupon Code (Optional)",
        label_msg: "Special Requests (Optional)",
        booking_btn_whatsapp: "Confirm Booking on WhatsApp",
        booking_note: "🔒 Direct connection to Indiranagar Salon Manager. No spam.",
        
        contact_tag: "GET IN TOUCH",
        contact_title: "Visit Us or Call for Queries",
        contact_desc: "We are located on 100 Feet Road, Indiranagar. Walking entries are open, but pre-booking is recommended.",
        addr_title: "Our Address",
        addr_text: "Shop 14, Premium Arcade, 100 Feet Road,<br>Near Metro Pillar 50, Indiranagar, Bengaluru - 560038",
        phone_title: "Call Us Directly",
        phone_text: "+91 98765 43210 (Tap to Call)",
        hours_title: "Opening Hours",
        hours_text: "Monday - Sunday: 9:00 AM - 9:00 PM",
        
        footer_desc: "Premium, highly hygienic, and family-friendly unisex beauty care in Bengaluru. We use only L'Oreal and O3+ branded products.",
        footer_title_nav: "Quick Links",
        footer_title_contact: "Contact Salon",
        footer_rights: "© 2026 Glow & Grace Unisex Salon & Spa. All rights reserved.",
        footer_sub: "Designed for premium boutique business growth in Bangalore."
    },
    kn: {
        banner_badge: "🔥 ವಿಶೇಷ ಕೊಡುಗೆ",
        banner_text: "ಮೊದಲ ಭೇಟಿಗೆ ಫ್ಲಾಟ್ <strong>ಶೇ. 20 ರಿಯಾಯಿತಿ</strong> + ಉಚಿತ ಎಲ್'ಓರಿಯಲ್ ಹೇರ್ ಸ್ಪಾ ಟ್ರಯಲ್!",
        banner_timer: "ಮುಕ್ತಾಯಗೊಳ್ಳುವ ಸಮಯ:",
        banner_cta: "ಈಗಲೇ ಕೊಡುಗೆ ಪಡೆಯಿರಿ",
        
        nav_about: "ನಮ್ಮ ಬಗ್ಗೆ",
        nav_services: "ಸೇವೆಗಳು",
        nav_packages: "ಪ್ಯಾಕೇಜ್‌ಗಳು",
        nav_coupons: "ಕೂಪನ್‌ಗಳು",
        nav_gallery: "ಗ್ಯಾಲರಿ",
        nav_reviews: "ವಿಮರ್ಶೆಗಳು",
        nav_booking: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕಿಂಗ್",
        
        hero_stars: "⭐⭐⭐⭐⭐ 4.9/5 ರೇಟಿಂಗ್ (680+ ಗೂಗಲ್ ವಿಮರ್ಶೆಗಳು)",
        hero_title: "ಆಕರ್ಷಕವಾಗಿ ಕಾಣಿ. ಆತ್ಮವಿಶ್ವಾಸದಿಂದಿರಿ. ಪ್ರತಿದಿನ.",
        hero_subtitle: "ಪ್ರೀಮಿಯಂ ಯುನಿಸೆಕ್ಸ್ ಸೌಂದರ್ಯ ಮತ್ತು ಸ್ವಾಸ್ಥ್ಯ. ಬೆಂಗಳೂರಿನ ಇಂದಿರಾನಗರದಲ್ಲಿ ಪ್ರಮಾಣೀಕೃತ ತಜ್ಞರಿಂದ 100% ಹೈಜಿನಿಕ್ ಚಿಕಿತ್ಸೆಗಳು. ಪುರುಷರು ಮತ್ತು ಮಹಿಳೆಯರಿಬ್ಬರಿಗೂ ಲಭ್ಯ.",
        hero_badge_hygiene: "100% ಸ್ವಚ್ಛತೆ",
        hero_badge_stylists: "ತಜ್ಞ ಸ್ಟೈಲಿಸ್ಟ್‌ಗಳು",
        hero_badge_unisex: "ಪ್ರೀಮಿಯಂ ಯುನಿಸೆಕ್ಸ್",
        hero_btn_whatsapp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬುಕ್ ಮಾಡಿ",
        hero_btn_call: "ಈಗಲೇ ಕರೆ ಮಾಡಿ",
        hero_offer_text: "🎟️ ಮೊದಲ ಬಾರಿಯ ಗ್ರಾಹಕರೇ? ಶೇ. 20 ರಿಯಾಯಿತಿಗಾಗಿ NEW20 ಕೋಡ್ ನಕಲಿಸಿ!",
        
        highlight1_title: "ಪ್ರೀಮಿಯಂ ಯುನಿಸೆಕ್ಸ್ ಕೇರ್",
        highlight1_desc: "ಪುರುಷರು ಮತ್ತು ಮಹಿಳೆಯರಿಗೆ ಪ್ರತ್ಯೇಕ ಖಾಸಗಿ ವಿಭಾಗಗಳು ಮತ್ತು ತಜ್ಞರ ಸೇವೆಗಳು.",
        highlight2_title: "100% ಹೈಜಿನಿಕ್ ಸೆಟಪ್",
        highlight2_desc: "ಪ್ರತಿದಿನ ಸ್ಯಾನಿಟೈಸ್ ಮಾಡಿದ ಉಪಕರಣಗಳು, ಡಿಸ್ಪೋಸಬಲ್ ಶೀಟ್‌ಗಳು ಮತ್ತು ಸ್ವಚ್ಛವಾದ ಪರಿಸರ.",
        highlight3_title: "ಅನುಭವಿ ಸ್ಟೈಲಿಸ್ಟ್‌ಗಳು",
        highlight3_desc: "6+ ವರ್ಷಗಳ ಅನುಭವ ಹೊಂದಿರುವ ತರಬೇತಿ ಪಡೆದ ವೃತ್ತಿಪರರು.",
        highlight4_title: "ಗುಣಮಟ್ಟದ ಬ್ರಾಂಡ್‌ಗಳು",
        highlight4_desc: "ನಾವು ಲೊರಿಯಲ್, O3+ ಮತ್ತು ಮ್ಯಾಟ್ರಿಕ್ಸ್‌ನಂತಹ ಅಧಿಕೃತ ಬ್ರಾಂಡ್‌ಗಳನ್ನು ಮಾತ್ರ ಬಳಸುತ್ತೇವೆ.",
        
        about_tag: "ನಮ್ಮ ಬಗ್ಗೆ",
        about_title: "ನಿಮ್ಮ ನೆರೆಹೊರೆಯ ಪ್ರೀಮಿಯಂ ಯುನಿಸೆಕ್ಸ್ ಸಲೂನ್ & ಸ್ಪಾ",
        about_desc1: "ಗ್ಲೋ & ಗ್ರೇಸ್ ಸಲೂನ್‌ಗೆ ಸುಸ್ವಾಗತ. ಇದು ಇಂದಿರಾನಗರದ ಪ್ರಮುಖ ಯುನಿಸೆಕ್ಸ್ ಸ್ಟೈಲಿಂಗ್ ಮತ್ತು ಕ್ಷೇಮ ತಾಣವಾಗಿದೆ. ನಾವು ಅತ್ಯಂತ ವೃತ್ತಿಪರ, ಹವಾನಿಯಂತ್ರಿತ ಪರಿಸರದಲ್ಲಿ ಬ್ರಾಂಡೆಡ್ ಉತ್ಪನ್ನಗಳೊಂದಿಗೆ ಕೈಗೆಟುಕುವ ದರದಲ್ಲಿ ಗುಣಮಟ್ಟದ ಸೇವೆಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
        about_desc2: "ನಮ್ಮ ಸಲೂನ್ ಪುರುಷರು ಮತ್ತು ಮಹಿಳೆಯರಿಬ್ಬರಿಗೂ ಆರಾಮದಾಯಕ ಮತ್ತು ಪ್ರತ್ಯೇಕ ವಿಭಾಗಗಳನ್ನು ಹೊಂದಿದೆ. ಹೇರ್‌ಕಟ್‌ನಿಂದ ಹಿಡಿದು ಸುಧಾರಿತ ತ್ವಚೆ ಚಿಕಿತ್ಸೆಗಳು ಮತ್ತು ಬಾಡಿ ಸ್ಪಾ ಸೇವೆಗಳವರೆಗೆ ನಮ್ಮ ಪ್ರಮಾಣೀಕೃತ ತಜ್ಞರು ನಿಮಗೆ ಅತ್ಯುತ್ತಮ ಸೇವೆ ನೀಡಲು ಸದಾ ಸಿದ್ಧರಿರುತ್ತಾರೆ.",
        about_trust1: "ಡಿಸ್ಪೋಸಬಲ್ ಶೀಟ್‌ಗಳು ಮತ್ತು ಟವೆಲ್‌ಗಳು",
        about_trust2: "ಯುವಿ ಚೇಂಬರ್‌ಗಳಲ್ಲಿ ಸ್ಯಾನಿಟೈಸ್ ಮಾಡಿದ ಪರಿಕರಗಳು",
        about_trust3: "ಲೊರಿಯಲ್ ಮತ್ತು O3+ ಪ್ರಮಾಣೀಕೃತ ಸಿಬ್ಬಂದಿ",
        about_trust4: "ಉಚಿತ ಸೌಂದರ್ಯ ಸಮಾಲೋಚನೆ",
        about_btn: "ಸೇವೆಗಳು ಮತ್ತು ದರಪಟ್ಟಿ ತಿಳಿಯಿರಿ",
        
        services_tag: "ಪ್ರೀಮಿಯಂ ಸೇವೆಗಳು",
        services_title: "ವಿಶೇಷ ಸೇವೆಗಳು ಮತ್ತು ಒಳಗೊಂಡಿರುವ ವಿವರಗಳು",
        services_sub: "ಬುಕ್ ಮಾಡುವ ಮುನ್ನ ಪ್ರತಿ ಸೇವೆಯಲ್ಲಿ ನಿಮಗೆ ನಿಖರವಾಗಿ ಏನು ಸಿಗುತ್ತದೆ ಎಂಬುದನ್ನು ಇಲ್ಲಿ ವಿವರವಾಗಿ ಓದಿ ತಿಳಿಯಿರಿ.",
        tab_all: "ಎಲ್ಲಾ ಸೇವೆಗಳು",
        tab_hair: "ಹೇರ್ ಸ್ಟೈಲಿಂಗ್",
        tab_skin: "ತ್ವಚೆ ಮತ್ತು ಫೇಶಿಯಲ್",
        tab_spa: "ಸ್ಪಾ ಮತ್ತು ಮಸಾಜ್",
        tab_grooming: "ಗgrooming ಅಗತ್ಯಗಳು",
        
        service1_title: "ಟ್ರೆಂಡಿ ಹೇರ್‌ಕಟ್ & ಹೇರ್ ವಾಶ್",
        service1_desc: "ಕೂದಲಿನ ವಿನ್ಯಾಸದ ಸಮಾಲೋಚನೆ, ಲೊರಿಯಲ್ ವಾಶ್, ಡೀಪ್ ಕಂಡೀಷನಿಂಗ್, ಪ್ರಿಸೀಶನ್ ಕಟ್ ಮತ್ತು ಬ್ಲೋ ಡ್ರೈ ಒಳಗೊಂಡಿದೆ.",
        service1_inc: "ಸಮಾಲೋಚನೆ + ಹೇರ್ ವಾಶ್ + ಹೇರ್ ಕಟ್ + ಸ್ಟೈಲ್",
        service2_title: "ಲೊರಿಯಲ್ ಡೀಪ್ ಹೇರ್ ಸ್ಪಾ",
        service2_desc: "ಪ್ರೀಮಿಯಂ ಲೊರಿಯಲ್ ಮಾಸ್ಕ್ ಅಪ್ಲಿಕೇಶನ್, 15 ನಿಮಿಷಗಳ ಕಾಲ ರಿಲ್ಯಾಕ್ಸಿಂಗ್ ಸ್ಕಾಲ್ಪ್ ಮಸಾಜ್, ಡೀಪ್ ಸ್ಟೀಮ್ ಮತ್ತು ಬ್ಲೋ ಡ್ರೈ ಒಳಗೊಂಡಿದೆ.",
        service2_inc: "ಲೊರಿಯಲ್ ಮಾಸ್ಕ್ + ಸ್ಟೀಮ್ + ಸ್ಕಾಲ್ಪ್ ಮಸಾಜ್ + ವಾಶ್",
        service3_title: "O3+ ಬ್ರೈಟನಿಂಗ್ ಫೇಶಿಯಲ್",
        service3_desc: "ಚರ್ಮದ ಶುದ್ಧೀಕರಣ, ಮೈಕ್ರೋ-ಸ್ಕ್ರಬ್ಬಿಂಗ್, O3+ ಟ್ಯಾನ್ ರಿಮೂವಲ್ ಪೀಲ್, ಬ್ರೈಟನಿಂಗ್ ಮಸಾಜ್ ಮತ್ತು ಹೈಡ್ರೇಟಿಂಗ್ ಶೀಟ್ ಮಾಸ್ಕ್ ಒಳಗೊಂಡಿದೆ.",
        service3_inc: "ಟ್ಯಾನ್ ಕ್ಲಿಯರ್ + O3+ ಬ್ರೈಟನಿಂಗ್ + ಶೀಟ್ ಮಾಸ್ಕ್",
        service4_title: "ಇನ್‌ಸ್ಟಂಟ್ ಗ್ಲೋ ಸ್ಕಿನ್ ಚಿಕಿತ್ಸೆ",
        service4_desc: "ತ್ವರಿತ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸೂಕ್ತವಾಗಿದೆ. ಮೃದುವಾದ ಎಕ್ಸ್‌ಫೋಲಿಯೇಶನ್, ರಂಧ್ರಗಳ ಶುದ್ಧೀಕರಣ ಮತ್ತು ವಿಟಮಿನ್ ಗ್ಲೋ ಪ್ಯಾಕ್ ಒಳಗೊಂಡಿದೆ.",
        service4_inc: "ಕ್ಲೆನ್ಸಿಂಗ್ + ಸ್ಕ್ರಬ್ + ವಿಟಮಿನ್ ಪ್ಯಾಕ್ + ಸೀರಮ್",
        service5_title: "ಅರೋಮಾಥೆರಪಿ ಬಾಡಿ ಮಸಾಜ್",
        service5_desc: "ಪೂರ್ಣ 60 ನಿಮಿಷಗಳ ರಿಲ್ಯಾಕ್ಸಿಂಗ್ ಬಾಡಿ ಮಸಾಜ್, ಪ್ರೀಮಿಯಂ ತೈಲಗಳ ಬಳಕೆ, ಬಿಸಿ ಟವೆಲ್ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಗಿಡಮೂಲಿಕೆ ಚಹಾ ಸೇವೆ.",
        service5_inc: "60-ನಿಮಿಷ ಮಸಾಜ್ + ಎಸೆನ್ಷಿಯಲ್ ಆಯಿಲ್ಸ್ + ಬಿಸಿ ಟವೆಲ್",
        service6_title: "ಹೆಡ್ & ಶೋಲ್ಡರ್ ಸ್ಪಾ ಮಸಾಜ್",
        service6_desc: "ಒತ್ತಡ ನಿವಾರಣೆಗಾಗಿ ಬಿಸಿ ಗಿಡಮೂಲಿಕೆಗಳ ತೈಲದಿಂದ 30 ನಿಮಿಷಗಳ ಕಾಲ ತಲೆ, ಕುತ್ತಿಗೆ ಮತ್ತು ಹೆಗಲಿನ ಮಸಾಜ್.",
        service6_inc: "30-ನಿಮಿಷ ಸ್ಕಾಲ್ಪ್ ಮಸಾಜ್ + ಶೋಲ್ಡರ್ ಪ್ರೆಶರ್ ಪಾಯಿಂಟ್ಸ್",
        service7_title: "ಸಿಗ್ನೇಚರ್ ಗಡ್ಡದ ಸ್ಟೈಲಿಂಗ್ & ಶೇವ್",
        service7_desc: "ಗಡ್ಡದ ನಿಖರ ಜೋಡಣೆ, ಬಿಸಿ ಟವೆಲ್ ಸ್ಟೀಮ್, ಫೇಶಿಯಲ್ ಸ್ಕ್ರಬ್ಬಿಂಗ್ ಮತ್ತು ಪ್ರೀಮಿಯಂ ಬಿಯರ್ಡ್ ಆಯಿಲ್ ಅಪ್ಲಿಕೇಶನ್.",
        service7_inc: "ಬಿಸಿ ಟವೆಲ್ ಸ್ಟೀಮ್ + ರೇಜರ್ ಅಲೈನ್‌ಮೆಂಟ್ + ಸ್ಕ್ರಬ್ + ಆಯಿಲ್",
        service8_title: "ಹೈಜಿನಿಕ್ ಸ್ಪಾ ಪೆಡಿಕೂರ್",
        service8_desc: "ಸಮುದ್ರದ ಉಪ್ಪಿನ ನೀರಿನಿಂದ ಪಾದಗಳ ನೆನೆಸುವಿಕೆ, ಸ್ಕ್ರಬ್ ಎಕ್ಸ್‌ಫೋಲಿಯೇಶನ್, ಉಗುರು ಕತ್ತರಿಸುವುದು ಮತ್ತು ಕಾಲುಗಳ ಮಸಾಜ್.",
        service8_inc: "ಫೂಟ್ ಸೋಕ್ + ಸ್ಕ್ರಬ್ + ಉಗುರು ಆರೈಕೆ + ಮಸಾಜ್",
        services_footer: "ಥ್ರೆಡಿಂಗ್, ವ್ಯಾಕ್ಸಿಂಗ್ ಅಥವಾ ಕಸ್ಟಮ್ ವಧುವಿನ ಮೇಕಪ್ ಬೇಕೇ? ದರಗಳು ₹49 ರಿಂದ ಪ್ರಾರಂಭವಾಗುತ್ತವೆ. ವಿಚಾರಿಸಲು ನೇರವಾಗಿ ನಮಗೆ ಕರೆ ಮಾಡಿ!",
        
        packages_tag: "ಉತ್ತಮ ಪ್ಯಾಕೇಜ್‌ಗಳು",
        packages_title: "ಯುನಿಸೆಕ್ಸ್ ಕಾಂಬೋ ಪ್ಯಾಕೇಜ್‌ಗಳು",
        packages_sub: "ನಮ್ಮ ವಿಶೇಷ ಪ್ಯಾಕೇಜ್ ಕಾಂಬೋಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಹೆಚ್ಚಿನ ಹಣವನ್ನು ಉಳಿಸಿ. ವಾರಾಂತ್ಯದ ಗ್ರೂಮಿಂಗ್‌ಗೆ ಸೂಕ್ತವಾಗಿದೆ.",
        pkg1_title: "ಸ್ಮಾರ್ಟ್ ಯುನಿಸೆಕ್ಸ್ ಸ್ಟೈಲಿಂಗ್ ಕಾಂಬೋ",
        pkg1_features: "ಟ್ರೆಂಡಿ ಹೇರ್‌ಕಟ್ & ಹೇರ್ ವಾಶ್; ಗಡ್ಡದ ಟ್ರಿಮ್ ಅಥವಾ ಥ್ರೆಡಿಂಗ್; ರಿಲ್ಯಾಕ್ಸಿಂಗ್ ಹೇರ್ ವಾಶ್ & ಬ್ಲೋ ಡ್ರೈ; ಹೈಡ್ರೇಟಿಂಗ್ ಫೇಸ್ ಪ್ಯಾಕ್ & ಸ್ಟೀಮ್",
        pkg2_title: "ಹೆಡ್-ಟು-ಟೋ ಪ್ರೀಮಿಯಂ ಕೇರ್",
        pkg2_features: "ಲೊರಿಯಲ್ ಡೀಪ್ ಹೇರ್ ಸ್ಪಾ (45 ನಿಮಿಷ); O3+ ಸ್ಕಿನ್ ಫೇಶಿಯಲ್; ಹೈಜಿನಿಕ್ ಸ್ಪಾ ಪೆಡಿಕೂರ್ ಅಥವಾ ಮೆನಿಕೂರ್; ರಿಲ್ಯಾಕ್ಸಿಂಗ್ ಹೆಡ್ & ಶೋಲ್ಡರ್ ಮಸಾಜ್",
        pkg3_title: "ಅಲ್ಟಿಮೇಟ್ ವೆಲ್ನೆಸ್ ಸ್ಪಾ ಕಾಂಬೋ",
        pkg3_features: "60-ನಿಮಿಷಗಳ ಅರೋಮಾಥೆರಪಿ ಬಾಡಿ ಮಸಾಜ್; ಬಿಸಿ ಟವೆಲ್ ಕಂಪ್ರೆಸ್ & ಸ್ಟೀಮ್; ರಿಫ್ರೆಶಿಂಗ್ ಫೇಶಿಯಲ್; ಹಸಿರು ಚಹಾ ಸೇವೆ",
        pkg_save: "ನಿಮ್ಮ ಉಳಿತಾಯ:",
        pkg_btn: "ಈಗಲೇ ಪ್ಯಾಕೇಜ್ ಬುಕ್ ಮಾಡಿ",
        
        coupons_tag: "ರಿಯಾಯಿತಿ ಕೂಪನ್‌ಗಳು",
        coupons_title: "ಕೂಪನ್‌ಗಳ ಮೂಲಕ ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ",
        coupons_sub: "ಕೋಡ್ ನಕಲಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ. ಇದನ್ನು ಕೆಳಗಿನ ಬುಕಿಂಗ್ ಫಾರ್ಮ್‌ನಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅನ್ವಯಿಸಲಾಗುತ್ತದೆ.",
        coupon1_title: "ಮೊದಲ ಭೇಟಿಯ ರಿಯಾಯಿತಿ",
        coupon1_desc: "₹299 ಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಯಾವುದೇ ಸೇವೆಗಳಿಗೆ ಅನ್ವಯಿಸುತ್ತದೆ.",
        coupon2_title: "ಬಾಡಿ ಸ್ಪಾ ಸ್ಪೆಷಲ್",
        coupon2_desc: "ಅರೋಮಾಥೆರಪಿ ಮತ್ತು ಡೀಪ್ ಟಿಶ್ಯೂ ಮಸಾಜ್‌ಗೆ ಅನ್ವಯಿಸುತ್ತದೆ.",
        coupon3_title: "ಪ್ರೀಮಿಯಂ ಹೇರ್‌ಕಟ್ ವಿಶೇಷ",
        coupon3_desc: "ಹೇರ್‌ಕಟ್ ಮತ್ತು ಹೇರ್ ಸ್ಪಾ ಸೇವೆಗಳಿಗೆ ಅನ್ವಯಿಸುತ್ತದೆ.",
        coupon_btn: "ಕೋಡ್ ನಕಲಿಸಿ",
        
        reviews_tag: "ಗ್ರಾಹಕರ ವಿಮರ್ಶೆಗಳು",
        reviews_title: "ಬೆಂಗಳೂರು ಜನರ ನೆಚ್ಚಿನ ತಾಣ",
        reviews_sub: "ನಮ್ಮ ಇಂದಿರಾನಗರ ಮತ್ತು ಕೋರಮಂಗಲ ಗ್ರಾಹಕರು ನಮ್ಮ ಬಗ್ಗೆ ಹಂಚಿಕೊಂಡಿರುವ ವಿಮರ್ಶೆಗಳನ್ನು ಓದಿ.",
        review1_text: "\"ನಾನು ಇಲ್ಲಿ O3+ ಫೇಶಿಯಲ್ ಮತ್ತು ಹೇರ್‌ಕಟ್ ಮಾಡಿಸಿಕೊಂಡಿದ್ದೇನೆ. ಸಿಬ್ಬಂದಿ ತುಂಬಾ ನುರಿತವರಾಗಿದ್ದಾರೆ ಮತ್ತು ಇಲ್ಲಿ ಯುನಿಸೆಕ್ಸ್ ಸೆಟಪ್ ತುಂಬಾ ಆರಾಮದಾಯಕವಾಗಿದೆ. ಸ್ವಚ್ಛತೆಗೆ ಮೊದಲ ಆದ್ಯತೆ ನೀಡುತ್ತಾರೆ!\"",
        review1_loc: "ಇಂದಿರಾನಗರ, ನಿವಾಸಿ",
        review2_text: "\"ಇಲ್ಲಿನ ಲೊರಿಯಲ್ ಹೇರ್ ಸ್ಪಾ ಅತ್ಯುತ್ತಮವಾಗಿದೆ. ನೈಜ ಬ್ರಾಂಡೆಡ್ ಉತ್ಪನ್ನಗಳನ್ನು ಬಳಸುತ್ತಾರೆ ಮತ್ತು ಸ್ಕಾಲ್ಪ್ ಮಸಾಜ್ ಬಹಳ ವಿಶ್ರಾಂತಿ ನೀಡುತ್ತದೆ. ಪ್ರೀಮಿಯಂ ಸಲೂನ್‌ಗೆ ಅತ್ಯುತ್ತಮ ಬೆಲೆ!\"",
        review2_loc: "ಕೋರಮಂಗಲ, ನಿವಾಸಿ",
        review3_text: "\"ಉತ್ತಮ ಅರೋಮಾಥೆರಪಿ ಬಾಡಿ ಮಸಾಜ್. ಅತ್ಯಂತ ಸ್ವಚ್ಛವಾದ ಟವೆಲ್‌ಗಳು ಮತ್ತು ಶಿಸ್ತಿನ ಸಿಬ್ಬಂದಿ. ಪ್ರತಿ ತಿಂಗಳು ಇಲ್ಲಿಗೆ ಭೇಟಿ ನೀಡಲು ಇಷ್ಟಪಡುತ್ತೇನೆ!\"",
        review3_loc: "HSR ಲೇಔಟ್, ನಿವಾಸಿ",
        
        booking_tag: "ಬುಕಿಂಗ್ ಫಾರ್ಮ್",
        booking_title: "ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸಿ",
        booking_desc: "ನಿಮ್ಮ ಆದ್ಯತೆಯ ಸೇವೆ ಮತ್ತು ಸಮಯವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ವಾಟ್ಸಾಪ್ ಮೂಲಕ ನಾವು ತಕ್ಷಣವೇ ದೃಢೀಕರಿಸುತ್ತೇವೆ.",
        label_name: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು",
        label_phone: "ವಾಟ್ಸಾಪ್ ಫೋನ್ ಸಂಖ್ಯೆ",
        label_date: "ಬುಕಿಂಗ್ ದಿನಾಂಕ",
        label_time: "ಬುಕಿಂಗ್ ಸಮಯ",
        label_service: "ಸೇವೆ / ಪ್ಯಾಕೇಜ್ ಆಯ್ಕೆ ಮಾಡಿ",
        label_coupon: "ಕೂಪನ್ ಕೋಡ್ (ಐಚ್ಛಿಕ)",
        label_msg: "ವಿಶೇಷ ವಿನಂತಿಗಳು (ಐಚ್ಛಿಕ)",
        booking_btn_whatsapp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಿ",
        booking_note: "🔒 ಇಂದಿರಾನಗರ ಸಲೂನ್ ಮ್ಯಾನೇಜರ್‌ಗೆ ನೇರ ಸಂಪರ್ಕ. ಯಾವುದೇ ಸ್ಪ್ಯಾಮ್ ಇರುವುದಿಲ್ಲ.",
        
        contact_tag: "ಸಂಪರ್ಕಿಸಿ",
        contact_title: "ವಿಚಾರಣೆಗಾಗಿ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಕರೆ ಮಾಡಿ",
        contact_desc: "ನಾವು ಇಂದಿರಾನಗರದ 100 ಅಡಿ ರಸ್ತೆಯಲ್ಲಿದ್ದೇವೆ. ನೇರ ಭೇಟಿಗೆ ಅವಕಾಶವಿದೆ, ಆದರೆ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮಾಡಿಕೊಳ್ಳುವುದು ಸೂಕ್ತ.",
        addr_title: "ನಮ್ಮ ವಿಳಾಸ",
        addr_text: "ಶಾಪ್ 14, ಪ್ರೀಮಿಯಂ ಆರ್ಕೇಡ್, 100 ಅಡಿ ರಸ್ತೆ,<br>ಮೆಟ್ರೋ ಪಿಲ್ಲರ್ 50 ರ ಹತ್ತಿರ, ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು - 560038",
        phone_title: "ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ",
        phone_text: "+91 98765 43210 (ಕರೆ ಮಾಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ)",
        hours_title: "ಕೆಲಸದ ಸಮಯ",
        hours_text: "ಸೋಮವಾರ - ಭಾನುವಾರ: ಬೆಳಿಗ್ಗೆ 9:00 - ರಾತ್ರಿ 9:00",
        
        footer_desc: "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಪ್ರೀಮಿಯಂ, ಅತ್ಯಂತ ಸ್ವಚ್ಛವಾದ ಮತ್ತು ಕುಟುಂಬಸ್ನೇಹಿ ಯುನಿಸೆಕ್ಸ್ ಸಲೂನ್ ಸೇವೆಗಳು. ನಾವು ಲೊರಿಯಲ್ ಮತ್ತು O3+ ಬ್ರಾಂಡ್ ಉತ್ಪನ್ನಗಳನ್ನು ಮಾತ್ರ ಬಳಸುತ್ತೇವೆ.",
        footer_title_nav: "ತ್ವರಿತ ಕೊಂಡಿಗಳು",
        footer_title_contact: "ಸಲೂನ್ ಸಂಪರ್ಕ",
        footer_rights: "© 2026 ಗ್ಲೋ & ಗ್ರೇಸ್ ಯುನಿಸೆಕ್ಸ್ ಸಲೂನ್ & ಸ್ಪಾ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
        footer_sub: "ಬೆಂಗಳೂರಿನ ಪ್ರೀಮಿಯಂ ಬುಟಿಕ್ ವ್ಯವಹಾರದ ಬೆಳವಣಿಗೆಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ."
    }
};

// State Variables
let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Check saved language selection
    const savedLang = localStorage.getItem('salon_lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'kn')) {
        currentLanguage = savedLang;
    }
    
    // Set active language representation
    applyLanguage(currentLanguage);
    
    initNavigation();
    initCountdownTimer();
    initServiceSelection();
    initDateValidation();
    initLanguageSwitcher();
});

// LANGUAGE SWITCHER ENGINE
function initLanguageSwitcher() {
    const toggler = document.getElementById('langToggle');
    const mobileToggler = document.getElementById('mobileLangToggle');

    const handleToggle = () => {
        currentLanguage = currentLanguage === 'en' ? 'kn' : 'en';
        localStorage.setItem('salon_lang', currentLanguage);
        applyLanguage(currentLanguage);
    };

    if (toggler) toggler.addEventListener('click', handleToggle);
    if (mobileToggler) mobileToggler.addEventListener('click', handleToggle);
}

function applyLanguage(lang) {
    document.body.setAttribute('data-lang', lang);

    // 1. Update text content for elements with data-translate attribute
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has HTML contents that should be preserved (like <strong> inside banner)
            if (element.innerHTML.includes('<strong') || element.innerHTML.includes('<br')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // 2. Update inputs placeholders
    const translatableInputs = document.querySelectorAll('[data-translate-placeholder]');
    translatableInputs.forEach(input => {
        const key = input.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    });

    // 3. Update Service Select Dropdown options
    translateServiceDropdown(lang);

    // 4. Update Language Toggler button text content
    const toggler = document.getElementById('langToggle');
    const mobileToggler = document.getElementById('mobileLangToggle');
    
    const label = lang === 'en' ? 'ಕನ್ನಡ' : 'English';
    if (toggler) toggler.textContent = label;
    if (mobileToggler) mobileToggler.textContent = label;
}

// Translate dropdown values dynamically
function translateServiceDropdown(lang) {
    const serviceSelect = document.getElementById('bookingService');
    if (!serviceSelect) return;

    // We mapping option index or option value to their translation keys
    // It's cleaner to recreate options or translate text contents based on indices
    const selectOptionsTranslation = {
        en: [
            { text: "Select service", value: "" },
            { text: "Haircut & Styling (₹199)", value: "Haircut & Styling (₹199)" },
            { text: "L'Oreal Deep Hair Spa (₹499)", value: "L'Oreal Deep Hair Spa (₹499)" },
            { text: "Beard Styling & Shave (₹99)", value: "Beard Styling & Shave (₹99)" },
            { text: "Instant Glow Facial (₹399)", value: "Instant Glow Facial (₹399)" },
            { text: "O3+ Brightening Facial (₹999)", value: "O3+ Brightening Facial (₹999)" },
            { text: "Hygienic Pedicure (₹299)", value: "Hygienic Pedicure (₹299)" },
            { text: "Aromatherapy Body Massage (₹999)", value: "Aromatherapy Body Massage (₹999)" },
            { text: "Head & Shoulder Massage (₹299)", value: "Head & Shoulder Massage (₹299)" },
            { text: "Smart Grooming Combo (₹249)", value: "Smart Grooming Combo (₹249)" },
            { text: "Head-to-Toe Refresh Combo (₹799)", value: "Head-to-Toe Refresh Combo (₹799)" },
            { text: "Ultimate Wellness Spa (₹1299)", value: "Ultimate Wellness Spa (₹1299)" }
        ],
        kn: [
            { text: "ಸೇವೆ ಆಯ್ಕೆ ಮಾಡಿ", value: "" },
            { text: "ಹೇರ್‌ಕಟ್ & ಸ್ಟೈಲಿಂಗ್ (₹199)", value: "Haircut & Styling (₹199)" },
            { text: "ಲೊರಿಯಲ್ ಡೀಪ್ ಹೇರ್ ಸ್ಪಾ (₹499)", value: "L'Oreal Deep Hair Spa (₹499)" },
            { text: "ಗಡ್ಡದ ಸ್ಟೈಲಿಂಗ್ & ಶೇವ್ (₹99)", value: "Beard Styling & Shave (₹99)" },
            { text: "ಇನ್‌ಸ್ಟಂಟ್ ಗ್ಲೋ ಫೇಶಿಯಲ್ (₹399)", value: "Instant Glow Facial (₹399)" },
            { text: "O3+ ಬ್ರೈಟನಿಂಗ್ ಫೇಶಿಯಲ್ (₹999)", value: "O3+ Brightening Facial (₹999)" },
            { text: "ಹೈಜಿನಿಕ್ ಪೆಡಿಕೂರ್ (₹299)", value: "Hygienic Pedicure (₹299)" },
            { text: "ಅರೋಮಾಥೆರಪಿ ಬಾಡಿ ಮಸಾಜ್ (₹999)", value: "Aromatherapy Body Massage (₹999)" },
            { text: "ಹೆಡ್ & ಶೋಲ್ಡರ್ ಮಸಾಜ್ (₹299)", value: "Head & Shoulder Massage (₹299)" },
            { text: "ಸ್ಮಾರ್ಟ್ ಯುನಿಸೆಕ್ಸ್ ಕಾಂಬೋ (₹249)", value: "Smart Grooming Combo (₹249)" },
            { text: "ಹೆಡ್-ಟು-ಟೋ ಪ್ರೀಮಿಯಂ ಕೇರ್ (₹799)", value: "Head-to-Toe Refresh Combo (₹799)" },
            { text: "ಅಲ್ಟಿಮೇಟ್ ವೆಲ್ನೆಸ್ ಸ್ಪಾ ಕಾಂಬೋ (₹1299)", value: "Ultimate Wellness Spa (₹1299)" }
        ]
    };

    const currentSelectedValue = serviceSelect.value;
    const optGroups = serviceSelect.querySelectorAll('optgroup');
    const flatOptionsList = selectOptionsTranslation[lang];

    let optIdx = 1; // skip first placeholder
    
    // First option (placeholder)
    if (serviceSelect.options[0]) {
        serviceSelect.options[0].text = flatOptionsList[0].text;
    }

    optGroups.forEach(group => {
        // Translate group labels
        const groupLabel = group.getAttribute('label');
        if (groupLabel) {
            if (groupLabel.includes("Styling") || groupLabel.includes("ಸ್ಟೈಲಿಂಗ್")) {
                group.label = lang === 'en' ? "Popular Styling" : "ಸ್ಟೈಲಿಂಗ್ ಸೇವೆಗಳು";
            } else if (groupLabel.includes("Facial") || groupLabel.includes("ತ್ವಚೆ")) {
                group.label = lang === 'en' ? "Skin & Facials" : "ತ್ವಚೆ ಮತ್ತು ಫೇಶಿಯಲ್";
            } else if (groupLabel.includes("Massage") || groupLabel.includes("ಮಸಾಜ್")) {
                group.label = lang === 'en' ? "Spa Massages" : "ಸ್ಪಾ ಮಸಾಜ್‌ಗಳು";
            } else if (groupLabel.includes("Combo") || groupLabel.includes("ಕಾಂಬೋ")) {
                group.label = lang === 'en' ? "Combo Savings Packs" : "ಕಾಂಬೋ ಪ್ಯಾಕೇಜ್‌ಗಳು";
            }
        }

        const options = group.querySelectorAll('option');
        options.forEach(opt => {
            const dataItem = flatOptionsList.find(item => item.value === opt.value);
            if (dataItem) {
                opt.textContent = dataItem.text;
            }
        });
    });
}

// 1. MOBILE DRAWER NAVIGATION MENU
function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function openDrawer() {
        mobileDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        mobileDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle) menuToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

// 2. 🚨 SIMULATED COUNTDOWN TIMER FOR URGENCY
function initCountdownTimer() {
    const timerElement = document.getElementById('countdownTimer');
    if (!timerElement) return;

    let timerSeconds = localStorage.getItem('salon_countdown_seconds');
    
    if (!timerSeconds || parseInt(timerSeconds) <= 0) {
        timerSeconds = (1 * 60 * 60) + (45 * 60); // 1 hour 45 minutes
    } else {
        timerSeconds = parseInt(timerSeconds);
    }

    function updateTimer() {
        if (timerSeconds <= 0) {
            timerSeconds = (1 * 60 * 60) + (45 * 60);
        }

        timerSeconds--;
        localStorage.setItem('salon_countdown_seconds', timerSeconds);

        const hours = Math.floor(timerSeconds / 3600);
        const minutes = Math.floor((timerSeconds % 3600) / 60);
        const seconds = timerSeconds % 60;

        const formattedTime = 
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');

        timerElement.textContent = formattedTime;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// 3. SERVICES CATEGORIES TAB FILTER
function filterServices(category) {
    const cards = document.querySelectorAll('.service-card');
    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        const onClickAttr = tab.getAttribute('onclick');
        if (onClickAttr && onClickAttr.includes(`'${category}'`)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'flex';
        } else {
            const cardCat = card.getAttribute('data-category');
            if (cardCat === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// 4. COPY COUPON SYSTEM
function copyCoupon(codeElementId, buttonElement) {
    const codeText = document.getElementById(codeElementId).innerText;
    
    navigator.clipboard.writeText(codeText).then(() => {
        buttonElement.innerText = currentLanguage === 'en' ? "Copied!" : "ನಕಲಿಸಲಾಗಿದೆ!";
        buttonElement.classList.add('copied');

        const couponInput = document.getElementById('couponApplied');
        if (couponInput) {
            couponInput.value = codeText;
        }

        const msg = currentLanguage === 'en' ? 
            `Code "${codeText}" copied & applied to form!` : 
            `ಕೋಡ್ "${codeText}" ನಕಲಿಸಲಾಗಿದೆ ಮತ್ತು ಬುಕಿಂಗ್ ಫಾರ್ಮ್‌ಗೆ ಅನ್ವಯಿಸಲಾಗಿದೆ!`;
        showToast(msg);

        setTimeout(() => {
            buttonElement.innerText = currentLanguage === 'en' ? "Copy Code" : "ಕೋಡ್ ನಕಲಿಸಿ";
            buttonElement.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        showToast(currentLanguage === 'en' ? 'Failed to copy.' : 'ನಕಲಿಸಲು ವಿಫಲವಾಗಿದೆ.');
    });
}

// TOAST TRIGGER UTILITY
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.innerText = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 5. BOOK NOW / SELECT SERVICE TRIGGER FROM CARDS & PACKAGES
function initServiceSelection() {
    const bookingButtons = document.querySelectorAll('.card-book-btn');
    const serviceSelect = document.getElementById('bookingService');

    bookingButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const serviceName = button.getAttribute('data-service');
            if (!serviceName) return;

            if (serviceSelect) {
                let optionFound = false;
                for (let i = 0; i < serviceSelect.options.length; i++) {
                    if (serviceSelect.options[i].value.includes(serviceName) || serviceName.includes(serviceSelect.options[i].value)) {
                        serviceSelect.selectedIndex = i;
                        optionFound = true;
                        break;
                    }
                }
                
                if (!optionFound) {
                    const newOpt = document.createElement('option');
                    newOpt.value = serviceName;
                    newOpt.text = serviceName;
                    serviceSelect.appendChild(newOpt);
                    serviceSelect.value = serviceName;
                }

                serviceSelect.style.borderColor = 'var(--primary)';
                serviceSelect.style.backgroundColor = 'var(--primary-light)';
                setTimeout(() => {
                    serviceSelect.style.borderColor = '';
                    serviceSelect.style.backgroundColor = '';
                }, 1000);
            }

            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
                
                const nameInput = document.getElementById('clientName');
                if (nameInput) {
                    setTimeout(() => nameInput.focus(), 600);
                }
            }
        });
    });
}

// 6. DATE INPUT - ENFORCE TODAY OR FUTURE DATE ONLY
function initDateValidation() {
    const dateInput = document.getElementById('bookingDate');
    if (!dateInput) return;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    dateInput.min = `${year}-${month}-${day}`;
}

// 7. FORM SUBMISSION -> FORMAT DIRECT TO WHATSAPP API
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const service = document.getElementById('bookingService').value;
    const coupon = document.getElementById('couponApplied').value.trim().toUpperCase();
    const message = document.getElementById('clientMessage').value.trim();

    if (phone.length !== 10 || isNaN(phone)) {
        showToast(currentLanguage === 'en' ? 'Please enter a valid 10-digit phone number.' : 'ದಯವಿಟ್ಟು 10 ಅಂಕಿಗಳ ಸರಿಯಾದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ.');
        return;
    }

    let formattedDate = date;
    try {
        const parts = date.split('-');
        if (parts.length === 3) {
            formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
    } catch (e) {
        console.error(e);
    }

    // Format pre-filled WhatsApp message based on current language
    let whatsappText = "";
    if (currentLanguage === 'en') {
        whatsappText += `Hi Glow & Grace Unisex Salon, I want to book an appointment slot:\n\n`;
        whatsappText += `👤 Name: ${name}\n`;
        whatsappText += `📞 Phone: ${phone}\n`;
        whatsappText += `💇 Service: ${service}\n`;
        whatsappText += `📅 Date: ${formattedDate}\n`;
        whatsappText += `⏰ Time: ${time}\n`;
        if (coupon) whatsappText += `🎟️ Coupon Applied: ${coupon}\n`;
        if (message) whatsappText += `💬 Note: ${message}\n`;
        whatsappText += `\nPlease confirm if this slot is available and share final price details.`;
    } else {
        whatsappText += `ನಮಸ್ಕಾರ ಗ್ಲೋ & ಗ್ರೇಸ್ ಯುನಿಸೆಕ್ಸ್ ಸಲೂನ್, ನಾನು ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ:\n\n`;
        whatsappText += `👤 ಹೆಸರು: ${name}\n`;
        whatsappText += `📞 ಮೊಬೈಲ್: ${phone}\n`;
        whatsappText += `💇 ಸೇವೆ: ${service}\n`;
        whatsappText += `📅 ದಿನಾಂಕ: ${formattedDate}\n`;
        whatsappText += `⏰ ಸಮಯ: ${time}\n`;
        if (coupon) whatsappText += `🎟️ ಕೂಪನ್ ಕೋಡ್: ${coupon}\n`;
        if (message) whatsappText += `💬 ವಿಶೇಷ ಸೂಚನೆ: ${message}\n`;
        whatsappText += `\nದಯವಿಟ್ಟು ಈ ಸಮಯ ಲಭ್ಯವಿದೆಯೇ ಎಂದು ತಿಳಿಸಿ ಮತ್ತು ಅಂತಿಮ ದರವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.`;
    }

    const encodedText = encodeURIComponent(whatsappText);
    const salonOwnerPhone = "919876543210"; 
    const whatsappUrl = `https://wa.me/${salonOwnerPhone}?text=${encodedText}`;

    const redirectMsg = currentLanguage === 'en' ? 
        'Redirecting to WhatsApp for confirmation...' : 
        'ದೃಢೀಕರಣಕ್ಕಾಗಿ ವಾಟ್ಸಾಪ್‌ಗೆ ಮರುನಿರ್ದೇಶಿಸಲಾಗುತ್ತಿದೆ...';
        
    showToast(redirectMsg);
    
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 800);
}
