import React from 'react';
function  ProductsSection() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row product-1 mb-5'>
                 <div className='col-6' style={{marginRight:"100px"}}>
                    <img src="Media\images\kite.png" style={{width:"100%"}}/>
                 </div>
                 <div className='col-4 ml-10 p-5'>
                    <h1 className='mb-4 fs-2'>Kite</h1>
                    <p >
                        Our ultra-fast flagship trading platform with streaming market data, 
                        advanced charts, an elegant UI, and more. Enjoy the Kite experience 
                        seamlessly on your Android and iOS devices.
                    </p>
                    <div className='row mb-5'>
                         <div className='col'>
                             <a href="" style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                         </div>
                         <div className='col'>
                            <a href=""style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                         </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <img src="Media\images\googlePlayBadge.svg"/>
                        </div>
                         <div className='col'>
                            <img src="Media\images\appstoreBadge.svg"/>
                        </div>
                    </div>
                 </div>
            </div>

            <div className='row product-2 mt-5'>
                 <div  className='col-4 ml-10 p-5' >
                    <h1 className='mb-4 fs-2 mt-5'>Console</h1>
                    <p >
                        The central dashboard for your Zerodha account. Gain insights into your 
                        trades and investments with in-depth reports and visualisations.
                    </p>
                    <a href=""style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                 </div>
                 <div className='col-6 ' style={{marginLeft:"100px"}} >
                    <img src="Media\images\console.png" style={{width:"100%"}}/>
                 </div>
            </div>

            <div className='row product-1 mb-5 ml-5'>
                 <div className='col-6' style={{marginRight:"100px"}}>
                    <img src="Media\images\coin.png" style={{width:"100%"}}/>
                 </div>
                 <div className='col-4 ml-10 p-5'>
                    <h1 className='mb-4 fs-2'>Coin</h1>
                    <p >
                       Buy direct mutual funds online, commission-free, delivered directly to your
                        Demat account. Enjoy the investment experience on your Android and iOS 
                        devices.
                    </p>
                    <a href="" style={{textDecoration:"none"}}>Coin <i class="fa fa-long-arrow-right mb-4" aria-hidden="true"></i></a>
                    <div className='row'>
                        <div className='col'>
                            <img src="Media\images\googlePlayBadge.svg"/>
                        </div>
                         <div className='col'>
                            <img src="Media\images\appstoreBadge.svg"/>
                        </div>
                    </div>
                 </div>
            </div>


            
            <div className='row product-2 mt-5'>
                 <div  className='col-4 ml-10 p-5' >
                    <h1 className='mb-4 fs-2 mt-5'>Kite Connect API</h1>
                    <p >
                        Build powerful trading platforms and experiences with our super simple 
                        HTTP/JSON APIs. If you are a startup, build your investment app and showcase
                        it to our clientbase.
                    </p>
                    <a href=""style={{textDecoration:"none"}}>Kite Connect  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                 </div>
                 <div className='col-6 ' style={{marginLeft:"100px"}} >
                    <img src="Media\images\landing.svg" style={{width:"100%"}}/>
                 </div>
            </div>

            <div className='row product-1 mt-5 mb-5 ml-5'>
                 <div className='col-4' style={{marginRight:"150px", marginLeft:"150px"}}>
                    <img src="Media\images\varsity-products.svg" style={{width:"100%"}}/>
                 </div>
                 <div className='col-4 ml-10 p-5'>
                    <h1 className='mb-4 fs-2'>Varsity mobile</h1>
                    <p >
                      An easy to grasp, collection of stock market lessons with in-depth coverage 
                      and illustrations. Content is broken down into bite-size cards to help you 
                      learn on the go.
                    </p>
                    <div className='row'>
                        <div className='col'>
                            <img src="Media\images\googlePlayBadge.svg"/>
                        </div>
                         <div className='col'>
                            <img src="Media\images\appstoreBadge.svg"/>
                        </div>
                    </div>
                 </div>
            </div>

            <h4 className='text-center fs-5 mt-5 mb-5'> Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h4>
        </div>
     );
     
}

export default ProductsSection;