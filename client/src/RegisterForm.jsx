import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; 
import "./Register.css";

const RegisterForm = () => {
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registering as ${userType}`);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          
          {/* Role Selection */}
          <label className="role-label">Select Role:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          {/* Name Field */}
          <div className="input-group">
            <FaUser className="icon" />
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Email Field */}
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <FaLock className="icon" />
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
            <span 
              className="toggle-password" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🔒"}
            </span>
          </div>

          {/* Register Button */}
          <button type="submit" className="register-button">Register</button>

          {/* Already have an account? */}
          <p className="login-link">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
