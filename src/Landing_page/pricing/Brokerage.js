import React from 'react';
function Brokerage() {
    return (
        <div className="container my-5 p-3 border-bottom">
            <div className='row mb-5 brokerage '>
                <div className='col-11 p-3'>
                    <h2 className='text-muted fs-3 mb-4'>Charges for account opening</h2>
                    <div className="zerodha-table mb-5">
                        <div className="row table-header">
                            <div className="col-8">Type of account</div>
                            <div className="col-4 text-end">Charges</div>
                        </div>

                        <div className="row table-row">
                            <div className="col-8">Online account</div>
                            <div className="col-4 text-end">
                                <span className="badge free-badge">FREE</span>
                            </div>
                        </div>

                        <div className="row table-row">
                            <div className="col-8">Offline account</div>
                            <div className="col-4 text-end">
                                <span className="badge free-badge">FREE</span>
                            </div>
                        </div>

                        <div className="row table-row">
                            <div className="col-8">NRI account (offline only)</div>
                            <div className="col-4 text-end">₹ 500</div>
                        </div>

                        <div className="row table-row last-row">
                            <div className="col-8">
                                Partnership, LLP, HUF, or Corporate accounts (offline only)
                            </div>
                            <div className="col-4 text-end">₹ 500</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row mt-5 brokerage '>
                <div className='col-11 p-3'>
                    <h2 className='text-muted fs-3 heading mb-4 mt-5'>Demat AMC (Annual Maintenance Charge)</h2>
                    <div className="amc-table">
                        <div className="row amc-header">
                            <div className="col-6">Value of holdings</div>
                            <div className="col-6">AMC</div>
                        </div>

                        <div className="row amc-row">
                            <div className="col-6">Up to ₹4 lakh</div>
                            <div className="col-6">
                                <span className="badge amc-free">FREE*</span>
                            </div>
                        </div>

                        <div className="row amc-row">
                            <div className="col-6">₹4 lakh – ₹10 lakh</div>
                            <div className="col-6">
                                ₹100 per year, charged quarterly*
                            </div>
                        </div>

                        <div className="row amc-row last-row">
                            <div className="col-6">Above ₹10 lakh</div>
                            <div className="col-6">
                                ₹300 per year, charged quarterly
                            </div>
                        </div>

                    </div>
                    <p className="mt-2" style={{ fontSize: "12px" }}>* Lower AMC is applicable only if the account qualifies as a Basic Services
                        Demat Account (BSDA). BSDA account holders cannot hold more than one demat
                        account. To learn more about BSDA, <a href="" style={{ textDecoration: "none" }}>click here</a>.</p>
                </div>
            </div>


            <div className='row mt-5 brokerage mb-5 '>
                <div className='col-11 '>
                    <h2 className='text-muted fs-3 heading mb-4 mt-5'>Charges for optional value added services</h2>

                    <div className="services-table">

                        <div className="row services-header">
                            <div className="col-4">Service</div>
                            <div className="col-4">Billing Frequency</div>
                            <div className="col-4">Charges</div>
                        </div>

                        <div className="row services-row">
                            <div className="col-4">Tickertape</div>
                            <div className="col-4">Monthly / Annual</div>
                            <div className="col-4">Free: 0 | Pro: 249/2399</div>
                        </div>

                        <div className="row services-row">
                            <div className="col-4">Smallcase</div>
                            <div className="col-4">Per transaction</div>
                            <div className="col-4">
                                Buy &amp; Invest More: 100 | SIP: 10
                            </div>
                        </div>

                        <div className="row services-row last-row">
                            <div className="col-4">Kite Connect</div>
                            <div className="col-4">Monthly</div>
                            <div className="col-4">
                                Connect: 500 | Personal: Free
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='row brokerage mt-5'>
                <div className='col-11'>
                    <h3 className='fs-3 text-muted'>Charges explained</h3>
                </div>
            </div>
            <div className="row brokerage mt-4 ">
                 <div className='col-6 p-3'>
                      <p style={{fontSize:"17px"}}>Securities/Commodities transaction tax</p>
                      <p style={{fontSize:"12px"}}>
                        Tax by the government when transacting on the exchanges. Charged as above
                        on both buy and sell sides when trading equity delivery. Charged only on
                        selling side when trading intraday or on F&O.
                      </p>
                      <p style={{fontSize:"12px"}}>
                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we 
                        charge. Important to keep a tab.
                      </p>



                      <p className='mt-4' style={{fontSize:"17px"}}>Transaction/Turnover Charges</p>
                      <p style={{fontSize:"12px"}}>
                        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                      </p>
                      <p style={{fontSize:"12px"}}>
                        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to 
                        ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged 
                        into a new group X w.e.f 01.12.2017)
                      </p>
                      <p style={{fontSize:"12px"}}>
                        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per
                         crore of gross turnover
                      </p>
                      <p style={{fontSize:"12px"}}>
                        BSE has revised transaction charges for group A, B and other non exclusive 
                        scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per 
                        crore of turnover on flat rate basis w.e.f. December 1, 2022.
                      </p>
                      <p style={{fontSize:"12px"}}>
                        BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per 
                        crore of gross turnover.
                      </p>



                      <p className='mt-4' style={{fontSize:"17px"}}>Call & trade</p>
                      <p style={{fontSize:"12px"}}>
                        Additional charges of ₹50 per order for orders placed through a dealer at 
                        Zerodha including auto square off orders.
                      </p>



                      <p className='mt-4' style={{fontSize:"17px"}}>Stamp charges</p>
                      <p style={{fontSize:"12px"}}>
                        Stamp charges by the Government of India as per the Indian Stamp Act of 
                        1899 for transacting in instruments on the stock exchanges and depositories.
                      </p>



                      <p className='mt-4' style={{fontSize:"17px"}}>NRI brokerage charges</p>
                      <p style={{fontSize:"12px"}}>
                          <ul>
                            <li>
                               For a non-PIS account, 0.5% or ₹50 per executed order for equity and
                                F&O (whichever is lower).
                            </li>
                            <li>
                                For a PIS account, 0.5% or ₹200 per executed order for equity (
                                    whichever is lower).
                            </li>
                            <li>
                                ₹500 + GST as yearly account maintenance charges (AMC) charges.
                            </li>
                          </ul>
                      </p>



                      <p className='mt-4' style={{fontSize:"17px"}}>Account with debit balance</p>
                      <p style={{fontSize:"12px"}}>
                        If the account is in debit balance, any order placed will be charged ₹40 
                        per executed order instead of ₹20 per executed order.
                      </p>




                      <p className='mt-4' style={{fontSize:"17px"}}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                      <p style={{fontSize:"12px"}}>
                          <ul>
                            <li>
                               Equity and Futures - ₹10 per crore + GST of the traded value.
                            </li>
                            <li>
                                Options - ₹50 per crore + GST traded value (premium value).
                            </li>
                            <li>
                                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per 
                                lakh + GST of premium for Options.
                            </li>
                          </ul>
                      </p>



                      <p className='mt-4' style={{fontSize:"17px"}}>Margin Trading Facility (MTF)</p>
                      <p style={{fontSize:"12px"}}>
                          <ul>
                            <li>
                               MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. 
                               The interest is applied from T+1 day until the day MTF stocks are 
                               sold.
                            </li>
                            <li>
                                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
                            </li>
                            <li>
                                MTF pledge charge: ₹15 + GST per pledge and unpledge request per 
                                ISIN.
                            </li>
                          </ul>
                      </p>



                 </div>
                 <div className='col-6 '>
                     <p className='mt-4' style={{fontSize:"17px"}}>GST</p>
                     <p style={{fontSize:"12px"}}>
                        Tax levied by the government on the services rendered. 18% of ( brokerage + 
                        SEBI charges + transaction charges)
                     </p>



                      <p className='mt-4' style={{fontSize:"17px"}}>SEBI Charges</p>
                     <p style={{fontSize:"12px"}}>
                        Charged at ₹10 per crore + GST by Securities and Exchange Board of India
                         for regulating the markets.
                     </p>



                     <p className='mt-4' style={{fontSize:"17px"}}>DP (Depository participant) charges</p>
                     <p style={{fontSize:"12px"}}>
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged
                         on the trading account ledger when stocks are sold, irrespective of 
                         quantity.
                     </p>
                      <p style={{fontSize:"12px"}}>
                        Female demat account holders (as first holder) will enjoy a discount of 
                        ₹0.25 per transaction on the CDSL fee.
                     </p>
                      <p style={{fontSize:"12px"}}>
                        Debit transactions of mutual funds & bonds get an additional discount
                         of ₹0.25 on the CDSL fee.
                     </p>



                     <p className='mt-4' style={{fontSize:"17px"}}>Pledging charges</p>
                     <p style={{fontSize:"12px"}}>
                        ₹30 + GST per pledge request per ISIN.
                     </p>


                     <p className='mt-4' style={{fontSize:"17px"}}>AMC (Account maintenance charges)</p>
                     <p style={{fontSize:"12px"}}>
                        For BSDA demat account: Zero charges if the holding value is less than
                         ₹4,00,000.
                     </p>
                      <p style={{fontSize:"12px"}}>
                     For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).
                     </p>



                     <p className='mt-4' style={{fontSize:"17px"}}>Corporate action order charges</p>
                      <p style={{fontSize:"12px"}}>
                       ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders
                        placed through Console.
                     </p>


                     <p className='mt-4' style={{fontSize:"17px"}}>Off-market transfer charges</p>
                      <p style={{fontSize:"12px"}}>
                       ₹25 per transaction.
                     </p>



                     <p className='mt-4' style={{fontSize:"17px"}}>Physical CMR request</p>
                      <p style={{fontSize:"12px"}}>
                       First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
                     </p>


                     <p className='mt-4' style={{fontSize:"17px"}}>Payment gateway charges</p>
                      <p style={{fontSize:"12px"}}>
                       ₹9 + GST (Not levied on transfers done via UPI)
                      </p>


                      <p className='mt-4' style={{fontSize:"17px"}}>Delayed Payment Charges</p>
                      <p style={{fontSize:"12px"}}>
                       Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.
                      </p>


                      
                      <p className='mt-4' style={{fontSize:"17px"}}>Trading using 3-in-1 account with block functionality</p>
                      <p style={{fontSize:"12px"}}>
                          <ul>
                            <li>
                               Delivery & MTF Brokerage: 0.5% per executed order.
                            </li>
                            <li>
                               Intraday Brokerage: 0.05% per executed order.
                            </li>
                          </ul>
                      </p>
                 </div>
            </div>
        </div>

    );
}

export default Brokerage;