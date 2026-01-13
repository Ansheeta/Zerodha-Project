import React from 'react';
function Universe() {
    return (  
        <div className='container border-bottom mb-5 p-2'>
            <div className='row text-center mb-5'>
                <h3 className='mb-4'>The Zerodha Universe</h3>
                <p className='fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className='row text-center universe-icon mt-5'>
                <div className='col-3' style={{marginRight:"120px"}} >
                     <img src="Media\images\zerodhaFundhouse.png" style={{width:"90%"}}/>
                     <p className='mt-4 text-muted' style={{fontSize:"14px"}}>
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-3' style={{marginRight:"120px"}} >
                    <img src="Media\images\sensibullLogo.svg" style={{width:"90%"}}/>
                    <p className='mt-2 p-3 text-muted' style={{fontSize:"14px"}}>
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-3'>
                    <img src="Media\images\tijori.svg" style={{width:"90%"}}/>
                    <p className='mt-2 text-muted' style={{fontSize:"14px"}}>
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                   </p>
                </div>
            </div>

            <div className='row text-center universe-icon mt-5'>
                <div className='col-3' style={{marginRight:"120px"}} >
                     <img src="Media\images\streakLogo.png" style={{width:"90%"}}/>
                     <p className='mt-4 text-muted' style={{fontSize:"14px"}}>
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className='col-3' style={{marginRight:"120px"}} >
                    <img src="Media\images\smallcaseLogo.png" style={{width:"90%"}}/>
                    <p className='mt-2 p-3 text-muted' style={{fontSize:"14px"}}>
                       Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-3'>
                    <img src="Media\images\dittoLogo.png" style={{width:"70%"}}/>
                    <p className='mt-2 text-muted' style={{fontSize:"14px"}}>
                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                        Sign up for free
                   </p>
                </div>
            </div>

            <div className='text-center mt-5 mb-5'>
                <button className='btn btn-primary btn-lg text-center'> Sign up for free</button>
            </div>

            
        </div>
    );
}

export default Universe;