/**
 * Netra Optical — single source of truth for every piece of business data
 * rendered on the site. Edit here, never inside components.
 *
 * Source: Google Business Profile (kgmid /g/1q62m1hyy).
 *
 * ⚠ VERIFY BEFORE LAUNCH — items marked TODO are reasonable defaults, not
 * confirmed facts. See README.md § "Before you go live".
 */

export const site = {
  name: 'Netra Optical',
  legalName: 'Netra Optical',
  tagline: 'Opticians & Luxury Eyewear, Indore',
  shortDescription:
    'Computerised eye testing, designer frames, premium lenses and contact lens fitting in South Tukoganj, Indore.',
  description:
    'Netra Optical is an optical showroom in South Tukoganj, Indore, offering computerised eye testing, prescription eyewear, designer frames, premium lenses, sunglasses and contact lens fitting — with expert in-store fitting, adjustments and repairs.',
  // Matches the Cloudflare Pages project name (`netra-optical`).
  // TODO: swap for the real domain once purchased, and update public/robots.txt to match.
  url: 'https://netra-optical.pages.dev',
  locale: 'en_IN',

  contact: {
    /** E.164 — used for tel: and WhatsApp links */
    phoneE164: '+919827650403',
    /** Human-readable, as shown on the Google listing */
    phoneDisplay: '+91 98276 50403',
    whatsapp: '919827650403',
    email: 'hello@netraoptical.in', // TODO: confirm or remove
  },

  address: {
    line1: 'Hotel Crown Palace, UG10',
    line2: 'Trade Centre Road, South Tukoganj',
    city: 'Indore',
    state: 'Madhya Pradesh',
    postalCode: '452001',
    country: 'IN',
    countryName: 'India',
    /** Approximate — South Tukoganj / Trade Centre, Indore */
    geo: { lat: 22.7165, lng: 75.8752 },
    landmark: 'Near Treasure Island (TI) Mall',
  },

  /** TODO: confirm daily opening time. Closing time (9:15 pm) is from Google. */
  hours: [
    { days: 'Monday — Saturday', time: '10:30 am — 9:15 pm' },
    { days: 'Sunday', time: '11:00 am — 8:30 pm' },
  ],
  /** schema.org openingHours strings, kept in sync with `hours` above */
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '10:30', closes: '21:15' },
    { days: ['Sunday'], opens: '11:00', closes: '20:30' },
  ],

  links: {
    googleProfile:
      'https://www.google.com/search?kgmid=/g/1q62m1hyy&hl=en-IN&q=Netra+Optical',
    googleReviews:
      'https://www.google.com/search?kgmid=/g/1q62m1hyy&hl=en-IN&q=Netra+Optical#lrd=0x0:0x0,1',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=Netra+Optical%2C+Hotel+Crown+Palace%2C+South+Tukoganj%2C+Indore',
    mapEmbed:
      'https://www.google.com/maps?q=Netra+Optical,+Hotel+Crown+Palace,+UG10,+Trade+Centre,+South+Tukoganj,+Indore,+Madhya+Pradesh+452001&output=embed',
    instagram: '', // TODO: add when available
    facebook: '',
  },
} as const

export const addressOneLine = [
  site.address.line1,
  site.address.line2,
  `${site.address.city}, ${site.address.state} ${site.address.postalCode}`,
].join(', ')

