import React, {useState, useEffect} from 'react';
import {Button} from '../../Button/Button';
import {Link} from 'react-router-dom';
import './UserProfile.css';

export default function UpdatePass({id, user}) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');

  const onSubmit = () => {
    console.log(currentPassword);
  };

  return (
    <>
      <div className='header-container'>
        <h3 className='update-username-password-header'>
          Update Username or Password
        </h3>
        <p className='instructions'>First input current password and submit.</p>
      </div>
      <form onSubmit={onSubmit()} className='username-password-form'>
        <div className='old-password-container'>
          <label className='old-password-label'>Current Password:</label>
          <input
            className='old-password-input'
            type='password'
            id={`${id}-old-password`}
            value={currentPassword}
            name='currentPassword'
            disabled={disabled}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <Button type='button' onClick={() => setDisabled(true)}>
            Submit
          </Button>
        </div>
        <div className='new-pass-name-container'>
          <div className='new-pass-container'>
            <label className='new-password-label'>New Password:</label>
            <input
              className='new-password-input'
              type='password'
              id={`${id}-new-password`}
              value={newPassword}
              name='newPassword'
              disabled={!disabled}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className='new-username-container'>
            <label className='new-username-label'>New Username:</label>
            <input
              className='new-username-input'
              type='text'
              id={`${id}-new-username`}
              value={newUsername}
              name='newUsername'
              disabled={!disabled}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div className='button-container'>
                <div className='new-button'>
                  <Button type='submit'>Submit</Button>
                </div>
                <div className='exit-button'>
                  <Link to='/'>
                    <Button>Exit</Button>
                  </Link>
                </div>
              </div>
        </div>
      </form>
    </>
  );
}
