import React, {useEffect, useState} from 'react';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';
import './HeroPage.css';
import '../../App.css';

function HeroSection() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser, localStorage.getItem('user')]);

  console.log(user);
  const logOut = () => {
    localStorage.setItem('user', JSON.stringify(''));
    setUser(null);
    window.location.reload(false)
  };

  return (
    <div className='hero-container'>
      <h1 className='title'>THE HOMER</h1>
      <h3 className='subtitle'>Meatballs Welcome</h3>
      <div className='hero-btns'>
        <Link to='/about'>
          <Button
            className='btn-right'
            buttonStyle='btn--bigblueprimary'
            buttonSize='btn--xlarge'
          >
            About
          </Button>
        </Link>
        {!user ? (
          <Link to='/login'>
            <Button
              className='btn-left'
              buttonStyle='btn--bigprimary'
              buttonSize='btn--xlarge'
            >
              Login
            </Button>
          </Link>
        ) : (
          <Button
            className='btn-left'
            buttonStyle='btn--bigprimary'
            buttonSize='btn--xlarge'
            onClick={(e) => logOut()}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
