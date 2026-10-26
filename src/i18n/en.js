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
        text: 'Send a message or call. I call you back within a few hours: {callbackHours}.',
        price: '{callbackPrice} per month, as many calls as you like',
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
      'I am from Germany, grew up in Dubai, and now live in {town}. I have a degree in IT, I speak German and English, and I will take all the time you need.',
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

  // ── Services & prices page ──────────────────────────────────
  services: {
    title: 'Services and prices – Ask Josy',
    description: 'Home visits, group sessions, phone setup, callback help and printed guides. Clear prices, no surprises.',
    heading: 'Services and prices',
    intro: 'Clear prices, no surprises. If you are not sure what you need, just call me and we will work it out together.',
    priceLabel: 'Price',
    includesLabel: 'This can include:',
    items: [
      {
        icon: 'home',
        title: 'Home visits',
        text: 'I come to your home and help with any problem on your iPhone. We go at your pace, and I explain everything in plain words.',
        includes: [
          'Calls, messages, WhatsApp and video calls with family',
          'Photos: taking, finding and sending them',
          'Apps, updates and passwords (you type them, not me)',
          'Anything else that is worrying you',
        ],
        price: '{hourPrice} per hour, or {packagePrice} for a package of 3 visits',
      },
      {
        icon: 'group',
        title: 'Group sessions',
        text: 'A relaxed session at a local venue with a small group. We look at one topic together, and there is time for your own questions.',
        includes: [
          'A friendly, small group',
          'One clear topic each time',
          'Time for your own questions',
        ],
        price: '{groupPrice} per person',
      },
      {
        icon: 'setup',
        title: 'Phone setup',
        text: 'I make your iPhone simpler and safer, so it is easier to use every day.',
        includes: [
          'Larger text and clearer screens',
          'Assistive Access: a very simple version of the iPhone with big buttons',
          'Your most important contacts on the home screen',
          'Protection from scam calls and messages',
        ],
        price: '{setupPrice}',
      },
      {
        icon: 'phone',
        title: 'Callback help',
        text: 'Stuck with something small? Send me a message or call. I call you back within a few hours and help you over the phone.',
        includes: [
          'As many calls as you like',
          'Callback times: {callbackHours}',
        ],
        price: '{callbackPrice} per month',
      },
      {
        icon: 'guide',
        title: 'Easy printed guides',
        text: 'Large-print guides that show common tasks step by step, with pictures. Keep them next to your phone.',
        includes: [],
        price: '{guidePrice} per printed guide. Some guides are also free on this website.',
      },
    ],
    faqTitle: 'Good to know',
    faq: [
      {
        q: 'Where do you visit?',
        a: 'I visit homes all over the Algarve. I am based near Almancil, Vale do Lobo, Quinta do Lago, Quarteira and Vilamoura.',
      },
      {
        q: 'How can I pay?',
        a: 'In cash or with PayPal. PayPal is handy for family who pay from abroad.',
      },
      {
        q: 'Can my family book for me?',
        a: 'Yes. Your son, daughter or anyone you trust can book and pay for you, from anywhere.',
      },
      {
        q: 'What if I need to change the time?',
        a: 'Just call or message me at least 2 hours before the visit.',
      },
    ],
    cta: 'Ready to book, or have a question?',
  },

  // ── About me page ───────────────────────────────────────────
  about: {
    title: 'About me – Ask Josy',
    description: 'Hello, I am Josy. I help people in {town} feel at ease with their iPhone.',
    heading: 'Hello, I am Josy',
    photoAlt: 'Photo of Josy',
    paragraphs: [
      'I am from Germany and grew up in Dubai. Now I live in {town}.',
      'German and English are both my native languages. You can talk to me in the one you feel most at home in.',
      'I have a degree in IT and a lot of experience with phones and setting up devices. I started Ask Josy to share this in a calm and simple way, so that you can enjoy your iPhone instead of worrying about it.',
      'I am patient, and I never rush. No question is too small, and you can ask the same thing as many times as you like.',
      'In my free time I play padel and golf. I have two cats, and I love the sunshine here and the kindness of the people.',
    ],
    valuesTitle: 'What you can expect from me',
    values: [
      'Patience. We go at your speed.',
      'Plain words, no technical jargon.',
      'Honesty. I only suggest what you really need.',
      'Your privacy. I never ask for your passwords, PINs or bank details.',
    ],
    cta: 'I would love to hear from you.',
  },

  // ── Safety promise page ─────────────────────────────────────
  safety: {
    title: 'My safety promise – Ask Josy',
    description: 'I will never ask for your passwords, PINs or bank details. Plus simple tips to stay safe from phone scams.',
    heading: 'My safety promise',
    intro: 'Your safety and privacy come first. This is my promise to you.',
    promisesTitle: 'I will never:',
    promises: [
      'ask for your passwords or your phone code',
      'ask for your bank PIN or card details',
      'ask you to send money or buy gift cards',
      'open your banking app or look at your bank account',
    ],
    controlTitle: 'You stay in control',
    control: [
      'When a password is needed, you type it yourself. I will look away.',
      'I explain what I am doing before I do it.',
      'You can ask me to stop at any time.',
    ],
    fakeTitle: 'If someone says they are me',
    fakeText:
      'If anyone calls or writes saying they are Josy and asks for a password, a code or money, it is not me. Hang up, and call me on {phone}.',
    scamsTitle: 'How to spot a scam',
    scamsIntro: 'Scammers often pretend to be your bank, the police, a delivery company or a family member. Be careful if someone:',
    scams: [
      'says it is urgent and you must act now',
      'asks for a code that was sent to your phone',
      'asks you to pay with gift cards or to send money',
      'writes from a new number and says "Hi Mum" or "Hi Dad"',
      'sends a link and asks you to log in',
    ],
    scamsAdvice: 'If you are not sure: stop, do not press anything, and call your bank or your family on a number you already know. You can always call me too.',
  },

  // ── Free guides pages ───────────────────────────────────────
  guides: {
    title: 'Free guides – Ask Josy',
    description: 'Simple step-by-step guides for your iPhone, in large print. Free to read and print.',
    heading: 'Free guides',
    intro: 'Simple step-by-step guides for your iPhone. You can read them here or print them out.',
    empty: 'New guides are coming soon.',
    readGuide: 'Read this guide',
    back: 'Back to all guides',
    print: 'Print this guide',
    help: 'Still stuck? Call me and I will help.',
  },

  // ── Contact / book a visit page ─────────────────────────────
  contact: {
    title: 'Book a visit – Ask Josy',
    description: 'Call, send a WhatsApp message or fill in the short form, and I will get back to you.',
    heading: 'Book a visit',
    intro: 'The easiest way is to call me or send a WhatsApp message.',
    callbackNote: 'If I cannot answer, I will call you back. Callback times: {callbackHours}.',
    emailLabel: 'Email:',
    formTitle: 'Or send me a message',
    formIntro: 'Fill in this short form, and I will call you back.',
    requiredNote: 'Fields marked "required" must be filled in.',
    required: 'required',
    optional: 'optional',
    fields: {
      name: 'Your name',
      phone: 'Your phone number',
      email: 'Your email',
      language: 'Which language do you prefer?',
      bookingFor: 'Who is the help for?',
      bookingForSelf: 'For me',
      bookingForOther: 'For my parent or someone else',
      message: 'What do you need help with?',
      messageHint: 'A few words are enough, for example "I cannot send photos".',
    },
    privacy: 'I only use your details to reply to you. I never share them.',
    submit: 'Send message',
    sending: 'Sending…',
    successTitle: 'Thank you!',
    successText: 'Your message has arrived. I will call you back soon.',
    errorText: 'Sorry, something went wrong. Please call me or send a WhatsApp message instead.',
  },

  // ── Page not found ──────────────────────────────────────────
  notFound: {
    title: 'Page not found – Ask Josy',
    heading: 'Sorry, this page does not exist',
    text: 'Maybe the link is old or has a typing mistake.',
    home: 'Go to the home page',
  },
};
