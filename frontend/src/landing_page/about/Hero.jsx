import React from 'react'

let Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 className='fs-2 text-center'> We poineered the discount broking model in India. <br />Now, we are breaking ground with our technology</h1>
      </div>
      <div className="row mt-5 border-top text-muted " style={{lineHeight:"1.8", fontSize:"1.1rem"}}>
      <div className="col-6 p-5">
        <p>We kick-started operations on the 15th of August, 2024, with the goal of eliminating all barriers that traders and investors face in India—be it cost, support, or technology. We named our company StockFlow, symbolizing the seamless and unrestricted movement of stocks, empowering traders with innovation and efficiency.</p> <br />
        <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p> <br />
        <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p><br />
      </div>
      <div className="col-6 p-5 ">
        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p> <br />
        <p>
          <a href="" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p> <br />
        <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
      </div>
      </div>
    </div>
  )
}

export default Hero