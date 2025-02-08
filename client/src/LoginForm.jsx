import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "./Login.css"; // Import styles

const LoginForm = () => {
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropdownToggle = (open) => {
    setIsDropdownOpen(open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${userType}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>

          {/* User Role Selection */}
          <div 
            className={`role-dropdown-container ${isDropdownOpen ? "expanded" : ""}`} 
          >
            <label className="role-label">
              <FaUser className="icon" /> Select Role:
              <select 
                value={userType} 
                onChange={(e) => setUserType(e.target.value)} 
                onFocus={() => handleDropdownToggle(true)}
                onBlur={() => handleDropdownToggle(false)}
                className="role-dropdown"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </label>
          </div>

          {/* Email Field */}
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <FaLock className="icon" />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Forgot Password Link */}
          <p className="forgot-password">
            <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
          </p>

          {/* Login Button */}
          <button className="login-button" type="submit">Login</button>
        </form>

        {/* Signup Link */}
        <p className="signup-link">
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
