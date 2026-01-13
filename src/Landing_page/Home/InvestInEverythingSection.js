import React from 'react';
import { Link } from "react-router-dom";

function InvestInEverythingSection() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <div className='col'>
                    <img src='media/images/homeHero.png' alt='Hero Image' class="img-fluid mb-4" />
                    <h1 class="mt-5" > Invest in everything</h1>
                    <p >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <Link to="/signup" className="btn btn-primary btn-lg mt-4">
                        Sign up for free
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default InvestInEverythingSection;