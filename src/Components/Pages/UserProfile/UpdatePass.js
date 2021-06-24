import React, {useState, useEffect} from 'react';
import {Button} from '../../Button/Button';
import {Link} from 'react-router-dom';
import './UpdatePass.css';

export default function UpdatePass({
  id,
  setToggle,
  avatar,
  first_name,
  last_name,
  city,
  dob,
  email,
  twitter,
  state,
  userId,
  about,
  password_digest,
  admin,
  user_name,
}) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [newPassword, setNewPassword] = useState();
  const [newUsername, setNewUsername] = useState();
  const [confirmation, setConfirmation] = useState(false);

  console.log(user_name);

  const onSubmit = () => {
    const setNew = (key) => {
      if (key === 'username') {
        if (newUsername) {
          return newUsername;
        }
        return user_name;
      }
      if (key === 'password') {
        if (newPassword) {
          return newPassword;
        }
        return currentPassword;
      }
    };

    const newUsernamePassword = {
      username: setNew('username'),
      password: setNew('password'),
      first_name: first_name,
      last_name: last_name,
      email: email,
      avatar: avatar,
      twitter: twitter,
      dob: dob,
      city: city,
      state: state,
      about: about,
      id: userId,
      admin: admin,
    };

    fetch(`http://localhost:3000/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUsernamePassword),
    });
    update(newUsernamePassword);
  };

  const update = (newUsernamePassword) => {
    localStorage.setItem('user', JSON.stringify(newUsernamePassword));
    confirmation(true);
  };

  const verify = () => {
    const user = {
      username: user_name,
      password: currentPassword,
    };

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    setDisabled(true);
  };

  return (
    <>
      <div className='header-container'>
        <h3 className='update-username-password-header'>
          Update Username or Password
        </h3>
        <p className='instructions'>First input current password and submit.</p>
        <p className='instructions'>
          Only input both fields if you wish to update both fields.
        </p>
      </div>
      <form onSubmit={onSubmit} className='username-password-form'>
        <div className='both-forms'>
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
            <Button
              className='submit-old'
              type='button'
              onClick={() => verify()}
            >
              Submit
            </Button>
          </div>
          <div className='new-pass-name-container'>
            <div className='inputs-container'>
              <div className='new-pass-container'>
                <label className='new-pass-label'>New Password:</label>
                <input
                  className='new-pass-input'
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
            </div>
            <div className='new-button'>
              <Button type='submit'>Submit</Button>
            </div>
          </div>
        </div>
        <div className='main-button-container'>
          <Button
            type='button'
            className='edit-info-button'
            onClick={() => setToggle()}
          >
            Edit User Info
          </Button>
          <div className='exit-button'>
            <Link to='/'>
              <Button>Exit</Button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
