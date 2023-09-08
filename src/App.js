import React, { useState } from 'react';
import './index.css'; // Import your CSS file

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    // Implement registration logic here
    // ...
  };

  return (
    <div className="registration-container">
      <h1>Register</h1>
      <div className="registration-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Registration;