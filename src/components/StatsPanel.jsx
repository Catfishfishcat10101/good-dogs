import React from 'react';
import PropTypes from 'prop-types';

const StatsPanel = ({ showStats, dogStats }) => {
  if (!showStats) {
    return null;
  }

  const ageInDays = dogStats.getAgeInDays();
  const ageInYears = (ageInDays / 365).toFixed(1);

  return (
    <div className="stats-panel">
      <h2>Dog Stats</h2>
      <ul>
        <li>Name: {dogStats.name}</li>
        <li>Age: {ageInYears} years</li>
        <li>Energy Level: {dogStats.energyLevel}</li>
        <li>Potty Training Level: {dogStats.pottyTrainingLevel}%</li>
        <li>Training Difficulty: {dogStats.trainingDifficulty}</li>
        <li>Training Experience: {dogStats.trainingExperience}</li>
        <li>Mood: {dogStats.mood}</li>
        <li>Weight: {dogStats.weight} kg</li>
        <li>Breed: {dogStats.breed}</li>
        <li>Health Status: {dogStats.healthStatus}</li>
      </ul>
    </div>
  );
};

StatsPanel.propTypes = {
  showStats: PropTypes.bool.isRequired,
  dogStats: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string,
    energyLevel: PropTypes.string,
    pottyTrainingLevel: PropTypes.number,
    trainingDifficulty: PropTypes.string,
    trainingExperience: PropTypes.string,
    mood: PropTypes.string,
    weight: PropTypes.number,
    breed: PropTypes.string,
    healthStatus: PropTypes.string,
    birthDate: PropTypes.instanceOf(Date),
    getAgeInDays: PropTypes.func
  }).isRequired
};

export default StatsPanel;

// Default dog stats for a new dog
const defaultDogStats = {
  name: '',
  age: 'Puppy',
  energyLevel: 'High',
  pottyTrainingLevel: 0,
  trainingDifficulty: 'High',
  trainingExperience: 'Beginner',
  mood: 'Happy',
  weight: 5,
  breed: 'Mixed',
  healthStatus: 'Healthy',
  birthDate: new Date(),
  getAgeInDays: function() {
    const now = new Date();
    const diffTime = Math.abs(now - this.birthDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays * 5; // 1 real day equals 5 dog days
  }
};

export { defaultDogStats };
