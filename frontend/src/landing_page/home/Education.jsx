import React from 'react'

let Education = () => {
  return (
    
    <div className="container mt-5 mb-5">
        <div className="row">
             <div className="col-6">
             <img  src="/media/images/education.svg" alt="Education" style={{width:"85%"}}/>
                </div>

             <div className="col-6 ">
             <h1 className='mb-3'>Free and open market education</h1>
             <p className='mb-3'> Varsity, the largest online stock market education book in the world covering, everyting from basics to advance trading </p>
                <a className='mb-3' href="" style={{textDecoration:"none"}}>Varsity<i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                <p className='mt-3'> Trading Q&A, the most active trading and investment community in india for all your market related queries </p>
                <a className="mb-3" href="" style={{textDecoration:"none"}}>Trading Q&A <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Education