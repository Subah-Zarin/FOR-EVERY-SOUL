import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username = localStorage.getItem('username');
        if (!username) {
          message.error('You are not logged in!');
          navigate('/login'); // Redirect if not logged in
          return;
        }

        const response = await fetch(`http://localhost:5000/users/${username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data);
        setPhone(data.phone || '');
        setAddress(data.address || '');
      } catch (err) {
        message.error('Failed to fetch user data');
        console.error('Error fetching user data:', err);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSaveChanges = async () => {
    try {
      const username = localStorage.getItem('username');
      if (!username) {
        message.error('You are not logged in!');
        return;
      }

      const response = await fetch(`http://localhost:5000/users/${username}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, address }),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setUserData(updatedData);
        message.success('Profile updated successfully');
        setIsEditing(false);
      } else {
        throw new Error('Failed to save changes');
      }
    } catch (err) {
      message.error('Error saving changes');
      console.error('Error saving changes:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    message.success('Logged out successfully');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="profile-container">
      <NavBar />
      <div className="profile-card">
        <div className="profile-card-content">
          <div className="profile-avatar">
            <img
              src={userData?.avatar || 'https://www.w3schools.com/w3images/avatar2.png'} // Placeholder avatar
              alt="User Avatar"
              className="avatar-img"
            />
          </div>
          <h2 className="profile-title">Welcome to Your Profile</h2>
          {userData ? (
            <div>
              <div className="profile-username">{userData.username}</div>

              <div className="profile-info">
                <div className="profile-icon">📧</div>
                <div>{userData.email}</div>
              </div>

              <div className="profile-info">
                <div className="profile-icon">📞</div>
                {isEditing ? (
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone"
                    className="profile-input"
                  />
                ) : (
                  <div>{phone || 'No phone number provided'}</div>
                )}
              </div>

              <div className="profile-info">
                <div className="profile-icon">🏠</div>
                {isEditing ? (
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="profile-input"
                  />
                ) : (
                  <div>{address || 'No address provided'}</div>
                )}
              </div>

              <div className="button-group">
                {isEditing ? (
                  <button className="save-button" onClick={handleSaveChanges}>
                    Save Changes
                  </button>
                ) : (
                  <button className="edit-button" onClick={handleEditToggle}>
                    Edit Profile
                  </button>
                )}
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="loading-spinner">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
