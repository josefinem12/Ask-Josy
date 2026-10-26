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

## The contact form (Netlify Forms)

The "Book a visit" form uses Netlify Forms, which is built into Netlify.
There is nothing to set up before publishing.

After the site is online on Netlify:

1. Send yourself a test message from the "Book a visit" page.
2. In Netlify, open your site and click **Forms**. Your message is there.
3. To get an email for each new message: go to **Site configuration → Notifications →
   Emails and webhooks → Form submission notifications → Add notification →
   Email notification**, type your email address, and save.

Note: the form only works on the real Netlify site, not on `npm run dev`.

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
