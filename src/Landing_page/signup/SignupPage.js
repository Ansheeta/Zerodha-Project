import React from 'react';
import Navbar from '../Navbar';
import Signup from './Signup';
import OpenZerodhaAccount from '../OpenZerodhaAccount'
import Footer from '../Footer';


function SignupPage() {
    return ( 
        <>
            <Navbar />
            <Signup />
            <OpenZerodhaAccount />
            <Footer />
        </> 
     );
}

export default SignupPage;