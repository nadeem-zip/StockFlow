import React from 'react'

const RightSection = ({imageURL, productName, productDescription, learnMore}) => {
  return (
    <>
    <div className="container ">
    <div className="row">
    
      <div className="col-6 p-5 mt-5 mb-3">
        <h1 className='mt-5'>{productName}</h1>
        <p>{productDescription}</p>
        <div >
        <a href={learnMore} >Learn More <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
        </div>
      </div>
      <div className="col-6 mt-5">
        <img src={imageURL} alt="image"  />
      </div>
    </div>

  </div>
  </>
  )
}

export default RightSection