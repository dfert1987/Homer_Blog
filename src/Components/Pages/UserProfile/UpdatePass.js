import React, {useState, useEffect} from 'react';
import {Button} from '../../Button/Button';
import {Link} from 'react-router-dom';
import './UserProfile.css';

export default function UpdatePass({id, user}) {
  const [currentPassword, setCurrentPassword] = useState('');

  const onSubmit = () => {
    console.log(currentPassword);
  };

  return (
    <>
      <h3 className='update-username-password-header'>
        Update Username or Password
      </h3>
      <form onSubmit={onSubmit()} className='username-password-form'>
        <div className='old-password-container'>
          <label className='old-password-label'>Input Current Password:</label>
          <input
            className='old-password-input'
            type='password'
            id={`${id}-old-password`}
            value={currentPassword}
            name='currentPassword'
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}