export const whatsappUrl = (message = "Hello Netra Optical, I'd like to book an eye test.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`

export const telUrl = `tel:${site.contact.phoneE164}`

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Eyewear', href: '#eyewear' },
  { label: 'Sunglasses', href: '#sunglasses' },
  { label: 'Lenses', href: '#contact-lenses' },
  { label: 'Eye Test', href: '#eye-test' },
  { label: 'Kids', href: '#kids' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export type Service = {
  icon: string
  title: string
  description: string
  points: string[]
}

export const services: Service[] = [
  {
    icon: 'scan-eye',
    title: 'Computerised Eye Testing',
    description:
      'A complete refraction workup on calibrated equipment, read and explained by an experienced optometrist.',
    points: ['Auto-refraction', 'Subjective refinement', 'Prescription printout'],
  },
  {
    icon: 'glasses',
    title: 'Prescription Eyewear',
    description:
      'Frames matched to your face shape, prescription strength and how you actually spend your day.',
    points: ['Face-shape styling', 'Weight balancing', 'Same-day fitting'],
  },
  {
    icon: 'layers',
    title: 'Premium Lens Consultation',
    description:
      'Single-vision, progressive, blue-filter, photochromic and high-index — chosen on merit, not on margin.',
    points: ['Progressive fitting', 'Blue-filter coatings', 'Anti-glare & hydrophobic'],
  },
  {
    icon: 'contact',
    title: 'Contact Lens Fitting',
    description:
      'Base-curve and diameter measured properly, with a hands-on insertion and hygiene walkthrough.',
    points: ['Daily & monthly', 'Toric for cylinder', 'Coloured lenses'],
  },
  {
    icon: 'sun',
    title: 'Sunglasses & Polarised',
    description:
      'UV400 protection in designer silhouettes — plus prescription sunglasses cut to your power.',
    points: ['100% UV400', 'Polarised options', 'Powered sunglasses'],
  },
  {
    icon: 'wrench',
    title: 'Repairs & Adjustments',
    description:
      'Nose pads, temple screws, hinge alignment and re-fitting — walk in and walk out sorted.',
    points: ['Frame alignment', 'Nose-pad replacement', 'Ultrasonic cleaning'],
  },
]

/* ------------------------------------------------------------------ */
/*  Collections                                                        */
/* ------------------------------------------------------------------ */

export type Collection = {
  name: string
  material: string
  blurb: string
  tag?: string
}

export const eyewearCollection: Collection[] = [
  {
    name: 'Titanium Featherline',
    material: 'Beta-titanium · 9 g',
    blurb: 'Rimless engineering that disappears on the face. For all-day wear that you forget you own.',
    tag: 'Lightest',
  },
  {
    name: 'Acetate Heritage',
    material: 'Italian acetate',
    blurb: 'Hand-polished acetate in tortoise, smoke and honey. Warm, characterful, quietly expensive.',
  },
  {
    name: 'Metropolitan Steel',
    material: 'Stainless · Matte',
    blurb: 'Thin-gauge rectangles and clubmasters with a matte finish that resists fingerprints.',
    tag: 'Best seller',
  },
  {
    name: 'Screen Series',
    material: 'TR-90 · Blue filter',
    blurb: 'Built for ten-hour screen days — flexible temples paired with a low-reflection blue-filter lens.',
  },
  {
    name: 'Signature Gold',
    material: 'Gold-tone metal',
    blurb: 'Aviators, hexagons and thin round frames in champagne and rose gold-tone finishes.',
  },
  {
    name: 'Progressive Fit',
    material: 'Deep-B frames',
    blurb: 'Frame depths selected specifically to give progressive lenses the corridor they need.',
    tag: 'For 40+',
  },
]

export const sunglassesCollection: Collection[] = [
  {
    name: 'Polarised Aviator',
    material: 'Grey-green · UV400',
    blurb: 'Cuts road and water glare without dulling colour. The default for Indore afternoons.',
    tag: 'Polarised',
  },
  {
    name: 'Oversized Square',
    material: 'Gradient brown',
    blurb: 'Full brow coverage with a gradient fade that keeps eyes visible indoors.',
  },
  {
    name: 'Sport Wrap',
    material: 'Impact-grade',
    blurb: 'Wrap geometry with grip temples — stays put through a ride, a run or a match.',
  },
  {
    name: 'Powered Sunglasses',
    material: 'Rx · Tinted',
    blurb: 'Your exact prescription surfaced into a tinted or polarised lens. No contacts needed.',
    tag: 'Made to power',
  },
]

/* ------------------------------------------------------------------ */
/*  Contact lenses                                                     */
/* ------------------------------------------------------------------ */

export const contactLensTypes = [
  {
    title: 'Daily Disposables',
    description: 'Fresh pair every morning, nothing to clean. The most hygienic way to wear lenses.',
    meta: 'Ideal for occasional wear',
  },
  {
    title: 'Monthly Lenses',
    description: 'Silicone-hydrogel material with high oxygen transmission for comfortable long days.',
    meta: 'Best value per day',
  },
  {
    title: 'Toric — for Cylinder',
    description: 'Stabilised lenses that hold their axis so astigmatism stays corrected as you blink.',
    meta: 'Measured fitting required',
  },
  {
    title: 'Coloured & Cosmetic',
    description: 'Natural hazel through to grey, in powered and zero-power, from certified brands only.',
    meta: 'Powered & plano',
  },
]

/* ------------------------------------------------------------------ */
/*  Eye test — process                                                 */
/* ------------------------------------------------------------------ */

export const eyeTestSteps = [
  {
    step: '01',
    title: 'History & symptoms',
    description:
      'We start with how you actually use your eyes — screens, driving, reading, headaches, family history.',
  },
  {
    step: '02',
    title: 'Computerised refraction',
    description:
      'An auto-refractor gives an objective baseline power for each eye in under a minute.',
  },
  {
    step: '03',
    title: 'Subjective refinement',
    description:
      'Trial frame and lens-by-lens comparison until the sharpest, most comfortable correction is confirmed.',
  },
  {
    step: '04',
    title: 'Lens & frame advice',
    description:
      'We explain the options in plain language — what each coating does, and what you genuinely need.',
  },
]

export const eyeTestSigns = [
  'Headaches after screen work',
  'Squinting to read signboards',
  'Holding your phone further away',
  'Eye strain or watering by evening',
  'Difficulty driving at night',
  'No test in the last 12 months',
]

/* ------------------------------------------------------------------ */
/*  Kids                                                               */
/* ------------------------------------------------------------------ */

export const kidsFeatures = [
  {
    title: 'Flexible, unbreakable frames',
    description: 'Memory-metal and TR-90 frames that bend back instead of snapping in a school bag.',
  },
  {
    title: 'Impact-resistant lenses',
    description: 'Polycarbonate lenses as standard — lighter, thinner and far safer for play.',
  },
  {
    title: 'Myopia-aware advice',
    description: 'Guidance on screen distance, outdoor time and follow-up intervals as vision changes.',
  },
  {
    title: 'Fit that actually stays on',
    description: 'Adjustable temple tips and correct bridge sizing so glasses stop sliding down.',
  },
]

/* ------------------------------------------------------------------ */
/*  Brands — TODO: confirm exactly which are stocked before launch      */
/* ------------------------------------------------------------------ */

export const brands = [
  'Ray-Ban',
  'Oakley',
  'Vogue Eyewear',
  'Carrera',
  'Police',
  'Fastrack',
  'IDEE',
  'Essilor',
  'ZEISS',
  'Hoya',
  'Crizal',
  'Transitions',
  'Bausch + Lomb',
  'Acuvue',
  'Alcon',
]

/* ------------------------------------------------------------------ */
/*  Why choose us                                                      */
/* ------------------------------------------------------------------ */

export const differentiators = [
  {
    icon: 'badge-check',
    title: 'Optometrist-led, not sales-led',
    description:
      'Your prescription is determined by testing, and the lens recommendation follows from it — in that order.',
  },
  {
    icon: 'gem',
    title: 'Curated, not crowded',
    description:
      'A tightly edited wall of frames we would wear ourselves, instead of a thousand near-identical options.',
  },
  {
    icon: 'shield-check',
    title: 'Genuine brands only',
    description:
      'Authentic frames and branded lenses with warranty documentation handed to you at billing.',
  },
  {
    icon: 'map-pin',
    title: 'Right in the centre of Indore',
    description:
      'Trade Centre Road, South Tukoganj — a minute from Treasure Island Mall, with parking on the strip.',
  },
  {
    icon: 'refresh-cw',
    title: 'Aftercare that continues',
    description:
      'Free adjustments, cleaning and fit checks for the life of the frame. Walk in whenever it feels off.',
  },
  {
    icon: 'clock',
    title: 'Quick turnaround',
    description:
      'Most single-vision prescriptions fitted the same day; specialised lenses sourced and updated by phone.',
  },
]

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/*  ⚠ PLACEHOLDER COPY — replace with real, consented customer quotes  */
/*  or pull live Google reviews before publishing.                     */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  quote: string
  name: string
  context: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The eye test was thorough and unhurried. They explained why a progressive lens suited me instead of just pushing the costliest option.',
    name: 'Placeholder — Customer A',
    context: 'Progressive lenses',
    initials: 'A',
  },
  {
    quote:
      'Picked up a pair of polarised sunglasses with my power in them. The fitting was adjusted twice until it sat perfectly.',
    name: 'Placeholder — Customer B',
    context: 'Prescription sunglasses',
    initials: 'B',
  },
  {
    quote:
      'Took my daughter for her first pair. Patient with a restless eight-year-old, and the frame has survived a full school year.',
    name: 'Placeholder — Customer C',
    context: 'Kids eyewear',
    initials: 'C',
  },
  {
    quote:
      'Good selection of frames without being overwhelming, and the staff actually tell you what suits your face.',
    name: 'Placeholder — Customer D',
    context: 'Frame styling',
    initials: 'D',
  },
  {
    quote:
      'Switched to daily disposables here. The fitting session covered hygiene properly, which no one had done before.',
    name: 'Placeholder — Customer E',
    context: 'Contact lens fitting',
    initials: 'E',
  },
  {
    quote:
      'Went in with a bent frame expecting to buy new. They realigned it in ten minutes and did not charge for it.',
    name: 'Placeholder — Customer F',
    context: 'Repairs',
    initials: 'F',
  },
]

