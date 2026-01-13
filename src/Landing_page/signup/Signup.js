import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import { Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate(); // ✅ initialize navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, formData);

      // ✅ Directly redirect without showing success message
      navigate(`${process.env.REACT_APP_DASHBOARD_URL}`); // React Router redirect

    } catch (err) {
      // Only show error if signup fails
      alert(err.response?.data?.message || "Signup failed");
    }
  };


  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-5 mt-5">
          <img src="Media/images/account_open.svg" alt="signup" />
        </div>

        <div className="col-5 offset-1">
          <h2 className="mb-2">Create an account</h2>
          <p className="text-muted mb-4">
            Sign up to start trading with Zerodha
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Sign up
            </button>
          </form>
          <p className="mt-3 text-muted" style={{ fontSize: "0.85rem" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#4184f3", cursor: "pointer", textDecoration: "none" }}
            >
              Login
            </Link>
          </p>


        </div>
      </div>
    </div>
  );
}

export default Signup;
