import React, {useState, useEffect} from 'react';
import './UserProfile.css';

export default function UserProfile() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser]);

  const populateHeader = () => {
    if (user) {
      return user.username;
    }
    return null;
  };

  return <h1 className='profile-header'>{populateHeader()}'s Profile</h1>;
}