/* ------------------------------------------------------------------ */
/*  Gallery                                                            */
/*  `src` is intentionally empty: the <Frame> component renders        */
/*  generated optical artwork until real photographs are dropped in.   */
/* ------------------------------------------------------------------ */

export type GalleryItem = {
  caption: string
  detail: string
  src?: string
  span?: 'wide' | 'tall'
}

export const gallery: GalleryItem[] = [
  { caption: 'The frame wall', detail: 'Designer & house collections', span: 'wide' },
  { caption: 'Testing room', detail: 'Computerised refraction' },
  { caption: 'Sunglasses bar', detail: 'Polarised & UV400' },
  { caption: 'Lens counter', detail: 'Coatings & edging', span: 'tall' },
  { caption: 'Contact lens desk', detail: 'Fitting & training' },
  { caption: 'Kids corner', detail: 'Flexible frames' },
  { caption: 'Storefront', detail: 'Trade Centre Road', span: 'wide' },
  { caption: 'Fitting bench', detail: 'Adjustments & repairs' },
]

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    q: 'Do I need an appointment for an eye test?',
    a: 'Walk-ins are welcome during opening hours. If you would rather not wait, message us on WhatsApp and we will hold a slot for you — evenings and weekends fill up fastest.',
  },
  {
    q: 'How long does a full eye test take?',
    a: 'Around 15 to 20 minutes for a standard refraction. Add a little more if you are being fitted for contact lenses or progressives for the first time, since those need extra measurements.',
  },
  {
    q: 'How soon will my glasses be ready?',
    a: 'Most single-vision prescriptions are fitted the same day. Progressive, high-index and specialised coated lenses are ordered in and typically take two to five working days — we call you the moment they arrive.',
  },
  {
    q: 'Can I use my existing prescription?',
    a: 'Yes, if it was issued within the last year. Bring the printout or the old pair and we will read the power off it. If it is older than that, we recommend a fresh test first.',
  },
  {
    q: 'Do you make prescription sunglasses?',
    a: 'We do. Your power can be surfaced into tinted, gradient or polarised lenses and fitted into most sunglass frames — subject to the frame’s curvature and your power range, which we will check in store.',
  },
  {
    q: 'Are contact lenses safe for first-time wearers?',
    a: 'They are, provided the fit is measured and hygiene is followed. We take base-curve and diameter measurements, then take you through insertion, removal and cleaning before you leave with your first pair.',
  },
  {
    q: 'What should I bring for a child’s eye test?',
    a: 'Any previous prescription or spectacles, plus a note of what the school or teacher observed. Children are tested with age-appropriate charts, and we keep the session short and relaxed.',
  },
  {
    q: 'Do you repair frames bought elsewhere?',
    a: 'Yes. Screws, nose pads, hinge alignment and cleaning are handled at the fitting bench. Where a part has to be sourced, we will tell you the cost and timeline upfront.',
  },
]
