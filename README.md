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
