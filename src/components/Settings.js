import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Settings = ({ setImageUrl }) => {
	const [newImageUrl, setNewImageUrl] = useState('');
	
	const handleChange =(e)=> {
		setNewImageUrl(e.target.value);
	};
	
	const handleSubmit =(e)=> {
		e.preventDefault();
		setImageUrl(newImageUrl);
		toast.success('Dog image updated successfully!');
	};
	
	return (
		<form onSubmit={handleSubmit}>
		 <input
			type="text"
			placeholder='Enter image URL'
			value={newImageUrl}
			onChange={handleChange}
		/>
		<button type="submit">Update Image</button>
		</form>
	);
};

export default Settings;