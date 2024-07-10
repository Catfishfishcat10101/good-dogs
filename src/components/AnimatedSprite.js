import React, { useState, useEffect } from 'react';
import './AnimatedSprite.css';

const AnimatedSprite = ({ srcFolder,frameCount,frameWidth,frameHeight,duration }) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(frame => (frame+1)%frameCount);
    }, duration/frameCount);
		
 return () => clearInterval(interval);
  }, [frameCount,duration]);
	
	const src =`${srcFolder}/frame${frame + 1}.png`;

  const style = {
    width:`${frameWidth}px`,
    height:`${frameHeight}px`
  };
};

export default AnimatedSprite;