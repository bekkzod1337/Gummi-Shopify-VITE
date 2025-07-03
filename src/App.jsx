import { useState } from 'react'
import './Index.css' //
import Header from './components/Header'
import Slider from './components/Slider'
import DealBanner from './components/DealBanner'
import SpecialCollections from './components/SpecialCollections'
import Services from './components/Services'
import HealthSection from './components/HealthSection'
import NewArrivalsSection from './components/NewArrivalsSection'
import RealReviewsSection from './components/RealReviewsSection'
import ShopAll from './components/ShopAllSection'
import NewsSection from './components/NewsSection'
import InstagramGallery from './components/InstagramGallery'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Header />
    <Slider />
    <DealBanner />
    <SpecialCollections />
    <Services />
    <HealthSection />
    <NewArrivalsSection />
    <RealReviewsSection />
    <ShopAll />
    <NewsSection />
    <InstagramGallery />  
    <Footer />
    </>
  )
}

export default App
