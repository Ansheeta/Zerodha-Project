import React from 'react';
import Navbar from '../Navbar';
import Product from './Product';
import ProductsSection from './ProductsSection';
import Universe from './Universe';
import Footer from '../Footer';

function ProductsPage() {
    return (  
        <>
           <Navbar />
           <Product />
           <ProductsSection />
           <Universe />
           <Footer />
        </>
    );
}

export default ProductsPage;
