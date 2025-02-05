import React from 'react'

const Universe = () => {
  return (
    <div className="container ">
    <div className="row">
      <h1 className='text-center mb-3 text-muted'>The StackFlow Universe</h1>
      <p className='text-center mb-3 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
      <div className="col-4 mt-5 p-3 text-center">
      <img src="media/images/smallcaseLogo.png" alt="" />
      <p className='text-small text-muted mt-2'>Thematic investment platform</p>
      </div>
      <div className="col-4 mt-5 p-3 text-center">
      <img src="media/images/streakLogo.png" alt=""  style={{height:"3.1rem", width:"10rem"}} />
      <p className='text-small text-muted mt-3'>Algo & stratergy platform</p>
      </div>
      <div className="col-4 mt-5 p-3 text-center">
        <img src="media/images/sensibullLogo.svg" alt="" style={{height:"3.1rem", width:"10rem"}} />
        <p className='text-small text-muted mt-3'>options trading platform</p>
      </div>
      <div className="col-4 mt-5 p-3 text-center">
      <img src="media/images/zerodhaFundhouse.png" alt="" style={{height:"3.1rem", width:"10rem"}} />
      <p className='text-small text-muted mt-3'>Assect management</p>
      </div>
      <div className="col-4 mt-5 p-3 text-center">
      <img src="media/images/goldenpiLogo.png" alt="" />
      <p className='text-small text-muted'>Bond trading platform</p>
      </div>
      <div className="col-4 mt-5 p-3 text-center">
        <img src="media/images/dittoLogo.png" alt=""style={{height:"3.1rem", width:"9rem"}}  />
        <p className='text-small text-muted mt-3'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Insurance</p>
      </div>
      <button className='p-1 btn btn-primary fs-5 mb-5 text-center' style={{width:"15%", margin:"0 auto"}}>Sign up for free</button>
    </div>
   

  </div>
  )
}

export default Universe