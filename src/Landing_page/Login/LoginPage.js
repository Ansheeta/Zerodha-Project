import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [formData, setFormData] = useState({
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
      await axios.post("https://zerodha-project-2-mlpm.onrender.com/login", formData);
     window.location.href = "https://dashboard.d2kftmpzjw73xw.amplifyapp.com/";;
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#fafafa" }}
    >
      <div className="card p-4 shadow-sm" style={{ width: "380px" }}>
        <h3 className="text-center mb-1">Login to Zerodha</h3>
        <p
          className="text-center text-muted mb-4"
          style={{ fontSize: "0.9rem" }}
        >
          Welcome back! Please login to continue
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-muted">Email</label>
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
            <label className="form-label text-muted">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100 mt-2">
            Login
          </button>
        </form>

        <p
          className="text-center text-muted mt-3"
          style={{ fontSize: "0.85rem" }}
        >
          Don’t have an account?{" "}
          <a
            href="/signup"
            style={{ color: "#4184f3", textDecoration: "none" }}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
