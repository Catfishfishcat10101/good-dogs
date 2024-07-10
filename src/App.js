import React, { useState, useEffect } from 'react';
import Dog from './components/Dog';
import NameDog from './components/NameDog';
import Settings from './components/Settings';
import './App.css';

const App = () => {
  const [name, setName] = useState(() => localStorage.getItem('name') || 'Fireball');
  const [imageUrl, setImageUrl] = useState(() => localStorage.getItem('imageUrl') || '/dog.png');
  
  useEffect(() => {
    localStorage.setItem('name', name);
  },[name]);
  
  useEffect(() => {
    localStorage.setItem('imageUrl', imageUrl);
  }, [imageUrl]);
  
  return (
    <div className="App">
    <h1>Good Dog</h1>
    <NameDog setName={setName} />
    <Settings setImageUrl={setImageUrl} />
    <Dog name={name} imageUrl={imageUrl} />
    </div>
  );
};

export default App;