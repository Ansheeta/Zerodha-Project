// Wrapper page for all the components.

import React from 'react';
import Navbar from '../Navbar';
import Support from './Support';
import CreateTicket from './CreateTicket';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <>
          <Navbar />
          <Support/>
          <CreateTicket />
          <Footer />
        </>
     );
}

export default SupportPage;