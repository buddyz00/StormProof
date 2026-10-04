import { About } from '@/components/site/about'
import { Blog } from '@/components/site/blog'
import { Challenge } from '@/components/site/challenge'
import { FeaturedIn } from '@/components/site/featured-in'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Newsletter } from '@/components/site/newsletter'
import { Pillars } from '@/components/site/pillars'
import { Programs } from '@/components/site/programs'
import { Testimonials } from '@/components/site/testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <Programs />
        <Challenge />
        <Blog />
        <About />
        <Testimonials />
        <Pillars />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
