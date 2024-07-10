import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Dog.css';
import AnimatedSprite from './AnimatedSprite';

const Dog = ({ name }) => {
	const [hunger, setHunger] = useState(() => parseInt(localStorage.getItem('hunger')) || 50);
	const [happiness, setHappiness] = useState(() => parseInt(localStorage.getItem('happiness')) || 50);
	const [training, setTraining] = useState(() => parseInt(localStorage.getItem('training')) || 0);
	const [health, setHealth] = useState(() => parseInt(localStorage.getItem('health')) || 100);
	const [energy, setEnergy] = useState(() => parseInt(localStorage.getItem('energy')) || 100);
	const [animationClass, setAnimationClass] = useState('');
	
	const springProps = useSpring({to:{opacity:1, transform: 'translateX(0)'}, from: {opacity: 0, transform: 'translateX(-100px'} });
	
	useEffect(() => {
		const interval = setInterval(() => {
			setHunger(hunger => hunger > 0 ? hunger - 1:0);
			setEnergy(energy => energy > 0 ? energy - 1:0);
			setHappiness(happiness => happiness > 0 ? happiness - 1:0);
		},80000);       
		            // 1 minute interval
		
		return() => clearInterval(interval);
	},[]);
	
	useEffect(() => {
		if (hunger < 10) toast.warn('Your dog is very hungry!');
		if (energy < 10) toast.warn('Your dog needs to rest!');
		if (happiness < 10) toast.warn('Your dog is feeling sad!');
		
		localStorage.setItem('hunger', hunger);
		localStorage.setItem('happiness', happiness);
		localStorage.setItem('training', training);
		localStorage.setItem('health', health);
		localStorage.setItem('energy', energy);
	}, [hunger, happiness, training, health, energy]);
	
	const handleFeed = () => {
		setHunger(hunger > 90 ? 100:hunger + 10);
		setHappiness(happiness > 95 ? 100:happiness + 5);
		setAnimationClass('eat');
		toast.success('Your dog is full!');
	};
	
	const handleTrain = () => {
		setTraining(training + 1);
		setHappiness(happiness > 80 ? 100:happiness + 20);
		setHunger(hunger < 20 ? 0:hunger - 20);
		setEnergy(energy < 20 ? 0:energy - 20);
		setAnimationClass('jump');
		toast.success('Your dog is learning!')
	};
	
	const handlePlay = () => {
		setHappiness(happiness > 90 ? 100:happiness + 10);
		setEnergy(energy < 10 ? 0:energy - 10);
		setAnimationClass('move');
	};
	
	const handleSleep = () => {
		setEnergy(energy > 90 ? 100:energy + 10);
		setHealth(health > 90 ? 100:health + 10);
		setAnimationClass('');
		toast.success('Your dog is sleeping!');
	};
	
	return (
		<animated.div style={springProps} className="dog">
		<h2>{name}</h2>
		<AnimatedSprite
		srcFolder={`/sprite/${animated}`}
		frameCount={4} // assumming 4 frames in the sprite sheet
		frameWidth={150} // frame width
		frameHeight={150} // frame height
		duration={1000} // frame duration
		/>
					<div className="stats">
			  <div className="stat">
				<label>Hunger:</label>
				<div className='stat-bar'>
				<div className='stat-bar-fill' style={{ width: `${hunger}%`}}></div>
			</div>
		</div>
		<div className="stat">
		<label>Happiness:</label>
			<div className='stat-bar'>
			<div className='stat-bar-fill' style={{ width: `${happiness}%`}}></div>
		</div>
	</div>
	<div className="stat">
		<label>Training:</label>
		<div className='stat-bar'>
		<div className='stat-bar-fill' style={{ width: `${training}%`}}></div>
		</div>
	</div>
	<div className="stat">
		<label>Health:</label>
		<div className='stat-bar'>
		<div className='stat-bar-fill' style={{ width: `${health}%`}}></div>
		</div>
	</div>
	<div className="stat">
		<label>Energy:</label>
		<div className='stat-bar'>
		<div className='stat-bar-fill' style={{ width: `${energy}%`}}></div>
		</div>
	</div>
	</div>
	<div className="buttons">
		<button onClick={handleFeed}>Feed</button>
		<button onClick={handleTrain}>Train</button>
		<button onClick={handlePlay}>Play</button>
		<button onClick={handleSleep}>Sleep</button>
		</div>
		<ToastContainer />
		</animated.div>
	);
};	

export default Dog;