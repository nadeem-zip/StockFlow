import React from 'react'

let Team = () => {
  return (
    
    <div className="container">
      <div className="row p-3 mt-5 ">
        <hr />
        <h1 className=' text-center ' style={{marginTop:"2rem"}}>People</h1>
      </div>
      <div className="row p-3 text-muted" style={{fontSize:"1.2rem" ,lineHeight:"1.8"}}>
        <div className="col-6 p-3 text-center">
          <img src="/media/images/darth.jpg" alt="CEO" style={{borderRadius:"100%", height:"20rem",width:"20rem"}}/>
          <h4 className='mt-5'>Darth Vader</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 mt-5">
          <p>Darth Vader bootstrapped and founded Stockflow in 2024 to overcome the hurdles he faced during his decade long stint as a trader. Today, StockFlow has changed the landscape of the Indian broking industry.</p> <br />
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p><br />
          <p>Playing basketball is his zen.</p><br />

        </div>
      </div>
    </div>
  )
}

export default Team