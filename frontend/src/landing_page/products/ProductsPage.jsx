import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

const ProductsPage = () => {
  return (
    
    <>
    <Navbar/>
    <Hero/>
    <LeftSection imageURL="media/images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="Try demo " learnMore="Learn more " appStore="" googlePlay=""/>
    <RightSection imageURL="media/images/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="Learn More"/>
    <LeftSection imageURL="media/images/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="Try demo " learnMore="Learn more " appStore="" googlePlay=""/>
    <RightSection imageURL="media/images/kiteconnect.png" productName="Kite Connect Api" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." learnMore="Learn More"/>
    <LeftSection imageURL="media/images/varsity.png" productName="Varsity" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="Try demo " learnMore="Learn More" appStore="" googlePlay=""/>
    <h5 className='text-center mb-5 mt-5 text-muted'>Want to know more about our technology stack ? check out the StackFlow.tech blog</h5>
    <Universe/>
    
    <Footer/>
    </>
  )
}

export default ProductsPage