import { BUSINESS_CONFIG } from '../config/business';
import { formatAED } from './pricing';

/**
 * Builds the text message for WhatsApp dispatch
 * Preserves the exact prototype structure while including packages & points
 */
export function buildWhatsAppMessage(booking) {
  if (!booking) return '';

  let servicesText = '';
  if (Array.isArray(booking.services) && booking.services.length > 0) {
    servicesText = booking.services
      .map(s => {
        if (typeof s === 'string') return s;
        if (s.isPackage) {
          if (s.isPointsPackage) {
            const subItems = Array.isArray(s.selectedPackageServices) && s.selectedPackageServices.length > 0
              ? ` (${s.selectedPackageServices.map(i => `${i.name} [${i.points} pts]`).join(', ')} | Total Points: ${s.usedPoints || 0}/${s.totalPoints})`
              : ` (${s.totalPoints} Points Allowance)`;
            return `✦ ${s.name} - ${formatAED(s.price)}${subItems}`;
          } else {
            const included = Array.isArray(s.includedServices) && s.includedServices.length > 0
              ? ` [Includes: ${s.includedServices.join(', ')}]`
              : '';
            return `✦ ${s.name} - ${formatAED(s.price)}${included}`;
          }
        }
        return s.name;
      })
      .join('\n');
  }

  const locationText = booking.location === 'At Home'
    ? `At Home — Free Home Service across Dubai & Sharjah${booking.address ? `\n*Address:* ${booking.address}` : ''}`
    : 'Salon Studio Appointment';

  const lines = [
    `✦ *APPOINTMENT REQUEST — ${booking.id}* ✦`,
    `Hello ${BUSINESS_CONFIG.name}, I would like to book an appointment.`,
    '',
    `*Booking ID:* ${booking.id}`,
    `*Name:* ${booking.name}`,
    `*Contact:* ${booking.phone}`,
    `*Selected Services / Packages:*\n${servicesText || 'None selected'}`,
    '',
    `*Location:* ${locationText}`,
    `*Stylist / Artist:* ${booking.stylist || 'Any Available'}`,
    `*Date & Time:* ${booking.date} at ${booking.time}`,
    `*Total Investment:* ${formatAED(booking.total)}`,
  ];

  if (booking.notes && booking.notes.trim()) {
    lines.push(`*Notes / Special Requests:* ${booking.notes.trim()}`);
  }

  lines.push('');
  lines.push('Please confirm stylist availability for this slot. Thank you!');

  return lines.join('\n');
}

/**
 * Normalizes phone numbers to standard WhatsApp wa.me international format
 * Handles local numbers (e.g., 03132876774 -> 923132876774) and international numbers
 */
export function normalizeWhatsAppNumber(raw) {
  if (!raw) return '971553939683';
  let clean = String(raw).replace(/\D/g, '');
  // Pakistani local mobile format (11 digits starting with 03: 03132876774 -> 923132876774)
  if (clean.startsWith('03') && clean.length === 11) {
    clean = '92' + clean.slice(1);
  } else if (clean.startsWith('00')) {
    clean = clean.slice(2);
  }
  return clean;
}

/**
 * Generate direct WhatsApp Web / App link
 */
export function createWhatsAppLink(booking) {
  const text = buildWhatsAppMessage(booking);
  const cleanPhone = normalizeWhatsAppNumber(BUSINESS_CONFIG.contact.whatsappNumber);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate general concierge inquiry link
 */
export function createGeneralInquiryLink(subject = "General Inquiry") {
  const text = `Hello ${BUSINESS_CONFIG.name}, I would like to inquire regarding: ${subject}`;
  const cleanPhone = normalizeWhatsAppNumber(BUSINESS_CONFIG.contact.whatsappNumber);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
