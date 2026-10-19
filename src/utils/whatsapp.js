import { BUSINESS_CONFIG } from '../config/business';
import { formatPKR } from './pricing';

/**
 * Builds the text message for WhatsApp dispatch
 * Preserves the exact prototype structure while ensuring luxury polish
 */
export function buildWhatsAppMessage(booking) {
  if (!booking) return '';

  const servicesText = Array.isArray(booking.services)
    ? booking.services.map(s => (typeof s === 'string' ? s : s.name)).join(', ')
    : '';

  const locationText = booking.location === 'At Home'
    ? `At Home${booking.address ? ` (${booking.address})` : ''}`
    : 'Salon Studio';

  const lines = [
    `✦ *APPOINTMENT REQUEST — ${booking.id}* ✦`,
    `Hello ${BUSINESS_CONFIG.name}, I would like to request an appointment.`,
    '',
    `*Booking ID:* ${booking.id}`,
    `*Name:* ${booking.name}`,
    `*Contact:* ${booking.phone}`,
    `*Services:* ${servicesText}`,
    `*Location:* ${locationText}`,
    `*Stylist:* ${booking.stylist || 'Any Available'}`,
    `*Date & Time:* ${booking.date} at ${booking.time}`,
    `*Estimated Total:* ${formatPKR(booking.total)}`,
  ];

  if (booking.notes && booking.notes.trim()) {
    lines.push(`*Notes / Special Requests:* ${booking.notes.trim()}`);
  }

  lines.push('');
  lines.push('Please confirm stylist availability for this slot. Thank you!');

  return lines.join('\n');
}

/**
 * Generate direct WhatsApp Web / App link
 */
export function createWhatsAppLink(booking) {
  const text = buildWhatsAppMessage(booking);
  const cleanPhone = BUSINESS_CONFIG.contact.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate general concierge inquiry link
 */
export function createGeneralInquiryLink(subject = "General Inquiry") {
  const text = `Hello ${BUSINESS_CONFIG.name}, I would like to inquire regarding: ${subject}`;
  const cleanPhone = BUSINESS_CONFIG.contact.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
