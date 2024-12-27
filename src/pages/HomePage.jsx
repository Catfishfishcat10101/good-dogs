import React from 'react';

const HomePage = () => {
  const userDog = {
    name: '',
    breed: 'mixed',
    image: 'public/dog.png' // Replace with actual image URL
  };
  const [currentAction, setCurrentAction] = React.useState('sitting');
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 20);
    }, 100); // Change image every 100ms for animation effect

    return () => clearInterval(interval);
  }, []);

  const handleActionChange = (action) => {
    setCurrentAction(action);
    setCurrentImageIndex(0); // Reset to first image of the new action
  };

  const getActionImage = (action, index) => {
    return `/sprites/${action}/${index}.jpg`;
  };

  const currentImage = getActionImage(currentAction, currentImageIndex);
  return (
    <div style={styles.backyard}>
      <div style={styles.fence}></div>
      <div style={styles.tree}></div>
      <div style={styles.grass}></div>
      <div style={styles.dog}>
        <img src={userDog.image} alt={`${userDog.name} the ${userDog.breed}`} style={styles.dogImage} />
        <p>{userDog.name} the {userDog.breed}</p>
      </div>
    </div>
  );
};

const styles = {
  backyard: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundColor: '#87CEEB', // Sky blue background
  },
  fence: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '50px',
    backgroundColor: '#8B4513', // Brown color for the fence
  },
  tree: {
    position: 'absolute',
    bottom: '50px',
    left: '20px',
    width: '100px',
    height: '150px',
    backgroundColor: '#8B4513', // Brown color for the tree trunk
    borderRadius: '0 0 50px 50px',
  },
  grass: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '50px',
    backgroundColor: '#228B22', // Green color for the grass
  },
  dog: {
    position: 'absolute',
    bottom: '60px',
    right: '20px',
    textAlign: 'center',
  },
  dogImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  }
};

export default HomePage;
