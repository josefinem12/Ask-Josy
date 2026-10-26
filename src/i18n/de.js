// ─────────────────────────────────────────────────────────────
//  DEUTSCHER TEXT — ändern Sie die Wörter zwischen den Anführungszeichen.
//  Preise, Telefon und E-Mail stehen in src/settings/business.js.
//  {town}, {hourPrice} usw. werden automatisch eingesetzt.
// ─────────────────────────────────────────────────────────────

export default {
  langName: 'Deutsch',
  skipLink: 'Zum Hauptinhalt springen',
  menu: 'Menü',
  languageLabel: 'Sprache',

  nav: {
    home: 'Startseite',
    services: 'Angebote & Preise',
    about: 'Über mich',
    safety: 'Sicherheitsversprechen',
    guides: 'Kostenlose Anleitungen',
    contact: 'Besuch buchen',
  },

  buttons: {
    call: 'Rufen Sie mich an',
    whatsapp: 'WhatsApp',
    email: 'E-Mail schreiben',
    book: 'Besuch buchen',
  },

  footer: {
    tagline: 'Freundliche iPhone-Hilfe in {town}, auf Deutsch und Englisch.',
    safety: 'Ich frage Sie nie nach Passwörtern, PINs oder Bankdaten.',
  },

  home: {
    title: 'Ask Josy – freundliche iPhone-Hilfe in {town}',
    description:
      'Geduldige, freundliche Hilfe mit Ihrem iPhone, bei Ihnen zu Hause oder in einer kleinen Gruppe. Auf Deutsch und Englisch, in {town}, Portugal.',

    heroTitle: 'Freundliche Hilfe mit Ihrem iPhone',
    heroText:
      'Ich helfe Ihnen, Ihr iPhone ruhig und sicher zu benutzen. Bei Ihnen zu Hause, in Ihrem Tempo.',
    heroLanguages: 'Auf Deutsch oder Englisch, in {town}.',
    heroCallPrompt: 'Rufen Sie an oder schreiben Sie per WhatsApp:',

    safetyBox: {
      title: 'Mein Sicherheitsversprechen',
      text: 'Ich frage Sie nie nach Passwörtern, PINs oder Bankdaten.',
      link: 'Mein Sicherheitsversprechen lesen',
    },

    servicesTitle: 'So kann ich helfen',
    services: [
      {
        icon: 'home',
        title: 'Hausbesuche',
        text: 'Ich komme zu Ihnen nach Hause und helfe bei jedem Handy-Problem.',
        price: '{hourPrice} pro Stunde, oder {packagePrice} für 3 Besuche',
      },
      {
        icon: 'group',
        title: 'Gruppentreffen',
        text: 'Gemeinsam mit anderen lernen, an einem Ort in der Nähe. In Ruhe, und keine Frage ist zu klein.',
        price: '{groupPrice} pro Person',
      },
      {
        icon: 'setup',
        title: 'iPhone einrichten',
        text: 'Ich mache Ihr iPhone einfacher: große Schrift, einfache Bildschirme, Ihre wichtigsten Kontakte und Schutz vor Betrug.',
        price: '{setupPrice}',
      },
      {
        icon: 'phone',
        title: 'Rückruf-Hilfe',
        text: 'Schreiben Sie mir oder rufen Sie an. Ich rufe Sie innerhalb weniger Stunden zurück.',
        price: 'Rückrufzeiten: {callbackHours}',
      },
      {
        icon: 'guide',
        title: 'Einfache Anleitungen zum Ausdrucken',
        text: 'Anleitungen in großer Schrift, die alltägliche Aufgaben Schritt für Schritt zeigen.',
        price: '',
      },
    ],
    servicesLink: 'Alle Angebote und Preise ansehen',

    stepsTitle: 'So funktioniert es',
    steps: [
      { title: 'Rufen Sie mich an oder schreiben Sie mir', text: 'Sagen Sie mir, was Sie brauchen. Es gibt keine dummen Fragen.' },
      { title: 'Wir vereinbaren einen Termin', text: 'Wir finden einen Tag und eine Uhrzeit, die Ihnen passen.' },
      { title: 'Ich helfe Ihnen', text: 'Ich erkläre alles langsam, und Sie können sich gerne Notizen machen.' },
    ],

    aboutTitle: 'Hallo, ich bin Josy',
    aboutText:
      'Ich lebe in {town} und helfe gerne Menschen, sich mit Technik wohlzufühlen. Ich bin geduldig, spreche Deutsch und Englisch und nehme mir so viel Zeit, wie Sie brauchen.',
    aboutLink: 'Mehr über mich',
    photoAlt: 'Foto von Josy',

    familyTitle: 'Hilfe für Ihre Eltern',
    familyIntro:
      'Ihre Eltern leben in {town} und Sie wohnen weit weg? Ich kann ihnen vor Ort helfen.',
    familyPoints: [
      'Sie können einen Besuch für Ihre Eltern buchen und bezahlen, von überall.',
      'Ich richte ihr iPhone einfach und sicher vor Betrug ein.',
      'Ihre Eltern können mich direkt anrufen, wenn sie Hilfe brauchen.',
    ],
    familyCta: 'Einen Besuch für Ihre Eltern buchen',

    contactTitle: 'Kontakt',
    contactText: 'Rufen Sie an, schreiben Sie per WhatsApp oder per E-Mail. Ich helfe gerne.',
  },
};
