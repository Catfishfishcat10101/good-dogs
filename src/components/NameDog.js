import React, {useState } from 'react';
import { toast } from 'react-toastify';

const NameDog = ({ setName }) => {
	const [newName, setNewName] = useState('');
	
	const handleChange = (e) => {
		setNewName(e.target.value);
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		setName(newName);
		toast.success(`Your dog's name is now ${newName}!`);
	};
	
	return (
		<form onSubmit={handleSubmit}>
		<input
		type='text'
		placeholder='Enter Dog Name'
		value={newName}
		onChange={handleChange}
	/>
	 <button type="submit">Name Dog</button>
	 </form>
	);
};

export default NameDog;