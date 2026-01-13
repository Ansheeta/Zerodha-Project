import React from 'react';
function Support() {
    return ( 
        <section className='container-fluid support-component mt-5 p-5'>
            <div className='p-3 support-wrapper'>
                   <h4>Support Portal</h4>
                   <a href="" style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className=' row p-3 input-div' style={{marginLeft:"130px"}}>
                <div className='col-5 p-3 ' style={{marginRight:"205px"}}>
                    <h3 className='fs-3 mb-4'>
                        Search for an answer or browse help topics to create a ticket
                    </h3>
                    <input placeholder="Eg: how do i activate F&O, why is my order getting rejected.." className='mb-4'/>
                    <br/>
                    <a href="" style={{color:"white", marginRight:"10px"}}>Track account opening</a>
                    <a href="" style={{color:"white", marginRight:"10px"}}>Track segment activation</a>
                    <a href="" style={{color:"white", marginRight:"10px"}}>Intraday <br></br>margins</a>
                    <a href="" style={{color:"white", marginRight:"10px"}}>Kite user mannual</a>
                </div>
                <div className='col-5 p-3 '>
                    <h3 className='fs-3'>
                        Featured
                    </h3>
                    <ol>
                        <li style={{marginBottom:"10px"}}><a href="" style={{color:"white"}}>Current Takeovers and Delisting - Januray 2024</a></li>
                        <li><a href="" style={{color:"white"}}>Latest Intraday Leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Support;