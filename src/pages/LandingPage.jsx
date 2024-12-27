import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css';


const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const availableDogs = ['Buddy', 'Max', 'Charlie'];

  const handleSearch = () => {
    const available = availableDogs.includes(searchTerm);
    setIsAvailable(available);
    setShowRegister(available);
  };

  const handleLoginClick = () => {
    navigate('src/pages/RegisterForm.jsx');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Dog Name:', searchTerm);
    console.log('Owner Name:', ownerName);
    console.log('Email:', email);
    // Navigate to another page after registration
    navigate('/dog');
  };

  return (
    <div className="landing-page">
      <header>
        <button className="login-button" onClick={handleLoginClick}>Login</button>
      </header>
      <main>
        <h1>Welcome to Good Dogs</h1>
        <div className="search-section">
          <input
            type="text"
            placeholder="Search for a dog name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {isAvailable !== null && (
          <div className="result-section">
            {isAvailable ? (
              <p>The name {searchTerm} is available! Please register.</p>
            ) : (
              <p>Sorry, the name {searchTerm} is not available.</p>
            )}
          </div>
        )}
        {showRegister && (
          <div className="register-section">
            <h2>Register Your Dog</h2>
            <form onSubmit={handleRegisterSubmit}>
              <label>
                Dog Name:
                <input type="text" value={searchTerm} readOnly />
              </label>
              <label>
                Owner Name:
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <button type="submit">Register</button>
            </form>
          </div>
        )}
        <nav>
          <Link to="/name-dog">Name Your Dog</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/dog">View Dog</Link>
        </nav>
      </main>
    </div>
  );
};

export default LandingPage;
