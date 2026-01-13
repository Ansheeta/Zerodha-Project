// This the Wrapper page for all its components

import React from 'react';
import Pioneered from './Pioneered';
import People from './People';
import Navbar from '../Navbar';
import Footer from '../Footer';
function AboutPage() {
    return ( 
        <>
           <Navbar />
           <Pioneered />
           <People />
           <Footer />
        </>
     );
}

export default AboutPage;