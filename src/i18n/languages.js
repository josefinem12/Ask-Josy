// The languages the site is built in.
// To add Portuguese later: create src/i18n/pt.js (copy en.js and
// translate it), import it below and add it to `languages`.
import en from './en.js';
import de from './de.js';

export const languages = {
  en: { label: 'English', text: en },
  de: { label: 'Deutsch', text: de },
};

export const defaultLang = 'en';

export function t(lang) {
  return languages[lang].text;
}

// Shows a price in the local style: €40 (English), 40 € (German).
export function formatPrice(value, lang) {
  if (value === null || value === undefined) return '[PRICE]';
  const locale = { en: 'en-IE', de: 'de-DE', pt: 'pt-PT' }[lang] ?? 'en-IE';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value);
}

// Fills in {town}, {hourPrice} and the other placeholders in a text.
import { business } from '../settings/business.js';

export function fill(text, lang) {
  const p = business.prices;
  const values = {
    town: business.town[lang],
    phone: business.phoneDisplay,
    email: business.email,
    callbackHours: business.callbackHours[lang],
    hourPrice: formatPrice(p.homeVisitHour, lang),
    packagePrice: formatPrice(p.homeVisitPackage3, lang),
    groupPrice: formatPrice(p.groupSession, lang),
    setupPrice: formatPrice(p.phoneSetup, lang),
    guidePrice: formatPrice(p.printedGuide, lang),
    callbackPrice: formatPrice(p.callbackMonthly, lang),
  };
  return text.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}

// Builds a link to a page in a given language, e.g. url('de', 'services').
export function url(lang, page = '') {
  return page ? `/${lang}/${page}/` : `/${lang}/`;
}
