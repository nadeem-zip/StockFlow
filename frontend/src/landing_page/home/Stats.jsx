import React from 'react'

let Stats = () => {
  return (
    <div className="container p-5 mt-5">
        <div className="row">
            <div className="col-6 p-5">
                <h1 className='
                fs-2 mb-5'>Trust with confidence</h1>
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>
                    Thats why 13+crore customers trust Stockflow with &#x20b9; 2.5+lakh crores worth of equity investments
                </p>
                <h2 className='fs-4'>No spam or gimmiks</h2>
                <p className="text-muted">
                   No gimmicks, spam, "gamification", or annoying push notifications. Hign quality apps that you use at your pace, the way you like.
                </p>
                <h2 className='fs-4'>The Stockflow universe</h2>
                <p className='text-muted'>
                   Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specified to your needs.
                </p>
                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'> 
                   with intitiatives ike Nudge and kill Switch, we dont just facilitate transcations, but actively help you do better with your money
                </p>
            </div>
            <div className="col-6 p-5">
                <img src="/media/images/ecosystem.png" alt="" style={{width:"85%"}}/>
                <div className='text-center p-5'>
                <a className="mx-5" href="" style={{textDecoration:"none"}}>Explore our products <i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
            <a href="" style={{textDecoration:"none"}}>Try Kite</a>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Stats