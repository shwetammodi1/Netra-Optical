import { createRoute } from 'honox/factory'
import { Preloader } from '../components/Preloader'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { About } from '../components/sections/About'
import { Brands } from '../components/sections/Brands'
import { Contact } from '../components/sections/Contact'
import { ContactLenses } from '../components/sections/ContactLenses'
import { EyeTest } from '../components/sections/EyeTest'
import { Eyewear } from '../components/sections/Eyewear'
import { Faq } from '../components/sections/Faq'
import { Footer } from '../components/sections/Footer'
import { Gallery } from '../components/sections/Gallery'
import { Hero } from '../components/sections/Hero'
import { Kids } from '../components/sections/Kids'
import { Services } from '../components/sections/Services'
import { Sunglasses } from '../components/sections/Sunglasses'
import { Testimonials } from '../components/sections/Testimonials'
import { WhyUs } from '../components/sections/WhyUs'
import Lightbox from '../islands/Lightbox'
import Navbar from '../islands/Navbar'
import ScrollToTop from '../islands/ScrollToTop'

export default createRoute((c) =>
  c.render(
    <>
      <Preloader />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <Eyewear />
        <Sunglasses />
        <ContactLenses />
        <EyeTest />
        <Kids />
        <Brands />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <Faq />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
      <ScrollToTop />
      <Lightbox />
    </>,
    { path: '/' },
  ),
)
