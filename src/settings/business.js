// ─────────────────────────────────────────────────────────────
//  BUSINESS DETAILS — edit this file to change your phone
//  number, email, prices and hours. They update on every page,
//  in every language.
//
//  Prices: write a number (e.g. 40). Write null to show
//  "[PRICE]" until you have decided.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'Ask Josy',
  // Where you work, as it fits in a sentence like "I live in ___".
  town: {
    en: 'the Algarve',
    de: 'der Algarve',
  },

  // Phone number exactly as people should see it written.
  phoneDisplay: '+351 000 000 000', // TEMPORARY: replace with the real number
  // Same number in international format, digits only, no spaces or +.
  // Portugal starts with 351. Example: '351912345678'
  phoneDigits: '351000000000', // TEMPORARY

  email: 'askjosymertens@gmail.com',

  // Callback times, written per language.
  callbackHours: {
    en: 'Monday to Friday, 10:00 to 17:00',
    de: 'Montag bis Freitag, 10 bis 17 Uhr',
  },

  prices: {
    homeVisitHour: 35,        // home visit, per hour
    homeVisitPackage3: 90,    // package of 3 home visits
    groupSession: 10,         // group session, per person
    phoneSetup: 40,           // phone setup
    printedGuide: 5,          // one printed guide
    callbackMonthly: 15,      // callback help, per month
  },
};

export const phoneLink = `tel:+${business.phoneDigits}`;
export const whatsappLink = `https://wa.me/${business.phoneDigits}`;
export const emailLink = `mailto:${business.email}`;
