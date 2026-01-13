import React from "react";
import { Link } from "react-router-dom";

function OpenZerodhaAccount() {
  return (
    <div className="container border-bottom text-center mt-5 mb-5">
      <div className="row p-5">
        <div className="col p-2">
          <h1 className="fs-3">Open a Zerodha account</h1>
          <p className="mt-4 text-muted fs-6">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>

          {/* ✅ Correct navigation */}
          <Link to="/signup" className="btn btn-primary btn-lg mt-4">
            Sign up for free
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default OpenZerodhaAccount;
