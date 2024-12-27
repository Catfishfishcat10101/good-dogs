import React, { useState, useEffect } from 'react';
import './AnimatedSprite.css';
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames);
    }, animationSpeed);
// cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
  };
  }), [frames, animationSpeed] (
      style={
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        backgroundPosition: `-${currentFrame * width}px 0`,
      }),
      
      
