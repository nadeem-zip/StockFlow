import React from 'react'

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row border-top mt-5 p-5">
        <div className="col-8">
        <a href=""  style={{textDecoration:"none"}}> <h3 className=' text-center fs-5'>Brokerage calculator</h3></a> 
        <ul style={{textAlign:"left", lineHeight:"3.0", fontSize:"1.5rem"} }className="text-muted fs-6">
          <li>Call & Trade and RMS auto-sqareoff: Additional charges of &#8377; 50+GST per order </li>
          <li>Digital contract notes will be sent via e-mail</li>
          <li>Physical copies of contract notes, if required shall be charged &#8377; 20 per contract note. Courier charges apply </li>
          <li>For NRI accounts (non-PIS), 0.5% or &#8377; 200 per execution order for equity (whichever is lower)</li>
          <li> if the account is in debt balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per execution order</li>
        </ul>
        </div>
        <div className="col-4">
         <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>list of charges</h3></a> 
        </div>
      </div>
    </div>
  )
}

export default Brokerage