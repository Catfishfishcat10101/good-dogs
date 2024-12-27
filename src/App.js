import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dog from './components/Dog';
import NameDog from './components/NameDog';
import Settings from './components/Settings';
import LandingPage from './pages/LandingPage';
import LoginForm from './pages/LoginForm';

const App = () => {
  const [name, setName] = useState(() => localStorage.getItem('name') || 'Fireball');
  const [imageUrl, setImageUrl] = useState(() => localStorage.getItem('imageUrl') || '/dog.png');
  
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);
  
  useEffect(() => {
    localStorage.setItem('imageUrl', imageUrl);
  }, [imageUrl]);
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/name-dog" element={<NameDog setName={setName} />} />
          <Route path="/settings" element={<Settings setImageUrl={setImageUrl} />} />
          <Route path="/dog" element={<Dog name={name} imageUrl={imageUrl} />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
