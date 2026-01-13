// This page is the Wrapper for all Components in the home page : 

import React from 'react';
import Navbar from '../Navbar';
import InvestInEverythingSection from './InvestInEverythingSection';
import Awards from './Awards';
import TrustWithConfidence from './TrustWithConfidence';
import Pricing from './Pricing';
import Education from './Education';
import OpenZerodhaAccount from '../OpenZerodhaAccount';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
           <Navbar />
           <InvestInEverythingSection />
           <Awards />
           <TrustWithConfidence />
           <Pricing />
           <Education />
           <OpenZerodhaAccount />
           <Footer />
        </>
     );
}

export default HomePage;