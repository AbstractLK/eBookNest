import React from 'react'
import { HeroSection } from './components/HeroSection'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonials'

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <Testimonials />
      <Faq/>
    </main>
  )
}
