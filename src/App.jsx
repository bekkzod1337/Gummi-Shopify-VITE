import { useEffect, useState } from 'react'
import './Index.css'
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const images = Array.from(document.images) // Sahifadagi barcha <img> elementlar
    const total = images.length
    let loaded = 0

    if (total === 0) {
      setLoading(false)
      return
    }

    const onImageLoad = () => {
      loaded++
      if (loaded === total) {
        setLoading(false)
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        onImageLoad()
      } else {
        img.addEventListener("load", onImageLoad)
        img.addEventListener("error", onImageLoad) // error ham hisoblanadi
      }
    })
  }, [])

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen flex items-center justify-center bg-white fixed top-0 left-0 z-[9999]">
          <div className="animate-spin rounded-full border-4 border-[#f6623e] border-t-transparent h-16 w-16"></div>
        </div>
      ) : (
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
      )}
    </>
  )
}

export default App
