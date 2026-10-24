/**
 * S&M Home Beauty Salon — Services & Packages Catalog
 * Operating in Dubai & Sharjah, UAE
 * Currency: AED (Free Home Beauty Services across Dubai & Sharjah)
 */

export const SERVICE_CATEGORIES = [
  "All",
  "Hair & Styling",
  "Hair Treatments",
  "Hair Colour",
  "Facials & Skin Treatments",
  "Threading",
  "Waxing",
  "Manicure & Pedicure",
  "Massage",
  "Party Makeup",
];

export const STYLISTS = [
  { id: "any", name: "Any Available", role: "Next Available Master Artist", note: "Recommended for earliest appointment in Dubai & Sharjah" },
  { id: "sana", name: "Sana", role: "Senior Hair & Colour Stylist", note: "Specialist in global colour, balayage & hair transformations" },
  { id: "hira", name: "Hira", role: "Party & Haute Glam Artist", note: "Specialist in signature party couture makeup & evening glam" },
  { id: "mehwish", name: "Mehwish", role: "Dermal Aesthetics & Nail Expert", note: "Specialist in 24K gold facials & acrylic gel nail artistry" },
];

/**
 * 11 S&M HOME BEAUTY SALON OFFICIAL PACKAGES
 * Includes both Points-Based Packages (1, 2, 3, 6) and Fixed Packages (4, 5, 7, 8, 9, 10, 11)
 * All prices strictly in AED.
 */
