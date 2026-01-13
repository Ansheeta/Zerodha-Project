import React from 'react';
function Pricing() {
    return ( 
        <div className="container p-3 mt-5 mb-5">
  <div className="row align-items-center p-3">

    <div className="col-md-6 mb-4 mb-md-0 p-3">
      <h1 className=" fs-1 mb-3">Unbeatable pricing</h1>
      <p className="text-muted">
        We pioneered the concept of discount broking and price transparency in India.
        Flat fees and no hidden charges.
      </p>
      <a href="#" className="text-primary text-decoration-none">
        See pricing <i className="fa fa-long-arrow-right ms-1" />
      </a>
    </div>


    <div className="col-md-6">
  <div className="pricing-grid">

    <div className="pricing-item">
      <img src="Media/images/pricing-eq.svg" className="pricing-img" />
      <p>Free account<br />opening</p>
    </div>

    <div className="pricing-item">
      <img src="Media/images/pricing-eq.svg" className="pricing-img" />
      <p>Free equity delivery<br />and direct mutual funds</p>
    </div>

    <div className="pricing-item">
      <img src="Media/images/other-trades.svg" className="pricing-img" />
      <p>Intraday and<br />F&O</p>
    </div>

  </div>
</div>


  </div>
</div>

     );
}

export default Pricing;