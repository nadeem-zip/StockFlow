import React from 'react'
import { Link } from 'react-router-dom'
let Footer = () => {
  return (
    <>
    <div className='container-fluid mt-5 border-top '  style={{backgroundColor:"#fbfbfb"}}>
    <div className='container'>
      <div className="row mt-5">
        <div className=" footer-icons col ">
          <img src="/media/images/logo.png" alt="Logo" style={{width:"50%"}}/>
          <p> &copy; 2010-2025, Not StackFlow Broking Ltd. <br /> All rights are reserved</p>
          <div className='social-icons' >
          <a href="https://www.x.com/" target='_blank'> <i class="fa-brands fa-x-twitter"></i> </a>
          <a href="https://www.facebook.com/" target='_blank'> <i class="fa-brands fa-facebook"></i></a> 
          <a href="https://www.instagram.com/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
         <a href="https://www.linkedin.com/" target='_blank'> <i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.youtube.com/" target='_blank'>  <i class="fa-brands fa-youtube"></i></a>
        <hr />
          </div>
        

        </div>
        <div className="footer-links col">
          <p>Company</p>
          <Link to="/about">About</Link> <br />
          <Link to="/products">Products</Link> <br />
          <Link to="/">Referral programme</Link> <br />
          <Link to="/">Careers</Link> <br />
          <Link to="/">StackFlow.tech</Link> <br />
          <Link to="/">Press & Media</Link> <br />
          <Link to="/">StockFlow cares (CSR)</Link> <br />
        </div>
        <div className="footer-links col">
          <p>Support</p>
          <Link to="/support" >Contact</Link> <br />
          <Link to="/support">Support portal</Link> <br />
          <Link to="/about">Z-connect blog</Link> <br />
          <Link to="/pricing">List of charges</Link> <br />
          <Link to="/">Downloads & resources</Link> <br />
        </div>
        <div className="footer-links col">
          <p>Accounts</p>
          <Link to="/signup">Open an account</Link> <br />
          <Link to="/">Fund transfer</Link> <br />
          <Link to="/">60 day challenge</Link> <br />
        </div>
      </div>
      <div className="mt-5 fs-6">
        <p className='text-muted'>StackFlow Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through StackFlow Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through StackFlow Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: StackFlow Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@StackFlow.com, for DP related to dp@StackFlow.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p className='text-muted'>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
        </p>
        <p className='text-muted'>
        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
        </p>
        <p className='text-muted'>
        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month
        
        </p>
        <p className='text-muted'>
        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of StackFlow and offering such services, please create a ticket here.
        </p>
      </div>
      <div className=" footer-last row mb-5">
        <div className="col">
          <a href="" className='text-muted'> NSE</a>
        </div>
        <div className="col">
<a href="" className="text-muted"> BSE </a>
        </div>
        <div className="col">
          <a href="" className="text-muted">MCX </a>
        </div>
        <div className="col"><a href="" className="text-muted">Terms</a></div>
        <div className="col"><a href="" className="text-muted"> Policies </a></div>
        <div className="col"><a href="" className="text-muted">Privacy poicy</a></div>
        <div className="col">
          <a href="" className="text-muted"> Disclosures</a></div>
        <div className="col"> <a href="" className="text-muted">For investor</a></div>
        <div className="col"> <a href="" className="text-muted">Investor charts</a></div>
      </div>

    </div>
    </div>
   
    </>
  )
}

export default Footer