export const PACKAGES = [
  {
    id: "pkg-1",
    number: 1,
    name: "1st Package — 12 Points Custom Care",
    shortName: "1st Package (100 AED · 12 Points)",
    price: 100,
    type: "points",
    totalPoints: 12,
    tag: "Choose 12 Points",
    durationMinutes: 60,
    description: "Choose any combination of eligible salon services totaling up to 12 points for 100 AED.",
    eligibleServices: [
      { id: "p1-deep-cleaning-facial", name: "Deep Cleaning Facial", category: "Facials & Skin Treatments", points: 5, durationMinutes: 45 },
      { id: "p1-facial-bleach", name: "Facial Bleach", category: "Facials & Skin Treatments", points: 4, durationMinutes: 25 },
      { id: "p1-face-waxing", name: "Face Waxing", category: "Waxing", points: 6, durationMinutes: 30 },
      { id: "p1-hair-trim", name: "Hair Trim", category: "Hair & Styling", points: 3, durationMinutes: 20 },
      { id: "p1-pro-haircut", name: "Professional Hair Cut (Without Blow Dry)", category: "Hair & Styling", points: 5, durationMinutes: 35 },
      { id: "p1-blow-dry-ex", name: "If anyone takes Blow Dry", category: "Hair & Styling", points: 4, durationMinutes: 25, tag: "EX" },
      { id: "p1-collagen-hair-mask", name: "Collagen Hair Mask", category: "Hair Treatments", points: 6, durationMinutes: 40 },
      { id: "p1-half-legs-wax", name: "Half Legs Wax", category: "Waxing", points: 2, durationMinutes: 20 },
      { id: "p1-full-legs-wax", name: "Full Legs Wax", category: "Waxing", points: 4, durationMinutes: 35 },
      { id: "p1-half-arms-wax", name: "Half Arms Wax", category: "Waxing", points: 2, durationMinutes: 20 },
      { id: "p1-full-arms-wax", name: "Full Arms Wax", category: "Waxing", points: 4, durationMinutes: 30 },
      { id: "p1-under-arms-wax", name: "Under Arms Wax", category: "Waxing", points: 2, durationMinutes: 15 },
      { id: "p1-full-bikini-wax", name: "Full Bikini Wax", category: "Waxing", points: 5, durationMinutes: 35 },
      { id: "p1-eyebrows-threading", name: "Eyebrows Threading", category: "Threading", points: 1, durationMinutes: 10 },
      { id: "p1-upper-lips-threading", name: "Upper Lips Threading", category: "Threading", points: 1, durationMinutes: 10 },
      { id: "p1-forehead-threading", name: "Forhead Threading", category: "Threading", points: 2, durationMinutes: 10, tag: "No Wax" },
      { id: "p1-chin-threading", name: "Chin Threading", category: "Threading", points: 2, durationMinutes: 10, tag: "No Wax" },
    ]
  },
  {
    id: "pkg-2",
    number: 2,
    name: "2nd Package — 22 Points Luxury Care",
    shortName: "2nd Package (150 AED · 22 Points)",
    price: 150,
    type: "points",
    totalPoints: 22,
    tag: "Choose 22 Points",
    durationMinutes: 90,
    description: "Choose any combination of premium salon treatments totaling up to 22 points for 150 AED.",
    eligibleServices: [
      // HAIR AND STYLING
      { id: "p2-haircut-noblowdry", name: "Professional Hair Cut (No Blow Dry)", category: "Hair & Styling", points: 5, durationMinutes: 35, tag: "No Blow Dry" },
      { id: "p2-blowdry-style", name: "Blow Dry with Style", category: "Hair & Styling", points: 6, durationMinutes: 30 },
      { id: "p2-hair-styling", name: "Hair Styling (Straight - Curls)", category: "Hair & Styling", points: 10, durationMinutes: 45 },

      // HAIR TREATMENTS
      { id: "p2-deep-conditioning", name: "Deep Conditioning Treatment Mask", category: "Hair Treatments", points: 5, durationMinutes: 35 },
      { id: "p2-summer-hair-spa", name: "Summer Special Hair Spa", category: "Hair Treatments", points: 7, durationMinutes: 45 },
      { id: "p2-hair-collagen", name: "Hair Collagen Mask", category: "Hair Treatments", points: 6, durationMinutes: 40 },
      { id: "p2-hot-oil-head-msg", name: "Hot Oil Head Massage (20 mins)", category: "Hair Treatments", points: 7, durationMinutes: 20 },

      // HAIR COLOUR
      { id: "p2-global-colour", name: "Global Hair Colour", category: "Hair Colour", points: 12, durationMinutes: 120 },
      { id: "p2-roots-touchup", name: "Roots Touchup", category: "Hair Colour", points: 8, durationMinutes: 45 },
      { id: "p2-henna-hair", name: "Henna Hair Colour", category: "Hair Colour", points: 7, durationMinutes: 60 },

      // MANICURE & PEDICURE
      { id: "p2-spa-mani", name: "Spa Manicure", category: "Manicure & Pedicure", points: 7, durationMinutes: 40 },
      { id: "p2-spa-pedi", name: "Spa Pedicure", category: "Manicure & Pedicure", points: 7, durationMinutes: 45 },
      { id: "p2-gel-polish-hands", name: "Gel Polish (Hands)", category: "Manicure & Pedicure", points: 5, durationMinutes: 30 },
      { id: "p2-gel-polish-feets", name: "Gel Polish (Feets)", category: "Manicure & Pedicure", points: 5, durationMinutes: 30 },
      { id: "p2-gel-removal-hands", name: "Gel Removal (Hands)", category: "Manicure & Pedicure", points: 4, durationMinutes: 20 },
      { id: "p2-gel-removal-feets", name: "Gel Removal (Feets)", category: "Manicure & Pedicure", points: 4, durationMinutes: 20 },
      { id: "p2-classic-mani", name: "Classic Manicure", category: "Manicure & Pedicure", points: 5, durationMinutes: 35 },
      { id: "p2-classic-pedi", name: "Classic Pedicure", category: "Manicure & Pedicure", points: 5, durationMinutes: 35 },

      // FACIALS & SKIN TREATMENTS
      { id: "p2-face-bleach-reg", name: "Face Bleach (Regular)", category: "Facials & Skin Treatments", points: 4, durationMinutes: 25 },
      { id: "p2-milk-bleach", name: "Milk Bleach", category: "Facials & Skin Treatments", points: 5, durationMinutes: 25 },
      { id: "p2-whitening-facial", name: "Whitening Facial", category: "Facials & Skin Treatments", points: 10, durationMinutes: 60 },
      { id: "p2-allinone-glow", name: "All-in-one Glow Facial", category: "Facials & Skin Treatments", points: 8, durationMinutes: 50 },
      { id: "p2-summer-facial", name: "Summer Special Facial", category: "Facials & Skin Treatments", points: 9, durationMinutes: 55 },
      { id: "p2-face-cleanup", name: "Full Face Cleanup", category: "Facials & Skin Treatments", points: 6, durationMinutes: 35 },
      { id: "p2-collagen-mask", name: "Collagen Face Mask", category: "Facials & Skin Treatments", points: 4, durationMinutes: 20 },

      // THREADING
      { id: "p2-eyebrow-thread", name: "Eyebrow Threading", category: "Threading", points: 2, durationMinutes: 10 },
      { id: "p2-upperlip-thread", name: "Upper Lips Threading", category: "Threading", points: 2, durationMinutes: 10 },
      { id: "p2-chin-thread", name: "Chin Threading", category: "Threading", points: 2, durationMinutes: 10 },
      { id: "p2-eyebrow-tint", name: "Eyebrow Tint / Colour", category: "Threading", points: 5, durationMinutes: 20 },

      // WAXING
      { id: "p2-underarms-wax", name: "Underarms Waxing", category: "Waxing", points: 2, durationMinutes: 15 },
      { id: "p2-full-arms-wax", name: "Full Arms Waxing", category: "Waxing", points: 4, durationMinutes: 30 },
      { id: "p2-full-legs-wax", name: "Full Legs Waxing", category: "Waxing", points: 4, durationMinutes: 35 },
      { id: "p2-full-back-wax", name: "Full Back Waxing", category: "Waxing", points: 5, durationMinutes: 25 },
      { id: "p2-full-stomach-wax", name: "Full Stomach Waxing", category: "Waxing", points: 5, durationMinutes: 25 },
      { id: "p2-full-bikini-wax", name: "Full Bikini Waxing", category: "Waxing", points: 6, durationMinutes: 35 },
      { id: "p2-full-face-wax", name: "Full Face Waxing", category: "Waxing", points: 7, durationMinutes: 25 },

      // MASSAGE 20 MINUTES
      { id: "p2-foot-massage", name: "Foot Massage (20 mins)", category: "Massage", points: 7, durationMinutes: 20 },
      { id: "p2-head-massage", name: "Head Massage (20 mins)", category: "Massage", points: 7, durationMinutes: 20 },
      { id: "p2-head-neck-shoulder", name: "Head, Neck and Shoulder Massage (20 mins)", category: "Massage", points: 9, durationMinutes: 20 },
      { id: "p2-back-massage", name: "Back Massage (20 mins)", category: "Massage", points: 8, durationMinutes: 20 },
      { id: "p2-hand-leg-massage", name: "Hand-Leg Massage (20 mins)", category: "Massage", points: 10, durationMinutes: 20 },
    ]
  },
  {
    id: "pkg-3",
    number: 3,
    name: "3rd Package — 25 Points Deluxe Glamour",
    shortName: "3rd Package (200 AED · 25 Points)",
    price: 200,
    type: "points",
    totalPoints: 25,
    tag: "Choose 25 Points",
    durationMinutes: 120,
    description: "Choose any combination of deluxe salon services totaling up to 25 points for 200 AED.",
    eligibleServices: [
      // HAIR & STYLING
      { id: "p3-haircut-noblowdry", name: "Professional Hair Cut (No Blow Dry)", category: "Hair & Styling", points: 5, durationMinutes: 35, tag: "No Blow Dry" },
      { id: "p3-blowdry-style", name: "Blow Dry with Style", category: "Hair & Styling", points: 7, durationMinutes: 30 },
      { id: "p3-hair-styling", name: "Hair Styling (straight or curls)", category: "Hair & Styling", points: 10, durationMinutes: 45 },

      // HAIR TREATMENTS
      { id: "p3-deep-conditioning", name: "Deep Conditioning Treatment Mask", category: "Hair Treatments", points: 6, durationMinutes: 35 },
      { id: "p3-summer-hair-spa", name: "Summer Special Hair Spa", category: "Hair Treatments", points: 7, durationMinutes: 45 },
      { id: "p3-hair-collagen", name: "Hair Collagen Mask", category: "Hair Treatments", points: 7, durationMinutes: 40 },
      { id: "p3-hot-oil-head-msg", name: "Hot oil Head Massage (20 mins)", category: "Hair Treatments", points: 7, durationMinutes: 20 },

      // HAIR COLOUR
      { id: "p3-global-colour", name: "Global Hair Colour", category: "Hair Colour", points: 10, durationMinutes: 120 },
      { id: "p3-roots-touchup", name: "Roots Touchup", category: "Hair Colour", points: 8, durationMinutes: 45 },
      { id: "p3-henna-hair", name: "Henna Hair Colour", category: "Hair Colour", points: 7, durationMinutes: 60 },

      // FACIALS & SKIN TREATMENTS
      { id: "p3-face-bleach-reg", name: "Face Bleach (Regular)", category: "Facials & Skin Treatments", points: 4, durationMinutes: 25 },
      { id: "p3-milk-bleach", name: "Milk Bleach (Special)", category: "Facials & Skin Treatments", points: 5, durationMinutes: 25, tag: "Special" },
      { id: "p3-nose-strip", name: "Nose Strip (Whiteheads Removal)", category: "Facials & Skin Treatments", points: 3, durationMinutes: 15 },
      { id: "p3-whitening-facial", name: "Whitening Facial", category: "Facials & Skin Treatments", points: 10, durationMinutes: 60 },
      { id: "p3-allinone-glow", name: "All-in-one Glow Facial", category: "Facials & Skin Treatments", points: 8, durationMinutes: 50 },
      { id: "p3-summer-facial", name: "Summer Special Facial", category: "Facials & Skin Treatments", points: 9, durationMinutes: 55 },
      { id: "p3-face-cleanup", name: "Full Face Cleanup", category: "Facials & Skin Treatments", points: 6, durationMinutes: 35 },
      { id: "p3-face-collagen-mask", name: "Face Collagen Mask", category: "Facials & Skin Treatments", points: 5, durationMinutes: 25 },

      // MANICURE & PEDICURE
      { id: "p3-spa-mani", name: "Spa Manicure", category: "Manicure & Pedicure", points: 8, durationMinutes: 40 },
      { id: "p3-spa-pedi", name: "Spa Pedicure", category: "Manicure & Pedicure", points: 8, durationMinutes: 45 },
      { id: "p3-gel-polish-hands", name: "Gel Polish (Hands)", category: "Manicure & Pedicure", points: 5, durationMinutes: 30 },
      { id: "p3-gel-polish-feet", name: "Gel Polish (Feet)", category: "Manicure & Pedicure", points: 5, durationMinutes: 30 },
      { id: "p3-gel-removal-hands", name: "Gel Removal (Hands)", category: "Manicure & Pedicure", points: 4, durationMinutes: 20 },
      { id: "p3-gel-removal-feet", name: "Gel Removal (Feet)", category: "Manicure & Pedicure", points: 4, durationMinutes: 20 },

      // THREADING
      { id: "p3-eyebrow-thread", name: "Eyebrow Threading", category: "Threading", points: 2, durationMinutes: 10 },
      { id: "p3-upperlip-thread", name: "Upper Lips Threading", category: "Threading", points: 2, durationMinutes: 10 },
      { id: "p3-chin-thread", name: "Chin Threading", category: "Threading", points: 3, durationMinutes: 10 },
      { id: "p3-eyebrow-tint", name: "Eyebrows Tint Colour", category: "Threading", points: 5, durationMinutes: 20 },

      // WAXING
      { id: "p3-underarms-wax", name: "Underarms Waxing", category: "Waxing", points: 2, durationMinutes: 15 },
      { id: "p3-full-arms-wax", name: "Full Arms Waxing", category: "Waxing", points: 4, durationMinutes: 30 },
      { id: "p3-full-legs-wax", name: "Full Legs Waxing", category: "Waxing", points: 4, durationMinutes: 35 },
      { id: "p3-full-back-wax", name: "Full Back Waxing", category: "Waxing", points: 5, durationMinutes: 25 },
      { id: "p3-full-stomach-wax", name: "Full Stomach Waxing", category: "Waxing", points: 5, durationMinutes: 25 },
      { id: "p3-full-bikini-wax", name: "Full Bikini Waxing", category: "Waxing", points: 6, durationMinutes: 35 },
      { id: "p3-full-face-wax", name: "Full Face Waxing", category: "Waxing", points: 7, durationMinutes: 25 },

      // MASSAGE - 20 MINTS
      { id: "p3-foot-massage", name: "Foot Massage (20 mins)", category: "Massage", points: 7, durationMinutes: 20 },
      { id: "p3-head-massage", name: "Head Massage (20 mins)", category: "Massage", points: 7, durationMinutes: 20 },
      { id: "p3-head-neck-shoulder", name: "Head, Neck and Shoulder (20 mins)", category: "Massage", points: 10, durationMinutes: 20 },
      { id: "p3-back-massage", name: "Back Massage (20 mins)", category: "Massage", points: 8, durationMinutes: 20 },
      { id: "p3-hands-legs-massage", name: "Hands - Legs Massage (20 mins)", category: "Massage", points: 12, durationMinutes: 20 },
    ]
  },
  {
    id: "pkg-4",
    number: 4,
    name: "Package 4 — 10 Luxury Beauty Services",
    shortName: "Package 4 (10 Services)",
    price: 180,
    type: "fixed",
    totalPoints: null,
    tag: "10-in-1 Complete Care",
    durationMinutes: 120,
    description: "Our signature 10-in-1 head-to-toe beauty rejuvenation package with comprehensive waxing, facial care and threading.",
    includedServices: [
      "Full Arms Waxing",
      "Full Legs Waxing",
      "Under Arms Waxing",
      "Full Face Cleanup",
      "Face Pack",
      "Face Massage",
      "Roots Touchup",
      "Eyebrow Threading",
      "Upper Lips Threading",
      "Forehead Threading"
    ]
  },
  {
    id: "pkg-5",
    number: 5,
    name: "Package 5 — Summer Blast Package",
    shortName: "Package 5 (Summer Blast)",
    price: 200,
    type: "fixed",
    totalPoints: null,
    tag: "Summer Hydration Special",
    durationMinutes: 120,
    description: "An invigorating summer pampering ritual featuring cooling mint hair spa, avocado nourishment, full waxing and classic mani-pedi.",
    includedServices: [
      "Mint Hair Spa",
      "Avocado Bubble Pack",
      "Full Hand Wax",
      "Avocado Glow Facial",
      "Full Leg Wax",
      "Underarm Wax",
      "Classic Manicure",
      "Classic Pedicure"
    ]
  },
  {
    id: "pkg-6",
    number: 6,
    name: "6th Package — 35 Points Royal Indulgence",
    shortName: "6th Package (250 AED · 35 Points)",
    price: 250,
    type: "points",
    totalPoints: 35,
    tag: "Choose 35 Points",
    durationMinutes: 150,
    description: "Ultimate flexibility: choose any combination of our luxury treatments totaling up to 35 points for 250 AED.",
    eligibleServices: [
      // Hair & Styling
      { id: "p6-haircut", name: "Professional Hair Cut", category: "Hair & Styling", points: 7, durationMinutes: 35 },
      { id: "p6-blowdry-nostyle", name: "Blow Dry without Style", category: "Hair & Styling", points: 7, durationMinutes: 30 },
      { id: "p6-hair-styling", name: "Hair Styling (Straight or Curls)", category: "Hair & Styling", points: 15, durationMinutes: 50 },

      // Hair Treatment
      { id: "p6-deep-conditioning", name: "Deep Conditioning Treatment Mask", category: "Hair Treatments", points: 6, durationMinutes: 35 },
      { id: "p6-summer-spa-mask", name: "Summer Special Hair Spa Mask", category: "Hair Treatments", points: 8, durationMinutes: 45 },
      { id: "p6-hair-collagen", name: "Hair Collagen Mask", category: "Hair Treatments", points: 7, durationMinutes: 40 },
      { id: "p6-hot-oil-collagen", name: "Hot Oil Collagen with Hair Serum", category: "Hair Treatments", points: 9, durationMinutes: 30 },

      // Hair Colour
      { id: "p6-global-colour", name: "Global Hair Colour", category: "Hair Colour", points: 12, durationMinutes: 120 },
      { id: "p6-ammonia-free-colour", name: "Ammonia Free Hair Colur", category: "Hair Colour", points: 12, durationMinutes: 120 },
      { id: "p6-roots-touchup", name: "Roots Touchup", category: "Hair Colour", points: 8, durationMinutes: 45 },
      { id: "p6-ammonia-free-roots", name: "Ammonia-Free Root Touchup", category: "Hair Colour", points: 10, durationMinutes: 50 },
      { id: "p6-henna-hair", name: "Henna Hair & Colour", category: "Hair Colour", points: 9, durationMinutes: 60 },

      // Manicure and Pedicure
      { id: "p6-spa-mani", name: "Spa Manicure", category: "Manicure & Pedicure", points: 8, durationMinutes: 40 },
      { id: "p6-spa-pedi", name: "Spa Pedicure", category: "Manicure & Pedicure", points: 8, durationMinutes: 45 },
      { id: "p6-gel-polish-hands", name: "Gel Polish (Hands)", category: "Manicure & Pedicure", points: 6, durationMinutes: 30 },
      { id: "p6-gel-polish-feet", name: "Gel Polish (Feet)", category: "Manicure & Pedicure", points: 6, durationMinutes: 30 },
      { id: "p6-gel-removal", name: "Gel Polish Removal", category: "Manicure & Pedicure", points: 5, durationMinutes: 20 },
      { id: "p6-nail-polish-removal", name: "Nail Polish Removal", category: "Manicure & Pedicure", points: 5, durationMinutes: 15 },

      // (Threading)
      { id: "p6-eyebrow-thread", name: "Eyebrows Threading", category: "Threading", points: 3, durationMinutes: 10 },
      { id: "p6-upperlip-thread", name: "Upper Lips Threading", category: "Threading", points: 2, durationMinutes: 10 },
      { id: "p6-chin-thread", name: "Chin Threading", category: "Threading", points: 8, durationMinutes: 15 },
      { id: "p6-eyebrow-tint", name: "Eyebrows (Colur/Tint)", category: "Threading", points: 5, durationMinutes: 20 },

      // Facials And Skin Treatments
      { id: "p6-face-bleach-reg", name: "Face Bleach (Regular)", category: "Facials & Skin Treatments", points: 5, durationMinutes: 25 },
      { id: "p6-milk-bleach", name: "Milk Bleach", category: "Facials & Skin Treatments", points: 6, durationMinutes: 25 },
      { id: "p6-whitening-facial", name: "Whitening Facial", category: "Facials & Skin Treatments", points: 10, durationMinutes: 60 },
      { id: "p6-allinone-glow", name: "All-in-One Glow Facial", category: "Facials & Skin Treatments", points: 8, durationMinutes: 50 },
      { id: "p6-summer-facial", name: "Summer Special Facial", category: "Facials & Skin Treatments", points: 9, durationMinutes: 55 },
      { id: "p6-collagen-special-facial", name: "Collagen Facial with Special Mask", category: "Facials & Skin Treatments", points: 15, durationMinutes: 70 },

      // (Waxing)
      { id: "p6-underarms-wax", name: "Under arms Waxing", category: "Waxing", points: 3, durationMinutes: 15 },
      { id: "p6-full-arms-wax", name: "Full Arms Waxing", category: "Waxing", points: 5, durationMinutes: 30 },
      { id: "p6-full-legs-wax", name: "Full Legs Waxing", category: "Waxing", points: 5, durationMinutes: 35 },
      { id: "p6-full-back-wax", name: "Full Back Waxing", category: "Waxing", points: 5, durationMinutes: 25 },
      { id: "p6-full-stomach-wax", name: "Full Stomach Waxing", category: "Waxing", points: 5, durationMinutes: 25 },
      { id: "p6-full-bikini-wax", name: "Full Bikini Waxing", category: "Waxing", points: 7, durationMinutes: 35 },
      { id: "p6-full-face-wax", name: "Full Face Waxing", category: "Waxing", points: 7, durationMinutes: 25 },

      // (Massage 20 Mints)
      { id: "p6-foot-massage", name: "Foot Massage (20 mins)", category: "Massage", points: 8, durationMinutes: 20 },
      { id: "p6-head-massage", name: "Head Massage (20 mins)", category: "Massage", points: 8, durationMinutes: 20 },
      { id: "p6-head-neck-shoulder", name: "Head Neck and Shoulder (20 mins)", category: "Massage", points: 10, durationMinutes: 20 },
      { id: "p6-back-massage", name: "Back Massage (20 mins)", category: "Massage", points: 9, durationMinutes: 20 },
      { id: "p6-hand-legs-massage", name: "Hand and Legs Massage (20 mins)", category: "Massage", points: 15, durationMinutes: 20 },
    ]
  },
  {
    id: "pkg-7",
    number: 7,
    name: "Package 7 — Waxing Services Package",
    shortName: "Package 7 (Full Wax)",
    price: 180,
    type: "fixed",
    totalPoints: null,
    tag: "Complete Silk Waxing",
    durationMinutes: 90,
    description: "Hygienic, gentle peel-off full waxing ritual leaving skin impeccably smooth and exfoliated.",
    includedServices: [
      "Full Body Waxing",
      "Full Face Waxing",
      "Full Bikini Waxing"
    ]
  },
  {
    id: "pkg-8",
    number: 8,
    name: "Package 8 — Premium Hair Services Package",
    shortName: "Package 8 (Hair Color & Highlights)",
    price: 369,
    type: "fixed",
    totalPoints: null,
    tag: "European Hair Couture",
    durationMinutes: 180,
    description: "Complete European hair transformation including all-over global rich color and dimensional master highlights.",
    includedServices: [
      "Global Hair Color",
      "Global Highlights"
    ]
  },
  {
    id: "pkg-9",
    number: 9,
    name: "Package 9 — Acrylic Nail Extensions with Gel Polish",
    shortName: "Package 9 (Acrylic Nails)",
    price: 280,
    type: "fixed",
    totalPoints: null,
    tag: "High-Fashion Nails",
    durationMinutes: 90,
    description: "Master nail sculpting featuring a full set of acrylic extensions, mirror-shine gel polish, and complimentary bespoke nail art.",
    includedServices: [
      "Full acrylic nail extension set",
      "Gel polish finish",
      "One complimentary nail art design on one finger"
    ]
  },
  {
    id: "pkg-10",
    number: 10,
    name: "Package 10 — Gel Pack",
    shortName: "Package 10 (Gel Mani-Pedi & Foot Spa)",
    price: 180,
    type: "fixed",
    totalPoints: null,
    tag: "Deluxe Gel Duo",
    durationMinutes: 90,
    description: "Long-lasting luxury hand and foot rejuvenation with durable gel polish and relaxing pressure-point foot massage.",
    includedServices: [
      "Spa Manicure with Gel Polish",
      "Spa Pedicure with Gel Polish",
      "Foot Massage"
    ]
  },
  {
    id: "pkg-11",
    number: 11,
    name: "Package 11 — 24K Gold Facial",
    shortName: "Package 11 (24K Gold Facial)",
    price: 180,
    type: "fixed",
    totalPoints: null,
    tag: "Pure 24K Dermal Glow",
    durationMinutes: 60,
    description: "Opulent anti-aging facial ritual utilizing 24-karat gold leaf, hyaluronic serum infusion, ultrasonic cleansing and lifting lymphatic massage.",
    includedServices: [
      "24K Gold Facial Treatment",
      "Deep Ultrasonic Pore Purification",
      "24K Gold Foil & Serum Infusion",
      "Lymphatic Contour Lifting Massage"
    ]
  }
];

