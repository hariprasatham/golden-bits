import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import OfferSection from '../components/OfferSection'
import WhyUsSection from '../components/WhyUsSection'
import MenuSection from '../components/MenuSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'
import ScrollingImageSectionHome from '../components/ScrollingImageSectionHome'
import ProductList from '../components/ProductList'
import CustomersSection from '../components/CustomersSection'

const Home = () => {
  return (
    <div>
        <Header />
        <main>
            <div id="home">
              <HeroSection />
            </div>
            <div id="about">
              <AboutSection />
            </div>
            <div id="offer">
              <OfferSection />
            </div>
            <div id="why-us">
              <WhyUsSection />
            </div>
            <div id="menu">
              <ProductList />
            </div>
            <div>
              <ScrollingImageSectionHome />
            </div>
            <div id="menu">
              <CustomersSection />
            </div>
            {/* <div id="gallery">
              <GallerySection />
            </div>*/}
            <div id="contact">
              <ContactSection />
            </div> 
        </main>
        <Footer />
    </div>
  )
}

export default Home