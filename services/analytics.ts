/**
 * Utility functions for Google Analytics 4 (GA4) custom event tracking.
 * Measurement ID: G-XKSBFW851Q
 */

export const getPageLocation = (): string => {
  return typeof window !== 'undefined' ? window.location.href : '';
};

export const getPageTitle = (): string => {
  return typeof document !== 'undefined' ? document.title : '';
};

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

/**
 * Tracks WhatsApp link clicks (wa.me / api.whatsapp.com)
 */
export const trackWhatsAppClick = (linkUrl: string) => {
  trackEvent('whatsapp_click', {
    link_url: linkUrl,
    page_location: getPageLocation(),
    page_title: getPageTitle(),
  });
};

/**
 * Tracks Phone link clicks (tel:)
 */
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
    page_location: getPageLocation(),
    page_title: getPageTitle(),
  });
};

/**
 * Tracks successful Form submissions
 */
export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    page_location: getPageLocation(),
    page_title: getPageTitle(),
  });
};
