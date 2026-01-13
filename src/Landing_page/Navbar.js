import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroungColor: "#FFF" }}>
            <div class="container p-2">
                <Link class="navbar-brand" to="/">
                    <img src='Media\images\logo.svg' alt="logo" style={{ width: "25%" }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <form class="d-flex nav-setting" role="search">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                                <Link class="nav-link" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/support">Support</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-bars" aria-hidden="true"></i></a>
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;