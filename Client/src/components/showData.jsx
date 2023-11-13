import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const ShowData = ({ userdata }) => {
  // Initialize userData state with the initial user data
  const [userData, setUserData] = useState(userdata || {});

  // Update userData when userdata prop changes
  useEffect(() => {
    setUserData(userdata || {});
  }, [userdata]);

  // Handle input change for different fields
  const handleInputChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Extract user ID from userData
  const id = userData._id;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.patch(
        `http://127.0.0.1:4000/users/account/update/${id}`,
        userData
      );
  
      console.log('Update successful', response.data);
    } catch (error) {
      console.error('Error updating user data', error);
    }
  };

  return (
    <form className="userDataForm" onSubmit={handleSubmit}>
      {/* Input fields for different user attributes */}
      <div className="inputGroup">
        <label>Username:</label>
        <input
          type="text"
          value={userData.username || ''}
          onChange={(e) => handleInputChange('username', e.target.value)}
        />
      </div>

      <div className="inputGroup">
        <label>Email:</label>
        <input
          type="text"
          value={userData.email || ''}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </div>

      <div className="inputGroup">
        <label>Gender:</label>
        <input
          type="text"
          value={userData.gender || ''}
          onChange={(e) => handleInputChange('gender', e.target.value)}
        />
      </div>

      <div className="inputGroup">
        <label>Role</label>
        <input
          type="text"
          value={userData.role || ''}
          onChange={(e) => handleInputChange('role', e.target.value)}
        />
      </div>

      <div className="inputGroup">
        <label>Phone Number:</label>
        <input
          type="text"
          value={`${userData.phoneNumber || ''}`}
          onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
        />
      </div>

      {/* Add more input fields for other user attributes as needed */}
      
      {/* Submit button */}
      <button type="submit">Update</button>
    </form>
  );
};
