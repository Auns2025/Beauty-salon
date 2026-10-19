/**
 * Centralized Business Configuration for SM Home Beauty
 * 
 * Fields marked with `requiresVerification: true` are client-specific items
 * from the prototype that must be replaced by the business owner before production launch.
 */

export const BUSINESS_CONFIG = {
  name: "SM Home Beauty",
  legalName: "SM Home Beauty Studio & Concierge",
  tagline: "Hair, skin, bridal and nail artistry in a world of quiet luxury",
  subTagline: "At our boutique studio or in the sanctuary of your home.",
  
  // Currency & Fees (Strict prototype preservation)
  currency: "PKR",
  currencySymbol: "PKR",
  homeServiceFee: 500,

  // Working Hours (10:00 AM – 7:00 PM)
  hours: {
    display: "Daily 10:00 AM – 7:00 PM",
    openHour: 10,
    closeHour: 19,
    slotHours: [10, 11, 12, 13, 14, 15, 16, 17, 18], // 10 AM to 6 PM starts
  },

  // Contact Details
  contact: {
    whatsappNumber: "923000000000", // Country code 92 + number
    whatsappDisplay: "+92 300 0000000",
    phoneDisplay: "+92 300 0000000",
    email: "concierge@smhomebeauty.com",
    instagram: "@sm.homebeauty",
    instagramUrl: "https://instagram.com/sm.homebeauty",
    address: {
      line1: "Boutique Studio Suite 4B, Gulberg / DHA",
      city: "Lahore",
      country: "Pakistan",
      display: "Suite 4B, Gulberg / DHA, Lahore (Studio appointments & Home visits across Lahore)",
    },
    // Verification flags required by prompt
    requiresVerification: {
      whatsappNumber: true,
      address: true,
      phoneDisplay: true,
      email: true,
    },
    verificationNotes: [
      "Replace '923000000000' with the verified business WhatsApp number for direct booking dispatch.",
      "Update salon physical address with exact studio street address and building coordinates.",
      "Confirm operating salon phone number and contact email."
    ]
  },

  // Metrics / Social Proof from original prototype
  stats: [
    { label: "Happy Clients", value: "500+" },
    { label: "Client Rating", value: "4.9★" },
    { label: "Curated Services", value: "11+" },
    { label: "Service Mode", value: "Studio & Home" }
  ]
};
