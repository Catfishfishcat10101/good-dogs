import React, { useState, useEffect } from 'react';
import './AnimatedSprite.css';

const AnimatedSprite = ({ src, frames, width, height, animationSpeed }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames);
    }, animationSpeed);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, [frames, animationSpeed]);

  return (
    <div
      className="sprite"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        backgroundPosition: `-${currentFrame * width}px 0`,
      }}
    ></div>
  );
};

export { AnimatedSprite };
// Usage example
// <AnimatedSprite 
//   src="/sprites/your-sprite.png" 
//   frames={10} 
//   width={64} 
//   height={64} 
//   animationSpeed={100} 
// />
// Example usage with different actions
const App = () => {
  return (
    <div>
      <h1>Good Dogs</h1>
      <AnimatedSprite 
        src="/sprites/eat.png" 
        frames={10} 
        width={64} 
        height={64} 
        animationSpeed={100} 
      />
      <AnimatedSprite 
        src="/sprites/play.png" 
        frames={10} 
        width={64} 
        height={64} 
        animationSpeed={100} 
      />
      <AnimatedSprite 
        src="/sprites/sit.png" 
        frames={10} 
        width={64} 
        height={64} 
        animationSpeed={100} 
      />
      <AnimatedSprite 
        src="/sprites/sleep.png" 
        frames={10} 
        width={64} 
        height={64} 
        animationSpeed={100} 
      />
      <AnimatedSprite 
        src="/sprites/train.png" 
        frames={10} 
        width={64} 
        height={64} 
        animationSpeed={100} 
      />
      <AnimatedSprite 
        src="/sprites/walk.png" 
        frames={10} 
        width={64} 
        height={64} 
        animationSpeed={100} 
      />
    </div>
  );
};

export { App };
