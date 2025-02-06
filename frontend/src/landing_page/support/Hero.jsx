import React from 'react'

const Hero = () => {
  return (
   <section className="container-fluid mb-5" id="supportHero">
    <div className="p-3 mt-5" id="supportWrapper">
      <h4 className='mt-3'>Support Protal</h4>
      <a href="" style={{textDecoration:"none",color:"white"}} className='fs-5 mt-3'>Track Tickets</a>
    </div>
    <div className="row p-5 ">
      <div className="col-6 p-5" id="supportHeroLeft">
    <h1 className='fs-3'>
      Search for an asswer or browse help topics to create a ticket
    </h1>
    <input type="text"  placeholder=' Eg: How do I activate F&O, why is my order getting rejected...'/> <br />
    <a href="">Track account opening</a> 
     <a href="">Track segment activation</a>
    <a href=""> Intraday margins</a>
    <a href="">Kite user manual</a>
      </div>
      <div className="col-6 p-5" id="supportHeroRight">
        <h1 className='fs-3 mx-5 '>Featured</h1>
        <ol className='mx-5 '>
          <li className='mb-2'><a href="">Winding down of StackFlow Commodities Pvt. Ltd.</a> </li>
          <li ><a href="">
          Surveillance measure on scrips - February 2025</a></li>
        </ol>
        
     
      </div>
    </div>
   </section>
  )
}

export default Hero