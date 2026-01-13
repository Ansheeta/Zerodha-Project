import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './Landing_page/Home/HomePage';
import SignupPage from './Landing_page/signup/SignupPage';
import AboutPage from './Landing_page/about/AboutPage';
import ProductsPage from './Landing_page/products/ProductsPage';
import PricingPage from './Landing_page/pricing/PricingPage';
import SupportPage from './Landing_page/support/SupportPage';
import LoginPage from './Landing_page/Login/LoginPage';
import NotFound from './Landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
           <Routes>
               <Route path="/" element={<HomePage/>}></Route>
               <Route path="/signup" element={<SignupPage/>}></Route>
               <Route path="/about" element={<AboutPage/>}></Route>
               <Route path="/products" element={<ProductsPage/>}></Route>
               <Route path="/pricing" element={<PricingPage/>}></Route>
               <Route path="/support" element={<SupportPage/>}></Route>
               <Route path="/login" element={<LoginPage/>}></Route>
               <Route path="*" element={<NotFound/>}></Route>
           </Routes>
     </BrowserRouter>
);
