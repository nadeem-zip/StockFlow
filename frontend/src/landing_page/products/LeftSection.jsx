import React from 'react'

const LeftSection = ({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 mt-5">
          <img src={imageURL} alt="image"  />
        </div>
        <div className="col-6 p-5 mt-5 mb-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div >
          <a href={tryDemo}>Try Demo <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
          <a href={learnMore} style={{marginLeft:"2rem"}}>Learn More <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
          </div>
        <div className='mt-3'>  
          <a href={appStore} ><img src="media/images/googlePlayBadge.svg" alt="googleplay" style={{marginRight:"2rem"}} /></a>
        <a href={appStore}></a><img src="media/images/appstoreBadge.svg" alt="" /></div>
        </div>
      </div>

    </div>
  )
}

export default LeftSection