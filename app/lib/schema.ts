import { addressOneLine, faqs, services, site } from './site'

/**
 * structured data (schema.org). Emitted as a single @graph so Google can
 * resolve the Optician, the Website and the FAQ page in one pass.
 */
export const buildJsonLd = () => {
  const businessId = `${site.url}/#optician`

  const optician = {
    '@type': ['Optician', 'LocalBusiness', 'Store'],
    '@id': businessId,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phoneE164,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    image: `${site.url}/og.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    hasMap: site.links.directions,
    sameAs: [site.links.googleProfile, site.links.instagram, site.links.facebook].filter(Boolean),
    openingHoursSpecification: site.openingHoursSpec.map((s) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    areaServed: { '@type': 'City', name: 'Indore' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Optical services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.description },
      })),
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: 'en-IN',
    publisher: { '@id': businessId },
  }

  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${site.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [optician, website, faqPage],
  })
}

export const businessSummary = `${site.name} — ${site.tagline}. ${addressOneLine}.`
