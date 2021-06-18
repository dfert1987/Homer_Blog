import React, {useState, useEffect} from 'react';
import {Button} from '../Button/Button';
import './UserProfile.css';

export default function UserProfile() {
  const [user, setUser] = useState();

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
          <h2 className='profile-title'>{populate('title')}'s Profile</h2>
          <h3 className='profile-about'>User Info</h3>
        </header>
        <div className='profile-card-content'>
          <div className='first-row'>
            <div className='name-container'>
              <h4 className='label'>Name:</h4>
              <p className='user-name'>
                {populate('firstName')} {populate('lastName')}
              </p>
            </div>
            <div className='user-email-container'>
              <h4 className='label'>Email:</h4>
              <p className='user-email'>{populate('email')}</p>
            </div>
          </div>
          <div className='second-row'>
            <div className='twitter-container'>
              <h4 className='label'>Twitter:</h4>
              <p className='twitter'>{populate('twitter')}</p>
            </div>
            <div className='dob-container'>
              <h4 className='label'>DOB:</h4>
              <p className='dob'>{populate('dob')}</p>
            </div>
          </div>
          <div className='third-row'>
            <div className='address-container'>
              <h4 className='label'>Address:</h4>
              <p className='address'>
                {populate('address one')} {populate('address two')}
                {populate('city')}, {populate('state')}
              </p>
            </div>
          </div>
          <div className='fourth-row'>
            <h4 className='label'>About:</h4>
            <p className='about'>{populate('about')}</p>
          </div>
        </div>
        <div className='button-container'>
          <Button>Edit</Button>
          <Button>Exit</Button>
        </div>
      </div>
    </div>
  );
}
