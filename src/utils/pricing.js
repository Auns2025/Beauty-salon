import { BUSINESS_CONFIG } from '../config/business';

/**
 * Format number as AED currency (United Arab Emirates Dirham)
 * @param {number} amount
 * @returns {string} e.g. "AED 180"
 */
export function formatAED(amount = 0) {
  const num = typeof amount === 'number' ? amount : Number(amount) || 0;
  return `AED ${num.toLocaleString('en-US')}`;
}

// Backward compatibility alias: ensures any legacy call prints AED
export const formatPKR = formatAED;

/**
 * Format minutes into friendly string
 * @param {number} minutes
 * @returns {string} e.g. "2 hrs 30 mins" or "45 mins"
 */
export function formatDuration(minutes = 0) {
  if (!minutes || minutes <= 0) return '0 mins';
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hrs > 0 && mins > 0) {
    return `${hrs} hr${hrs > 1 ? 's' : ''} ${mins} min${mins > 1 ? 's' : ''}`;
  }
  if (hrs > 0) {
    return `${hrs} hr${hrs > 1 ? 's' : ''}`;
  }
  return `${mins} min${mins > 1 ? 's' : ''}`;
}

/**
 * Convert hour integer or time string to readable 12-hour format
 * @param {number|string} hour (e.g. 9, 17.5, "5:30 PM")
 * @returns {string} e.g. "9:00 AM", "5:30 PM"
 */
export function formatTimeSlot(hour) {
  if (!hour && hour !== 0) return '';
  if (typeof hour === 'string' && (hour.includes('AM') || hour.includes('PM'))) {
    return hour;
  }
  const h = Number(hour);
  if (isNaN(h)) return String(hour);
  const minutes = Math.round((h % 1) * 60);
  const hourInt = Math.floor(h);
  const period = hourInt >= 12 ? 'PM' : 'AM';
  const displayHour = hourInt > 12 ? hourInt - 12 : (hourInt === 0 ? 12 : hourInt);
  const displayMinutes = minutes > 0 ? `:${String(minutes).padStart(2, '0')}` : ':00';
  return `${displayHour}${displayMinutes} ${period}`;
}

/**
 * Get today's ISO date string (YYYY-MM-DD) for min date attribute
 */
export function getMinDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Generate a unique booking reference code (e.g. "SM4821")
 */
export function generateBookingRef() {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `SM${randomNum}`;
}

/**
 * Calculate financial totals and time estimations
 */
export function calculateTotals(selectedItems = [], serviceLocation = 'Salon') {
  const itemsList = Array.isArray(selectedItems) ? selectedItems : [];
  const subtotal = itemsList.reduce((acc, s) => acc + (Number(s.price) || 0), 0);
  const totalMinutes = itemsList.reduce((acc, s) => acc + (Number(s.durationMinutes) || 0), 0);
  
  const isHome = serviceLocation === 'At Home';
  const homeFee = (isHome && itemsList.length > 0) ? (BUSINESS_CONFIG.homeServiceFee || 0) : 0;
  const grandTotal = subtotal + homeFee;

  return {
    itemCount: itemsList.length,
    subtotal,
    homeFee,
    grandTotal,
    totalMinutes,
    formattedSubtotal: formatAED(subtotal),
    formattedHomeFee: homeFee === 0 ? 'Free (Dubai & Sharjah)' : formatAED(homeFee),
    formattedGrandTotal: formatAED(grandTotal),
    formattedDuration: formatDuration(totalMinutes)
  };
}
