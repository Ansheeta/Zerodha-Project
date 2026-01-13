// Wrappper page for all its components.

import React from 'react';
import Navbar from '../Navbar';
import Charges from './Charges';
import Brokerage from './Brokerage';
import Footer from '../Footer';

function PricingPage() {
    return ( 
        <>
           <Navbar />
           <Charges />
           <Brokerage />
           <Footer />
        </>
     );
}

export default PricingPage;