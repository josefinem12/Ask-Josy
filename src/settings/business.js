// ─────────────────────────────────────────────────────────────
//  BUSINESS DETAILS — edit this file to change your phone
//  number, email, prices and hours. They update on every page,
//  in every language.
//
//  Prices: write a number (e.g. 40). Leave as null to show
//  "[PRICE]" until you have decided.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'Ask Josy',
  town: '[COMMUNITY/TOWN]',

  // Phone number exactly as people should see it written.
  phoneDisplay: '[NUMBER]',
  // Same number in international format, digits only, no spaces or +.
  // Portugal starts with 351. Example: '351912345678'
  phoneDigits: '351000000000',

  email: '[EMAIL]',

  // Callback times, written per language.
  callbackHours: {
    en: '[HOURS]',
    de: '[HOURS]',
  },

  prices: {
    homeVisitHour: null,      // home visit, per hour
    homeVisitPackage3: null,  // package of 3 home visits
    groupSession: null,       // group session, per person
    phoneSetup: null,         // phone setup (leave null if part of a home visit)
    printedGuide: null,       // one printed guide
  },

  // Formspree form ID, e.g. 'xyzabcd'. See README for how to get one.
  formspreeId: '[FORM_ID]',
};

export const phoneLink = `tel:+${business.phoneDigits}`;
export const whatsappLink = `https://wa.me/${business.phoneDigits}`;
export const emailLink = `mailto:${business.email}`;
