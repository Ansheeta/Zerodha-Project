import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function NotFound() {
    return ( 
    
        <div className='container'>
            <>
               <Navbar />
            </>
            <div className='row p-5 Not-found'>
                <div className='col'>
                    <h1 className='fs-4 mb-3 text-muted'>401</h1>
                    <h1 className='text-muted'>Kiaan couldn’t find that page</h1>
                    <p className='fs-5 mt-2'>We couldn’t find the page you were looking for.</p>
                    <p className='fs-5'>Visit <Link to="/" style={{textDecoration:"none"}}>Zerodha’s home page</Link></p>
            
                </div>
            </div>
            <>
               <Footer />
            </>
        </div>
     );
}

export default NotFound;