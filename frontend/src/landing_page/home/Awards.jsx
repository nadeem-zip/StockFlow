import React from 'react'

let Awards = () => {
  return (
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-6 p-5">
                <img src="/media/images/largestBroker.svg" alt=" Largest Brokerage" />
            </div>
            <div className="col-6 p-5 mt-5">
                <h1>Largest stock broker in India</h1>
                <p className='mb-5'>2+million stockflow clients contribute to over 15% of all retail order volumes in India by trading and investing in:</p>
                <div className="row">
                    <div className="col-6">
                    <ul>
                    <li>
                        <p>Future and Options</p>
                    </li>
                    <li>
                        <p>Commodity derevatives</p>
                    </li>
                    <li>
                        <p>Currency derevatives</p>
                    </li>
                </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                    <li>
                        <p>Stocks and IPOs</p>
                    </li>
                    <li>
                        <p>Direct mutual funds</p>
                    </li>
                    <li>
                        <p>Bonds and Government security</p>
                    </li>
                </ul>
                        
                    </div>
                </div>
                <img src="/media/images/pressLogos.png" alt="Press Logos"  style={{width:"90%",}}/>
            </div>
        </div>
    </div>
  )
}

export default Awards