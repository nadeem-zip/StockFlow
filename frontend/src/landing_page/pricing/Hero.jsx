import React from 'react'

const Hero = () => {
  return (
    <div className='container '>
    <div className="row text-center border-bottom p-5 mt-5">
            <h1 className='mt-5'> Pricing</h1>
            <p className='fs-5 text-muted mt-5'>Free equity investments and flat  &#8377;20 on intraday and F&O trades </p>
    </div>
    <div className="row p-5 mt-5 text-center">
      <div className="col-4 p-5">
<img src="/media/images/pricingEquity.svg" alt="" />
<h1 className='fs-2'>Free equity delivery</h1>
<p className='text-muted fs-5'>All equity investments (NSE, BSE), are absolutely free -&#x20b9; 0 brokerage</p>
      </div>
      <div className="col-4 p-6">
      <img src="/media/images/intradayTrades.svg" alt="" />
<h1 className='fs-2'>Intraday and F&O trades</h1>
<p className='text-muted fs-6'> Flat -&#x20b9; 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat -&#x20b9; 20 on all option trades.</p>

      </div>
      <div className="col-4 p-6 ">
      <img src="/media/images/pricingEquity.svg" alt="" />
<h1 className='fs-2'>Free direct MF</h1>
<p className='text-muted fs-5'>All direct mutual fund investments are absolutely free -&#x20b9; 0 commissions & DP charges.</p>
      </div>
    </div>
        </div>
  )
}

export default Hero