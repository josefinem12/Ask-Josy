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
        text: 'Schreiben Sie mir oder rufen Sie an. Ich rufe Sie innerhalb weniger Stunden zurück: {callbackHours}.',
        price: '{callbackPrice} pro Monat, so viele Anrufe, wie Sie möchten. Jederzeit kündbar.',
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
      'Ich komme aus Deutschland, bin in Dubai aufgewachsen und lebe jetzt in {town}. Ich habe einen Abschluss in IT, spreche Deutsch und Englisch und nehme mir so viel Zeit, wie Sie brauchen.',
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

  // ── Seite: Angebote & Preise ────────────────────────────────
  services: {
    title: 'Angebote und Preise – Ask Josy',
    description: 'Hausbesuche, Gruppentreffen, iPhone einrichten, Rückruf-Hilfe und Anleitungen zum Ausdrucken. Klare Preise, keine Überraschungen.',
    heading: 'Angebote und Preise',
    intro: 'Klare Preise, keine Überraschungen. Wenn Sie nicht sicher sind, was Sie brauchen, rufen Sie mich einfach an. Wir finden es gemeinsam heraus.',
    priceLabel: 'Preis',
    includesLabel: 'Das kann dazugehören:',
    items: [
      {
        icon: 'home',
        title: 'Hausbesuche',
        text: 'Ich komme zu Ihnen nach Hause und helfe bei jedem Problem mit Ihrem iPhone. Wir gehen in Ihrem Tempo vor, und ich erkläre alles in einfachen Worten.',
        includes: [
          'Anrufe, Nachrichten, WhatsApp und Videoanrufe mit der Familie',
          'Fotos: aufnehmen, finden und verschicken',
          'Apps, Updates und Passwörter (Sie tippen sie ein, nicht ich)',
          'Alles andere, was Ihnen Sorgen macht',
        ],
        price: '{hourPrice} pro Stunde, oder {packagePrice} für ein Paket mit 3 Besuchen',
      },
      {
        icon: 'group',
        title: 'Gruppentreffen',
        text: 'Ein entspanntes Treffen in kleiner Runde an einem Ort in der Nähe. Wir schauen uns gemeinsam ein Thema an, und es bleibt Zeit für Ihre eigenen Fragen.',
        includes: [
          'Eine freundliche, kleine Gruppe',
          'Jedes Mal ein klares Thema',
          'Zeit für Ihre eigenen Fragen',
        ],
        price: '{groupPrice} pro Person',
      },
      {
        icon: 'setup',
        title: 'iPhone einrichten',
        text: 'Ich mache Ihr iPhone einfacher und sicherer, damit Sie es jeden Tag leichter benutzen können.',
        includes: [
          'Größere Schrift und klarere Bildschirme',
          'Unterstützter Zugriff: eine sehr einfache Version des iPhones mit großen Tasten',
          'Ihre wichtigsten Kontakte auf dem Startbildschirm',
          'Schutz vor betrügerischen Anrufen und Nachrichten',
        ],
        price: '{setupPrice}',
      },
      {
        icon: 'phone',
        title: 'Rückruf-Hilfe',
        text: 'Hängen Sie bei einer Kleinigkeit fest? Schreiben Sie mir oder rufen Sie an. Ich rufe Sie innerhalb weniger Stunden zurück und helfe Ihnen am Telefon.',
        includes: [
          'So viele Anrufe, wie Sie möchten',
          'Rückrufzeiten: {callbackHours}',
          'Jederzeit kündbar',
        ],
        price: '{callbackPrice} pro Monat',
      },
      {
        icon: 'guide',
        title: 'Einfache Anleitungen zum Ausdrucken',
        text: 'Anleitungen in großer Schrift, die alltägliche Aufgaben Schritt für Schritt mit Bildern zeigen. Legen Sie sie neben Ihr Telefon.',
        includes: [],
        price: '{guidePrice} pro gedruckter Anleitung. Einige Anleitungen gibt es auch kostenlos auf dieser Website.',
      },
    ],
    faqTitle: 'Gut zu wissen',
    faq: [
      {
        q: 'Wo machen Sie Hausbesuche?',
        a: 'Ich mache Hausbesuche in der ganzen Algarve. Ich wohne in der Nähe von Almancil, Vale do Lobo, Quinta do Lago, Quarteira und Vilamoura.',
      },
      {
        q: 'Wie kann ich bezahlen?',
        a: 'Bar, per Überweisung oder mit PayPal. Überweisung und PayPal sind praktisch, wenn Ihre Familie aus dem Ausland bezahlt.',
      },
      {
        q: 'Kann meine Familie für mich buchen?',
        a: 'Ja. Ihr Sohn, Ihre Tochter oder jemand, dem Sie vertrauen, kann für Sie buchen und bezahlen, von überall.',
      },
      {
        q: 'Was ist, wenn ich den Termin ändern muss?',
        a: 'Rufen Sie mich einfach an oder schreiben Sie mir, spätestens 2 Stunden vor dem Besuch.',
      },
    ],
    cta: 'Möchten Sie buchen oder haben Sie eine Frage?',
  },

  // ── Seite: Über mich ────────────────────────────────────────
  about: {
    title: 'Über mich – Ask Josy',
    description: 'Hallo, ich bin Josy. Ich helfe Menschen in {town}, sich mit ihrem iPhone wohlzufühlen.',
    heading: 'Hallo, ich bin Josy',
    photoAlt: 'Foto von Josy',
    paragraphs: [
      'Ich komme aus Deutschland und bin in Dubai aufgewachsen. Jetzt lebe ich in {town}.',
      'Deutsch und Englisch sind beide meine Muttersprachen. Sie können mit mir in der Sprache sprechen, in der Sie sich am wohlsten fühlen.',
      'Ich habe einen Abschluss in IT und viel Erfahrung mit Handys und dem Einrichten von Geräten. Ich habe Ask Josy gegründet, um dieses Wissen ruhig und einfach weiterzugeben, damit Sie Ihr iPhone genießen können, statt sich darüber zu ärgern.',
      'Ich bin geduldig und habe es nie eilig. Keine Frage ist zu klein, und Sie können dieselbe Sache so oft fragen, wie Sie möchten.',
      'In meiner Freizeit spiele ich Padel und Golf. Ich habe zwei Katzen, und ich liebe die Sonne hier und die Freundlichkeit der Menschen.',
    ],
    valuesTitle: 'Was Sie von mir erwarten können',
    values: [
      'Geduld. Wir gehen in Ihrem Tempo vor.',
      'Einfache Worte, keine Fachsprache.',
      'Ehrlichkeit. Ich empfehle nur, was Sie wirklich brauchen.',
      'Ihre Privatsphäre. Ich frage Sie nie nach Passwörtern, PINs oder Bankdaten.',
    ],
    cta: 'Ich freue mich, von Ihnen zu hören.',
  },

  // ── Seite: Sicherheitsversprechen ───────────────────────────
  safety: {
    title: 'Mein Sicherheitsversprechen – Ask Josy',
    description: 'Ich frage Sie nie nach Passwörtern, PINs oder Bankdaten. Dazu einfache Tipps zum Schutz vor Telefonbetrug.',
    heading: 'Mein Sicherheitsversprechen',
    intro: 'Ihre Sicherheit und Ihre Privatsphäre stehen an erster Stelle. Das verspreche ich Ihnen.',
    promisesTitle: 'Ich werde Sie nie:',
    promises: [
      'nach Ihren Passwörtern oder Ihrem Telefon-Code fragen',
      'nach Ihrer Bank-PIN oder Ihren Kartendaten fragen',
      'bitten, Geld zu überweisen oder Gutscheinkarten zu kaufen',
      'bitten, Ihre Banking-App zu öffnen oder Ihr Bankkonto zu zeigen',
    ],
    controlTitle: 'Sie behalten die Kontrolle',
    control: [
      'Wenn ein Passwort nötig ist, tippen Sie es selbst ein. Ich schaue weg.',
      'Ich erkläre, was ich mache, bevor ich es mache.',
      'Sie können mich jederzeit bitten aufzuhören.',
    ],
    fakeTitle: 'Wenn jemand sagt, er sei ich',
    fakeText:
      'Wenn jemand anruft oder schreibt, sich als Josy ausgibt und nach einem Passwort, einem Code oder Geld fragt, bin das nicht ich. Legen Sie auf und rufen Sie mich unter {phone} an.',
    scamsTitle: 'So erkennen Sie Betrug',
    scamsIntro: 'Betrüger geben sich oft als Ihre Bank, die Polizei, ein Paketdienst oder ein Familienmitglied aus. Seien Sie vorsichtig, wenn jemand:',
    scams: [
      'sagt, es sei dringend und Sie müssten sofort handeln',
      'nach einem Code fragt, der an Ihr Telefon geschickt wurde',
      'möchte, dass Sie mit Gutscheinkarten bezahlen oder Geld überweisen',
      'von einer neuen Nummer schreibt: „Hallo Mama“ oder „Hallo Papa“',
      'Ihnen einen Link schickt und Sie bittet, sich anzumelden',
    ],
    scamsAdvice: 'Wenn Sie unsicher sind: Halten Sie inne, drücken Sie nichts, und rufen Sie Ihre Bank oder Ihre Familie unter einer Nummer an, die Sie schon kennen. Sie können auch jederzeit mich anrufen.',
  },

  // ── Seiten: Kostenlose Anleitungen ──────────────────────────
  guides: {
    title: 'Kostenlose Anleitungen – Ask Josy',
    description: 'Einfache Schritt-für-Schritt-Anleitungen für Ihr iPhone, in großer Schrift. Kostenlos zum Lesen und Ausdrucken.',
    heading: 'Kostenlose Anleitungen',
    intro: 'Einfache Schritt-für-Schritt-Anleitungen für Ihr iPhone. Sie können sie hier lesen oder ausdrucken.',
    empty: 'Neue Anleitungen kommen bald.',
    readGuide: 'Diese Anleitung lesen',
    back: 'Zurück zu allen Anleitungen',
    print: 'Diese Anleitung drucken',
    help: 'Kommen Sie nicht weiter? Rufen Sie mich an, ich helfe Ihnen.',
  },

  // ── Seite: Besuch buchen ────────────────────────────────────
  contact: {
    title: 'Besuch buchen – Ask Josy',
    description: 'Rufen Sie an, schreiben Sie per WhatsApp oder füllen Sie das kurze Formular aus. Ich melde mich bei Ihnen.',
    heading: 'Besuch buchen',
    intro: 'Am einfachsten ist es, mich anzurufen oder mir per WhatsApp zu schreiben.',
    callbackNote: 'Wenn ich nicht abnehmen kann, rufe ich Sie zurück. Rückrufzeiten: {callbackHours}.',
    emailLabel: 'E-Mail:',
    formTitle: 'Oder schicken Sie mir eine Nachricht',
    formIntro: 'Füllen Sie dieses kurze Formular aus, und ich rufe Sie zurück.',
    requiredNote: 'Felder mit „Pflichtfeld“ müssen ausgefüllt werden.',
    required: 'Pflichtfeld',
    optional: 'freiwillig',
    fields: {
      name: 'Ihr Name',
      phone: 'Ihre Telefonnummer',
      email: 'Ihre E-Mail-Adresse',
      language: 'Welche Sprache ist Ihnen lieber?',
      bookingFor: 'Für wen ist die Hilfe?',
      bookingForSelf: 'Für mich',
      bookingForOther: 'Für meine Eltern oder jemand anderen',
      message: 'Wobei brauchen Sie Hilfe?',
      messageHint: 'Ein paar Worte reichen, zum Beispiel „Ich kann keine Fotos verschicken“.',
    },
    privacy: 'Ich nutze Ihre Angaben nur, um Ihnen zu antworten. Ich gebe sie nie weiter.',
    submit: 'Nachricht senden',
    sending: 'Wird gesendet …',
    successTitle: 'Vielen Dank!',
    successText: 'Ihre Nachricht ist angekommen. Ich rufe Sie bald zurück.',
    errorText: 'Entschuldigung, da ist etwas schiefgegangen. Bitte rufen Sie mich an oder schreiben Sie mir per WhatsApp.',
  },

  // ── Seite nicht gefunden ────────────────────────────────────
  notFound: {
    title: 'Seite nicht gefunden – Ask Josy',
    heading: 'Diese Seite gibt es leider nicht',
    text: 'Vielleicht ist der Link alt oder enthält einen Tippfehler.',
    home: 'Zur Startseite',
  },
};
