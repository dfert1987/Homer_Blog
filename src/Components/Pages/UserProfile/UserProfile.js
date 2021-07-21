import React, {useState, useEffect} from 'react';
import states from './states';
import {Button} from '../../Button/Button';
import Footer from '../../Footer/Footer';
import {Link} from 'react-router-dom';
import './UserProfile.css';

export default function UserProfile() {
  const [storedUser, setStoredUser] = useState();
  const [editing, setEditing] = useState(false);
  const [twitter, setTwitter] = useState();
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState();
  const [dob, setDob] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [about, setAbout] = useState();

  useEffect(() => {
    setStoredUser(JSON.parse(localStorage.getItem('user')));
  }, [setStoredUser]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const setNew = (key) => {
      if (key === 'first') {
        if (first_name) {
          return first_name;
        }
        return storedUser.first_name;
      }
      if (key === 'last') {
        if (last_name) {
          return last_name;
        }
        return storedUser.last_name;
      }
      if (key === 'email') {
        if (email) {
          return email;
        }
        return storedUser.email;
      }
      if (key === 'twitter') {
        if (twitter) {
          return twitter;
        }
        return storedUser.twitter;
      }
      if (key === 'dob') {
        if (dob) {
          return dob;
        }
        return storedUser.dob;
      }
      if (key === 'avatar') {
        if (avatar) {
          return avatar;
        }
        return storedUser.avatar;
      }
      if (key === 'city') {
        if (city) {
          return city;
        }
        return storedUser.city;
      }
      if (key === 'state') {
        if (state) {
          return state;
        }
        return storedUser.state;
      }
      if (key === 'about') {
        if (about) {
          return about;
        }
        return storedUser.about;
      }
    };

    const newData = {
      first_name: setNew('first'),
      last_name: setNew('last'),
      email: setNew('email'),
      avatar: setNew('avatar'),
      twitter: setNew('twitter'),
      dob: setNew('dob'),
      city: setNew('city'),
      state: setNew('state'),
      about: setNew('about'),
      username: storedUser.username,
      id: storedUser.id,
      password_digest: storedUser.password_digest,
      admin: storedUser,
    };

    const response = await fetch(
      `http://localhost:3000/users/${storedUser.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      }
    );
    const data = await response.json();
    updateAndSwitch(data, newData);
  };

  const updateAndSwitch = (data, newData) => {
    localStorage.setItem('user', JSON.stringify(newData));
    setStoredUser(JSON.parse(localStorage.getItem('user')));
    setEditing(false);
  };

  const populate = (descriptor) => {
    if (!storedUser) {
      return null;
    }
    if (descriptor === 'avatar') {
      return storedUser.avatar;
    }
    if (descriptor === 'title') {
      return storedUser.username;
    }
    if (descriptor === 'firstName') {
      return storedUser.first_name;
    }
    if (descriptor === 'lastName') {
      return storedUser.last_name;
    }
    if (descriptor === 'email') {
      return storedUser.email;
    }
    if (descriptor === 'twitter') {
      return storedUser.twitter;
    }
    if (descriptor === 'dob') {
      return storedUser.dob;
    }
    if (descriptor === 'city') {
      return storedUser.city;
    }
    if (descriptor === 'state') {
      return storedUser.state;
    }
    if (descriptor === 'about') {
      return storedUser.about;
    }
    if (descriptor === 'admin' && storedUser.admin === true) {
      return '(Admin)';
    } else {
      return null;
    }
  };
  const id = 'profile';
  return (
    <div className='page-container'>
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
                    Edit Profile Info
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
                    <div className='first-column'>
                      <div className='first-name-wrapper'>
                        <label className='form-label'>First Name:</label>
                        <input
                          id={`${id}-first-name-input`}
                          className='first-name-input'
                          placeholder={
                            storedUser && storedUser.first_name
                              ? storedUser.first_name
                              : 'First Name...'
                          }
                          value={first_name || ''}
                          onChange={(e) => setFirst_name(e.target.value)}
                          name='first_name'
                        />
                      </div>
                      <div className='last-name-wrapper'>
                        <label className='form-label'>Last Name:</label>
                        <input
                          id={`${id}-last-name-input`}
                          className='last-name-input'
                          placeholder={
                            storedUser && storedUser.last_name
                              ? storedUser.last_name
                              : 'Last Name...'
                          }
                          value={last_name || ''}
                          onChange={(e) => setLast_name(e.target.value)}
                          name='last_name'
                        />
                      </div>
                      <div className='email-wrapper'>
                        <label className='form-label'>Email:</label>
                        <input
                          id={`${id}-email-input`}
                          className='email-input'
                          placeholder={
                            storedUser && storedUser.email
                              ? storedUser.email
                              : 'sombody@gmail.com...'
                          }
                          value={email || ''}
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
                            storedUser && storedUser.twitter
                              ? storedUser.twitter
                              : 'twitter.com/Joe-Fan'
                          }
                          value={twitter}
                          onChange={(e) => setTwitter(e.target.value)}
                          name='twitter'
                        />
                      </div>
                      <div className='about-wrapper'>
                        <label className='about-label'>About:</label>
                        <textarea
                          id={`${id}-about-input`}
                          className='about-input'
                          placeholder={
                            storedUser && storedUser.about
                              ? storedUser.about
                              : 'Tell us about yourself...'
                          }
                          value={about || ''}
                          onChange={(e) => setAbout(e.target.value)}
                          name='about'
                          rows='6'
                        />
                      </div>
                    </div>
                    <div className='right-column'>
                      <div className='dob-wrapper'>
                        <label className='form-label'>DOB:</label>
                        <input
                          id={`${id}-dob-input`}
                          className='dob-input'
                          value={dob || ''}
                          placeholder={
                            storedUser && storedUser.dob
                              ? storedUser.dob
                              : '01/10/1990'
                          }
                          onChange={(e) => setDob(e.target.value)}
                          name='dob'
                        />
                      </div>
                      <div className='city-wrapper'>
                        <label className='city-label'>City:</label>
                        <input
                          id={`${id}-city-input`}
                          className='city-input'
                          value={city || ''}
                          placeholder={
                            storedUser && storedUser.city
                              ? storedUser.city
                              : 'Chicago'
                          }
                          onChange={(e) => setCity(e.target.value)}
                          name='city'
                        />
                      </div>
                      <div className='state-wrapper'>
                        <label className='state-label'>State:</label>
                        <select
                          id={`${id}-state-select`}
                          className='state-select'
                          value={state || ''}
                          onChange={(e) => setState(e.target.value)}
                          name='state'
                        >
                          <option value='IL'>IL</option>
                          {states.states.map((state) => (
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
                            storedUser && storedUser.avatar
                              ? storedUser.avatar
                              : 'Some image link...'
                          }
                          value={avatar || ''}
                          onChange={(e) => setAvatar(e.target.value)}
                          name='avatar'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='button-container'>
                    <div className='edit-button'>
                      <Button type='submit'>Submit</Button>
                    </div>
                    <div className='Toggle-button'>
                    </div>
                    <div className='exit-button'>
                      <Link to='/'>
                        <Button>Exit</Button>
                      </Link>
                    </div>
                  </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
