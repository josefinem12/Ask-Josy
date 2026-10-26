# Ask Josy – website

A simple website in English and German, built with [Astro](https://astro.build).

## Changing text and prices

| What you want to change              | File                          |
| ------------------------------------ | ----------------------------- |
| Phone, WhatsApp, email, prices, hours, town | `src/settings/business.js` |
| English words                        | `src/i18n/en.js`              |
| German words                         | `src/i18n/de.js`              |
| Your photo                           | replace `public/images/josy-placeholder.svg` (and update the file name in `src/pages/[lang]/index.astro`) |
| Colours and sizes                    | `src/styles/global.css`       |

Only change the words **between the quotes**. Keep the commas and brackets as they are.

## Pages

| Page              | English               | German                |
| ----------------- | --------------------- | --------------------- |
| Home              | `/en/`                | `/de/`                |
| Services & prices | `/en/services/`       | `/de/services/`       |
| About me          | `/en/about/`          | `/de/about/`          |
| Safety promise    | `/en/safety/`         | `/de/safety/`         |
| Free guides       | `/en/guides/`         | `/de/guides/`         |
| Book a visit      | `/en/contact/`        | `/de/contact/`        |

The page files are in `src/pages/[lang]/`. The main address `/` sends visitors
to English or German depending on their phone's language.

## Adding a free guide

See `src/content/guides/HOW-TO-ADD-A-GUIDE.txt`. In short: copy
`src/content/guides/en/bigger-text.md`, rename it, and change the text.
Put the German version in `src/content/guides/de/` with the same file name.

## Setting up the contact form (Formspree, free)

1. Go to https://formspree.io and create a free account with your email.
2. Click **New form**, give it a name (for example "Ask Josy"), and choose
   your email address.
3. Formspree shows an address like `https://formspree.io/f/xyzabcd`.
   Copy the last part (`xyzabcd`).
4. In `src/settings/business.js`, replace `[FORM_ID]` with it.
5. After the site is online, send yourself a test message. The first time,
   Formspree asks you to confirm by email.

Messages arrive in your email inbox. The free plan allows 50 messages a month.

## Adding Portuguese later

1. Copy `src/i18n/en.js` to `src/i18n/pt.js` and translate it.
2. In `src/i18n/languages.js`, add `import pt from './pt.js';` and `pt: { label: 'Português', text: pt },`.
3. Add `pt` to `callbackHours` in `src/settings/business.js`.

## Running it on your computer

```
npm install
npm run dev      # opens a preview at http://localhost:4321
npm run build    # makes the finished site in the dist/ folder
```
