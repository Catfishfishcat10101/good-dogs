import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GetStartedPage.css';

const GetStartedPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dogName, setDogName] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);
  const navigate = useNavigate();

  const availableDogs = ['Buddy', 'Max', 'Charlie'];

  const handleLogin = () => {
    // Replace with your actual login logic
    if (username === 'user' && password === 'password') {
      navigate('/dog');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSearch = () => {
    const available = availableDogs.includes(dogName);
    setIsAvailable(available);
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="get-started-page">
      <h1>{isLogin ? 'Login' : 'Search Dog Name Availability'}</h1>
      {isLogin ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p onClick={() => setIsLogin(false)}>Or search for a dog's name</p>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter dog name"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          {isAvailable === false && (
            <div>
              <p>Name is not available. Please register.</p>
              <button onClick={handleRegisterRedirect}>Register</button>
            </div>
          )}
          {isAvailable === true && <p>Name is available!</p>}
          <p onClick={() => setIsLogin(true)}>Or login</p>
        </div>
      )}
    </div>
  );
};

export default GetStartedPage;
