import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage'
import Navbar from '../Navbar'
import Footer from '../Footer'
import OpenAccount from '../OpenAccount'

let PricingPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='container p-5 mb-5 '>
<div className="row text-center">
        {/* <img src="/media/images/heroHome.png" alt="Hero Image"  className='mb-5'/> */}
        <h1 className='mt-5 mb-3'> Open a StockFlow account</h1>
        <p className='text-muted'> Modern platforms and apps, &#8377; 0 investments, and flat &#8377; 20 intraday and F%O trandes</p>
        <button className='p-1 btn btn-primary fs-5 mb-5 mt-3' style={{width:"15%", margin:"0 auto"}}>Signup Now</button>
    
</div>
    </div>
    <Brokerage/>
    <Footer/>
    </>
  )
}

export default PricingPage