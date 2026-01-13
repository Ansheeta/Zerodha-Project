import React from 'react';
function People() {
    return ( 
        <div className='container border-bottom p-5'>
            <div className='row p-3'>
                <h1 className='text-center fs-3 '>
                    People
                </h1>
             </div>
               <div className='row p-3' >
                  <div className='col-6 p-3 text-center'>
                     <img src="Media\images\nithinKamath.jpg" style={{borderRadius:"100%",width:"50%"}}/>
                     <h4 className='mt-4 fs-3'>Nithin Kamath</h4>
                     <h6 className='mt-2 fs-5 text-muted'>Founder, CEO</h6>
                  </div>
                  <div className='col-6 p-3 text-muted' style={{lineHeight:"1.8",fontSize:"1.1em"}}>
                       <p className='mb-4 '>
                         Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles 
                         he faced during his decade long stint as a trader. Today, Zerodha has 
                         changed the landscape of the Indian broking industry.
                       </p>
                       <p className='mb-4 '>
                         He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
                          the Market Data Advisory Committee (MDAC).
                       </p>
                       <p className='mb-4 '>
                         Playing basketball is his zen.
                       </p>
                        <p className='mb-4 '>
                         Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a>
                       </p>
                  </div>
             </div>
        </div>
     );
}

export default People;