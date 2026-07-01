# Glow & Grace Salon & Spa - High-Conversion Single-Page SPA & Salon Website

A modern, light, and performance-optimized single-page responsive website designed specifically for local Salon and Spa owners. It is crafted to scale local business revenue (targeting ₹50,000 – ₹2,00,000 monthly income) by maximizing walk-in traffic, direct call inquiries, and direct-to-WhatsApp bookings.

---

## 🎯 Conversion Optimization Strategies Built-In

1. **Top Urgency Offer Banner**: 
   A sticky, highlight-red/rose-gold top banner that draws focus instantly. Features a simulated countdown timer that keeps resetting to generate real booking urgency. Includes a quick "Claim Offer Now" link.
   
2. **Sticky Mobile Floating Action Buttons (FAB)**: 
   Visible at all times on mobile devices. Splits the viewport width between a one-touch **Call Now** action (teal) and an instant **WhatsApp Booking** action (green). 

3. **Digital Coupon Copying System**: 
   Users can click "Copy Code" on beautiful dashed coupon cards (codes: `NEW20`, `SPA100`, `HAIRCUT50`). Clicking copies the code, triggers a custom bottom toast notification ("Code copied & applied to form!"), and automatically pre-fills the coupon code input field in the booking form.

4. **Direct-to-WhatsApp Booking Form**: 
   A lightweight, clean booking form where the customer selects a service, time, date, and coupon code. Submitting encodes these details into a human-readable text block and launches WhatsApp Web / App directly to send it to the business owner:
   * **Sample Message**:
     > *Hi Glow & Grace Salon, I want to book an appointment slot:*
     > *👤 Name: Rohan Sharma*
     > *📞 Phone: 9876543210*
     > *💇 Service: L'Oreal Deep Hair Spa (₹499)*
     > *📅 Date: 15/07/2026*
     > *⏰ Time: 04:00 PM*
     > *🎟️ Coupon Applied: NEW20*
     > *Please confirm if this slot is available and share final price details.*

5. **Value Combo Packages**: 
   Focuses on cross-selling services via high-margin packages (e.g., *Head-to-Toe Refresh Combo* for ₹799 instead of ₹1250). Displays savings prominently ("You Save ₹451!") to encourage higher average checkouts.

---

## 🔍 Local SEO & Rich Snippets

* **Local Keyword Targeting**: Headers and meta tags contain highly searched phrases: `salon near me`, `spa near me`, `haircut near me`, `beauty salon`, and `massage spa near me`.
* **Open Graph (OG) & Twitter Cards**: Formatted metadata to ensure that when the salon link is shared on WhatsApp, Facebook, or Twitter, it displays a premium thumbnail image (`images/hero.png`), title, and description.
* **LocalBusiness JSON-LD Schema**: Structured schema included in `index.html` to help Google index the physical address, phone number, coordinates, operating hours, and local price range, which boosts Google Maps local search ranking.

---

## 📁 Project Structure

```
saloon/
│
├── index.html         # Main web page structure, SEO tags, and LocalBusiness JSON-LD schema
├── style.css          # Modern CSS styling (CSS variables, responsive grids, micro-animations)
├── script.js          # Client-side form handlers, copy actions, drawer, and timer logic
├── favicon.svg        # Scalable vector icon for browsers
├── favicon.ico        # Fallback icon
└── images/            # Directory containing customized visual assets
    ├── hero.png       # Cozy salon interior background image
    ├── about.png      # Stylist styling hair showing quality/hygiene
    └── spa.png        # Peaceful zen massage stones/aromatherapy card image
```

---

## 🛠️ How to Customize for a Different Salon

1. **Change WhatsApp Phone Number**:
   - Open `script.js` and locate line 192: `const salonOwnerPhone = "919876543210";`
   - Change it to the owner's 10-digit phone number with the country code prefix (e.g., `91` for India, followed by the number: `91XXXXXXXXXX`).

2. **Edit Business Name, Address, or Map**:
   - In `index.html`, search for `Glow & Grace` and replace it with the new salon name.
   - Update the address lines in the `<address>` sections of the footer and contact block.
   - Update the Google Maps `<iframe>` link in the booking section to match the new location embed code.

3. **Update JSON-LD Schema (SEO)**:
   - In the `<script type="application/ld+json">` block inside the `<head>` of `index.html`, update the `"address"`, `"telephone"`, and `"geo"` (latitude and longitude) fields to match the real physical salon.

---

## 🚀 Performance & Deployment

* **No Heavy Frameworks**: Built using pure HTML5, vanilla CSS3, and vanilla ES6 JS to ensure lightning-fast page loading (crucial for local mobile users on 4G/5G connections).
* **SVG Icons & Responsive Images**: Hand-drawn vector icons keep the site extremely lightweight.
* **Hosting**: Can be hosted for free on GitHub Pages, Netlify, Vercel, or standard cPanel hosting by simply uploading the folder.
