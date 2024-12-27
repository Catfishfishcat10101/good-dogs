import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Dog.css';
import AnimatedSprite from './AnimatedSprite';

const Dog = ({ name }) => {
    const [dogName, setDogName] = useState(name || 'Your Dog');
    const [dogImage, setDogImage] = useState('');
    const [hunger, setHunger] = useState(() => parseInt(localStorage.getItem('hunger')) || 50);
    const [happiness, setHappiness] = useState(() => parseInt(localStorage.getItem('happiness')) || 50);
    const [training, setTraining] = useState(() => parseInt(localStorage.getItem('training')) || 0);
    const [health, setHealth] = useState(() => parseInt(localStorage.getItem('health')) || 100);
    const [energy, setEnergy] = useState(() => parseInt(localStorage.getItem('energy')) || 100);
    const [animationClass, setAnimationClass] = useState('');

    const springProps = useSpring({ to: { opacity: 1, transform: 'translateX(0)' }, from: { opacity: 0, transform: 'translateX(-100px)' } });

    const handleTrain = () => {
        setTraining(prev => Math.min(prev + 10, 100));
        toast('Training increased!');
    };

    const handlePlay = () => {
        setHappiness(prev => Math.min(prev + 10, 100));
        setEnergy(prev => Math.max(prev - 10, 0));
        toast('Happiness increased, Energy decreased!');
    };

    const handleSleep = () => {
        setEnergy(prev => Math.min(prev + 20, 100));
        toast('Energy increased!');
    };

    const handleNameChange = (e) => {
        setDogName(e.target.value);
    };

    const handleImageChange = (e) => {
        setDogImage(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
        localStorage.setItem('hunger', hunger);
        localStorage.setItem('happiness', happiness);
        localStorage.setItem('training', training);
        localStorage.setItem('health', health);
        localStorage.setItem('energy', energy);
    }, [hunger, happiness, training, health, energy]);

    return (
        <animated.div style={springProps} className={animationClass}>
            <div className="dog-container">
                <h1>{dogName}</h1>
                {dogImage && <img src={dogImage} alt="Dog" className="dog-image" />}
                <p>Hunger: {hunger}</p>
                <p>Happiness: {happiness}</p>
                <p>Training: {training}</p>
                <p>Health: {health}</p>
                <p>Energy: {energy}</p>
                <button onClick={handleTrain}>Train</button>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handleSleep}>Sleep</button>
                <div>
                    <input type="text" value={dogName} onChange={handleNameChange} placeholder="Enter dog name" />
                    <input type="file" onChange={handleImageChange} />
                </div>
            </div>
            <ToastContainer />
        </animated.div>
    );
};

export default Dog;
