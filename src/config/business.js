/**
 * Centralized Business Configuration for S&M Home Beauty Salon
 * Operating in Dubai & Sharjah, UAE
 */

export const BUSINESS_CONFIG = {
  name: "S&M Home Beauty Salon",
  legalName: "S&M Home Beauty Salon Concierge & Studio",
  tagline: "Hair, skin, bridal and nail artistry in a world of quiet luxury",
  subTagline: "At our boutique studio or in the sanctuary of your home across Dubai & Sharjah.",
  
  // Currency & Fees (AED with Free Home Service across Dubai & Sharjah)
  currency: "AED",
  currencySymbol: "AED",
  homeServiceFee: 0, // Free Home Service in Dubai & Sharjah

  // Working Hours & Arrival Time Slots (Daily 9:00 AM – 8:00 PM)
  hours: {
    display: "Daily 9:00 AM – 8:00 PM",
    openHour: 9,
    closeHour: 20,
    // 5 Official Arrival Slots requested by salon
    arrivalSlots: [
      { id: "slot-9am", label: "9:00 AM", value: "9:00 AM" },
      { id: "slot-12pm", label: "12:00 PM", value: "12:00 PM" },
      { id: "slot-3pm", label: "3:00 PM", value: "3:00 PM" },
      { id: "slot-530pm", label: "5:30 PM", value: "5:30 PM" },
      { id: "slot-730pm", label: "7:30 PM", value: "7:30 PM" },
    ],
    slotHours: ["9:00 AM", "12:00 PM", "3:00 PM", "5:30 PM", "7:30 PM"],
  },

  // Contact Details (Yahan se aap WhatsApp number aur display change kar saktay hain)
  contact: {
    whatsappNumber: "971553939683", // UAE WhatsApp country code +971
    whatsappDisplay: "+971 55 393 9683", // Website par show honay wala formatted number
    phoneDisplay: "+971 55 393 9683",
    email: "info@smhomebeautysalon.com",
    instagram: "@sm.homebeauty",
    instagramUrl: "https://instagram.com/sm.homebeauty",
    address: {
      line1: "Luxury Salon Studio",
      city: "Dubai & Sharjah",
      country: "United Arab Emirates",
      display: "Dubai & Sharjah, United Arab Emirates (Studio Appointments & Free Home Beauty Concierge)",
    },
    serviceLocations: "Dubai & Sharjah, UAE",
    homeServiceNote: "Free Home Service across Dubai & Sharjah"
  },

  // Metrics / Social Proof
  stats: [
    { label: "Happy Clients", value: "500+" },
    { label: "Client Rating", value: "4.9★" },
    { label: "Curated Packages", value: "11" },
    { label: "Service Mode", value: "Studio & Free Home" }
  ]
};
