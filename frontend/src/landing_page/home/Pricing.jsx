import React from 'react'

let Pricing = () => {
  return (
  <div className="container mb-5 mt-5">
    <div className="row">
        <div className="col-4">
            <h1 className='mb-3'>Unbeatable pricing</h1>
            <p>We pioneered the concept of discount broking and price transparency in india. Flat fees and no hidden charges</p>
            <a className="" href="" style={{textDecoration:"none"}}>See pricing <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
            <div className="row text-center">
                <div className="col border p-4">
                    <h1 className='mb-3'> &#8377; 0</h1>
                    <p>Free quity delivery and <br />direct mutual funds</p>
                </div>
                <div className="col border p-4">
                <h1 className='mb-3'>&#8377; 20</h1>
                <p>Intraday and F&O</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Pricing