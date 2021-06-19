import React, {useState, useEffect} from 'react';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';

import './UserProfile.css';

export default function UserProfile() {
  const [user, setUser] = useState();
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser]);

  const populate = (descriptor) => {
    if (!user) {
      return null;
    }
    if (descriptor === 'avatar') {
      return user.avatar;
    }
    if (descriptor === 'title') {
      return user.username;
    }
    if (descriptor === 'firstName') {
      return user.first_name;
    }
    if (descriptor === 'lastName') {
      return user.last_name;
    }
    if (descriptor === 'email') {
      return user.email;
    }
    if (descriptor === 'twitter') {
      return user.twitter;
    }
    if (descriptor === 'dob') {
      return user.dob;
    }
    if (descriptor === 'address one') {
      return user.address_line_1;
    }
    if (descriptor === 'address two') {
      return user.address_line_two;
    }
    if (descriptor === 'city') {
      return user.city;
    }
    if (descriptor === 'state') {
      return user.state;
    }
    if (descriptor === 'about') {
      return user.about;
    }
    if (descriptor === 'admin' && user.admin === true) {
      return '(Admin)';
    } else {
      return null;
    }
  };

  return (
    <div className='profile-container'>
      <div className='profile-body'>
        <header className='profile-header'>
          <img
            className='profile-avatar'
            src={populate('avatar')}
            alt='Avatar'
          />
          <div className='header-text-container'>
            <h2 className='profile-title'>User Profile</h2>
            <div className='username-admin-container'>
              <h3 className='profile-about'>{`${populate('title')}`} </h3>
              <h3 className='profile-admin'> {populate('admin')}</h3>
            </div>
          </div>
        </header>
        <div className='profile-card-content'>
          <div className='column-container'>
            <div className='first-column'>
              <div className='name-container'>
                <h4 className='label'>Name:</h4>
                <p className='user-name'>
                  {populate('firstName')} {populate('lastName')}
                </p>
              </div>
              <div className='email-container'>
                <h4 className='label'>Email:</h4>
                <p className='user-email'>{populate('email')}</p>
              </div>
              <div className='dob-container'>
                <h4 className='label'>DOB:</h4>
                <p className='dob'>{populate('dob')}</p>
              </div>
            </div>
            <div className='second column'>
              <div className='twitter-container'>
                <h4 className='label'>Twitter:</h4>
                <p className='twitter'>{populate('twitter')}</p>
              </div>
              <div className='city-container'>
                <h4 className='label'>City:</h4>
                <p className='city'>{populate('city')}</p>
              </div>
              <div className='state-container'>
                <h4 className='label'>State:</h4>
                <p className='city'>{populate('state')}</p>
              </div>
            </div>
          </div>
          <div className='about-container'>
            <h4 className='label'>About:</h4>
            <p className='about'>{populate('about')}</p>
          </div>
          <div className='button-container'>
            <div className='edit-button'>
              <Button type='button' onClick={setIsEditing(true)}>Edit Profile</Button>
            </div>
            <div className='exit-button'>
              <Link to='/'>
                <Button>Exit</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
