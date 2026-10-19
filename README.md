# SM Home Beauty — Luxury Beauty Salon & Home Concierge

A bespoke, production-ready luxury beauty salon web application built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Router**.

Designed to international creative agency standards for **SM Home Beauty** (Lahore, Pakistan).

---

## ✦ Core Design & Architectural Principles

- **Quiet Luxury Aesthetic:** Warm Ivory (`#FBF6F0`), Soft Beige (`#F3E8DC`), Dark Espresso (`#110D0B`), Rich Chocolate (`#1A1411`), and Muted Champagne Gold (`#B88A44`).
- **Editorial Typography:** *Cormorant Garamond* for high-fashion headings, quotes, and accents; *Montserrat* for crisp UI, metadata, pricing, and inputs.
- **Strictly Authentic Photography:** 100% genuine photography from verified beauty & salon photographers, stored locally in `public/images/`. Absolutely no AI-generated portraits, cartoon illustrations, or fake renderings.
- **Full Prototype Preservation:** Exact preservation of all 11 original services, categories, prices in **PKR**, and PKR 500 home concierge fee.
- **Responsible Booking Experience:** No false "instant confirmation" claims without a real backend. All online bookings generate a formal **Appointment Request (e.g. `SM4821`)** marked as *Pending Staff Confirmation*, with pre-formatted WhatsApp dispatch.

---

## ✦ Pages & Features Implemented

1. **Homepage (`/`)**
   - Cinematic hero with editorial photography, gradient lighting, and real metrics (500+ Clients, 4.9★ Rating, 11+ Services).
   - Interactive Quick Booking Panel (Service, Date, Slot Check) that links into the booking flow.
   - Luxury animated marquee ticker (*Precision Hair ✦ Cellular Skin ✦ Haute Makeup...*).
   - Treatments We Love (image-led cards with direct category navigation).
   - Signature Treatments (featured treatments with quick-add toggles).
   - 4 Pillars of Excellence (Premium Products, Hygiene First, At-Home Service, Seamless Booking).
   - Couture Bridal Showcase (split editorial layout, trousseau details, direct bridal booking).
   - At-Home VIP Experience (explains sterilization protocols, fresh linens, and the fixed PKR 500 fee).
   - Artistry in Action Gallery preview with interactive lightbox.
   - Authentic Client Reflections (Ayesha, Fatima, Zainab).
   - Accordion FAQ preview.
   - High-impact dark chocolate & gold final booking CTA.

2. **Services & Pricing Menu (`/services`)**
   - Interactive category filter tabs: All, Hair, Skin, Makeup, Nails, Waxing.
   - Query string support (e.g. `/services?cat=Hair`).
   - Image-led service cards with duration, investment in PKR, short description, and expandable full treatment details.
   - Multi-service selection with persistent cart tray in `BookingContext` (stored in `sessionStorage`).
   - Persistent bottom floating bar (`.bar` from prototype) displaying selected count, duration, subtotal, and "Continue to Booking" CTA.

3. **Advanced 4-Step Booking Experience (`/booking`)**
   - **Step 1 — Services:** Add/remove treatments, duration calculation, subtotal tally, error validation.
   - **Step 2 — Preferences:** Venue selection (Studio vs. At-Home +PKR 500), preferred artist selection (Any Available, Sana, Hira, Mehwish), date picker (past dates disabled), and time slot selection (10:00 AM – 6:00 PM).
   - **Step 3 — Details:** Client Name (min 2 chars), WhatsApp Phone (min 10 digits), Address (mandatory for At-Home), and optional Special Notes.
   - **Step 4 — Request Confirmation:** Generates unique Reference ID (e.g., `SM4821`), structured summary, status banner (*Pending Staff Confirmation*), direct "Send on WhatsApp" button, and fallback "Copy Message" button.
   - **Local Request Records:** Persisted to `localStorage` with cancellation controls.
   - **Sticky Desktop Summary & Mobile Drawer:** Real-time financial calculations (services subtotal + home fee).

4. **Visual Gallery (`/gallery`)**
   - Responsive editorial masonry grid across 6 categories (Bridal Makeup, Hair Styling, Hair Colour, Skin Treatments, Nail Art, Salon Environment).
   - Fullscreen Lightbox with Next/Previous arrows and keyboard controls (`Escape`, `ArrowLeft`, `ArrowRight`).
   - Editorial demonstration disclaimer banner.
   - Direct Instagram callout to `@sm.homebeauty`.

5. **About Us (`/about`)**
   - Brand philosophy & story.
   - Studio vs. At-Home experience explanation.
   - Clinical hygiene standards (autoclave sterilization, single-use disposables, dermatologically vetted elixirs).
   - Team profiles (Sana, Hira, Mehwish) with honest representation and staff verification placeholders.
   - Full accordion FAQ.

6. **Contact & Concierge (`/contact`)**
   - 4 Contact cards: WhatsApp, Instagram (`@sm.homebeauty`), Studio Address, and Working Hours (Daily 10:00 AM – 7:00 PM).
   - Direct interactive WhatsApp concierge inquiry form.
   - Business details verification notice.

---

## ✦ Installation & Local Development

### Prerequisites
- Node.js (v18.0.0 or higher recommended, tested on Node v24)
- npm (v9.0.0 or higher)

### Setup Steps
```bash
# Navigate to the project root (e.g., demo)
cd e:\demo

# Dependencies are already installed, but to reinstall if needed:
npm install

# Start the Vite local development server
npm run dev
```

The application will be accessible at:
- **Local:** `http://localhost:5173` (or `http://localhost:5174` if 5173 is occupied)

---

## ✦ Production Build

To generate an optimized, minified production build:
```bash
npm run build
```
The output files will be written to the `dist/` directory, ready to be deployed to Vercel, Netlify, Cloudflare Pages, or any modern web host.

To preview the production build locally:
```bash
npm run preview
```

---

## ✦ Business Details Requiring Client Verification

Before deploying to production, update the centralized configuration file:
`src/config/business.js`

| Field | Current Placeholder Value | Action Required |
| :--- | :--- | :--- |
| **WhatsApp Number** | `923000000000` | Replace with the owner's active business WhatsApp number (with country code `92`). |
| **Studio Address** | `Suite 4B, Gulberg / DHA, Lahore` | Replace with exact studio street address and Google Maps link. |
| **Phone Number** | `+92 300 0000000` | Replace with official salon front desk phone. |
| **Email** | `concierge@smhomebeauty.com` | Replace with official salon contact email. |
| **Team Photos** | Initials / Monogram Placeholders | Replace placeholder monograms with real staff portraits when photographed. |

---

## ✦ Technology Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Routing:** React Router DOM (v6)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Google Fonts (Cormorant Garamond & Montserrat)
- **State Management:** React Context API (`BookingContext`) with `localStorage` & `sessionStorage` persistence

© 2026 SM Home Beauty. All rights reserved.
