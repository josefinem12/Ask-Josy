// ─────────────────────────────────────────────────────────────
//  ENGLISH TEXT — edit the words between the quotes.
//  Prices, phone and email live in src/settings/business.js.
//  {town}, {hourPrice} etc. are filled in automatically.
// ─────────────────────────────────────────────────────────────

export default {
  langName: 'English',
  skipLink: 'Skip to main content',
  menu: 'Menu',
  languageLabel: 'Language',

  nav: {
    home: 'Home',
    services: 'Services & prices',
    about: 'About me',
    safety: 'Safety promise',
    guides: 'Free guides',
    contact: 'Book a visit',
  },

  buttons: {
    call: 'Call me',
    whatsapp: 'WhatsApp',
    email: 'Send an email',
    book: 'Book a visit',
  },

  footer: {
    tagline: 'Friendly iPhone help in {town}, in English and German.',
    safety: 'I will never ask for your passwords, PINs or bank details.',
  },

  home: {
    title: 'Ask Josy – friendly iPhone help in {town}',
    description:
      'Patient, friendly help with your iPhone, at home or in a small group. In English and German, in {town}, Portugal.',

    heroTitle: 'Friendly help with your iPhone',
    heroText:
      'I help you use your iPhone calmly and with confidence. At your home, at your own pace.',
    heroLanguages: 'In English or German, in {town}.',
    heroCallPrompt: 'Call or send a WhatsApp message:',

    safetyBox: {
      title: 'My safety promise',
      text: 'I will never ask for your passwords, PINs or bank details.',
      link: 'Read my safety promise',
    },

    servicesTitle: 'How I can help',
    services: [
      {
        icon: 'home',
        title: 'Home visits',
        text: 'I come to your home and help with any phone problem.',
        price: '{hourPrice} per hour, or {packagePrice} for 3 visits',
      },
      {
        icon: 'group',
        title: 'Group sessions',
        text: 'Learn together with others at a local venue. Relaxed, and no question is too small.',
        price: '{groupPrice} per person',
      },
      {
        icon: 'setup',
        title: 'Phone setup',
        text: 'I make your iPhone simpler: large text, easy screens, your key contacts, and protection from scams.',
        price: '{setupPrice}',
      },
      {
        icon: 'phone',
        title: 'Callback help',
        text: 'Send a message or call. I call you back within a few hours.',
        price: 'Callback times: {callbackHours}',
      },
      {
        icon: 'guide',
        title: 'Easy printed guides',
        text: 'Large-print guides that show common tasks step by step.',
        price: '',
      },
    ],
    servicesLink: 'See all services and prices',

    stepsTitle: 'How it works',
    steps: [
      { title: 'Call or message me', text: 'Tell me what you need. There are no silly questions.' },
      { title: 'We choose a time', text: 'We agree on a day and time that suits you.' },
      { title: 'I help you', text: 'I explain everything slowly, and you keep notes if you like.' },
    ],

    aboutTitle: 'Hello, I am Josy',
    aboutText:
      'I live in {town} and I enjoy helping people feel at ease with technology. I am patient, I speak English and German, and I will take all the time you need.',
    aboutLink: 'More about me',
    photoAlt: 'Photo of Josy',

    familyTitle: 'Help for your parents',
    familyIntro:
      'Do your parents live in {town} while you live far away? I can help them in person.',
    familyPoints: [
      'You can book and pay for a visit for your parent, from anywhere.',
      'I can set up their iPhone so it is simple and safe from scams.',
      'Your parent can call me directly when they need help.',
    ],
    familyCta: 'Book a visit for your parent',

    contactTitle: 'Get in touch',
    contactText: 'Call, send a WhatsApp message or an email. I am happy to help.',
  },
};
