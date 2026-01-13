import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container border-bottom'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-2' style={{marginLeft:"30px"}}>To create a ticket, select a relevant topic</h1>
                <div className='col-4 p-5 ticket-links'>
                    <p className='fs-5 mb-5'><i class="fa fa-plus-circle" aria-hidden="true" style={{marginRight:"5px"}}></i> Account Opening</p>
                    <a href="" style={{textDecoration:"none"}}>Online Account Opening</a>
                    <a href="" style={{textDecoration:"none"}}>Offline Account Opening</a>
                    <a href="" style={{textDecoration:"none"}}>Company, Partnership and HUF Account Opening</a>
                    <a href="" style={{textDecoration:"none"}}>NRI Account Opening</a>
                    <a href="" style={{textDecoration:"none"}}>Charges at Zerodha</a>
                    <a href="" style={{textDecoration:"none"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                    <a href="" style={{textDecoration:"none"}}>Getting Started</a>
                </div>
                <div className='col-4 p-5 ticket-links'>
                    <p className='fs-5 mb-5'><i class="fa fa-user" aria-hidden="true" style={{marginRight:"5px"}}></i> Your Zerodha Account</p>
                    <a href="" style={{textDecoration:"none"}}>Login Credentials</a>
                    <a href="" style={{textDecoration:"none"}}>Account Modification and Segment Addition</a>
                    <a href="" style={{textDecoration:"none"}}>DP ID and bank details</a>
                    <a href="" style={{textDecoration:"none"}}>Your Profile</a>
                    <a href="" style={{textDecoration:"none"}}>Transfer and conversion of shares</a>
                </div>
                <div className='col-4 p-5 ticket-links'>
                    <p className='fs-5 mb-5'><i class="fa fa-bar-chart" aria-hidden="true" style={{marginRight:"5px"}}></i> Your Zerodha Account</p>
                    <a href="" style={{textDecoration:"none"}}>Margin/Leverage, Product and Order types</a>
                    <a href="" style={{textDecoration:"none"}}>Kite Web and Mobile</a>
                    <a href="" style={{textDecoration:"none"}}>Trading FAQs</a>
                    <a href="" style={{textDecoration:"none"}}>Corporate Actions</a>
                    <a href="" style={{textDecoration:"none"}}>Sentinel</a>
                    <a href="" style={{textDecoration:"none"}}>Kite API</a>
                    <a href="" style={{textDecoration:"none"}}>Pi and other platorms</a>
                    <a href="" style={{textDecoration:"none"}}>Stockreports+</a>
                    <a href="" style={{textDecoration:"none"}}>GTT</a>
                </div>


                <div className='col-4 p-5 ticket-links'>
                    <p className='fs-5 mb-5'><i class="fa fa-credit-card" aria-hidden="true" style={{marginRight:"5px"}}></i> Funds</p>
                    <a href="" style={{textDecoration:"none"}}>Adding Funds</a>
                    <a href="" style={{textDecoration:"none"}}>Funds Withdrawal</a>
                    <a href="" style={{textDecoration:"none"}}>eMandates</a>
                    <a href="" style={{textDecoration:"none"}}>Adding Bank Accounts</a>
                </div>
                <div className='col-4 p-5 ticket-links'>
                    <p className='fs-5 mb-5'><i class="fa fa-circle-o-notch" aria-hidden="true" style={{marginRight:"5px"}}></i> Console</p>
                    <a href="" style={{textDecoration:"none"}}>Reports</a>
                    <a href="" style={{textDecoration:"none"}}>Ledger</a>
                    <a href="" style={{textDecoration:"none"}}>Portfolio</a>
                    <a href="" style={{textDecoration:"none"}}>60 Day Challenge</a>
                    <a href="" style={{textDecoration:"none"}}>IPO</a>
                    <a href="" style={{textDecoration:"none"}}>Referral Program</a>
                </div>
                <div className='col-4 p-5 ticket-links'>
                    <p className='fs-5 mb-5'><i class="fa fa-circle-thin" aria-hidden="true" style={{marginRight:"5px"}}></i> Coin</p>
                    <a href="" style={{textDecoration:"none"}}>Understanding Mutual Funds</a>
                    <a href="" style={{textDecoration:"none"}}>About Coin</a>
                    <a href="" style={{textDecoration:"none"}}>Buying and Selling through Coin</a>
                    <a href="" style={{textDecoration:"none"}}>Starting an SIP</a>
                    <a href="" style={{textDecoration:"none"}}>Managing your Portfolio</a>
                    <a href="" style={{textDecoration:"none"}}>Coin App</a>
                    <a href="" style={{textDecoration:"none"}}>Moving to Coin</a>
                    <a href="" style={{textDecoration:"none"}}>Goverment Securities</a>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;