import { BUSINESS_CONFIG } from '../config/business';

/**
 * Format number as PKR currency
 * @param {number} amount
 * @returns {string} e.g. "PKR 1,500"
 */
export function formatPKR(amount = 0) {
  const num = typeof amount === 'number' ? amount : Number(amount) || 0;
  return `PKR ${num.toLocaleString('en-US')}`;
}

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
 * Convert 24-hour hour integer to readable 12-hour format
 * @param {number} hour (e.g. 10, 14)
 * @returns {string} e.g. "10:00 AM", "2:00 PM"
 */
export function formatTimeSlot(hour) {
  const h = Number(hour);
  if (isNaN(h)) return '';
  const period = h >= 12 ? 'PM' : 'AM';
  const displayHour = h > 12 ? h - 12 : (h === 0 ? 12 : h);
  return `${displayHour}:00 ${period}`;
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
export function calculateTotals(selectedServices = [], serviceLocation = 'Salon') {
  const servicesList = Array.isArray(selectedServices) ? selectedServices : [];
  const subtotal = servicesList.reduce((acc, s) => acc + (Number(s.price) || 0), 0);
  const totalMinutes = servicesList.reduce((acc, s) => acc + (Number(s.durationMinutes) || 0), 0);
  
  const isHome = serviceLocation === 'At Home';
  const homeFee = (isHome && servicesList.length > 0) ? BUSINESS_CONFIG.homeServiceFee : 0;
  const grandTotal = subtotal + homeFee;

  return {
    itemCount: servicesList.length,
    subtotal,
    homeFee,
    grandTotal,
    totalMinutes,
    formattedSubtotal: formatPKR(subtotal),
    formattedHomeFee: formatPKR(homeFee),
    formattedGrandTotal: formatPKR(grandTotal),
    formattedDuration: formatDuration(totalMinutes)
  };
}
