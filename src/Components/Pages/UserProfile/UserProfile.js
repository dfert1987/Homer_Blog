import React, {useState, useEffect} from 'react';
import UpdatePass from './UpdatePass';
import {Button} from '../../Button/Button';
import {Link} from 'react-router-dom';

import './UserProfile.css';

export default function UserProfile() {
  const [user, setUser] = useState();
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState(user ? user.first_name : '');
  const [lastName, setLastName] = useState(user ? user.last_name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [city, setCity] = useState(user ? user.city : '');
  const [state, setState] = useState(user ? user.state : '');
  const [avatar, setAvatar] = useState(user ? user.avatar : '');
  const [dob, setDob] = useState(user ? user.dob : '');
  const [twitter, setTwitter] = useState(user ? user.twitter : '');
  const [about, setAbout] = useState(user ? user.about : '');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser]);

  const onSubmit = (e) => {
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      city: city,
      state: state,
      dob: dob,
      twitter: twitter,
      about: about,
      password: user.password_digest,
      username: user.username,
    };
    if (user) {
      fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
    }
    console.log(newUser);
    e.preventDefault();
    console.log(user);
  };

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
                <Button type='button' onClick={() => setEditing(true)}>
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
            <header className='header-container'>
              <h3 className='form-header'>Edit Your Personal Info</h3>
              <h4 className='form-subheader'>
                Only fill out fields you want updated
              </h4>
            </header>
            <form className='edit-profile-form' onSubmit={onSubmit}>
              <div className='input-wrapper'>
                <div className='first-name-wrapper'>
                  <label className='form-label'>First Name:</label>
                  <input
                    id={`${id}-first-name-input`}
                    className='first-name-input'
                    placeholder={
                      user.first_name ? user.first_name : 'First Name...'
                    }
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
                    placeholder={
                      user.last_name ? user.last_name : 'Last Name...'
                    }
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
                    placeholder={
                      user.email ? user.email : 'sombody@gmail.com...'
                    }
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
                    placeholder={
                      user.twitter ? user.twitter : 'twitter.com/Joe-Fan'
                    }
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
                    placeholder={user.dob ? user.dob : '01/10/1990'}
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
                    placeholder={user.city ? user.city : 'Chicago'}
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
                  >
                    <option value='IL'>IL</option>
                    {states.map((state) => (
                      <option value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div className='avatar-wrapper'>
                  <label className='avatar-label'>Avatar:</label>
                  <input
                    id={`${id}-avatar-input`}
                    className='avatar-input'
                    placeholder={
                      user.avatar ? user.avatar : 'Some image link...'
                    }
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
                    placeholder={
                      user.about ? user.about : 'Tell us about yourself...'
                    }
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
            <UpdatePass user={user} id={id} />
          </div>
        )}
      </div>
    </div>
  );
}
