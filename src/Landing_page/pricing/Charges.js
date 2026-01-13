import React from 'react';
function Charges() {
    return (  
         <div className='container mt-5 p-5'>
            <div className='row text-center p-5'>
                <h1 className='fs-2'> Charges</h1>
                <p className='fs-5 text-muted mb-5'>List of all charges and taxes</p>
                <div className='row mt-5 charges-image p-5 '>
                     <div className='col-3' style={{marginRight:"50px",width:"30%"}}>
                         <img src="Media\images\pricingEquity.svg"/>
                         <h3 className='fs-4 mt-3'>Free equity delivery</h3>
                         <p className='mt-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely 
                            free — ₹ 0 brokerage.</p>
                     </div>
                     <div className='col-3' style={{marginRight:"50px", width:"30%"}}>
                         <img src="Media\images\intradayTrades.svg"/>
                         <h3 className='fs-4 mt-3'>Intraday and F&O trades</h3>
                         <p className='mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday 
                            trades across equity, currency, and commodity trades. Flat ₹20 on all
                             option trades.</p>
                     </div>
                     <div className='col-3 ' style={{width:"30%"}}>
                         <img src="Media\images\pricingEquity.svg"/>
                         <h3 className='fs-4 mt-3'>Free direct MF</h3>
                         <p className='mt-4 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP 
                            charges.</p>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Charges;