/**
 * INDIVIDUAL SERVICES CATALOG
 * Organized across the 9 client categories.
 * All prices strictly in AED (or available through Points Packages).
 */
export const SERVICES = [
  // 1. Hair & Styling
  {
    id: "h1",
    category: "Hair & Styling",
    name: "Haircut & Styling",
    shortDesc: "Bespoke cut, layers, wash and editorial blow-dry finish",
    fullDesc: "A personalized aesthetic consultation tailored to your facial geometry, followed by precision cutting, botanical cleansing, lipid nourishment, and our signature salon blow-dry finish.",
    price: 120,
    durationMinutes: 45,
    points: 4,
    image: "/images/services/haircut-styling.jpg",
    featured: true,
    tag: "Salon Favorite"
  },
  {
    id: "h-wash",
    category: "Hair & Styling",
    name: "Hair Wash & Blast Dry",
    shortDesc: "Botanical scalp wash, conditioning and quick blow-dry",
    fullDesc: "Invigorating scalp wash with sulfate-free European shampoo, hydrating rinse, and professional blast blow-dry for clean volume.",
    price: 35,
    durationMinutes: 25,
    points: 2,
    image: "/images/services/keratin-spa.jpg",
    featured: false,
    tag: "Express"
  },

  // 2. Hair Treatments
  {
    id: "h3",
    category: "Hair Treatments",
    name: "Keratin / Hair Spa",
    shortDesc: "Deep protein repair for smooth, radiant and frizz-free hair",
    fullDesc: "Intensive keratin protein infusion and steam hydration therapy designed to eliminate frizz, restore structural lipid balance, and impart mirror-like silkiness.",
    price: 150,
    durationMinutes: 90,
    points: 8,
    image: "/images/services/Keratin and Hair Spa Treatments.png",
    featured: true,
    tag: "Restorative"
  },
  {
    id: "h-mint-spa",
    category: "Hair Treatments",
    name: "Mint Hair Spa",
    shortDesc: "Cooling scalp therapy and deep hair fiber conditioning",
    fullDesc: "Refreshing organic peppermint and tea-tree infusion that soothes the scalp, stimulates microcirculation, and delivers deep moisture to sun-stressed locks.",
    price: 80,
    durationMinutes: 50,
    points: 5,
    image: "/images/services/Luxurious Mint Hair Spa Treatment.jpg",
    featured: false,
    tag: "Summer Hydration"
  },

  // 3. Hair Colour
  {
    id: "h2",
    category: "Hair Colour",
    name: "Global Hair Color & Highlights",
    shortDesc: "Multidimensional European color and gloss highlights",
    fullDesc: "Luxury multi-dimensional hair coloring utilizing ammonia-free European pigments. Includes toning glaze, fiber-protecting bond builder, and gloss rinse for radiant reflection (Package 8).",
    price: 369,
    durationMinutes: 180,
    image: "/images/services/Salon Balayage in Progress.jpg",
    featured: true,
    tag: "Package 8 Feature"
  },
  {
    id: "h-roots",
    category: "Hair Colour",
    name: "Roots Touchup",
    shortDesc: "Seamless grey coverage and root refresh",
    fullDesc: "Precision color application to regrowth areas, perfectly color-matched to your existing tone with scalp-protective barrier oil.",
    price: 70,
    durationMinutes: 45,
    points: 4,
    image: "/images/services/Precision Root Touch-Up in the Salon.jpg",
    featured: false,
    tag: "Color Refresh"
  },

  // 4. Facials & Skin Treatments
  {
    id: "s-gold-24k",
    category: "Facials & Skin Treatments",
    name: "24K Gold Facial",
    shortDesc: "Opulent anti-aging glow ritual with 24K gold foil",
    fullDesc: "High-performance dermal brightening and firming ritual using pure 24-karat gold sheets, collagen serum, and acupressure lifting massage for camera-ready luminescence.",
    price: 180,
    durationMinutes: 60,
    points: 8,
    image: "/images/services/whitening-facial.jpg",
    featured: true,
    tag: "Package 11 Signature"
  },
  {
    id: "s1",
    category: "Facials & Skin Treatments",
    name: "Avocado Glow Facial",
    shortDesc: "Hydrating deep cleanse, massage and antioxidant mask",
    fullDesc: "A multi-stage revitalizing facial comprising enzymatic double cleansing, ultrasonic pore purification, acupressure lymphatic drainage, and antioxidant avocado collagen hydro-jelly mask.",
    price: 90,
    durationMinutes: 50,
    points: 5,
    image: "/images/services/glow-facial.jpg",
    featured: true,
    tag: "Client Favorite"
  },
  {
    id: "s-cleanup",
    category: "Facials & Skin Treatments",
    name: "Full Face Cleanup",
    shortDesc: "Deep pore purification, steam, scrub and soothing pack",
    fullDesc: "Targeted purification eliminating blackheads and impurities through gentle steam, gentle extraction, botanical scrub, and pore-minimizing pack.",
    price: 60,
    durationMinutes: 30,
    points: 3,
    image: "/images/services/Relaxing Facial Spa Treatment.jpg",
    featured: false,
    tag: "Essential Glow"
  },
  {
    id: "s2",
    category: "Facials & Skin Treatments",
    name: "Whitening Glow Facial",
    shortDesc: "Brightening treatment for even tone and radiant reflection",
    fullDesc: "High-performance dermal brightening therapy utilizing stabilized Vitamin C, botanical niacinamide complexes, and mild lactic exfoliation to reduce hyperpigmentation.",
    price: 120,
    durationMinutes: 60,
    points: 6,
    image: "/images/services/Relaxing Facial Mask Treatment.jpg",
    featured: false,
    tag: "Illuminating"
  },

  // 5. Threading
  {
    id: "th-brow",
    category: "Threading",
    name: "Eyebrow Threading",
    shortDesc: "Precise brow mapping and arch definition",
    fullDesc: "Artisanal threading technique providing razor-sharp brow mapping, arch definition, and gentle facial hair removal without pulling or irritating sensitive skin.",
    price: 15,
    durationMinutes: 10,
    points: 1,
    image: "/images/services/Close-Up Eyebrow Threading in a Warm Salon.jpg",
    featured: false,
    tag: "Precision"
  },
  {
    id: "w2",
    category: "Threading",
    name: "Full Face Threading",
    shortDesc: "Forehead, eyebrows, upper lip, chin and cheeks",
    fullDesc: "Comprehensive gentle facial threading removing fine peach fuzz and shaping brows, finished with soothing organic aloe vera gel.",
    price: 40,
    durationMinutes: 25,
    points: 3,
    image: "/images/services/Relaxing Full-Face Threading Treatment.jpg",
    featured: false,
    tag: "Express"
  },

  // 6. Waxing
  // {
  //   id: "w-pkg7",
  //   category: "Waxing",
  //   name: "Full Body, Face ",
  //   shortDesc: "Complete all-over silky smooth peel-off waxing",
  //   fullDesc: "Ultra-hygienic full body waxing ritual combining full body, full face, and full bikini waxing with hypoallergenic low-temperature peel-off wax (Package 7).",
  //   price: 180,
  //   durationMinutes: 90,
  //   image: "/images/services/full-wax.jpg",
  //   featured: true,
  //   tag: "Package 7 Feature"
  // },
  {
    id: "w1",
    category: "Waxing",
    name: "Full Arms & Legs Waxing",
    shortDesc: "Gentle, hygienic waxing with calming chamomile",
    fullDesc: "Ultra-hygienic waxing using low-temperature hypoallergenic peel-off wax infused with chamomile and aloe vera to ensure minimal skin sensitivity and velvety smooth results.",
    price: 75,
    durationMinutes: 45,
    points: 7,
    image: "/images/services/Professional Spa Waxing Treatment.jpg",
    featured: false,
    tag: "Silky Smooth"
  },

  // 7. Manicure & Pedicure
  {
    id: "n-acrylic",
    category: "Manicure & Pedicure",
    name: "Acrylic Nail Extensions with Gel Polish",
    shortDesc: "Full set acrylics, mirror gel polish and nail art design",
    fullDesc: "Sculptured acrylic nail enhancements crafted to your desired length and shape, finished with durable gel color and one complimentary nail art accent (Package 9).",
    price: 280,
    durationMinutes: 90,
    image: "/images/services/manicure.jpg",
    featured: true,
    tag: "Package 9 Feature"
  },
  {
    id: "n-gel-duo",
    category: "Manicure & Pedicure",
    name: "Spa Manicure & Pedicure with Gel Polish",
    shortDesc: "Complete deluxe mani-pedi duo with high-gloss gel polish",
    fullDesc: "Deluxe hand and foot ritual including cuticle care, exfoliation scrub, high-shine gel polish and soothing foot massage (Package 10).",
    price: 180,
    durationMinutes: 90,
    image: "/images/services/Luxury Spa Manicure and Pedicure.jpg",
    featured: true,
    tag: "Package 10 Feature"
  },
  {
    id: "n1",
    category: "Manicure & Pedicure",
    name: "Classic Manicure",
    shortDesc: "Shape, cuticle therapy and polish",
    fullDesc: "Deluxe hand rejuvenation including organic botanical soak, precision nail contouring, cuticle conditioning, and nourishing oil massage.",
    price: 45,
    durationMinutes: 35,
    points: 3,
    image: "/images/services/Spa Manicure with Soft Pink Nails.jpg",
    featured: false,
    tag: "Classic Care"
  },
  {
    id: "n2",
    category: "Manicure & Pedicure",
    name: "Classic Pedicure",
    shortDesc: "Relaxing soak, volcanic pumice scrub and polish",
    fullDesc: "Therapeutic foot therapy beginning with lavender bath salts, exfoliating volcanic pumice scrub, targeted heel treatment, and reflexology massage.",
    price: 55,
    durationMinutes: 40,
    points: 3,
    image: "/images/services/Luxurious Spa Pedicure Treatment.jpg",
    featured: false,
    tag: "Foot Wellness"
  },

  // 8. Massage
  {
    id: "msg-foot",
    category: "Massage",
    name: "Therapeutic Foot Massage",
    shortDesc: "Relieving pressure-point foot reflexology",
    fullDesc: "Therapeutic foot massage utilizing warm aromatic oils, relieving tension and fatigue from the feet and calves.",
    price: 40,
    durationMinutes: 20,
    points: 2,
    image: "/images/services/Candlelit Foot Massage Retreat.jpg",
    featured: false,
    tag: "Relaxing"
  },
  // {
  //   id: "msg-body",
  //   category: "Massage",
  //   name: "Full Body Relaxation Massage",
  //   shortDesc: "Swedish / Aromatherapy tension release",
  //   fullDesc: "Holistic full body tension release utilizing warm essential oils, gentle flowing strokes, and targeted acupressure to dissolve stress.",
  //   price: 140,
  //   durationMinutes: 60,
  //   points: 8,
  //   image: "/images/services/glow-facial.jpg",
  //   featured: false,
  //   tag: "Pure Bliss"
  // },

  // 9. Party Makeup
  {
    id: "m2",
    category: "Party Makeup",
    name: "Couture Party Makeup — Luminous Velvet Glam",
    shortDesc: "HD couture party look with advance consultation",
    fullDesc: "The pinnacle of party opulence. High-definition flawless complexion artistry, intricate eye sculpting, dupatta and jewelry placement assistance, plus an advance consultation session.",
    price: 350,
    durationMinutes: 180,
    image: "/images/services/Bridal Lipstick Application in a Glamorous Studio.jpg",
    featured: true,
    tag: "Haute Couture"
  },
  {
    id: "m1",
    category: "Party Makeup",
    name: "Signature Party Makeup",
    shortDesc: "Soft glam or full glam with mink-effect lashes",
    fullDesc: "Luminous, photographic event makeup featuring custom undertone matching, waterproof contouring, mink-effect lash application, and 12-hour makeup lock-in setting.",
    price: 250,
    durationMinutes: 75,
    image: "/images/gallery/gal-bridal-2.jpg",
    featured: true,
    tag: "Evening Glam"
  }
];