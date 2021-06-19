import React, {useState, useEffect} from 'react';
import UpdatePass from './UpdatePass';
import {Button} from '../../Button/Button';
import {Link} from 'react-router-dom';

import './UserProfile.css';

export default function UserProfile() {
  const [user, setUser] = useState();
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [avatar, setAvatar] = useState('');
  const [dob, setDob] = useState('');
  const [twitter, setTwitter] = useState('');
  const [about, setAbout] = useState('');

  const onSubmit = () => {
    setEditing(false);
  };

  const setIsEditing = () => {
    setEditing(true)
  }

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

  const id = 'profile';
  const states = [
    'AK',
    'AL',
    'AR',
    'AZ',
    'CA',
    'CO',
    'CT',
    'DC',
    'DE',
    'FL',
    'GA',
    'HI',
    'IA',
    'ID',
    'IL',
    'IN',
    'KS',
    'KY',
    'LA',
    'MA',
    'ME',
    'MI',
    'MD',
    'MN',
    'MO',
    'MS',
    'MT',
    'NE',
    'NC',
    'ND',
    'NH',
    'NJ',
    'NM',
    'NV',
    'NY',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VA',
    'VT',
    'WA',
    'WI',
    'WV',
    'WY',
  ];

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
        {!editing ? (
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
                <Button type='button' onClick={() => setIsEditing()}>
                  Edit Profile
                </Button>
              </div>
              <div className='exit-button'>
                <Link to='/'>
                  <Button>Exit</Button>
                </Link>
              </div>
            </div>
          </div>
        ) : ( 
          <div className='form-container'>
            <h3 className='form-header'>Edit Your Personal Info</h3>
            <form className='edit-profile-form' onSubmit={() => onSubmit}>
              <div className='input-wrapper'>
                <div className='first-name-wrapper'>
                  <label className='form-label'>First Name:</label>
                  <input
                    id={`${id}-first-name-input`}
                    className='first-name-input'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    name='firstName'
                  />
                </div>
                <div className='last-name-wrapper'>
                  <label className='form-label'>Last Name:</label>
                  <input
                    id={`${id}-last-name-input`}
                    className='last-name-input'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    name='lastName'
                  />
                </div>
                <div className='email-wrapper'>
                  <label className='form-label'>Email:</label>
                  <input
                    id={`${id}-email-input`}
                    className='email-input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='email'
                  />
                </div>
                <div className='twitter-wrapper'>
                  <label className='form-label'>Twitter:</label>
                  <input
                    id={`${id}-twitter-input`}
                    className='twitter-input'
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    name='twitter'
                  />
                </div>
                <div className='dob-wrapper'>
                  <label className='form-label'>DOB:</label>
                  <input
                    id={`${id}-dob-input`}
                    className='dob-input'
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    name='dob'
                  />
                </div>
                <div className='city-wrapper'>
                  <label className='city-label'>City:</label>
                  <input
                    id={`${id}-city-input`}
                    className='city-input'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    name='city'
                  />
                </div>
                <div className='state-wrapper'>
                  <label className='state-label'>State:</label>
                  <select
                    id={`${id}-state-select`}
                    className='state-select'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    name='state'
                    options={states}
                  />
                </div>
                <div className='avatar-wrapper'>
                  <label className='avatar-label'>Avatar:</label>
                  <input
                    id={`${id}-avatar-input`}
                    className='avatar-input'
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    name='avatar'
                  />
                </div>
                <div className='about-wrapper'>
                  <label className='about-label'>About:</label>
                  <textarea
                    id={`${id}-about-input`}
                    className='about-input'
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    name='about'
                  />
                </div>
              </div>
              <div className='button-container'>
                <div className='edit-button'>
                  <Button type='submit'>Submit</Button>
                </div>
                <div className='exit-button'>
                  <Link to='/'>
                    <Button>Exit</Button>
                  </Link>
                </div>
              </div>
            </form>
            <hr className='form-divider' />
            <UpdatePass user={user} id={id} setEditing={setEditing}/>
          </div>
          )}
      </div>

    </div>
  );
}
