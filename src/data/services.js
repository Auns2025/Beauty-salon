export const SERVICE_CATEGORIES = ["All", "Hair", "Skin", "Makeup", "Nails", "Waxing"];

export const STYLISTS = [
  { id: "any", name: "Any Available", role: "Next Available Master Artist", note: "Recommended for earliest availability" },
  { id: "sana", name: "Sana", role: "Senior Stylist", note: "Specialist in precision cutting, balayage & hair transformations" },
  { id: "hira", name: "Hira", role: "Makeup Artist", note: "Specialist in bridal couture makeup & signature red carpet glam" },
  { id: "mehwish", name: "Mehwish", role: "Skin & Nails Expert", note: "Specialist in dermatological glow facials & Japanese nail art" },
];

export const SERVICES = [
  {
    id: "h1",
    category: "Hair",
    name: "Haircut & Styling",
    shortDesc: "Trim, layers and blow-dry finish",
    fullDesc: "A bespoke hair consultation tailored to your facial geometry, followed by precision cutting, botanical shampoo, nourishing treatment, and our signature editorial blow-dry finish.",
    price: 1500,
    durationMinutes: 60,
    image: "/images/services/haircut-styling.jpg",
    featured: true,
    tag: "Studio Favorite"
  },
  {
    id: "h2",
    category: "Hair",
    name: "Hair Colour",
    shortDesc: "Global colour, highlights or balayage",
    fullDesc: "Luxury multi-dimensional hair coloring utilizing ammonia-free European pigments. Includes toning glaze, fiber-protecting bond builder, and gloss rinse for radiant reflection.",
    price: 6000,
    durationMinutes: 150,
    image: "/images/services/hair-colour.jpg",
    featured: true,
    tag: "Signature Service"
  },
  {
    id: "h3",
    category: "Hair",
    name: "Keratin / Hair Spa",
    shortDesc: "Deep repair for smooth, shiny hair",
    fullDesc: "Intensive keratin protein infusion and steam hydration therapy designed to eliminate frizz, restore structural lipid balance, and impart mirror-like silkiness.",
    price: 5000,
    durationMinutes: 90,
    image: "/images/services/keratin-spa.jpg",
    featured: false,
    tag: "Restorative"
  },
  {
    id: "s1",
    category: "Skin",
    name: "Glow Facial",
    shortDesc: "Deep cleanse, massage and mask",
    fullDesc: "A multi-stage revitalizing facial comprising enzymatic double cleansing, ultrasonic pore purification, acupressure lymphatic drainage, and antioxidant collagen hydro-jelly mask.",
    price: 3000,
    durationMinutes: 60,
    image: "/images/services/glow-facial.jpg",
    featured: true,
    tag: "Client Favorite"
  },
  {
    id: "s2",
    category: "Skin",
    name: "Whitening Facial",
    shortDesc: "Brightening treatment for even tone",
    fullDesc: "High-performance dermal brightening therapy utilizing stabilized Vitamin C, botanical niacinamide complexes, and mild lactic exfoliation to reduce hyperpigmentation and illuminate tone.",
    price: 4500,
    durationMinutes: 75,
    image: "/images/services/whitening-facial.jpg",
    featured: false,
    tag: "Illuminating"
  },
  {
    id: "m1",
    category: "Makeup",
    name: "Party Makeup",
    shortDesc: "Soft glam or full glam with lashes",
    fullDesc: "Luminous, photographic event makeup featuring custom undertone matching, waterproof contouring, mink-effect lash application, and 12-hour makeup lock-in setting.",
    price: 5000,
    durationMinutes: 75,
    image: "/images/services/party-makeup.jpg",
    featured: true,
    tag: "Evening Glam"
  },
  {
    id: "m2",
    category: "Makeup",
    name: "Bridal Makeup",
    shortDesc: "HD bridal look with trial consult",
    fullDesc: "The pinnacle of bridal opulence. High-definition flawless complexion artistry, intricate eye sculpting, dupatta and jewelry placement assistance, plus an advance consultation session.",
    price: 25000,
    durationMinutes: 180,
    image: "/images/services/bridal-makeup.jpg",
    featured: true,
    tag: "Haute Couture"
  },
  {
    id: "n1",
    category: "Nails",
    name: "Manicure",
    shortDesc: "Shape, cuticle care and polish",
    fullDesc: "Deluxe hand rejuvenation including organic botanical soak, precision nail contouring, cuticle conditioning, nourishing oil massage, and chip-resistant gel polish finish.",
    price: 1500,
    durationMinutes: 45,
    image: "/images/services/manicure.jpg",
    featured: false,
    tag: "Classic Care"
  },
  {
    id: "n2",
    category: "Nails",
    name: "Pedicure",
    shortDesc: "Relaxing soak, scrub and polish",
    fullDesc: "Therapeutic foot therapy beginning with lavender bath salts, exfoliating volcanic pumice scrub, targeted heel treatment, reflexology massage, and pristine polish.",
    price: 2000,
    durationMinutes: 60,
    image: "/images/services/pedicure.jpg",
    featured: false,
    tag: "Wellness"
  },
  {
    id: "w1",
    category: "Waxing",
    name: "Full Arms / Legs Wax",
    shortDesc: "Gentle, hygienic waxing",
    fullDesc: "Ultra-hygienic waxing using low-temperature hypoallergenic peel-off wax infused with chamomile and aloe vera to ensure minimal skin sensitivity and velvety smooth results.",
    price: 1800,
    durationMinutes: 45,
    image: "/images/services/full-wax.jpg",
    featured: false,
    tag: "Essential"
  },
  {
    id: "w2",
    category: "Waxing",
    name: "Threading",
    shortDesc: "Eyebrows and face",
    fullDesc: "Artisanal threading technique providing razor-sharp brow mapping, arch definition, and gentle facial hair removal without pulling or irritating sensitive skin.",
    price: 400,
    durationMinutes: 20,
    image: "/images/services/threading.jpg",
    featured: false,
    tag: "Express"
  }
];
